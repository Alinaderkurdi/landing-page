
import Link from "next/link";
import style from './section-link.module.scss';

type sectionLink = {
    linkName : string
    linkUrl : string
}

const SectionLink = (props: sectionLink)=> {

    const { linkName,linkUrl} = props
    return(
        <Link className={style['footer-link']} href={linkUrl}>
         {linkName}
        </Link>
    )
}

export default SectionLink;