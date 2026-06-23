// pages/works.js
// ─────────────────────────────────────────────────────────
import { Container, Heading, SimpleGrid, Divider, Text } from '@chakra-ui/react'
import Layout    from '../components/layouts/article'
import Section   from '../components/section'
import { WorkGridItem } from '../components/grid-item'

// ─── Imagens ─────────────────────────────────────────────
import thumbBuscador   from '../public/images/works/buscador.png'
import thumbInkdrop    from '../public/images/works/degrada.png'
import thumbWalknote   from '../public/images/works/processa.png'
import thumbDash       from '../public/images/works/dash.png'
import thumbM1         from '../public/images/works/m1.png'
import thumbDeep       from '../public/images/works/deepface-icon.png'
import thumbHaskell    from '../public/images/works/haskell.png'
// ─── Projetos de IA ──────────────────────────────────────
import thumbRAG        from '../public/images/works/rag-system.png'
import thumbAgent      from '../public/images/works/agent.png'
import thumbFraud      from '../public/images/works/fraud.png'
import thumbChatbot    from '../public/images/works/chatbot.png'
import thumbMLOps      from '../public/images/works/mlops.png'
import thumbTransformers from '../public/images/works/transformers.png'
import thumbCVPipeline from '../public/images/works/cv-pipeline.png'
import thumbDSPlatform from '../public/images/works/ds-platform.png'

