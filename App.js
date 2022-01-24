import React, { useState } from "react";
import { Text, View, Button } from "react-native";
import { OrientationLocker, PORTRAIT, LANDSCAPE } from "react-native-orientation-locker";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./screens/Home";
import Login from "./screens/Login";
import Welcome from "./screens/Welcome";
import { NavigationContainer } from '@react-navigation/native';
import Kienthuc from "./screens/Kienthuc";
import Mdcanthiep from "./screens/Mdcanthiep";
import Schedule from "./screens/Schedule";
import Family from "./screens/Family";
import Giaoduc from "./screens/Giaoduc";
import Lyrics from "./screens/Lyrics";
import MusicIntro from "./screens/MusicIntro";
import Mother from "./screens/Mother";
import Result from "./screens/Result"
import MultipleChoice from "./screens/MultipleChoice";
import FamilyLink from "./screens/FamilyLink";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      >
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Kienthuc" component={Kienthuc} />
        <Stack.Screen name="Mdcanthiep" component={Mdcanthiep} />
        <Stack.Screen name="Schedule" component={Schedule} />
        <Stack.Screen name="Family" component={Family} />
        <Stack.Screen name="Giaoduc" component={Giaoduc} />
        <Stack.Screen name="Lyrics" component={Lyrics} />
        <Stack.Screen name="MusicIntro" component={MusicIntro} />
        <Stack.Screen name="Mother" component={Mother} />
        <Stack.Screen name="Result" component={Result} />
        <Stack.Screen name="MultipleChoice" component={MultipleChoice} />
        <Stack.Screen name="FamilyLink" component={FamilyLink} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};