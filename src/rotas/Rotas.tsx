import { BrowserRouter as Router, Route, Routes, /* Navigate */ } from 'react-router-dom';

import Login from '../pages/Login/Login';
import CreateAdmin from '../pages/Admin/CreateAdmin';
import Usuarios from '../pages/Usuarios';
import NewPassword from '../pages/NewPassword';
// import { useIsAuthenticated, useAuthUser } from 'react-auth-kit';

const Rotas = () => {
	return(
		<Router>
			<Routes>
				<Route path='/' element={ <Login /> } />
				<Route path='/newPassword' element={ <NewPassword /> } />
				<Route path='/users' element={ <Usuarios />} />
				<Route path='/criarusuario' element={ <CreateAdmin />} />
			</Routes>
		</Router>
	);
};

export default Rotas;