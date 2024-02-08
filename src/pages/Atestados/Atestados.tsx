import React from 'react';
import Header from '../../components/header/Header';
import Header_servi
 from '../../components/header/Header_servi';
const Atestados: React.FC = () => {

    return(
        <div className='container max-w-full w-screen h-screen flex flex-col items-center'>
            <Header name="Thales"/>

            <Header_servi/>

        </div>
    );
};

export default Atestados;