// pages/works.tsx  (ou pages/index.tsx)
// ─────────────────────────────────────────────────────────
import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout    from '../components/layouts/article'
import Section   from '../components/section'
import { WorkGridItem } from '../components/grid-item'

// ─── Imagens ─────────────────────────────────────────────
import thumbBuscador   from '../public/images/works/buscador.png'      //  ← NOVO
import thumbInkdrop    from '../public/images/works/degrada.png'
import thumbWalknote   from '../public/images/works/processa.png'
import thumbDash       from '../public/images/works/dash.png'
import thumbM1         from '../public/images/works/m1.png'
import thumbDeep       from '../public/images/works/deepface-icon.png'
import thumbHaskell    from '../public/images/works/haskell.png'
// ─── Novos Projetos de IA ───────────────────────────────
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
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      {/* ───────────────────── Projetos de IA/ML ─────────────────────── */}
      <Section>
        <Heading as="h4" fontSize={18} mb={3} color="teal.400">
          🤖 Inteligência Artificial & Machine Learning
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        {/* Sistema RAG */}
        <Section delay={0.1}>
          <WorkGridItem
            id="rag-system"
            title="Sistema RAG com LLMs"
            thumbnail={thumbRAG}
          >
            Retrieval Augmented Generation com embeddings vetoriais, LangChain e GPT-4.
            Busca semântica e respostas contextualizadas.
          </WorkGridItem>
        </Section>

        {/* Agente Autônomo */}
        <Section delay={0.1}>
          <WorkGridItem
            id="autonomous-agent"
            title="Agente Autônomo de IA"
            thumbnail={thumbAgent}
          >
            Agente inteligente com arquitetura ReAct, planejamento automático e
            integração com ferramentas externas usando LangChain.
          </WorkGridItem>
        </Section>

        {/* Detecção de Fraudes */}
        <Section delay={0.2}>
          <WorkGridItem
            id="fraud-detection"
            title="Detecção de Fraudes ML"
            thumbnail={thumbFraud}
          >
            Deep learning para detecção de fraudes em tempo real. Neural Networks,
            ensemble models, processamento de 10k+ transações/segundo.
          </WorkGridItem>
        </Section>

        {/* Chatbot Multimodal */}
        <Section delay={0.2}>
          <WorkGridItem
            id="multimodal-chatbot"
            title="Chatbot Multimodal"
            thumbnail={thumbChatbot}
          >
            Chatbot com GPT-4 Vision para processar texto e imagens simultaneamente.
            Análise visual, OCR e detecção de objetos.
          </WorkGridItem>
        </Section>

        {/* Pipeline MLOps */}
        <Section delay={0.3}>
          <WorkGridItem
            id="mlops-pipeline"
            title="Pipeline MLOps Completo"
            thumbnail={thumbMLOps}
          >
            Infraestrutura MLOps com MLflow, DVC, Airflow, CI/CD para ML,
            monitoramento em produção e retreinamento automático.
          </WorkGridItem>
        </Section>

        {/* Fine-Tuning Transformers */}
        <Section delay={0.3}>
          <WorkGridItem
            id="transformers-finetuning"
            title="Fine-Tuning de Transformers"
            thumbnail={thumbTransformers}
          >
            Fine-tuning de BERT, GPT, T5 com LoRA/QLoRA. Otimização PEFT para
            modelos grandes em hardware limitado.
          </WorkGridItem>
        </Section>

        {/* Computer Vision Pipeline */}
        <Section delay={0.4}>
          <WorkGridItem
            id="computer-vision-pipeline"
            title="Pipeline Visão Computacional"
            thumbnail={thumbCVPipeline}
          >
            YOLO, Mask R-CNN, detecção em tempo real. 60+ FPS em edge devices,
            otimização com TensorRT e ONNX.
          </WorkGridItem>
        </Section>

        {/* Data Science Platform */}
        <Section delay={0.4}>
          <WorkGridItem
            id="datascience-platform"
            title="Plataforma Data Science"
            thumbnail={thumbDSPlatform}
          >
            Plataforma completa: ETL, dashboards interativos (Dash/Streamlit),
            notebooks colaborativos e APIs ML.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      {/* ───────────────────── Projetos em Destaque ───────────────────── */}
      <Section>
        <Divider my={8} />
        <Heading as="h4" fontSize={18} mb={3}>
          💼 Projetos Profissionais
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        {/* 1) Buscador Inteligente (NOVO) */}
        <Section delay={0.1}>
          <WorkGridItem
            id="buscadores"
            title="Buscador Inteligente"
            thumbnail={thumbBuscador}
            link="https://adaptainfra.streamlit.app"
          >
            Plataforma em&nbsp;Streamlit que integra pesquisas na OpenAlex,
            Biblioteca OLACEFS e documentos do IDI, além de buscador de
            especialistas e chatbot Gemini.
          </WorkGridItem>
        </Section>

        {/* 2) Gerador de Degradações */}
        <Section delay={0.1}>
          <WorkGridItem
            id="labdegrad"
            title="Gerador de Degradações em Python"
            thumbnail={thumbInkdrop}
          >
            Laboratório para geração&nbsp;/ análise de degradações de imagens.
          </WorkGridItem>
        </Section>

        {/* 3) Filtros em Haskell */}
        <Section delay={0.2}>
          <WorkGridItem
            id="haskell-imagens"
            title="Processamento de Imagens em Haskell"
            thumbnail={thumbHaskell}
            link="https://github.com/todydanielm3/projeto_haskell"
          >
            Implementação de filtros (Gauss, etc.) usando JuicyPixels.
          </WorkGridItem>
        </Section>

        {/* 4) Processamento PY */}
        <Section delay={0.2}>
          <WorkGridItem
            id="imageprocessing"
            title="image_processing_PY"
            thumbnail={thumbWalknote}
          >
            Geração de degradações para prototipagem em ML.
          </WorkGridItem>
        </Section>

        {/* 5) Dash / AWS */}
        <Section delay={0.3}>
          <WorkGridItem
            id="dash_aws"
            title="Dashboards → Dash/AWS"
            thumbnail={thumbDash}
          >
            Saúde pública: análise e Dash + Plotly em nuvem (AWS).
          </WorkGridItem>
        </Section>

        {/* 6) DeepFace */}
        <Section delay={0.3}>
          <WorkGridItem
            id="deepface"
            title="DeepFace RecFac"
            thumbnail={thumbDeep}
            link="https://github.com/todydanielm3/deepface_recfac_deg"
          >
            Modelos de reconhecimento facial baseados em Deep Learning.
          </WorkGridItem>
        </Section>

        {/* 7) Redes / Sockets */}
        <Section delay={0.4}>
          <WorkGridItem
            id="redes"
            title="Redes de Comunicação em Python"
            thumbnail={thumbWalknote}
          >
            Implementação P2P utilizando Socket.
          </WorkGridItem>
        </Section>

        {/* 8) Invoices Automation */}
        <Section delay={0.4}>
          <WorkGridItem
            id="invoices"
            title="Invoices Automation"
            thumbnail={thumbWalknote}
          >
            Extração de dados de faturas bancárias (PDF → CSV/JSON).
          </WorkGridItem>
        </Section>

        {/* 9) Pysus */}
        <Section delay={0.5}>
          <WorkGridItem
            id="pysus"
            title="Pysus – Instituto de Gestão da Saúde"
            thumbnail={thumbWalknote}
          >
            Coleta e análise de dados públicos da saúde.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      {/* ───────────────────── Seção Security ─────────────────────────── */}
      <Section>
        <Divider my={8} />
        <Heading as="h4" fontSize={18} mb={3}>
          🔐 Security & Low-Level
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.1}>
          <WorkGridItem
            id="arm"
            thumbnail={thumbM1}
            title="M1 Assembly – Apple Silicon"
          >
            Implementação da cifra de Vigenère em Assembly (M1).
          </WorkGridItem>
        </Section>

        <Section delay={0.2}>
          <WorkGridItem
            id="python-security"
            thumbnail={thumbWalknote}
            title="Python Security"
          >
            Ferramentas de segurança ofensiva em Python.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
