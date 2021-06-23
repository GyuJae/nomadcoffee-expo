import React from "react";
import Login from "../screens/Login";
import CreateAccount from "../screens/CreateAccount";
import List from "../screens/List";
import Search from "../screens/Search";
import Profile from "../screens/Profile";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default ({ screenName }: any) => {
  return (
    <Stack.Navigator>
      {screenName === "List" ? (
        <Stack.Screen name="List" component={List} />
      ) : null}
      {screenName === "Search" ? (
        <Stack.Screen name="Search" component={Search} />
      ) : null}
      {screenName === "Profile" ? (
        <Stack.Screen name="Profile" component={Profile} />
      ) : null}
      {screenName === "Login" ? (
        <Stack.Screen name="Login" component={Login} />
      ) : null}
      {screenName === "CreateAccount" ? (
        <Stack.Screen name="CreateAccount" component={CreateAccount} />
      ) : null}
    </Stack.Navigator>
  );
};
