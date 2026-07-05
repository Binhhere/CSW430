import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

export default function Hailstone() {
  const [n, setN] = useState('');
  const [seq, setSeq] = useState<number[]>([]);
//
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
