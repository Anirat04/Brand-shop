/* eslint-disable react/no-unescaped-entities */
// import AOS from 'aos';
// // // import 'aos/dist/aos.css'; // Import AOS styles
// import { useEffect } from "react";
const Team = () => {
    // useEffect(() => {
    //     AOS.init({
    //         duration: 800,
    //         offset: 200,
    //         easing: 'linear',
    //         // Other options...
    //     });
    // }, []); // Run once after the component mounts
    return (
        <div className="my-[150px]">
            <div className="common-heading text-center mb-[100px]">

                <h2
                    className="text-[#2b87ff] text-[60px] font-bold"
                    style={
                        {
                            fontFamily: "'Rubik', sans-serif"
                        }
                    }>
                    New Arrival Products
                </h2>
                <h3
                    // data-aos="fade-right"
                    // data-aos-anchor-placement="center-bottom"
                    className="text-3xl text-black"
                    style={{ fontFamily: "'Pacifico', cursive" }}>
                    Of Our best brand's
                </h3>
            </div>
            <div className="team-container flex justify-center gap-8">

                <div
                    // data-aos="fade-up"
                    // data-aos-anchor-placement="center-bottom"
                    className="card w-96 bg-base-100 shadow-xl rounded-none">
                    <figure><img className="min-w-full min-h-[400px] max-h-[400px]" src="https://i.ibb.co/RYM4RkY/adidas-shoe-2.jpg" alt="Shoes" /></figure>

                    <div className="card-body flex items-center text-center bg-[#f4f3f0]">
                        <h2 className="card-title text-black font-bold text-[26px]">Response Run</h2>
                        <p className="font-bold text-gray-400 text-[18px]">Adidas</p>
                    </div>
                </div>
                <div
                    // data-aos="fade-up"
                    // data-aos-anchor-placement="center-bottom"
                    className="card w-96 bg-base-100 shadow-xl rounded-none">
                    <figure><img className="min-w-full min-h-[400px] max-h-[400px]" src="https://i.ibb.co/9bmp4Xb/7545521505-6-1-1.jpg" alt="Shoes" /></figure>

                    <div className="card-body flex items-center text-center bg-[#f4f3f0]">
                        <h2 className="card-title text-black font-bold text-[26px]">Havy Green</h2>
                        <p className="font-bold text-gray-400 text-[18px]">H&M</p>
                    </div>
                </div>
                <div
                    // data-aos="fade-left"
                    // data-aos-anchor-placement="center-bottom"
                    className="card w-96 bg-base-100 shadow-xl rounded-none">
                    <figure><img className="min-w-full min-h-[400px] max-h-[400px]" src="https://i.ibb.co/dMJT9sK/7545521401-6-1-1.jpg" alt="Shoes" /></figure>

                    <div className="card-body flex items-center text-center bg-[#f4f3f0]">
                        <h2 className="card-title text-black font-bold text-[26px]">Clasic Oxford</h2>
                        <p className="font-bold text-gray-400 text-[18px]">Zara</p>
                    </div>
                </div>
                <div
                    // data-aos="fade-up"
                    // data-aos-anchor-placement="center-bottom"
                    className="card w-96 bg-base-100 shadow-xl rounded-none">
                    <figure><img className="min-w-full" src="https://i.ibb.co/T8Hj58b/air-max-90-mens-shoes-6n3v-KB.jpg" alt="Shoes" /></figure>

                    <div className="card-body flex items-center text-center bg-[#f4f3f0]">
                        <h2 className="card-title text-black font-bold text-[26px]">Air Force 2023</h2>
                        <p className="font-bold text-gray-400 text-[18px]">Nike</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;