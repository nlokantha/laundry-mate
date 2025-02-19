import { Image, Pressable, StyleSheet, Text, View } from "react-native"
import React from "react"

const SelectedOptions = ({ selectedOption, setSelectedOption }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        marginVertical: 10,
      }}>
      <Pressable
        onPress={() => setSelectedOption("Wash + fold")}
        style={{
          backgroundColor: "white",
          width: 80,
          height: 80,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 5,
          borderWidth: 1,
          borderColor:
            selectedOption == "Wash + fold" ? "#0066b2" : "transparent",
        }}>
        <Image
          style={{ width: 50, height: 50 }}
          source={{
            uri: "https://cdn-icons-png.flaticon.com/128/7769/7769829.png",
          }}
        />
        <Text style={{ fontSize: 12, marginTop: 5, alignItems: "center" }}>
          Wash + Fold
        </Text>
      </Pressable>
      <Pressable
        onPress={() => setSelectedOption("Wash + Iron")}
        style={{
          backgroundColor: "white",
          width: 80,
          height: 80,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 5,
          borderWidth: 1,
          borderColor:
            selectedOption == "Wash + Iron" ? "#0066b2" : "transparent",
        }}>
        <Image
          style={{ width: 50, height: 50 }}
          source={{
            uri: "https://cdn-icons-png.flaticon.com/128/7769/7769829.png",
          }}
        />
        <Text style={{ fontSize: 12, marginTop: 5, alignItems: "center" }}>
          Wash + Iron
        </Text>
      </Pressable>
      <Pressable
        onPress={() => setSelectedOption("Steam Iron")}
        style={{
          backgroundColor: "white",
          width: 80,
          height: 80,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 5,
          borderWidth: 1,
          borderColor:
            selectedOption == "Steam Iron" ? "#0066b2" : "transparent",
        }}>
        <Image
          style={{ width: 50, height: 50 }}
          source={{
            uri: "https://cdn-icons-png.flaticon.com/128/7769/7769829.png",
          }}
        />
        <Text style={{ fontSize: 12, marginTop: 5, alignItems: "center" }}>
          Steam Iron
        </Text>
      </Pressable>
      <Pressable
        onPress={() => setSelectedOption("Dry Clean")}
        style={{
          backgroundColor: "white",
          width: 80,
          height: 80,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 5,
          borderWidth: 1,
          borderColor:
            selectedOption == "Dry Clean" ? "#0066b2" : "transparent",
        }}>
        <Image
          style={{ width: 50, height: 50 }}
          source={{
            uri: "https://cdn-icons-png.flaticon.com/128/7769/7769829.png",
          }}
        />
        <Text style={{ fontSize: 12, marginTop: 5, alignItems: "center" }}>
          Dry Clean
        </Text>
      </Pressable>
    </View>
  )
}

export default SelectedOptions

const styles = StyleSheet.create({})
