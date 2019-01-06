import React, { Component } from 'react';
import MyComponent from './MyComponent';
import EventPractice from './EventPractice';
import ValidationSample from './ValidationSample';
import ScrollBox from './ScrollBox';

class App extends Component {
  render() {    
    return ( 
      <div>
        <MyComponent name="육성재" age={25} />
        <EventPractice />
        <ValidationSample />
        <div>
          <ScrollBox ref={(ref) => this.scrollBox=ref} />
          <button onClick={() => this.scrollBox.scrollToBottom()}>
            맨 밑으로
          </button>
        </div>
      </div>
    );
  }
}

export default App;
