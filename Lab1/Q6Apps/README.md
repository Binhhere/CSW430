# 🎯 Q6Apps — Props & State Practice

The original lab lists **3 numbered items** for Question 6, not 4. Item 1 actually bundles **two separate programs** (employee form + digit sum), and item 3's "a/b/c" are **not separate exercises** — they're the 3 steps of the Hailstone algorithm itself. This project implements everything as 4 components, switchable via tab buttons in `App.tsx`.

---

## 📋 Mapping to the Original Lab Text

| Lab item | Requirement | Component | Type |
|---|---|---|---|
| **1** | Employee info entry screen: full name, age, occupation, specialization + Update button showing a success message | `EmployeeForm.tsx` | Component, Props |
| **1** | Program to sum the first digit and the last digit of a number | `SumFirstLast.tsx` | Component, State |
| **2** | Program to find the minimum of three numbers | `MinOfThree.tsx` | Component, State |
| **3** | Program that displays the Hailstone sequence for `n > 0` — step **a.** even → divide by 2, step **b.** odd → ×3 + 1, step **c.** repeat until `n = 1` | `Hailstone.tsx` | Component, State |

---

## 📂 File Structure

```
Q6Apps/
├── App.tsx                       # Root: 4 tab buttons to switch between exercises
└── components/
    ├── EmployeeForm.tsx          # Lab item 1, part 1 — Props
    ├── SumFirstLast.tsx          # Lab item 1, part 2 — State
    ├── MinOfThree.tsx            # Lab item 2 — State
    └── Hailstone.tsx             # Lab item 3 (steps a/b/c) — State
```

---

## 📄 Source code

### `App.tsx`

