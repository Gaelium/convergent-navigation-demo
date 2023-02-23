import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MammalNavigator } from "./src/pages/Mammals";
import { NavigationContainer } from "@react-navigation/native";
import { BirdNavigator } from "./src/pages/Birds";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
export default function App() {
  const [dogVote, setDogVote] = React.useState(0);
  const [catVote, setCatVote] = React.useState(0);
  const [platypusVote, setPlatypusVote] = React.useState(0);
  const [duckVote, setDuckVote] = React.useState(0);
  const [parrotVote, setParrotVote] = React.useState(0);
  const [gooseVote, setGooseVote] = React.useState(0);

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Mammal"
          children={() => (
            <MammalNavigator
              dogVote={dogVote}
              catVote={catVote}
              platypusVote={platypusVote}
              setDogVote={setDogVote}
              setCatVote={setCatVote}
              setPlatypusVote={setPlatypusVote}
            />
          )}
          options={{
            headerShown: false,
          }}
        />

        <Tab.Screen
          name="Bird"
          children={() => (
            <BirdNavigator
              duckVote={duckVote}
              parrotVote={parrotVote}
              gooseVote={gooseVote}
              setDuckVote={setDuckVote}
              setParrotVote={setParrotVote}
              setGooseVote={setGooseVote}
            />
          )}
          options={{
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
