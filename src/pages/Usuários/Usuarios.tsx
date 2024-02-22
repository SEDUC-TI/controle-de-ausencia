import React from 'react';
import Header from '../../components/header/Header'
import {SearchOutlined} from '@mui/icons-material';
import SelectDropdown from '../../components/selects/SelectDropdown';
import { options_Cargo, options_GEE, options_Lotacao, options_Vinculo } from './users_consts';
import { servidores } from './users_data';

const Usuarios: React.FC = () =>{
    
    return(
        <div className="container max-w-full w-screen h-screen flex flex-col items-center">
            
            <Header name= "Welson"/>

            <div className="container flex flex-col items-center w-[1800px] h-[950px]">
                
                <div className="container flex w-[157px] h-[40px] mt-[40px] border-concrete border-b-2 justify-center">
                    
                    <div className='text-blue font-black text-2xl '>
                        <p>Servidores</p>
                    </div>

                </div>

                <div className="container mt-[50px] flex flex-col w-[1257px] h-[155px] items-center space-y-[45px]">
                    
                    <div className="container flex row w-[1200px] h-[42px] border-2 rounded-[8px] border-border items-center ">
                        
                        <div className='px-3'>
                            <SearchOutlined style={{ color: 'concrete' }}/>
                        </div>
                        
                        <p className='text-concrete'>
                            Buscar
                        </p>
                    </div>

                    <div className="container flex w-[1207px] h-[63px]">

                        <div className="container flex flex-col w-[300px]">
                            <SelectDropdown title={'GEE'} options={options_GEE.options}/>
                        </div>

                        <div className="container flex flex-col w-[300px]">
                            <SelectDropdown title='Vínculo' options={options_Vinculo.options}/>
                        </div>

                        <div className="container flex flex-col w-[300px]">
                            <SelectDropdown title='Lotação' options={options_Lotacao.options}/>
                        </div>
                        
                        <div className="container flex flex-col w-[300px]">
                            <SelectDropdown title='Cargo Atual' options={options_Cargo.options}/>
                        </div>
                    </div>

                </div>

                <div className='container flex flex-col w-[1142px] h-[500px] mt-[40px]'>
                    
                    <div className="container flex h-[40px] border-border border-b-2">
                        <p className='text-concrete me-[300px]'>
                            CPF
                        </p>
                        <p className='text-concrete me-[410px]'>
                            NOME
                        </p>
                        <p className='text-concrete'>
                            DIAS AFASTADOS
                        </p>
                    </div>

                    <div className="container flex mt-4 h-screen overflow-y-auto">
                        
                        <div className="container h-[20px]">
                            {Object.keys(servidores).map((chave, index) => (
                                <div className='container space-x-4 flex mb-[64px]' key={index}>
                                    
                                    <div className='container w-1/4 mr-12'>
                                        {servidores[chave].cpf}
                                    </div>
                                    
                                    <div className='container w-5/12 '>
                                        {servidores[chave].nome}
                                    </div>

                                    <div className='w-1/3 flex space-x-2 '>
                                        <div className="flex mt-2 w-4/5 h-3/6 bg-concrete rounded-full h-2.5">
                                            <div className="bg-blue h-2.5 rounded-full w-[50%]"></div>
                                        </div>
                                        <p>{servidores[chave].dias} dias</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Usuarios;