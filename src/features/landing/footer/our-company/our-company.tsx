
//import style from './our-company.module.scss';
import SectionTitle from '../components/section-title/section-title';
import SectionLink from '../components/section-link/section-link';
import SectionWrapper from '../components/section-wrapper/section-wrapper';

const OurCompany = ()=>{
    
    return(
    <SectionWrapper>
      <SectionTitle>Our Company</SectionTitle>
      <SectionLink linkName={'About Us'} linkUrl=''/>
      <SectionLink linkName={'Agents'} linkUrl=''/>
      <SectionLink linkName={'Blog'} linkUrl=''/>
      <SectionLink linkName={'Media'} linkUrl=''/>
      <SectionLink linkName={'Contact Us'} linkUrl=''/>
    </SectionWrapper>
    )
}

export default OurCompany;