import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

const DetailsScreen = ({ navigation }: any) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>DetailsScreen</Text>
      <Button
        title="Home"
        onPress={() => {
          navigation.navigate("Home");
        }}
      />
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({});
