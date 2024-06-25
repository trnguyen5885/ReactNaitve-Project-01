
import { View, Text, StyleSheet, Pressable} from 'react-native'
import React from 'react'

function GoalItem(props) {
  return (
    
      <View style = {styles.goalItem}>
          <Pressable
            android_ripple={{color: '#210644'}}
            onPress={props.onDeleteGoal.bind(this, props.id)}
            style = {({pressed}) => pressed && styles.pressedItem }
            >
                    <Text style = {styles.goalText}>{props.text}</Text>
          </Pressable>
                
        </View>

    
    
  )
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc'
      },
      goalText: {
        color: 'white',
        padding: 10,
      },
      pressedItem: {
        opacity: 0.5
      }

});