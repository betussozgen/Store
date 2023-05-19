import React from "react";
import { SafeAreaView, Text, View, Image } from "react-native";
import { Formik } from "formik";
import styles from './Login.style';

import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

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
                onSubmit={handleLogin}>
                {({ handleSubmit, handleChange, values }) => (
                    <View style={styles.body_container}>
                        <Input
                            placeholder="Kullanıcı adını giriniz..."
                            value={values.username}
                            onType={handleChange('username')} />
                        <Input
                            placeholder="Şifrenizi giriniz..."
                            value={values.password}
                            onType={handleChange('password')} />
                        <Button text="Giriş Yap"
                            onPress={handleSubmit} />
                    </View>
                )}

            </Formik>
        </SafeAreaView>
    )
}

export default Login;