import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { router } from "expo-router";

const Basket = () => {

  return (
    <View>
      <View
        style={{
          backgroundColor: "#0066b2",
          padding: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: 500, color: "white" }}>
          Basket Total
        </Text>
        <View>
          <Text style={{ fontSize: 17, color: "white" }}>Rs 0</Text>
          <Text style={{ fontSize: 17, color: "white" }}>FOR 0 ITEMS </Text>
        </View>
      </View>
      <View
        style={{
          padding: 10,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
          borderRadius: 7,
          marginVertical: 20,
          marginHorizontal: 10,
          height: 200,
        }}
      >
        <Text>YOUR BASKET IS EMPTY</Text>
      </View>
      <Pressable
        onPress={()=>router.push("/(tabs)/basket/select")}
        style={{
          marginTop: 30,
          padding: 15,
          width: 200,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0066b2",
          borderRadius: 10,
          marginRight: "auto",
          marginLeft: "auto",
        }}
      >
        <Text style={{ color: "white" }}>Place an Order</Text>
      </Pressable>
    </View>
  );
};

export default Basket;

const styles = StyleSheet.create({});
