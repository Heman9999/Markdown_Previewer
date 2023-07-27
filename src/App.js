import './App.scss';
import {marked} from 'marked'
import {useState} from 'react'

function App() {
  let [value,setValue] = useState(`# Hello World
## you are awesome

[link](http://google.com)
1. one
1. two
1. three
1. four

>Hello World
![Image](https://code.visualstudio.com/assets/docs/languages/Markdown/markdown-outline-view.png)

**Hello World**
\`this \`

\`\`\`
var i;
for(i =0; i < 5; i++){
  console.log(i)
}
\`\`\`

`)
  const Hello = marked.parse(`${value}`)
  return (
    <div className='main'>
      <div className='title'>
        <h1>
          MarkDown Previewer
        </h1>
      </div>
      <div className='container'>
        <div className='textfield'>
          <textarea value={value} id="editor" onChange={e => setValue(e.target.value)}>
            
          </textarea>
        </div>
        <div className='showText'>
          <div className='viwer' id="preview" dangerouslySetInnerHTML={{ __html : Hello}}>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
