import React from 'react';
import seducalagoaslogoazul from '../../assets/images/seducalagoaslogoazul.svg';
import {MenuOutlined} from '@mui/icons-material';

interface nameProp{
    name: string;
}

const Header: React.FC<nameProp> = ({name}) =>{

    return(
        <div className="container flex max-w-full h-[100px] border-b-2 border-concrete mb-6 items-center justify-between">
            
            <div className = 'container flex items-center w-1/2 h-[100px] justify-around '>
                
                <div className='container flex items-center w-2/5 h-[100px] justify-around'>
                    <img className='w-20' src={seducalagoaslogoazul} alt="" />

                    <span className=' text-2xl text-blue font-black'> Atest<span>Servi</span></span>
                </div>

                <div className="w-[1px] h-[46px] border-l-2 border-concrete"/>

                <div className='container flex items-center w-3/5 h-[100px] justify-around'>
                    
                    <p className='text-blue flex text-[20px] ml-[20px]'>
                        INÍCIO
                    </p>

                    <div className='flex space-x-1'>
                        <p className='text-blue flex text-[20px]'>
                            CADASTRAR
                        </p>
                        <p className='text-blue flex text-[20px]'>
                            ADMINISTRADOR
                        </p>
                    </div>
                </div>
                
            </div>

            <div className='container flex items-center w-1/4 justify-between h-[100px] '>

                <div className=" w-[1px] h-[46px] border-l-2 border-concrete "/>
                
                <div className="container flex w-3/4 h-[40px] items-center justify-around">
                    <p className='ml-[70px]'>
                        BEM-VINDO, {name}
                    </p>
                    <MenuOutlined/>
                </div>
            </div>
        </div>
    );
};

export default Header;