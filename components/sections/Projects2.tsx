
import Link from 'next/link'

const projects = [
	{
		index: '01',
		category: 'acadêmico',
		title: 'SkyWeaver — Simulador UTM',
		description:
			'Simulador modular de tráfego aéreo para UAVs, com foco em benchmarking e análise de desempenho em cenários UTM. Desenvolvido no contexto de pesquisa no ITA.',
		stack: ['Python', 'Simulação distribuída', 'Benchmarking', 'Arquitetura modular'],
		repos: ['skyweaver', 'bench-dss', 'performance-report'],
		highlight: true,
	},
	{
		index: '02',
		category: 'infra',
		title: 'Plataforma SaaS Distribuída',
		description:
			'+20 containers em produção. Frontend e backend desacoplados, proxy reverso Traefik, PaaS self-hosted com Coolify, Redis para cache e filas, múltiplos bancos e ambientes isolados.',
		stack: ['Docker', 'Traefik', 'Coolify', 'Redis', 'PostgreSQL', 'MariaDB'],
		repos: [],
		highlight: false,
	},
	{
		index: '03',
		category: 'infra',
		title: 'Sistema de Workers Assíncronos',
		description:
			'Arquitetura de filas com workers especializados por tipo de job (short, long, default), scheduler distribuído e Redis dedicado. Processamento resiliente para tarefas pesadas.',
		stack: ['Redis', 'Workers', 'Scheduler', 'Node.js', 'Filas assíncronas'],
		repos: [],
		highlight: false,
	},
	{
		index: '04',
		category: 'ia',
		title: 'Plataforma com LLM Local',
		description:
			'Integração de LLaMA rodando localmente, com backend como orquestrador e frontend consumindo a API. Sem dependência de APIs externas — custo zero, privacidade total, latência controlada.',
		stack: ['LLaMA', 'Node.js', 'REST API', 'Docker'],
		repos: [],
		highlight: false,
	},
	{
		index: '05',
		category: 'ia',
		title: 'SofiaMed — Assistente Virtual para Clínicas',
		description:
			'SaaS com modelos de linguagem para automatizar atendimentos e agendamentos em clínicas médicas. Integração com WhatsApp via Evolution API.',
		stack: ['LLM', 'Evolution API', 'Node.js', 'PostgreSQL'],
		repos: [],
		highlight: false,
	},
	{
		index: '06',
		category: 'infra',
		title: 'Infraestrutura de Email Self-hosted',
		description:
			'Servidor de email completo com Stalwart (SMTP/IMAP) e SnappyMail como webmail. Configuração de protocolos, DNS, DKIM, SPF e DMARC. Raríssimo em portfólio.',
		stack: ['Stalwart', 'SnappyMail', 'SMTP', 'IMAP', 'Docker'],
		repos: [],
		highlight: false,
	},
	{
		index: '07',
		category: 'dados',
		title: 'Pipeline de Dados para E-commerce',
		description:
			'Engenharia de dados para SJO Artigos Religiosos: estruturação, padronização e otimização de catálogos CSV para indexação em marketplaces. Impacto direto em receita.',
		stack: ['CSV pipelines', 'Estruturação de dados', 'Marketplaces'],
		repos: [],
		highlight: false,
	},
	{
		index: '08',
		category: 'automação',
		title: 'Automação de Design (CorelDRAW)',
		description:
			'Scripts para automatizar tarefas repetitivas em CorelDRAW: padronização de produção gráfica, redução de tempo operacional e integração entre design e dados.',
		stack: ['CorelDRAW Scripting', 'Automação', 'VBA/Macro'],
		repos: [],
		highlight: false,
	},
	{
		index: '09',
		category: 'ia',
		title: 'Engenharia de Imagem com IA',
		description:
			'Exploração técnica de geração e manipulação de imagens: controle de artefatos, resolução, pixelização, ajuste fino de prompts e parâmetros de renderização.',
		stack: ['Stable Diffusion', 'Prompt engineering', 'Pós-processamento'],
		repos: [],
		highlight: false,
	},
	{
		index: '10',
		category: 'automação',
		title: 'Infra Inteligente para Logística',
		description:
			'Ecossistema integrado com marketplaces para automatizar processos de estoque, precificação dinâmica e sincronização de dados entre plataformas de venda.',
		stack: ['APIs de marketplace', 'Node.js', 'PostgreSQL', 'Workers'],
		repos: [],
		highlight: false,
	},
	{
		index: '11',
		category: 'jogo',
		title: 'Last Light — Jogo Multiplayer',
		description:
			'"O Último Apaga a Luz" — jogo com tensão psicológica e mecânicas de escuridão progressiva. Lógica de estados, interação multiplayer e game design emocional no Roblox.',
		stack: ['Roblox', 'Lua', 'Multiplayer', 'Game design'],
		repos: [],
		highlight: false,
	},
	{
		index: '12',
		category: 'infra',
		title: 'Simulador de Custos de Importação',
		description:
			'Sistema para simular custos de importação (FOB/CIF), impostos e margens em tempo real. Lógica fiscal complexa automatizada para tomada de decisão.',
		stack: ['Node.js', 'PostgreSQL', 'Lógica fiscal', 'REST API'],
		repos: [],
		highlight: false,
	},
]

