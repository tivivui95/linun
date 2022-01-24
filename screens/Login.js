import React, { useState } from "react";
import { Text, View, Button, Image, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { OrientationLocker, PORTRAIT, LANDSCAPE } from "react-native-orientation-locker";

const Login = ({ navigation }) => {
    const [showVideo, setShowVideo] = useState(true);
    const [username, onChangeUsername] = React.useState("");
    const [password, onChangePassword] = React.useState("");
    return (
        <View>
            <OrientationLocker
                orientation={PORTRAIT}
            />
            {showVideo && (
                <View style={styles.container}>
                    <OrientationLocker orientation={LANDSCAPE} />
                    <Image source={require('../img/Login/login.png')} style={styles.bgicon}/>
                    <View style={styles.contain}>
                        
                        <View style={{margin: 12}}>
                            <Text style={{marginLeft: 12}}>Tên đăng nhập</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeUsername}
                                value={username}
                                placeholder="Username"
                            />
                            <Text style={{marginLeft: 12}}>Mật khẩu</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangePassword}
                                value={password}
                                secureTextEntry={true}
                                placeholder="Password"
                            />
                            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.btn}>
                                <Text style={{ color: '#fff', alignSelf: 'center', textTransform: 'uppercase'}}>Đăng nhập</Text>
                            </TouchableOpacity>
                        </View>
                        
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Welcome')} style={styles.btn2}>
                                <Image source={require('../img/Login/back.png')} style={{ width: 48, resizeMode: 'contain' }}/>
                            </TouchableOpacity>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      alignContent: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
      backgroundColor: '#BCE4AE'
    },
    stretch: {
      width: 400,
      height: 180,
      resizeMode: 'contain',
    },
    contain: {
        alignSelf: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        width: 600,
        height: 250,
        position: 'absolute',
        top: 70,
        paddingLeft: 90,
        paddingRight: 90,
        backgroundColor: '#A1CF91'
    },
    bgicon: {
        zIndex: 5,
        top: -20,
        alignSelf: 'center',
        width: 120,
        resizeMode: 'contain',
        position: 'absolute'
    },
    textinline: {
        margin: 16,
        width: 300,
    },
    btn: {
        width: 140,
        height: 36,
        borderRadius: 6,
        backgroundColor: '#000',
        marginLeft: 16,
        margin: 2,
        justifyContent: 'center',
        alignContent: 'center',
        alignSelf: 'center'
    },
    btn2: {
        position: 'absolute',
        zIndex: 5,
        bottom: 24,
        right: 24,
        justifyContent: 'center',
        alignContent: 'center'
    },
    input: {
        height: 40,
        margin: 12,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#DCFFD0'
    }
  });

export default Login;