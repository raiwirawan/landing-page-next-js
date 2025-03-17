import Link from "next/link";

export default function NumberedSection() {
	return (
		<section className="w-full bg-purple-700 bg-gradient-to-r from-purple-700 to-purple-600 text-white py-16 md:py-24 px-6 md:px-12">
			<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
				<div>
					<h2 className="text-3xl font-bold mb-6">Number 01</h2>
					<p className="mb-8 opacity-90">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
						mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
						fringilla, mattis ligula consectetur, ultrices mauris. Nullam quis
						imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna
						interdum eu.
					</p>
					<Link
						href="#"
						className="inline-block bg-white text-purple-700 font-medium py-3 px-8 rounded-md hover:bg-gray-100 transition-colors"
					>
						CALL TO ACTION
					</Link>
				</div>
				<div>
					<h2 className="text-3xl font-bold mb-6">Number 02</h2>
					<p className="mb-8 opacity-90">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
						mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
						fringilla, mattis ligula consectetur, ultrices mauris. Nullam quis
						imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna
						interdum eu.
					</p>
				</div>
			</div>
		</section>
	);
}
