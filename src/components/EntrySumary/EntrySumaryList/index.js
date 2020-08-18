import React from 'react'
import { View, StyleSheet, Text, FlatList } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'

 const EntrySumaryList = () => {
    
    const categorias = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'Item 1',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Item 2',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Item 3',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29e88',
            title: 'Item 4',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29e12',
            title: 'Item 5',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29e34',
            title: 'Item 6',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29e31',
            title: 'Item 7',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29e22',
            title: 'Item 8',
        }
    ];

      const renderItem = ({item}) => {
        return(
            <View style={styles.wrapItem}>
                <View style={styles.wrapItemIcon}>
                    <Icon name="fiber-manual-record" size={15} color={"#fff"} />
                </View>
                <View style={styles.wrapItemTitle}>
                    <Text style={styles.titleItem}>{item.title}</Text>
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
    },
    wrapItem:{
        flexDirection:"row",
        alignItems:"center",
    },
    wrapItemIcon:{
        flex:1,
        alignItems:"flex-end"
    },
    wrapItemTitle:{
        
    }
})

export default EntrySumaryList;
