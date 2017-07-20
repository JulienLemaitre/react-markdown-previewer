import React, { Component } from 'react';
import { connect } from 'react-redux';

class MarkdownArea extends Component {

  render() {

    return (
      <div dangerouslySetInnerHTML={{__html: this.props.codeMarked}}>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    codeMarked: state.codeMarked
  };
}

export default connect(mapStateToProps)(MarkdownArea);