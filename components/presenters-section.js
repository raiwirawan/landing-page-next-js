import Image from "next/image";

export default function PresentersSection() {
	return (
		<section id="presenters-section" className="w-full py-16 px-10 md:px-12">
			<div className="container mx-auto flex flex-row">
				<div className="flex flex-1/2 items-start space-x-6">
					<div className="w-60 relative h-70 bg-gray-200 rounded-lg flex-shrink-0">
						<Image
							src={"/images/presenter-1.webp"}
							fill
							style={{ objectFit: "cover", objectPosition: "center" }}
							className="w-full h-full rounded-lg"
							alt="Gambar Presenter 1"
						/>
					</div>
					<div>
						<h3 className="text-2xl font-bold mb-2 text-gray-800">
							Francesca Lee
						</h3>
						<p className="text-gray-600 mb-2">Asal: New York, USA</p>
						<p className="text-gray-600">Usia: 27 tahun</p>
					</div>
				</div>
				<div className="flex flex-1/2 items-start space-x-6">
					<div className="w-60 relative h-70 bg-gray-200 rounded-lg flex-shrink-0">
						<Image
							src={"/images/presenter-2.webp"}
							fill
							style={{ objectFit: "cover", objectPosition: "center" }}
							className="w-full h-full rounded-lg"
							alt="Gambar Presenter 2"
						/>
					</div>
					<div>
						<h3 className="text-2xl font-bold mb-2 text-gray-800">
							Zadie Smith
						</h3>
						<p className="text-gray-600 mb-2">Asal: London, UK</p>
						<p className="text-gray-600">Usia: 35 tahun</p>
					</div>
				</div>
			</div>
		</section>
	);
}
