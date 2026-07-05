# 🧪 Lab 1 — Mobile Programming

The first lab for **CSW430 - Mobile Programming**, getting familiar with Git/GitHub, setting up the development environment, and building React Native applications through 2 approaches: **Expo CLI** and **React Native CLI**.

---

## 📋 Table of Contents

1. [Github Setup](#1-️-github-setup)
2. [Development Environment](#2--development-environment)
3. [Expo CLI App](#3--expo-cli-app)
4. [React Native CLI App](#4--react-native-cli-app)
5. [Publishing](#5--publishing)
6. [Props & State Practice](#6--props--state-practice)

---

## 1. 🐙 Github Setup

- Create a GitHub account and new repository
- Install **GitHub Desktop** for visual commit/push management
- Clone the repository to your machine and link it with the local project folder

---

## 2. ⚙️ Development Environment

The environment is set up in 2 parallel approaches:

| Approach | Reference |
|---|---|
| **Expo CLI** | [docs.expo.dev/get-started/installation](https://docs.expo.dev/get-started/installation/) |
| **React Native CLI** | [reactnative.dev/docs/environment-setup](https://reactnative.dev/docs/environment-setup?guide=native) |

---

## 3. 📦 Expo CLI App — `Q3Expo1`

A button press counter application, demonstrating **React Hooks** (`useState`).

```jsx
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Text, View } from 'react-native';

export default () => {
  const [pressCount, setPressCount] = useState(0);
  return (
    <View style={{alignItems: "center", marginTop: 20}}>
      <Text>You've pressed the button: {pressCount} time(s)</Text>
      <Button title = "Press me" onPress={() => setPressCount(pressCount + 1)}/>
    </View>
  );
};
```

### ▶️ Run the App

```bash
npx expo start
```

| Key | Function |
|---|---|
| `a` | Open on Android Emulator |
| `w` | Open on Web Browser |
| `r` | Reload app |

📱 **Alternative way:** Run directly on [snack.expo.dev](https://snack.expo.dev/) — see results on Web / Android / iOS instantly in your browser, no installation needed.

---

## 4. 🔧 React Native CLI App — `Q4ReacNative`

A square list application, demonstrating **Component, Props, Alert**.

### File Structure

```
Q4ReacNative/
├── style.js       # Shared StyleSheet
├── Data.js        # Sample data
├── Square.js       # Square component, accepts props `text`
└── App.tsx         # Root component, renders Square list
```

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

### ▶️ Run the App

Need **2 terminals** running in parallel:

```bash
# Terminal 1 — Metro Bundler
npx react-native start

# Terminal 2 — Build & install on Android Emulator
npx react-native run-android
```

> 💡 If the app reports an error *"Unable to load script"*, run: `adb reverse tcp:8081 tcp:8081` then reload the app.

### 📸 Results

A list of colored squares. Pressing a square displays an Alert notification with the corresponding square name.

---

## 5. 📤 Publishing

Build and sign the app for release on **Google Play**.

### Step 1 — Create Keystore

```bash
keytool -genkeypair -v -storetype PKCS12 -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
```

### Step 2 — Configure Gradle

Add to `android/gradle.properties`:
```properties
MYAPP_UPLOAD_STORE_FILE=my-upload-key.keystore
MYAPP_UPLOAD_KEY_ALIAS=my-key-alias
MYAPP_UPLOAD_STORE_PASSWORD=*****
MYAPP_UPLOAD_KEY_PASSWORD=*****
```

### Step 3 — Build AAB (Google Play) & APK

```bash
# AAB — for submission to Google Play
npx react-native build-android --mode=release

# APK — install directly on device
./gradlew assembleRelease
```

| File | Output Path |
|---|---|
| **AAB** | `android/app/build/outputs/bundle/release` |
| **APK** | `android/app/build/outputs/apk/release` |

---

## 6. 🎯 Props & State Practice — `Q6Apps`

The original lab lists **3 numbered items** for this question. Item 1 actually bundles **two separate programs** together (employee form + digit sum), and item 3's a/b/c are **not separate exercises** — they describe the 3 steps of the Hailstone algorithm itself. This project implements all of it as 4 components, switchable via tab buttons in `App.tsx`.

### Mapping to the original lab text

| Lab item | Requirement | Component |
|---|---|---|
| **1** (part 1) | Employee info entry screen: full name, age, occupation, specialization + Update button showing a success message *(Component, Props)* | `EmployeeForm.tsx` |
| **1** (part 2) | Program to sum the first digit and the last digit of a number *(Component, State)* | `SumFirstLast.tsx` |
| **2** | Program to find the minimum of three numbers *(Component, State)* | `MinOfThree.tsx` |
| **3** | Program that displays the Hailstone sequence for `n > 0`, where step **a.** even → divide by 2, step **b.** odd → ×3 + 1, step **c.** repeat until `n = 1` *(Component, State)* | `Hailstone.tsx` |

### File Structure

```
Q6Apps/
├── App.tsx                       # Root: 4 tab buttons to switch between exercises
└── components/
    ├── EmployeeForm.tsx          # Lab item 1, part 1 — Props
    ├── SumFirstLast.tsx          # Lab item 1, part 2 — State
    ├── MinOfThree.tsx            # Lab item 2 — State
    └── Hailstone.tsx             # Lab item 3 (steps a/b/c) — State
```

- [x] **Employee Info Form** (`EmployeeForm.tsx`) — Form to input name, age, occupation, specialization; receives initial values via **props** (`iniName`, `iniAge`, `iniJob`, `iniSpec`), passed in from `App.tsx` to demonstrate parent → child data flow; Update button shows an `Alert` success message
- [x] **Sum First & Last Digit** (`SumFirstLast.tsx`) — Input a number, calculate sum of first and last digits using `useState` *(Component, State)*
- [x] **Minimum of Three Numbers** (`MinOfThree.tsx`) — Input 3 numbers a, b, c; use `Math.min` and `useState` to find and display the minimum *(Component & State)*
- [x] **Hailstone Sequence** (`Hailstone.tsx`) — For `n > 0`: if even divide by 2, if odd multiply by 3 and add 1, repeat until `n = 1`; displays the full sequence *(Component & State)*

### ▶️ Run the App

```bash
cd Q6Apps
npx react-native start   # Terminal 1 — Metro
npx react-native run-android   # Terminal 2 — Build & install
```

---

## 📌 Notes

- All source code committed via **GitHub Desktop / Git CLI**
- Repository is set to public per assignment submission requirements on Moodle
