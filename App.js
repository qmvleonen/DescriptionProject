import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import React, { useState } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) =>
      [...currentCourseGoals,
      { text: enteredGoalText, key: Math.random().toString() }]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.container}>
      </View>
      <View style={styles.headerContainer}>
        <Image
         source={require('./kain.png')} 
          style={styles.imageStyleLogo} 
        />
      </View>

      <View style={styles.ContainerLechon}>
        <Image
          source={require('./lechon.png')} //image of food//
          style={styles.imageStyle}
        />
        <Text style={styles.ContainerLechonText}>Lechon Kawali</Text> <Text style={styles.ContainerLechonPrice}>₱200</Text>

      </View>

      <View style={styles.container3rd}>
      </View>

      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsListContainer}>
        <FlatList data={courseGoals} renderItem={(itemData) => {
          return (
            <GoalItem text={itemData.item.text} />
          );
        }} />
        <View style={styles.footerContainer}>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#ECBC24',
    justifyContent: 'right',
    alignItems: 'center',
    width: 1000, // Adjust the width as needed
    height: 40,
    marginBottom: 10,
    justifyContent: 'space-around',
    resizeMode: 'contain', // Adjust the resizeMode as needed (e.g., 'cover', 'contain')

  },

  appContainer: {
    flex: 1,
    padding: 0,
    paddingHorizontal: 0,
    backgroundColor: 'white',
    justifyContent: 'space-around',
  },

  ContainerLechon: {
    width: 230, // Adjust the width as needed
    height: 300,
    backgroundColor: '#ECBC24',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'justified',
    },

  imageStyle: {
    width: 230, // Adjust the width as needed
    height: 230, // Adjust the height as needed
    resizeMode: 'contain', // Adjust the resizeMode as needed (e.g., 'cover', 'contain')
    flexDirection: 'column'

  },
  imageStyleLogo: {
    width: 60, // Adjust the width as needed
    height: 40,
    alignItems: 'center',
  },
  ContainerLechonText: {
    textAlign: 'justified',
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 5,
  },
  ContainerLechonPrice: {
    textAlign: 'justified',
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 5,
  },
  flexContainer: {
    length: '30%',
    backgroundColor: '#ECBC24',
    alignItems: 'column',
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    width: 230, // Adjust the width as needed
    height: 300,
  },
  container3rd: {
    backgroundColor: 'bisque',
    paddingHeight: 20,
    padding: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
    width: 230, // Adjust the width as needed
    height: 100,
  },

  footerContainer: {
    marginTop: 10,
    backgroundColor: '#ECBC24',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
});
