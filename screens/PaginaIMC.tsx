import * as React from "react";
import { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  TextInput,
  Button,
  Alert,
} from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import Functionalities from "../controller/functionalities";

export default function TabTwoScreen() {
  const [peso, setPeso] = useState("")
  const [altura, setAltura] = useState("")
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>App Calculadora de IMC</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <SafeAreaView>
        <TextInput
          style={styles.input}
          placeholder="Peso"
          keyboardType="numeric"
          value={peso}
          onChangeText={text=>setPeso(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Altura"
          keyboardType="numeric"
          value={altura}
          onChangeText={text=>setAltura(text)}
        />
      </SafeAreaView>
      <Button
        title="Calcular meu IMC"
        onPress={() => { 
          var imc = Functionalities.calcImc({peso},{altura})
          Alert.alert(imc)
        }}
      />
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="/screens/TabTwoScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  Button:{
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 200,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 200,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
