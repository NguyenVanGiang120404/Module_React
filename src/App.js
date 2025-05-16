import './App.css';
import  React  from 'react';
import Example1 from './Component/Lesson4/Example1/Example1';
import FormRegister from './Component/Lesson4/Example2/FormRegister';
import show from './BaiTap/Props/lesson4/baitap_Props1';
import Show from './BaiTap/Props/lesson4/baitap_Props1';
import ProductItem from './BaiTap/Props/lesson4/Props';
import Parent from './BaiTap/Props/lesson4/Parent';
import ShowLogin from './BaiTap/Props/lesson4/LoginShow';

function App() {
  // const element1 = React.createElement('h1', null, 'Hello ReactJs')
  // const name = 'Nguyen Van Giang';
  // const element2 = React.createElement('h1', { id: 1, name }, `Tên tôi là: ${name}`);
  // const element3 = React.createElement('div' , null , React.createElement(
  //   'h2' , null , 'đây là thẻ div chưa thẻ h2'
  // ) )
  // const element4 = React.createElement(
  //   'ul',{className : 'item-list'},
  //   React.createElement('li' , null , 'item1'),
  //   React.createElement('li' , null , 'item2'),
  //   React.createElement('li' , null , 'item3'),
  // )
  // const element5 = React.createElement('h1' , null , 'Chào mọi người đến với React')
  // const element6 = React.createElement('p' , null , 'Đây là bài tập đầu tiên của chúng ta.')
  // const element7 = React.createElement('a' ,
  //   {href : `https://www.google.com` } ,
  //   'Truy Cập vào Goole'
  // )
  const maps = [ "Apple", "Banana", "Orange", "Apricot", "Black rowan", "Cranberry"]

  //Nhúng biểu thức của Js trong jsx
  //Nhúng bất kì biểu thức js nào bằng cách đặt trong dấu  ngoặc nhọn {}
  function formaName(user){
    return user.firstName + ' ' + user.lastName
  }
  const user = {
    firstName : 'Harper',
    lastName : 'Perez'
  }

  const element = (
    <h1>
      Hello Giang nhé!
    </h1>
  )
  return(
    <div>
      {/* <h1> Element1 : {element1}</h1>
      <h1> Element2{element2}</h1>
      <h1> Element3{element3}</h1> */}
      {/* <h1> Element4{element4}</h1> */}
      {/* <h1> Element5{element5}</h1>
      <p> Element6 :{element6}</p>
      <a> Element7 : {element7}</a> */}
      {/* <h1>List Danh Sách: </h1>
      <ul>
        {maps.map((item , index)=>{
         return <li key={index}>{item}</li>
        })}
      </ul>
      <h1>
        Hello , {formaName(user)}
      </h1>
      <p>
      {element}
      </p> */}

      {/* <FormRegister/> */}
      <ProductItem/>
      <Parent/>
      <ShowLogin/>
      <Example1/>
    </div>
  )
}

export default App;
