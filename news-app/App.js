/* import { StatusBar } from 'expo-status-bar'; */
import { StatusBar } from 'expo-status-bar';
import { Text, Alert, View, FlatList,ActivityIndicator } from 'react-native';
import { Post } from './components/Post';
import axios from 'axios';
import React from 'react';




export default function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  const [items, setItems] = React.useState();

  const fetchPosts = () => {
    setIsLoading(true);
    axios.get('https://6419d5a5c152063412cd4469.mockapi.io/article')
    .then(({data}) =>{
      setItems(data)
    }).catch(err =>{
      console.log(err);
      Alert.alert('Ошибка', 'Не удалось получить статьи');
    }).finally( () => {
      setIsLoading(false);
    })
  }


  React.useEffect( fetchPosts, [])

  if (isLoading) {
    return(
    <View style = {{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <ActivityIndicator size= 'large'/>
      <Text style = {{marginTop: 15}}>Загрузка...</Text>
    </View>
    )
  }

  return (
    <View>
      <FlatList
      data={items}
      renderItem={({item}) => <Post title = {item.title}
      imageUrl = {item.imageUrl}
      createdDate = {item.createdAt}/>}
      />
      <StatusBar theme = "auto" />
    </View>
  );
}

