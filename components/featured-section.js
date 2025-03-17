import Link from "next/link";

export default function FeaturedSection() {
	return (
		<section className="w-full py-16 px-6 md:px-12">
			<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
				<div className="bg-gray-200 min-h-[300px] rounded-lg">
					{/* Auditorium image container - left empty as requested */}
				</div>
				<div>
					<h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
						Write a captivating header here
					</h2>
					<p className="text-gray-600 mb-8">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
						mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
						fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
						vitae mattis tellus.
					</p>
					<Link
						href="#"
						className="inline-block bg-purple-700 text-white font-medium py-3 px-8 rounded-md hover:bg-purple-800 transition-colors"
					>
						CALL TO ACTION
					</Link>
				</div>
			</div>
		</section>
	);
}
