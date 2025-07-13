import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FavoritesDetailScreen from '../screens/favoritesDetailScreen';

const Stack = createNativeStackNavigator();

const FavoritesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="FavoritesDetail" component={FavoritesDetailScreen} />
    </Stack.Navigator>
  );
};

export default FavoritesStack;
