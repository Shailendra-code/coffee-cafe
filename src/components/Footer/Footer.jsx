import React from "react";

const Footer = () => {
    return (
        <div className="border-y mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 flex justify-between">
            <div className="flex gap-10">
                <img
                    src="https://cdn.pixabay.com/photo/2023/12/07/08/34/couple-8435096_1280.png"
                    alt="footer img"
                    className="w-28 rounded"
                />
                <div className="flex justify-between flex-col">
                    <h4 className="text-xl font-[500]">
                        This session try somthing new
                    </h4>
                    <h5 className="text-gray-500">
                        &copy;copyright shailendrarawat82599@gmail.com
                    </h5>
                </div>
            </div>

            {/* left div  */}
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 ">
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                        home
                    </h2>
                    <ul className="text-gray-500 font-medium">
                        <li className="mb-4 hover:underline">Heyy</li>
                        <li>Hello</li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                        Resources
                    </h2>
                    <ul className="text-gray-500 font-medium">
                        <li className="mb-4 hover:underline">WE</li>
                        <li>Here</li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                        About
                    </h2>
                    <ul className="text-gray-500 font-medium">
                        <li className="mb-4 hover:underline">Provide</li>
                        <li>Best</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;
