import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, FlatList, Button} from 'react-native';
import axios from 'axios';

const FollowButton = props => {
  const [following, setFollowing] = useState(false);
  return (
    <Button
      onPress={() => (
        props.onFollow(props.id, !following), setFollowing(!following)
      )}
      title={following ? 'following' : 'follow'}
      color={following ? 'green' : '#000'}
    />
  );
};
export default FollowButton;
