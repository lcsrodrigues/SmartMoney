import React from 'react'
import { View, StyleSheet, Text, FlatList } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'

 const EntrySumaryList = () => {

    const categorias = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'Padaria',
            price:'230'
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Sorveteria',
            price:'12'
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Pizzaria',
            price:'20'
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29e88',
            title: 'Farmácia',
            price:'210'
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29e12',
            title: 'Mercado',
            price:'250'
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29e34',
            title: 'Restaurante',
            price:'200'
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29e31',
            title: 'PetShop',
            price:'300'
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29e22',
            title: 'Shopping',
            price:'400'
        }
    ];

      const renderItem = ({item}) => {
        return(
            <View style={styles.wrapItem}>
                <View style={styles.wrapItemTitle}>
                    <Icon name="fiber-manual-record" size={15} color={"#fff"} />
                    <Text style={styles.titleItem}>{item.title}</Text>
                </View>
                <View style={styles.wrapItemPrice}>
                    <Text style={styles.priceItem}>R$ {item.price}</Text>
                </View>
            </View>
        )
      }

    return (
        <View style={styles.container}>
            <FlatList
            data={categorias}
            renderItem={renderItem}
            keyExtractor={item => item.id} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
    },
    titleItem:{
        color:"#fff",
        fontSize:14,
        marginVertical:5,
        marginHorizontal:5,
        flex:1
    },
    wrapItem:{
        flexDirection:"row",
        alignItems:"center",
        paddingLeft:30
    },
    wrapItemTitle:{
        flex:1,
        flexDirection:"row",
        alignItems:"center"
    },
    priceItem:{
        color:"#fff"
    }
})

export default EntrySumaryList;
