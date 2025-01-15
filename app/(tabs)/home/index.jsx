import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import React from "react"
import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
  Octicons,
} from "@expo/vector-icons"
import { useRouter } from "expo-router"

const Home = () => {
  const router = useRouter()
  return (
    <ScrollView>
      <View style={styles.headerContainer}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Image
              style={styles.logo}
              source={{
                uri: "https://laundrymate.in/assets/images/shared/branding/Logo.webp",
              }}
            />
          </View>
          <Octicons name="three-bars" size={24} color="white" />
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 20,
            alignItems: "center",
            justifyContent: "space-between",
          }}>
          <View>
            <Text style={{ fontSize: 13, fontWeight: "600" }}>Hi Namal</Text>
            <Text style={{ marginTop: 2, color: "white" }}>
              Home | Ampara 562474
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
            <Ionicons
              name="information-circle-outline"
              size={24}
              color="black"
            />
            <Text style={{ width: 60, fontSize: 12, color: "#0066b2" }}>
              Quick Help
            </Text>
          </View>
        </View>
      </View>
      {/* Quick Order */}
      <View style={styles.quickOrder}>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <Ionicons name="notifications-outline" size={24} color="black" />
          <View>
            <Text
              style={{
                fontSize: 15,
                color: "#0066b2",
                fontFamily: "kailasa-bold",
              }}>
              QUICK ORDER
            </Text>
            <Text style={{ marginTop: 4 }}>
              Book a Pickup and Delivery Option
            </Text>
            <Text>We Will be at your doorstep on time</Text>

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                onPress={() => router.push("/home/address")}
                style={styles.button}>
                <Text style={{ fontSize: 13, fontWeight: "400" }}>
                  BOOK NOW
                </Text>
              </TouchableOpacity>
              <MaterialCommunityIcons name="truck" size={24} color="#034694" />
            </View>
          </View>
        </View>
      </View>
      {/* club/place order */}
      <View
        style={{
          marginTop: 90,
          marginHorizontal: 10,
          alignItems: "center",
          flexDirection: "row",
          gap: 10,
        }}>
        <View
          style={{ padding: 12, borderRadius: 10, backgroundColor: "white" }}>
          <View>
            <Text
              style={{ fontSize: 15, fontWeight: "bold", color: "#FEBE10" }}>
              Club{" "}
              <Text
                style={{ color: "#034694", fontSize: 15, fontWeight: "bold" }}>
                Ultimate
              </Text>
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: 4,
              alignItems: "center",
              gap: 5,
            }}>
            <View style={{ width: 130 }}>
              <Text>Put your landry on Cruise Control</Text>
              <Text>Subscribe and get the benefits</Text>
            </View>
            <AntDesign name="caretright" size={14} color="black" />
          </View>
        </View>
        <View
          style={{ padding: 12, borderRadius: 10, backgroundColor: "white" }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
            }}>
            <Ionicons name="basket-outline" size={24} color="#034694" />
            <View>
              <Text
                style={{ fontSize: 15, fontWeight: "bold", color: "#FEBE10" }}>
                Place Your{" "}
                <Text
                  style={{
                    color: "#034694",
                    fontSize: 15,
                    fontWeight: "bold",
                  }}>
                  Order
                </Text>
              </Text>
              <Text style={{ width: 130 }}>
                Select Items from the catalogue below and book your order.It's
                about time
              </Text>
            </View>
          </View>
        </View>
      </View>
      {/* affordable prices */}
      <View
        style={{
          flexDirection: "row",
          marginTop: 10,
          alignItems: "center",
          gap: 5,
          marginHorizontal: 12,
        }}>
        <View>
          <View
            style={{ padding: 12, borderRadius: 10, backgroundColor: "white" }}>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
              <View>
                <Text
                  style={{ color: "#034694", fontWeight: "600", fontSize: 15 }}>
                  Affordable Prices
                </Text>
                <Text>Get our price List</Text>
              </View>
              <AntDesign name="caretright" size={14} color="black" />
            </View>
          </View>

          <View
            style={{
              padding: 12,
              borderRadius: 10,
              backgroundColor: "white",
              marginTop: 10,
            }}>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
              <View>
                <Text
                  style={{ color: "#034694", fontWeight: "600", fontSize: 15 }}>
                  Affordable Prices
                </Text>
                <Text>Get our price List</Text>
              </View>
              <AntDesign name="caretright" size={14} color="black" />
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: 10,
            padding: 12,
            marginHorizontal: 12,
            gap: 10,
          }}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              color: "#FEBE10",
              width: 130,
            }}>
            WHAT'S THE PLAN{" "}
            <Text
              style={{
                color: "#034694",
                fontSize: 20,
                fontWeight: "bold",
              }}>
              FOR THE PLANET
            </Text>
          </Text>
          <AntDesign name="caretright" size={14} color="black" />
        </View>
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: 20,
        }}>
        <View
          style={{
            backgroundColor: "white",
            borderRadius: 12,
            width: 320,
            justifyContent: "center",
            alignItems: "center",
            padding: 12,
          }}>
          <View style={{ flexDirection: "row", gap: 10 }}>
            <Ionicons name="notifications-outline" size={24} color="black" />
            <Text style={{ color: "#034694", fontSize: 15, fontWeight: "600" }}>
              Next Avaliable
            </Text>
          </View>
          <Text style={{ marginTop: 4 }}>
            Order Within 15 min to catch this pickup Slot
          </Text>
          <TouchableOpacity
            style={{
              borderRadius: 10,
              backgroundColor: "#FEBE10",
              marginHorizontal: 10,
              paddingHorizontal: 10,
              paddingVertical: 5,
              marginTop: 5,
            }}>
            <Text style={{ fontWeight: "600" }}>ADD ITEMS</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 50,
    resizeMode: "cover",
  },
  headerContainer: {
    padding: 12,
    height: 200,
    backgroundColor: "#FEBE10",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  quickOrder: {
    padding: 10,
    backgroundColor: "white",
    borderRadius: 10,
    width: 340,
    marginLeft: "auto",
    marginRight: "auto",
    position: "absolute",
    top: 150,
    left: "50%",
    transform: [{ translateX: -170 }],
  },
  button: {
    backgroundColor: "#FEBE10",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 7,
  },
})
