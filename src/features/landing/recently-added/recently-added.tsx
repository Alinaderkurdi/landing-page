import style from './recently-added.module.scss';
import Button from '@/components/button/button';
import Link from 'next/link';
import HomeTemplateWrapper from './home-template-wrapper/home-template-wrapper';


const RecentlyAdded = ()=> {
    return(
        <div className={style['recently-main']}>
            <div className={style['section-head']}>
                <h6 className={style['title']}>Recently Added</h6>
                <Link href={'/all_homes'} className={style['see-all']}>See all</Link>
            </div>
            <HomeTemplateWrapper />
        </div>
    )
}

export default RecentlyAdded;

//<Button>See all</Button>