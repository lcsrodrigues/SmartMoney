import React,{useState, useEffect} from 'react'
import { View, Button, StyleSheet,TouchableOpacity, Text } from 'react-native'

import BalancePanelLabel from '../BalancePanel/BalancePanelLabel'
import BalancePanelChart from '../BalancePanel/BalancePanelChart'

import Icon from 'react-native-vector-icons/MaterialIcons'

const BalancePanel = ({goToNewEntry, goToReport}) => {

    return (
        <View style={styles.container}>
            <View style={styles.wrap}>
                <BalancePanelLabel goToReport={goToReport}/>
                <BalancePanelChart />
            </View>
            <TouchableOpacity style={styles.btnAdd} onPress={goToNewEntry}>
                <Icon name="add" size={30} color={"#fff"} style={{textAlign:"center"}}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
    },
    wrap:{
        backgroundColor:"#2980b9",
    },
    btnAdd:{
        marginTop:-25,
        marginRight:10,
        borderRadius:100,
        width:50,
        height:50,
        alignContent:"center",
        justifyContent:"center",
        backgroundColor:"#2ecc71",
        alignSelf:'flex-end',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 15,
    }
})

export default BalancePanel;