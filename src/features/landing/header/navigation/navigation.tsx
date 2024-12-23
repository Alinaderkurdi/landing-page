import Link from "next/link"

import style from './navigation.module.scss'


const Navigation = ()=> {
    return(
        <div className={style['navigation-button-box']}>
            <Link className={style['nav-bt']} href={'/'}>HOME</Link>
            <Link className={style['nav-bt']} href={'/properties'}>PROPERTIES</Link>
            <Link className={style['nav-bt']} href={'/agents'}>AGENTS</Link>
            <Link className={style['nav-bt']} href={'/blog'}>BLOG</Link>
        </div>
    )
}


export default Navigation