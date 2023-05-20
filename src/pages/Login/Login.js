import React from "react";
import { SafeAreaView, Text, View, Image, Alert } from "react-native";
import { Formik } from "formik";
import * as Yup from 'yup';
import styles from './Login.style';

import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";



const validationSchema = Yup.object({
    username: Yup.string()
        .required('Zorunlu Alan'),
    password: Yup.string()
        .required('Zorunlu Alan'),

})

const Login = () => {
    function handleLogin(values) {
        console.log(values);

    }

    // console.log('RENDER');
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logo_container}>
                <Image style={styles.logo} source={require('../../asset/login-logo.png')} />

            </View>
            <Formik
                initialValues={{ username: '', password: '' }}
                onSubmit={handleLogin}
                validationSchema={validationSchema}
            >
                {({ handleSubmit, handleChange, values, errors }) => (
                    <View style={styles.body_container}>
                        <Input
                            placeholder="Kullanıcı adını giriniz..."
                            value={values.username}
                            onType={handleChange('username')}
                            iconName="account"
                        />
                        {errors.username && <Text style={{ fontSize: 12, color: '#2286c3', fontWeight: 'bold', padding: 10, }}>{errors.username}</Text>}

                        <Input
                            placeholder="Şifrenizi giriniz..."
                            value={values.password}
                            onType={handleChange('password')}
                            iconName="key"
                            isSecure />
                        {errors.password && <Text style={{ fontSize: 12, color: '#2286c3', fontWeight: 'bold', padding: 10, }}>{errors.password}</Text>}
                        <Button text="Giriş Yap"
                            onPress={handleSubmit} />
                    </View>
                )}

            </Formik>
        </SafeAreaView>
    )
}

export default Login;