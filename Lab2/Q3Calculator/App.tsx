/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, { useState } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import styles from './style';
function App() {
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState<string | null>(null);
  const [firstValue, setFirstValue] = useState('');

  const handleNumberInput = (num: number) => {
    if (displayValue === '0') {
      setDisplayValue(num.toString());
    } else {
      setDisplayValue(displayValue + num);
    }
  };

  const handleOperatorInput = (op: string) => {
    setOperator(op);
    setFirstValue(displayValue);
    setDisplayValue('0');
  };

  const handleEqual = () => {
    const num1 = parseFloat(firstValue);
    const num2 = parseFloat(displayValue);
    let result: number | string = 0;

    if (operator === '+') result = num1 + num2;
    else if (operator === '-') {
      result = num1 - num2;
    } else if (operator === '*') {
      result = num1 * num2;
    } else if (operator === '/') {
      result = num2 !== 0 ? num1 / num2 : 'Error';
    }

    setDisplayValue(result.toString());
    setOperator(null);
    setFirstValue('');
  };

  const handleClear = () => {
    setDisplayValue('0');
    setOperator(null);
    setFirstValue('');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.display}>{displayValue}</Text>

      <View style={styles.row}>
        {[7, 8, 9].map(num => (
          <TouchableOpacity
            key={num}
            style={styles.button}
            onPress={() => handleNumberInput(num)}
          >
            <Text style={styles.buttonText}>{num}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity
          style={styles.buttonOperator}
          onPress={() => handleOperatorInput('/')}
        >
          <Text style={styles.operatorText}>÷</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        {[4, 5, 6].map(num => (
          <TouchableOpacity
            key={num}
            style={styles.button}
            onPress={() => handleNumberInput(num)}
          >
            <Text style={styles.buttonText}>{num}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity
          style={styles.buttonOperator}
          onPress={() => handleOperatorInput('*')}
        >
          <Text style={styles.operatorText}>x</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        {[1, 2, 3].map(num => (
          <TouchableOpacity
            key={num}
            style={styles.button}
            onPress={() => handleNumberInput(num)}
          >
            <Text style={styles.buttonText}>{num}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity
          style={styles.buttonOperator}
          onPress={() => handleOperatorInput('-')}
        >
          <Text style={styles.operatorText}>-</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity
          style={styles.zeroButton}
          onPress={() => handleNumberInput(0)}
        >
          <Text style={[styles.buttonText]}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.plusOperator}
          onPress={() => handleOperatorInput('+')}
        >
          <Text style={styles.plusOperatorText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.equalButton} onPress={handleEqual}>
          <Text style={styles.equalText}>=</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.clearButton} onPress={handleClear}>
        <Text style={styles.clearText}>C</Text>
      </TouchableOpacity>
    </View>
  );
}

export default App;
