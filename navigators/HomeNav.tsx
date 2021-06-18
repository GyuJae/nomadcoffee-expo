import React from "react";
import TabIcon from "../components/nav/TabIcon";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import List from "../screens/List";
import Search from "../screens/Search";
import Profile from "../screens/Profile";
import Login from "../screens/Login";

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
        component={List}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <TabIcon iconName="home" color={color} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <TabIcon iconName="search" color={color} focused={focused} />
          ),
        }}
      />
      {isLoggedIn ? (
        <Tabs.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ focused, color }) => (
              <TabIcon iconName="person" color={color} focused={focused} />
            ),
          }}
        />
      ) : (
        <Tabs.Screen
          name="Login"
          component={Login}
          options={{
            tabBarIcon: ({ focused, color }) => (
              <TabIcon iconName="person" color={color} focused={focused} />
            ),
          }}
        />
      )}
    </Tabs.Navigator>
  );
};
