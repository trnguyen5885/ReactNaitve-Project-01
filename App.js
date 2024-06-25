import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [modalIsVisible, setModalIsVisible] = useState(false);

  
  
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHander() {
    setModalIsVisible(true);
  }

  function endAddGoalHander() {
    setModalIsVisible(false)
  }

  



  

  function addGoalHandler(goalsText) {
    setCourseGoals((currentCourseGoals) => [...currentCourseGoals, {text: goalsText, id: Math.random().toString()}]);
    endAddGoalHander();
  }


  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id)
    })
  }

  function resetGoalHandler() {
    setCourseGoals([]);
  }


    


  return (
    <>
    <StatusBar style='light' />
    <View style={styles.container}>

      <Button title='Add new goal' color='#b180f0' onPress={startAddGoalHander} />
      <View style = {{marginTop: 10}}>
        <Button title='Reset goal' color='#b180f0' onPress={resetGoalHandler} />
      </View>
      

      <GoalInput onAddGoal = {addGoalHandler} visible = {modalIsVisible} onCancel = {endAddGoalHander} />

      

      <View style = {styles.goalsContainer}>
        <FlatList 
          data={courseGoals}
          renderItem={(itemData) =>
            <GoalItem text = {itemData.item.text} onDeleteGoal = {deleteGoalHandler} id = {itemData.item.id}/>
           }
           keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical = {false} 
        />
        
      </View>
      
     
      
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5
  }, 
  

  
});
