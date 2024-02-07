import React from 'react';
import Header from '../components/header/Header'
import {SearchOutlined} from '@mui/icons-material';
import { Select, MenuItem } from "@mui/material";
import SelectDropdown from '../components/selects/SelectDropdown';

const Usuarios: React.FC = () =>{

    const options_GEE = {
        options: ['1° GEE', '2° GEE', '3° GEE', '4° GEE',
                  '5° GEE', '6° GEE', '7° GEE', '8° GEE',
                  '9° GEE', '10° GEE', '11° GEE', '12° GEE',
                  '13° GEE']
    };
    const options_Vinculo = {
        options: ['Efetivo', 'Contratado', 'Comissionado', 'Assessor Administrativo']
    };
    const options_Lotacao = {
        options: ['Não se aplica', 'Lista de escolas da GEE', 'GEE'] //dar uma get nas escolas da GEE selecionada
    };
    const options_Cargo = {
        options: ['Lista dos cargos possíveis'] //dar um get nos cargos dos servidores
    }
    return(
        <div className="container max-w-full w-screen h-screen flex flex-col items-center">
            
            <Header name= "Welson"/>
            
            <div className="container flex flex-col items-center w-[1800px] h-[950px]">
                
                <div className="container flex w-[157px] h-[40px] mt-[70px] border-border border-concrete border-b-2 justify-center">
                    
                    <div className='text-blue font-black text-2xl '>
                        <p>Servidores</p>
                    </div>

                </div>

                <div className="container mt-[50px] bg-blueflex flex-col w-[1257px] h-[155px] items-center space-y-[45px]">
                    
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
            </div>
        </div>
    );
};

export default Usuarios;