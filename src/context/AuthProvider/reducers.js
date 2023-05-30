import AsyncStorage from '@react-native-async-storage/async-storage';//telefonun belleğe ulaşabilmek için kullandığımız paket

export default function reducers(state, action) {
    switch (action.type) {
        case 'SET_USER':
            const { user } = action.payload;
            user
                ? AsyncStorage.setItem('@USER', JSON.stringify(user))//herhangi bir değer kaydetmek (user) için setItem.Bellekte bu şekilde bir değerim var dedik.
                : AsyncStorage.removeItem('@USER')//değeri kaldırmak için removeItem.
            return { ...state, user };

        default:
            return state;
    }
}