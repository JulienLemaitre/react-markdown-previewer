import React, { Component } from 'react';
import TextArea from './containers/text_area';
import MarkdownArea from './containers/markdown_area';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1><span>&#123;</span>&nbsp;Markdown Previewer&nbsp;<span>&#125;</span></h1>
        </div>
        <div className="App-content">
          <div className="input-area">
            <h2>Enter your text here with markdown</h2>
            <TextArea />
          </div>
          <div className="result">
            <h2>Here is the result</h2>
            <MarkdownArea />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
