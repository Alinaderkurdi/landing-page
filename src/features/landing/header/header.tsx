import style from './header.module.scss'
import Authentication from '@/features/authentication/authentication';
import Navigation from './navigation/navigation';
import LogoBox from './logo-box/logo-box';



const Header = ()=> {
  return(
    <header className={style['header-main']}>
      <LogoBox />
      <div className={style['wrapper']}>
        <Navigation />
        <Authentication />
      </div>
    </header>
  )
}


export default Header;
