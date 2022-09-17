import { StatusBar } from "expo-status-bar";
import { StyleSheet, FlatList, View } from "react-native";
import FeedScreen from "./src/screens/FeedScreen";
import posts from "./assets/data/posts.json";

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
      data={posts}
      renderItem={({item}) => < Feedpost /> }/>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent:"center",
    
  }
})
