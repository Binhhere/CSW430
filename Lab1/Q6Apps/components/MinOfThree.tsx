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
            <Text>Nhap a:</Text>
            <TextInput style = {{borderWidth : 1, padding: 8}} value={a} onChangeText={setA}></TextInput>
            <Text>Nhap b:</Text>
            <TextInput style = {{borderWidth : 1, padding: 8}} value={b} onChangeText={setB}></TextInput>
            <Text>Nhap c:</Text>
            <TextInput style = {{borderWidth : 1, padding: 8}} value={c} onChangeText={setC}></TextInput>
            <Button title="Find Min" onPress={onCalc}></Button>
            
            <Text>Min: {min !== null ? min.toString() : ''}</Text>
        </View>
    )
}
