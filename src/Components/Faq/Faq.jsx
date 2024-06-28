
import footage from './../../assets/car-video.mp4'
const Faq = () => {
   
    return (
      <div className="container flex flex-col lg:flex-row gap-10 justify-between items-center font-poppins my-40">
          <div className='w-full lg:w-1/2'>
          <h3 className='text-5xl font-black-ops mb-10'>Popular Questions</h3>
            <div className="collapse bg-base-200">
  <input type="radio" name="my-accordion-1" defaultChecked />
  <div className="collapse-title text-xl font-medium">Do you provide any scripts?</div>
  <div className="collapse-content">
    <p>Our templates do not include any additional scripts. Basic scripts can be easily added at www.zemez.io If you are not sure that the element you’re interested in is active please contact our Support.</p>
  </div>
</div>
<div className="collapse bg-base-200">
  <input type="radio" name="my-accordion-1" />
  <div className="collapse-title text-xl font-medium">What do I receive when I order a template?</div>
  <div className="collapse-content">
    <p>After you complete the payment via our secure form you will receive the instructions for downloading the product. The source files in the download package can vary based on the type of the product you have purchased.</p>
  </div>
</div>
<div className="collapse bg-base-200">
  <input type="radio" name="my-accordion-1" />
  <div className="collapse-title text-xl font-medium">What am I allowed to do with a template?</div>
  <div className="collapse-content">
    <p>You may build a website using the template in any way you like. You may not resell or redistribute templates (like we do); claim intellectual or exclusive ownership to any of our products, modified or unmodified. All products are property of content providing companies and individuals. You are also not allowed to make more than one project using the same template (you have to purchase the same template once more in order to make another project with the same design).</p>
  </div>
</div>
        </div>
        <div className='w-full lg:w-1/2'>
             <video autoPlay loop muted><source src={footage}/></video>
        </div>
      </div>
    );
};

export default Faq;