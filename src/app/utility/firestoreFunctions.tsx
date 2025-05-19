import { addDoc, collection, doc, Firestore, getDoc, getDocs, setDoc, updateDoc } from 'firebase/firestore';
import db from '../../utility/firestore';
interface Dictionary<T> {
    [key: string]: T;
}
const addEntry = (dict: Dictionary<number>, key: string, value: number): void => {
    dict[key] = value;
};
export async function storeFlashcards(term, def) {
    try {
        var docRefTerms: Dictionary<number> = {};
        var docRefDefinitions: Dictionary<number> = {};
        if (term == '' && def.length == 0) {
            const x = await setDoc(doc(db, 'definitions', 'data'), {
                definition: [],
            });
            const docRef = await setDoc(doc(db, 'terms', 'data'), {
                term: {},
            });
        } else {
            for (var i in term) {
                const te = term[i];
                addEntry(docRefTerms, i, te);
            }
            for (var d = Number(def.length) - 1; d >= 0; d--) {
                const te = def[d];
                addEntry(docRefDefinitions, String(d), te);
            }
            const x = await setDoc(doc(db, 'definitions', 'data'), {
                definition: docRefDefinitions,
            });
            const docRef = await setDoc(doc(db, 'terms', 'data'), {
                term: docRefTerms,
            });
        }
    } catch (error) {
        console.log('error');
    }
}
export const getDefinitions = async () => {
    const querySnapshot = await getDoc(doc(db, 'definitions', 'data'));
    const data = Object.entries(querySnapshot.data().definition).map((value, index) => {
        return value[1];
    });
    return data;
};
export const getTerms = async () => {
    const querySnapshot = await getDoc(doc(db, 'terms', 'data'));
    const data = Object.entries(querySnapshot.data().term).map((value, index) => {
        return value[1];
    });
    return data;
};
export const giveAll = async () => {
    return [getTerms(), getDefinitions()];
};
