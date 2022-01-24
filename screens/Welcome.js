import React, { useState } from "react";
import { Text, View, TouchableOpacity, Image, StyleSheet } from "react-native";
import { OrientationLocker, PORTRAIT, LANDSCAPE } from "react-native-orientation-locker";
import { NavigationContainer } from '@react-navigation/native';

const Welcome = ({ navigation }) => {
    const [showVideo, setShowVideo] = useState(true);
    return (
        <View>
            <OrientationLocker
                orientation={PORTRAIT}
            />
            {showVideo && (
                <View style={{ backgroundColor: '#FFC8DD', height: '100%'}}>
                    <OrientationLocker orientation={LANDSCAPE} />
                    <Image source={require('../img/Welcome/image2.png')} style={styles.bgicon}/>
                    <View style={styles.contain}>
                        <Image source={require('../img/Welcome/welcomeText.png')} style={styles.stretch} />
                        <Text style={styles.textinline}>Cám ơn bạn vì đã sử dụng Linun, bây giờ hãy bắt đầu bằng việc thiết lập hồ sơ của bạn !</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.btn}>
                            <Text style={{ color: '#fff', alignSelf: 'center', textTransform: 'uppercase'}}>Đăng nhập</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn2}>
                            <Text style={{ alignSelf: 'center', textTransform: 'uppercase'}}>Đăng ký</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
    },
    stretch: {
      width: 400,
      height: 180,
      resizeMode: 'contain',
    },
    contain: {
        marginLeft: 30,
        marginTop: 12,
    },
    bgicon: {
        position: 'absolute',
        top: 30,
        right: 10
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
        alignContent: 'center'
    },
    btn2: {
        width: 140,
        height: 36,
        borderRadius: 6,
        backgroundColor: '#fff',
        marginLeft: 16,
        margin: 2,
        justifyContent: 'center',
        alignContent: 'center'
    }
  });

export default Welcome;