import React from 'react'
import daHome from '../../Styles/Dashboard/DashboardHome.module.css'
import DashboardHeader from './DashboardHeader'
import Dashboard from './doctor/Dashboard'


const DashboardHome = () => {
    return (
        <div className={daHome.container}>
            <DashboardHeader />
            <Dashboard />
        </div>
    )
}

export default DashboardHome