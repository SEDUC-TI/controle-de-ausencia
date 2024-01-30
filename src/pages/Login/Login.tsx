import React from 'react';
import seducalagoaslogo from '../../assets/images/seducalagoaslogo.svg';

const Login: React.FC = () => {
	return (
		<div className="container max-w-full w-screen h-screen bg-blue flex flex-col justify-center items-center ">


			<div className="text-center mb-4"><span className="text-white text-[64px] font-black font-['Mulish']">Atest</span><span className= "text-orange text-[64px] font-black font-['Mulish']">Servi</span></div>
			<div className=" w-[454px] h-[407px] bg-white rounded-[25px] flex justify-center mb-8 ">

				<div className='inputs flex flex-col justify-start items-start	 '>
					<input className="w-[383.81px] h-[58.55px] mt-16 bg-white rounded-[10px] p-4 border-2 border-border focus:border-hoverblue focus:outline-none " type="email" name="Email" id="" placeholder='Email'/>
					<input className="w-[383.81px] h-[58.55px] mt-6 mb-2 bg-white rounded-[10px] p-4 border-2 border-border focus:border-hoverblue focus:outline-none " type='password' name="password" id="" placeholder='Senha'/>
					<div className="forget-password flex justify-end w-96 ">
						<a href=""><span className="w-[194.07px] h-[24.94px] mt-5 text-right text-gray-400 text-xl font-normal font-['Mulish']">Esqueceu a senha? </span>

						</a>
					</div>
					<button className="w-[383.81px] h-[48.55px] rounded-[20px] font-semibold mt-20  text-lg text-white bg-gradient-to-r from-blue to-hoverblue border-2 border-border focus:border-hoverblue focus:outline-none font-['Mulish']" type="submit">ENTRAR</button>
				</div>



			</div>
			<img src={seducalagoaslogo} alt="" />
		</div>

	);
};
export default Login;
