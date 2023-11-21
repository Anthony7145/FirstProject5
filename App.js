import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

const Stack = createStackNavigator();

function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
            <Stack.Screen name="ToDoList" component={ToDoList} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ToDoList />
            <ToDoForm />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});



export default App;