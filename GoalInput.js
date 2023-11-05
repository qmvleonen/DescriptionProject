import React, { useState } from 'react';
import { Pressable, StyleSheet, View, TextInput, Text } from 'react-native';

function GoalInput(props) {
  const [enteredGoalText, setEnteredText] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredText('');
  }

  return (      
    <View style={styles.container}>
        <View style={styles.Containerff}>
        <Text style={styles.ContainerffText}>Fellow Foodies Say</Text>
          </View>
      <View style={styles.inputContainerLine}>
        <TextInput
          style={styles.textInput}
          placeholder="Write a comment"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <Pressable onPressIn={addGoalHandler} 
          unstable_pressDelay="100" 
          style={styles.click}>

          {({ pressed }) => (
            <Text style={styles.text}>
            {pressed ? 'Comment Added!' : 'Add Comment'}</Text>
          )}
        </Pressable>
      </View>
      <View style={styles.containerfooter}>
      </View>
    </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'column',
    backgroundColor: '#ECBC24',

  },
  Containerff: {
    flex: 0, 
    flexDirection: 'column',
    alignItems: 'justified',
    borderBottomWidth: 1,
    borderColor: '#b8860bb',
    paddingBottom: 53,
    padding: 10,
  },
  ContainerffText: {
    textAlign: 'justified',
    color: 'white',
    fontWeight: 'bold',
  },
  textInput: {
    marginBottom: 5,
    margintop: 5,
    width: '70%',
    borderColor: '#black',
    borderWidth: 1, //kapal to ng border bobo mo mark//
    padding: 20,
    marginLeft: 7,
    color: 'black',
    borderRadius: 10,
    fontSize: 12,
  },

  inputContainerLine: {
    flex: 0, 
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ECBC24',
    paddingBottom: 50,
    padding: 10,
  },

  text: {
    fontSize: 12,
    color: 'black',
  },

  click: {
    backgroundColor: '#ECBC24',
    alignments: 'center',
    flexDirection: 'column',
    borderRadius: 5,
    padding: 10,
    marginLeft: 5,
    borderWidth: 1, 
  },
});




export default GoalInput;
