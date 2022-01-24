import React, { useState } from "react";
import { OrientationLocker, PORTRAIT, LANDSCAPE } from "react-native-orientation-locker";
import { Text, View, Button, Image, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { NavigationContainer } from '@react-navigation/native';

const Home = ({ navigation }) => {
    const [showVideo, setShowVideo] = useState(true);
    return (
    <View>
        <OrientationLocker
            orientation={PORTRAIT}
        />
        {showVideo && (
            <View style={{height: '100%', width: '100%', backgroundColor: '#FFFDD0', justifyContent: 'center'}}>
                <OrientationLocker orientation={LANDSCAPE} />
                <Image style={{height: 400, width: 400, right: 0, position: 'absolute'}} source={require('../img/Home/bg.png')} />
                <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
                    <Image style={{position: 'absolute', top: 4, right: 60, width: 72, height: 72}} source={require('../img/Home/sunback.png')} />
                </TouchableOpacity>
                <View style={{ flexDirection: 'column', padding: 12}}>
                    <TouchableOpacity onPress={() => navigation.navigate('Kienthuc')} style={styles.btn}>
                        <Text style={styles.textIn}>Kiến thức</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('MultipleChoice')} style={styles.btn2}>
                        <Text style={styles.textIn}>Trắc nghiệm tâm lý</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.btn}>
                        <Text style={styles.textIn}>Liệu pháp điều trị</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Giaoduc')} style={styles.btn2}>
                        <Text style={styles.textIn}>Giáo dục</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.btn}>
                        <Text style={styles.textIn}>Thông tin</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )}
    </View>
    );
}

const styles = StyleSheet.create({
    textIn: {
        alignSelf: 'center',
        color: '#fff',
        textTransform: 'uppercase'
    }, 
    btn: {
        width: 160,
        height: 48,
        borderRadius: 12,
        backgroundColor: '#110DBA',
        marginLeft: 16,
        margin: 4,
        justifyContent: 'center',
        alignContent: 'center'
    },
    btn2: {
        width: 160,
        height: 48,
        borderRadius: 12,
        backgroundColor: '#A70606',
        marginLeft: 16,
        margin: 4,
        justifyContent: 'center',
        alignContent: 'center'
    }
  });

export default Home;