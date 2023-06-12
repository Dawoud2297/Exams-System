import { useDispatch } from 'react-redux'
import daHome from '../../Styles/Dashboard/DashboardHome.module.css'
import DashboardHeader from './DashboardHeader'
import Dashboard from './doctor/Dashboard'
import DashboardStu from './student/DashboardStu'
import { selectAuthType } from '../../store/auth'


const DashboardHome = () => {
    const dispatch = useDispatch();
    dispatch(selectAuthType('authorized'));
    let localUser = JSON.parse(localStorage.getItem('additional')).additional;
    let role = localUser.role

    /** */
    // Tied Route
    localStorage.setItem('lock-routes', JSON.stringify('pop'))
    /** */

    return (
        <div className={daHome.container}>
            <DashboardHeader header='DASHBOARD' />
            {
                role === 'instructor' ?
                    <Dashboard
                        photo={localUser?.userPic ? `${localUser?.userPic}` : null}
                        userName={localUser?.userName}
                    /> :
                    <DashboardStu />
            }
        </div>
    )
}

export default DashboardHome