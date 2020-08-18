import React, { useEffect, useState } from 'react';
import {View, StyleSheet} from 'react-native';

import BalancePanel from '../../components/BalancePanel'
import EntrySumary from '../../components/EntrySumary'
import EntryList from '../../components/EntryList'

const Main = ({navigation}) => {

    const goToNewEntry = () => { navigation.navigate("NewEntry")}
    const goToReport = () => { navigation.navigate("Report")}

    return(
        <View style={styles.container}>
            <BalancePanel goToNewEntry={goToNewEntry} goToReport={goToReport}/>
            <EntrySumary />
            <EntryList />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#2c3e50",
    },
    
})

export default Main;