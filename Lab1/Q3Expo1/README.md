# 📦 Q3Expo1 — Expo CLI App

The first application built with **Expo CLI**, demonstrating how to use the **React Hook `useState`** to manage component state.

---

## 🎯 Objectives

- Get familiar with creating Expo projects
- Understand how `useState` updates the UI when state changes
- Test the application across multiple environments: Metro Bundler, Expo Snack

---

## 📄 Source code — `App.js`

```jsx
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, Text, View } from "react-native";

export default () => {
  const [pressCount, setPressCount] = useState(0);
  return (
    <View style={{ alignItems: "center", marginTop: 20 }}>
      <Text>You've pressed the button: {pressCount} time(s)</Text>
      <Button title="Press me" onPress={() => setPressCount(pressCount + 1)} />
    </View>
  );
};
```

---

## ▶️ How to Run

```bash
cd Q3Expo1
npm install
npx expo start
```

Then choose the platform you want to view:

| Key | Platform         |
| --- | ---------------- |
| `a` | Android Emulator |
| `w` | Web Browser      |
| `r` | Reload app       |

### Quick Run Without Installation

Paste the code into **[snack.expo.dev](https://snack.expo.dev/)** to see results instantly on Web / Android / iOS without needing to set up a local environment.

---

## 📸 Expected Result

Screen displays the text `You've pressed the button: 0 time(s)` and a **Press me** button. Each time you press the button, the counter increases by 1.
