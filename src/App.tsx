import { NavigationContainer } from "@react-navigation/native";
import { View, } from 'react-native';
import React, { useCallback, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import AuthNavigator from "./navigation/AuthNavigator";
import HomeNavigator from "./navigation/HomeNavigator";
import { useFonts } from "expo-font";
import { FIREBASE_AUTH } from "./firebase/firebaseConfig";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [settingChange, setSettingChange] = useState(false); 

  const [fontsLoaded] = useFonts({
    'kumarOne': require('../assets/fonts/KumarOne-Regular.ttf')
  })

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log("user: ", user);
      setLoggedIn(!!user);
      setSettingChange(settingChange); 
    });
  }, []);

  if(!fontsLoaded){
    return null
  }

  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
      {loggedIn ? (
        <HomeNavigator initiatingQuiz={false}  setInitiatingQuiz={function (value: React.SetStateAction<boolean>): void {
            throw new Error("Function not implemented.");
          } } setLoggedIn={function (value: React.SetStateAction<boolean>): void {
            throw new Error("Function not implemented.");
          } }   />
      ) : (
        <AuthNavigator loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      )}
    </NavigationContainer>
    </View>
    
  );
};

export default App;