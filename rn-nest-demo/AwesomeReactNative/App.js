import React from 'react';

import {StyleSheet, View, Text} from 'react-native';
const App = () => {
  return (
    <>
      <View style={styles.hello}>
        <Text> hell212121o</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  hello: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f',
  },
});

export default App;
