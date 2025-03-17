"use client";

import { useState } from "react";

export default function SubscribeSection() {
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle form submission
		console.log({ name, email });
	};

	return (
		<section className="w-full py-16 px-6 md:px-12">
			<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
				<div>
					<h2 className="text-3xl font-bold mb-4 text-gray-800">
						Subscribe to our mailing list
					</h2>
				</div>
				<div>
					<p className="text-gray-600 mb-6">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
						mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
						fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
						vitae mattis tellus.
					</p>
					<form onSubmit={handleSubmit}>
						<div className="mb-4">
							<label
								htmlFor="name"
								className="block text-sm font-medium text-gray-700 mb-1"
							>
								Name
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
							Call to action
						</button>
					</form>
				</div>
			</div>
		</section>
	);
}
