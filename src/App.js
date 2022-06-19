import { Fragment, useState } from "react";

const Button = (props) => {
  const [count,setCount] = useState(0);


  return (
    <h1  style={{color : props.color, textDecoration:props.underline?'underline':''}} onClick={(e)=>{
      e.preventDefault();
      setCount(count+props.increment);
    }}>
      I am a Button {count}
    </h1>
  )
}

function App() {
  const newProps = {
    increment:2,
    underline : true
  }

  return (
    <Fragment>
      <Button {...newProps}   color="blue"/>
      <Button {...newProps}   color="red"/>
      <Button {...newProps}   color="green"/>
      <Button {...newProps}   color="black"/> 
    </Fragment>
  );
}

export default App;
