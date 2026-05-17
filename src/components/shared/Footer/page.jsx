const Home = () => {
    return (
        <div className="space-y-16">
            {/* Banner Section [cite: 56] */}
            <section className="bg-orange-100 rounded-2xl p-10 text-center md:text-left flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 space-y-4">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
                        Find Your New Best Friend 🐶
                    </h1>
                    <p className="text-gray-600 text-lg">
                        Give a loving home to an animal in need. Browse our available pets and adopt today!
                    </p>
                    <button className="bg-orange-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-orange-600 transition shadow-lg mt-4">
                        Adopt Now
                    </button>
                </div>
                <div className="flex-1">
                    {/* Placeholder for Banner Image */}
                    <img src="https://via.placeholder.com/500x400?text=Pet+Banner" alt="Pet Banner" className="rounded-xl shadow-md w-full" />
                </div>
            </section>

            {/* Featured Pets Section [cite: 59] */}
            <section>
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Featured Pets</h2>
                {/* 6টি কার্ডের জন্য Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* এখানে ম্যাপ করে Pet Card রেন্ডার করা হবে */}
                    <div className="border rounded-xl p-4 shadow hover:shadow-lg transition">
                        <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
                        <h3 className="text-xl font-semibold">Max</h3>
                        <p className="text-gray-500">Dog - Golden Retriever</p>
                        <button className="mt-4 w-full border border-orange-500 text-orange-500 py-2 rounded-md hover:bg-orange-50 transition">
                            View Details
                        </button>
                    </div>
                </div>
            </section>

            {/* Extra Static Sections [cite: 61] */}
            <section className="bg-gray-100 p-10 rounded-2xl text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Adopt Pets?</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Adopting a pet saves lives and brings endless joy to your home...
                </p>
            </section>
        </div>
    );
};

export default Home;