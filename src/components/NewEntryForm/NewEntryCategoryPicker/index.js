import React,{useState, useEffect} from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Modal, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { getAllCategories } from '../../../services/Categories'

const NewEntryCategoryPicker = ({oCategoria, getCategorySelected}) => {

    const [categories, setCategories] = useState([])
    const [modalVisible, setModalVisible] = useState(false)
    const [categorySelected, setCategorySelected] = useState('Selecione uma categoria')
    
    useEffect(()=>{

        const fieldListCategory = async () => {
            let listCategory = await getAllCategories()
            setCategories(listCategory)
        }

        fieldListCategory()
        if(oCategoria.id != null)
        {
            setCategorySelected(oCategoria.name)
        }

    },[])

    const renderListCategories = ({item}) => {
        return(
            <TouchableOpacity style={styles.containerCategory} onPress={()=>{
                setCategorySelected(item.name)
                getCategorySelected(item)
                console.log(`Categoria seleciona ::: ${JSON.stringify(item)}`)
                setModalVisible(false)
            }}>
                <Text style={styles.categoryItem}>{item.name}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.pickerButton} onPress={()=>{ setModalVisible(true) }}>
                <Text style={styles.pickerText}>{categorySelected}</Text>
            </TouchableOpacity>
            <Modal animationType="slide" transparent={false} visible={modalVisible}>
                <TouchableOpacity onPress={()=>{
                    setModalVisible(false)
                }}>
                    <Icon name="arrow-back" style={styles.btnBack} size={50}></Icon>
                </TouchableOpacity>

                <FlatList
                style={styles.categoryList}
                data={categories}
                keyExtractor={item => item.id}
                renderItem={renderListCategories}
                />
                
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({

    container:{
        backgroundColor:"#34495e",
        marginVertical:20,
        borderRadius:10,
        width:250,
        paddingLeft:10,
    },
    pickerButton:{
        paddingHorizontal:5,
    },
    pickerText:{
        fontSize:18,
        color:"#fff",
        backgroundColor:"#34495e",
        marginVertical:20,
        borderRadius:10,
        textAlign:"center",
    },
    categoryList:{
        backgroundColor:"#2c3e50"
    },
    containerCategory:{
        backgroundColor:"#34495e",
        marginVertical:20,
        borderRadius:10,
        width:300,
        alignSelf:"center"
    },
    categoryItem:{
        alignSelf:"center",
        fontSize:18,
        marginVertical:10,
        color:"#fff"
    },
    btnBack:{
        backgroundColor:"#2c3e50",
        color:"#fff",
    }
})

export default NewEntryCategoryPicker
