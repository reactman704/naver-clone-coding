import { router } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const ShoppingScreen = () => {
  return (
    <View>
      <Text>ShoppingScreen</Text>
      <TouchableOpacity
        onPress={() => {
          router.navigate({
            pathname: "../browser",
          });
        }}
      >
        <Text>Go to browser</Text>
      </TouchableOpacity>
      <MaterialCommunityIcons name="shopping" size={50} color="red" />
    </View>
  );
};

export default ShoppingScreen;
