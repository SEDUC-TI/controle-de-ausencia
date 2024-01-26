import { BrowserRouter as Router, Route, Routes, /* Navigate */ } from 'react-router-dom';
import Login from '../pages/Login';
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
			</Routes>
		</Router>
	);
};

export default Rotas;