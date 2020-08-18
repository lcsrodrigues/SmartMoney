import React,{useEffect, useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'

import {totalBalance} from '../../services/Entries'

const BalanceLabel = () => {

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
            <Text style={styles.label}>Saldo Atual</Text>
            <Text style={styles.value}>R$ {currentBalance}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:0.2,
        alignItems:"center",
        marginVertical:20,
        height:40,
    },
    label:{
        fontSize:18,
        color:"#fff"
    },
    value:{
        fontSize:30,
        color:"#fff"
    }
})

export default BalanceLabel;