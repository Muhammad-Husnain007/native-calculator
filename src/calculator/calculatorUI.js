import React, { useState } from 'react'
import { Text, StyleSheet, View, Switch, TouchableOpacity } from 'react-native'

const CalculatorUI = () => {
  const [darkTheme, setDarkTheme] = useState(false)
  const [result, setResult] = useState("abbsb");

  const calculateValue = (title) => {
    if (title === 'C') {
      setResult('');
    } else if (title === 'Del') {
      setResult(result.substring(0, result.length - 1));
    } else if (title === '=') {
      try {
        const answer = Number(eval(result).toFixed(4)).toString();
        setResult(answer);
      } catch (error) {
        setResult('Error');
      }
    } else {
      setResult(result + title);
    }
  };

  const colors = {
    // lightGray: 'lightgray',
    // gray: 'gray',
    dark: '#22252D',
    dark1: '#292B36',
    dark2: '#272B33',
    light: '#FFF',
    light1: '#F1F1F1',
    light2: '#F7F7F7',

  }
  const getColor = (light, dark) => {
    return (
      darkTheme ? dark : light
    )
  }
  const ButtonBtn = ({ title }) => (
    <TouchableOpacity
      onPress={() => calculateValue(title)}
      style={{
        padding: 10, borderRadius: 10, elevation: 2,
        backgroundColor: getColor(colors.light1, colors.dark2), height: 67, width: 67, marginLeft: 15,
        marginTop: 10, display: 'flex', justifyContent: 'center', alignItems: 'center'
      }}>
      <Text style={{ fontSize: 30, color: 'black', }}>{title}</Text>
    </TouchableOpacity>
  )
  return (
    <View style={{
      width: "100%",
      height: "100%",
      paddingTop: 20,
      backgroundColor: getColor(colors.light, colors.dark),

    }}>
      <Switch value={darkTheme} onValueChange={() => setDarkTheme(!darkTheme)}
        thumbColor={getColor(colors.dark, colors.light)}
        trackColor={{ true: colors.light2, false: colors.dark2 }}
        style={{ position: 'relative', left: -20 }}
      />
      <Text style={{ fontSize: 28, position: 'relative', top: 200, left: 20 }}>{result}</Text>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 230, marginLeft: 8 }}>
        <ButtonBtn title="C" type='top4' />
        <ButtonBtn title="Del" type='top4' />
        <ButtonBtn title="%" type='top4' />
        <ButtonBtn title="/" type='top4' />
        <ButtonBtn title="1" type='number' />
        <ButtonBtn title="2" type='number' />
        <ButtonBtn title="3" type='number' />
        <ButtonBtn title="-" type='right4' />
        <ButtonBtn title="4" type='number' />
        <ButtonBtn title="5" type='number' />
        <ButtonBtn title="6" type='number' />
        <ButtonBtn title="*" type='right4' />
        <ButtonBtn title="7" type='number' />
        <ButtonBtn title="8" type='number' />
        <ButtonBtn title="9" type='number' />
        <ButtonBtn title="+" type='right4' />
        <ButtonBtn title="0" type='number' />
        <ButtonBtn title="00" type='number' />
        <ButtonBtn title="." type='number' />
        <ButtonBtn title="=" type='right4' />
      </View>
    </View>

  )
}

export default CalculatorUI