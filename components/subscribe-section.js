"use client";

import { useState } from "react";

export default function SubscribeSection() {
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log({ name, email });
	};

	return (
		<section id="subscribe" className="container mx-auto">
			<div className="grid md:grid-cols-2 gap-12 py-30">
				<div>
					<h2 className="text-3xl font-bold mb-4 text-gray-800">
						Berlangganan ke Newsletter Kami
					</h2>
				</div>
				<div>
					<p className="text-gray-600 mb-6">
						Dapatkan berita terbaru, artikel inspiratif, dan informasi eksklusif
						langsung di kotak masuk Anda. Bergabunglah dengan newsletter kami
						dan tetap terhubung dengan perkembangan terbaru dari kami.
					</p>
					<form onSubmit={handleSubmit}>
						<div className="mb-4">
							<label
								htmlFor="name"
								className="block text-sm font-medium text-gray-700 mb-1"
							>
								Nama
							</label>
							<input
								type="text"
								id="name"
								value={name}
								onChange={(e) => setName(e.target.value)}
								className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gray-500"
								required
							/>
						</div>
						<div className="mb-6">
							<label
								htmlFor="email"
								className="block text-sm font-medium text-gray-700 mb-1"
							>
								Email
							</label>
							<input
								type="email"
								id="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gray-500"
								required
							/>
						</div>
						<button
							type="submit"
							className="bg-gray-800 text-white font-medium py-3 px-6 rounded-full hover:bg-gray-700 transition-colors"
						>
							Submit
						</button>
					</form>
				</div>
			</div>
		</section>
	);
}
