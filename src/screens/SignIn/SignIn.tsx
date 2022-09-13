import React from "react";
import {Text, View, TextInput} from "react-native";
import {styles} from "./styles";

import {useSafeAreaInsets} from "react-native-safe-area-context";

import {ShadowBox} from "../../components/ShadowBox";
import {Button} from "../../components/Button";

import {useForm, Controller} from "react-hook-form";

import {getUsers} from "../../store/users/thunk";
import {selectLoading} from "../../store/users/selectors";
import {useAppDispatch, useAppSelector} from "../../store";

import {useNavigation, StackActions} from '@react-navigation/native';

import {AUTH_CREDENTIALS} from "../../constants/auth";

interface FormData {
  login: string;
  password: string;
}

const inputRules = {
  required: true
}

export const SignIn = () => {
  const dispatch = useAppDispatch();
  const {bottom} = useSafeAreaInsets();
  const navigation = useNavigation();

  const loading = useAppSelector(selectLoading);

  const {control, handleSubmit, setError} = useForm<FormData>({
    defaultValues: {
      login: "",
      password: ""
    }
  });

  const onSubmit = (formData: FormData) => {
    const login = formData.login.toLowerCase();
    const password = formData.password.toLowerCase();

    if (
      login === AUTH_CREDENTIALS.login &&
      password === AUTH_CREDENTIALS.password
    ) {
      dispatch(getUsers()).unwrap().then(() => {
        navigation.dispatch(
          StackActions.replace('Posts')
        );
      });
    } else {
      if (login !== AUTH_CREDENTIALS.login) {
        setError("login", {message: "error"})
      }
      if (password !== AUTH_CREDENTIALS.password) {
        setError("password", {message: "error"})
      }
    }
  }

  return (
    <View style={[styles.container, {paddingBottom: bottom}]}>
      <ShadowBox style={styles.formContainer}>
        <Text style={styles.title}>Authorization</Text>

        <View style={styles.form}>
          <Controller
            name="login"
            control={control}
            rules={inputRules}
            render={({field: {value, onChange}, fieldState: {error}}) => (
              <View style={styles.inputWrapper}>
                <Text style={[styles.title, styles.label]}>Login</Text>
                <TextInput style={[styles.input, error && styles.error]} value={value} onChangeText={onChange} editable={!loading} />
              </View>
            )}
          />

          <Controller
            name="password"
            control={control}
            rules={inputRules}
            render={({field: {value, onChange}, fieldState: {error}}) => (
              <View style={styles.inputWrapper}>
                <Text style={[styles.title, styles.label]}>Password</Text>
                <TextInput
                  style={[styles.input, error && styles.error]}
                  secureTextEntry
                  value={value}
                  onChangeText={onChange}
                  editable={!loading}
                />
              </View>
            )}
          />

          <Button style={styles.button} label="Submit" onPress={handleSubmit(onSubmit)} loading={loading} />
        </View>

      </ShadowBox>
    </View>
  )
}
