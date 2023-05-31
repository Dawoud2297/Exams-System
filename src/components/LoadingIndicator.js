import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import identityPath from '../helpers/identityPath';
import indicator from '../Styles/LoadingIndicator.module.css'
import { endIndicator } from '../store/auth';

const LoadingIndicator = () => {
    const { identity } = useSelector((state) => state.identity);
    const { user_token } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(() => {
            navigate(identityPath(identity, user_token));
            dispatch(endIndicator())
        }, 2000)
    }, [dispatch, identity, navigate, user_token])
    return (
        <div className={indicator.container}>
            <div className="logo">
                <img src='/assets/al-azhar.png' height="150" width="150" alt='' />
            </div>
            <div className={indicator.loaderContainer}>
                <div className={indicator.loader}>
                </div>
            </div>
        </div>
    )
}

export default LoadingIndicator