import React from 'react';

const Hero = ({dark}) => {
    return (
        <div id="hero"  >
            <div className="container w-[80%] mx-auto">
                <div className="hero pt-[140px]">
                <h1 className="text-6xl text-white leading-[140%]">Первый курс <br/>
                    по компьютерной сборке</h1>
                    <div className="hero-glav flex mt-14">
                        <div className="hero-card mr-7 w-[100px] h-[102px] bg-neutral-900 flex items-center justify-center flex-col">
                            <h1 className="text-white text-3xl font-bold" style={{
                                color: dark === true ? "red" : "white"
                            }}>18</h1>
                            <h4 className="text-white opacity-[0.4]">Дней</h4>
                        </div>
                        <div className="hero-card mr-7 w-[102px] h-[102px] bg-neutral-900 flex items-center justify-center flex-col">
                            <h1 className="text-white text-3xl font-bold" style={{
                                color: dark === true ? "red" : "white"
                            }}>18</h1>
                            <h4 className="text-white opacity-[0.4]">Часов</h4>
                        </div>
                        <div className="hero-card mr-7 w-[102px] h-[102px] bg-neutral-900 flex items-center justify-center flex-col">
                            <h1 className="text-white text-3xl font-bold" style={{
                                color: dark === true ? "red" : "white"
                            }}>18</h1>
                            <h4 className="text-white opacity-[0.4]">Минут</h4>
                        </div>
                        <div className="hero-card mr-7 w-[102px] h-[102px] bg-neutral-900 flex items-center justify-center flex-col">
                            <h1 className="text-white text-3xl font-bold" style={{
                                color: dark === true ? "red" : "white"
                            }}>18</h1>
                            <h4 className="text-white opacity-[0.4]">Секунд</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;