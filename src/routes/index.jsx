import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import { useSelector } from "react-redux";
import Home from "../components/Home";
import Login from '../components/Login';
import DashboardHome from "../components/Dashboard/DashboardHome";
import identityPath from "../helpers/identityPath";
import PublicRoutes from "./PublicRoutes";
import RegisterHome from "../components/Register/RegisterHome";
import AddExams from "../components/Dashboard/doctor/AddExams";
import OpenExam from "../components/Dashboard/doctor/OpenExam";
import StudentsData from "../components/Dashboard/doctor/StudentsData";

const Routes = () => {

    const { auth } = useSelector((state) => state);

    const publicRoutes = [
        {
            path: "/",
            element: <PublicRoutes />,
            children: [
                {
                    path: "/",
                    element: <Home />,
                },
                {
                    path: "/signup",
                    element: <RegisterHome />
                },
                {
                    path: "/auth/login",
                    element: <Login />
                }
            ]
        }
    ]

    const authenticatedRoutes = [
        {
            path: '/',
            element: <ProtectedRoute />,
            children: [
                {
                    path: identityPath(auth.user_token, auth.user._id),
                    element: <DashboardHome />
                },
                {
                    path: `${identityPath(auth.user_token, auth.user._id)}/createExam`,
                    element: <AddExams />
                },
                {
                    path: `${identityPath(auth.user_token, auth.user._id)}/exam`,
                    element: <OpenExam />
                },
                {
                    path: `${identityPath(auth.user_token, auth.user._id)}/students-data`,
                    element: <StudentsData />
                }
            ]
        }
    ];

    const router = createBrowserRouter([
        ...publicRoutes,
        ...authenticatedRoutes
    ]);

    return <RouterProvider router={router} />

}

export default Routes


