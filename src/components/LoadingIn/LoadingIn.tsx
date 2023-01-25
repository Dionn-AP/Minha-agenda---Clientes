import { ActivityIndicator, View, StyleSheet } from "react-native";

interface LoadingInProps {
  color: string;
  size: number;
}

export default function LoadingIn({color, size}: LoadingInProps) {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color={color} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute'
  }
});