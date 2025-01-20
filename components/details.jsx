import { ScrollView, StyleSheet, Text, View } from "react-native"
import React from "react"

const Details = () => {
  return (
    <ScrollView>
      <View style={styles.Container}>
        <Text style={{ fontSize: 18, fontWeight: "600" }}>Your Cart</Text>
      </View>
      <View style={styles.itemContainer}>
        <View style={styles.eachItem}>
          <Text>Total Amount</Text>
          <Text>0</Text>
        </View>
        <View style={styles.eachItem}>
          <Text>Promo code</Text>
          <Text>0</Text>
        </View>
        <View style={styles.eachItem}>
          <Text>Delivery Charges</Text>
          <Text>0</Text>
        </View>
        <View style={styles.eachItem}>
          <Text>Total Payable</Text>
          <Text>0</Text>
        </View>
      </View>
    </ScrollView>
  )
}

export default Details

const styles = StyleSheet.create({
  Container: {
    borderTopEndRadius: 10,
    borderTopLeftRadius: 10,
    backgroundColor: "white",
    padding: 12,
  },
  itemContainer: {
    backgroundColor: "#0066b2",
    padding: 12,
    borderRadius: 10,
    marginTop: 10,
  },
  eachItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
})
