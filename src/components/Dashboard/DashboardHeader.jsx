import React from 'react'
import daHeader from '../../Styles/Dashboard/Dash_Header.module.css';


const DashboardHeader = () => {
    return (
        <div className={daHeader.container}>
            <div className={daHeader.logo}>
            <img src='/assets/al-azhar.png' height="55" width="55" alt=''/>
            </div>
            <div className={daHeader.middle}>
                <p>
                    DASHBOARD
                </p>
            </div>
            <div className={daHeader.profile}>
                <p>
                    MA
                </p>
            </div>
        </div>
    )
}

export default DashboardHeader
