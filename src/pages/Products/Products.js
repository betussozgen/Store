import React from "react";
import { SafeAreaView, Text, FlatList, ActivityIndicator } from 'react-native';

import Config from "react-native-config";


import ProductCard from '../../components/ProductCard';
import useFetch from "../../hooks/useFetch/useFetch";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";


function Products({ navigation }) {

    const { loading, data, error } = useFetch(Config.API_URL);

    handleProductSelect = () => {
        navigation.navigate('Detail');
    }

    const renderProduct = ({ item }) => <ProductCard product={item} onSelect={handleProductSelect} />;



    if (loading) {
        return <Loading />
    } if (error) {
        return <Error />
    }

    return (

        <FlatList data={data} renderItem={renderProduct} />

    )
}


export default Products;