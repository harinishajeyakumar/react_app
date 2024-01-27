import "../../css/NavBar.css"
// import  {useReducer}  from "react";
// const value={count:0}
// function countFunction(state,action){
//     switch (action.type) {
//         case "sub":
//             return {count:state.count-1}
//         case "add":
//             return {count:state.count+1}
//         case "reset":
//             return {count:value.count}
//         default:
//             return {count:value.count}
// }
// }
const Login =()=>{
    //const [countVal,updateCount]=useReducer(countFunction,value);
    return (
        <div style={{textAlign:"center"}}>
           {/* <h1> This is useReducer example</h1>
           <h2>Count:{countVal.count}</h2>
           <button onClick={()=>updateCount({type:"add"})}>Add</button>
           <button  onClick={()=>updateCount({type:"sub"})}>Sub</button>
           <button onClick={()=>updateCount({type:"reset"})}>Reset</button> */}
           <form>

          <p>Name: <input class="input" type="text" name="fname"></input></p>
          <p>Email: <input class="input" type="text" name="femail"></input></p>
          <p>Password: <input class="input" type="text" name="pwd1"></input></p>
          <p>Confirm Password: <input class="input" type="text" name="pwd2"></input></p>

          <input class="submit" type="submit"></input></form>
              
        </div>
    )
}
// const Login = () =>{
//     return(
//         <div>
//             <h1>This page is meant for your login details</h1>
//         </div>
//     )
// }
 export default Login