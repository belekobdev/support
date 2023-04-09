import React from 'react';
import img from "../img/about-img.svg"

const About = () => {
    return (
        <div id="about" className="bg-black">
            <div className="container  w-[80%] mx-auto">
                <div className="about py-[140px] flex items-center justify-between">
                    <div className="block w-[526px] h-[499px] flex items-center justify-center bg-gradient-to-r from-violet-500 to-fuchsia-500  ">
                        <div className="bg-black w-[456px] h-[429px]">
                            <img src={img} alt="img" className="pt-[70px]"/>

                        </div>
                    </div>
                    <div  >
                        <h1 className="text-white text-[48px] font-bold mb-[40px]">Чем мы занимаемся?</h1>
                        <p className="w-[636px] line-[160%] text-white font-normal text-[16px] opacity-[0.8]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget neque, dignissim et feugiat elit augue in suspendisse egestas. Dictum vestibulum mi et sed nunc, orci fermentum vestibulum, morbi. Et neque, adipiscing sapien sem senectus praesent aenean consequat. Aenean facilisi turpis aliquet fringilla. Nunc sem felis sed interdum feugiat mattis elit, sollicitudin. Quam pharetra rhoncus risus, cursus id elementum aliquet. Nullam turpis arcu malesuada arcu interdum placerat nisi, lobortis. </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;