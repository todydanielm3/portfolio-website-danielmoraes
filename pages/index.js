import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra,
  Text,
  Badge,
  Wrap,
  WrapItem
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const ServiceCard = ({ icon, title, description }) => {
  const bg = useColorModeValue('whiteAlpha.700', 'whiteAlpha.100')
  const border = useColorModeValue('gray.200', 'whiteAlpha.200')
  return (
    <Box
      borderRadius="lg"
      p={4}
      bg={bg}
      borderWidth={1}
      borderColor={border}
      css={{ backdropFilter: 'blur(5px)' }}
    >
      <Text fontSize="2xl" mb={2}>{icon}</Text>
      <Heading as="h4" size="sm" mb={2}>{title}</Heading>
      <Text fontSize="sm" opacity={0.8}>{description}</Text>
    </Box>
  )
}

const TechBadge = ({ children }) => (
  <Badge
    colorScheme="teal"
    variant="subtle"
    px={2}
    py={1}
    borderRadius="md"
    fontSize="xs"
  >
    {children}
  </Badge>
)

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Engenharia e Consultoria em Inteligência Artificial
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Daniel Moraes
          </Heading>
          <p>
            Senior AI Engineer · LLMs · Agentes · RAG · MLOps
          </p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/daniel.jpg"
              alt="Daniel Moraes - AI Engineer"
              borderRadius="full"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Sobre
        </Heading>
        <Text mb={4}>
          Engenheiro de Computação formado pela Universidade de Brasília (UnB)
          e especialista em desenvolvimento de soluções de Inteligência
          Artificial para ambientes corporativos.
        </Text>
        <Text mb={4}>
          Nos últimos anos, tenho atuado ajudando empresas a transformar
          grandes volumes de dados, documentos e processos operacionais em
          sistemas inteligentes capazes de apoiar decisões, automatizar tarefas
          e gerar ganhos reais de produtividade.
        </Text>
        <Text mb={4}>
          Minha experiência vai além do desenvolvimento de modelos. Trabalho na
          construção completa de soluções de IA, desde a definição da
          arquitetura e integração com sistemas existentes até a implantação,
          monitoramento e evolução contínua em produção.
        </Text>
        <Text mb={4}>
          Tenho atuado em projetos envolvendo IA Generativa, agentes
          inteligentes, RAG (Retrieval-Augmented Generation), análise
          documental, visão computacional, automação de processos e plataformas
          de suporte à decisão, sempre com foco em confiabilidade,
          escalabilidade e geração de valor para o negócio.
        </Text>
        <Text mb={4}>
          Atualmente presto serviços de consultoria e engenharia de IA para
          empresas que desejam transformar oportunidades em soluções concretas,
          seja modernizando operações, acelerando processos ou criando novos
          produtos baseados em Inteligência Artificial.
        </Text>
        <Text fontWeight="semibold" mb={2}>Áreas de atuação:</Text>
        <List spacing={1} mb={2}>
          {[
            'IA Generativa e Agentes Inteligentes',
            'Automação de Processos com IA',
            'RAG e Sistemas Baseados em Conhecimento',
            'Análise Documental e Extração Inteligente de Dados',
            'Visão Computacional',
            'Arquitetura de Soluções de IA',
            'MLOps e LLMOps',
            'Azure, AWS e Google Cloud'
          ].map(area => (
            <ListItem key={area} fontSize="sm">• {area}</ListItem>
          ))}
        </List>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            Ver Soluções & Cases
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Serviços
        </Heading>
        <SimpleGrid columns={[1, 2, 2]} gap={4} mb={4}>
          <ServiceCard
            icon="🤖"
            title="LLMs & IA Generativa"
            description="Desenvolvimento e fine-tuning de modelos de linguagem, chatbots inteligentes e automação de processos com IA generativa."
          />
          <ServiceCard
            icon="🔍"
            title="RAG & Busca Semântica"
            description="Arquiteturas RAG com embeddings vetoriais para busca inteligente e respostas contextualizadas em bases de conhecimento corporativas."
          />
          <ServiceCard
            icon="🤝"
            title="Agentes Autônomos"
            description="Agentes de IA com planejamento automático e integração com ferramentas externas para automação inteligente de fluxos operacionais."
          />
          <ServiceCard
            icon="👁️"
            title="Visão Computacional"
            description="Detecção de objetos, reconhecimento, análise de imagens e vídeo em tempo real com YOLO, transformers e edge computing."
          />
          <ServiceCard
            icon="☁️"
            title="MLOps & Cloud AI"
            description="Infraestrutura de ML em produção com Azure, AWS e GCP. Pipelines CI/CD, monitoramento, retreinamento e governança de dados."
          />
          <ServiceCard
            icon="🔐"
            title="Detecção de Fraudes & Automação"
            description="Deep learning para detecção de fraudes em tempo real, análise multimodal e sistemas de decisão automática de alto volume."
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Stack Tecnológico
        </Heading>
        <Wrap spacing={2}>
          {[
            'Python', 'PyTorch', 'TensorFlow', 'LangChain', 'LangGraph',
            'OpenAI API', 'Azure OpenAI', 'Hugging Face', 'FastAPI',
            'MLflow', 'Airflow', 'Docker', 'Kubernetes',
            'Azure', 'AWS', 'GCP', 'PostgreSQL', 'ChromaDB', 'Pinecone',
            'YOLO', 'BERT', 'GPT-4', 'Llama', 'Mistral'
          ].map(tech => (
            <WrapItem key={tech}>
              <TechBadge>{tech}</TechBadge>
            </WrapItem>
          ))}
        </Wrap>
      </Section>

      <Section delay={0.4}>
        <Heading as="h3" variant="section-title">
          Contato
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/todydanielm3" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                GitHub — @danielm3
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.linkedin.com/in/daniel-8moraes8/"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                LinkedIn — Daniel Moraes
              </Button>
            </Link>
          </ListItem>
        </List>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="mailto:daniel8moraess@gmail.com"
            scroll={false}
            leftIcon={<EmailIcon />}
            colorScheme="teal"
            size="lg"
          >
            Solicitar Proposta
          </Button>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
