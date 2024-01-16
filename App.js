import { View, Text, StyleSheet, TextInput, Button, ScrollView, FlatList, Pressable } from "react-native";
import { useState } from "react";
// View -> container that will wrap multiple components together basically it's like a div
// Text -> in react native text can not be displayed if it not in Text component
// textInput -> input component
// button -> its just button

export default function App() {
  const [value, setValue] = useState("");
  const [listOfNotes, setListOfNotes] = useState([]);
  function handleOnChangeText(getEnteredText) {
    setValue(getEnteredText);
  }

  function handleOnPressButton() {
    setListOfNotes((currentNotes) => [...currentNotes, value]);
    setValue("");
  }

  function handleRemoveItem(itemIndex) {
    let copyListOfNotes = [...listOfNotes];
    copyListOfNotes = copyListOfNotes.filter((_, index) => itemIndex !== index);
    setListOfNotes(copyListOfNotes);
  }
  return (
    <View
      style={{
        padding: 60,
        paddingHorizontal: 15,
        flex: 1,
      }}
    >
      <Text
        style={{
          textAlign: "center",
          fontSize: 30,
          fontWeight: "bold",
        }}
      >
        Todo App 📝
      </Text>
      {/* to render input along with button  */}
      <View style={styles.inputContainer}>
        <TextInput onChangeText={handleOnChangeText} style={styles.input} placeholder="Add Your Note Here" value={value} />
        <Button onPress={handleOnPressButton} color={"#000"} title="Add Note" />
      </View>
      {/* to render all the notes that we created  */}
      <View style={styles.listContainer}>
        <Text
          style={{
            marginBottom: 20,
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Show List Here!
        </Text>
        <FlatList
          data={listOfNotes}
          renderItem={(notes) => (
            <Pressable onPress={() => handleRemoveItem(notes.index)}>
              <Text style={styles.listItems}>{notes.item}</Text>
            </Pressable>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    borderWidth: 1,
    borderColor: "#dddd",
    flex: 1,
    paddingHorizontal: 5,
    paddingVertical: 4,
  },
  listContainer: {
    paddingTop: 30,
    flex: 3,
  },
  listItems: {
    fontWeight: "bold",
    textAlign: "center",
    borderRadius: 30,
    borderColor: "#000",
    backgroundColor: "#ddd",
    paddingVertical: 20,
    marginBottom: 15,
  },
});
