function EmailInput({email ,onChangeEmail }){
    return(
        <>
         <input 
                type="email"
                value={email}
                placeholder="Nhập emmail của bạn..."
                onChange={(e)=>onChangeEmail(e.target.value)}
        />
        </>
    )
}
export default EmailInput