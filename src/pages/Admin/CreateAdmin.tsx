
export default function CreateAdmin() {
	return (
		<div className="container max-w-full w-screen h-screen bg-blue flex flex-col justify-center items-center ">

			<div className="text-center mb-4"><span className="text-white text-[64px] font-black font-['Mulish']">Atest</span><span className= "text-orange text-[64px] font-black font-['Mulish']">Servi</span></div>
			<div className=" w-[1260px] h-[840px] bg-white rounded-[25px] flex flex-col justify-arrownd py-16  mb-8 px-16 ">

				<span className="flex justify-center text-right text-sky-700 text-[32px] font-extrabold font-['Mulish'] mb-8 " >CADASTRAR ADMINISTRADOR</span>

				<div className='inputs flex flex-col justify-center items-start	 '>

					<label htmlFor="">NOME</label>
					<input className="w-[383.81px] h-[40px]  bg-white rounded-[10px] p-4 border-2 border-border focus:border-hoverblue focus:outline-none " type="email" name="Email" id="" placeholder='Seu Nome'/>

					<div className='container flex flex-row justify-between items-end'>

						<div className='flex flex-col'>

							<label htmlFor="" className='mt-8'>EMAIL</label>
							<input className="w-[383.81px] h-[40px] bg-white rounded-[10px] p-4 border-2 border-border focus:border-hoverblue focus:outline-none " type='password' name="password" id="" placeholder='Email'/>

						</div>
				      <div className='flex flex-col'>

							<label htmlFor="" >MATRÍCULA</label>
							<input className= "w-[383.81px] h-[40px] bg-white rounded-[10px] p-4 border-2 border-border focus:border-hoverblue focus:outline-none " type="number" name="matricula" id="" placeholder='N° Matrícula' />

						</div>
					</div>

				</div>

				<div className="flex justify-center">
					<button className="w-[383.81px] h-[48.55px] rounded-[20px] font-semibold mt-20  text-lg text-white bg-gradient-to-r from-blue to-hoverblue border-2 border-border focus:border-hoverblue focus:outline-none font-['Mulish']" type="submit">AVANÇAR</button>

				</div>

			</div>
			{/* <img src={seducalagoaslogo} alt="" /> */}
		</div>

	);
}
