import React, { useState } from "react";
import { OrientationLocker, PORTRAIT, LANDSCAPE } from "react-native-orientation-locker";
import { Text, View, Button, Image, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { NavigationContainer } from '@react-navigation/native';

export default Giaoduc = ({ navigation }) => {
    const [showVideo, setShowVideo] = useState(true);
    return (
    <View>
        <OrientationLocker
            orientation={LANDSCAPE}
        />
        {showVideo && (
            <View style={{height: '100%', width: '100%', backgroundColor: '#fff', justifyContent: 'center'}}>
                <View style={styles.col}>
                    <View style={styles.row}>
                        <View style = {styles.col}>
                            <TouchableOpacity onPress={() => navigation.navigate('MusicIntro')}>
                            <Image style={styles.icon} source={require('../img/Giaoduc/amnhac.png')} />
                            <Text style={styles.textIn}>Âm nhạc</Text>
                            </TouchableOpacity>
                        </View>
                        <View style = {styles.col}>
                            <TouchableOpacity onPress={() => navigation.navigate('Family')}>
                            <Image style={styles.icon} source={require('../img/Giaoduc/cauchuyen.png')} />
                            <Text style={styles.textIn}>Câu chuyện</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style = {styles.col}>
                            <TouchableOpacity onPress={() => navigation.navigate('FamilyLink')}>
                            <Image style={styles.icon} source={require('../img/Giaoduc/giadinh.png')} />
                            <Text style={styles.textIn}>Gia đình</Text>
                            </TouchableOpacity>
                        </View>
                        <View style = {styles.col}>
                            <TouchableOpacity onPress={() => navigation.navigate('Schedule')}>
                            <Image style={styles.icon} source={require('../img/Giaoduc/tkb.png')} />
                            <Text style={styles.textIn}>Thời khóa biểu</Text>
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