import Link from "next/link";
import Image from "next/image";

export default function Hero() {
	return (
		<section className="w-full relative h-[100vh]">
			<Image
				src="/images/hero-image.webp"
				alt="Hero Image"
				fill
				style={{ objectFit: "cover", objectPosition: "center" }}
				className="absolute top-0 left-0 z-[-1]"
			/>
			<div className="relatives bg-purple-700 w-full h-full top-0 left-0 bg-gradient-to-r from-purple-700 to-transparent text-white">
				<div className="max-w-3xl">
					<div className="mb-4">
						<span className="text-lg font-medium">May - July</span>
					</div>
					<h1 className="text-4xl md:text-5xl font-bold mb-6">
						Write a captivating header here to engage
						<div>your customers</div>
					</h1>
					<p className="text-lg mb-8 opacity-90 max-w-2xl">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
						mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
						fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
						vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor
						ornare leo, non suscipit magna interdum eu. Curabitur pellentesque
						nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo
						lacus at sodales sodales.
					</p>
					<Link
						href="#"
						className="inline-block bg-white text-purple-700 font-medium py-3 px-8 rounded-md hover:bg-gray-100 transition-colors"
					>
						CALL TO ACTION
					</Link>
				</div>
			</div>
		</section>
	);
}
