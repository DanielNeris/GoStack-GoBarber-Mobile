import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashobard from '../pages/Dashobard';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#312e38' },
    }}
  >
    <App.Screen name="Dashobard" component={Dashobard} />
  </App.Navigator>
);

export default AppRoutes;
