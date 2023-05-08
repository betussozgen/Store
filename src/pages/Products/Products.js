import React from "react";
import { SafeAreaView, Text, FlatList, ActivityIndicator } from 'react-native';

import Config from "react-native-config";


import ProductCard from '../../components/ProductCard';
import useFetch from "../../hooks/useFetch/useFetch";


function Products() {

    const { loading, data, error } = useFetch(Config.API_URL);
    console.log("render");
    console.log({ loading, data: data.length, error });
    console.log("-----------")

    const renderProduct = ({ item }) => <ProductCard product={item} />;

    if (loading) {
        return <ActivityIndicator size="large" />
    } if (error) {
        return <Text>{error}</Text>
    }

    return (
        <SafeAreaView>
            <FlatList data={data} renderItem={renderProduct} />
        </SafeAreaView>
    )
}


export default Products;