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
  <Layout title="Agente Autônomo">
    <Container>
      <Title>
        Agente Autônomo de IA <Badge>2024-2025</Badge>
      </Title>
      <P>
        Agente inteligente baseado em LLMs capaz de planejar, executar tarefas
        complexas e interagir com ferramentas externas. Utiliza arquitetura
        ReAct (Reasoning + Acting) para tomada de decisões autônomas e resolução
        de problemas multi-etapas.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python, LangChain, AutoGPT, GPT-4, CrewAI</span>
        </ListItem>
        <ListItem>
          <Meta>Arquitetura</Meta>
          <span>ReAct, Chain-of-Thought, Tool Calling, Memory Systems</span>
        </ListItem>
        <ListItem>
          <Meta>Integrações</Meta>
          <span>APIs REST, Selenium, Beautiful Soup, Database Connectors</span>
        </ListItem>
        <ListItem>
          <Meta>Capacidades</Meta>
          <span>Planejamento, Web Scraping, Análise de Dados, Geração de Relatórios</span>
        </ListItem>
      </List>

      <P>
        O agente pode decompor tarefas complexas em sub-tarefas, selecionar
        ferramentas apropriadas, executar ações e aprender com feedback.
        Implementa memória de curto e longo prazo para manter contexto
        e melhorar performance ao longo do tempo.
      </P>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
