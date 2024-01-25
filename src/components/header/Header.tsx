import { Button } from 'primereact/button';
import logoEstado from '../../assets/images/alagoasbrasaoazul.svg';


export default function Header() {
	return (
		<header
			style={{
        		position: 'sticky',
        		top: 0,
        		zIndex: 100,
        		}}
        		className={`flex py-3 px-6 lg:px-10 w-full justify-between items-center
          bg-white drop-shadow-md select-none`}
    		>
    		    <button
      		    className="flex items-center justify-center lg:gap-5"
      		    // onClick={handleHome}
      		  >

        		<div className="text-center mb-4 flex items-center justify-center">
  					<img className="h-12 hidden lg:block mr-2" src={logoEstado} alt="" />
  					<div className="flex items-center">
    				<span className="text-blue text-3xl font-black font-mulish">Atest</span>
						<span className="text-orange text-3xl font-black font-mulish ml-2">Servi</span>
					</div>
				</div>

      		    <img className="h-12 hidden lg:block" src='tete' alt="" />
			</button>
			<nav className="hidden lg:flex items-center justify-around grow text-[--midnight]">
			</nav>
			<nav className="hidden lg:flex gap-6 mr-6">
				<div className="hidden lg:flex items-center justify-center gap-5">
					<p className="text-lg text-[--midnight]">
						{'Bem-vindo, '}
						<b className="text-blue">usuario</b>!
					</p>
				</div>
    				    </nav>
    				    <Button
   		       size="small"
   		       text
   		       rounded
   		     />
   		   </header>
 		);
};
