
import style from './social-media.module.scss';
import Link from 'next/link';
import Image from 'next/image';


import  Github  from "../../../../../../public/github.svg";
import  Linkedin  from "../../../../../../public/linked.svg";
import  Telegram  from "../../../../../../public/telegram.svg";
import  Instagram  from '../../../../../../public/instagram.svg';


const SocialMedia = ()=> {
    return (
        <div className={style['media-box']}>
            <Link href={'https://github.com/Alinaderkurdi'}> 
             <Image 
             src={Github}
             width={25}
             height={25}
             alt='github logo'
             />
            </Link>
            <Link href={'https://www.instagram.com/ali_naderkurdi'}>
             <Image 
              src={Linkedin}
              width={25}
              height={25}
              alt='Linkedin logo'
              />
            </Link>
            <Link href={''}>
              <Image 
               src={Instagram}
               width={25}
               height={25}
               alt='Instagram logo'
               />
            </Link>
            <Link href={''}>
              <Image 
               src={Telegram}
               width={25}
               height={25}
               alt='telegram logo'
               />
            </Link>
        </div>
    )
}

export default SocialMedia;