
import Link from 'next/link'

const skillGroups = [
	{
		key: 'backend',
		label: 'backend & sistemas',
		color: 'text-primary-2',
		items: ['APIs REST', 'Node.js', 'Python', 'Express', 'Arquitetura modular', 'Design de serviços', 'Processamento assíncrono', 'Tolerância a falhas'],
	},
	{
		key: 'infra',
		label: 'devops & infra',
		color: 'text-primary-2',
		items: ['Docker', 'Coolify', 'Traefik', 'Self-hosted PaaS', 'Reverse proxy', 'Health checks', 'Multi-stack', 'Redes de containers'],
	},
	{
		key: 'data',
		label: 'dados & storage',
		color: 'text-primary-2',
		items: ['PostgreSQL', 'MariaDB', 'MySQL', 'Redis (cache)', 'Redis (filas)', 'Modelagem relacional', 'CSV pipelines', 'E-commerce data'],
	},
	{
		key: 'distributed',
		label: 'sistemas distribuídos',
		color: 'text-primary-2',
		items: ['Workers assíncronos', 'Filas de tarefas', 'worker-short / long / default', 'Scheduler', 'Service-to-service', 'Escalabilidade horizontal', 'Background jobs'],
	},
	{
		key: 'ai',
		label: 'ia & automação',
		color: 'text-primary-2',
		items: ['LLMs self-hosted (LLaMA)', 'Prompt engineering', 'Geração de imagem', 'Integração de IA em backend', 'CorelDRAW scripting', 'Evolution API', 'Automação de workflows'],
	},
	{
		key: 'research',
		label: 'pesquisa & simulação',
		color: 'text-primary-2',
		items: ['UTM (drone traffic mgmt)', 'Benchmarking de sistemas', 'Simulação modular', 'Análise de performance', 'IA aplicada a UAVs', 'Cenários A1/A2 (ITA)'],
	},
]

export default function Skills2() {
	return (
		<>
			<section id="skills" className="section-skills-2 pt-5">
				<div className="container">
					<div className="rounded-3 bg-3 border border-1 position-relative overflow-hidden">
						<div className="position-relative z-1 py-60">
							<div className="position-relative z-1">

								{/* Cabeçalho */}
								<div className="text-center mb-8">
									<div className="d-flex align-items-center justify-content-center mb-2">
										<svg className="text-primary-2 me-2" xmlns="http://www.w3.org/2000/svg" width={5} height={6} viewBox="0 0 5 6" fill="none">
											<circle cx="2.5" cy={3} r="2.5" fill="#A8FF53" />
										</svg>
										<span className="text-300 fs-7" style={{ fontFamily: 'var(--dmMono)' }}>// hard-skills</span>
									</div>
									<h3 className="mb-0">Stack <span className="text-300">&amp; Ferramentas</span></h3>
								</div>

								{/* Grid de categorias */}
								<div className="container">
									<div className="row g-4">
										{skillGroups.map((group) => (
											<div key={group.key} className="col-lg-4 col-md-6">
												<div className="border border-1 rounded-3 p-4 h-100 bg-card">
													{/* header da categoria */}
													<div className="d-flex align-items-center mb-3">
														<span className="text-primary-2 me-1" style={{ fontFamily: 'var(--dmMono)', fontSize: '0.78rem' }}>//</span>
														<span className="text-300 ms-1" style={{ fontFamily: 'var(--dmMono)', fontSize: '0.78rem' }}>{group.label}</span>
													</div>
													{/* tags */}
													<div className="d-flex flex-wrap gap-2">
														{group.items.map((item) => (
															<span
																key={item}
																className="text-300 border border-1 rounded-2 px-2 py-1"
																style={{ fontFamily: 'var(--dmMono)', fontSize: '0.75rem', lineHeight: 1.4 }}
															>
																{item}
															</span>
														))}
													</div>
												</div>
											</div>
										))}
									</div>

									{/* Rodapé de destaque */}
									<div className="mt-8 border border-1 rounded-3 p-4 bg-card">
										<div className="row align-items-center">
											<div className="col-lg-8">
												<p className="text-300 mb-0" style={{ fontFamily: 'var(--dmMono)', fontSize: '0.82rem', lineHeight: 1.7 }}>
													<span className="text-primary-2">$ </span>
													<span className="text-dark">uname -a</span>
													<br />
													<span className="text-300 ps-3">
														+20 containers em produção · workers ativos · infra self-hosted rodando 24/7
													</span>
												</p>
											</div>
											<div className="col-lg-4 text-lg-end mt-3 mt-lg-0">
												<Link href="#contact" className="btn text-dark border border-1 rounded-2">
													<span className="text-primary-2 me-1" style={{ fontFamily: 'var(--dmMono)' }}>$</span>
													contratar
												</Link>
											</div>
										</div>
									</div>
								</div>

							</div>
						</div>

						{/* decoração giratória original */}
						<div className="position-absolute d-none d-md-block decorate">
							<div className="rotateme">
								<div className="circle-1-1" />
								<div className="circle-1-2 position-absolute top-50 start-50 translate-middle">
									<svg className="mb-5 position-absolute bottom-0 start-0" xmlns="http://www.w3.org/2000/svg" width={9} height={9} viewBox="0 0 9 9" fill="none">
										<circle cx="4.5" cy="4.5" r="4.5" fill="#636366" />
									</svg>
								</div>
								<div className="circle-1-3 position-absolute top-50 start-50 translate-middle ">
									<svg className="mb-3 position-absolute bottom-0 end-0" xmlns="http://www.w3.org/2000/svg" width={9} height={9} viewBox="0 0 9 9" fill="none">
										<circle cx="4.5" cy="4.5" r="4.5" fill="#636366" />
									</svg>
								</div>
							</div>
						</div>

					</div>
				</div>
			</section>
		</>
	)
}
