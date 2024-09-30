import React, { useEffect, useState } from "react";
import File from "./components/File";
function App() {
  const [html, setHtml] = useState("");
  const [css, setcss] = useState("");
  const [js, setjs] = useState("");
  const [srcDoc, setsrcDoc] = useState("Your output will be visible here");
  useEffect(()=>{ 
    const timeout = setTimeout(() => {
      setsrcDoc(`
      <html>
       <body>${html}</body>
       <style>${css}</style>
       <script>${js}</script>
       </html> 
      `)
    }, 1000);
  },[html, css, js])

  return (
    <>
      <div className="top pane">
        <File
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
        />
        <File 
          language="css"
          displayName="CSS"
          value={css} 
          onChange={setcss} 
        />
        <File
          language="javascript"
          displayName="JS"
          value={js}
          onChange={setjs}
        />
      </div>
      <div className="bottom pane">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          // frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
}

export default App;
