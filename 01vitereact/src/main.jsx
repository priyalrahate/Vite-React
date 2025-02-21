import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

function MyApp(){
    return(
        <div>
            <App/>
            <h1>Custom App!</h1>
        </div>
    )
}
// const reactElement={
//     type:'a',
//     props:{
//         href:'http://google.com',
//         target:'_blank',
//     },
//     children:'click me to vissit google'
// }  // this code will not run as dom is expecting a different type of object 

const anotherElement=(
    <a href="https://google.com" target='_blank'>Visit google</a>
)

const reactElement=React.createElement(
    'a',
    {href:'https://google.com',target:'_blank'},
    'click me to visit google'
)

const root = createRoot(document.getElementById('root'));
root.render(
//   <MyApp/>
// anotherElement
reactElement
);

