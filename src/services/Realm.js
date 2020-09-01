import Realm, { schemaVersion } from 'realm'

import CategorySchema from '../schemas/CategorySchema'
import EntrySchema from '../schemas/EntrySchema'

import { getDefaultCategories } from '../services/Categories'

export const getRealm = async () => {
    const realm = await Realm.open({
            schema:[CategorySchema,EntrySchema],
            schemaVersion:2
        });

        //dropDB(realm);
        initDB(realm);

        return realm
};

export const initDB = (realm) => {

    const categoriesLength = realm.objects('Category').length;

    if(categoriesLength === 0)
    {
        const categories = getDefaultCategories();
        console.log(`initBD :: initing db...`)

        try {
            realm.write(()=>{
                categories.forEach(category => {
                    realm.create('Category', category, true);
                })
            })
        } catch (error) {
            console.log(`Realm.js ::: erro no método initDB`)
        }
    }else{
    }
}

export const dropDB = realm => {
    console.log(`dropDB :: dropping db...`);
    realm.write(() => {
        realm.deleteAll();
    })
}