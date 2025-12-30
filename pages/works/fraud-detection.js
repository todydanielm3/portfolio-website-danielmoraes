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
  <Layout title="Detecção de Fraudes">
    <Container>
      <Title>
        Sistema de Detecção de Fraudes <Badge>2023-2024</Badge>
      </Title>
      <P>
        Sistema de machine learning para detecção de fraudes em tempo real
        utilizando técnicas de deep learning, análise de anomalias e
        processamento de grandes volumes de transações. Implementa modelos
        ensemble e aprendizado supervisionado/não-supervisionado.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python, TensorFlow, PyTorch, Scikit-learn, XGBoost</span>
        </ListItem>
        <ListItem>
          <Meta>Técnicas</Meta>
          <span>Neural Networks, Isolation Forest, SMOTE, Feature Engineering</span>
        </ListItem>
        <ListItem>
          <Meta>Infraestrutura</Meta>
          <span>Apache Kafka, Redis, PostgreSQL, Docker, Kubernetes</span>
        </ListItem>
        <ListItem>
          <Meta>Métricas</Meta>
          <span>Precision: 94%, Recall: 89%, F1-Score: 91.5%</span>
        </ListItem>
        <ListItem>
          <Meta>Performance</Meta>
          <span>Processamento de 10k+ transações/segundo com latência &lt;100ms</span>
        </ListItem>
      </List>

      <P>
        O sistema trata o desbalanceamento de classes, realiza feature engineering
        avançado e implementa pipeline MLOps completo para monitoramento contínuo
        e retreinamento automático. Reduz fraudes em 67% mantendo baixa taxa de
        falsos positivos.
      </P>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
