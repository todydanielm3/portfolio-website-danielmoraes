import sys
import numpy as np
import trimesh
from scipy.spatial.transform import Rotation

def set_mat(mat, base_rgba, metallic=0.0, rough=0.6, emissive=None):
    """Define material PBR realista"""
    mat.baseColorFactor = np.array(base_rgba, dtype=float)
    mat.metallicFactor = float(metallic)
    mat.roughnessFactor = float(rough)
    if emissive is not None:
        mat.emissiveFactor = np.array(emissive, dtype=float)

def create_curved_roof(width, depth, height, curve_factor=0.15):
    """Cria telhado curvado estilo pagoda com eaves elevados"""
    segments = 20
    vertices = []
    faces = []
    
    # Criar superfície curvada do telhado
    for i in range(segments + 1):
        u = i / segments
        for j in range(segments + 1):
            v = j / segments
            
            # Posição base
            x = (u - 0.5) * width
            z = (v - 0.5) * depth
            
            # Distância do centro para criar curvatura
            dist_center = np.sqrt((u - 0.5)**2 + (v - 0.5)**2) * 2
            
            # Curvatura para cima nas bordas (eaves elevados)
            y = height - curve_factor * (1 - dist_center**2)
            
            # Elevar as pontas (característico de telhados chineses)
            edge_factor = max(abs(u - 0.5), abs(v - 0.5)) * 2
            if edge_factor > 0.7:
                y += curve_factor * (edge_factor - 0.7) * 2
            
            vertices.append([x, y, z])
    
    # Criar faces
    for i in range(segments):
        for j in range(segments):
            v0 = i * (segments + 1) + j
            v1 = v0 + 1
            v2 = v0 + segments + 1
            v3 = v2 + 1
            
            faces.append([v0, v2, v1])
            faces.append([v1, v2, v3])
    
    return trimesh.Trimesh(vertices=vertices, faces=faces)

def create_wooden_beam(length, thickness=0.15):
    """Cria viga de madeira estrutural"""
    return trimesh.creation.box(extents=[thickness, thickness, length])

def create_column(height, diameter=0.25):
    """Cria coluna cilíndrica"""
    return trimesh.creation.cylinder(radius=diameter/2, height=height, sections=12)

def create_red_lantern(size=0.3):
    """Cria lanterna vermelha tradicional cilíndrica"""
    # Corpo principal da lanterna
    body = trimesh.creation.cylinder(radius=size/2, height=size*1.2, sections=16)
    
    # Tampa superior
    top_cap = trimesh.creation.cylinder(radius=size/3, height=size*0.15, sections=16)
    top_cap.apply_translation([0, size*0.6 + size*0.075, 0])
    
    # Tampa inferior
    bottom_cap = trimesh.creation.cylinder(radius=size/3, height=size*0.15, sections=16)
    bottom_cap.apply_translation([0, -size*0.6 - size*0.075, 0])
    
    # Tassel (franja decorativa)
    tassel = trimesh.creation.cylinder(radius=size*0.08, height=size*0.4, sections=8)
    tassel.apply_translation([0, -size*0.75 - size*0.2, 0])
    
    return trimesh.util.concatenate([body, top_cap, bottom_cap, tassel])

def create_decorative_bracket(size=0.2):
    """Cria Dougong (suporte decorativo em camadas)"""
    brackets = []
    layers = 3
    for i in range(layers):
        scale = 1 + i * 0.3
        bracket = trimesh.creation.box(extents=[size*scale, size*0.3, size*scale])
        bracket.apply_translation([0, i * size * 0.25, 0])
        brackets.append(bracket)
    return trimesh.util.concatenate(brackets)

