import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Entypo, Feather, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import AddressContainer from "@/components/addressContainer";
import PickupSlot from "@/components/pickupSlot";
import moment from "moment";
import EditPickupSlot from "@/components/editPickupSlot";

const Address = () => {
  const router = useRouter();
  const [select, setSelect] = useState(false);
  const [step, setStep] = useState(1);

  const [currentDate, setCurrentDate] = useState(moment());
  const [deliveryDate, setDeliveryDate] = useState(moment());
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedDeliveryTime, setSelectedDeliveryTime] = useState(null);
  const [selectedDate, setSelectedDate] = useState(moment());

  const handleBack = () => {
    setStep((prevStep) => (prevStep > 1 ? prevStep - 1 : prevStep));
  };

  const handleNext = () => {
    setStep((prevStep) => {
      const nextStep = prevStep + 1;
      console.log("next Step ", nextStep);

      // check if next step equal to 4
      if (nextStep == 4) {
        // call the place order function
      }

      return nextStep;
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View
          style={{ backgroundColor: "white", borderRadius: 10, padding: 5 }}
        >
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
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: "600" }}>
            Choose Your Address
          </Text>
          <View
            style={{ backgroundColor: "white", borderRadius: 10, padding: 5 }}
          >
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
        }}
      >
        <Pressable
          style={{
            width: 35,
            height: 35,
            backgroundColor: "grey",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
          }}
        >
          <Ionicons name="chevron-back" size={24} color="white" />
        </Pressable>
        <Pressable
          style={{
            width: 50,
            height: 50,
            backgroundColor: "#F5F5F5",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
          }}
        >
          <Ionicons name="location-outline" size={24} color="#0066B2" />
        </Pressable>

        <Pressable
          style={{
            width: 50,
            height: 50,
            backgroundColor: "#F5F5F5",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
          }}
        >
          <Entypo name="back-in-time" size={24} color="#0066B2" />
        </Pressable>

        <Pressable
          style={{
            width: 35,
            height: 35,
            backgroundColor: "grey",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
          }}
        >
          <Ionicons name="chevron-forward" size={24} color="white" />
        </Pressable>
      </View>
      {/* everything */}
      <View style={styles.everything}>
        <ScrollView>
          {step == 1 && (
            <View>
              <TouchableOpacity
                style={{ flexDirection: "row", gap: 10, alignItems: "center" }}
              >
                <Feather name="plus" size={24} color="black" />
                <Text>Add Address</Text>
              </TouchableOpacity>
              <View style={styles.addressList}>
                <AddressContainer />
              </View>
            </View>
          )}
          {step == 2 && (
            <PickupSlot
              currentDate={currentDate}
              setCurrentDate={setCurrentDate}
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
              selectedTime={selectedTime}
              setSelectedTime={setSelectedTime}
            />
          )}
          {step == 3 && (
            <EditPickupSlot
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
              selectedTime={selectedTime}
              setSelectedTime={setSelectedTime}
            />
          )}
        </ScrollView>
      </View>

      {/* back and next buttons */}
      <View style={styles.footer}>
        <Pressable
          disabled={step === 1}
          onPress={handleBack}
          style={{
            padding: 15,
            borderRadius: 10,
            backgroundColor: "#d0d0d0",
            flex: 1,
          }}
        >
          <Text style={{ textAlign: "center", fontWeight: "500" }}>Back</Text>
        </Pressable>
        <Pressable
          onPress={handleNext}
          style={{
            padding: 15,
            borderRadius: 10,
            backgroundColor: "#0066b2",
            flex: 1,
          }}
        >
          <Text
            style={{ textAlign: "center", fontWeight: "500", color: "white" }}
          >
            {step === 4 ? "Place Order" : "Next"}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Address;

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
  everything: {
    padding: 10,
    flex: 1,
    backgroundColor: "#f0f8ff",
  },
  addressList: {
    marginTop: 10,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
    padding: 12,
    backgroundColor: "white",
  },
});
