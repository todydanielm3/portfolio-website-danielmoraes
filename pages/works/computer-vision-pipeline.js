import {
  Container,
  Badge,
  Link,
  List,
  ListItem
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Computer Vision Pipeline">
    <Container>
      <Title>
        Pipeline de Visão Computacional <Badge>2023-2024</Badge>
      </Title>
      <P>
        Sistema completo de visão computacional para detecção de objetos,
        segmentação semântica e reconhecimento facial em tempo real.
        Implementa arquiteturas estado-da-arte (YOLO, Mask R-CNN, DeepFace)
        otimizadas para edge devices e cloud.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python, OpenCV, PyTorch, TensorFlow, ONNX</span>
        </ListItem>
        <ListItem>
          <Meta>Modelos</Meta>
          <span>YOLOv8, Mask R-CNN, EfficientDet, ResNet, FaceNet</span>
        </ListItem>
        <ListItem>
          <Meta>Deploy</Meta>
          <span>TensorRT, ONNX Runtime, CoreML, TensorFlow Lite</span>
        </ListItem>
        <ListItem>
          <Meta>Performance</Meta>
          <span>60+ FPS em edge devices (Jetson Nano), 120+ FPS em cloud (A100)</span>
        </ListItem>
        <ListItem>
          <Meta>Aplicações</Meta>
          <span>Detecção de objetos, segmentação, reconhecimento facial, tracking</span>
        </ListItem>
      </List>

      <P>
        Pipeline otimizado para baixa latência com técnicas de quantização,
        pruning e knowledge distillation. Suporta processamento em batch e
        streaming de vídeo com escalabilidade horizontal usando Kubernetes.
      </P>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
