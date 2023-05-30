import AsyncStorage from '@react-native-async-storage/async-storage';//telefonun belleğe ulaşabilmek için kullandığımız paket

export default function reducers(state, action) {
    switch (action.type) {
        case 'SET_USER':
            const { user } = action.payload;
            AsyncStorage.setItem('@USER', JSON.stringify(user))//herhangi bir değer kaydetmek (user) için setItem.Bellekte bu şekilde bir değerim var dedik.
            return { ...state, user };

        case 'REMOVE_USER':
            AsyncStorage.removeItem('@USER')//değeri kaldırmak için removeItem.
            return { ...state, user: null };

        default:
            return state;
    }
}