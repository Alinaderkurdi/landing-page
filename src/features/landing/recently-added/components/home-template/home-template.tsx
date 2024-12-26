import { StaticImageData } from "next/image"
import style from './home-template.module.scss';
import Image from 'next/image';
import textCharacteristics from '../../styles/text-characteristics/text-characteristics.module.scss';

type templateProps = {
  imageUrl: StaticImageData
  location: string
  price: string
  bedroom: number
  garage: number
  meter: number
  realestate: string
  leatest: boolean
}


const HomeTemplate = (props:templateProps)=> {
    const {  meter, imageUrl, price ,garage, bedroom, realestate, location , leatest } = props
    return(
        <div className={`${style['template']} ${leatest ? style['leatest-added-home'] : ''} `}>
          <div className={style['image-wrapper']}>
          <Image 
            className={style['image-style']}
            src={imageUrl}
            fill
            alt={`home image on ${location} location`}
          />
          </div>
          <div className={style['info-wrapper']}>
              <p className={style['location']}>{location}</p>
              <div className={style['middle-row']}>
                 <p className={`${textCharacteristics['text-characteristics']} `}>{bedroom} Bedroom</p>
                 <p className={`${textCharacteristics['text-characteristics']} `}>{meter} M</p>
                 <p className={`${textCharacteristics['text-characteristics']} `}>{garage} Garage</p>
              </div>
              <div className={style['bottom-row']}>
                 <p className={`${textCharacteristics['text-characteristics']}`}>Posted by {realestate}</p>
                 <p className={style['price-tag']}>${price}</p>
              </div>
          </div>
        </div>
    )
}


export default HomeTemplate