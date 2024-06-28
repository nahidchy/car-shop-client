import Faq from "../Faq/Faq";
import Header from "../Header/Header";
import OurBrands from "../OurBrands/OurBrands";
import PopularCars from "../PopularCars/PopularCars";
import WhyChose from "../WhyChose/WhyChose";
import Happy from './../Happy/Happy';

const Home = () => {
    return (
        <div>
         <Header/>
         <OurBrands/>
         <PopularCars/>
         <WhyChose/>
         <Happy/>
         <Faq/>
        
        </div>
    );
};

export default Home;