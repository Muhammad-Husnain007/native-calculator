import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

const ButtonBtn = ({title}) => {
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
          darkTheme ? dark: light 
        )
      }
      
    return (
    <TouchableOpacity style={{padding: 10, borderRadius: 10, elevation: 2,
    backgroundColor: getColor(colors.light1, colors.dark2), height: 65, width: 65, marginLeft: 17,
    marginTop: 10, display: 'flex', justifyContent: 'center', alignItems: 'center'
    }}>
     <Text style={{fontSize: 30, color: 'black',  }}>{title}</Text>
    </TouchableOpacity>

)}

export default ButtonBtn
