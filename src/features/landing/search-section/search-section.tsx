import style from './search-section.module.scss';
import homeImage from '../assets/search-section-image/file.png';
import commonSectionStyle from '../style/landing-section/section-common.module.scss'
import serviceIntroducer from '../style/landing-section/service-introducer.module.scss';
import InputSection from './input-section/input-section';


import Image from 'next/image';

const SearchSection = ()=> {
    return(
        <div className={`${style['search-section-main']} ${commonSectionStyle['section-common']} ${commonSectionStyle['content-place']}`}>
            <h1 className={style['section-titel']}>Easy way to find a perfect property</h1>
            <h2 className={serviceIntroducer['service-introducer']}>We provide a complete service for the sale, purchase or rental of real estate</h2>
            <InputSection />
            <Image 
              className={style['home-image']}
              width={516}
              height={516}
              alt='a home image'
              src={homeImage}/>
        </div>
    )
}

export default SearchSection;