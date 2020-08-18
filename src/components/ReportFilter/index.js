import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const ReportFilter = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.filter}>
                <Text style={styles.filterText}>Todas as categorias</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filter}>
            <Text style={styles.filterText}>Últimos 7 dias</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginVertical:25,
        flexDirection:"row",
        textAlign:"center"
    },
    filter:{
        marginHorizontal:15,
        borderWidth:1,
        borderRadius:20,
        borderColor:"#95a5a6",
    },
    filterText:{
        fontSize:16,
        color:"#95a5a6",
        padding:10
    }
})

export default ReportFilter;