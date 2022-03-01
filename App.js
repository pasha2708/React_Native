import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import { AddTodo } from './src/AddTodo';
import { NavBar } from './src/NavBar'
import { Todo } from './src/Todo';

export default function App() {
  const [todos, setTodos] = React.useState([])

  const addTodo = (title) => {
    const newTodo = {
      id: Date.now().toString(),
      title: title
    }
    setTodos(prev => [...prev, newTodo])
  }

  const removeTodo = id => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  return (
    <View>
      <NavBar title='ToDo App' />
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo} />
        <FlatList 
          data={todos}
          renderItem={({item}) => (
            <Todo todo={item} onRemove={removeTodo} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20
  }
});
