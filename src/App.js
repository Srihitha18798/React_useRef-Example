import React,{useRef,useEffect} from "react";


const App=()=>{
  const data=useRef(null);
  const submitHandler=(e)=>{
    e.preventDefault();
    console.log(data.current.value)
    data.current.value="hello";//updating
  }
  useEffect(()=>{
      data.current.focus();
  },[])
  return(
    <div>
      <center>
        <form onSubmit={submitHandler}>
          <input ref={data} type="text" placeholder="Enter your name"></input> <br/>
          <input type="submit"></input>
          </form>
        </center>
    </div>
  );
}

export default App;