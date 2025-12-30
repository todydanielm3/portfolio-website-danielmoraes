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
  <Layout title="Chatbot Multimodal">
    <Container>
      <Title>
        Chatbot Multimodal com Visão <Badge>2024</Badge>
      </Title>
      <P>
        Chatbot inteligente capaz de processar texto e imagens simultaneamente,
        utilizando modelos de linguagem multimodais (GPT-4V, Claude 3) e técnicas
        de visão computacional. Permite interações naturais com upload de imagens,
        análise visual e respostas contextualizadas.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python, GPT-4 Vision, CLIP, Streamlit, FastAPI</span>
        </ListItem>
        <ListItem>
          <Meta>Modelos</Meta>
          <span>GPT-4V, Claude 3 Opus, BLIP-2, Gemini Pro Vision</span>
        </ListItem>
        <ListItem>
          <Meta>Capacidades</Meta>
          <span>Análise de imagens, OCR, detecção de objetos, descrição de cenas</span>
        </ListItem>
        <ListItem>
          <Meta>Interface</Meta>
          <span>Web App (Streamlit), API REST, WebSockets para streaming</span>
        </ListItem>
        <ListItem>
          <Meta>Features</Meta>
          <span>Upload de múltiplas imagens, histórico de conversas, export de análises</span>
        </ListItem>
      </List>

      <P>
        O chatbot combina compreensão de linguagem natural com análise visual
        profunda, permitindo responder perguntas sobre imagens, extrair texto,
        identificar objetos e gerar descrições detalhadas. Ideal para aplicações
        de suporte ao cliente, análise de documentos visuais e assistência técnica.
      </P>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
