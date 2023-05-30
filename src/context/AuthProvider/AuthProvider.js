import React, { useEffect, useState } from "react";
import { Provider } from 'react-redux';
import { createStore } from "redux";
import reducers from "./reducers";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthProvider = ({ children }) => {
    //initial değerlerim bellekte tuttuğum değerler.
    const [user, setUser] = useState(null);
    //belleğe istek atacağımda loading durumu için.
    const [isAuthLoading, setAuthLoading] = useState(true);

    //initial olduğu an belleğe istek atıyorum.
    useEffect(() => {
        AsyncStorage.getItem('@USER').then(userSession => {
            //değer varsa 
            userSession && setUser(JSON.parse(userSession));
            setAuthLoading(false);
        });
    }, []);
    const store = createStore(reducers, { user, isAuthLoading });
    return <Provider store={store}>{children}</Provider>
}


export default AuthProvider;