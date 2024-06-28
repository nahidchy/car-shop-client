import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Happy = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
  };

  return (
    <div className="mb-40 my-32 font-poppins container">
      <h2 className="font-black-ops text-3xl lg:text-5xl text-center mb-20">
        Happy Clients
      </h2>
      <Slider {...settings}>
        <div>
          <div className="flex flex-col md:flex-row gap-20 justify-center">
            <div className="w-full md:w-1/4">
            <div className="flex items-center gap-3">
              <div>
                <img
                  className="w-20 h-20 rounded-full object-cover"
                  src="https://img.freepik.com/free-photo/smiling-young-male-professional-standing-with-arms-crossed-while-making-eye-contact-against-isolated-background_662251-838.jpg?t=st=1719464862~exp=1719468462~hmac=89507791ccef7269c7d45c3812c9ade60fae8882e6433be85e6018a5a8e1f57a&w=740"
                  alt=""
                />
              </div>
              <div>
                <p>Abdullah Al Mamun</p>
                <p className="text-blue-400">Regular client</p>
              </div>
               
            </div>
            <p className="mt-10">The team was incredibly professional and the service exceeded my expectations. I highly recommend them!</p>
            </div>
            <div className="w-full md:w-1/4">
            <div className="flex items-center gap-3">
              <div>
                <img
                  className="w-20 h-20 rounded-full object-cover"
                  src="https://t4.ftcdn.net/jpg/01/56/19/15/360_F_156191504_F8KusEJnAdRbyztflKKtQnnU43GIyWv4.jpg"
                  alt=""
                />
              </div>
              <div>
                <p>Mr. Jack</p>
                <p className="text-blue-400">Regular client</p>
              </div>
               
            </div>
            <p className="mt-10">Amazing experience from start to finish. The staff was friendly, and the quality of work was top-notch.</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col md:flex-row gap-20 justify-center">
            <div className="w-full md:w-1/4">
            <div className="flex items-center gap-3">
              <div>
                <img
                  className="w-20 h-20 rounded-full object-cover"
                  src="https://img.freepik.com/free-photo/smiling-young-male-professional-standing-with-arms-crossed-while-making-eye-contact-against-isolated-background_662251-838.jpg?t=st=1719464862~exp=1719468462~hmac=89507791ccef7269c7d45c3812c9ade60fae8882e6433be85e6018a5a8e1f57a&w=740"
                  alt=""
                />
              </div>
              <div>
                <p>Abdullah Al Mamun</p>
                <p className="text-blue-400">Regular client</p>
              </div>
               
            </div>
            <p className="mt-10">The team was incredibly professional and the service exceeded my expectations. I highly recommend them!</p>
            </div>
            <div className="w-full md:w-1/4">
            <div className="flex items-center gap-3">
              <div>
                <img
                  className="w-20 h-20 rounded-full object-cover"
                  src="https://t4.ftcdn.net/jpg/01/56/19/15/360_F_156191504_F8KusEJnAdRbyztflKKtQnnU43GIyWv4.jpg"
                  alt=""
                />
              </div>
              <div>
                <p>Mr. Jack</p>
                <p className="text-blue-400">Regular client</p>
              </div>
               
            </div>
            <p className="mt-10">Amazing experience from start to finish. The staff was friendly, and the quality of work was top-notch.</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col md:flex-row gap-20 justify-center">
            <div className="w-full md:w-1/4">
            <div className="flex items-center gap-3">
              <div>
                <img
                  className="w-20 h-20 rounded-full object-cover"
                  src="https://img.freepik.com/free-photo/smiling-young-male-professional-standing-with-arms-crossed-while-making-eye-contact-against-isolated-background_662251-838.jpg?t=st=1719464862~exp=1719468462~hmac=89507791ccef7269c7d45c3812c9ade60fae8882e6433be85e6018a5a8e1f57a&w=740"
                  alt=""
                />
              </div>
              <div>
                <p>Abdullah Al Mamun</p>
                <p className="text-blue-400">Regular client</p>
              </div>
               
            </div>
            <p className="mt-10">The team was incredibly professional and the service exceeded my expectations. I highly recommend them!</p>
            </div>
            <div className="w-full md:w-1/4">
            <div className="flex items-center gap-3">
              <div>
                <img
                  className="w-20 h-20 rounded-full object-cover"
                  src="https://t4.ftcdn.net/jpg/01/56/19/15/360_F_156191504_F8KusEJnAdRbyztflKKtQnnU43GIyWv4.jpg"
                  alt=""
                />
              </div>
              <div>
                <p>Mr. Jack</p>
                <p className="text-blue-400">Regular client</p>
              </div>
               
            </div>
            <p className="mt-10">Amazing experience from start to finish. The staff was friendly, and the quality of work was top-notch.</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col md:flex-row gap-20 justify-center">
            <div className="w-full md:w-1/4">
            <div className="flex items-center gap-3">
              <div>
                <img
                  className="w-20 h-20 rounded-full object-cover"
                  src="https://img.freepik.com/free-photo/smiling-young-male-professional-standing-with-arms-crossed-while-making-eye-contact-against-isolated-background_662251-838.jpg?t=st=1719464862~exp=1719468462~hmac=89507791ccef7269c7d45c3812c9ade60fae8882e6433be85e6018a5a8e1f57a&w=740"
                  alt=""
                />
              </div>
              <div>
                <p>Abdullah Al Mamun</p>
                <p className="text-blue-400">Regular client</p>
              </div>
               
            </div>
            <p className="mt-10">The team was incredibly professional and the service exceeded my expectations. I highly recommend them!</p>
            </div>
            <div className="w-full md:w-1/4">
            <div className="flex items-center gap-3">
              <div>
                <img
                  className="w-20 h-20 rounded-full object-cover"
                  src="https://t4.ftcdn.net/jpg/01/56/19/15/360_F_156191504_F8KusEJnAdRbyztflKKtQnnU43GIyWv4.jpg"
                  alt=""
                />
              </div>
              <div>
                <p>Mr. Jack</p>
                <p className="text-blue-400">Regular client</p>
              </div>
               
            </div>
            <p className="mt-10">Amazing experience from start to finish. The staff was friendly, and the quality of work was top-notch.</p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Happy;
