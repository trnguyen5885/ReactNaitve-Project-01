import { useState } from 'react';
import { View, Text, StyleSheet, TextInput,Button, Modal, Image } from 'react-native'
import React from 'react'

const GoalInput = (props) => {

    const [goalsText, setGoalsText] = useState('');

    function inputGoalHandler(enteredText) {
        setGoalsText(enteredText);
    }

    function addGoalHandler() {
        props.onAddGoal(goalsText);
        setGoalsText('');
    }

  return (

      <Modal visible = {props.visible} animationType='slide'>
          <View style = {styles.inputContainer}>

            <Image style = {styles.img} source={require('../assets/img/goal.png')} />

            <TextInput style = {styles.textInput} 
            placeholder='Your goals' 
            onChangeText={inputGoalHandler}
            value={goalsText}
            />
            <View style = {styles.buttonContainer}>
              <View style = {styles.buttonItem}>
                <Button
                title='Add goal'
                onPress={addGoalHandler}
                color='#b180f0'
                />
                
              </View>

              <View style = {styles.buttonItem}>
                <Button 
                title='Cancel'
                onPress={props.onCancel} 
                color='#f31282' />
              </View>

            </View>
            
          </View>
        </Modal>

      


    
  )
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6b',
      },
      textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120438',
        borderRadius: 5,
        width: '100%',
        padding: 6,
        marginBottom: 10,
      },
      buttonContainer: {
        flexDirection: 'row'
      }, 
      buttonItem: {
        width: 100,
        margin: 8,
      },
      img: {
        width: 150,
        height: 150,
        margin: 24,
      }
})