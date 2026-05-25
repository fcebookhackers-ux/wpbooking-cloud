/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { FAQItem, PlanItem, FeatureItem, TestimonialItem } from "./types";

export const FAQ_DATA: FAQItem[] = [
  {
    question: "Preciso de um servidor próprio?",
    answer: "Não necessariamente! No Plano 1, você pode hospedar o motor em sua própria infraestrutura Node.js ou usar nosso tutorial para hospedar grátis. Nos Planos 2 e 3, nós cuidamos de 100% da infraestrutura para você de forma gerenciada: sem necessidade de configurar servidores ou APIs complexas de terceiros."
  },
  {
    question: "O que inclui o trial de 30 dias?",
    answer: "Durante os primeiros 30 dias de trial nos planos elegíveis, você tem acesso total e irrestrito a todas as funcionalidades: agendamento WordPress, integração direta com WhatsApp por QR Code, geração automática de tokens, confirmações automatizadas e processamento de pagamentos via Pix. Você não é cobrado pela assinatura mensal da infra neste período!"
  },
  {
    question: "Como funciona o upgrade de plano?",
    answer: "O upgrade é 100% automatizado. Se começar no plano individual simples de plugin e precisar da nossa infraestrutura gerenciada para escalar sem manutenção, você pode migrar a qualquer momento pelo seu painel de cliente com apenas um clique."
  },
  {
    question: "Posso migrar de mensal para anual?",
    answer: "Sim! A migração do Plano de Infraestrutura Mensal para o Plano Anual com desconto é extremamente vantajosa e garante 20% de economia no custo combinado do plugin e servidores. O suporte realiza a migração sem interrupções."
  },
  {
    question: "O plugin funciona com meu tema WordPress?",
    answer: "Absolutamente. O WP Booking Cloud foi desenvolvido seguindo os padrões rigorosos do WordPress codex, sendo totalmente compatível com Elementor, Divi, Gutenberg, Bricks, WooCommerce e qualquer tema moderno responsivo."
  },
  {
    question: "Como conecto o WhatsApp?",
    answer: "É extremamente simples. No painel do plugin no WordPress, um QR Code será gerado automaticamente. Basta abrir o WhatsApp no seu celular, ir em 'Aparelhos Conectados' e escanear o código. Pronto! Conectado em menos de 10 segundos."
  },
  {
    question: "Tem suporte técnico em português?",
    answer: "Sim, orgulhosamente! Todo o suporte é oferecido pela equipe brasileira da Zapfllow Tecnologia em português (pt-BR), via WhatsApp e E-mail, com atendimento ágil para garantir que sua operação nunca pare."
  },
  {
    question: "Como cancelar?",
    answer: "O cancelamento é livre de burocracias. Você pode solicitar o cancelamento da sua assinatura a qualquer momento pela Kiwify ou abrindo um ticket no nosso suporte. Não há multas de fidelidade."
  }
];

export const PLAN_DATA: PlanItem[] = [
  {
    id: "plano_1",
    name: "Somente Plugin",
    badge: "Para Desenvolvedores",
    priceValue: "197,90",
    billingPeriod: "ano",
    description: "Ideal para quem possui servidor próprio ou deseja hospedar a sua própria infra de conexão WhatsApp.",
    features: [
      "Licença do Plugin WordPress (Anual)",
      "Updates automáticos por 1 ano",
      "Geração de token no WordPress",
      "Agendamentos ilimitados",
      "Integração Pix nativa",
      "Suporte via e-mail em português",
      "Infraestrutura de conexão por sua conta",
      "30 dias de garantia"
    ],
    checkoutUrl: "https://pay.kiwify.com.br/resy6ea",
    ctaText: "Assinar Plano 1",
    trialNote: "Garantia incondicional de 30 dias"
  },
  {
    id: "plano_2",
    name: "Plugin + Infraestrutura",
    badge: "O Mais Vendido",
    priceValue: "197,90",
    billingPeriod: "adesão + R$ 49,90/mês",
    description: "Nós hospedamos a infraestrutura do WhatsApp para você. Sem estresse com servidores ou Node.js.",
    features: [
      "Plugin WP + Servidor Pronto e Ativo",
      "Primeira mensalidade da infra com 30 DIAS GRÁTIS",
      "QR Code gerado na hora no WordPress",
      "Geração automática de tokens",
      "Sem custos extras de servidores",
      "Agendamentos ilimitados e sem delay",
      "Suporte VIP via WhatsApp",
      "Upgrade automatizado"
    ],
    checkoutUrl: "https://pay.kiwify.com.br/VqZzmCs",
    ctaText: "Assinar Plano 2",
    trialNote: "30 dias grátis de infraestrutura inclusos",
    extraInfo: "Primeira cobrança de R$ 49,90 da infra após 30 dias"
  },
  {
    id: "plano_3",
    name: "Plugin + Infra Anual",
    badge: "Melhor Custo-Benefício",
    priceValue: "637,36",
    billingPeriod: "ano",
    description: "Pacote anual unificado com desconto máximo de 20%. Economia real e agenciamento contínuo.",
    features: [
      "Tudo do Plano 2 inclusivo por 1 ano completo",
      "Calculado: 197,90 + 598,90 com 20% OFF",
      "Economia comprovada de R$ 159,44/ano",
      "Sem faturas mensais no cartão",
      "Hospedagem de infra dedicada e estável",
      "Atualizações contínuas de segurança",
      "Suporte Prioritário das 08h às 20h",
      "30 dias de garantia completa"
    ],
    checkoutUrl: "https://pay.kiwify.com.br/DriaEEB",
    ctaText: "Assinar Plano 3",
    trialNote: "Economize 20% no pacote completo",
    extraInfo: "Valor parcelável na Kiwify em até 12x"
  }
];

