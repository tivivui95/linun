import React, { useState } from "react";
import { OrientationLocker, PORTRAIT, LANDSCAPE } from "react-native-orientation-locker";
import { Text, View, Button, Image, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { NavigationContainer } from '@react-navigation/native';

export default MultipleChoice = ({ navigation }) => {
    const [showVideo, setShowVideo] = useState(true);
    return (
    <View>
        <OrientationLocker
            orientation={PORTRAIT}
        />
        {showVideo && (
            <View style={{height: '100%', width: '100%', backgroundColor: '#FFCEE1', alignItems: 'center', justifyContent: 'center', flex: 1}}>
                <OrientationLocker orientation={LANDSCAPE} />
                <TouchableOpacity onPress={() => navigation.navigate('Result')}>
                <Image style={{width: '100%', height: 380, top: 0, resizeMode: 'contain', alignSelf: 'center', position:'absolute'}} source={require('../img/MultipleChoice/MultipleChoice.png')} />
                </TouchableOpacity>
            </View>
        )}
    </View>
    );
}