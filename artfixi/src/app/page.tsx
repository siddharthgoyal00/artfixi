import FeaturedCourses  from "@/components/FeaturedCourses"
import HeroSection from "@/components/HeroSection"
import ArtTestimonials from "@/components/TestimonialCards"
export default function Home() {
  return (
    <div className="  h-screen  ">
      <HeroSection></HeroSection>
      <FeaturedCourses></FeaturedCourses>
      <ArtTestimonials />
    </div>
  );
}
