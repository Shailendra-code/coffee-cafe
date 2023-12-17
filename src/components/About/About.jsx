import React from "react";

const About = () => {
    return (
        <div className="flex">
            <img
                src="https://cdn.pixabay.com/photo/2018/06/29/08/15/doodle-3505459_1280.png"
                alt="about image"
                className="w-1/2"
            />
            <div className="pt-40">
                <h2 className="text-[50px] font-[500]">
                    welcome to coffee cafe
                </h2>
                <h3 className="text-[30px]">
                    I hope you guys really like this enviromnet{" "}
                </h3>
                <p className="text-[15px]">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nobis incidunt, magni neque minus suscipit debitis ipsa?
                    Enim beatae iusto dolor impedit debitis eligendi, sunt
                    asperiores, corrupti suscipit omnis blanditiis accusamus.
                </p>
                <button className="mt-20 bg-orange-400 p-3 text-[20px] font-[600] rounded px-8">
                    Join Us!
                </button>
            </div>
        </div>
    );
};

export default About;
