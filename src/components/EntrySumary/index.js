import React from 'react'
import { View, StyleSheet } from 'react-native'

import EntrySumaryList from '../EntrySumary/EntrySumaryList';
import EntrySumaryChart from '../EntrySumary/EntrySumaryChart';

import Container from '../Core/Container/index';

 const EntrySumary = () => {

    return (
        <Container title="Categorias">
            <View style={styles.wrap}>
                <View>
                    <EntrySumaryChart />
                </View>
                <View style={styles.wrapEntrySummary}>
                    <EntrySumaryList />
                </View>
            </View>
        </Container>
    )
}

const styles = StyleSheet.create({
    wrap:{
        flexDirection:"row",
        flex:1,
    },
    wrapEntrySummary:{
        flex:1,
    }
})

export default EntrySumary;
