import Image from "next/image";
import style from './logo-box.module.scss'
import logo from '../../assets/logo/newLOGO (1).svg'

const LogoBox = ()=> {
    return (
      <div className={style['logo-wrapper']}>
        <Image 
        className={style['logo-box']}
        src={logo}
        width={144}
        height={160}
        alt="logo"
        />
      </div>
        
    )
}


export default LogoBox;