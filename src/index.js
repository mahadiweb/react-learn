import React from 'react'
import ReactDom from 'react-dom'
import {createRoot} from 'react-dom/client'
import App,{App2,App3} from './App'
import Form from './Form'
import Form2 from './Form2'
import Form3 from './Form3'

const root = createRoot(document.getElementById('root'));
root.render(<>
    {/* <App/> */}
    {/* <Form/> */}
    {/* <Form2/> */}
    <Form3/>
</>);