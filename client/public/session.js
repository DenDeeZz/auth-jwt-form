//SESSIONS//


    switch ( localStorage.getItem('token_access') ) {
        case 'ACCESS':
        console.log('Access in local storage');
        break;
        case 'NO-ACCESS':
        console.log('No access');
    }