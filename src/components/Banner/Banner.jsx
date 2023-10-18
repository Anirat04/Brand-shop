const Banner = () => {
    return (
        <div>
            <div className="hero min-h-[600px]" style={{ backgroundImage: 'url(https://i.ibb.co/9Yt1Fpn/hero-2-jpg.webp)', backgroundSize:'cover', backgroundRepeat:'no-repeat'}}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md text-white">
                        <h1 className="mb-5 text-[60px] font-bold">Shop With Us</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;