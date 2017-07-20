import React, { Component } from 'react';
import { connect } from 'react-redux';
import { codeChanged } from '../actions/codeActions';
import { bindActionCreators } from 'redux';

class TextArea extends Component {

  onInputChange(event) {
    this.props.codeChanged(event.target.value);
  };

  render() {

    return (
      <textarea
        className="textinput"
        value={this.props.codeTyped}
        placeholder="Type here your text and markdowns"
        onChange={this.onInputChange.bind(this)}
      ></textarea>
    );
  }
}

function mapStateToProps(state) {
  return {
    codeTyped: state.codeTyped
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ codeChanged: codeChanged }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TextArea);
