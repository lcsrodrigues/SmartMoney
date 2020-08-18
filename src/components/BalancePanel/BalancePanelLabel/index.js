import React,{useState, useEffect} from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import {totalBalance} from '../../../services/Entries'

const BalancePanelLabel = ({goToReport}) => {

    const [currentBalance, setCurrentBalance] = useState(0);

    useEffect(()=>{
        const loadTotalBalance = async () => {
          const total = await totalBalance()
          setCurrentBalance(total)
        }
  
        loadTotalBalance()
  
      },[])

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.wrap} onPress={goToReport}>
                <Text style={styles.label}>Saldo Atual</Text>
                <Text style={styles.value}>R$ {currentBalance}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        marginVertical:10,
        
    },
    wrap:{
        alignItems:"center",
        marginVertical:15
    },
    label:{
        fontSize:14,
        color:"#fff"
    },
    value:{
        fontSize:36,
        color:"#fff",
        marginTop:10
    }
})

export default BalancePanelLabel;
