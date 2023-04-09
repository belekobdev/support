import React, {useState} from 'react';
import img from "../../img/logo.png"
import Hero from "../Hero";

const Footer = () => {
    const [dark, setDark] = useState(false)
    return (
        <>
            <div id="header" className="py-4" >
                <div className="container w-[90%] mx-auto">
                    <div className="header flex items-center justify-between">
                        <img src={img} alt=""/>
                        <div >
                            <a href="#" className="text-white px-[30px] text-[16px] font-normal" style={{
                                color: dark === true ? "red" : "white"
                            }} >Главная</a>
                            <a href="#"  className="text-white text-[16px] font-normal"  style={{
                                color: dark === true ? "red" : "white"
                            }}>Курсы</a>
                            <a href="#" className="text-white text-[16px] px-[30px] font-normal" style={{
                                color: dark === true ? "red" : "white"
                            }} >Расписание</a>
                            <a href="#" className="text-white text-[16px] font-normal" style={{
                                color: dark === true ? "red" : "white"
                            }} >Преподователь</a>
                            <a href="#" className="text-white px-[30px] font-normal" style={{
                                color: dark === true ? "red" : "white"
                            }} >Рассылка</a>
                            <a href="#" className="text-white text-[16px] font-normal " style={{
                                color: dark === true ? "red" : "white"
                            }} >Контакты</a>
                        </div>
                        <button
                            className="py-2 px-2 bg-pink-600 text-white rounded-[10px]"  onClick={() => {
                            setDark(true)
                        }}>DarkMode</button>
                    </div>
                </div>
            </div>
            <Hero dark={dark}/>
        </>
    );
};

export default Footer;