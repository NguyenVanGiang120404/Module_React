export default function ColorPicker({onColorChange}){
    const colors =['red', 'green','black','blue','purple']
    return(
        <>
        {colors.map((color)=>(
            <button key={color} onClick={()=>onColorChange(color)}  style={{
                backgroundColor: color,
                color: "white",
                border: "none",
                padding: "10px 15px",
                marginRight: "10px",
                cursor: "pointer",
              }}>
                {color}
            </button>
        ))}
        </>
    )
}