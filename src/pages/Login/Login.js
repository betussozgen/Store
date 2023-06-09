import React from "react";
import { SafeAreaView, Text, View, Image, Alert } from "react-native";
import { Formik } from "formik";

import { useDispatch } from 'react-redux';
// import * as Yup from 'yup';
import styles from './Login.style';

import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

import Config from "react-native-config";

import usePost from "../../hooks/usePost/usePost";

// const validationSchema = Yup.object({
//     username: Yup.string()
//         .required('Zorunlu Alan'),
//     password: Yup.string()
//         .required('Zorunlu Alan'),

// })

const Login = ({ navigation }) => {
    const { data, post, loading, error } = usePost();
    const dispatch = useDispatch();

    function handleLogin(values) {
        post(Config.API_AUTH_URL + '/login', values);
    }

    if (error) {
        Alert.alert('Dükkan', 'Bir hata oluştu!!');
    }

    if (data) {
        if (data.status === 'Error') {
            Alert.alert('Dükkan', 'Kullanıcı bulunamadı!');
        } else {
            dispatch({ type: 'SET_USER', payload: { user } })

        }
        //console.log(data);
    }
    // console.log(data);

    // console.log('RENDER');
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logo_container}>
                <Image style={styles.logo} source={require('../../asset/login-logo.png')} />

            </View>
            <Formik
                initialValues={{ username: '', password: '' }}
                onSubmit={handleLogin}
            // validationSchema={validationSchema}
            >
                {({ handleSubmit, handleChange, values }) => (
                    <View style={styles.body_container}>
                        <Input
                            placeholder="Kullanıcı adını giriniz..."
                            value={values.username}
                            onType={handleChange('username')}
                            iconName="account"
                        />
                        {/* {errors.username && <Text style={{ fontSize: 12, color: '#2286c3', fontWeight: 'bold', padding: 10, }}>{errors.username}</Text>} */}

                        <Input
                            placeholder="Şifrenizi giriniz..."
                            value={values.password}
                            onType={handleChange('password')}
                            iconName="key"
                            isSecure />
                        {/* {errors.password && <Text style={{ fontSize: 12, color: '#2286c3', fontWeight: 'bold', padding: 10, }}>{errors.password}</Text>} */}
                        <Button text="Giriş Yap"
                            onPress={handleSubmit}
                            loading={loading} />
                    </View>
                )}

            </Formik>
        </SafeAreaView>
    )
}

export default Login;

const user = {
    address:
    {
        geolocation: {
            lat: "-37.3159",
            long: "81.1496"
        },
        city: "kilcoole",
        street: "new road",
        number: 7682,
        zipcode: "12926-3874"
    },
    id: 1,
    email: "john@gmail.com",
    username: "johnd",

    password: "m38rmF$",
    name: {
        firstname: "john",
        lastname: "doe"
    },
    phone: "1-570-236-7033",
    __v: 0
}