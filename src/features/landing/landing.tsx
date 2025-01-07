import style from './landing.module.scss'
import Header from './header/header';
import SearchSection from './search-section/search-section';
import AvailbleCountries from './available-countries/available-countries';
import ContactUsSection from './contact-us-section/contact-us-section';
import RecentlyAdded from './recently-added/recently-added';
import Footer from './footer/footer';

const Landing = ()=> {
    return (
        <div className={style['landing-main']}>
            <Header />
            <SearchSection />
            <AvailbleCountries />
            <RecentlyAdded />
            <ContactUsSection />
            <Footer />
        </div>
    )
}

export default Landing;