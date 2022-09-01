const themes = [
	"light",
	"dark",
	"cupcake",
	"bumblebee",
	"emerald",
	"corporate",
	"synthwave",
	"retro",
	"cyberpunk",
	"valentine",
	"halloween",
	"garden",
	"forest",
	"aqua",
	"lofi",
	"pastel",
	"fantasy",
	"wireframe",
	"black",
	"luxury",
	"dracula",
	"cmyk",
	"autumn",
	"business",
	"acid",
	"lemonade",
	"night",
	"coffee",
	"winter",
];

export default function NavigationBar() {
	const users = sessionStorage.getItem("user");

	return (
		<div className="navbar bg-base-100">
			<div className="flex-1">
				<a className="btn btn-ghost normal-case text-xl">Fullfy Octo Enigma</a>
			</div>
			<div className="flex-none">
				<ul className="menu menu-horizontal p-0">
					<li tabIndex="0">
						<a>
							🎴 Theme
							<svg
								className="fill-current"
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 24 24">
								<path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
							</svg>
						</a>
						<ul className="p-2 bg-base-100">
							{themes.map((theme, index) => (
								<button
									key={index + 1}
									data-set-theme={theme}
									data-act-class="ACTIVECLASS">
									{theme.toUpperCase()}
								</button>
							))}
						</ul>
					</li>
					{users ? (
						<li>
							<a href="/dashboard">Dashboard</a>
						</li>
					) : (
						<>
							<li>
								<a href="/signin">Sign in</a>
							</li>
							<li>
								<a href="/signup">Sign up</a>
							</li>
						</>
					)}
				</ul>
			</div>
		</div>
	);
}
