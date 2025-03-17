import Link from "next/link";
import Image from "next/image";

export default function FeaturedSection() {
	return (
		<section id="featured-section" className="container mx-auto py-16">
			<div className="grid md:grid-cols-2 gap-12 items-center">
				<div className="bg-gray-200 min-h-[300px] rounded-lg relative">
					<Image
						src={"/images/featured-image.webp"}
						fill
						style={{ objectFit: "cover", objectPosition: "center" }}
						className="w-full h-full rounded-lg"
						alt="Gambar Featured"
					/>
				</div>
				<div>
					<h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
						Memberdayakan Cerita, Menghubungkan Orang
						<div>Melalui Keunggulan Media</div>
					</h2>
					<p className="text-gray-600 mb-8">
						Kami percaya bahwa setiap cerita memiliki kekuatan untuk
						menginspirasi dan menghubungkan orang. Dengan media yang unggul,
						kami membantu menyampaikan cerita-cerita tersebut kepada dunia.
					</p>
					<Link
						href="#numbered-section"
						className="inline-block bg-purple-700 text-white font-medium py-3 px-8 rounded-md hover:bg-purple-800 transition-colors"
					>
						LANJUTKAN
					</Link>
				</div>
			</div>
		</section>
	);
}
