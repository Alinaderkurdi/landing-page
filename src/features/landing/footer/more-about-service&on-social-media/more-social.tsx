import style from './more-social.module.scss';
import LogoBox from '../../logo-box/logo-box';
import MoreAbout from './more-about/more-about';

const More_Social = ()=> {
    return(
        <div className={style['section-box']}>
           <LogoBox />
           <MoreAbout />
        </div>
    )
}


export default More_Social;