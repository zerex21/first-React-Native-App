/* import { StatusBar } from 'expo-status-bar'; */
import { StatusBar } from 'expo-status-bar';
import { Text, Alert, View } from 'react-native';
import { Post } from './components/Post';
import axios from 'axios';
import React from 'react';




export default function App() {

  const [items, setItems] = React.useState();

  React.useEffect( () =>{
  axios.get('https://6419d5a5c152063412cd4469.mockapi.io/article')
  .then(({data}) =>{
    setItems(data)
  }).catch(err =>{
    console.log(err);
    Alert.alert('Ошибка', 'Не удалось получить статьи');
  })
}, [])

  return (
    <View>
      {
        items.map( (obj) => (
          <Post title = {obj.title}
          imageUrl = {obj.imageUrl}
          createdDate = {obj.createAt}/>
        ))
      }

      <StatusBar theme = "auto"/>
    </View>
  );
}

