import React from "react";

const Home = () => {
    return (
        <div className="mx-auto w-full max-w-7xl">
            <aside className="ralative rounded-lg overflow-hidden text-black mx-2 sm:py-16 sm:mx-16">
                <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 mx-auto lg:px-8 sm:py-24 sm:px-6">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-center sm:ml-auto">
                        <h2 className="text-4xl font-bold sm:text-5xl">
                            We provide best coffee in the town
                            <span className="text-4xl sm:block hidden text-gray-600">buy our goods</span>
                        </h2>
                        <button className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75">Order Now</button>
                    </div>
                </div>
                <div className="absolute inset-0 w-full pt-12 pl-16
                h-full sm:pt-1 sm:my-20">
                    <img
                        src="https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="first-image"
                        className="w-96"
                    />
                </div>
            </aside>
            <div className="grid place-items-center sm:mt-20">
                <img
                    src="https://cdn.pixabay.com/photo/2019/08/06/11/09/coffee-4388065_1280.jpg"
                    alt="home-img"
                    className="w-56 sm:w-96"
                />
                <h1 className="text col-end-1 text-2xl sm:text-5xl py-10 font-medium">we have best product</h1>
            </div>
        </div>
    );
};

export default Home;
