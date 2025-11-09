import Link from 'next/link'

export default function OffCanvas({ isOffCanvas, handleOffCanvas }: any) {
	return (
		<>
			{/* offCanvas-menu */}
			<div className={`offCanvas__info ${isOffCanvas ? 'active' : ''}`}>
					<div className="offCanvas__close-icon menu-close" onClick={handleOffCanvas}>
						<button><i className="ri-close-line" /></button>
					</div>
					<div className="offCanvas__logo mb-5">
						<h3 className="mb-0">Entre em Contato</h3>
					</div>
					<div className="offCanvas__side-info mb-30">
						<div className="contact-list mb-30">
							<p className="fs-6 fw-medium text-200 mb-5">Estou ansioso para ajudar você a resolver seu problema.</p>
							<div className="mb-3">
								<span className="text-400 fs-5">WhatsApp</span>
								<p className="mb-0">+55 (12) 98898-1079</p>
							</div>
							<div className="mb-3">
								<span className="text-400 fs-5">Email</span>
								<p className="mb-0">brunobueno@croma.dev</p>
							</div>
							<div className="mb-3">
								<span className="text-400 fs-5">GitHub</span>
								<p className="mb-0">brunoobueno</p>
							</div>
							<div className="mb-3">
								<span className="text-400 fs-5">Endereço</span>
								<p className="mb-0">Lorena / São Paulo</p>
							</div>
						</div>
						<div className="contact-list">
							<p className="text-400 fs-5 mb-2">Redes Sociais</p>
							<div className="d-md-flex d-none gap-3">
								<Link href="https://www.linkedin.com/in/bruno-bueno-1711351a0/">
									<i className="ri-linkedin-fill fs-18" />
								</Link>
								<Link href="https://github.com/brunoobueno">
									<i className="ri-github-fill fs-18" />
								</Link>
							</div>
						</div>
					</div>
				</div>
			<div className={`offCanvas__overly ${isOffCanvas ? 'active' : ''}`}  onClick={handleOffCanvas}/>
		</>
	)
}
