import {getRealm} from './Realm'
import {getUUID} from '../services/UUID'

export const saveEntry = async (obj, entry = {}) => {
    
    const idEntry = getUUID();
    const realm = await getRealm();
    let dataEntry = {};
    
    try {
        realm.write(() => {

            dataEntry = {
                id:entry.id || obj.id || idEntry,
                amount:obj.amount || entry.amount,
                entryAt: new Date(),
                isInit:false,
                description:entry.description || obj.description || '',
                latitude:entry.latitude || obj.latitude || null,
                longitude:entry.longitude || obj.longitude || null,
                address:entry.address || obj.address || '',
                photo:entry.photo || obj.photo || '',
            };
            
            realm.create('Entry', dataEntry, true)
            alert("Sucesso")
        });
    
        console.log("saveEntry:: data ", JSON.stringify(dataEntry))

    } catch (error) {
        console.error("saveEntry:: error on save object ", JSON.stringify(dataEntry))
        console.error("error:: ==> ",JSON.stringify(error))
        alert("Erro ao salvar os dados de lançamento")
    }
};

export const getAllLancamentos = async () => {
    const realm = await getRealm();
    try {
        const entries = realm.objects('Entry')
        return entries;
    } catch (error) {
        console.error("saveEntry:: error on get object ")
        alert("Erro ao obter os dados de lançamento")
    }
}

export const deleteLancamento = async entry => {
    const realm = await getRealm()
    try {
        realm.write(()=>{
            realm.delete(entry)
        })
        alert("Sucesso")
    } catch (error) {
        console.log("Erro ao deletar o registro:: ", JSON.stringify(entry))
        alert("Erro ao deletar o registro")
    }
}

export const totalBalance = async () => {
    const data = await getAllLancamentos()

    let total = 0;
    data.forEach(lancamento => {
      total += lancamento.amount;
    });
    return total;
  }