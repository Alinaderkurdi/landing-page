
import style from './our-company.module.scss';
import SectionTitle from '../components/section-title/section-title';
 

const OurCompany = ()=>{
    return(
        <div className={style['our-box']}>
            <SectionTitle>Our Company</SectionTitle>
        </div>
        
    )
}

export default OurCompany;