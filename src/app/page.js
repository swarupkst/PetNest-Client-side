
import Hero from "@/components/homepage/Hero/page";
import FeaturedPet from "@/components/homepage/FeaturedPet/page";

const MainLayout = () => {
    return (
        <div className="font-sans min-h-screen flex flex-col bg-gray-50">
            
        <Hero />
        <FeaturedPet />
        </div>
    );
};

export default MainLayout;