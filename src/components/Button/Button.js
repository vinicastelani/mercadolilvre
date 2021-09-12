import "./Button.scss"
const Button = ({str}) =>{
    return (
       <div className="py-3">
            <button className="buy" onClick={alert}>{str}</button>
       </div>
    )
}

export default Button