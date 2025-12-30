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
  <Layout title="Transformers FineTuning">
    <Container>
      <Title>
        Fine-Tuning de Transformers <Badge>2024</Badge>
      </Title>
      <P>
        Fine-tuning de modelos Transformer (BERT, GPT, T5) para tarefas específicas
        de NLP incluindo classificação de texto, NER, sumarização e geração de texto.
        Implementa técnicas de otimização como LoRA, QLoRA e adaptação eficiente
        de parâmetros (PEFT).
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python, HuggingFace Transformers, PyTorch, PEFT, bitsandbytes</span>
        </ListItem>
        <ListItem>
          <Meta>Modelos</Meta>
          <span>BERT, RoBERTa, GPT-2, T5, LLaMA 2, Mistral</span>
        </ListItem>
        <ListItem>
          <Meta>Técnicas</Meta>
          <span>LoRA, QLoRA, Parameter-Efficient Fine-Tuning, Quantization</span>
        </ListItem>
        <ListItem>
          <Meta>Aplicações</Meta>
          <span>Sentiment Analysis, Named Entity Recognition, Text Summarization</span>
        </ListItem>
        <ListItem>
          <Meta>Performance</Meta>
          <span>Redução de 80% de parâmetros treináveis com LoRA mantendo 98% da performance</span>
        </ListItem>
      </List>

      <P>
        Otimização de modelos grandes para hardware limitado usando quantização
        e técnicas PEFT. Permite fine-tuning de modelos de bilhões de parâmetros
        em GPUs consumer (RTX 4090, A6000) com resultados competitivos.
      </P>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
