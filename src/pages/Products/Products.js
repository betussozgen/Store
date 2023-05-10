import React from "react";
import { SafeAreaView, Text, FlatList, ActivityIndicator } from 'react-native';

import Config from "react-native-config";


import ProductCard from '../../components/ProductCard';
import useFetch from "../../hooks/useFetch/useFetch";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";


function Products() {

    const { loading, data, error } = useFetch(Config.API_URL);
    console.log("render");
    console.log({ loading, data: data.length, error });
    console.log("-----------")

    const renderProduct = ({ item }) => <ProductCard product={item} />;



    if (loading) {
        return <Loading />
    } if (error) {
        return <Error />
    }

    return (
        <SafeAreaView>
            <FlatList data={data} renderItem={renderProduct} />
        </SafeAreaView>
    )
}


export default Products;