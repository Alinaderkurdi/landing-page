import baseStyle from './input-fild.module.scss';


type inputFild = {
    appendStyle?: string
    placeholder? : string
}



const InputFild = (props:inputFild)=> {
    
    const { appendStyle, placeholder} = props

    return(
        <input 
        placeholder={placeholder}
        className={`${baseStyle['input-fild']} ${appendStyle ? appendStyle : ''}`}/>
    )
}


export default InputFild;