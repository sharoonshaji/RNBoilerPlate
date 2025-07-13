import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileDetailScreen from '../screens/profileDetailScreen';

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ProfileDetail" component={ProfileDetailScreen} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
