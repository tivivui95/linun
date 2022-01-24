import React, { useState } from "react";
import { OrientationLocker, PORTRAIT, LANDSCAPE } from "react-native-orientation-locker";
import { Text, View, Button, Image, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { NavigationContainer } from '@react-navigation/native';

export default MusicIntro = ({ navigation }) => {
    const [showVideo, setShowVideo] = useState(true);
    return (
    <View>
        <OrientationLocker
            orientation={PORTRAIT}
        />
        {showVideo && (
            <View style={{height: '100%', width: '100%', backgroundColor: '#6FE074', alignItems: 'center', justifyContent: 'center', flex: 1}}>
                <OrientationLocker orientation={LANDSCAPE} />
                <Image style={{width: '100%', height: 390, top: 0, resizeMode: 'contain', alignSelf: 'center', position:'absolute'}} source={require('../img/MusicIntro/MusicIntro.png')} />
                <TouchableOpacity style={{height: '100%', width: '100%'}} onPress={() => navigation.navigate('Lyrics')}>
                    <Image style={{top: 8, right: 12, width: 60, height: 60, zIndex: 3, position: 'absolute'}} source={require('../img/MusicIntro/play.png')} />
                </TouchableOpacity>
            </View>
        )}
    </View>
    );
}