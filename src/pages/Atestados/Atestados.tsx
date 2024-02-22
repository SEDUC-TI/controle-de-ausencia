import React from "react";
import Header from "../../components/header/Header";
import Header_servi from "../../components/header/Header_servi";
import { atestados } from "./atestados_data";
import { Edit } from "@mui/icons-material";
import { Delete } from "@mui/icons-material";
import { Add } from "@mui/icons-material";
import { Save } from "@mui/icons-material";
const Atestados: React.FC = () => {
  return (
    <div className="container max-w-full w-screen h-screen flex flex-col items-center">
      <Header name="Thales" />

      <Header_servi />

      <div className="container flex self-start w-[282px] h-[30px] mt-20 ml-[260px] justify-between">
        <p className="text-blue text-[20px] font-extrabold font-['Mulish']">
          GERAL
        </p>

        <p className="text-blue text-[20px] underline decoration-4 font-extrabold font-['Mulish']">
          Atestados
        </p>
      </div>

      <div className="container flex self-center w-[1100px] h-[20px] mt-20 justify-between">
        <p className="text-concrete">NÚMERO DO PROCESSO</p>

        <p className="text-concrete">STATUS</p>

        <p className="text-concrete">INÍCIO</p>

        <p className="text-concrete">FIM</p>

        <p className="text-concrete">DURAÇÃO TOTAL</p>

        <p className="text-white">Editar</p>

        <p className="text-white">Deletar</p>
      </div>

      <div className="container flex flex-col self-center w-[1100px] h-[273px] mt-12 overflow-y-auto">
        
        {Object.keys(atestados).map((chave, index) => (

          <div className="container flex mb-[48px]" key={index}>

            <div className="container flex">{atestados[chave].process_number}</div>

            <div className="container  ml-32">{atestados[chave].status}</div>

            <div className="container  ml-10 text-blue font-bold">{atestados[chave].start}</div>

            <div className="container ml-8 text-blue font-bold">{atestados[chave].end}</div>

            <div className="container ml-4">{atestados[chave].duration} dias</div>

            <div className="container ml-24 text-concrete"> <Edit /> </div>

            <div className="container text-concrete"> <Delete /> </div>
            
          </div>
        ))}
      </div>
      
      <div className="container flex w-[161px] h-[40px] rounded-[10px] border-blue border-2 
                      self-start justify-around items-center ml-[260px] mt-[20px]">
        
        <Add className=" bg-blue rounded text-white"/>

        <p className="text-blue font-bold">CADASTRAR</p>
      </div>

      <div className="container flex w-[215px] h-[64px] rounded-[20px] self-end mt-24 mr-[360px] 
                      items-center justify-center space-x-2 bg-blue">

            <Save className="text-white "/>
            <p className="text-white font text-[20px]">Salvar</p>
      </div>
    </div>
  );
};

export default Atestados;
