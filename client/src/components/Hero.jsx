export default function Hero() {
	return (
		<>
			<div
				className="hero min-h-screen"
				style={{ backgroundImage: `url(https://placeimg.com/1000/800/arch)` }}>
				<div className="hero-overlay bg-opacity-60"></div>
				<div className="hero-content text-center text-neutral-content">
					<div className="max-w-md">
						<h1 className="mb-5 text-5xl font-bold">Hello there</h1>
						<p className="mb-5">
							Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
							excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
							id nisi.
						</p>
						<button className="btn btn-primary">Get Started</button>
					</div>
				</div>
			</div>
			<div className="hero min-h-screen bg-base-200">
				<div className="hero-content flex-col lg:flex-row">
					<img
						src="https://placeimg.com/260/400/arch"
						className="max-w-sm rounded-lg shadow-2xl"
					/>
					<div>
						<h1 className="text-5xl font-bold">Box Office News!</h1>
						<p className="py-6">
							Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
							excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
							id nisi.
						</p>
						<button className="btn btn-primary">Get Started</button>
					</div>
				</div>
			</div>
			<div className="hero min-h-screen bg-base-200">
				<div className="hero-content flex-col lg:flex-row-reverse">
					<img
						src="https://placeimg.com/260/400/arch"
						className="max-w-sm rounded-lg shadow-2xl"
					/>
					<div>
						<h1 className="text-5xl font-bold">Box Office News!</h1>
						<p className="py-6">
							Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
							excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
							id nisi.
						</p>
						<button className="btn btn-primary">Get Started</button>
					</div>
				</div>
			</div>
		</>
	);
}
