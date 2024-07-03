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
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import thumbYouTube from '../public/images/links/youtube.png'
//import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

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
        Até então, continuamos sendo um fenômeno raro no universo <br />ヽ(⌐■_■)ノ
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
 
            Daniel Moraes
          </Heading>
          <p>
            ❐ Computer Engineer University of Brasilia UnB <br />
            ❏ Artificial Intelligence Engineer <br />
            ♮ ₫rummer
            <br />∯ Time is still the infinite jest
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
              alt="Profile image"
              borderRadius="full"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Saudações!
        </Heading>
        <Paragraph style={{ textAlign: 'center', margin: 0 }}>
          Engenheiro de Computação, com ampla experiência em Reconhecimento
          Facial baseado em Inteligência Artificial e membro do grupo de
          pesquisa em reconhecimento facial do Departamento de Ciência da
          Computação da Universidade de Brasília. Especializado em Visão
          Computacional e Computação em Nuvem, possuo uma sólida experiência em
          segurança e infraestrutura de redes, atuando atualmente como
          Engenheiro de Dados. Meu conhecimento abrange, IAs (Deep learning),
          processamento de dados, desenvolvimento em nuvem, desenvolvimento web,
          automação de redes, e domínio de linguagens e ferramentas como Python,
          JavaScript/Node.js, C, Assembly e AWS Serverless. Construindo uma
          carreira marcada pelo compromisso com a inovação e a aplicação de
          tecnologias de ponta em soluções práticas e eficientes.Compartilho um
          pouco da minha vidal pessoal em{' '}
          <Link
            as={NextLink}
            href="https://www.instagram.com/daniel_8moraes/"
            passHref
            target="_blank"
          >
            daniel_8moraes <br />
          </Link>
          e escrevo críticas de filmes no{' '}
          <Link
            as={NextLink}
            href="https://letterboxd.com/daniel_8moraes/film/2001-a-space-odyssey/"
            passHref
            target="_blank"
          >
            Letterboxd
          </Link>
          <br />（＾ν＾）
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="https://github.com/todydanielm3?tab=repositories"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            Meu repositório de projetos
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Educação
        </Heading>
        <BioSection>
          <BioYear>2018 - 2023</BioYear>
          Bacharelado em Engenharia de Computação pela Universidade de Brasilia
          (UnB), Brasília, Brazil
        </BioSection>

        <BioSection>
          <BioYear>2022 - 2024</BioYear>
          Membro do Grupo de Pesquisa em Reconhecimento Facial BiTGroup da
          UnB/CIC, atuando em aprendizado profundo de máquina supervisionado
          para aplicações forenses e criminalísticas.
        </BioSection>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Experiências Profissionais
          </Heading>
            <BioSection>
            <BioYear>2/2024 - Present</BioYear>
             Engenheiro de IA Deep Learning - WaveLight Health Technologies <br/>
            Google Inception V3 | Engenheiro de IA especializado em Deep Learning, atuando na análise de sinais vitais através de PPG remoto. 
              Colaborando para a construção de infraestrutura backend, pipelines de dados e modelos de deep learning para produtos suportados por IA. 
                Identificação de oportunidades inovadoras para aplicação de IA em diferentes áreas do produto, e implementar novos recursos para resolver problemas complexos em análise de sinaisEngenheiro de IA especializado em Deep Learning, atuando na análise de sinais vitais através de PPG remoto. 
              Colaborando para a construção de infraestrutura backend, pipelines de dados e modelos de deep learning para produtos suportados por IA. Identificação de oportunidades inovadoras para aplicação de IA em diferentes áreas do produto, 
                e implementar novos recursos para resolver problemas complexos em análise de sinais

          </BioSection>

             <BioSection>
            <BioYear>2024 - 2/2024</BioYear>
             Analista de Integração de Dados em Atenção Primária à Saúde na operadora Postal Saúde. Atuando na estruturação, 
               análise e integração de dados de saúde para melhorar a qualidade e a eficiência dos serviços da saúde primária.
          </BioSection>

          <BioSection>
            <BioYear>2023 - 2024</BioYear>
            Engenheiro de Dados no Instituto de Gestão Estratégica de Saúde do
            Distrito Federal (IGESDF), atuando na gestão de Informações
            Estratégicas. Responsável pelo desenvolvimento de painéis
            interativos para a visualização e análise de dados em tempo real,
            empregando tecnologias para implantação eficiente em redes. Minha
            função principal envolve estruturar e aprimorar dados relacionados à
            saúde, visando facilitar decisões estratégicas baseadas em
            informações precisas e atualizadas. Além disso, trabalho em estreita
            colaboração com equipes de diversas áreas para assegurar uma gestão
            de dados coesa, contribuindo para uma tomada de decisões
            bem-informada e orientada por dados confiáveis.
          </BioSection>

          <BioSection>
            <BioYear>2021 - 2023</BioYear>
            Network Security and Infrastructure Intern - CLDF
            <br />
            Estágio em segurança e infraestrutura de redes, contribuí para a modernização da infraestrutura de rede. 
            Meu trabalho envolveu a documentação técnica e reconfiguração de sistemas legados, incluindo a gestão de servidores, 
            salas de rede, racks e switches. Destaco minha participação na substituição e configuração de switches antigos pelos avançados switches da Fortinet, 
            melhorando a segurança e desempenho da rede.
            Adquiri experiência prática em tecnologias de rede complexas, especialmente na integração de equipamentos Fortinet à infraestrutura existente. 
            Além disso, colaborei com a equipe de desenvolvimento na migração de aplicações para a nuvem, otimizando recursos e empregando soluções eficazes de cloud computing. 
            A orquestração de contêineres com Docker e Kubernetes foi uma área chave, aprofundando meu conhecimento em automação e escalabilidade de aplicações.
          </BioSection>
        </Section>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Interesses
        </Heading>
        <Paragraph>
          Viajar | Arte | Música | Natureza |{' '}
          <Link
            href="https://letterboxd.com/daniel_8moraes/films"
            target="_blank"
          >
            Filmes
          </Link>{' '}
          <Link
            href="https://www.instagram.com/p/Csj1MFSvWUx/"
            target="_blank"
          ></Link>
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/todydanielm3" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @danielm3
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/DanielMoraes_S" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @DanielMoraes_S
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.instagram.com/daniel_8moraes/"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @daniel_8moraes
              </Button>
            </Link>
          </ListItem>

          <ListItem>
            <Link href="https://letterboxd.com/daniel_8moraes/" target="_blank">
              <Button variant="ghost" colorScheme="teal">
                ❛❜ @Daniel8Filmes
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
          >
            Contact me - Email
          </Button>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
