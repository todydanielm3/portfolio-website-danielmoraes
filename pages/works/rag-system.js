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
  <Layout title="Sistema RAG">
    <Container>
      <Title>
        Sistema RAG com LLMs <Badge>2024</Badge>
      </Title>
      <P>
        Sistema de Retrieval Augmented Generation para responder perguntas sobre
        documentos corporativos usando embeddings vetoriais e modelos de linguagem
        de grande escala (LLMs). Implementa chunking inteligente, busca semântica
        e geração contextualizada de respostas.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python, LangChain, OpenAI GPT-4, Pinecone, FAISS</span>
        </ListItem>
        <ListItem>
          <Meta>Plataforma</Meta>
          <span>Cloud (Azure/AWS)</span>
        </ListItem>
        <ListItem>
          <Meta>Técnicas</Meta>
          <span>Vector Embeddings, Semantic Search, Prompt Engineering, RAG Architecture</span>
        </ListItem>
        <ListItem>
          <Meta>Funcionalidades</Meta>
          <span>Indexação de documentos, busca semântica, geração de respostas contextualizadas, API REST</span>
        </ListItem>
      </List>

      <P>
        O sistema processa milhares de documentos, converte em embeddings vetoriais
        e permite consultas em linguagem natural com respostas fundamentadas nos
        documentos originais. Reduz alucinações do LLM através de grounding baseado
        em recuperação de informações.
      </P>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
