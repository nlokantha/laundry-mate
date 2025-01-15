import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import React from "react"
import { FontAwesome, Ionicons } from "@expo/vector-icons"

const AddressContainer = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          gap: 10,
          alignItems: "center",
          justifyContent: "center",
        }}>
        <Ionicons name="location-outline" size={24} color="#034694" />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            flex: 1,
          }}>
          <Text>Home</Text>
          <FontAwesome name="flag" size={24} color="#034694" />
        </View>
      </View>
      <Text style={{ fontSize: 15, fontWeight: "600" }}>
        # 28/69 Werenketagoda Ampara
      </Text>
      <Text style={{ color: "grey" }}>Srilanka 550235</Text>
    </TouchableOpacity>
  )
}

export default AddressContainer

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 1,
    padding: 12,
    borderColor: "#034694",
  },
})
