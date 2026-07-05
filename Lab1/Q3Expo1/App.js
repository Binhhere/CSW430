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
