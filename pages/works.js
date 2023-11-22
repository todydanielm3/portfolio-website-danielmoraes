import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbInkdrop from '../public/images/works/degrada.png'
import thumbWalknote from '../public/images/works/processa.png'
import thumbFourPainters from '../public/images/works/dash.png'
//import thumbMenkiki from '../public/images/works/menkiki_eyecatch.png'
//import thumbMargelo from '../public/images/works/margelo_eyecatch.png'
//import thumbModeTokyo from '../public/images/works/modetokyo_eyecatch.png'
//import thumbStyly from '../public/images/works/styly_eyecatch.png'
import thumbPichu2 from '../public/images/works/m1.png'
//import thumbFreeDBTagger from '../public/images/works/freedbtagger_eyecatch.png'
//import thumbAmembo from '../public/images/works/amembo_eyecatch.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>

        <Section>
          <WorkGridItem id="labdegrad" title="Gerador de Degradações" thumbnail={thumbInkdrop}>
Laboratorio de geração e análise de degradações de imagens
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="imageprocessing"
            title="image_processing_PY
"
            thumbnail={thumbWalknote}
          >
Processamento de Imagens em Python - Geração de degradaçoes em Imagens para prototipaçoes em machine learning
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="dash_aws"
            title="Dashboards -> Dash/AWS "
            thumbnail={thumbFourPainters}
          >
           Analise de dados da saúde pública e Criação de dashboards em python usando Dash + Plotly combinando praticas de implementação em nuvem usando os serviços da AWS.
          </WorkGridItem>
        </Section>

      </SimpleGrid>


      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
           Security Works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="arm" thumbnail={thumbPichu2} title="
M1 assembly Apple Silicon">
            Implementação da Cifra de Vigenere em Assembly. Novos testes para nova familia de processadores da Appley / Maquina local (M1)
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
