import React from 'react';
import { View, Text, Image } from "react-native";
import { ChatRoom } from "../../types";
import styles from "./style";
import moment from "moment";

export type ChatListItemProps = {
  chatRoom: ChatRoom;
}

const ChatListItem = (props: ChatListItemProps) => {
  const { chatRoom } = props;

  const user = chatRoom.users[1];

  return (
    <View style={styles.container}>
      <View style={styles.lefContainer}>
        <Image source={{ uri: user.imageUri }} style={styles.avatar}/>

        <View style={styles.midContainer}>
          <Text style={styles.username}>{user.name}</Text>
          <Text numberOfLines={2} style={styles.lastMessage}>{chatRoom.lastMessage.content}</Text>
        </View>

      </View>

      <Text style={styles.time}>
        {moment(chatRoom.lastMessage.createdAt).format("DD/MM/YYYY")}
      </Text>
    </View>
  )
};

export default ChatListItem;
