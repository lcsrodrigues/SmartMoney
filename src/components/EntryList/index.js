import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity, VirtualizedList } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'
import {getAllLancamentos} from '../../services/Entries'
import Container from '../Core/Container'

const EntryList = () => {
    
    const [ultimosLancamentos, setUltimosLancamentos] = useState([])

    useEffect(()=>{
        const loadUltimosLancamentos = async () => {
          const data = await getAllLancamentos()
          setUltimosLancamentos(data)
        }
        loadUltimosLancamentos()
      },[])

      const editItem = () => {
          //navigation.navigate("NewEntry",{entry:item})
      }

      const renderItem = ({item}) => {
          return(
            <TouchableOpacity onPress={editItem} style={styles.wrapItem}>
                <View style={styles.bulletItem}>
                    <Icon name="fiber-manual-record" size={15} color={"#fff"} />
                </View>
                <View style={styles.descriptionItem}>
                    <Text style={styles.descriptionItemText}>Description</Text>
                    <View>
                        <Text>Data</Text>
                        <Text>Localização</Text>
                    </View>
                </View>
                <View style={styles.amountItem}>
                    <Text style={styles.amountItemText}>R$ {item.amount}</Text>
                </View>
            </TouchableOpacity>
          )
      }

      return (
        <Container title="Últimos lançamentos">
            <FlatList
            data={ultimosLancamentos}
            renderItem={renderItem}
            keyExtractor={item => item.id} />
        </Container>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#34495e",
        marginHorizontal:5,
        marginBottom:5,
        borderRadius:5,
        padding:10
    },
    wrapItem:{
        flexDirection:"row",
        alignItems:"center",
        marginVertical:5
    },
    bulletItem:{

    },
    descriptionItem:{
        flex:1,
        marginLeft:20,
        
    },
    descriptionItemText:{
        color:"#fff",
    },
    amountItem:{
    },
    amountItemText:{
        fontWeight:"bold",
        color:"#fff",
        fontSize:14,
        marginVertical:5,
    }
})

export default EntryList;