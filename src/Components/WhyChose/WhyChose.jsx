
const WhyChose = () => {
    return (
        <div className=" bg-zinc-900">
            <div className="container py-28 my-20 text-white">
            <h2 className="text-5xl font-black-ops text-center mb-16">Why Choose Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 font-poppins px-10">
                   <div className="border border-slate-600 rounded">
                       <div className="m-4 border border-slate-600 rounded hover:m-0 hover:border-0 p-10">
                           <h4 className="text-2xl">Premium Service</h4>
                           <p>Rent Car provides high-quality service to everyone who is looking for reliable car rentals.</p>
                       </div>
                   </div>
                   <div className="border border-slate-600 rounded">
                       <div className="m-4 border border-slate-600 rounded hover:m-0 hover:border-0 p-10">
                           <h4 className="text-2xl">
                           Variety of Locations</h4>
                           <p>We have a variety of car rental offices located throughout the USA in almost all 50 states.</p>
                       </div>
                   </div>
                   <div className="border border-slate-600 rounded">
                       <div className="m-4 border border-slate-600 rounded hover:m-0 hover:border-0 p-10">
                           <h4 className="text-2xl">
                           Qualified Team</h4>
                           <p>You can fully rely on our team of professionals who are always ready to help you.</p>
                       </div>
                   </div>
            </div>
        </div>
        </div>
    );
};

export default WhyChose;