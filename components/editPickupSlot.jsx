import { StyleSheet, Text, View } from "react-native"
import React from "react"
import { AntDesign, Ionicons } from "@expo/vector-icons"
import moment from "moment"

const EditPickupSlot = ({
  selectedDate,
  setSelectedDate,
  selectedTime,
  setSelectedTime,
}) => {
  console.log(selectedTime)
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: "white", borderRadius: 10, padding: 10 }}>
        {/* header */}
        <View style={styles.header}>
          <Ionicons name="location-outline" size={24} color="black" />
          <View style={styles.header_sub}>
            <Text>PickUp Slot</Text>
            <AntDesign name="edit" size={24} color="black" />
          </View>
        </View>
        {/* selected Items */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            flex: 1,
            padding: 10,
            alignItems: "center",
          }}>
          <View style={styles.days}>
            <Text style={{ color: "white" }}>{selectedDate.format("D")}</Text>
            <Text style={{ color: "white" }}>{selectedDate.format("ddd")}</Text>
          </View>
          <View style={styles.time}>
            <Text
              style={{
                color: "white",
              }}>{`${selectedTime?.startTime} - ${selectedTime?.endTime}`}</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default EditPickupSlot

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  header_sub: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  days: {
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#034694",
    backgroundColor: "#034694",
  },
  time: {
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#034694",
    backgroundColor: "#034694",
  },
})
