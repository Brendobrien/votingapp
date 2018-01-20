import React from 'react';
import Card from './Card';
import Deck from './Deck';
import getData from './getData';
import Nao from './Nao';

// helpers
import colors from '../../helpers/colors';

class Start extends React.Component {
  render() {
    return (
      <Deck
        data={getData()}
        onSwipeLeft={() => console.log('over')}
        onSwipeRight={() => console.log('under')}
        renderCard={({ uri }) => <Card uri={uri} />}
        renderNoMoreCards={() => <Nao />}
      />
    );
  }
}

export default Start;
