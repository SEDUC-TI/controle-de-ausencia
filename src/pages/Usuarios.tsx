import React from 'react';
import Header from '../components/header/Header'
import {SearchOutlined} from '@mui/icons-material';

const Usuarios: React.FC = () =>{

    return(
        <div className="container max-w-full w-screen h-screen flex flex-col items-center">
            
            <Header name= "Welson"/>
            
            <div className="container flex flex-col items-center w-[1800px] h-[950px] bg-blue">
                
                <div className="container flex bg-orange w-[157px] h-[40px] mt-[70px] border-border border-concrete border-b-2 justify-center">
                    
                    <div className='text-blue font-black text-2xl '>
                        <p>Servidores</p>
                    </div>

                </div>

                <div className="container mt-[50px] flex flex-col w-[1257px] h-[155px] items-center space-y-[45px]">
                    
                    <div className="container flex row bg-orange w-[1200px] h-[42px] items-center ">
                        
                        <div className='px-3'>
                            <SearchOutlined style={{ color: '#95A5A6' }}/>
                        </div>
                        
                        <p className='text-concrete'>
                            Buscar
                        </p>
                    </div>

                    <div className="container bg-orange w-[1207px] h-[63px] ">
                        
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Usuarios;