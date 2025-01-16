import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import React, { useState } from "react"
import { Ionicons } from "@expo/vector-icons"
import moment from "moment"

const PickupSlot = () => {
  const [currentDate, setCurrentDate] = useState(moment())
  const [deliveryDate, setDeliveryDate] = useState(moment())
  const [selectedTime, setSelectedTime] = useState(null)
  const [selectedDeliveryTime, setSelectedDeliveryTime] = useState(null)
  const [selectedDate, setSelectedDate] = useState(moment())

  const getNext6Days = () => {
    const nextDays = []

    for (let i = 0; i < 5; i++) {
      const nextDate = moment(currentDate).add(i, "days")
      nextDays.push(nextDate)
    }

    return nextDays
  }

  const renderDateButton = () => {
    const next6Days = getNext6Days()

    return next6Days.map((date, index) => (
      <TouchableOpacity
        onPress={() => setSelectedDate(date)}
        key={index}
        style={[
          styles.days,
          {
            backgroundColor: selectedDate?.isSame(date, "day")
              ? "#034694"
              : "white",
          }, // Highlight selected date
        ]}>
        <Text
          style={{
            color: selectedDate?.isSame(date, "day") ? "white" : "black",
          }}>
          {date?.format("D")}
        </Text>
        <Text
          style={{
            color: selectedDate?.isSame(date, "day") ? "white" : "black",
          }}>
          {date?.format("ddd")}
        </Text>
      </TouchableOpacity>
    ))
  }

  //   console.log(currentDate)
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="location-outline" size={24} color="black" />
        <View>
          <Text style={{ fontSize: 16 }}>PickUp Slot</Text>
          <Text style={{ fontSize: 16, fontWeight: "500", marginTop: 4 }}>
            {currentDate.format("MMMM YYYY")}
          </Text>
        </View>
      </View>
      {/* Date Buttons */}
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 10,
          marginVertical: 10,
        }}>
        {renderDateButton()}
      </View>
      {/* pickup time */}
      <View>
        <Text>PickUp Time Options</Text>
      </View>
    </View>
  )
}

export default PickupSlot

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop: 10,
    backgroundColor: "white",
    borderRadius: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  days: {
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    flex: 1,
    borderWidth: 1,
    borderColor: "#034694",
  },
})
