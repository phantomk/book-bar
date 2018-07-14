import React, { Component } from 'react';
import {
  Button,
  Caption,
  Icon,
  Image,
  ListView,
  Tile,
  Title,
  Text,
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

import { connect } from 'react-redux';
import { navigatePush } from './redux';
import BookScanner from './BookScanner';

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

        <Button
          styleName="md-gutter dark"
          onPress=""
          title="扫描"
          accessibilityLabel="扫描条形码"
        >
          <Text>扫描</Text>
        </Button>

        <BookScanner />

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
