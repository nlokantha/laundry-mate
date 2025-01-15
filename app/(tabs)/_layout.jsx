import { Tabs } from "expo-router"
import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"
import { theme } from "../../constants/theme"

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: "Home",
          headerShown: false,
          tabBarLabelStyle: { color: "black" },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Feather name="home" size={24} color={theme.colors.primary} />
            ) : (
              <Feather name="home" size={24} color={"black"} />
            ),
        }}
      />
      <Tabs.Screen
        name="basket"
        options={{
          tabBarLabel: "Basket",
          headerShown: false,
          tabBarLabelStyle: { color: "black" },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons
                name="basket-outline"
                size={24}
                color={theme.colors.primary}
              />
            ) : (
              <Ionicons name="basket-outline" size={24} color="black" />
            ),
        }}
      />
      <Tabs.Screen
        name="oders"
        options={{
          tabBarLabel: "Oders",
          headerShown: false,
          tabBarLabelStyle: { color: "black" },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <MaterialCommunityIcons
                name="account-details"
                size={24}
                color={theme.colors.primary}
              />
            ) : (
              <MaterialCommunityIcons
                name="account-details"
                size={24}
                color="black"
              />
            ),
        }}
      />
    </Tabs>
  )
}
