import style from './landing.module.scss'
import Header from './header/header';
import SearchSection from './search-section/search-section';
const Landing = ()=> {
    return (
        <div className={style['landing-main']}>
            <Header />
            <SearchSection />
        </div>
    )
}

export default Landing;