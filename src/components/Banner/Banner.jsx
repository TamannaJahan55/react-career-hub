

const Banner = () => {
    return (
        <section className="bg-violet-50">
            <div className="flex justify-between gap-16 mx-20">
                <div className="w-1/2 mx-5">
                    <h2 className="text-7xl font-bold mt-10">One Step <br /> Closer To Your <br /> <span className="text-indigo-400">Dream Job</span></h2>
                    <p className="text-lg font-medium mt-6">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className="btn text-white rounded mt-5 mb-5 bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">Get Started</button>
                </div>
                <div className="w-1/2">
                    <img src="/src/assets/images/user.png" alt="" />
                </div>
            </div>
        </section>
    );
};

export default Banner;