import React, { useState } from 'react'
import RegisterPopup from './RegisterPopup';
import Signup from './Signup';
import { useSelector } from 'react-redux';

const RegisterHome = () => {
    const [firstTime, setFirstTime] = useState(true);

    const { identity } = useSelector((state) => state.identity)
    return (
        <div>
            {
                firstTime ? (
                    <RegisterPopup
                        setFirstTime={setFirstTime}
                        identity={identity}
                    />
                ) : (
                    <Signup
                        identity={identity}
                        setFirstTime={setFirstTime}
                    />
                )
            }
        </div>
    )
}

export default RegisterHome