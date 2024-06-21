import Blogs from "@/components/Home/Blogs";
import Build from "@/components/Home/Build";
import Features from "@/components/Home/Features";
import Hero from "@/components/Home/Hero";
import LearnMore from "@/components/Home/LearnMore";
import Testimonial from "@/components/Home/Testimonial";

export default function Home() {
	return (
		<>
			<Hero />
			<Features />
			<LearnMore />
			<Build />
			<Testimonial />
			<Blogs />
		</>
	)
}