// ─── Componente ──────────────────────────────────────────
const Works = () => (
  <Layout title="Soluções">
    <Container>
      <Heading as="h3" fontSize={20} mb={2}>
        Soluções & Cases
      </Heading>
      <Text fontSize="sm" opacity={0.7} mb={6}>
        Projetos desenvolvidos em produção e provas de conceito que ilustram a
        abrangência técnica das nossas soluções.
      </Text>

      {/* ───────────────── Soluções IA/ML ───────────────────── */}
      <Section>
        <Heading as="h4" fontSize={18} mb={3} color="teal.400">
          🤖 Inteligência Artificial & Machine Learning
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.1}>
          <WorkGridItem
            id="rag-system"
            title="Sistema RAG com LLMs"
            thumbnail={thumbRAG}
          >
            Retrieval Augmented Generation com embeddings vetoriais, LangChain e
            GPT-4. Busca semântica e respostas contextualizadas em bases
            corporativas.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="autonomous-agent"
            title="Agente Autônomo de IA"
            thumbnail={thumbAgent}
          >
            Agente inteligente com arquitetura ReAct, planejamento automático e
            integração com ferramentas externas via LangChain/LangGraph.
          </WorkGridItem>
        </Section>

        <Section delay={0.2}>
          <WorkGridItem
            id="fraud-detection"
            title="Detecção de Fraudes em Tempo Real"
            thumbnail={thumbFraud}
          >
            Deep learning para detecção de fraudes em escala. Neural Networks,
            ensemble models, processamento de 10k+ transações/segundo com
            explainability.
          </WorkGridItem>
        </Section>

        <Section delay={0.2}>
          <WorkGridItem
            id="multimodal-chatbot"
            title="Chatbot Multimodal"
            thumbnail={thumbChatbot}
          >
            Chatbot com GPT-4 Vision para processar texto e imagens
            simultaneamente. Análise visual, OCR e detecção de objetos
            integrados ao fluxo conversacional.
          </WorkGridItem>
        </Section>

        <Section delay={0.3}>
          <WorkGridItem
            id="mlops-pipeline"
            title="Pipeline MLOps Completo"
            thumbnail={thumbMLOps}
          >
            Infraestrutura MLOps com MLflow, DVC, Airflow e CI/CD para ML.
            Monitoramento em produção e retreinamento automático de modelos.
          </WorkGridItem>
        </Section>

        <Section delay={0.3}>
          <WorkGridItem
            id="transformers-finetuning"
            title="Fine-Tuning de Transformers"
            thumbnail={thumbTransformers}
          >
            Fine-tuning de BERT, GPT e T5 com LoRA/QLoRA. Otimização PEFT para
            modelos grandes em hardware limitado — custo-eficiente e escalável.
          </WorkGridItem>
        </Section>

        <Section delay={0.4}>
          <WorkGridItem
            id="computer-vision-pipeline"
            title="Pipeline Visão Computacional"
            thumbnail={thumbCVPipeline}
          >
            YOLO, Mask R-CNN, detecção em tempo real a 60+ FPS em edge devices.
            Otimização com TensorRT e ONNX para produção.
          </WorkGridItem>
        </Section>

        <Section delay={0.4}>
          <WorkGridItem
            id="datascience-platform"
            title="Plataforma Data Science"
            thumbnail={thumbDSPlatform}
          >
            ETL, dashboards interativos (Dash/Streamlit), notebooks
            colaborativos e APIs de ML — da análise exploratória ao deploy.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      {/* ───────────────── Cases Profissionais ──────────────── */}
      <Section>
        <Divider my={8} />
        <Heading as="h4" fontSize={18} mb={3}>
          💼 Cases Profissionais
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.1}>
          <WorkGridItem
            id="buscadores"
            title="Buscador Inteligente — GIZ"
            thumbnail={thumbBuscador}
            link="https://adaptainfra.streamlit.app"
          >
            Plataforma Streamlit com busca semântica integrada à OpenAlex,
            Biblioteca OLACEFS e documentos do IDI. Chatbot Gemini e buscador
            de especialistas para auditoria de infraestrutura sustentável.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="deepface"
            title="DeepFace — Reconhecimento Facial"
            thumbnail={thumbDeep}
            link="https://github.com/todydanielm3/deepface_recfac_deg"
          >
            Modelos de reconhecimento facial em deep learning com análise de
            degradações de imagem. Pesquisa aplicada ao contexto forense (UnB/CIC).
          </WorkGridItem>
        </Section>

        <Section delay={0.2}>
          <WorkGridItem
            id="dash_aws"
            title="Dashboards — Saúde Pública (AWS)"
            thumbnail={thumbDash}
          >
            Análise de dados de saúde pública com Dash + Plotly hospedado em
            nuvem AWS. Visualizações interativas em tempo real para gestão
            estratégica (IGESDF).
          </WorkGridItem>
        </Section>

        <Section delay={0.2}>
          <WorkGridItem
            id="labdegrad"
            title="Laboratório de Degradações"
            thumbnail={thumbInkdrop}
          >
            Pipeline Python para geração e análise de degradações de imagens,
            utilizado em pesquisa e prototipagem de modelos de visão
            computacional.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      {/* ───────────────── Demos Técnicas ───────────────────── */}
      <Section>
        <Divider my={8} />
        <Heading as="h4" fontSize={18} mb={3}>
          🔬 Demos Técnicas
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.1}>
          <WorkGridItem
            id="haskell-imagens"
            title="Processamento de Imagens em Haskell"
            thumbnail={thumbHaskell}
            link="https://github.com/todydanielm3/projeto_haskell"
          >
            Implementação funcional de filtros (Gauss, etc.) usando JuicyPixels.
            Demonstração de processamento de imagem em paradigma funcional puro.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="arm"
            thumbnail={thumbM1}
            title="M1 Assembly — Apple Silicon"
          >
            Implementação da cifra de Vigenère em Assembly ARM (M1). Segurança
            e criptografia em baixo nível.
          </WorkGridItem>
        </Section>

        <Section delay={0.2}>
          <WorkGridItem
            id="invoices"
            title="Invoices Automation"
            thumbnail={thumbWalknote}
          >
            Extração automática de dados de faturas bancárias (PDF → CSV/JSON)
            com NLP e regex para integração contábil.
          </WorkGridItem>
        </Section>

        <Section delay={0.2}>
          <WorkGridItem
            id="imageprocessing"
            title="image_processing_PY"
            thumbnail={thumbWalknote}
          >
            Geração de degradações sintéticas para prototipagem e aumento de
            dados em pipelines de ML.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