export const FEATURE_DATA: FeatureItem[] = [
  {
    id: "native_wp",
    title: "Agendamento Nativo WP",
    description: "Sem plataformas externas. Crie calendários, gerencie fusos horários e configure feriados diretamente no painel administrativo do WordPress.",
    iconName: "Calendar"
  },
  {
    id: "whatsapp_qr",
    title: "Integração Direct WhatsApp",
    description: "Conecte por QR Code simples e rápido. O plugin envia lembretes, confirmações e avisos automáticos direto para os números de seus clientes.",
    iconName: "MessageSquare"
  },
  {
    id: "auto_provision",
    title: "Autoprovisionamento Ativo",
    description: "Nossa tecnologia detecta as necessidades e provisiona os ambientes de banco e webhook automaticamente para sua conexão ser instantânea.",
    iconName: "Cpu"
  },
  {
    id: "auto_token",
    title: "Tokenização Automática",
    description: "Tokens seguros gerados de forma automática em segundo plano, evitando perda de conexão ou configurações manuais complicadas e demoradas.",
    iconName: "Key"
  },
  {
    id: "status_control",
    title: "Gestão Automatizada de Status",
    description: "Alterou no painel? O sistema dispara mensagens automáticas: 'Agendado', 'Confirmado', 'Pendente de Pagamento' ou 'Cancelado'.",
    iconName: "CheckCircle"
  },
  {
    id: "pix_payment",
    title: "Geração de Pix Copia e Cola / QR",
    description: "Apresente o valor, expire o agendamento se não pago, e confirme o horário de forma instantânea nas contas vinculadas de maneira totalmente programável.",
    iconName: "QrCode"
  },
  {
    id: "simple_panel",
    title: "Painel Simplificado",
    description: "Estatísticas de agendamentos diários, faturamento estimado e taxa de no-show em tempo real por meio de um dashboard ultra intuitivo.",
    iconName: "BarChart"
  },
  {
    id: "managed_infra",
    title: "Infraestrutura Gerenciada",
    description: "Nos Planos 2 e 3, fornecemos servidores globais redundantes rodando em contêineres Docker para máxima rapidez no envio de disparos de mensagens.",
    iconName: "Server"
  },
  {
    id: "trial_upgrade",
    title: "Licenciamento & Upgrades",
    description: "Fluxo claro de período de trial de 30 dias na infraestrutura integrada com upgrades fáceis para os planos recomendados mantendo seus históricos de dados.",
    iconName: "TrendingUp"
  },
  {
    id: "stable_logs",
    title: "Logs de Operação Estáveis",
    description: "Auditoria interna completa de mensagens enviadas, retornos do WordPress e status do WhatsApp Web de maneira transparente e amigável.",
    iconName: "FileText"
  }
];

export const TESTIMONIAL_DATA: TestimonialItem[] = [
  {
    name: "Alexandre Silveira",
    role: "Proprietário",
    company: "Estúdio Silveira Tattoo",
    rating: 5,
    content: "O WP Booking Cloud transformou nossa recepção. Antes, perdíamos noites respondendo agendamentos no WhatsApp e conferindo depósitos no banco. Hoje, o cliente entra no WordPress, gera o Pix, paga, e o plugin confirma e manda lembrete de agendamento por WhatsApp na mesma hora. Fantástico!",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    name: "Mariana Costa",
    role: "Nutricionista Clínica",
    company: "Clínica Bem-Estar",
    rating: 5,
    content: "O no-show das minhas consultas caiu quase 90%! Os lembretes automáticos com o link para remarcação economizam horas do meu dia. Além disso, a opção de pagar por Pix logo no agendamento filtrou muito as pessoas curiosas das que realmente queriam atendimento.",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    name: "Guilherme Santos",
    role: "Diretor de TI",
    company: "Studio Barber Pro",
    rating: 5,
    content: "Como desenvolvedor, fiquei impressionado com a robustez. Começamos com nossa própria máquina no plano anual básico de plugin, e no mês passado migramos para a infraestrutura gerenciada de R$ 49,90/mês da Zapfllow. Zero dor de cabeça com atualização do WhatsApp Web! Suporte excelente.",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80"
  }
];
