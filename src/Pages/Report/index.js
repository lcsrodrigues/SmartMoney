import React, {useEffect, useState} from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'

import BalanceLabel from '../../components/BalanceLabel'
import EntrySumary from '../../components/EntrySumary'
import EntryList from '../../components/EntryList'
import ReportFilter from '../../components/ReportFilter'

import {getAllLancamentos} from '../../services/Entries'

const Report = ({navigation}) => {

    const [ultimosLancamentos, setUltimosLancamentos] = useState([])

    const goToMain = () => { navigation.navigate("Main")}

    useEffect(()=>{
        const loadUltimosLancamentos = async () => {
            const data = await getAllLancamentos()
            setUltimosLancamentos(data)
        }

        loadUltimosLancamentos()
    },[])

    const categorias = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29e88',
        title: 'Fourty Item',
        },
    ];

    return (
        <View style={styles.container}>
            <BalanceLabel />
            <ReportFilter />
            <EntrySumary categorias={categorias}/>
            <EntryList ultimosLancamentos={ultimosLancamentos}/>

            <View style={styles.containerButton}>
                <TouchableOpacity style={styles.btnSalvar}>
                    <Text style={styles.btnSalvarText}>Salvar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnFechar} onPress={goToMain}>
                <Text style={styles.btnFecharText}>Fechar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#2c3e50",
        
    },
    containerButton:{
        marginVertical:15,
        flexDirection:"row",
        alignItems:"center",
    },
    btnSalvar:{
        marginHorizontal:60,
        borderWidth:1,
        borderRadius:20,
        borderColor:"#2ecc71",
        
    },
    btnSalvarText:{
        fontSize:16,
        color:"#95a5a6",
        paddingHorizontal:25,
        paddingVertical:15,
        color:"#2ecc71"
    },
    btnFechar:{
    },
    btnFecharText:{
        fontSize:16,
        color:"#ecf0f1",
        padding:5
    }
})

export default Report;