import { gql, useLazyQuery } from "@apollo/client";
import React from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  Text,
  View,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import styled from "styled-components/native";
import DismissKeyboard from "../components/DismissKeyboard";

const Input = styled.TextInput``;

interface ISearch {
  keyword: string;
}

const SEARCH_SHOPS = gql`
  query searchShops($keyword: String!) {
    searchPhotos(keyword: $keyword) {
      shops {
        id
        name
      }
    }
  }
`;

export default ({ navigation }: any) => {
  const { setValue, register, watch, handleSubmit } = useForm<ISearch>();
  const [startQueryFn, { loading, data, called }] = useLazyQuery(SEARCH_SHOPS);
  const onValid = ({ keyword }: any) => {
    startQueryFn({
      variables: {
        keyword,
      },
    });
  };
  const SearchBox = () => (
    <TextInput
      style={{ backgroundColor: "white" }}
      placeholderTextColor="black"
      placeholder="Search Photos"
      autoCapitalize="none"
      returnKeyLabel="Search"
      returnKeyType="search"
      autoCorrect={false}
      onChangeText={(text) => setValue("keyword", text)}
      onSubmitEditing={handleSubmit(onValid)}
    />
  );
  useEffect(() => {
    navigation.setOptions({
      headerTitle: SearchBox,
    });
    register("keyword");
  }, []);
  return (
    <DismissKeyboard>
      <View
        style={{
          backgroundColor: "black",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {loading ? <ActivityIndicator size="large" /> : null}
        {!called ? <Text>Search by keyword</Text> : null}
        {data?.searchShops !== undefined && data?.searchShops?.length === 0 ? (
          <Text>Could not find anything.</Text>
        ) : (
          <Text>{data?.searchShops.shops}</Text>
        )}
      </View>
    </DismissKeyboard>
  );
};
