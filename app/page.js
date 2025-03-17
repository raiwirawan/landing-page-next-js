import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import SubscribeSection from "@/components/subscribe-section";
import SecondaryHero from "@/components/secondary-hero";
import FeaturedSection from "@/components/featured-section";
import NumberedSection from "@/components/numbered-section";
import PresentersSection from "@/components/presenters-section";
import FinalCta from "@/components/final-cta";
import Footer from "@/components/footer";

export default function Home() {
	return (
		<main className="min-h-screen">
			<Navbar />
			<Hero />
			<SubscribeSection />
			<SecondaryHero />
			<FeaturedSection />
			<NumberedSection />
			<PresentersSection />
			<FinalCta />
			<Footer />
		</main>
	);
}
