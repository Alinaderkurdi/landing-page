//to reuse the authentication logic in another part of the app I decide to separate it into a standalone folder 

import style from './authentication.module.scss';
import loginBTStyle from './styles/auth-buttons/login.module.scss';
import Button from '@/components/button/button';


const Authentication = ()=> {
    return(
        <div className={style['auth-buttons-wrapper']}>
           <Button appendStyle={loginBTStyle['login-bt']}>LOG IN</Button>
        </div>
    )
}

export default Authentication;