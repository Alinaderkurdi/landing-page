import style from './home-template-wrapper.module.scss'
import HomeTemplate from '../components/home-template/home-template';
import homeImage from '../assets/pexels-binyaminmellish-1396132.jpg'
import ImageB from '../assets/pexels-expect-best-79873-323776.jpg'
import ImageC from '../assets/pexels-expect-best-79873-323780.jpg'
import ImageD from '../assets/pexels-nubikini-3221215.jpg'
import ImageE from '../assets/pexels-pixabay-164522.jpg'
import ImageF from '../assets/pexels-pixabay-534228.jpg';

import { StaticImageData } from 'next/image';

//data featching 


//the logic of how HomeTemplate should be render in depend on API or business  need but I assume  that this
//part of page should render 6 HomeTemplate and to see all HomeTemplate  user should click on the SEE ALL link
//and viset all home 
//in this scenario HomeTemplate could be defind as global component 

// to show the leatest added for now i use a boolean tow show it

type homeData = {
  imageUrl: StaticImageData
  location: string
  price: string
  bedroom: number
  garage: number
  meter: number
  realestate: string
  leatest: boolean
  id:string
}



const dummyData = [
    {
        imageUrl: homeImage,
        location: '103/143 West Street, Crows Nest',
        garage: 10,
        meter: 200,
        leatest: true,
        price: '40000',
        realestate:'X builder',
        bedroom: 10,
        id: 'j8k2l3m1n7o9p4q6'
    },
    {
        imageUrl: ImageB,
        location: '103/143 West Street, Crows Nest',
        garage: 10,
        meter: 200,
        leatest: false,
        price: '40000',
        realestate:'X builder',
        bedroom: 10,
        id: 'r5s7t3u8v1w2x9y0'
    },
    {
        imageUrl: ImageC,
        location: '103/143 West Street, Crows Nest',
        garage: 10,
        meter: 200,
        leatest: false,
        price: '40000',
        realestate:'X builder',
        bedroom: 10,
        id: 'c8a9d2f4b7e5g1h3'
    },
    {
        imageUrl: ImageD,
        location: '103/143 West Street, Crows Nest',
        garage: 10,
        meter: 200,
        leatest: false,
        price: '40000',
        realestate:'X builder',
        bedroom: 10,
        id: 'j0k1n6l4p8q7r2s3'
    },
    {
        imageUrl: ImageE,
        location: '103/143 West Street, Crows Nest',
        garage: 10,
        meter: 200,
        leatest: false,
        price: '40000',
        realestate:'X builder',
        bedroom: 10,
        id: 't4u5v9w1x3y0z7a8',
    },
    {
        imageUrl: ImageF,
        location: '103/143 West Street, Crows Nest',
        garage: 10,
        meter: 200,
        leatest: false,
        price: '40000',
        realestate:'X builder',
        bedroom: 10,
        id:'b3c7d6e9f5g2h0i4'
    }
]



const HomeTemplateWrapper = ()=> {
    return(
        <div className={style['wrapper-main']}>
           {dummyData.map((singleHome:homeData)=>{
              console.log(singleHome)
              return(
                <HomeTemplate 
                 key={singleHome.id}
                 location={singleHome.location}
                 bedroom={singleHome.bedroom}
                 price={singleHome.price}
                 leatest={singleHome.leatest}
                 meter={singleHome.meter}
                 imageUrl={singleHome.imageUrl}
                 garage={singleHome.garage}
                 realestate={singleHome.realestate}
                />
              )
           })}
        </div>
    )
}

export default HomeTemplateWrapper;