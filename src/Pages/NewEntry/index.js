import React, {useState} from 'react'
import { View, StyleSheet } from 'react-native'

import BalanceLabel from '../../components/BalanceLabel'
import NewEntryForm from '../../components/NewEntryForm'

import {saveEntry, deleteLancamento} from '../../services/Entries'

const NewEntry = ({navigation}) => {

    const entry = navigation.getParam('entry',{
        id:null,
        amount:0,
        entryAt: new Date(),
        isInit:false,
    })

    const goToMain = () => { navigation.navigate("Main")}

    return (
        <View style={styles.container}>
            <BalanceLabel />
            <NewEntryForm goToMain={goToMain} saveEntry={saveEntry} entry={entry} deleteLancamento={deleteLancamento} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#2c3e50",
    }
})

export default NewEntry;