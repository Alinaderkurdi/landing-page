
import style from '../subscribe/subscribe.module.scss';
import SectionTitle from '../components/section-title/section-title';
import SectionWrapper from '../components/section-wrapper/section-wrapper';
import footerSecondery from '../style/footer-secondary-text/footer-secondary-text.module.scss'
import InputFild from '@/components/input-fild/input-fild';
import Button from '@/components/button/button';
import { MdArrowForward } from "react-icons/md";

const Subscribe  = ()=> {

    return(
        <SectionWrapper>
            <SectionTitle>Subscribe</SectionTitle>
            <p className={`${footerSecondery['footer-secondary']} ${style['sub-text']}`}>Subscribe to get latest property, blog news from us</p>
            <div className={style['input-wrapper']}>
             <InputFild placeholder={'Email Address'}/> 
             <Button appendStyle={style['send-email-bt']}>
               <MdArrowForward />
             </Button>
            </div>
        </SectionWrapper>
    )
}

export default Subscribe;