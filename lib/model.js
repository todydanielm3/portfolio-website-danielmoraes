import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export function loadGLTFModel(
  scene,
  glbPath,
  options = { receiveShadow: true, castShadow: true }
) {
  const { receiveShadow, castShadow } = options
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader()
    
    // Timeout de 10 segundos para evitar espera infinita
    const timeout = setTimeout(() => {
      reject(new Error('Model loading timeout'))
    }, 10000)

    loader.load(
      glbPath,
      gltf => {
        clearTimeout(timeout)
        const obj = gltf.scene
        obj.name = 'dog'
        obj.position.y = 0
        obj.position.x = 0
        obj.receiveShadow = receiveShadow
        obj.castShadow = castShadow
        scene.add(obj)

        obj.traverse(function (child) {
          if (child.isMesh) {
            child.castShadow = castShadow
            child.receiveShadow = receiveShadow
          }
        })
        resolve(obj)
      },
      undefined,
      function (error) {
        clearTimeout(timeout)
        console.error('Error loading GLB model:', error)
        reject(error)
      }
    )
  })
}
