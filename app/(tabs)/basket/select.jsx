import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native"
import React, { useEffect, useState } from "react"
import { Feather, Ionicons, Octicons } from "@expo/vector-icons"
import { router } from "expo-router"
import SelectedOptions from "@/components/SelectedOptions"
import Categories from "@/components/Categories"
import Product from "@/components/Product"

const Select = () => {
  const category = ["Men", "Women", "Kids", "Houseold"]
  const [option, setOption] = useState("Men")
  const [selectedOption, setSelectedOption] = useState("Wash + fold")
  const [data, setData] = useState([])
  const menData = [
    {
      id: "0",
      image: "https://cdn-icons-png.flaticon.com/128/776/776623.png",
      name: "Pant Standard Pack",
      price: 75,
    },
    {
      id: "1",
      image: "https://cdn-icons-png.flaticon.com/128/2806/2806045.png",
      name: "Dhoti Standard Pack",
      price: 80,
    },

    {
      id: "2",
      image: "https://cdn-icons-png.flaticon.com/128/892/892458.png",
      name: "Half T-Shirt Standard Pack",
      price: 60,
    },
    {
      id: "3",
      image: "https://cdn-icons-png.flaticon.com/128/3531/3531849.png",
      name: "Shirt Standard Pack",
      price: 85,
    },
    {
      id: "8",
      image: "https://cdn-icons-png.flaticon.com/128/2405/2405604.png",
      name: "Men Shorts",
      price: 85,
    },
  ]
  const womenData = [
    {
      id: "10",
      image: "https://cdn-icons-png.flaticon.com/128/1348/1348247.png",
      name: "Women Jeans Pack",
      price: 75,
    },
    {
      id: "11",
      image: "https://cdn-icons-png.flaticon.com/128/6183/6183080.png",
      name: "Women Kurta",
      price: 80,
    },

    {
      id: "12",
      image: "https://cdn-icons-png.flaticon.com/128/5980/5980963.png",
      name: "Women Sweatshirt Pack",
      price: 60,
    },
    {
      id: "13",
      image: "https://cdn-icons-png.flaticon.com/128/5386/5386732.png",
      name: "Women Leggings Cloth",
      price: 85,
    },
    {
      id: "15",
      image: "https://cdn-icons-png.flaticon.com/128/8491/8491258.png",
      name: "Women Cloth Tops",
      price: 85,
    },
  ]
  const kidsData = [
    {
      id: "20",
      image: "https://cdn-icons-png.flaticon.com/128/6609/6609556.png",
      name: "Kids Dress",
      price: 75,
    },
    {
      id: "21",
      image: "https://cdn-icons-png.flaticon.com/128/1083/1083825.png",
      name: "Kids Frock Dress",
      price: 80,
    },

    {
      id: "22",
      image: "https://cdn-icons-png.flaticon.com/128/405/405130.png",
      name: "Kids T-Shirt Cloth",
      price: 60,
    },
    {
      id: "23",
      image: "https://cdn-icons-png.flaticon.com/128/5386/5386732.png",
      name: "Kids Sweater",
      price: 85,
    },
  ]
  const houseData = [
    {
      id: "30",
      image: "https://cdn-icons-png.flaticon.com/128/11543/11543825.png",
      name: "Home Apron",
      price: 75,
    },
    {
      id: "31",
      image: "https://cdn-icons-png.flaticon.com/128/5696/5696987.png",
      name: "Home Bath Towel",
      price: 80,
    },

    {
      id: "32",
      image: "https://cdn-icons-png.flaticon.com/128/1026/1026562.png",
      name: "Home Mats",
      price: 60,
    },
    {
      id: "33",
      image: "https://cdn-icons-png.flaticon.com/128/9096/9096915.png",
      name: "Home Pillow covers",
      price: 85,
    },
  ]

  useEffect(() => {
    setData(getCategoryData(option))
  }, [option])

  const getCategoryData = (option) => {
    switch (option) {
      case "Men":
        return menData
      case "Women":
        return womenData
      case "Kids":
        return kidsData
      case "Houseold":
        return houseData
      default:
        return []
    }
  }

  return (
    <ScrollView>
      <View style={{ backgroundColor: "#FEBE10", padding: 12 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 20,
          }}>
          <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
            <Ionicons
              onPress={() => router.back()}
              name="chevron-back"
              size={24}
              color="black"
            />
            <Text>Our Laundry List</Text>
          </View>
          <View style={{ flexDirection: "row", gap: 10 }}>
            <Feather name="search" size={24} color="black" />
            <Octicons name="three-bars" size={24} color="black" />
          </View>
        </View>
      </View>
      <SelectedOptions
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
      <Categories option={option} setOption={setOption} category={category} />
      <View>
        {data.map((item, index) => {
          return (
            <View key={index}>
              <Product
                item={item}
                index={index}
                selectedOption={selectedOption}
              />
            </View>
          )
        })}
      </View>
    </ScrollView>
  )
}

export default Select

const styles = StyleSheet.create({})
