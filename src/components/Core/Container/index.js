import React from 'react'
import { View, StyleSheet, Text, ScrollView } from 'react-native'

const Container = ({title,children}) => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.label}>{title}</Text>
            </View>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#34495e",
        marginHorizontal:5,
        marginVertical:5,
        borderRadius:5,
        padding:10,
    },
    label:{
        fontSize:16,
        color:"#fff",
        marginBottom:10,
        fontWeight:"bold"
    }
})

export default Container;