import { collection, getDocs, orderBy, query } from '@firebase/firestore'
import {ref} from 'vue'
import { db } from '../services/firebase'

const getChapters = () => {
    const chapters = ref([])
    const error = ref(null)

    const load = async () => {
      try{
        const q = query(collection(db, 'chapters'), orderBy("id", "asc"))
        const res = await getDocs(q);
        chapters.value = res.docs.map(doc => {
          return {...doc.data(), key: doc.id}
        });
      }
      catch (error) {
        error.value = error.message
      }
    }
    return {chapters, error, load}
}

export default getChapters