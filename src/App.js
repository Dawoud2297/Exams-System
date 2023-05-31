import './App.css';
import Home from './components/Home';
import RegisterHome from './components/Register/RegisterHome';
import Login from './components/Login';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import DashboardHome from './components/Dashboard/DashboardHome';
import identityPath from './helpers/identityPath';
import { useSelector } from 'react-redux';



function App() {


  const { identity } = useSelector((state) => state.identity);
  const { user_token } = useSelector((state) => state.auth);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/signup',
      element: <RegisterHome />
    },
    {
      path: '/auth/login',
      element: <Login />
    },
    {
      // in-doc-KEY-authedkey
      // path: '/in',
      path: identityPath(identity, user_token),
      element: <DashboardHome />
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
