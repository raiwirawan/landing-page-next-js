export default function SpeakersSection() {
	return (
		<section className="w-full py-16 px-6 md:px-12">
			<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
				<div className="flex items-start space-x-6">
					<div className="w-32 h-40 bg-gray-200 rounded-lg flex-shrink-0">
						{/* Speaker image container - left empty as requested */}
					</div>
					<div>
						<h3 className="text-2xl font-bold mb-2 text-gray-800">
							Speaker Name
						</h3>
						<p className="text-gray-600 mb-2">Lorem ipsum dolor</p>
						<p className="text-gray-600">Lorem ipsum dolor</p>
					</div>
				</div>
				<div className="flex items-start space-x-6">
					<div className="w-32 h-40 bg-gray-200 rounded-lg flex-shrink-0">
						{/* Speaker image container - left empty as requested */}
					</div>
					<div>
						<h3 className="text-2xl font-bold mb-2 text-gray-800">
							Speaker Name
						</h3>
						<p className="text-gray-600 mb-2">Lorem ipsum dolor</p>
						<p className="text-gray-600">Lorem ipsum dolor</p>
					</div>
				</div>
			</div>
		</section>
	);
}
