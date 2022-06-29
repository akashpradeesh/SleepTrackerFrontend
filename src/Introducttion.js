import Login from "./Login";
import SignUp from "./SignUp";

export default function Introduction(){
    return(
    <div className="intro"><center><h1>Introduction</h1></center>
      <center><p>Irregular sleeping patterns are a common problem. This web app will fulfill the user's needs in tracking their sleeping patterns, including duration and timings.<br/> You will create a web app to track three parameters: sleep time, wake up time, and sleep duration. Users can add, edit, or remove any sleep entries.</p></center>
      <Login/>
      <div><br/><SignUp/></div>
      </div>

)}