import Link from "next/link";

export default function FinalCta() {
	return (
		<section className="w-full py-16 px-6 md:px-12 text-center">
			<div className="container mx-auto">
				<h2 className="text-[10em] md:text-[3.5em] font-bold mb-8 text-gray-800">
					Memberdayakan Cerita, Menghubungkan Orang
					<div>Melalui Keunggulan Media</div>
				</h2>
				<Link
					href="#hero-section"
					className="inline-block bg-purple-700 text-white font-medium py-3 px-8 rounded-md hover:bg-purple-800 transition-colors"
				>
					KEMBALI KE ATAS
				</Link>
			</div>
		</section>
	);
}
