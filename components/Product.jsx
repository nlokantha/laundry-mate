import { Image, Pressable, StyleSheet, Text, View } from "react-native"
import React from "react"
import { AntDesign } from "@expo/vector-icons"
import { useDispatch, useSelector } from "react-redux"
import {
  addToCart,
  decrementQuantity,
  incrementQuantity,
} from "@/redux/CartReducer"

const Product = ({ item, index, selectedOption }) => {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart.cart)
  return (
    <View
      key={index}
      style={{
        flexDirection: "row",
        paddingVertical: 15,
        borderRadius: 10,
        backgroundColor: "lightgrey",
        marginVertical: 10,
        marginHorizontal: 10,
        gap: 10,
        alignItems: "center",
      }}>
      <Image
        source={{ uri: item.image }}
        style={{ width: 50, width: 50, resizeMode: "contain" }}
      />
      <View style={{ flex: 1 }}>
        <Text>{item.name}</Text>
        <Text>
          ${" "}
          {selectedOption == "Wash + Iron"
            ? item.price + 20
            : selectedOption == "Steam Iron"
            ? item.price + 35
            : selectedOption == "Dry Clean"
            ? item.price + 45
            : item.price}
        </Text>
      </View>
      {cart.some((c) => c.item.id == item.id) ? (
        <View style={{ flexDirection: "row", gap: 20, padding: 10 }}>
          <Pressable onPress={() => dispatch(decrementQuantity(item))}>
            <Text>-</Text>
          </Pressable>
          <Text>{cart.find((c) => c.item.id === item.id)?.item.quantity}</Text>
          <Pressable onPress={() => dispatch(incrementQuantity(item))}>
            <Text>+</Text>
          </Pressable>
        </View>
      ) : (
        <Pressable
          onPress={() => {
            dispatch(
              addToCart({
                item,
                category: selectedOption,
              })
            )
          }}
          style={{ marginRight: 15 }}>
          <AntDesign name="pluscircleo" size={24} color="#89CFF0" />
        </Pressable>
      )}
    </View>
  )
}

export default Product

const styles = StyleSheet.create({})
