import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Pressable,
  FlatList
} from "react-native";
import React from "react";
import { Icon } from "react-native-elements";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    content: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    content: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    content: "Third Item",
  },
];

const TaskList = () => {
  return (
    <View style={{ width: "100%", flex: 1, paddingHorizontal: 10 }}>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          height: 50,
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        <TouchableOpacity>
          <Text>Back</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: "row" }}>
          <Image
            style={{ width: 50, height: 50, borderRadius: 25 }}
            source={{
              uri: "https://reactnative.dev/img/tiny_logo.png",
            }}
          />
          <View>
            <Text>Name</Text>
            <Text>Description</Text>
          </View>
        </View>
      </View>
      <View style={{ flex: 1, marginTop: 10 }}>
        <TextInput
          style={{
            borderColor: "#ccc",
            borderWidth: 1,
            width: "100%",
            height: 40,
          }}
          placeholder="Search here"
        ></TextInput>
        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "#ccc",
                width: "100%",
                height: 50,
                borderRadius: 5,
                alignItems: "center",
                marginTop: 10,
                paddingHorizontal: 10,
              }}
            >
              <Icon
                name="done-outline"
                style={{ backgroundColor: "green", marginRight: 10 }}
              ></Icon>
              <Text style={{ width: "80%" }}>{item.content}</Text>
              <TouchableOpacity>
                <Icon name="edit"></Icon>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            backgroundColor: "aqua",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon name="add"></Icon>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TaskList;
