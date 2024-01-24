import { Route, Routes,} from 'react-router-dom';

import Login from '../pages/Login';

export default function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
}
