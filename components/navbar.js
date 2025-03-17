import Link from "next/link";
import Instagram from "./icons/instagram";
import LinkedIn from "./icons/linkedin";

export default function Navbar() {
	return (
		<header className="py-4 bg-white w-full fixed top-0 z-[100]">
			<nav className="container mx-auto flex justify-between items-center">
				<div className="flex items-center">
					<div className="h-8 w-24 relative flex items-center">
						<span className="font-bold text-lg">RAIMEDIA.</span>
					</div>
				</div>

				<div className="flex items-center space-x-4">
					<Link
						href="https://www.instagram.com/raiwirawann/"
						aria-label="Instagram"
					>
						<div className="h-8 w-8 flex items-center justify-center">
							<Instagram color="#000" />
						</div>
					</Link>
					<Link
						href="https://www.linkedin.com/in/raiwirawan/"
						aria-label="LinkedIn"
					>
						<div className="h-8 w-8 flex items-center justify-center">
							<LinkedIn color="#000" />
						</div>
					</Link>
				</div>
			</nav>
		</header>
	);
}
