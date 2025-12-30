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
  <Layout title="Pipeline MLOps">
    <Container>
      <Title>
        Pipeline MLOps Completo <Badge>2023-2025</Badge>
      </Title>
      <P>
        Infraestrutura completa de MLOps para automação do ciclo de vida de
        modelos de machine learning, incluindo versionamento de dados/modelos,
        CI/CD para ML, monitoramento em produção e retreinamento automático.
        Implementa best practices de DevOps aplicadas a Machine Learning.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>MLflow, DVC, Airflow, Docker, Kubernetes, Terraform</span>
        </ListItem>
        <ListItem>
          <Meta>Cloud</Meta>
          <span>Azure ML, AWS SageMaker, GCP Vertex AI</span>
        </ListItem>
        <ListItem>
          <Meta>CI/CD</Meta>
          <span>GitHub Actions, Jenkins, ArgoCD</span>
        </ListItem>
        <ListItem>
          <Meta>Monitoramento</Meta>
          <span>Prometheus, Grafana, Evidently AI, Whylabs</span>
        </ListItem>
        <ListItem>
          <Meta>Componentes</Meta>
          <span>Feature Store, Model Registry, Experiment Tracking, A/B Testing</span>
        </ListItem>
      </List>

      <P>
        O pipeline automatiza todo o fluxo desde coleta de dados até deploy em
        produção, com monitoramento contínuo de data drift, model drift e performance
        metrics. Permite rollback rápido, testes A/B automáticos e retreinamento
        baseado em triggers de performance. Reduz tempo de deploy de semanas para horas.
      </P>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
