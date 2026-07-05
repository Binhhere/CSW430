import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
//
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
