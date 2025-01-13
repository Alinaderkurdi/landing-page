
import style from './section-wrapper.module.scss';


type sectionWrapper = {
    children: React.ReactNode
}

const SectionWrapper = (props: sectionWrapper)=>{
    const { children } = props

    return(
        <div className={style['section-wrapper']}>
            {children}
        </div>
    )
}

export default SectionWrapper;