import React from "react";
import { FlatList, Text, View } from 'react-native';

import Config from "react-native-config";
import { useSelector } from "react-redux";

import ProductCard from '../../components/ProductCard';
import useFetch from "../../hooks/useFetch/useFetch";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";


function Products({ navigation }) {
    const user = useSelector(s => s.user);

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

            <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold', margin: 10 }}>Hello: {user.name.firstname}</Text>
            < FlatList data={data} renderItem={renderProduct} />
        </View>



    )
}


export default Products;