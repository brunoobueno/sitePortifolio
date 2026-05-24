
'use client'
import Marquee from 'react-fast-marquee'

export default function Home2() {
	return (
		<>
			<section id="about" className="section-hero-2 position-relative pt-130 pb-3">
				<div className="container hero-2">
					{/* padding lateral e vertical explícito para evitar clipping nas bordas */}
					<div className="border border-1 rounded-3 p-3 p-md-4 p-lg-0">
						<div className="box-linear-animation position-relative z-1">
							<div className="row align-items-center py-60 gx-lg-0">

								{/* No mobile: texto vem PRIMEIRO (order-1), terminal DEPOIS (order-2) */}

								{/* Texto principal */}
								<div className="col-lg-6 mx-lg-auto col-md-12 order-1 order-lg-2 mb-5 mb-lg-0">
									<div className="p-lg-0 p-md-4 p-2">
										<div className="mb-2" style={{ fontFamily: 'var(--dmMono)', fontSize: '0.78rem' }}>
											<span className="text-primary-2">// </span>
											<span className="text-300">Lorena, SP · Brasil · disponível</span>
										</div>

										<h1 className="fs-50 my-3">
											Bruno <span className="text-linear-4">Bueno</span>
											<span className="flicker">_</span>
										</h1>

										<p className="text-dark fw-medium mb-1 fs-5">Software Engineer</p>
										<p className="text-300 mb-4" style={{ fontFamily: 'var(--dmMono)', fontSize: '0.82rem' }}>
											Sistemas Distribuídos · IA Aplicada · DevOps &amp; Infra
										</p>

										<p className="mb-5 text-300">
											Construo e opero sistemas que realmente rodam em produção.
											Containers, filas, workers, LLMs locais, infraestrutura crítica.
											Pesquisa em IA aplicada a sistemas aéreos no <span className="text-dark">ITA</span>.
										</p>

										{/* Stack marquee */}
										<div className="overflow-hidden">
											<Marquee className="carouselTicker carouselTicker-left position-relative z-1">
												<ul className="carouselTicker__list">
													{['Docker', 'Redis', 'PostgreSQL', 'Node.js', 'Python', 'Traefik', 'LLaMA', 'REST APIs', 'Coolify', 'Workers'].map(tech => (
														<li key={tech} className="carouselTicker__item mb-1">
															<span className="text-300 border border-1 rounded-2 px-2 py-1" style={{ fontFamily: 'var(--dmMono)', fontSize: '0.78rem' }}>
																{tech}
															</span>
														</li>
													))}
												</ul>
											</Marquee>
										</div>
									</div>
								</div>

								{/* Terminal window */}
								<div className="col-lg-5 ps-lg-5 order-2 order-lg-1 text-lg-start text-center">
									<div className="position-relative">
										<div className="border border-1 rounded-3 overflow-hidden bg-card">
											{/* barra estilo terminal macOS */}
											<div className="d-flex align-items-center gap-2 px-4 py-3 border-bottom">
												<span className="rounded-circle" style={{ width: 10, height: 10, background: '#ff5f57', display: 'inline-block', flexShrink: 0 }} />
												<span className="rounded-circle" style={{ width: 10, height: 10, background: '#febc2e', display: 'inline-block', flexShrink: 0 }} />
												<span className="rounded-circle" style={{ width: 10, height: 10, background: '#28c840', display: 'inline-block', flexShrink: 0 }} />
												<span className="text-300 ms-3 fs-7" style={{ fontFamily: 'var(--dmMono)' }}>bruno@skyweaver: ~</span>
											</div>
											{/* corpo do terminal */}
											<div className="p-4 text-start" style={{ fontFamily: 'var(--dmMono)', fontSize: 'clamp(0.74rem, 1.5vw, 0.84rem)', lineHeight: 1.75 }}>
												<p className="mb-0 text-300"><span className="text-primary-2">$</span> cat perfil.txt</p>
												<p className="text-dark mb-0 ps-3">Bruno Bueno — Engenheiro de Software</p>
												<p className="text-300 mb-3 ps-3">Lorena, SP · Brasil · disponível para projetos</p>

												<p className="mb-0 text-300"><span className="text-primary-2">$</span> ./o-que-construo.sh</p>
												<p className="mb-0 ps-3"><span className="text-primary-2">→</span> <span className="text-dark">Backends e APIs que sustentam produção</span></p>
												<p className="mb-0 ps-3"><span className="text-primary-2">→</span> <span className="text-dark">Infraestrutura com Docker e containers</span></p>
												<p className="mb-0 ps-3"><span className="text-primary-2">→</span> <span className="text-dark">IA rodando localmente (sem custo, sem nuvem)</span></p>
												<p className="mb-3 ps-3"><span className="text-primary-2">→</span> <span className="text-dark">Automação que resolve problemas reais</span></p>

												<p className="mb-0 text-300"><span className="text-primary-2">$</span> ./números.sh</p>
												<p className="mb-0 ps-3 text-dark">+20 serviços rodando em produção</p>
												<p className="mb-3 ps-3 text-300">Mestrado no ITA · pesquisa com drones</p>

												<p className="mb-0 text-300"><span className="text-primary-2">$</span><span className="flicker"> _</span></p>
											</div>
										</div>
									</div>
								</div>

							</div>
						</div>
					</div>
				</div>
				<div className="background position-absolute top-0 start-0 w-100 h-100">
					<img className="bg-w" src="assets/imgs/home-page-2/hero-1/bg.png" alt="zelio" />
					<img className="bg-d" src="assets/imgs/home-page-2/hero-1/bg-dark.png" alt="zelio" />
				</div>
			</section>
		</>
	)
}
