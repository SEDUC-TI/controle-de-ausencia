import React, { useState } from 'react';
import Input from '../Input';
import { Checkbox, FormControlLabel } from '@mui/material';


const Lotacao: React.FC = () => {

    const [state, setState] = useState({
        permutado: false,
        readaptado: false,
        afastado: false,
        se_aposentando: false,
      });
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
        permutado: false,
        readaptado: false,
        afastado: false,
        se_aposentando: false,
        [event.target.name]: event.target.checked,
    });
    };

    return(
      <div className='flex flex-col gap-7'>
        <p>LOTAÇÃO 1</p>
        <div className='border border-orange border-solid p-12 rounded-xl flex flex-col gap-5'>
          <div className='grid grid-cols-7 gap-4'>
            <Input nome='gere' id='gere' label='GERE' borderColor='border-orange' width='col-span-1'/> 
            <Input nome='vinculo' id='vinculo' label='VÍNCULO' borderColor='border-orange' width='col-span-2'/>
            <Input nome='lotacao' id='lotacao' label='LOTAÇÃO' borderColor='border-orange' width='col-span-4'/>
          </div>
          <div className='grid grid-cols-5 gap-4'>
            <Input nome='cargo_atual' id='cargo_atual' label='CARGO ATUAL' borderColor='border-orange' width='col-span-2'/> 
            <Input nome='cargo_de_entrada' id='cargo_de_entrada' label='CARGO DE ENTRADA' borderColor='border-orange' width='col-span-2'/>
            <Input nome='carga-horaria' id='carga-horaria' label='CARGA HORÁRIA' borderColor='border-orange' width='col-span-1'/>
          </div>
          <div className='flex flex-col gap-1 mt-5'>
            <p>OBSERVAÇÕES</p>
            <div className='border border-orange border-solid p-12 rounded-xl flex flex-row justify-between'>
              <FormControlLabel 
                value="permutado" 
                control={ <Checkbox checked={state.permutado} onChange={handleChange} name="permutado" sx= { { color: '#FF9842', '&.Mui-checked': { color: '#FF9842' } } }/> } 
                label="PERMUTADO" 
                labelPlacement="end"
              />
              <FormControlLabel 
                value="readaptado" 
                control={<Checkbox checked={state.readaptado} onChange={handleChange} name="readaptado" sx= { { color: '#FF9842', '&.Mui-checked': { color: '#FF9842' } } }/> } 
                label="READAPTADO" 
                labelPlacement="end" 
              />
              <FormControlLabel 
                value="afastado" 
                control={<Checkbox checked={state.afastado} onChange={handleChange} name="afastado" sx= { { color: '#FF9842', '&.Mui-checked': { color: '#FF9842' } } }/> } 
                label="AFASTADO" 
                labelPlacement="end" 
              />
              <FormControlLabel 
                value="se_aposentando" 
                control={<Checkbox checked={state.se_aposentando} onChange={handleChange} name="se_aposentando" sx= { { color: '#FF9842', '&.Mui-checked': { color: '#FF9842' } } }/> } 
                label="SE APOSENTANDO" 
                labelPlacement="end" 
              />
            </div>
          </div>
          
        </div>       
      </div>
    );
};

export default Lotacao;