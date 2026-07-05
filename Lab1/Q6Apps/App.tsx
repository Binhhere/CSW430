/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

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

export default App; //
