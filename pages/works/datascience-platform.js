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
  <Layout title="Data Science Platform">
    <Container>
      <Title>
        Plataforma de Data Science <Badge>2023-2025</Badge>
      </Title>
      <P>
        Plataforma completa para análise de dados, visualização interativa e
        machine learning. Integra pipelines de ETL, notebooks colaborativos,
        dashboards em tempo real e APIs de predição. Processa milhões de registros
        diariamente com arquitetura escalável.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python, Pandas, NumPy, Plotly Dash, Streamlit, FastAPI</span>
        </ListItem>
        <ListItem>
          <Meta>Data Processing</Meta>
          <span>Apache Spark, Dask, Polars, DuckDB</span>
        </ListItem>
        <ListItem>
          <Meta>Visualização</Meta>
          <span>Plotly, Dash, Streamlit, Matplotlib, Seaborn</span>
        </ListItem>
        <ListItem>
          <Meta>Databases</Meta>
          <span>PostgreSQL, MongoDB, Redis, ClickHouse</span>
        </ListItem>
        <ListItem>
          <Meta>Cloud</Meta>
          <span>AWS (S3, Lambda, EC2), Azure (Blob, Functions), GCP</span>
        </ListItem>
      </List>

      <P>
        A plataforma permite análise exploratória de dados, criação de dashboards
        interativos, treinamento de modelos ML e deploy de APIs de predição.
        Suporta colaboração em tempo real, controle de versão de datasets e
        integração com ferramentas de BI (Power BI, Tableau).
      </P>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
