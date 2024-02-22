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

      <div className="container flex flex-col items-center w-3/4">
        <Header_servi />

        <div className="container flex self-start w-[282px] h-[30px] mt-20 justify-between">
          <p className="text-blue text-[20px] font-extrabold font-['Mulish']">
            GERAL
          </p>

          <p className="text-blue text-[20px] underline decoration-4 font-extrabold font-['Mulish']">
            Atestados
          </p>
        </div>

        <div className="container w-full h-[320px] mt-10 mb-16 overflow-y-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left">
                <th className="p-8">NÚMERO DO PROCESSO</th>
                <th className="p-8">STATUS</th>
                <th className="p-8">INÍCIO</th>
                <th className="p-8">FIM</th>
                <th className="p-8">DURAÇÃO TOTAL</th>
                <th className="p-8"></th>
                <th className="p-8"></th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(atestados).map((chave, index) => (
                <tr key={index}>
                  <td className="p-8">{atestados[chave].process_number}</td>
                  <td className="p-8">{atestados[chave].status}</td>
                  <td className="p-8 text-blue">{atestados[chave].start}</td>
                  <td className="p-8 text-blue">{atestados[chave].end}</td>
                  <td className="p-8">{atestados[chave].duration}</td>
                  <td className="p-8 text-concrete"><Edit /></td>
                  <td className="p-8 text-concrete"><Delete /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="container flex w-[161px] h-[40px] rounded-[10px] border-blue border-2 
                        self-start justify-around items-center">
          
          <Add className=" bg-blue rounded text-white"/>

          <p className="text-blue font-bold">CADASTRAR</p>
        </div>

        <div className="container flex w-[215px] h-[64px] rounded-[20px] self-end mt-24 
                        items-center justify-center space-x-2 bg-blue">

              <Save className="text-white "/>
              <p className="text-white font text-[20px]">Salvar</p>
        </div>
      </div>
    </div>
  );
};

export default Atestados;
