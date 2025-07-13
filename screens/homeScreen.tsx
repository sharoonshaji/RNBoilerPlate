import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = () => {
  const styles = createStyle();
  const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{'Home Screen'}</Text>
      <Button
        title="Go to Detail"
        onPress={() => {
          navigation.navigate('HomeDetail');
        }}
      />
    </View>
  );
};

const createStyle = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontSize: 24,
      color: 'black',
    },
  });
};

export default HomeScreen;
