import style from './home-template-wrapper.module.scss'
import HomeTemplate from '../components/home-template/home-template';
import homeImage from '../assets/pexels-binyaminmellish-1396132.jpg'
import ImageB from '../assets/pexels-expect-best-79873-323776.jpg'
import ImageC from '../assets/pexels-expect-best-79873-323780.jpg'
import ImageD from '../assets/pexels-nubikini-3221215.jpg'
import ImageE from '../assets/pexels-pixabay-164522.jpg'
import ImageF from '../assets/pexels-pixabay-534228.jpg';

//data featching 


const HomeTemplateWrapper = ()=> {
    return(
        <div className={style['wrapper-main']}>
            <HomeTemplate />
            <HomeTemplate />
            <HomeTemplate />
            <HomeTemplate />
            <HomeTemplate />
            <HomeTemplate />
        </div>
    )
}

export default HomeTemplateWrapper;