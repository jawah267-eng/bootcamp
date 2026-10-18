interface buttonProps{
    btnText:string;
    className:string;
    onclick:()=>void;
    disabled ?:boolean;
}
const button =({className, onclick,disabled ,btnText}:buttonProps)=>{
    return(
        <button
        className={`btn ${className}`}
        onClick={onclick}
        disabled={disabled}>
            {btnText}
        </button>
    )
}
export default button