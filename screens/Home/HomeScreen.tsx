import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";

const HomeScreen = ({ navigation, route }: any) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details", { itemId: 86, otherParam: "anything you want here" })}
      />
      <Button
        title="+ Dodaj post"
        onPress={() => navigation.navigate("CreatePost")}
      />
      <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
      <Button
        title="Konto"
        onPress={() =>
          navigation.navigate("Settings", {
            params: { userId: "jane" },
          })
        }
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
