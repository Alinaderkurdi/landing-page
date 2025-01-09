import style from './more-about.module.scss';
import footerSecondary from '../../style/footer-secondary-text/footer-secondary-text.module.scss'; 


const MoreAbout = ()=> {

    return(
        <p className={`${style['text']} ${footerSecondary['footer-secondary']}`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi consectetur molestias esse labore repellat blanditiis mollitia laudantium, in, deserunt quaerat commodi voluptate quam minus saepe accusantium. Velit sed obcaecati qui.</p>
    )
}

export default MoreAbout;