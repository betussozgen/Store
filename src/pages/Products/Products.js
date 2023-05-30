import React from "react";
import { FlatList, Button, View } from 'react-native';

import Config from "react-native-config";
import { useDispatch } from "react-redux";

import ProductCard from '../../components/ProductCard';
import useFetch from "../../hooks/useFetch/useFetch";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";


function Products({ navigation }) {
    const dispatch = useDispatch();

    const { loading, data, error } = useFetch(Config.API_PRODUCT_URL);

    handleProductSelect = id => {
        navigation.navigate('Detail', { id });
    }

    const renderProduct = ({ item }) => <ProductCard product={item} onSelect={() => handleProductSelect(item.id)} />;



    if (loading) {
        return <Loading />
    } if (error) {
        return <Error />
    }

    return (

        <View>
            <Button title="LogOut" onPress={() => dispatch({ type: 'SET_USER', payload: { user: null } })} />
            <FlatList data={data} renderItem={renderProduct} />

        </View>


    )
}


export default Products;