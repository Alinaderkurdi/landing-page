
import style from './availble-countries.module.scss'
import CountryTemplate from './components/country-template/country-template'
import londonImage from './assets/pexels-pixabay-258117.jpg'
import newYork from './assets/pexels-flooriefloor-18535324.jpg'
import paris from './assets/pexels-kadiravsarr-20170702.jpg'
import spain from './assets/pexels-enricoperini-819764.jpg'
//import test from './assets/pexels-binyaminmellish-106399.jpg'
//import testB from './assets/pexels-binyaminmellish-1396132.jpg'


// data featching

const AvailbleCountries = ()=> {
    return(
        <div className={style['availble-countries-main']}>
            <h3 className={style['section-title']}>We are availble in many well-known countries</h3>
            <div className={style['countries']}>{/**the countries can be separate into folder but for simplicity and pervent complexity i decide to put it here*/}
               <CountryTemplate imageUrl={spain}  countryName='SPAIN'/>
               <CountryTemplate imageUrl={londonImage} countryName='LONDON'/>
               <CountryTemplate imageUrl={newYork} countryName='AMERICA'/>
               <CountryTemplate imageUrl={paris} countryName='PARIS'/>
            </div>
        </div>
    )
}


export default AvailbleCountries;