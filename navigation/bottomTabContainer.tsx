import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/homeScreen';
import ProfileScreen from '../screens/profileScreen';
import FavoritesScreen from '../screens/favoritesScreen';

const BottomTabContainer = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
      <Tab.Screen name="FavoritesScreen" component={FavoritesScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabContainer;
