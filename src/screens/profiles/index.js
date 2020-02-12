import * as React from 'react';
import { View, Button, Text } from 'react-native';

function Profiles({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Hello Profiles!</Text>
        <Button title="Go to Home" 
          onPress={() => navigation.navigate('Home')} />
      </View>
    );
}

export default Profiles;