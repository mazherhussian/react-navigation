import "react-native-gesture-handler";
import { View, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
const Drawer = createDrawerNavigator();
export function HomeScreen() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Screen1" component={Screen1} />
      <Drawer.Screen name="Screen2" component={Screen2} />
    </Drawer.Navigator>
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





// import React from "react";
// import { View, Text } from "react-native";
// export function HomeScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text>Home</Text>
//     </View>
//   );
// }
