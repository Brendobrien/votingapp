import React from 'react';
import { View } from 'react-native';

import RowName from './RowName';
import DeleteButton from './DeleteButton';
import ShareButton from './ShareButton';

export default props => (
  <View
    style={{
      flex: 1,
      flexDirection: 'row',
    }}
  >
    <RowName {...props} />
    <View style={{ flex: 0.3 }}>
      <ShareButton
        pollId={props.pollId}
      />
      <DeleteButton
        pollId={props.pollId}
      />
    </View>
  </View>
);
