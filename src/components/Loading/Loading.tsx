import { ActivityIndicator, View, StyleSheet } from "react-native";

export default function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={80} color="#7B5BF2"/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#09184D'
    }
});