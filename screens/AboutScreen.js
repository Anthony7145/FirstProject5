import React from 'react';
import { View, Text, Button } from 'react-native';

function AboutScreen({ navigation }) {
  // Get the current date
  const currentDate = new Date().toDateString();

  return (
    <View>
      <Text>Name of the App</Text>
      {/* Replace 'Your Name' with your actual name */}
      <Text>Your Name</Text>
      <Text>{currentDate}</Text>

      {/* Button to go back to the 'Home' screen */}
      <Button
        title="Go back to Home"
        onPress={() => navigation.goBack()}
      />
    </View>
  );

  return (
    <MainLayout>
      {/* Your screen content */}
      {/* For example: Display app information and current date */}
    </MainLayout>
  );
}

export default AboutScreen;