import React, {useEffect} from "react";
import {styles} from "./styles";
import {View, Text, FlatList} from "react-native";
import {Post} from "../../components/Post";

import {useAppDispatch, useAppSelector} from "../../store";
import {selectUniqPosts} from "../../store/posts/selectors";
import {getPosts} from "../../store/posts/thunk";
import {getPhotos} from "../../store/photos/thunk";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import layout from "../../styles/layout";

export const Posts: React.FC = () => {
  const dispatch = useAppDispatch();
  const {bottom} = useSafeAreaInsets();

  const posts = useAppSelector(selectUniqPosts);

  useEffect(() => {
    dispatch(getPosts());
    dispatch(getPhotos());
  }, []);

  return (
    <View style={[styles.container, {paddingBottom: bottom}]}>
      <FlatList
        numColumns={layout.isLarge ? 2 : 1}
        showsVerticalScrollIndicator={false}
        data={posts}
        renderItem={({item, index}) => (
          <Post
            postData={item}
            index={index}
            isLast={index === posts.length - 1}
          />
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  )
}
