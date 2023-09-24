

const CategoryList = () => {
    return (
        <div className="max-w-6xl mx-auto my-10">
            <h2 className="text-5xl font-semibold text-center">Job Category List</h2>
            <p className="text-base text-gray-500 text-center mt-3">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="max-w-6xl flex gap-10 my-8">
                <div className="box-content w-52 bg-violet-50 px-10 py-10">
                    <img src="/src/assets/icons/accounts.png" alt="" />
                    <h4 className="text-xl font-medium mt-5">Account & Finance</h4>
                    <p className="text-base font-normal mt-2 text-gray-500">300 Jobs Available</p>
                </div>
                <div className="box-content w-52 bg-violet-50 px-10 py-10">
                    <img src="/src/assets/icons/creative.png" alt="" />
                    <h4 className="text-xl font-medium mt-5">Creative Design</h4>
                    <p className="text-base font-normal mt-2 text-gray-500">100 Jobs Available</p>
                </div>
                <div className="box-content w-52 bg-violet-50 px-10 py-10">
                    <img src="/src/assets/icons/marketing.png" alt="" />
                    <h4 className="text-xl font-medium mt-5">Marketing & Sales</h4>
                    <p className="text-base font-normal mt-2 text-gray-500">150 Jobs Available</p>
                </div>
                <div className="box-content w-52 bg-violet-50 px-10 py-10">
                    <img src="/src/assets/icons/chip.png" alt="" />
                    <h4 className="text-xl font-medium mt-5">Engineering Job</h4>
                    <p className="text-base font-normal mt-2 text-gray-500">224 Jobs Available</p>
                </div>
            </div>
        </div>
    );
};

export default CategoryList;