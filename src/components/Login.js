import React,{useRef} from 'react';
import {useNavigate} from 'react-router-dom';

function Login() {
    let nameRef=useRef();
    let passRef=useRef();
    let adminRef=useRef();
    let navigate=useNavigate();
    let buttonOnClick=()=>
    {
        let enteredName=nameRef.current.value;
        let adminName=adminRef.current.value;
        let passName=Number(passRef.current.value);
        if(adminName=="admin" && passName==1234)
        {
            navigate("/home",{state:{name:enteredName}})
        }
        else
        {
            alert("incorrect username or password");
        }

    }
  return (
    <div className='bg-img'>
  <form className='form'>
    <h1>Login</h1>
    <div>
    <label for="email"><b>Name</b></label>
    <input ref={nameRef} type="text" placeholder="Enter Your Name" required></input>
    </div>
    <div>
    <label for="email"><b>AdminName</b></label>
    <input ref={adminRef} type="text"  placeholder="Enter Admin Name" required></input>
    </div>
    <div>
    <label for="psw"><b>Password</b></label>
    <input ref={passRef} type="password" placeholder="Enter Password" name="psw" required></input>
    </div>
  <button type="button"  id="btn" onClick={()=>
        {buttonOnClick()}}>Login</button>

        </form>
    </div>
  )
    }


export default Login