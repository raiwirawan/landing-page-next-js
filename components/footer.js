import Instagram from "./icons/instagram";
import LinkedIn from "./icons/linkedin";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="w-full py-6 px-6 md:px-12 border-t border-gray-200">
			<div className="max-w-6xl mx-auto flex justify-between items-center">
				<div className="h-8 w-24 relative flex items-center">
					<span className="font-bold text-lg">RAIMEDIA.</span>
				</div>

				<div className="flex items-center space-x-4">
					<Link
						href="https://www.instagram.com/raiwirawann/"
						aria-label="Instagram"
					>
						<div className="h-8 w-8 flex items-center justify-center">
							<Instagram size={16} color="#000" />
						</div>
					</Link>
					<Link
						href="https://www.linkedin.com/in/raiwirawan/"
						aria-label="LinkedIn"
					>
						<div className="h-8 w-8 flex items-center justify-center">
							<LinkedIn size={16} color="#000" />
						</div>
					</Link>
				</div>
			</div>
		</footer>
	);
}
