import { StaticImageData } from "next/image"
import style from './home-template.module.scss';
import Image from 'next/image';

import testI from '../assets/pexels-expect-best-79873-323776.jpg'

type templateProps = {
   imageUrl: StaticImageData
   location: string
   price: string
   bedroom: number
   garage: number
   meter: number
   realestate: string
}


const HomeTemplate = (props:templateProps)=> {
    const {  meter, imageUrl, price ,garage, bedroom, realestate, location } = props
    return(
        <div className={style['template']}>
          <div className={style['image-wrapper']}>
           <Image 
             src={testI}
             width={80}
             height={200}
             alt={'ii'}
           />
          </div>
          <div className={style['info-wrapper']}>
              <p className={style['location']}>103/134 West Street Crows Nest</p>
          </div>
        </div>
    )
}


export default HomeTemplate