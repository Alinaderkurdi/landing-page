import SectionTitle from "../components/section-title/section-title";
import style from './take-tour.module.scss';
import SectionWrapper from "../components/section-wrapper/section-wrapper";

import SectionLink from "../components/section-link/section-link";

const TakeTour = ()=> {

  return(
    <SectionWrapper>
      <SectionTitle>Take a tour </SectionTitle>
      <SectionLink linkName={'Features'} linkUrl={''}/>
      <SectionLink linkName={'Partners'} linkUrl={''}/>
      <SectionLink linkName={'Pricing'} linkUrl={''}/>
      <SectionLink linkName={'Product'} linkUrl={''}/>
      <SectionLink linkName={'Support'} linkUrl={''}/>
    </SectionWrapper>
  )
}

export default TakeTour;