import React from 'react';
import { View, Text, Image, TouchableOpacity } from "react-native";
import {styles} from "./styles";
import {useSafeAreaInsets} from "react-native-safe-area-context";

import {getHeaderTitle} from '@react-navigation/elements';
import {StackActions} from '@react-navigation/native';

import {useAppDispatch} from "../../store";
import {actions as userActions} from "../../store/users/slice";
import {actions as postsActions} from "../../store/posts/slice";
import {actions as photosActions} from "../../store/photos/slice";

import layout from "../../styles/layout";

export const Header: React.FC<any> = ({ navigation, route, options }) => {
  const insets = useSafeAreaInsets();
  const dispatch = useAppDispatch();

  const title = getHeaderTitle(options, route.name);
  const isAuth = route.name === "Auth";

  const logOut = () => {
    dispatch(userActions.reset());
    dispatch(postsActions.reset());
    dispatch(photosActions.reset());
    navigation.dispatch(
      StackActions.replace("Auth")
    )
  }

  return (
    <View style={[styles.wrapper, {paddingTop: insets.top}]}>
      <View style={styles.container}>
        <View style={styles.logoWrapper}>
          <Image
            source={require('../../assets/images/logo.png')}
            fadeDuration={0}
            style={{ width: 70, height: 63 }}
          />
          {layout.isLarge && !isAuth && <Text style={styles.title}>{title}</Text>}
        </View>

        {!isAuth && (
          <TouchableOpacity activeOpacity={0.8} onPress={logOut}>
            <Image
              source={require('../../assets/images/logOut.png')}
              fadeDuration={0}
              style={{ width: 70, height: 63 }}
            />
          </TouchableOpacity>
        )}

      </View>
    </View>

  )
}
