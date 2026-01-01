import React from 'react';
import { View, Text, Button } from 'react-native';

const TestScreen = ({ navigation }) => {
 return (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'green' }}>
   <Text style={{ fontSize: 30, color: 'white' }}>TEST SCREEN</Text>
   <Button title="Go Back" onPress={() => navigation.goBack()} />
  </View>
 );
};

export default TestScreen;
