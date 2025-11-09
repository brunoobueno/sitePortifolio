import Link from 'next/link'


export default function Experience2() {
	return (
		<>

			<section id="portfolio" className="section-experience pt-5">
				<div className="container">
					<div className="rounded-3 border border-1 position-relative overflow-hidden">
						<div className="box-linear-animation position-relative z-1">
							<div className="p-lg-8 p-md-6 p-3 position-relative z-1">
								<div className="d-flex align-items-center">
									<svg className="text-primary-2 me-2" xmlns="http://www.w3.org/2000/svg" width={5} height={6} viewBox="0 0 5 6" fill="none">
										<circle cx="2.5" cy={3} r="2.5" fill="#A8FF53" />
									</svg>
									<span className="text-linear-4 d-flex align-items-center"> Experiência </span>
								</div>
								<h3>
									+4
									<span className="text-300">Anos, Atuando </span>
									na Área
									<span className="text-300">
										de <br />
										Tecnologia e Programação
									</span>
								</h3>
								<div className="row mt-5">
									<div className="col-lg-4">
										<div className="d-flex flex-column gap-2">
											<Link href="#" className="technology border border-1 rounded-3 p-3">
												<div className="d-flex align-items-center gap-2">
													<img src="assets/imgs/home-page-2/experience/cromadev.svg" alt="zelio" />
													<div className="d-flex flex-column ms-2">
														<h5 className="mb-1">CromaDev</h5>
														<span className="text-300">2024 - Atualmente</span>
													</div>
												</div>
											</Link>
											<Link href="#" className="technology border border-1 rounded-3 p-3">
												<div className="d-flex align-items-center gap-2">
													<img src="assets/imgs/home-page-2/experience/liax.svg" alt="zelio" />
													<div className="d-flex flex-column ms-2">
														<h5 className="mb-1">Liax TI</h5>
														<span className="text-300">2022 - 2024</span>
													</div>
												</div>
											</Link>
											<Link href="#" className="technology border border-1 rounded-3 p-3">
												<div className="d-flex align-items-center gap-2">
													<img src="assets/imgs/home-page-2/experience/alquimia.svg" alt="zelio" />
													<div className="d-flex flex-column ms-2">
														<h5 className="mb-1">Alquímia Indústria</h5>
														<span className="text-300">2020 - 2022</span>
													</div>
												</div>
											</Link>
											<Link href="#" className="technology border border-1 rounded-3 p-3">
												<div className="d-flex align-items-center gap-2">
													<img src="assets/imgs/home-page-2/experience/sjo.svg" alt="zelio" />
													<div className="d-flex flex-column ms-2">
														<h5 className="mb-1">SJO System</h5>
														<span className="text-300">2018 - 2020</span>
													</div>
												</div>
											</Link>
										</div>
									</div>
									<div className="col-lg-8 ps-lg-5 mt-5 mt-lg-0">
										<h6 className="text-linear-4">Desenvolvedor Full Stack</h6>
										<ul className="mt-4">
											<li className="text-dark mb-3">Liderei o desenvolvimento de aplicações web escaláveis, <span className="text-secondary-2">melhorando o desempenho</span> e experiência do usuário.</li>
											<li className="text-dark mb-3">Implementei algoritmos de <span className="text-secondary-2">aprendizado de máquina</span> para aprimorar a funcionalidade de busca.</li>
											<li className="text-dark mb-3">Liderei iniciativas de transformação digital em negócios tradicionais, combinando <span className="text-secondary-2">automação, inteligência artificial</span> e visão estratégica.</li>
											<li className="text-dark mb-3">Desenvolvi <span className="text-secondary-2">pipelines automatizados de deploy</span> com integração contínua, reduzindo em 70% o tempo de entrega de novas funcionalidades.</li>
											<li className="text-dark mb-3">Estruturei soluções de backend robustas <span className="text-secondary-2">com foco em alta disponibilidade e segurança</span>, atendendo demandas críticas de sistemas de produção.</li>
										</ul>
										<div className="d-flex flex-wrap align-items-center gap-3 mt-7">
											<Link href="#" className="text-300 border border-1 px-3 py-1">Python</Link>
											<Link href="#" className="text-300 border border-1 px-3 py-1">TensorFlow</Link>
											<Link href="#" className="text-300 border border-1 px-3 py-1">Docker</Link>
											<Link href="#" className="text-300 border border-1 px-3 py-1">Kubernetes</Link>
											<Link href="#" className="text-300 border border-1 px-3 py-1">n8n</Link>
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
