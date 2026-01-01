import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Import screens directly
import HomeScreen from './src/screens/HomeScreen';
import PlayerSetupScreen from './src/screens/PlayerSetupScreen';
import GameModeScreen from './src/screens/GameModeScreen';
import GameScreen from './src/screens/GameScreen';
import CardScreen from './src/screens/CardScreen';
import TestScreen from './src/screens/TestScreen';
import RulesScreen from './src/screens/RulesScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  console.log("App rendering with screens loaded");
  
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="HomeScreen"
          screenOptions={{
            headerShown: false,
            animation: 'slide_from_right',
          }}
        >
          <Stack.Screen 
            name="HomeScreen" 
            component={HomeScreen}
          />
          <Stack.Screen 
            name="PlayerSetupScreen" 
            component={PlayerSetupScreen}
          />
          <Stack.Screen 
            name="GameModeScreen" 
            component={GameModeScreen}
          />
          <Stack.Screen 
            name="GameScreen" 
            component={GameScreen}
          />
          <Stack.Screen 
            name="CardScreen" 
            component={CardScreen}
          />
          <Stack.Screen 
            name="TestScreen" 
            component={TestScreen}
          />
<Stack.Screen name="RulesScreen" component={RulesScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
