import { gql, useQuery } from "@apollo/client";
import React from "react";
import { FlatList, View, Text, ActivityIndicator } from "react-native";
import {
  seeCoffeeShops,
  seeCoffeeShopsVariables,
} from "../operation-result-types";
import ScreenLayout from "../components/ScreenLayout";
import { useState } from "react";

const SEECOFFEESHOPS_QUERY = gql`
  query seeCoffeeShops($page: Int!) {
    seeCoffeeShops(page: $page) {
      ok
      error
      shops {
        id
        name
      }
    }
  }
`;

export default () => {
  const { data, loading, refetch, fetchMore } = useQuery<
    seeCoffeeShops,
    seeCoffeeShopsVariables
  >(SEECOFFEESHOPS_QUERY, {
    variables: {
      page: 1,
    },
  });
  const refresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };
  const [refreshing, setRefreshing] = useState(false);
  const renderItem = ({ item }: any) => (
    <View
      style={{
        backgroundColor: "black",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ color: "white", marginTop: "20px" }}>{item?.name}</Text>
    </View>
  );
  console.log("List:::::", data?.seeCoffeeShops.error, loading);

  return (
    /*
    <ScreenLayout loading={loading}>
      <FlatList
        onEndReachedThreshold={0.05}
        onEndReached={() =>
          fetchMore({
            variables: {
              page: data?.seeCoffeeShops.shops?.length,
            },
          })
        }
        data={data?.seeCoffeeShops.shops}
        refreshing={refreshing}
        onRefresh={refresh}
        style={{ width: "100%" }}
        keyExtractor={(shop) => "" + shop?.id}
        renderItem={renderItem}
      />
    </ScreenLayout>
    */
    <View>
      {loading ? (
        <ActivityIndicator color="white" />
      ) : (
        <Text>{data?.seeCoffeeShops}</Text>
      )}
    </View>
  );
};
