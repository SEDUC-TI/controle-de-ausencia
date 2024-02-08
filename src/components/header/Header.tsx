import React from 'react';
import seducalagoaslogoazul from '../../assets/images/seducalagoaslogoazul.svg';
import {MenuOutlined} from '@mui/icons-material';

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

                <div className='container flex space-x-24'>
                    
                    <p className='text-blue ml-[20px]'>
                        INÍCIO
                    </p>

                    <div className='flex space-x-1'>
                        <p className='text-blue'>
                            CADASTRAR
                        </p>
                        <p className='text-blue'>
                            ADMINISTRADOR
                        </p>
                    </div>
                    
                </div>
                
                <div className="h-[46px] border-l-2 border-concrete ml-[600px] justify-self-end"/>
            </div>


        <img className="h-12 hidden lg:block" src="tete" alt="" />
      </button>
                <div>
                    {/* Falta deixar o botão funcional */}
                    <MenuOutlined/>
                </div>
            </div>
        </div>
      </nav>
      <Button size="small" text rounded />
    </header>
  );
}
