import './App.css';
import Home from './components/Home';
import RegisterHome from './components/Register/RegisterHome';
import Login from './components/Login';
import {
  createBrowserRouter,
  RouterProvider,
  // Route,
  // Link,
} from "react-router-dom";
import DashboardHome from './components/Dashboard/DashboardHome';

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
    path: '/in',
    element: <DashboardHome/>
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
