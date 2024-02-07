import React from 'react';
import Header from '../components/header/Header'
import {SearchOutlined} from '@mui/icons-material';
import { Select, MenuItem } from "@mui/material";

const Usuarios: React.FC = () =>{

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

                    <div className="container flex w-[1207px] h-[63px] bg-orange">
                        
                        <div className="container flex flex-col w-[300px]">
                            <p className='text-concrete'>
                                GEE
                            </p>

                            <div>

                                <Select className='w-[211px] h-[40px] rounded-[8px]' variant="outlined">
                                    <MenuItem>1° GEE</MenuItem>
                                    <MenuItem>2° GEE</MenuItem>
                                    <MenuItem>3° GEE</MenuItem>
                                    <MenuItem>4° GEE</MenuItem>
                                    <MenuItem>5° GEE</MenuItem>
                                    <MenuItem>6° GEE</MenuItem>
                                    <MenuItem>7° GEE</MenuItem>
                                    <MenuItem>8° GEE</MenuItem>
                                    <MenuItem>9° GEE</MenuItem>
                                    <MenuItem>10° GEE</MenuItem>
                                    <MenuItem>11° GEE</MenuItem>
                                    <MenuItem>12° GEE</MenuItem>
                                    <MenuItem>13° GEE</MenuItem>
                                </Select>
                            </div>

                        </div>

                        <div className="container flex flex-col w-[300px]">
                            <p className='text-concrete'>
                                Vínculo
                            </p>

                            <div>

                                <Select className='w-[211px] h-[40px] rounded-[8px]' variant="outlined">
                                    <MenuItem>Professor</MenuItem>
                                    <MenuItem>Vigia</MenuItem>
                                    <MenuItem>Diretor</MenuItem>
                                    <MenuItem>Material Tailwind Angular</MenuItem>
                                    <MenuItem>Material Tailwind Svelte</MenuItem>
                                </Select>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Usuarios;