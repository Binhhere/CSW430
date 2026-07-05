import React, { useState } from "react";
import {View, Text, TextInput, Button} from "react-native";
// 
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