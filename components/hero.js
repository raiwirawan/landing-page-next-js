import Link from "next/link";
import Image from "next/image";

export default function Hero() {
	return (
		<section id="hero-section" className="w-full relative">
			<Image
				src="/images/hero-image.webp"
				alt="Gambar Hero"
				fill
				style={{ objectFit: "cover", objectPosition: "center" }}
				className="absolute top-0 left-0 z-[-1]"
			/>
			<div className="relative w-full h-full text-white py-60">
				<div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-transparent"></div>
				<div className="relative container mx-auto z-[20]">
					<div className="mb-4">
						<span className="text-lg font-medium">Januari - Desember</span>
					</div>
					<h1 className="text-4xl md:text-5xl font-bold mb-6">
						Memberdayakan Cerita, Menghubungkan Orang
						<div>Melalui Keunggulan Media</div>
					</h1>
					<p className="text-lg mb-8 opacity-90 max-w-2xl">
						Kami adalah perusahaan media yang berkomitmen untuk memberdayakan
						cerita dan menghubungkan orang melalui keunggulan media. Dengan
						berbagai platform dan teknologi canggih, kami menghadirkan konten
						yang informatif, menginspirasi, dan menghibur untuk audiens kami di
						seluruh dunia.
					</p>
					<Link
						href="#subscribe"
						className="inline-block bg-white text-purple-700 font-medium py-3 px-8 rounded-md hover:bg-gray-100 transition-colors"
					>
						JELAJAHI
					</Link>
				</div>
			</div>
		</section>
	);
}
