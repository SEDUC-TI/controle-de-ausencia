import React from 'react';
import { ArrowForward } from '@mui/icons-material';

const NewPassword: React.FC = () =>{
    
    return(
        <div className="container max-w-full w-screen h-screen bg-blue flex flex-col justify-center items-center">
            <div className='mb-7'>
                <span className='text-4xl text-white font-black'> Atest</span><span className='text-4xl text-orange font-black ' >Servi</span>
            </div>

            <div className="container flex flex-col w-[1260px] h-[840px] bg-white rounded-[25px] 
                            space-y-52 justify-start items-center">

                <div className="container h-[120px] w-[380px] flex justify-center">
                    <div className='text-blue font-black text-4xl mt-20 '>
                        <p>DEFINA SUA SENHA</p>
                    </div>
                </div>

                <div className="container flex flex-col h-[200px] w-[540px]">
                    <div className="mb-2">
                        <p>SENHA</p>
                    </div>
                    <input className="mb-6 bg-white rounded-[5px] h-10 border-2 border-border mb-6 px-5" type="password" name="password" id="" />
                    
                    <div className="mb-2">
                        <p>CONFIRMAÇÃO DE SENHA</p>
                    </div>
                    <input className="mb-6 bg-white rounded-[5px] h-10 border-2 border-border mb-6 px-5" type="password" name="password" id=""  />
                </div>

                <div className="container flex w-[217px] h-[64px] justify-center">
                    
                    <button className="w-[217px] h-[48.55px] rounded-[20px] font-semibold text-lg text-white 
                                       bg-gradient-to-r from-blue to-hoverblue border-2 border-border focus:border-hoverblue 
                                       focus:outline-none font-['Mulish'] " type="submit"> AVANÇAR <ArrowForward/> </button>
                </div>
                
            </div>
        </div>
    );
};

export default NewPassword; 