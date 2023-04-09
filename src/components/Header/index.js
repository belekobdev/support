import React from 'react';
import img from "../../img/logo.png"
const Footer = () => {
    return (
        <div id="header" className="bg-transparent fixed" >
            <div className="container w-[90%] mx-auto">
                <div className="header flex items-center justify-between">
                    <img src={img} alt=""/>
                    <div >
                        <a href="#" className="text-white px-[30px] text-[16px] font-normal" >Главная</a>
                        <a href="#"  className="text-white text-[16px] font-normal" >Курсы</a>
                        <a href="#" className="text-white text-[16px] px-[30px] font-normal" >Расписание</a>
                        <a href="#" className="text-white text-[16px] font-normal" >Преподователь</a>
                        <a href="#" className="text-white px-[30px] font-normal" >Рассылка</a>
                        <a href="#" className="text-white text-[16px] font-normal " >Контакты</a>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Footer;