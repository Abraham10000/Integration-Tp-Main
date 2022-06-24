export function Form({label,type,placeholder,className, value}) {
    return (
        <form>
    <label className="label">{label} :</label> <br/>
        <input  type={type} placeholder={placeholder} className={className} value={value}></input> <br/>
   </form>
        
    )
}