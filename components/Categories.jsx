import { Pressable, StyleSheet, Text, View } from "react-native"
import React from "react"

const Categories = ({ option, setOption, category }) => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
      {category.map((item, index) => {
        return (
          <View>
            <Pressable
              onPress={() => setOption(item)}
              key={index}
              style={[
                styles.categories,
                { backgroundColor: option == item ? "#0066b2" : "white" },
              ]}>
              <Text
                style={{
                  color: option == item ? "white" : "black",
                }}>
                {item}
              </Text>
            </Pressable>
          </View>
        )
      })}
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
  categories: {
    borderRadius: 5,
    padding: 10,
  },
})
