import { useSelector } from 'react-redux'
import daHome from '../../Styles/Dashboard/DashboardHome.module.css'
import DashboardHeader from './DashboardHeader'
import Dashboard from './doctor/Dashboard'
import DashboardStu from './student/DashboardStu'


const DashboardHome = () => {
    const { identity } = useSelector((state) => state.identity);
    let localUser = JSON.parse(localStorage.getItem('additional'));
    return (
        <div className={daHome.container}>
            <DashboardHeader />
            {
                identity === 'instructor' ?
                    <Dashboard
                        photo={localUser?.additional.userPic}
                        userName={localUser?.additional.userName}
                    /> :
                    <DashboardStu />
            }
        </div>
    )
}

export default DashboardHome