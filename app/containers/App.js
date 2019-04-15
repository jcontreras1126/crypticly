// @flow
import React, { Component, Fragment } from 'react';
import type { Node } from 'react';
import { connect } from 'react-redux';

import * as cryptActions from 'actions/crypt';

type Props = {
  children: Node,
  initApp: any => void
};

class App extends Component<Props> {
  componentDidMount() {
    const { initApp } = this.props;
    initApp();
  }

  render() {
    const { children } = this.props;
    return <Fragment>{children}</Fragment>;
  }
}

export default connect(
  (state, ownProps) => ({}),
  {
    initApp: cryptActions.initApp
  }
)(App);
