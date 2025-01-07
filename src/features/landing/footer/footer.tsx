
import style from './footer.module.scss';
import More_Social from './more-about-service&on-social-media/more-social';
import Subscribe from './subscribe/subscribe';
import TakeTour from './take-tour/take-tour';
import OurCompany from './our-company/our-company';
import sectionCommonStyle from '../style/landing-section/section-common.module.scss';

const Footer = ()=> {

    return(
        <footer className={`${style['footer-main']} ${sectionCommonStyle['section-common']}`}>
            <More_Social />
            <TakeTour />
            <OurCompany />
            <Subscribe />
        </footer>
    )
}

export default Footer;