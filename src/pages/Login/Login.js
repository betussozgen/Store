import React from "react";
import { SafeAreaView, Text, View, Image } from "react-native";
import styles from './Login.style';

import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

const Login = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logo_container}>
                <Image style={styles.logo} source={require('../../asset/login-logo.png')} />

            </View>
            <View style={styles.body_container}>
                <Input placeholder="Kullanıcı adını giriniz..." />
                <Input placeholder="Şifrenizi giriniz..." />
                <Button text="Giriş Yap" />
            </View>
        </SafeAreaView>
    )
}

export default Login;