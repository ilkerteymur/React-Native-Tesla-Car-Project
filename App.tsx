import React from 'react';

import {StyleSheet, View} from 'react-native';
import CarItem from './components/CarItem';

function App(): JSX.Element {
  return (
    <View style={styles.container}>
      <CarItem
        name={'Model X'}
        tagline={'Order Online For'}
        tagLineCTA={'Touchless Delivery'}
        image={require('./assets/images/Model3.jpeg')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
