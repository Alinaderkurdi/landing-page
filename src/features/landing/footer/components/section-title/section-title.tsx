
import stlye from './section-title.module.scss';

type sectionTitle = {
    children ?: React.ReactNode
}


const SectionTitle = (props: sectionTitle)=> {
    const { children }  = props
    return(
        <p className={stlye['section-title']}>{children}</p>
    )
}

export default SectionTitle;