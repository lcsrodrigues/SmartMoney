import React,{useEffect, useState} from 'react'
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'
import NewEntryInput from './NewEntryInput'
import NewEntryCategoryPicker from './NewEntryCategoryPicker'

 const NewEntryForm = ({goToMain, saveEntry, entry, deleteLancamento}) => {
    
    const [valor, setValor] = useState()
    const [isEdit, setIsEdit] = useState(false)
    const [categoria, setCategoria] = useState( (entry.category != null) ? entry.category : {id:null,name:''})
    
    useEffect(()=>{
        setValor(entry.amount)
        if(entry.id != null){
            setIsEdit(true)
        }
    },[])

    const getCategorySelected = oCategory => {
        setCategoria(oCategory)
        
    }

    const preSave = () => {
        const data = 
        {
            amount:parseFloat(valor),
            category:categoria
        }
        
        saveEntry(data,entry)
        goToMain()
    }

    const onDelete = () => {
        deleteLancamento(entry)
        goToMain()
    }

    return (
        <View style={styles.container}>

            <NewEntryInput value={valor} onChangeValue={setValor}/>
            <NewEntryCategoryPicker oCategoria={categoria} getCategorySelected={getCategorySelected}/>
            <View style={styles.containerButton}>
                <View style={styles.actionButton}>
                    <TouchableOpacity style={styles.btnSalvar} onPress={preSave}>
                        <Text style={styles.btnSalvarText}>Salvar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnCancelar} onPress={goToMain}>
                        <Text style={styles.btnCancelarText}>Cancelar</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.interationButton}>
                    <TouchableOpacity style={styles.btnCamera}>
                        <Icon name="photo-camera" size={40} color={"#fff"} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnLocalizacao}>
                        <Icon name="place" size={40} color={"#fff"} />
                    </TouchableOpacity>
                </View>
            </View>
            {(isEdit) &&(
                <View style={styles.containerButton}>
                    <TouchableOpacity style={styles.btnExcluir} onPress={onDelete}>
                        <Text style={styles.btnExcluirText}>Excluir</Text>
                    </TouchableOpacity>
                </View>
            )}
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        marginVertical:20,
    },
    input:{
        fontSize:18,
        color:"#fff",
        backgroundColor:"#34495e",
        marginVertical:20,
        borderRadius:10,
        width:"70%",
        height:70,
        padding:10,
        textAlign:"center",
    },
    containerButton:{
        alignItems:"center",
    },
    actionButton:{
        flexDirection:"row",
    },
    interationButton:{
        flexDirection:"row",
        marginVertical:20
    },
    btnCamera:{
        marginHorizontal:35,
        borderStyle:"solid",
        borderColor:"#34495e",
        borderWidth:1,
        borderRadius:100,
        backgroundColor:"#34495e",
        padding:10
    },
    btnLocalizacao:{
        marginHorizontal:35,
        borderStyle:"solid",
        borderColor:"#34495e",
        borderWidth:1,
        borderRadius:100,
        backgroundColor:"#34495e",
        padding:10
    },
    btnSalvar:{
        marginHorizontal:15,
        borderWidth:1,
        borderRadius:20,
        borderColor:"#2ecc71",
    },
    btnSalvarText:{
        fontSize:16,
        paddingHorizontal:25,
        paddingVertical:15,
        color:"#2ecc71"
    },
    btnCancelar:{
        marginHorizontal:15,
        borderWidth:1,
        borderRadius:20,
        borderColor:"#fff",
    },
    btnCancelarText:{
        fontSize:16,
        paddingHorizontal:25,
        paddingVertical:15,
        color:"#fff"
    },
    btnExcluir:{
        marginHorizontal:30,
        borderWidth:1,
        borderRadius:20,
        borderColor:"#e74c3c",
        
    },
    btnExcluirText:{
        fontSize:16,
        color:"#95a5a6",
        paddingHorizontal:25,
        paddingVertical:15,
        color:"#e74c3c"
    }
})

export default NewEntryForm;