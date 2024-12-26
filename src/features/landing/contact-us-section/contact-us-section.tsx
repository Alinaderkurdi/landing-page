
import style from './contact-us-section.module.scss'
import sectionCommonStyle from '../style/landing-section/section-common.module.scss';
import sectionImage from '../assets/contact-section-image/skyscraper.png'
import Image from 'next/image';
import serviceIntroducer from '../style/landing-section/service-introducer.module.scss'
import commercialTower from '../assets/contact-section-image/commercial tower.png'

const ContactUsSection = ()=> {

    return (
        <div className={`${style['contact-main']} ${sectionCommonStyle['section-common']} ${sectionCommonStyle['content-place']}`}>
            <div className={style['content-section']}>
                <h4 className={style['setion-title']}>Find your best Real Estate</h4>
                <h5 className={serviceIntroducer['service-introducer']}>We provide a complete service for the sale, purchase or rental of real estate</h5>
                <Image 
                 className={style['section-image']}
                 src={commercialTower}
                 width={300}
                 height={300}
                 alt={'skyscraper'}
                 />
            </div>
        </div>
    )
}

export default ContactUsSection;