def create_siheyuan_house(width=6.0, depth=4.0, height=3.0):
    """
    Cria uma casa tradicional chinesa Siheyuan completa
    Arquitetura simétrica com telhado curvo e elementos estruturais
    """
    parts = []
    
    # === ESTRUTURA PRINCIPAL ===
    # Paredes principais (madeira escura)
    wall_thickness = 0.15
    wall_height = height * 0.6
    
    # Parede frontal (com abertura para porta)
    front_left = trimesh.creation.box(extents=[width*0.35, wall_height, wall_thickness])
    front_left.apply_translation([-width*0.25, wall_height/2, depth/2])
    
    front_right = trimesh.creation.box(extents=[width*0.35, wall_height, wall_thickness])
    front_right.apply_translation([width*0.25, wall_height/2, depth/2])
    
    # Paredes laterais
    left_wall = trimesh.creation.box(extents=[wall_thickness, wall_height, depth])
    left_wall.apply_translation([-width/2, wall_height/2, 0])
    
    right_wall = trimesh.creation.box(extents=[wall_thickness, wall_height, depth])
    right_wall.apply_translation([width/2, wall_height/2, 0])
    
    # Parede traseira
    back_wall = trimesh.creation.box(extents=[width, wall_height, wall_thickness])
    back_wall.apply_translation([0, wall_height/2, -depth/2])
    
    # === COLUNAS ESTRUTURAIS (vermelhas) ===
    column_height = wall_height * 1.1
    column_radius = 0.18
    
    columns_positions = [
        [-width*0.4, 0, depth*0.45],  # front-left
        [width*0.4, 0, depth*0.45],   # front-right
        [-width*0.45, 0, 0],           # mid-left
        [width*0.45, 0, 0],            # mid-right
        [-width*0.4, 0, -depth*0.45],  # back-left
        [width*0.4, 0, -depth*0.45],   # back-right
    ]
    
    columns = []
    for pos in columns_positions:
        col = create_column(column_height, column_radius*2)
        col.apply_translation([pos[0], column_height/2, pos[2]])
        columns.append(col)
    
    # === VIGAS HORIZONTAIS (madeira escura) ===
    beam_size = 0.2
    
    # Vigas superiores conectando colunas
    front_beam = trimesh.creation.box(extents=[width*0.9, beam_size, beam_size])
    front_beam.apply_translation([0, column_height, depth*0.45])
    
    back_beam = trimesh.creation.box(extents=[width*0.9, beam_size, beam_size])
    back_beam.apply_translation([0, column_height, -depth*0.45])
    
    left_beam = trimesh.creation.box(extents=[beam_size, beam_size, depth*0.9])
    left_beam.apply_translation([-width*0.4, column_height, 0])
    
    right_beam = trimesh.creation.box(extents=[beam_size, beam_size, depth*0.9])
    right_beam.apply_translation([width*0.4, column_height, 0])
    
    # === DOUGONG (suportes decorativos) ===
    brackets = []
    for pos in columns_positions:
        bracket = create_decorative_bracket(size=0.25)
        bracket.apply_translation([pos[0], column_height + 0.15, pos[2]])
        brackets.append(bracket)
    
    # === TELHADO CURVO ===
    roof_width = width * 1.2
    roof_depth = depth * 1.2
    roof_height = height * 0.85
    roof = create_curved_roof(roof_width, roof_depth, roof_height, curve_factor=0.4)
    roof.apply_translation([0, column_height, 0])
    
    # Sub-telhado (camada inferior)
    sub_roof = create_curved_roof(roof_width * 0.95, roof_depth * 0.95, roof_height - 0.3, curve_factor=0.35)
    sub_roof.apply_translation([0, column_height - 0.15, 0])
    
    # === JUNTAR TUDO ===
    structure_parts = [front_left, front_right, left_wall, right_wall, back_wall]
    structure_parts.extend(columns)
    structure_parts.extend([front_beam, back_beam, left_beam, right_beam])
    structure_parts.extend(brackets)
    
    return {
        'structure': structure_parts,
        'roof': [roof, sub_roof],
        'columns': columns,
        'beams': [front_beam, back_beam, left_beam, right_beam]
    }

def create_border_collie(size=0.6):
    """Cria um Border Collie simplificado (preto e branco)"""
    parts = []
    
    # Corpo (preto)
    body = trimesh.creation.box(extents=[size*0.8, size*0.5, size*0.4])
    body.apply_translation([0, size*0.25, 0])
    
    # Cabeça (branca na frente, preta no topo)
    head = trimesh.creation.box(extents=[size*0.4, size*0.35, size*0.35])
    head.apply_translation([size*0.5, size*0.35, 0])
    
    # Focinho (branco)
    snout = trimesh.creation.box(extents=[size*0.25, size*0.2, size*0.25])
    snout.apply_translation([size*0.65, size*0.25, 0])
    
    # Orelhas (pretas)
    left_ear = trimesh.creation.box(extents=[size*0.15, size*0.25, size*0.08])
    left_ear.apply_translation([size*0.45, size*0.5, size*0.15])
    
    right_ear = trimesh.creation.box(extents=[size*0.15, size*0.25, size*0.08])
    right_ear.apply_translation([size*0.45, size*0.5, -size*0.15])
    
    # Pernas (pretas com patas brancas)
    leg_height = size*0.4
    leg_thick = size*0.12
    
    legs_positions = [
        [size*0.25, 0, size*0.15],   # front-left
        [size*0.25, 0, -size*0.15],  # front-right
        [-size*0.25, 0, size*0.15],  # back-left
        [-size*0.25, 0, -size*0.15], # back-right
    ]
    
    for pos in legs_positions:
        leg = trimesh.creation.cylinder(radius=leg_thick/2, height=leg_height, sections=8)
        leg.apply_translation([pos[0], leg_height/2, pos[2]])
        parts.append(leg)
    
    # Cauda (preta com ponta branca)
    tail = trimesh.creation.cylinder(radius=size*0.08, height=size*0.5, sections=8)
    rot_matrix = Rotation.from_euler('z', 60, degrees=True).as_matrix()
    tail.apply_transform(trimesh.transformations.rotation_matrix(np.radians(60), [0, 0, 1]))
    tail.apply_translation([-size*0.5, size*0.4, 0])
    
    parts.extend([body, head, snout, left_ear, right_ear, tail])
    
    return trimesh.util.concatenate(parts)

