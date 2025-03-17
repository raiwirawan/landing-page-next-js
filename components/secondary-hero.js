import Image from "next/image";
import Link from "next/link";

export default function SecondaryHero() {
	return (
		<section className="w-full relative">
			<div className="relative w-full h-full">
				<div className="absolute inset-0 bg-purple-700 bg-gradient-to-r from-purple-700 to-purple-600"></div>
				<div className="relative flex flex-row max-w-[100em] w-full mx-auto">
					<div className="flex-1/2 text-white px-6 py-50 md:px-12">
						<div className="py-4">
							<h2 className="text-3xl md:text-4xl font-bold mb-6">
								Memberdayakan Cerita, Menghubungkan Orang
								<div>Melalui Keunggulan Media</div>
							</h2>
							<Link
								href="#featured-section"
								className="inline-block bg-white text-purple-700 font-medium py-3 px-8 rounded-md hover:bg-gray-100 transition-colors"
							>
								LANJUTKAN
							</Link>
						</div>
					</div>
					<div className="flex-1/2 bg-gray-200 min-h-[300px] md:min-h-[400px] relative">
						<Image
							src={"/images/secondary-hero.webp"}
							fill
							style={{ objectFit: "cover", objectPosition: "center" }}
							className="w-full h-full"
							alt="Gambar Secondary Hero"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
