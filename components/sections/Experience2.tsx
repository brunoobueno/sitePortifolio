
import Link from 'next/link'

const jobs = [
	{
		id: 'cromadev',
		company: 'CromaDev',
		logo: 'assets/imgs/home-page-2/experience/cromadev.svg',
		period: '2024 — Atualmente',
		role: 'Software Engineer',
		active: true,
	},
	{
		id: 'liax',
		company: 'Liax TI',
		logo: 'assets/imgs/home-page-2/experience/liax.svg',
		period: '2022 — 2024',
		role: 'Desenvolvedor Full Stack',
		active: false,
	},
	{
		id: 'alquimia',
		company: 'Alquímia Indústria',
		logo: 'assets/imgs/home-page-2/experience/alquimia.svg',
		period: '2020 — 2022',
		role: 'Dev & Automação',
		active: false,
	},
	{
		id: 'sjo',
		company: 'SJO System',
		logo: 'assets/imgs/home-page-2/experience/sjo.svg',
		period: '2018 — 2020',
		role: 'Engenharia de Dados',
		active: false,
	},
]

const highlights = [
	{
		label: 'Infra & Backend',
		text: 'Projetei e opero uma plataforma SaaS com +20 containers em produção — Docker, Traefik, Coolify, Redis, PostgreSQL, workers assíncronos rodando 24/7.',
	},
	{
		label: 'Sistemas Distribuídos',
		text: 'Arquitetura de filas com workers especializados (short/long/default), scheduler e Redis dedicado. Processamento paralelo e resiliente de jobs pesados.',
	},
	{
		label: 'IA Aplicada',
		text: 'Deploy de LLMs self-hosted (LLaMA) integrados a backend para automação de atendimento, geração de conteúdo e processamento semântico. Sem custo de API externa.',
	},
	{
		label: 'Automação de Negócio',
		text: 'Scripts para CorelDRAW eliminando trabalho manual repetitivo. Pipelines de dados para e-commerce com impacto direto em receita. Integração WhatsApp via Evolution API.',
	},
	{
		label: 'Transformação Digital',
		text: 'Liderei iniciativas de digitalização em empresas tradicionais — da migração de planilhas para sistemas integrados até automação de processos operacionais completos.',
	},
]

const stack = ['Docker', 'Node.js', 'Python', 'Redis', 'PostgreSQL', 'Traefik', 'LLaMA', 'Evolution API', 'Coolify', 'REST APIs']

export default function Experience2() {
	return (
		<>
			<section id="portfolio" className="section-experience pt-5">
				<div className="container">
					<div className="rounded-3 border border-1 position-relative overflow-hidden">
						<div className="box-linear-animation position-relative z-1">
							<div className="p-lg-8 p-md-6 p-3 position-relative z-1">

								{/* Cabeçalho */}
								<div className="d-flex align-items-center mb-2">
									<svg className="text-primary-2 me-2" xmlns="http://www.w3.org/2000/svg" width={5} height={6} viewBox="0 0 5 6" fill="none">
										<circle cx="2.5" cy={3} r="2.5" fill="#A8FF53" />
									</svg>
									<span className="text-300 fs-7" style={{ fontFamily: 'var(--dmMono)' }}>// experiencia</span>
								</div>
								<h3 className="mb-5">
									+5 anos <span className="text-300">em</span> sistemas reais
								</h3>

								<div className="row">
									{/* Lista de empresas */}
									<div className="col-lg-4">
										<div className="d-flex flex-column gap-2">
											{jobs.map((job) => (
												<div key={job.id} className={`technology border border-1 rounded-3 p-3 ${job.active ? 'border-primary-2' : ''}`} style={job.active ? { borderColor: '#A8FF53 !important' } : {}}>
													<div className="d-flex align-items-center gap-2">
														<img src={job.logo} alt={job.company} />
														<div className="d-flex flex-column ms-2">
															<h5 className="mb-0">{job.company}</h5>
															<span className="text-300" style={{ fontFamily: 'var(--dmMono)', fontSize: '0.75rem' }}>{job.period}</span>
															<span className="text-primary-2" style={{ fontFamily: 'var(--dmMono)', fontSize: '0.72rem' }}>{job.role}</span>
														</div>
													</div>
												</div>
											))}
										</div>
									</div>

									{/* Detalhes */}
									<div className="col-lg-8 ps-lg-5 mt-5 mt-lg-0">
										<div className="mb-1" style={{ fontFamily: 'var(--dmMono)', fontSize: '0.78rem' }}>
											<span className="text-primary-2">$ </span>
											<span className="text-300">cat highlights.log</span>
										</div>
										<ul className="mt-4 ps-0 list-unstyled">
											{highlights.map((h) => (
												<li key={h.label} className="mb-4 border-bottom pb-3">
													<p className="text-dark fw-medium mb-1 fs-7" style={{ fontFamily: 'var(--dmMono)' }}>
														<span className="text-primary-2">→ </span>{h.label}
													</p>
													<p className="text-300 mb-0" style={{ fontSize: '0.88rem', lineHeight: 1.6 }}>{h.text}</p>
												</li>
											))}
										</ul>

										{/* Stack */}
										<div className="d-flex flex-wrap align-items-center gap-2 mt-4">
											{stack.map((tech) => (
												<span
													key={tech}
													className="text-300 border border-1 rounded-2 px-2 py-1"
													style={{ fontFamily: 'var(--dmMono)', fontSize: '0.75rem' }}
												>
													{tech}
												</span>
											))}
										</div>
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
