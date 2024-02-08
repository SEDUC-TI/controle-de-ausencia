import React from 'react';
import Header from '../../components/header/Header';
import arrow from '../../assets/icons/arrow_back_curve.svg'

const Atestados: React.FC = () => {

    return(
        <div className='container max-w-full w-screen h-screen flex flex-col items-center'>
            <Header name="Thales"/>

            <div className="container flex w-[1400px] h-[40px] bg-orange">
                
                <div className="container flex w-[121px] h-[28px] space-x-2">
                    <div>
                        {arrow}
                    </div>
                    <p className='text-concrete text-[28px]'>
                        Voltar
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Atestados;