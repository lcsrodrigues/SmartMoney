import React, { useState, useEffect } from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'

import {TextInputMask} from 'react-native-masked-text'

const NewEntryInput = ({value, onChangeValue}) => {

    const [debit, setDebit] = useState()
    const [debitPrefix, setDebitPrefix] = useState()

    useEffect(() =>{
        if(value < 0)
        {
            setDebitPrefix("-");
            setDebit(-1);
        }
        else{
            setDebitPrefix("");
            setDebit(1);
        }
    },[])

    const onChangeDebitCredit = () => {
        if(debit < 0)
        {
            setDebit(1);
            setDebitPrefix('')
        }else{
            setDebit(-1)
            setDebitPrefix('-')
        }

        onChangeValue(value * -1)
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.debitButton} onPress={onChangeDebitCredit}>
                <Text style={styles.debitPrefix}>{debitPrefix}</Text>
                <Text style={styles.debitButtonText}>R$</Text>
            </TouchableOpacity>
            <TextInputMask
            type={'money'}
            style={styles.input}
            options={{
                precision:2,
                separator:',',
                delimiter:'.',
                unit:'',
                suffixUnit:''
            }}
            value={value}
            includeRawValueInChangeText={true}
            onChangeText={(maskedValue, rawValue)=>{
                onChangeValue(rawValue * debit)
            }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        backgroundColor:"#34495e",
        marginVertical:20,
        borderRadius:10,
        width:250,
        paddingLeft:10
    },
    debitButton:{
        flexDirection:"row",
        alignItems:"center",
        textAlign:"center",
        paddingHorizontal:5
    },
    debitPrefix:{
        fontSize:18,
        color:"#fff",
        minWidth:8,
    },
    debitButtonText:{
        fontSize:18,
        color:"#fff",
    },
    input:{
        fontSize:18,
        color:"#fff",
        height:70,
        paddingVertical:10,
        paddingHorizontal:18,
        flex:1,
        textAlign:"right",
    }
})

export default NewEntryInput
