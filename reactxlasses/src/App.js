import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { render } from '@testing-library/react';

function App() {
  return (
    <div className="App">
      <FristClass  />
      <SecondClass  />
      <ThirdClass  />
      <Demo1  />
      <Demo2  />
      <Demo3  />
      <Demo4  />
      <Demo5  />
      
    </div>
  );
}
class FristClass extends React.Component{
render(){
  return(
    <div>
      <h1>This is my Frist class</h1>
    </div>
  );
}

}

class SecondClass extends React.Component{
  render(){
    return(
      <div>
        <h1>This is my Second class</h1>
      </div>
    );
  }
  
  }

  class ThirdClass extends React.Component{
    render(){
      return(
        <div>
          <h1>This is my Third class</h1>
        </div>
      );
    }
    
    }

    class Demo1 extends React.Component{
      render(){
        return(
          <div>
          <h1> This is Demo 1 class</h1>
          </div>

        );
      }
    }
  
    class Demo2 extends React.Component{
    render(){
      return(
           <div>
             <h1>This is Demo 2 class</h1>
           </div>
      );

    }
    }

    class Demo3 extends React.Component{
      render(){
        return(
          <div>
            <h1 >This is Demo 3 class</h1>
          </div>
        );
      }
    }

    class Demo4 extends React.Component{
      render(){
        return(
          <div>
            <h1>This is Demo 4 class</h1>

            </div>
        );
      }
    }

    class Demo5 extends React.Component{
      render(){
        return(
          <div>
            <h1>
              This is Demo 5 class
            </h1>
          </div>
        );

      }
    }

export default App;
