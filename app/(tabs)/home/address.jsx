import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import React, { useState } from "react"
import { Entypo, Feather, Ionicons } from "@expo/vector-icons"
import { useRouter } from "expo-router"
import AddressContainer from "@/components/addressContainer"

const Address = () => {
  const router = useRouter()
  const [select, setSelect] = useState(false)
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View
          style={{ backgroundColor: "white", borderRadius: 10, padding: 5 }}>
          <Ionicons
            onPress={() => router.back()}
            name="chevron-back"
            size={24}
            color="black"
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            flex: 1,
            alignItems: "center",
          }}>
          <Text style={{ fontSize: 15, fontWeight: "600" }}>
            Choose Your Address
          </Text>
          <View
            style={{ backgroundColor: "white", borderRadius: 10, padding: 5 }}>
            <Entypo name="cross" size={24} color="black" />
          </View>
        </View>
      </View>
      {/* navigations */}
      <View
        style={{
          flexDirection: "row",
          gap: 10,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
          padding: 12,
        }}>
        <Pressable
          style={{
            width: 35,
            height: 35,
            backgroundColor: "grey",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
          }}>
          <Ionicons name="chevron-back" size={24} color="white" />
        </Pressable>
        <Pressable
          style={{
            width: 50,
            height: 50,
            backgroundColor: "grey",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
          }}>
          <Ionicons name="location-outline" size={24} color="white" />
        </Pressable>

        <Pressable
          style={{
            width: 50,
            height: 50,
            backgroundColor: "grey",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
          }}>
          <Entypo name="back-in-time" size={24} color="white" />
        </Pressable>

        <Pressable
          style={{
            width: 35,
            height: 35,
            backgroundColor: "grey",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
          }}>
          <Ionicons name="chevron-forward" size={24} color="white" />
        </Pressable>
      </View>
      {/* add new address and map Address */}
      <View style={styles.addressContainer}>
        <TouchableOpacity
          style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
          <Feather name="plus" size={24} color="black" />
          <Text>Add Address</Text>
        </TouchableOpacity>
        <View style={styles.addressList}>
          <AddressContainer />
        </View>
      </View>
    </View>
  )
}

export default Address

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 12,
    backgroundColor: "#FEBE10",
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  addressContainer: {
    padding: 10,
  },
  addressList: {
    marginTop: 10,
  },
})
