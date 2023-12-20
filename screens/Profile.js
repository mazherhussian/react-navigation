import React from "react";
import { View, Text } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
const Tab = createMaterialTopTabNavigator();

export function ProfileScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Screen1" component={Screen1} />
      <Tab.Screen name="Screen2" component={Screen2} />
    </Tab.Navigator>
  );
}

function Screen1() {
  return (
    <View>
      <Text> Screen1</Text>
    </View>
  );
}
function Screen2() {
  return (
    <View>
      <Text> Screen1</Text>
    </View>
  );
}