def create_chinese_flag(pole_height=3.0, flag_width=0.8, flag_height=0.6):
    """Cria bandeira da China com mastro"""
    # Mastro (cinza metalizado)
    pole = trimesh.creation.cylinder(radius=0.04, height=pole_height, sections=16)
    pole.apply_translation([0, pole_height/2, 0])
    
    # Bandeira (vermelho)
    flag = trimesh.creation.box(extents=[flag_width, flag_height, 0.02])
    flag.apply_translation([flag_width/2, pole_height - flag_height/2, 0])
    
    # Estrelas (amarelo) - simplificadas como pequenas boxes
    star_size = flag_height * 0.15
    
    # Estrela grande
    big_star = trimesh.creation.box(extents=[star_size*1.2, star_size*1.2, 0.03])
    big_star.apply_translation([flag_width*0.25, pole_height - flag_height*0.25, 0.02])
    
    # 4 estrelas pequenas
    small_stars = []
    small_positions = [
        [flag_width*0.45, pole_height - flag_height*0.15],
        [flag_width*0.5, pole_height - flag_height*0.3],
        [flag_width*0.5, pole_height - flag_height*0.45],
        [flag_width*0.45, pole_height - flag_height*0.6],
    ]
    
    for pos in small_positions:
        star = trimesh.creation.box(extents=[star_size*0.6, star_size*0.6, 0.03])
        star.apply_translation([pos[0], pos[1], 0.02])
        small_stars.append(star)
    
    return {
        'pole': pole,
        'flag': flag,
        'big_star': big_star,
        'small_stars': small_stars
    }

