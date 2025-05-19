function CountterButton({handleIncrease , handleDecrease}){
    return(
        <>
            <button style={{backgroundColor:"pink"}} onClick={handleIncrease}>+</button>
            <button style={{backgroundColor:"green"}} onClick={handleDecrease}>-</button>
        </>
    )
}
export default CountterButton