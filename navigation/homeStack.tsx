import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeDetailScreen from '../screens/homeDetailScreen';
import BottomTabContainer from './bottomTabContainer';
import ProfileStack from './profileStack';
import FavoritesStack from './favoritesStack';
import ProfileDetailScreen from '../screens/profileDetailScreen';
import FavoritesDetailScreen from '../screens/favoritesDetailScreen';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={'Home'}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name={'Home'}
        component={BottomTabContainer}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FavoritesStack"
        component={FavoritesStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="HomeDetail" component={HomeDetailScreen} />
      <Stack.Screen name="ProfileDetail" component={ProfileDetailScreen} />
      <Stack.Screen name="FavoritesDetail" component={FavoritesDetailScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
