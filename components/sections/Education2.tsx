
export default function Education2() {
	return (
		<>
			<section id="resume" className="section-education">
				<div className="container">
					<div className="row">

						{/* Formação Acadêmica */}
						<div className="col-lg-6 pt-3">
							<div className="rounded-3 border border-1 position-relative h-100 overflow-hidden">
								<div className="box-linear-animation p-md-6 p-3">
									<div className="d-flex align-items-center mb-2">
										<svg xmlns="http://www.w3.org/2000/svg" width={24} height={28} viewBox="0 0 24 28" fill="none">
											<path className="fill-primary-2" d="M0 22.667V4.66699C0 2.45786 1.79087 0.666992 4 0.666992H22.6667C23.4031 0.666992 24 1.26395 24 2.00033V26.0003C24 26.7367 23.4031 27.3337 22.6667 27.3337H4.66667C2.08933 27.3337 0 25.2443 0 22.667ZM21.3333 24.667V20.667H4.66667C3.56209 20.667 2.66667 21.5625 2.66667 22.667C2.66667 23.7715 3.56209 24.667 4.66667 24.667H21.3333ZM9.33333 3.33366H4C3.26363 3.33366 2.66667 3.93062 2.66667 4.66699V18.4494C3.27284 18.1614 3.95093 18.0003 4.66667 18.0003H21.3333V3.33366H18.6667V14.0003L14 11.3337L9.33333 14.0003V3.33366Z" fill="#62A92B" />
										</svg>
										<h2 className="mb-0 ms-2">Formação</h2>
									</div>
									<div className="d-flex flex-column h-100 position-relative mt-5">
										<ul className="ps-3 custom-scroll" style={{ maxHeight: '340px', overflowY: 'auto', paddingRight: '8px' }}>

											{/* 1 — mais recente */}
											<li className="position-relative z-1 mb-5">
												<div className="d-flex gap-2">
													<p className="text-300 text-nowrap fw-regular mb-0" style={{ fontFamily: 'var(--dmMono)', fontSize: '0.78rem' }}>2026 –</p>
													<div>
														<span className="text-primary-2 fw-medium">ITA — Instituto Tecnológico de Aeronáutica</span>
														<p className="text-dark mt-1 mb-1">
															Mestrado em Engenharia Eletrônica e Computação
															<span className="text-primary-2 ms-2 fs-7" style={{ fontFamily: 'var(--dmMono)' }}>[em andamento]</span>
														</p>
														<p className="text-300 mb-1" style={{ fontSize: '0.8rem', lineHeight: 1.5 }}>
															Performance Analysis and Scalability of Distributed Architectures for Unmanned Traffic Management Systems
														</p>
														<p className="text-300 mb-0" style={{ fontSize: '0.77rem' }}>
															Orient.: Prof. Cesar Augusto C. Marcondes · Bolsista FCMF
														</p>
													</div>
												</div>
											</li>

											{/* 2 */}
											<li className="position-relative z-1 mb-5">
												<div className="d-flex gap-2">
													<p className="text-300 text-nowrap fw-regular mb-0" style={{ fontFamily: 'var(--dmMono)', fontSize: '0.78rem' }}>2022–2025</p>
													<div>
														<span className="text-primary-2 fw-medium">FATEC Guaratinguetá — Prof. João Mod</span>
														<p className="text-dark mt-1 mb-1">Tecnologia em Gestão de TI</p>
														<p className="text-300 mb-0" style={{ fontSize: '0.8rem' }}>
															TCC: SofiaMed — Transformação Digital e Automação no Atendimento à Saúde
														</p>
													</div>
												</div>
											</li>

											{/* 3 */}
											<li className="position-relative z-1 mb-5">
												<div className="d-flex gap-2">
													<p className="text-300 text-nowrap fw-regular mb-0" style={{ fontFamily: 'var(--dmMono)', fontSize: '0.78rem' }}>2015–2020</p>
													<div>
														<span className="text-primary-2 fw-medium">EEL-USP — Escola de Engenharia de Lorena</span>
														<p className="text-dark mt-1 mb-0">Bacharelado em Engenharia da Computação</p>
													</div>
												</div>
											</li>

											{/* 4 — mais antigo */}
											<li className="position-relative z-1 mb-4">
												<div className="d-flex gap-2">
													<p className="text-300 text-nowrap fw-regular mb-0" style={{ fontFamily: 'var(--dmMono)', fontSize: '0.78rem' }}>2014–2015</p>
													<div>
														<span className="text-primary-2 fw-medium">USP — Universidade de São Paulo</span>
														<p className="text-dark mt-1 mb-0">C++ e Arduino Uno · Bolsista CNPq</p>
													</div>
												</div>
											</li>

										</ul>
										<div className="line-left position-absolute top-0 border-start z-0" />
									</div>
									<div className="bg-overlay position-absolute bottom-0 start-0 z-1" />
								</div>
							</div>
						</div>

						{/* Projetos recentes */}
						<div className="col-lg-6 pt-3">
							<div className="bg-3 rounded-3 border border-1 p-md-6 p-3 position-relative h-100 overflow-hidden">
								<div className="d-flex align-items-center mb-2">
									<svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 32 32" fill="none">
										<path className="fill-primary-2" d="M20 4H28V10.6667H25.3333V6.66667H20V4ZM12 4V6.66667H6.66667V10.6667H4V4H12ZM20 28V25.3333H25.3333V21.3333H28V28H20ZM12 28H4V21.3333H6.66667V25.3333H12V28ZM4 14.6667H28V17.3333H4V14.6667Z" fill="#A8FF53" />
									</svg>
									<h2 className="mb-0 ms-2">Recentes</h2>
								</div>

								{/* Pesquisa ITA em destaque */}
								<div className="border border-1 rounded-3 p-3 mb-4 mt-4" style={{ borderColor: '#A8FF53', opacity: 0.9 }}>
									<p className="mb-1" style={{ fontFamily: 'var(--dmMono)', fontSize: '0.72rem' }}>
										<span className="text-primary-2">// </span>
										<span className="text-300">pesquisa ativa</span>
									</p>
									<p className="text-dark fw-medium mb-1" style={{ fontSize: '0.9rem' }}>ITA — AAM &amp; UTM Research</p>
									<p className="text-300 mb-0" style={{ fontSize: '0.8rem', lineHeight: 1.6 }}>
										Modelagem de cenários, benchmarking e análise de escalabilidade de arquiteturas distribuídas para gerenciamento de tráfego de drones. Projeto ITA AAM SAC INOVAC.
									</p>
								</div>

								<div className="d-flex flex-column h-100 position-relative">
									<ul className="ps-3 custom-scroll" style={{ maxHeight: '280px', overflowY: 'auto', paddingRight: '8px' }}>

										<li className="position-relative z-1 mb-4">
											<div className="d-flex gap-2">
												<p className="text-300 text-nowrap fw-regular mb-0" style={{ fontFamily: 'var(--dmMono)', fontSize: '0.78rem' }}>2025</p>
												<div>
													<span className="text-primary-2 fw-medium">SofiaMed — Assistente Virtual com IA</span>
													<p className="text-dark mt-1 mb-0">SaaS para automatizar atendimentos e agendamentos em clínicas. LLM + Evolution API + WhatsApp.</p>
												</div>
											</div>
										</li>

										<li className="position-relative z-1 mb-4">
											<div className="d-flex gap-2">
												<p className="text-300 text-nowrap fw-regular mb-0" style={{ fontFamily: 'var(--dmMono)', fontSize: '0.78rem' }}>2025</p>
												<div>
													<span className="text-primary-2 fw-medium">Infra Local com LLMs + Segurança de Rede</span>
													<p className="text-dark mt-1 mb-0">Modelos open-source em GPU local integrados a inspeção SSL para análise de tráfego.</p>
												</div>
											</div>
										</li>

										<li className="position-relative z-1 mb-4">
											<div className="d-flex gap-2">
												<p className="text-300 text-nowrap fw-regular mb-0" style={{ fontFamily: 'var(--dmMono)', fontSize: '0.78rem' }}>2025</p>
												<div>
													<span className="text-primary-2 fw-medium">Simulador de Custos de Importação</span>
													<p className="text-dark mt-1 mb-0">Sistema para simular FOB/CIF, impostos e margens. Lógica fiscal automatizada em tempo real.</p>
												</div>
											</div>
										</li>

										<li className="position-relative z-1 mb-3">
											<div className="d-flex gap-2">
												<p className="text-300 text-nowrap fw-regular mb-0" style={{ fontFamily: 'var(--dmMono)', fontSize: '0.78rem' }}>2025</p>
												<div>
													<span className="text-primary-2 fw-medium">Infra Inteligente para Logística em E-commerce</span>
													<p className="text-dark mt-1 mb-0">Ecossistema integrado com marketplaces — estoque, precificação e sincronização automatizados.</p>
												</div>
											</div>
										</li>

									</ul>
									<div className="line-left position-absolute top-0 border-start z-0" />
								</div>
								<div className="bg-overlay position-absolute bottom-0 start-0 z-1" />
							</div>
						</div>

					</div>
				</div>
			</section>
		</>
	)
}
