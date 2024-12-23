import Image from "next/image";
import logo from '../../assets/logo/newLOGO.png'
import style from './logo-box.module.scss'

const LogoBox = ()=> {
    return (
        <Image 
        className={style['logo-box']}
        src={logo}
        width={140}
        height={160}
        alt="logo"
        />
    )
}


export default LogoBox;