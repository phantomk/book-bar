import React, { Component } from 'react';
import {
  Caption,
  Icon,
  Image,
  ListView,
  Tile,
  Title,
  Row,
  View,
  Subtitle,
  TouchableOpacity,
  Screen,
  Divider,
} from '@shoutem/ui';

import {
  NavigationBar,
} from '@shoutem/ui/navigation';

import ScanButton from '../components/ScanButton';
import CodeScanner from '../components/CodeScanner';

import { connect } from 'react-redux';
import { navigatePush } from './redux';

class BooksList extends Component {
  static propTypes = {
    onButtonPress: React.PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.renderRow = this.renderRow.bind(this);
  }

  getBooks() {
    return require('../assets/data/mock.json');
  }

  renderRow(book) {
    const { onButtonPress } = this.props;

    return (
      <TouchableOpacity onPress={() => onButtonPress(book)}>
        <Row>
          <Image
            styleName="small rounded-corners"
            source={{ uri: book.image.url }}
          />
          <View styleName="vertical stretch space-between">
            <Subtitle>{book.name}</Subtitle>
            <View styleName="horizontal">
              <Caption styleName="md-gutter-right">{book.author}</Caption>
            </View>
          </View>
        </Row>
        <Divider styleName="line" />
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <Screen>
        <NavigationBar
          title="All Books"
        />

        <ListView
          data={this.getBooks()}
          renderRow={book => this.renderRow(book)}
        />
      <ScanButton />
      <CodeScanner />
      </Screen>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onButtonPress: (book) => {
    dispatch(navigatePush({
      key: 'BookDetails',
      title: 'Details',
    }, { book }));
  },
});

export default connect(
	undefined,
	mapDispatchToProps
)(BooksList);
