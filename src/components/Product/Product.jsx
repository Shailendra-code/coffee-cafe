import React from "react";
import { Link, NavLink } from "react-router-dom";

const Product = () => {
    return (
        <div>
            <div className="grid grid-cols-2grid-cols-6 gap-4">
                <img
                    src="https://cdn.pixabay.com/photo/2020/04/17/12/49/barista-5055060_1280.jpg"
                    alt="cafe"
                    className="w-[500px] col-start-3 col-span-4"
                />
                <p className="col-start-2 col-end-3 row-start-1 row-end-3 pt-5 text-[40px] font-[500]">
                    Your text goes here <br />
                    <span className="text-[#2481c3]">try this one</span>
                </p>

                <img
                    src="https://cdn.pixabay.com/photo/2021/12/06/21/34/sweets-6851675_1280.jpg"
                    alt=""
                    className="w-[300px] col-start-2 col-end-3"
                />
                <h3 className="text-[50px] font-[500] col-start-3 row-start-3 pt-20">
                    hey have your try this
                </h3>
                <img
                    src="https://cdn.pixabay.com/photo/2019/12/02/11/23/drink-4667507_1280.jpg"
                    alt=""
                    className="w-[300px] col-end-7 col-span-2"
                />
                <img
                    src="https://cdn.pixabay.com/photo/2021/09/06/01/13/coffee-6600644_1280.jpg"
                    alt=""
                    className="w-[500px] col-start-3 col-end-6"
                />
            </div>
        </div>
    );
};

export default Product;
