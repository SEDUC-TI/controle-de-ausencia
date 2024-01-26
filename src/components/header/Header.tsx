import React from 'react';
import seducalagoaslogoazul from '../../assets/images/seducalagoaslogoazul.svg';
import menu from '../../assets/icons/menu.svg';

interface nameProp{
    name: string;
}

const Header: React.FC<nameProp> = ({name}) =>{

    return(
        <div className="container flex max-w-full h-[100px] border-b-2 border-concrete mb-6 items-center space-x-[50px]">
            
            <div className="container w-[67px] h-[80px] ml-[100px]">
                <img className=' w-24' src={seducalagoaslogoazul} alt="" />
            </div>

            <div className="container w-[152px] h-[33px]">
                <span className='text-2xl text-blue font-black'> Atest<span>Servi</span></span>
            </div>

            <div className="container flex w-[1005px] items-center">
                <div className="h-[46px] border-l-2 border-concrete"/>

                <p className='text-blue ml-[20px]'>
                    INÍCIO
                </p>

                <div className="h-[46px] border-l-2 border-concrete ml-[1000px] justify-self-end"/>
            </div>

            <div className="container flex w-[400px] h-[40px] items-center space-x-[90px]">
                <p className='ml-[70px]'>
                    BEM-VINDO, {name}
                </p>

                <div>
                    {/* Falta deixar o botão funcional */}
                    <img className='' src={menu} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Header;