import React, { useState } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { Controlled as ControlledEditor } from "react-codemirror2";
function File(props) {
  const { language, displayName, value, onChange } = props;
  const [a, seta] = useState(true)

  function handleChange(editor, data, val) {// what this does? it takes text what we type and returns that to sethtml or to setcss or to setjs through onchange, onchange change here is just a prop
    return onChange(val); //or {onChange(val)} // ya pe ene onBeforeChange kya karra text likhe so return b karara aur sethtml ya css ya ja b karara
  }

  return (
    <div className={`editor-container ${ a ? '' : 'collapse'}`}>
      <div className="editor-title">
        {displayName}
        <button onClick={()=>seta(a => !a)}> {`<>`}</button>
      </div>
      <ControlledEditor
        onBeforeChange={handleChange} // this onBeforeChange take 3 things update(from, to, text) which is here editor data and value 
        value={value} //here value means type
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          theme: "material",
          lineNumbers: true,
        }}
      />
    </div>
  );
}

export default File;
