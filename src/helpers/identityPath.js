const identityPath = (identity, user_token) => {

    if (identity && user_token) {
        const ind = user_token?.indexOf('.');
        const authPath = user_token?.slice(0, ind);
        // const authPath = user_token?.slice(ind,ind+5);
        localStorage.setItem('dashboard-sub-path', JSON.stringify(authPath));
    }
    let subPath = JSON.parse(localStorage.getItem('dashboard-sub-path'));

    // if (identity === 'instructor') {
    // return `/authorized/${subPath}-in`
    // } else if (identity === 'student') {
    return `/authorized-id/${subPath}/on-board`
    // }
    // return null

}

export default identityPath