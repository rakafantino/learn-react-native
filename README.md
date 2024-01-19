# Todo App with React Native

This is a simple Todo App built using React Native. The app allows users to add notes to a list and remove them as needed.

## Features

- Add notes to a list
- Remove notes from the list
- Simple and easy-to-use interface

## Usage

To use the app, simply enter a note in the text input field and press the "Add Note" button. The note will be added to the list below. To remove a note, press on it and it will be removed from the list.

## Code Overview

The app uses the following main components:

- `Text`: to display text on the screen
- `TextInput`: to allow the user to enter text (for adding notes)
- `Button`: to add a note to the list
- `FlatList`: to display the list of notes
- `Pressable`: to handle the removal of a note from the list

The app uses the `useState` hook to manage the state of the app, including the current value of the text input and the list of notes.

The `handleOnChangeText` function is used to update the value of the text input as the user types. The `handleOnPressButton` function is used to add a new note to the list and clear the text input. The `handleRemoveItem` function is used to remove a note from the list.

The `FlatList` component is used to efficiently display the list of notes. The `renderItem` prop is used to specify how each item in the list should be displayed.

The `Pressable` component is used to handle the removal of a note from the list. When a note is pressed, the `handleRemoveItem` function is called with the index of the note to be removed.

## Conclusion

This is a simple Todo App built using React Native. The app allows users to add notes to a list and remove them as needed. The app uses the `useState` hook to manage the state of the app and the `Text`, `TextInput`, `Button`, `FlatList`, and `Pressable` components to display the app and handle user input.
