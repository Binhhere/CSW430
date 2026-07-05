# 🔧 Q4ReacNative — React Native CLI App

An application built with **React Native CLI** (without using Expo), demonstrating **Component, Props**, and how to separate style/data into individual files.

---

## 🎯 Objectives

- Get familiar with the project creation process using `react-native init`
- Understand how to pass data via **Props** between parent and child components
- Style components using `StyleSheet`
- Build & run app on Android Emulator via Gradle

---

## 📂 File Structure

```
Q4ReacNative/
├── style.js       # Shared StyleSheet for the entire app
├── Data.js        # Sample data array for rendering the list
├── Square.js       # Child component — accepts props `text`, displays a square
└── App.tsx         # Root component — renders list of Squares from Data
```

---

## 📄 Source code

### `style.js`
```js
import { StyleSheet } from "react-native";
export default styles = StyleSheet.create({
    container: { backgroundColor: "#fff" },
    box: {
        width: 100,
        height: 100,
        justifyContent: "center",
        alignItems: "center",
        margin: 20,
    },
});
```

### `Data.js`
```js
export default data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
```

### `Square.js`
```jsx
import React from 'react';
import { View, Text, Alert, Button } from 'react-native';
import styles from './style';
function ClickOnTheSquare(value) {
  Alert.alert(value);
}
export default Square = ({ text }) => (
  <View style={[styles.box, { backgroundColor: '#7ce0f9' }]}>
    <Text>{text}</Text>
    <Button title="CLick" onPress={() => ClickOnTheSquare(text)}></Button>
  </View>
);
```

### `App.tsx`
```tsx
import React from 'react';
import { ScrollView } from 'react-native';
import styles from './style';
import data from './Data';
import Square from './Square';

function App() {
  return (
    <ScrollView style={styles.container}>
      {data.map((item, index) => (
        <Square key={item} text={`Square ${index + 1}`} />
      ))}
    </ScrollView>
  );
}

export default App;
```

---

## ▶️ How to Run

Need **2 terminals** running in parallel:

```bash
# Terminal 1 — start Metro Bundler
npx react-native start

# Terminal 2 — build & install on Android Emulator
npx react-native run-android
```

### ⚠️ Common Error Fixes

| Error | Solution |
|---|---|
| `SDK location not found` | Create `android/local.properties` file with line `sdk.dir=<SDK path>` |
| `'adb' is not recognized` | Add `platform-tools` from Android SDK to the PATH environment variable |
| `Unable to load script` on emulator | Run `adb reverse tcp:8081 tcp:8081` then reload the app (press `R`) |

---

## 📸 Expected Results

A list of light blue squares (`Square 1`, `Square 2`, `Square 3`...) displayed in a scrollable vertical view (`ScrollView`). Pressing any square will display an **Alert** popup with the corresponding square name.
