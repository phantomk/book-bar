import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  CardStack,
  NavigationBar,
} from '@shoutem/ui/navigation';

import { navigatePop } from './redux';
import BooksList from './BooksList';
import BookDetails from './BookDetails';

class App extends Component {
  static propTypes = {
    onNavigateBack: React.PropTypes.func.isRequired,
    navigationState: React.PropTypes.object,
    scene: React.PropTypes.object,
  };

  constructor(props) {
    super(props);

    this.renderNavBar = this.renderNavBar.bind(this);
    this.renderScene = this.renderScene.bind(this);
  }

  renderScene(props) {
    const { route } = props.scene;

    let Screen = route.key === 'BookDetails' ? BookDetails : BooksList;
    return (<Screen {...route.props} />);
  }

  renderNavBar(props) {
    const { onNavigateBack } = this.props;

    return (
      <NavigationBar.View
        {...props}
        onNavigateBack={onNavigateBack}
      />
    );
  }

  render() {
    const { navigationState, onNavigateBack } = this.props;

    return (
      <CardStack
        navigationState={navigationState}
        onNavigateBack={onNavigateBack}
        renderNavBar={this.renderNavBar}
        renderScene={this.renderScene}
      />
    );
  }
}

export default connect(
  state => ({ navigationState: state.navigationState }),
  { onNavigateBack: navigatePop }
)(App);
