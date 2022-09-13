import React from 'react';
import {styles} from './styles';
import {View, Text, Image} from "react-native";

import {ShadowBox} from "../ShadowBox";

import {Post as PostData} from "../../types/posts";

import {useAppSelector} from "../../store";
import {selectCurrentUser} from "../../store/users/selectors";
import {selectCurrentPhoto} from "../../store/photos/selectors";
import layout from "../../styles/layout";

interface PostProps {
  postData: PostData;
  index: number;
  isLast: boolean
}

export const Post: React.FC<PostProps> = ({postData, index, isLast}) => {
  const user = useAppSelector((state) => selectCurrentUser(state, postData.userId));
  const photo = useAppSelector((state) => selectCurrentPhoto(state, postData.userId));

  const offsetMargin = layout.isLarge && (index + 1)%2 ? styles.marginRight : {};

  return (
    <ShadowBox style={[styles.container, (!isLast || layout.isLarge) && styles.margin, offsetMargin]}>
      <View>
        {photo && (
          <Image
            style={styles.image}
            source={{uri: photo.thumbnailUrl}}
          />
        )}
        <Text style={[styles.text, styles.margin]}>Author: {user.name}</Text>
        <Text style={[styles.text, styles.margin]}>Company: {user.company.name}</Text>
        <Text style={[styles.text, styles.margin]}>Title: {postData.title}</Text>
        <Text style={styles.text}>Body: {postData.body}</Text>
      </View>
    </ShadowBox>
  )
}
