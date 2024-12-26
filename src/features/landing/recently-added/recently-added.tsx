import style from './recently-added.module.scss';
import Link from 'next/link';
import HomeTemplateWrapper from './home-template-wrapper/home-template-wrapper';
import  commonSectionStyle from '../style/landing-section/section-common.module.scss';


const RecentlyAdded = ()=> {
    return(
        <div className={`${style['recently-main']} ${commonSectionStyle['section-common']}`}>
            <div className={style['section-head']}>
                <h6 className={style['title']}>Recently Added</h6>
                <Link href={'/all_homes'} className={style['see-all']}>See all</Link>
            </div>
            <HomeTemplateWrapper />
        </div>
    )
}

export default RecentlyAdded;