import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText(){                   // use it in place of  {buttonText} by {getButtonText()}
  return 'Hi there';
}

const App =() => {  
  const buttonText = 'Click me'            // creating a component function named
  //or
  //const buttonText = {text: 'submit};     // use as  {buttonText.text}
  //or
  //const style = {backgroundColor : 'red' , color = 'white'}    // use as button style= {style}
  return (                       // App that returns something
    <div>
      <label htmlFor "name" className="label">enter e-mail</label>
      <input id="name" type="text" />
      <button style= {{backgroundColor: 'red', color:'white'}}>  
        { buttonText }                       
      </button>
    </div>
  )
}

ReactDOM.render(                  // DOM renders the function to specific div position
    <App />,
  document.querySelector('#root')   // ID of div is root where we want to show
);                                  // can also use .getElementbyID('root')


