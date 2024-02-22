import React from 'react';
import { atestados } from '../../shared/interface/atestados_data';
import { Edit } from '@mui/icons-material';
import { Delete } from '@mui/icons-material';
import { Add } from '@mui/icons-material';
import Button from '../Button';
import SaveImage from  '../../assets/icons/save.svg';



const Atestados: React.FC = () => {
  return (
    <div >
        <div className="container w-full h-[320px] mt-10 mb-16 overflow-y-auto">
            <table className="w-full">
                <thead>
                    <tr className="text-left">
                        <th className="py-8">NÚMERO DO PROCESSO</th>
                        <th className="py-8">STATUS</th>
                        <th className="py-8">INÍCIO</th>
                        <th className="py-8">FIM</th>
                        <th className="py-8">DURAÇÃO TOTAL</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(atestados).map((chave, index) => (
                        <tr key={index}>
                            <td className="py-8">{atestados[chave].process_number}</td>
                            <td className="py-8">{atestados[chave].status}</td>
                            <td className="py-8 text-blue">{atestados[chave].start}</td>
                            <td className="py-8 text-blue">{atestados[chave].end}</td>
                            <td className="py-8">{atestados[chave].duration} DIAS</td>
                            <td className="p-8 text-concrete"><Edit /></td>
                            <td className="p-8 text-concrete"><Delete /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        <div className="container flex w-[161px] h-[40px] rounded-[10px] border-blue border-2 
         justify-center gap-2 items-center">

            <Add className=" bg-blue rounded text-white"/>

            <p className="text-blue font-bold">CADASTRAR</p>
        </div>
        <div className='flex flex-row justify-end w-full'>
            <Button id='salvar' type='submit' text='SALVAR' width='w-56' image={SaveImage} />

        </div>
    </div>
  );
};

export default Atestados;
