import React from 'react'

const Login = () => {
    const [i, setI] = React.useState(0);
    const count=()=>{
        setI((count)=>count+1);
        if(i===5){
            alert("count is 5");
            setI(0);
        };
    };

  return (
    <div>
        <label>number :{i}</label>
      <button onClick={count}>click</button>
    </div>
  )
}


export default Login;
