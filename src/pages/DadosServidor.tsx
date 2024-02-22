import React, { useState } from 'react';
import Header from '../components/header/Header';
import Back from '../assets/icons/back.svg';
import DadosGerais from '../components/DadosGerais';
import Atestados from '../components/Atestados';


const DadosServidor: React.FC = () => {
  const [tabela, setTabela] = useState('geral');

  return (
    <>
      <Header name='João'/>
      <div className='w-4/5 mx-auto ' >
        <div className='flex flex-row justify-between mt-12 mb-20'>
          <div className='flex flex-row items-center gap-1 cursor-pointer'>
            <img src={Back} alt="imagem de voltar" />
            <div className='text-concrete text-2xl font-bold'>VOLTAR</div>
          </div>
          <div className='text-3xl font-bold items-center flex items-center gap-1 text-blue'>
            DADOS<span className='font-normal text-2xl text-concrete'> | SERVIDOR</span>
          </div>
        </div>

        <div className='flex flex-row gap-8 text-blue font-bold text-xl mb-12'>
          <p className='w-48 flex flex-col cursor-pointer' onClick={() => setTabela('geral')}>
            GERAL
            {
              tabela=='geral'
              ?
              <div className='w-4/5 h-1 bg-blue'>
              </div>
              :null
            }
          </p>
          <p className='w-48 cursor-pointer' onClick={() => setTabela('atestados')}>
            ATESTADOS
            {
              tabela!='geral'
              ?
              <div className='w-4/5 h-1 bg-blue'>
              </div>
              :null
            }
          </p>
        </div>

        {
          tabela=='geral'
          ?
           <DadosGerais/>
          :
          <Atestados/>
        }

      </div>
      
    </>
  );
};

export default DadosServidor;
