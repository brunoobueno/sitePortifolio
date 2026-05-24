
import Link from 'next/link'

const axes = [
	{
		index: '01',
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
				<path d="M13 9H21L11 24V15H3L13 0V9Z" fill="#1F1F24" />
			</svg>
		),
		title: 'Infra + Backend Pesado',
		description:
			'Sistemas que precisam rodar 24/7, escalar e não quebrar. Containerização com Docker, deploy com Coolify, proxy reverso com Traefik e múltiplos serviços isolados convivendo em produção.',
		items: ['Docker & Containers', 'Coolify (self-hosted PaaS)', 'Traefik (reverse proxy)', 'APIs REST robustas', 'Bancos: PostgreSQL / MySQL / Redis'],
	},
	{
		index: '02',
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
				<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" fill="#1F1F24" />
			</svg>
		),
		title: 'IA Aplicada + Experimentação',
		description:
			'Integração de modelos de linguagem rodando localmente (sem API externa), prompt engineering para texto e imagem, e pipelines de IA conectados a sistemas reais. Pesquisa com UAVs no ITA.',
		items: ['LLMs self-hosted (LLaMA)', 'Prompt engineering', 'Geração e controle de imagem', 'Backend como orquestrador de IA', 'Pesquisa UTM/UAV — ITA'],
	},
	{
		index: '03',
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
				<path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" fill="#1F1F24" />
			</svg>
		),
		title: 'Automação + Produtividade Real',
		description:
			'Automação que resolve problemas reais de negócio: scripts para CorelDRAW, pipelines de dados para e-commerce, integração com WhatsApp via Evolution API e workers para processar jobs em background.',
		items: ['Workers assíncronos', 'Filas com Redis', 'Automação de design (CorelDRAW)', 'Pipeline e-commerce / marketplaces', 'Integração WhatsApp (Evolution API)'],
	},
]

const secondary = [
	{
		title: 'Infraestrutura de Email',
		description: 'Servidor SMTP/IMAP self-hosted com Stalwart e SnappyMail. Configuração completa de DNS, DKIM, SPF e DMARC.',
	},
	{
		title: 'Simulação de Sistemas',
		description: 'Benchmarking, modelagem de cenários e análise de performance para sistemas complexos. Contexto: pesquisa UTM/ITA.',
	},
	{
		title: 'Engenharia de Hardware',
		description: 'Montagem, configuração e otimização de máquinas para workloads pesados — IA, render, processamento de dados.',
	},
]

export default function Service2() {
	return (
		<>
			<section id="services" className="section-service-2 pt-5">
				<div className="container">
					<div className="rounded-3 border border-1 position-relative overflow-hidden">
						<div className="box-linear-animation position-relative z-1 p-lg-5 p-1 p-md-4">
							<div className="position-relative z-1">

								{/* Cabeçalho */}
								<div className="text-center mb-8">
									<div className="d-flex align-items-center justify-content-center mb-2">
										<svg className="text-primary-2 me-2" xmlns="http://www.w3.org/2000/svg" width={5} height={6} viewBox="0 0 5 6" fill="none">
											<circle cx="2.5" cy={3} r="2.5" fill="#A8FF53" />
										</svg>
										<span className="text-300 fs-7" style={{ fontFamily: 'var(--dmMono)' }}>// atuação</span>
									</div>
									<h3 className="mb-1">
										Três eixos <span className="text-300">de trabalho</span>
									</h3>
									<p className="text-300 mt-2">O que realmente faço — sem buzzwords.</p>
								</div>

								{/* Eixos principais */}
								<div className="container">
									<div className="row g-4">
										{axes.map((axis) => (
											<div key={axis.index} className="col-lg-4 col-md-6">
												<div className="card-servies-2 rounded-2 h-100 hover-up border border-1 p-4 bg-card">
													{/* número */}
													<div className="d-flex align-items-center justify-content-between mb-3">
														{axis.icon}
														<span className="text-300" style={{ fontFamily: 'var(--dmMono)', fontSize: '0.75rem' }}>
															{axis.index}
														</span>
													</div>
													<h6 className="my-3 fw-medium text-dark">{axis.title}</h6>
													<p className="fs-7 text-300 fw-regular mb-4">{axis.description}</p>
													{/* itens */}
													<ul className="ps-0 list-unstyled mb-0">
														{axis.items.map((item) => (
															<li key={item} className="mb-1" style={{ fontFamily: 'var(--dmMono)', fontSize: '0.75rem' }}>
																<span className="text-primary-2 me-1">→</span>
																<span className="text-300">{item}</span>
															</li>
														))}
													</ul>
												</div>
											</div>
										))}
									</div>

									{/* Capacidades secundárias */}
									<div className="row g-3 mt-2">
										{secondary.map((item) => (
											<div key={item.title} className="col-lg-4 col-md-6">
												<div className="border border-1 rounded-3 p-3 d-flex gap-3 align-items-start bg-card">
													<span className="text-primary-2 mt-1" style={{ fontFamily: 'var(--dmMono)', fontSize: '0.7rem', flexShrink: 0 }}>+</span>
													<div>
														<p className="text-dark fw-medium mb-1 fs-7">{item.title}</p>
														<p className="text-300 mb-0" style={{ fontSize: '0.78rem', lineHeight: 1.5 }}>{item.description}</p>
													</div>
												</div>
											</div>
										))}
									</div>

									{/* CTA rodapé */}
									<div className="text-center pt-60">
										<p className="text-300">
											Tem um problema que precisa de sistema real?{' '}
											<Link href="#contact" className="text-primary-2">
												Bora conversar.
											</Link>
										</p>
									</div>
								</div>

							</div>
							<img className="position-absolute top-0 start-0 z-0" src="assets/imgs/home-page-2/services/bg.png" alt="zelio" />
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
