
import { useDispatch } from "react-redux";
import { decerment,square } from "./reduxapp/counterSlice";

function Page2(){
    const dispatch=useDispatch()
    return(
        <>
        <button onClick={()=>{
            dispatch(decerment())
        }}>
            Decerment2
        </button>
         <input type="text" name="" onChange={(e)=>{
             dispatch(square(e.target.value))
         }} id="" />
        </>
    )
}
export default Page2;