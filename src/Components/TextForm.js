import React, {useState} from "react";
const TextForm = () => {

    const [text, setText] = useState("")
    
    const onChangeHandler = (event) => {
        let newtext = event.target.value
        setText(newtext)
    };
    const toUpperCase = () => { 
        let upper= text.toUpperCase();
        setText(upper);
    }
    const toLowerCase = () => {
      let lower= text.toLowerCase();
      setText(lower);
    }
    const handleClearText=()=>{
      setText("")

    }

  return (
    <div style={{
      textAlign:'center'
    }}>
      <h1>Enter Your Paragraph</h1>
      <div className="input-group">
        <textarea  aria-label="With textarea" rows={10} cols={70} value={text} onChange={onChangeHandler} ></textarea>
      </div>
      <div style={{
        margin:'10px',
        display:'flex',
        gap:'1rem',
        justifyContent:'center'
      }}>
      <button style={{
        padding:'5px',
        backgroundColor:'lightgreen'
      }}  onClick={toUpperCase}>Uppercase</button>
      <button style={{
        padding:'5px',
        backgroundColor:'lightcoral'
      }}  onClick={toLowerCase}>Lowercase</button>
      <button style={{
        padding:'5px',
        backgroundColor:'lightpink'
      }} onClick={handleClearText}>Clear Text</button></div>

        <div className="container">
            <h2>Characters</h2>
            <p>{text.length}</p>
            <h2> Words</h2>
            <p>{text.split(" ").length}</p>
            <div >
            <h2>Final Text</h2>
            <p>{text}</p></div>
        </div>

    </div>
    
  );
};
export default TextForm;