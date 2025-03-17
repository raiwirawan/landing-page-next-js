import Link from "next/link";

export default function FinalCta() {
	return (
		<section className="w-full py-16 px-6 md:px-12 text-center">
			<div className="max-w-3xl mx-auto">
				<h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">
					Write a captivating header here to engage your customers
				</h2>
				<Link
					href="#"
					className="inline-block bg-purple-700 text-white font-medium py-3 px-8 rounded-md hover:bg-purple-800 transition-colors"
				>
					CALL TO ACTION
				</Link>
			</div>
		</section>
	);
}
