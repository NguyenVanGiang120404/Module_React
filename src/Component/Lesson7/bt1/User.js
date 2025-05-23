// import { useState } from "react";
// import SearchBar from "./SearchBar";
// import InputBox from "./InputBox";

// export default function User() {
//     const users = ["Giang", "Tien", "Hai", "Huy"];
//     const [keyword, setKeyword] = useState("");

//     const handleSearch = (value) => {
//         setKeyword(value);
//     };

//     const filteredUsers = keyword
//         ? users.filter((user) =>
//               user.toLowerCase().includes(keyword.toLowerCase())
//           )
//         : users;

//     return (
//         <div>
//             <InputBox handleSearch={handleSearch} />
//             <SearchBar user={filteredUsers} />
//         </div>
//     );
// }
