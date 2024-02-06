// Importações de Componentes e Estilos do Chakra UI
import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'

// Importações de Componentes Personalizados
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

// Importações de Imagens
import thumbInkdrop from '../public/images/works/degrada.png'
import thumbWalknote from '../public/images/works/processa.png'
import thumbFourPainters from '../public/images/works/dash.png'
import thumbPichu2 from '../public/images/works/m1.png'
import thumbWalknote1 from '../public/images/works/deepface-icon.png'
import thumbWalknote2 from '../public/images/works/haskell.png'

// Comentários para futuras importações de imagens
// import thumbMenkiki from '../public/images/works/menkiki_eyecatch.png';
// import thumbMargelo from '../public/images/works/margelo_eyecatch.png';
// import thumbModeTokyo from '../public/images/works/modetokyo_eyecatch.png';
// import thumbStyly from '../public/images/works/styly_eyecatch.png';
// import thumbFreeDBTagger from '../public/images/works/freedbtagger_eyecatch.png';
// import thumbAmembo from '../public/images/works/amembo_eyecatch.png';

// Componente Works
const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      {/* Grid para Projetos Gerais */}
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="labdegrad"
            title="Gerador de Degradações em Python"
            thumbnail={thumbInkdrop}
          >
            Laboratorio de geração e análise de degradações de imagens
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="Processamento de Imagens em Haskell"
            title="Processamento de Imagens em Haskell"
            thumbnail={thumbWalknote2}
            Link="https://github.com/todydanielm3/projeto_haskell"
          >
            Implementação de filtros de imagens em Haskell.Projeto Haskell de
            Filtro Gaussiano: projeto em Haskell utiliza a biblioteca
            JuicyPixels para aplicar um filtro Gaussiano em imagens.
            exemplo básico de processamento de imagens usando Haskell.
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem
            id="imageprocessing"
            title="image_processing_PY"
            thumbnail={thumbWalknote}
          >
            Processamento de Imagens em Python - Geração de degradaçoes em
            Imagens para prototipaçoes em machine learning
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="dash_aws"
            title="Dashboards -> Dash/AWS"
            thumbnail={thumbFourPainters}
          >
            Analise de dados da saúde pública e Criação de dashboards em python
            usando Dash + Plotly combinando praticas de implementação em nuvem
            usando os serviços da AWS.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="DeepFace_RecFac"
            title="DeepFace_RecFac"
            thumbnail={thumbWalknote}
            link="https://github.com/todydanielm3/deepface_recfac_deg"
          >
            Modelos de Reconhecimento Facial baseado em Aprendizado Profundo
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem
            id="redes"
            title="Implementação de Redes de Comunicação  em Python"
            thumbnail={thumbWalknote}
          >
            Implementação de Redes de comunicação ponto a ponto utilizando
            Socket em Python
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="Invoices-Automation"
            title="Invoices-Automation"
            thumbnail={thumbWalknote}
          >
            Automatização de extração de dados em Faturas Bancárias. Essa
            aplicação recebe um arquivo de fatura bancária em formato PDF,
            extrai as informações relevantes e retorna as informações filtradas
            em formato CSV e Json.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="Pysus-Instituto de Gestão da Saude"
            title="Pysus-Instituto de Gestão da Saude"
            thumbnail={thumbWalknote}
          >
            Extração de dados da saúde publica
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="Financial dashboard - DFC"
            title="Financial dashboard - DFC"
            thumbnail={thumbWalknote}
          ></WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="Financial dashboard - QDD"
            title="Financial dashboard - QDD"
            thumbnail={thumbWalknote}
          ></WorkGridItem>
        </Section>
      </SimpleGrid>

      {/* Seção para Trabalhos de Segurança */}
      <Section>
        <Divider my={6} />
        <Heading as="h3" fontSize={20} mb={4}>
          Security Works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="arm"
            thumbnail={thumbPichu2}
            title="M1 assembly Apple Silicon"
          >
            Implementação da Cifra de Vigenere em Assembly. Novos testes para
            nova familia de processadores da Apple / Maquina local (M1)
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem
            id="Python Security"
            thumbnail={thumbWalknote}
            title="Python Security"
          >
            Implementação de ferramentas de segurança em Python
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
