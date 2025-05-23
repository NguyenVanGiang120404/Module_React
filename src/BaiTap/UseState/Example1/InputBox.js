export default function Input_Box({handleSearchs}){
    return(
        <div>
            <input placeholder="Nhập tên người dùng vào đây? " onChange={(e)=>handleSearchs(e.target.value)}/>
        </div>
    )
}