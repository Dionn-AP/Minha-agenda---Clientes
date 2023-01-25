import { ActivityIndicator, View, StyleSheet } from "react-native";

export default function LoadingIn() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={40} color="#EDF2FA" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute'
  }
});