def main(in_path: str, out_path: str):
    """
    Cria uma cena completa com casa tradicional chinesa Siheyuan
    """
    print(f"🏮 Criando casa tradicional chinesa...")
    
    scene = trimesh.Scene()
    
    # === CRIAR CASA PRINCIPAL ===
    house = create_siheyuan_house(width=6.0, depth=4.5, height=3.2)
    
    # Paredes e estrutura (madeira escura: #3D2817)
    mat_dark_wood = trimesh.visual.material.PBRMaterial()
    set_mat(mat_dark_wood, [0.24, 0.16, 0.09, 1.0], metallic=0.0, rough=0.8)
    
    for part in house['structure']:
        part.visual.material = mat_dark_wood
        scene.add_geometry(part)
    
    # Telhado (telhas cerâmicas cinza-escuro: #4A4A4A)
    mat_roof = trimesh.visual.material.PBRMaterial()
    set_mat(mat_roof, [0.29, 0.29, 0.29, 1.0], metallic=0.1, rough=0.4)
    
    for roof_part in house['roof']:
        roof_part.visual.material = mat_roof
        scene.add_geometry(roof_part)
    
    # Colunas (vermelho tradicional: #C8102E)
    mat_red_column = trimesh.visual.material.PBRMaterial()
    set_mat(mat_red_column, [0.78, 0.06, 0.18, 1.0], metallic=0.05, rough=0.6)
    
    for col in house['columns']:
        col.visual.material = mat_red_column
    
    # Vigas superiores (madeira com acabamento dourado)
    mat_gold_wood = trimesh.visual.material.PBRMaterial()
    set_mat(mat_gold_wood, [0.72, 0.52, 0.04, 1.0], metallic=0.3, rough=0.5)
    
    for beam in house['beams']:
        beam.visual.material = mat_gold_wood
    
    # === LANTERNAS VERMELHAS (6 unidades) ===
    mat_red_lantern = trimesh.visual.material.PBRMaterial()
    set_mat(mat_red_lantern, [0.9, 0.1, 0.1, 1.0], metallic=0.0, rough=0.3, 
            emissive=[0.8, 0.2, 0.0])
    
    lantern_positions = [
        [-2.5, 2.8, 2.5],   # frente-esquerda
        [2.5, 2.8, 2.5],    # frente-direita
        [-3.2, 2.8, 0],     # meio-esquerda
        [3.2, 2.8, 0],      # meio-direita
        [-2.5, 2.8, -2.5],  # trás-esquerda
        [2.5, 2.8, -2.5],   # trás-direita
    ]
    
    for pos in lantern_positions:
        lantern = create_red_lantern(size=0.35)
        lantern.apply_translation(pos)
        lantern.visual.material = mat_red_lantern
        scene.add_geometry(lantern)
    
    print(f"  ✓ Casa estrutural com 6 lanternas")
    
    # === BORDER COLLIE BRINCANDO ===
    mat_black_fur = trimesh.visual.material.PBRMaterial()
    set_mat(mat_black_fur, [0.1, 0.1, 0.1, 1.0], metallic=0.0, rough=0.9)
    
    dog = create_border_collie(size=0.7)
    # Posicionar o cachorro no pátio, levemente rotacionado
    rot_matrix = trimesh.transformations.rotation_matrix(np.radians(25), [0, 1, 0])
    dog.apply_transform(rot_matrix)
    dog.apply_translation([1.5, 0, 1.2])
    dog.visual.material = mat_black_fur
    scene.add_geometry(dog)
    
    print(f"  ✓ Border Collie adicionado")
    
    # === BANDEIRA DA CHINA ===
    flag_obj = create_chinese_flag(pole_height=3.5, flag_width=1.0, flag_height=0.7)
    
    # Mastro (cinza metalizado)
    mat_pole = trimesh.visual.material.PBRMaterial()
    set_mat(mat_pole, [0.7, 0.7, 0.7, 1.0], metallic=0.8, rough=0.2)
    flag_obj['pole'].visual.material = mat_pole
    
    # Bandeira vermelha
    mat_flag_red = trimesh.visual.material.PBRMaterial()
    set_mat(mat_flag_red, [0.87, 0.11, 0.13, 1.0], metallic=0.0, rough=0.6)
    flag_obj['flag'].visual.material = mat_flag_red
    
    # Estrelas amarelas
    mat_yellow = trimesh.visual.material.PBRMaterial()
    set_mat(mat_yellow, [1.0, 0.84, 0.0, 1.0], metallic=0.5, rough=0.3)
    flag_obj['big_star'].visual.material = mat_yellow
    
    for star in flag_obj['small_stars']:
        star.visual.material = mat_yellow
    
    # Posicionar bandeira no pátio
    for key, obj in flag_obj.items():
        obj.apply_translation([-3.5, 0, 2.0])
        scene.add_geometry(obj)
    
    print(f"  ✓ Bandeira da China hasteada")
    
    # === PEDRAS DECORATIVAS ===
    mat_stone = trimesh.visual.material.PBRMaterial()
    set_mat(mat_stone, [0.5, 0.5, 0.45, 1.0], metallic=0.0, rough=0.9)
    
    stone_positions = [
        [2.8, 0.15, 1.5],
        [-2.5, 0.2, -1.8],
        [3.2, 0.18, -0.5],
        [-1.8, 0.16, 2.2],
        [0.5, 0.14, -2.5],
    ]
    
    for pos in stone_positions:
        stone = create_decorative_stone(size=np.random.uniform(0.25, 0.4))
        stone.apply_translation(pos)
        stone.visual.material = mat_stone
        scene.add_geometry(stone)
    
    print(f"  ✓ 5 pedras decorativas")
    
    # === CHÃO DO PÁTIO (pedras cinzas) ===
    ground = trimesh.creation.box(extents=[12, 0.05, 10])
    ground.apply_translation([0, -0.025, 0])
    
    mat_ground = trimesh.visual.material.PBRMaterial()
    set_mat(mat_ground, [0.45, 0.42, 0.38, 1.0], metallic=0.0, rough=0.8)
    ground.visual.material = mat_ground
    scene.add_geometry(ground)
    
    print(f"  ✓ Pátio de pedras")
    
    # === EXPORTAR ===
    print(f"\n💾 Exportando para {out_path}...")
    scene.export(out_path)
    
    # Estatísticas
    total_triangles = sum(len(g.faces) if hasattr(g, 'faces') else 0 
                         for g in scene.geometry.values())
    print(f"\n✨ Cena completa criada!")
    print(f"   • Total de triângulos: {total_triangles:,}")
    print(f"   • Geometrias: {len(scene.geometry)}")
    print(f"   • Arquivo: {out_path}")

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Uso: python orientalize_glb.py <input.glb> <output.glb>")
        sys.exit(1)
    
    in_file = sys.argv[1]
    out_file = sys.argv[2]
    
    main(in_file, out_file)
    scene = trimesh.load(in_path, force="scene")

    # ===== Preset "chinesa leve" (Opção 1) =====
    for geom in scene.geometry.values():
        mat = getattr(geom.visual, "material", None)
        if mat is None:
            continue

        name = (mat.name or "").lower()

        if "drevo" in name:  # madeira
            # madeira laqueada escura (vermelho amadeirado)
            set_mat(mat, [0.35, 0.10, 0.09, 1.0], metallic=0.05, rough=0.45)

        elif "tehl" in name:  # telha / tijolo
            # telha cerâmica (vermelho queimado)
            set_mat(mat, [0.55, 0.20, 0.15, 1.0], metallic=0.0, rough=0.75)

        elif "omietka" in name:  # reboco
            # reboco quente (off-white levemente amarelado)
            set_mat(mat, [0.92, 0.90, 0.83, 1.0], metallic=0.0, rough=0.90)

        elif "sklo" in name or "glass" in name:  # vidro
            set_mat(mat, [0.85, 0.95, 1.0, 0.25], metallic=0.0, rough=0.05)
            mat.alphaMode = "BLEND"

        elif "komin" in name:  # chaminé
            set_mat(mat, [0.18, 0.18, 0.18, 1.0], metallic=0.0, rough=0.85)

        elif "soil" in name:  # solo
            set_mat(mat, [0.40, 0.32, 0.22, 1.0], metallic=0.0, rough=1.0)

    # ===== Adiciona 2 lanternas simples na "frente" da casa =====
    # Usa bounds do volume principal (Cube.204 = omietka) para posicionar
    if "Cube.204" in scene.geometry and "Plane.002" in scene.geometry:
        house_bounds = scene.geometry["Cube.204"].bounds
        ground_y = scene.geometry["Plane.002"].bounds[1, 1]  # topo do terreno

        x_center = (house_bounds[0, 0] + house_bounds[1, 0]) / 2
        front_z = house_bounds[1, 2] + 0.25  # um pouco à frente

        lantern_h = 0.8
        lantern_w = 0.25
        offset = 0.8  # distância para esquerda/direita

        lantern_mat = trimesh.visual.material.PBRMaterial(
            name="lantern",
            baseColorFactor=[0.55, 0.08, 0.08, 1.0],  # vermelho
            metallicFactor=0.0,
            roughnessFactor=0.6,
            emissiveFactor=[0.0, 0.0, 0.0],
        )

        light_mat = trimesh.visual.material.PBRMaterial(
            name="lantern_light",
            baseColorFactor=[1.0, 0.92, 0.70, 0.6],
            metallicFactor=0.0,
            roughnessFactor=0.2,
            emissiveFactor=[1.0, 0.85, 0.50],  # “brilho”
        )

        for side in (-1, 1):
            mesh = lantern_mesh(lantern_h, lantern_w)
            mesh.visual = trimesh.visual.TextureVisuals(material=lantern_mat)
            mesh.apply_translation([x_center + side * offset, ground_y, front_z])
            scene.add_geometry(mesh, node_name=f"Lantern_{'L' if side==-1 else 'R'}")

            core = trimesh.creation.box(extents=[lantern_w * 0.7, lantern_h * 0.22, lantern_w * 0.7])
            core.visual = trimesh.visual.TextureVisuals(material=light_mat)
            core.apply_translation([x_center + side * offset, ground_y + lantern_h * 0.70, front_z])
            scene.add_geometry(core, node_name=f"LanternLight_{'L' if side==-1 else 'R'}")

    scene.export(out_path)
    print(f"OK: exportado para {out_path}")

if __name__ == "__main__":
    in_path = sys.argv[1] if len(sys.argv) > 1 else "dog.glb"
    out_path = sys.argv[2] if len(sys.argv) > 2 else "dog_oriental.glb"
    main(in_path, out_path)