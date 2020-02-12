import * as React from 'react';
import { View, Button, Text } from 'react-native';

function Categories({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Hello categories!</Text>
        <Button title="Go to Home" 
          onPress={() => navigation.navigate('Home')} />
      </View>
    );
}

export default Categories;