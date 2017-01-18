import React, { Component } from 'react';
import {
  ScrollView,
  Icon,
  Row,
  Subtitle,
  Text,
  Title,
  View,
  Image,
  Divider,
  Tile,
  Screen,
} from '@shoutem/ui';

import {
  NavigationBar,
} from '@shoutem/ui/navigation';

export default class BookDetails extends Component {
  static propTypes = {
    book: React.PropTypes.object,
  };

  render() {
    const { book } = this.props;

    return (
      <Screen styleName="paper full-screen">
        <NavigationBar
          title={book.name}
          styleName="clear"
          animationName="solidify"
        />

        <ScrollView>
          <Image
            styleName="large-portrait hero"
            animationName="hero"
            source={{ uri: book.image && book.image.url }}
            key={book.name}
          >
            <Tile animationName="hero">
              <Title>{book.name}</Title>
              <Subtitle>{book.author}</Subtitle>
            </Tile>
          </Image>

          <Screen styleName="paper">
            <Text styleName="md-gutter multiline">{book.description}</Text>

            <Divider styleName="line" />

            <Row>
              <Icon name="laptop" />
              <View styleName="vertical">
                <Subtitle>亚马逊</Subtitle>
                <Text numberOfLines={1}>{book.url}</Text>
              </View>
              <Icon styleName="disclosure" name="right-arrow" />
            </Row>

            <Divider styleName="line" />

            <Row>
              <Icon name="ic_user_profile" />
              <View styleName="vertical">
                <Subtitle>作者</Subtitle>
                <Text numberOfLines={1}>{book.author}</Text>
              </View>
            </Row>

            <Divider styleName="line" />

            <Row>
              <Icon name="ic_books" />
              <View styleName="vertical">
                <Subtitle>ISBN</Subtitle>
                <Text numberOfLines={1}>{book.ISBN}</Text>
              </View>
            </Row>

            <Divider styleName="line" />
          </Screen>
        </ScrollView>
      </Screen>
    );
  }
}