const categoryColors: Record<string, string> = {
	academia: '#a8ff53',
	infra: '#5577a7',
	ia: '#f778ba',
	dados: '#febc2e',
	automação: '#8f8f92',
	jogo: '#64e1b0',
}

export default function Projects2() {
	return (
		<>
			<div id="projects" className="section-projects-2 pt-5">
				<div className="container">
					<div className="rounded-3 border border-1 position-relative overflow-hidden">
						<div className="box-linear-animation position-relative z-1">
							<div className="p-lg-8 p-md-6 p-3 position-relative z-1">

								{/* Cabeçalho */}
								<div className="d-flex align-items-center mb-2">
									<svg className="text-primary-2 me-2" xmlns="http://www.w3.org/2000/svg" width={5} height={6} viewBox="0 0 5 6" fill="none">
										<circle cx="2.5" cy={3} r="2.5" fill="#A8FF53" />
									</svg>
									<span className="text-300 fs-7" style={{ fontFamily: 'var(--dmMono)' }}>// projetos</span>
								</div>
								<h3 className="mb-2">
									O que <span className="text-300">foi construído</span>
								</h3>
								<p className="text-300 mb-8">
									Sistemas em produção, pesquisa acadêmica, automação e experimentos técnicos.
								</p>

								{/* Grid de projetos */}
								<div className="row g-4">
									{projects.map((project) => (
										<div key={project.index} className={project.highlight ? 'col-lg-12' : 'col-lg-6 col-md-6'}>
											<div className="border border-1 rounded-3 p-4 h-100 position-relative bg-card">
												{/* topo do card */}
												<div className="d-flex align-items-center justify-content-between mb-3">
													<span
														className="text-300"
														style={{ fontFamily: 'var(--dmMono)', fontSize: '0.75rem' }}
													>
														{project.index}
													</span>
													<span
														className="rounded-2 px-2 py-1 fs-7"
														style={{
															fontFamily: 'var(--dmMono)',
															fontSize: '0.7rem',
															color: categoryColors[project.category] || '#8f8f92',
															border: `1px solid ${categoryColors[project.category] || '#8f8f92'}`,
															opacity: 0.85,
														}}
													>
														{project.category}
													</span>
												</div>

												{/* título */}
												<h5 className="mb-2 text-dark fw-medium">{project.title}</h5>

												{/* descrição */}
												<p className="text-300 mb-4" style={{ fontSize: '0.88rem', lineHeight: 1.6 }}>
													{project.description}
												</p>

												{/* stack */}
												<div className="d-flex flex-wrap gap-2">
													{project.stack.map((tech) => (
														<span
															key={tech}
															className="text-300 border border-1 rounded-2 px-2 py-1"
															style={{ fontFamily: 'var(--dmMono)', fontSize: '0.72rem' }}
														>
															{tech}
														</span>
													))}
												</div>

												{/* repos (só para SkyWeaver) */}
												{project.repos.length > 0 && (
													<div className="mt-3 pt-3 border-top">
														<span className="text-300 fs-7" style={{ fontFamily: 'var(--dmMono)' }}>
															<span className="text-primary-2">$ </span>
															ls ./repos
														</span>
														<div className="d-flex flex-wrap gap-2 mt-2">
															{project.repos.map((repo) => (
																<span
																	key={repo}
																	className="text-primary-2"
																	style={{ fontFamily: 'var(--dmMono)', fontSize: '0.78rem' }}
																>
																	{repo}/
																</span>
															))}
														</div>
													</div>
												)}
											</div>
										</div>
									))}
								</div>

							</div>
							<img className="position-absolute top-0 start-0 z-0" src="assets/imgs/home-page-2/projects/bg.png" alt="zelio" />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
