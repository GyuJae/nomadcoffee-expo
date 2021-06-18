import { gql, useMutation } from "@apollo/client";
import React, { useRef } from "react";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import AuthButton from "../components/auth/AuthButton";
import AuthLayout from "../components/auth/AuthLayout";
import { TextInput } from "../components/auth/AuthShared";
import {
  createAccount,
  createAccountVariables,
} from "../operation-result-types";

type CreateAccountInputs = {
  name: string;
  location: string;
  username: string;
  email: string;
  password: string;
};

const CREATEACCOUNT_MUTATION = gql`
  mutation createAccount(
    $email: String!
    $username: String!
    $password: String!
    $name: String!
    $location: String!
  ) {
    createAccount(
      email: $email
      username: $username
      password: $password
      name: $name
      location: $location
    ) {
      ok
      error
    }
  }
`;

export default function CreateAccount({ navigation }: any) {
  const { register, handleSubmit, setValue, getValues } =
    useForm<CreateAccountInputs>();
  const usernameRef = useRef<any>();
  const locationRef = useRef<any>();
  const emailRef = useRef<any>();
  const passwordRef = useRef<any>();

  const [createAccountMutation, { loading }] = useMutation<
    createAccount,
    createAccountVariables
  >(CREATEACCOUNT_MUTATION, {
    onCompleted: (data) => {
      const {
        createAccount: { ok },
      } = data;
      const { username, password } = getValues();
      if (ok) {
        navigation.navigate("Login", {
          username,
          password,
        });
      }
    },
  });

  const onNext = (nextOne: any) => {
    nextOne?.current?.focus();
  };

  const onValid: SubmitHandler<CreateAccountInputs> = (data: any) => {
    if (!loading) {
      createAccountMutation({
        variables: {
          ...data,
        },
      });
    }
  };

  useEffect(() => {
    register("name", {
      required: true,
    });
    register("location", {
      required: true,
    });
    register("username", {
      required: true,
    });
    register("email", {
      required: true,
    });
    register("password", {
      required: true,
    });
  }, [register]);
  return (
    <AuthLayout>
      <TextInput
        placeholder="Name"
        returnKeyType="next"
        onSubmitEditing={() => onNext(locationRef)}
        placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
        onChangeText={(text: any) => setValue("name", text)}
      />
      <TextInput
        ref={locationRef}
        placeholder="location"
        returnKeyType="next"
        onSubmitEditing={() => onNext(usernameRef)}
        placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
        onChangeText={(text: any) => setValue("location", text)}
      />
      <TextInput
        ref={usernameRef}
        placeholder="Username"
        autoCapitalize="none"
        returnKeyType="next"
        onSubmitEditing={() => onNext(emailRef)}
        placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
        onChangeText={(text: any) => setValue("username", text)}
      />
      <TextInput
        ref={emailRef}
        placeholder="Email"
        autoCapitalize="none"
        keyboardType="email-address"
        returnKeyType="next"
        onSubmitEditing={() => onNext(passwordRef)}
        placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
        onChangeText={(text: any) => setValue("email", text)}
      />
      <TextInput
        ref={passwordRef}
        placeholder="Password"
        secureTextEntry
        returnKeyType="done"
        placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
        onChangeText={(text: any) => setValue("password", text)}
        onSubmitEditing={handleSubmit(onValid)}
      />
      <AuthButton
        text="Create Account"
        loading={loading}
        disabled={false}
        onPress={handleSubmit(onValid)}
      />
    </AuthLayout>
  );
}
