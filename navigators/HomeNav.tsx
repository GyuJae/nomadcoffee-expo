import React from "react";
import TabIcon from "../components/nav/TabIcon";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import SharedStackNav from "./SharedStackNav";

const Tabs = createBottomTabNavigator();

export default ({ isLoggedIn }: any) => {
  return (
    <Tabs.Navigator
      tabBarOptions={{
        activeTintColor: "white",
        showLabel: false,
        style: {
          borderTopColor: "rgba(255, 255, 255, 0.3)",
          backgroundColor: "black",
        },
      }}
    >
      <Tabs.Screen
        name="List"
        options={{
          tabBarIcon: ({ focused, color }) => (
            <TabIcon iconName="home" color={color} focused={focused} />
          ),
        }}
      >
        {() => <SharedStackNav screenName="List" />}
      </Tabs.Screen>
      <Tabs.Screen
        name="Search"
        options={{
          tabBarIcon: ({ focused, color }) => (
            <TabIcon iconName="search" color={color} focused={focused} />
          ),
        }}
      >
        {() => <SharedStackNav screenName="Search" />}
      </Tabs.Screen>
      {isLoggedIn ? (
        <Tabs.Screen
          name="Profile"
          options={{
            tabBarIcon: ({ focused, color }) => (
              <TabIcon iconName="person" color={color} focused={focused} />
            ),
          }}
        >
          {() => <SharedStackNav screenName="Profile" />}
        </Tabs.Screen>
      ) : (
        <Tabs.Screen
          name="Login"
          options={{
            tabBarIcon: ({ focused, color }) => (
              <TabIcon iconName="person" color={color} focused={focused} />
            ),
          }}
        >
          {() => <SharedStackNav screenName="Login" />}
        </Tabs.Screen>
      )}
    </Tabs.Navigator>
  );
};
