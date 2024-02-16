import React from "react";
import arrow from '../../assets/icons/arrow_back_curve.svg'

const Header_servi: React.FC = () => {
    return(
        <div className="container flex w-full h-[40px] justify-between ">
                
            <div className="container flex w-[121px] h-[28px] space-x-4">
                
                <div className='flex items-end'>
                    <img className='size-5' src={arrow}/>
                </div>
                <p className='text-concrete text-[28px]'>
                    Voltar
                </p>
            </div>

            <div className="container flex items-center w-[271px] h-[40px] space-x-2">
                <div className="flex text-[32px] text-blue font-extrabold font-['Mulish']">
                        DADOS
                </div>

                <div className="flex h-[36px] border-l-2 border-concrete "/>
                    
                <div className='text-concrete text-[24px]'>SERVIDOR</div>
            </div>
        </div>
    );
};

export default Header_servi;