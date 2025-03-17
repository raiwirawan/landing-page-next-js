import Link from "next/link";

export default function NumberedSection() {
	return (
		<section
			id="numbered-section"
			className="w-full bg-purple-700 bg-gradient-to-r from-purple-700 to-purple-600 text-white py-16 md:py-24 px-6 md:px-12"
		>
			<div className="container mx-auto px-10">
				<div className="py-20 w-full flex flex-row gap-[7em]">
					<div className="flex-1/2">
						<h2 className="text-3xl font-bold mb-6">
							Misi 01: Menginspirasi Melalui Cerita
						</h2>
						<p className="mb-8 opacity-90">
							Kami berkomitmen untuk menginspirasi masyarakat melalui
							cerita-cerita yang bermakna dan mendalam. Dengan menyajikan konten
							yang berkualitas, kami berharap dapat memberikan wawasan baru dan
							memotivasi perubahan positif.
						</p>
						<Link
							href="#presenters-section"
							className="inline-block bg-white text-purple-700 font-medium py-3 px-8 rounded-md hover:bg-gray-100 transition-colors"
						>
							LANJUTKAN
						</Link>
					</div>
					<div className="flex-1/2">
						<h2 className="text-3xl font-bold mb-6">
							Misi 02: Menghubungkan Komunitas
						</h2>
						<p className="mb-8 opacity-90">
							Kami bertujuan untuk menghubungkan berbagai komunitas melalui
							platform media kami. Dengan menyediakan ruang untuk berbagi cerita
							dan pengalaman, kami membantu membangun hubungan yang lebih erat
							dan saling memahami antar individu dan kelompok.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
