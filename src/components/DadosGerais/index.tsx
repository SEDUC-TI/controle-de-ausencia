import React, {useState} from 'react';
import Input from '../Input';
import Button from '../Button';
import Lotacao from '../Lotacao';
// import Lotacao from '../Lotacao';
import SaveImage from  '../../assets/icons/save.svg';

const DadosGerais: React.FC = () => {
    const [selecao, setSeleçao] = useState('matricula_1');
    

    return (
        <div>
            <form id='dados_usuario' className='flex flex-col gap-20 pb-5 items-end'>
                <div className='flex flex-col gap-5'>
                    <div className='grid grid-cols-9 gap-4'>
                        <Input nome='nome' id='nome' label='NOME' borderColor='border-blue' width='col-span-5'/>
                        <Input nome='cpf' id='cpf' label='CPF' borderColor='border-blue' width='col-span-2'/>
                        <Input nome='cid' id='cid' label='CID' borderColor='border-blue' width='col-span-2'/> 
                    </div>
                    <div className='grid grid-cols-9 gap-4'>
                        <Input nome='carga-horaria' id='carga-horaria' label='CARGA HORÁRIA' borderColor='border-blue' width='col-span-1'/>
                        <Input nome='email' id='email' label='EMAIL' borderColor='border-blue' width='col-span-4' type='email'/>
                        <Input nome='telefone' id='telefone' label='TELEFONE' borderColor='border-blue' width='col-span-2'/>
                        <Input nome='cep' id='cep' label='CEP' borderColor='border-blue' width='col-span-2'/> 
                    </div>
                    <div className='grid grid-cols-10 gap-4'>
                        <Input nome='logradouro' id='logradouro' label='LOGRADOURO' borderColor='border-blue' width='col-span-5'/>
                        <Input nome='numero' id='numero' label='Nº' borderColor='border-blue' width='col-span-1'/>
                        <Input nome='bairro' id='bairro' label='BAIRRO/DISTRITO' borderColor='border-blue' width='col-span-4'/> 
                    </div>
                    <div className='grid grid-cols-10 gap-4'>
                        <Input nome='municipio' id='municipio' label='MUNICÍPIO' borderColor='border-blue' width='col-span-4'/> 
                        <Input nome='uf' id='uf' label='UF' borderColor='border-blue' width='col-span-1'/>
                        <Input nome='complemento' id='complemento' label='COMPLEMENTO' borderColor='border-blue' width='col-span-5' important={false}/>
                    </div>
                </div>
                <div className='grid grid-cols-24 gap-1 items-end'>
                    <Input onClick={() => setSeleçao('matricula_1')} nome='matricula_1' id='matricula_1' label='MATRÍCULA 1' borderColor='border-blue' width='col-span-3' variant='secondary'/> 
                    <Input onClick={() => setSeleçao('matricula_2')} nome='matricula_2' id='matricula_2' label='MATRÍCULA 2' important={false} borderColor='border-blue' width='col-span-3 col-start-6' variant='secondary'/>
                    <Button backgroundColor='bg-orange' id='1' text='ADICIONAR LOTAÇÃO' width='col-span-7 col-start-18' textColor='black' />

                    {
                        selecao=='matricula_1'
                        ?
                        <div className='h-1 bg-blue mt-3 col-span-4'>
                        </div>
                        :
                        <div className='h-1 bg-blue mt-3 col-span-4 col-start-6'>
                        </div>
                    }
                </div>
                <Lotacao/>
                <Button id='salvar' type='submit' text='SALVAR' width='w-56' image={SaveImage}/>
            </form>
        </div>
    );
};

export default DadosGerais;


{/* <div className='col-span-2' onClick={() => setSeleçao('matricula_1')}>
                        <Input nome='matricula_1' id='matricula_1' label='MATRÍCULA 1' borderColor='border-blue' width='w-3/5' variant='secondary'/> 
                        {
                            selacao=='matricula_1'
                            ?
                            <div className='h-1 bg-blue mt-3 w-4/5'>
                            </div>
                            :null
                        }
                    </div>
                    <div className='col-span-2' onClick={() => setSeleçao('matricula_2')}>
                        <Input nome='matricula_2' id='matricula_2' label='MATRÍCULA 2' important={false} borderColor='border-blue' width='w-3/5' variant='secondary'/>
                        {
                            selacao!='matricula_1'
                            ?
                            <div className='h-1 bg-blue mt-3 w-4/5'>
                            </div>
                            :null
                        }
                    </div> */}