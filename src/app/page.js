
import Hero from "@/components/homepage/Hero/page";
import FeaturedPet from "@/components/homepage/FeaturedPet/page";
import WhyAdoptPet from "@/components/homepage/WhyAdoptPet/page";

const MainLayout = () => {
    return (
        <div className="font-sans min-h-screen flex flex-col bg-gray-50">
            
        <Hero />
        <FeaturedPet />
        <WhyAdoptPet />
        </div>
    );
};

export default MainLayout;