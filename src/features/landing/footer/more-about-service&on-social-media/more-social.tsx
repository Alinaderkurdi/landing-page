import style from './more-social.module.scss';
import LogoBox from '../../logo-box/logo-box';
import MoreAbout from './more-about/more-about';
import SocialMedia from './social-media/social-media';

const More_Social = ()=> {
    return(
        <div className={style['section-box']}>
           <LogoBox />
           <MoreAbout />
           <SocialMedia />
        </div>
    )
}


export default More_Social;

//FooterText 
//footer-secondary-text