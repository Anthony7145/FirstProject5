import React from 'react';
import { View, Text, Button } from 'react-native';
import MainLayout from '../layouts/MainLayout';

function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>ToDoList</Text>
      {/* Render your to-do list and form components here */}
      
      {/* Button to navigate to the 'About' screen */}
      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About')}
      />
    </View>
  );

  return (
    <MainLayout>
      {/* Your screen content */}
      {/* For example: Display your to-do list and form components */}
    </MainLayout>
  );
}

export default HomeScreen;