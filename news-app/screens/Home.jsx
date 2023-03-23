import { StatusBar,
    Text, Alert,
    View, FlatList,
    ActivityIndicator,
    RefreshControl,
    TouchableOpacity } from 'react-native';
import { Post } from '../components/Post';
import axios from 'axios';
import React from 'react';




export const Home = () => {
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
 <Text style = {{marginTop: 15}}> Загрузка... </Text>
</View>
)
}

return (
<View>
 <StatusBar theme = "auto" />
 <FlatList
   refreshControl={<RefreshControl refreshing={isLoading} onRefresh = {fetchPosts} />}
   data={items}
   renderItem={({item}) =>
   <TouchableOpacity>
     <Post title = {item.title}
       imageUrl = {item.imageUrl}
       createdDate = {item.createdAt}/>
   </TouchableOpacity>
   }
 />
</View>
);
}

