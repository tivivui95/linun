import React, { useEffect, useState } from "react";
import { OrientationLocker, PORTRAIT, LANDSCAPE } from "react-native-orientation-locker";
import { Text, View, Button, Image, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import SoundPlayer from 'react-native-sound-player'

export default Lyrics = ({ navigation }) => {
    const [showVideo, setShowVideo] = useState(true);
    try {
        SoundPlayer.playSoundFile('nvtl', 'mp3');
    } catch (error) {
        
    }
    
    return (
    <View>
        <OrientationLocker
            orientation={PORTRAIT}
        />
        {showVideo && (
            <View style={{height: '100%', width: '100%', backgroundColor: '#6FE074', alignItems: 'center', justifyContent: 'center', flex: 1}}>
                <OrientationLocker orientation={LANDSCAPE} />
                <Image style={{width: '100%', height: 390, top: 0, resizeMode: 'contain', alignSelf: 'center', position:'absolute'}} source={require('../img/Lyrics/Lyrics.png')} />
            </View>
        )}
    </View>
    );
}