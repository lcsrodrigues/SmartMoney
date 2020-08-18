import React,{useEffect, useState} from 'react'
import { View, StyleSheet, Text, TextInput, Button, TouchableOpacity } from 'react-native'

 const NewEntryForm = ({goToMain, saveEntry, entry, deleteLancamento}) => {
    
    const [valor, setValor] = useState()
    const [categoria, setCategoria] = useState()
    const [isEdit, setIsEdit] = useState(false)
    
    useEffect(()=>{
        setValor(entry.amount.toString())
        if(entry.id != null){
            setIsEdit(true)
        }
    },[])

    const preSave = () => {
        const data = 
        {
            amount:parseFloat(valor),
            category:categoria
        }
        if(parseFloat(valor) > 0)
        {
            saveEntry(data,entry)
            goToMain()
        }else{
            alert("Valor inválido")
        }
    }

    const onDelete = () => {
        deleteLancamento(entry)
        goToMain()
    }

    return (
        <View style={styles.container}>

            <TextInput style={styles.input} 
            placeholder="Valor"
            placeholderTextColor="#fff"
            keyboardType="numeric"
            onChangeText={text => setValor(text)}
            value={valor}
            />

            <TextInput style={styles.input} 
            placeholder="Categoria"
            placeholderTextColor="#fff"
            onChangeText={text => setCategoria(text)}
            value={categoria}
            />
            <View style={styles.containerButton}>
                <TouchableOpacity style={styles.btnSalvar} onPress={preSave}>
                    <Text style={styles.btnSalvarText}>Salvar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnCancelar} onPress={goToMain}>
                <Text style={styles.btnCancelarText}>Cancelar</Text>
                </TouchableOpacity>
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
        marginVertical:15,
        flexDirection:"row",
        alignItems:"center",
    },
    btnSalvar:{
        marginHorizontal:30,
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
    btnCancelar:{
        marginHorizontal:30,
    },
    btnCancelarText:{
        fontSize:16,
        color:"#ecf0f1",
        padding:5
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