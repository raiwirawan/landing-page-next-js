import Link from "next/link";

export default function SecondaryHero() {
	return (
		<section className="w-full">
			<div className="grid md:grid-cols-2">
				<div className="bg-purple-700 bg-gradient-to-r from-purple-700 to-purple-600 text-white py-16 md:py-24 px-6 md:px-12">
					<div className="max-w-xl">
						<h2 className="text-3xl md:text-4xl font-bold mb-6">
							Write a captivating header here to engage your customers
						</h2>
						<Link
							href="#"
							className="inline-block bg-white text-purple-700 font-medium py-3 px-8 rounded-md hover:bg-gray-100 transition-colors"
						>
							CALL TO ACTION
						</Link>
					</div>
				</div>
				<div className="bg-gray-200 min-h-[300px] md:min-h-[400px]">
					{/* Image container - left empty as requested */}
				</div>
			</div>
		</section>
	);
}
