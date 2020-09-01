import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'
import {getAllLancamentos} from '../../services/Entries'
import Container from '../Core/Container'

const EntryList = ({navigation}) => {
    
    const [ultimosLancamentos, setUltimosLancamentos] = useState([])

    useEffect(()=>{
        const loadUltimosLancamentos = async () => {
          const data = await getAllLancamentos()
          console.log(data[0].category.name)
          console.log(JSON.stringify(data[0].category.name))
          setUltimosLancamentos(data)
        }
        loadUltimosLancamentos()
      },[])

    //   const editItem = () => {
    //       //
    //   }

    //   const formatDate = ({item}) => {
    //     item.entryAt.toString()
    //     return "18/08 08:26"
    //   }

      const renderItem = ({item}) => {
          return(
            <TouchableOpacity onPress={() => {navigation.navigate("NewEntry",{entry:item})}} style={styles.wrapItem}>
                <View style={styles.bulletItem}>
                    <Icon name="fiber-manual-record" size={15} color={"#fff"} />
                </View>
                <View style={styles.descriptionItem}>
                    <Text style={styles.descriptionItemText}> {(item.category != null) ? item.category.name : ''} </Text>
                    <View style={styles.otherInfo}>
                        <Icon name="query-builder" size={12} color="#7f8c8d" style={styles.otherInfoIcon} />
                        <Text style={styles.otherInfoData}></Text>
                    
                        <Icon name="place" size={12} color="#7f8c8d" style={styles.otherInfoIcon} />
                        <Text style={styles.otherInfoLocation}>Localização</Text>
                            
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
    },
    otherInfo:{
        flexDirection:"row",
    },
    otherInfoData:{
        marginRight:10,
        color:"#7f8c8d"
    },
    otherInfoLocation:{
        color:"#7f8c8d"
    },
    otherInfoIcon:{
        marginTop:4,
        marginRight:2
    }
})

export default EntryList;