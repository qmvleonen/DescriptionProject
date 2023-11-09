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
         source={require('./Icon.png')} 
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
    alignItems: 'flex-end',
    width: "100%", // Adjust the width as needed
    height: "5%",
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
    borderRadius: 10,
  },

  ContainerLechon: {
    width: 230, // Adjust the width as needed
    height: 300,
    backgroundColor: '#ECBC24',
    borderTopLeftRadius: 10,
    alignSelf: 'center',
    borderTopRightRadius: 10,
    },

  imageStyle: {
    width: 230, 
    height: 230, 
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,

  },
  imageStyleLogo: {
    width: 60, // Adjust the width as needed
    height: 30,
    marginLeft: 20,
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
    alignSelf: 'center',
    marginLeft: 10,
    marginRight: 10,
    width: 230, // Adjust the width as needed
    height: 100,
  },

  container3rd: {
    marginBottom: 10,
    backgroundColor: 'bisque',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    width: 230, // Adjust the width as needed
    height: 100,
    alignSelf: 'center',

  },

  footerContainer: { 
    marginTop: 10,
    backgroundColor: '#ECBC24',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    width: "100%", // Adjust the width as needed
    height: "5%",
  },
});
