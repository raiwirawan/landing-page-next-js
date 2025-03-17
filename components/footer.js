import Link from "next/link";

export default function Footer() {
	return (
		<footer className="w-full py-6 px-6 md:px-12 border-t border-gray-200">
			<div className="max-w-6xl mx-auto flex justify-between items-center">
				<div className="h-8 w-24 relative flex items-center">
					<span className="font-bold text-lg">LOGO</span>
				</div>

				<div className="flex items-center space-x-4">
					<Link href="#" aria-label="Instagram">
						<div className="h-8 w-8 bg-gray-800 rounded-full flex items-center justify-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="text-white"
							>
								<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
								<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
								<line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
							</svg>
						</div>
					</Link>
					<Link href="#" aria-label="Facebook">
						<div className="h-8 w-8 bg-gray-800 rounded-full flex items-center justify-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="text-white"
							>
								<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
							</svg>
						</div>
					</Link>
				</div>
			</div>
		</footer>
	);
}
