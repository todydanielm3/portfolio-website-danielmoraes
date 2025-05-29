// pages/works.tsx  (ou pages/index.tsx)
// ─────────────────────────────────────────────────────────
import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout    from '../components/layouts/article'
import Section   from '../components/section'
import { WorkGridItem } from '../components/grid-item'

// ─── Imagens ─────────────────────────────────────────────
import thumbBuscador   from '../public/images/works/buscador.png'      //  ← NOVO
import thumbInkdrop    from '../public/images/works/degrada.png'
import thumbWalknote   from '../public/images/works/processa.png'
import thumbDash       from '../public/images/works/dash.png'
import thumbM1         from '../public/images/works/m1.png'
import thumbDeep       from '../public/images/works/deepface-icon.png'
import thumbHaskell    from '../public/images/works/haskell.png'

// ─── Componente ──────────────────────────────────────────
const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      {/* ───────────────────── Projetos em Destaque ───────────────────── */}
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        {/* 1) Buscador Inteligente (NOVO) */}
        <Section delay={0.1}>
          <WorkGridItem
            id="buscadores"
            title="Buscador Inteligente"
            thumbnail={thumbBuscador}
            link="https://adaptainfra.streamlit.app"
          >
            Plataforma em&nbsp;Streamlit que integra pesquisas na OpenAlex,
            Biblioteca OLACEFS e documentos do IDI, além de buscador de
            especialistas e chatbot Gemini.
          </WorkGridItem>
        </Section>

        {/* 2) Gerador de Degradações */}
        <Section delay={0.1}>
          <WorkGridItem
            id="labdegrad"
            title="Gerador de Degradações em Python"
            thumbnail={thumbInkdrop}
          >
            Laboratório para geração&nbsp;/ análise de degradações de imagens.
          </WorkGridItem>
        </Section>

        {/* 3) Filtros em Haskell */}
        <Section delay={0.2}>
          <WorkGridItem
            id="haskell-imagens"
            title="Processamento de Imagens em Haskell"
            thumbnail={thumbHaskell}
            link="https://github.com/todydanielm3/projeto_haskell"
          >
            Implementação de filtros (Gauss, etc.) usando JuicyPixels.
          </WorkGridItem>
        </Section>

        {/* 4) Processamento PY */}
        <Section delay={0.2}>
          <WorkGridItem
            id="imageprocessing"
            title="image_processing_PY"
            thumbnail={thumbWalknote}
          >
            Geração de degradações para prototipagem em ML.
          </WorkGridItem>
        </Section>

        {/* 5) Dash / AWS */}
        <Section delay={0.3}>
          <WorkGridItem
            id="dash_aws"
            title="Dashboards → Dash/AWS"
            thumbnail={thumbDash}
          >
            Saúde pública: análise e Dash + Plotly em nuvem (AWS).
          </WorkGridItem>
        </Section>

        {/* 6) DeepFace */}
        <Section delay={0.3}>
          <WorkGridItem
            id="deepface"
            title="DeepFace RecFac"
            thumbnail={thumbDeep}
            link="https://github.com/todydanielm3/deepface_recfac_deg"
          >
            Modelos de reconhecimento facial baseados em Deep Learning.
          </WorkGridItem>
        </Section>

        {/* 7) Redes / Sockets */}
        <Section delay={0.4}>
          <WorkGridItem
            id="redes"
            title="Redes de Comunicação em Python"
            thumbnail={thumbWalknote}
          >
            Implementação P2P utilizando Socket.
          </WorkGridItem>
        </Section>

        {/* 8) Invoices Automation */}
        <Section delay={0.4}>
          <WorkGridItem
            id="invoices"
            title="Invoices Automation"
            thumbnail={thumbWalknote}
          >
            Extração de dados de faturas bancárias (PDF → CSV/JSON).
          </WorkGridItem>
        </Section>

        {/* 9) Pysus */}
        <Section delay={0.5}>
          <WorkGridItem
            id="pysus"
            title="Pysus – Instituto de Gestão da Saúde"
            thumbnail={thumbWalknote}
          >
            Coleta e análise de dados públicos da saúde.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      {/* ───────────────────── Seção Security ─────────────────────────── */}
      <Section>
        <Divider my={8} />
        <Heading as="h3" fontSize={20} mb={4}>
          Security Works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.1}>
          <WorkGridItem
            id="arm"
            thumbnail={thumbM1}
            title="M1 Assembly – Apple Silicon"
          >
            Implementação da cifra de Vigenère em Assembly (M1).
          </WorkGridItem>
        </Section>

        <Section delay={0.2}>
          <WorkGridItem
            id="python-security"
            thumbnail={thumbWalknote}
            title="Python Security"
          >
            Ferramentas de segurança ofensiva em Python.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
