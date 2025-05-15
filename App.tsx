import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splashscreen from './screens/Splashscreen';
import Login from './screens/Login';
import Register from './screens/Register';
import Announcements from './screens/Announcements';
import Calendar from './screens/Calendar';
import Profile from './screens/Profile';
import LostAndFound from './screens/LostAndFound';
import DocumentRequest from './screens/DocumentRequest';

export type RootStackParamList = {
  Splashscreen: undefined;
  Login: undefined;
  Register: undefined;
  Announcements: undefined;
  Calendar: undefined;
  Profile: undefined;
  LostAndFound: undefined;
  DocumentRequest: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splashscreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splashscreen" component={Splashscreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Announcements" component={Announcements} />
        <Stack.Screen name="Calendar" component={Calendar} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="LostAndFound" component={LostAndFound} />
        <Stack.Screen name="DocumentRequest" component={DocumentRequest} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;