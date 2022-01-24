import React, { useState } from "react";
import { OrientationLocker, PORTRAIT, LANDSCAPE } from "react-native-orientation-locker";
import { Text, View, Button, Image, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { NavigationContainer } from '@react-navigation/native';

export default Kienthuc = ({ navigation }) => {
    const [showVideo, setShowVideo] = useState(true);
    return (
    <View>
        <OrientationLocker
            orientation={PORTRAIT}
        />
        {showVideo && (
            <View style={{height: '100%', width: '100%', backgroundColor: '#FFDDEA', justifyContent: 'center'}}>
                <OrientationLocker orientation={LANDSCAPE} />
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Image style={{position: 'absolute', top: 4, right: 4, width: 60, height: 60}} source={require('../img/home-icon.png')} />
                </TouchableOpacity>
                <View style={styles.col}>
                    <View style={styles.row}>
                        <View style = {styles.col}>
                            <TouchableOpacity>
                            <Image style={styles.icon} source={require('../img/Kienthuc/khainiem.png')} />
                            <Text style={styles.textIn}>Khái niệm</Text>
                            </TouchableOpacity>
                        </View>
                        <View style = {styles.col}>
                            <TouchableOpacity>
                            <Image style={styles.icon} source={require('../img/Kienthuc/dauhieu.png')} />
                            <Text style={styles.textIn}>Dấu hiệu</Text>
                            </TouchableOpacity>
                        </View>
                        <View style = {styles.col}>
                        <TouchableOpacity>
                            <Image style={styles.icon} source={require('../img/Kienthuc/hauqua.png')} />
                            <Text style={styles.textIn}>Hậu quả</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style = {styles.col}>
                            <TouchableOpacity onPress={() => navigation.navigate('Mdcanthiep')}>
                            <Image style={styles.icon} source={require('../img/Kienthuc/mdcanthiep.png')} />
                            <Text style={styles.textIn}>Mục đích can thiệp</Text>
                            </TouchableOpacity>
                        </View>
                        <View style = {styles.col}>
                            <TouchableOpacity>
                            <Image style={styles.icon} source={require('../img/Kienthuc/cachchandoan.png')} />
                            <Text style={styles.textIn}>Cách chẩn đoán</Text>
                            </TouchableOpacity>
                        </View>
                        <View style = {styles.col}>
                        <TouchableOpacity>
                            <Image style={styles.icon} source={require('../img/Kienthuc/nguyennhan.png')} />
                            <Text style={styles.textIn}>Nguyên nhân</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        )}
    </View>
    );
}

const styles = StyleSheet.create({
    icon: {
        width: 84,
        height: 84,
        resizeMode: 'contain',
        margin: 12,
        marginBottom: 4
    },
    col: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    textIn: {
        alignSelf: 'center',
        color: '#000',
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