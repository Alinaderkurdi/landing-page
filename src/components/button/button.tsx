

type button = {
    appendStyle?: string
    children ?: React.ReactNode
    functionPointer? : ()=> void
}

const Button = (props: button)=> {
    const {children , appendStyle , functionPointer } = props
    return (
        <button onClick={functionPointer} className={`rounded-lg flex  outline-none justify-center flex-row items-center ${appendStyle ? appendStyle : ''}`}>
           {children} 
        </button>
    )
}


export default Button;