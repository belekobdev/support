import React from 'react';

const Course = () => {
    return (
        <div id="course" className="bg-neutral-900 ">
            <div className="container w-[80%] mx-auto">
                <div className="course flex items-start py-[20px] justify-between ">
                    <button className="text-white bg-orange-800  mt-[10px]  rounded-3xl py-[10px] px-[30px] text-center font-bold">Закзать Курс</button>
                    <div className="course-res mx-[30px]">
                        <div className="flex flex-col">
                            <div className="flex">
                                <h4 className="text-white opacity-[0.5] font-[400] mr-[91px]">Учеников всего:</h4>
                                <h5 className="text-white font-bold">200</h5>
                            </div>
                            <div className="flex my-2">
                                <h4 className="text-white opacity-[0.5] font-[400] mr-[20px]">Успешно закончили курс:</h4>
                                <h5 className="text-white font-bold">190</h5>
                            </div>
                        </div>

                    </div>
                    <div className="flex flex-col mx-[20px]">
                        <div className="flex flex-col ">
                            <div className="flex mb-[7px]">
                                <h3 className="text-white font-normal font-[16px] opacity-[0.5] mr-[40px]">Заработано учениками:</h3>
                                <h4 className="text-white font-bold">400 000₽</h4></div>
                            <div className="figurs flex">
                                <div className="figure w-[330px] h-[6px] bg-orange-600"></div>
                                <div className="figure w-[240px] h-[6px] bg-amber-50"></div>
                            </div>
                            <div className="flex items-center justify-between">
                                <h5 className="text-white opacity-[0.5]">0</h5>
                                <h6 className="text-white opacity-[0.5] font-normal">1 000 000₽</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;