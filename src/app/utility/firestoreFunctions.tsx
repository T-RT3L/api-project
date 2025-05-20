import { doc, getDoc, setDoc } from 'firebase/firestore';
import db from '../../utility/firestore';
interface Dictionary<T> {
  [key: string]: T;
}
const addEntry = (dict: Dictionary<string>, key: string, value: string): void => {
  dict[key] = value;
};
export async function storeFlashcards(term: Array<string>, def: Array<string>) {
  try {
    const docRefTerms: Dictionary<string> = {};
    const docRefDefinitions: Dictionary<string> = {};
    if (term.length == 0 && def.length == 0) {
      await setDoc(doc(db, 'definitions', 'data'), {
        definition: [],
      });
      await setDoc(doc(db, 'terms', 'data'), {
        term: {},
      });
    } else {
      for (const i in term) {
        const te = term[i];
        addEntry(docRefTerms, i, te);
      }
      for (let d = Number(def.length) - 1; d >= 0; d--) {
        const te = def[d];
        addEntry(docRefDefinitions, String(d), te);
      }
      await setDoc(doc(db, 'definitions', 'data'), {
        definition: docRefDefinitions,
      });
      await setDoc(doc(db, 'terms', 'data'), {
        term: docRefTerms,
      });
    }
  } catch (error) {
    console.log('error: ' + error);
  }
}
export const getDefinitions = async (): Promise<string[][]> => {
  const querySnapshot = await getDoc(doc(db, 'definitions', 'data'));
  const data = Object.entries(querySnapshot.data()?.definition).map((value) => {
    return value[1];
  });
  return data as string[][];
};
export const getTerms = async (): Promise<string[]> => {
  const querySnapshot = await getDoc(doc(db, 'terms', 'data'));
  const data = Object.entries(querySnapshot.data()?.term).map((value) => {
    return value[1];
  });
  return data as string[];
};
export const giveAll = async () => {
  return [getTerms(), getDefinitions()];
};
