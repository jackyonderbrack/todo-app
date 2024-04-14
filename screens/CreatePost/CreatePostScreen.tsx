import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

const CreatePostScreen = ({ navigation, route }: any) => {
  const [postText, setPostText] = useState("");
  return (
    <View>
      <Text>Dodaj post:</Text>
      <TextInput
        multiline
        placeholder="Wpisz treść..."
        style={{ height: 200, padding: 10, backgroundColor: "white" }}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title="Zapisz"
        onPress={() => {
          navigation.navigate({
            name: "Home",
            params: { post: postText },
            merge: true,
          });
        }}
      />
    </View>
  );
};

export default CreatePostScreen;

const styles = StyleSheet.create({});
