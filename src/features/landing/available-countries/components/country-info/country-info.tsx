import Image from "next/image"

import style from './country-info.module.scss';
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type countryInfoType = {
    countryName : string
    imageUrl: StaticImport
}

const CountryInfo = (props: countryInfoType)=> {
    const {countryName, imageUrl} = props
    return(
        <div className={style['info-box']}>
           <Image 
            className={style['image-box']}
            src={imageUrl}
            alt={countryName}
            fill
            />
           <h4 className={style['country-name']}>{countryName}</h4>
        </div>
    )
}

export default CountryInfo