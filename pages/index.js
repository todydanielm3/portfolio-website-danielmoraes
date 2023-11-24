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
        Até então, continuamos sendo um fenômeno raro no universo ヽ(⌐■_■)ノ
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Daniel Moraes
          </Heading>
          <p>
            ❐ Computer Engineering University of Brasilia UnB <br />
            ■ BiTGroup CNPq - Recfacs Systems <br />
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
            daniel_8moraes
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
          （＾ν＾）
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
          <BioYear>2022 - 2023</BioYear>
          Membro do Grupo de Pesquisa em Reconhecimento Facial BiTGroup da
          UnB/CIC, atuando em aprendizado profundo de máquina supervisionado
          para aplicações forenses e criminalísticas.
        </BioSection>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Experiências Profissionais
          </Heading>
          <BioSection>
            <BioYear>2023 - Present</BioYear>
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
            <BioYear>2021 - 2022</BioYear>
            Network Security and Infrastructure Intern
            <br />
            Responsável pela documentação detalhada e configuração eficiente da
            infraestrutura de rede da organização, incluindo a gestão de
            servidores, racks e switches, garantindo robustez e eficiência
            operacional. • Liderança técnica na migração da infraestrutura de
            rede legada para a solução avançada da Fortinet, ampliando
            significativamente minha expertise em configuração e integração de
            redes complexas. • Participação ativa na migração de recursos de
            aplicativos para ambientes de nuvem, empregando Docker e Kubernetes,
            demonstrando habilidade na otimização de recursos e na implementação
            de soluções de cloud computing eficazes.
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