`EmployeeForm` is passed real initial values via props from the parent, to actually demonstrate parent → child data flow (previously it was rendered with no props, which meant the "Props" part of the requirement wasn't visibly exercised at runtime).

```tsx
import { useState } from 'react';
import {
  View,
  Button,
  ScrollView,
} from 'react-native';
import EmployeeFrom from './components/EmployeeForm';
import SumFirstLast from './components/SumFirstLast';
import MinOfThree from './components/MinOfThree';
import Hailstone from './components/Hailstone';

function App() {
  const [tab, setTab] = useState(1);
  return (
    <ScrollView>
      <View>
        <Button title="Employee" onPress={() => setTab(1)}></Button>
        <Button title="SumFirstLast" onPress={() => setTab(2)}></Button>
        <Button title="MinOfThree" onPress={() => setTab(3)}></Button>
        <Button title="Hailstone" onPress={() => setTab(4)}></Button>
      </View>

      {tab === 1 && (
        <EmployeeFrom
          iniName="Nguyen Van A"
          iniAge="28"
          iniJob="Developer"
          iniSpec="Frontend Training"
        />
      )}
      {tab === 2 && <SumFirstLast />}
      {tab === 3 && <MinOfThree />}
      {tab === 4 && <Hailstone />}
    </ScrollView>
  );
}

export default App;
```

### Lab item 1, part 1 — `EmployeeForm.tsx` (Props)

Receives initial values via **props** (`iniName`, `iniAge`, `iniJob`, `iniSpec`) from `App.tsx`. The **Update** button displays a success `Alert` along with a preview of the entered data.

```tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

export default function EmployeeFrom({
  iniName = '',
  iniAge = '',
  iniJob = '',
  iniSpec = '',
}) {
  const [name, setName] = useState(iniName);
  const [age, setAge] = useState(iniAge);
  const [job, setJob] = useState(iniJob);
  const [spec, setSpec] = useState(iniSpec);

  return (
    <View style={{ marginTop: 15, gap: 8}}>
      <Text>Full name:</Text>
      <TextInput style={{borderWidth: 1, padding: 8}} value={name} onChangeText={setName}></TextInput>

      <Text>Age:</Text>
      <TextInput
        style={{borderWidth: 1, padding: 8}}
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      ></TextInput>

      <Text>Occupation:</Text>
      <TextInput style={{borderWidth: 1, padding: 8}} value={job} onChangeText={setJob}></TextInput>

      <Text>Specialization:</Text>
      <TextInput style={{borderWidth: 1, padding: 8}} value={spec} onChangeText={setSpec}></TextInput>

      <Button title="Update" onPress={() => Alert.alert('Success')}></Button>

      <View>
        <Text>Preview:</Text>
        <Text>{name}</Text>
        <Text>{age}</Text>
        <Text>{job}</Text>
        <Text>{spec}</Text>
      </View>
    </View>
  );
}
```

### Lab item 1, part 2 — `SumFirstLast.tsx` (State)

Input a number and calculate the sum of the first and last digits.

```tsx
import React, { useState } from "react";
import {View, Text, TextInput, Button} from "react-native";

export default function SumFirstLast() {
    const[num, setNum] = useState("");
    const[sum, setSum] = useState<number | null>(null);

    const onCalc = () => {
        const s = num;
        const first = parseInt(s[0]);
        const last = parseInt(s[s.length - 1]);
        setSum(first + last);
    };

    return (
        <View style={{ marginTop: 15, gap: 8}}>
            <Text>Enter a number:</Text>
            <TextInput style={{borderWidth: 1, padding: 8}} value={num} onChangeText={setNum} keyboardType="numeric" />
            
            <Button title="Calculate Sum" onPress={onCalc}></Button>

            <Text>Sum = {sum}</Text>
        </View>
    )
}
```

### Lab item 2 — `MinOfThree.tsx` (State)

```tsx
import React, { useState } from "react";
import {View, Text, TextInput, Button} from "react-native";

export default function MinOfThree() {
    const [a, setA] = useState("");
    const [b, setB] = useState("");
    const [c, setC] = useState("");
    const [min, setMin] = useState<Number| null>(null);

    const onCalc = () => {
        const n1 = Number(a);
        const n2 = Number(b);
        const n3 = Number(c);
        setMin(Math.min(n1,n2,n3));
    };

    return (
        <View style={{ marginTop: 15, gap: 8}}>
            <Text>Enter a:</Text>
            <TextInput style = {{borderWidth : 1, padding: 8}} value={a} onChangeText={setA}></TextInput>
            <Text>Enter b:</Text>
            <TextInput style = {{borderWidth : 1, padding: 8}} value={b} onChangeText={setB}></TextInput>
            <Text>Enter c:</Text>
            <TextInput style = {{borderWidth : 1, padding: 8}} value={c} onChangeText={setC}></TextInput>
            <Button title="Find Min" onPress={onCalc}></Button>
            
            <Text>Min: {min !== null ? min.toString() : ''}</Text>
        </View>
    )
}
```

### Lab item 3 — `Hailstone.tsx` (State)

For `n > 0`: step **a.** if even, divide by 2; step **b.** if odd, multiply by 3 and add 1; step **c.** repeat until `n = 1`. Includes input validation.

```tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

export default function Hailstone() {
  const [n, setN] = useState('');
  const [seq, setSeq] = useState<number[]>([]);

  const onGen = () => {
    let x = Number(n);
    if (!Number.isInteger(x) || x <= 0) {
      Alert.alert('Invalid, please enter a positive number');
      return;
    }
    const res = [];
    while (x != 1) {
      res.push(x);
      x = x % 2 === 0 ? x / 2 : x * 3 + 1;
    }
    res.push(1);
    setSeq(res);
  };

  return (
    <View style={{ marginTop: 15, gap: 8 }}>
      <Text>Enter n:</Text>
      <TextInput
        style={{ borderWidth: 1, padding: 8 }}
        value={n}
        onChangeText={setN}
        keyboardType="numeric"
      ></TextInput>

      <Button title="Generate" onPress={onGen}></Button>
      {seq.length > 0 && (
        <View>
          <Text>Length: {seq.length}</Text>
          <Text>Step: {seq.length - 1}</Text>
          <Text>{seq.join(' → ')}</Text>
        </View>
      )}
    </View>
  );
}
```

---

## ▶️ How to Run

```bash
cd Q6Apps
npx react-native start          # Terminal 1 — Metro
npx react-native run-android    # Terminal 2 — Build & install
```

Use the 4 buttons at the top of the screen (**Employee**, **SumFirstLast**, **MinOfThree**, **Hailstone**) to switch between exercises.

---

## 📸 Expected Results

- **Employee Form:** Opens pre-filled with sample data (passed via props from `App.tsx`), demonstrating props flowing parent → child; edit any field and press **Update** → displays "Success" Alert, Preview section shows the current values
- **Sum First & Last:** Enter a number, e.g., `4829` → result `Sum = 13` (4 + 9)
- **Min of Three:** Enter 3 numbers, e.g., `5, 2, 8` → result `Min: 2`
- **Hailstone:** Enter `n`, e.g., `6` → displays `Length`, `Step`, and sequence `6 → 3 → 10 → 5 → 16 → 8 → 4 → 2 → 1`; entering invalid numbers (0, negative, decimal) shows an error Alert
