import { router } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

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
    </View>
  );
};

export default ShoppingScreen;
