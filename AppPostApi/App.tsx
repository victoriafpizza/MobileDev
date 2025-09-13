import { StatusBar } from 'expo-status-bar';
// Import React {useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import { ActivityIndicator } from 'react-native/types_generated/index';
export default function App() {

type Post = {
  title: string;
  body: string;
}

//O componente é o ponto de entrada da aplicação 
const App = () => {
  const [postMessage, setPost] = useState<Post | null>(null);
}

//UseEffect é um hook que permite executar o efeito colateral em um componetne
//o hook recebe o dado e realiza alguma função com ele.
useEffect (() => { //problema do react
  axios.get('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => setPost (response.data)); //agora o type script entende o tipo que ta retornando

}, []);

//renderiza um indicador de carregamento enquanto os dados estão sendo buscados 
if(!post){
  return<ActivityIndicator size={"large" color="#ff66cc"}/>;
}

//renderiza os dados do post
return(
  <View style={styles.container}>
    <Text style={styles.title}>{post.title}</Text>
    <Text style={styles.body}>{post.body}</Text>
  </View>
)

//define os estilos que iremos utilizar no aplicativo
const Styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center';
    justifyContent: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  body: {
    fontSize: 18
  },

),
})


  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
