
export default function Footer2() {
	return (
		<>
			<footer>
				<div className="section-footer-2 position-relative">
					<div className="container position-relative z-1 border-top border-1 pb-2 pt-4">
						<div className="text-center">
							<a className="d-flex main-logo align-items-center justify-content-center mb-3">
								<img src="assets/imgs/home-page-2/template/favicon.svg" alt="zelio" />
								<span className="fs-4 ms-2">Bruno.dev</span>
							</a>
							<div className="d-flex justify-content-center gap-3">
								<a href="https://www.linkedin.com/in/bruno-bueno-1711351a0/">
									<i className="ri-linkedin-fill fs-18" />
								</a>
								<a href="https://github.com/brunoobueno">
									<i className="ri-github-fill fs-18" />
								</a>
							</div>
							<div className="navigation d-flex align-items-center justify-content-center flex-wrap gap-4 my-4">
								<a href="#about" className="fs-6"> Sobre </a>
								<a href="#resume" className="fs-6"> Resumo </a>
								<a href="#services" className="fs-6"> Serviços </a>
								<a href="#portfolio" className="fs-6"> Projetos </a>
								<a href="#blog" className="fs-6"> Blog </a>
								<a href="#contact" className="fs-6"> Contato </a>
							</div>
						</div>
					</div>
				</div>
			</footer>

		</>
	)
}
