import { BrowserRouter as Router, Route, Routes, /* Navigate */ } from 'react-router-dom';

import Login from '../pages/Login/Login';
import CreateAdmin from '../pages/Admin/CreateAdmin';
import Usuarios from '../pages/Usuários/Usuarios';
import NewPassword from '../pages/NewPassword';
import Atestados from '../pages/Atestados/Atestados';

// import { useIsAuthenticated, useAuthUser } from 'react-auth-kit';

const Rotas = () => {
	return(
		<Router>
			<Routes>
				<Route path='/' element={ <Login /> } />
				<Route path='/newPassword' element={ <NewPassword /> } />
				<Route path='/users' element={ <Usuarios />} />
				<Route path='/criarusuario' element={ <CreateAdmin />} />
				<Route path='/atestados' element={<Atestados/>}/>
				
			</Routes>
		</Router>
	);
};

export default Rotas;