import { BrowserRouter as Router, Route, Routes, /* Navigate */ } from 'react-router-dom';
import Login from '../pages/Login';
//import NewPassword from '../pages/NewPassword';
// import { useIsAuthenticated, useAuthUser } from 'react-auth-kit';

const Rotas = () => {
	return(
		<Router>
			<Routes>
				<Route path='/' element={ <Login /> } />
			</Routes>
		</Router>
	);
};

export default Rotas;