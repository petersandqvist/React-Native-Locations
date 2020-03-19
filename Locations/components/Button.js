import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, FlatList, Button} from 'react-native';

const FollowButton = () => {
  const [following, setFollowing] = useState(false);
  return (
    <Button
      onPress={() =>
        following === true ? setFollowing(false) : setFollowing(true)
      }
      title={following ? 'following' : 'follow'}
      color={following ? 'green' : '#000'}
    />
  );
};

export default FollowButton;
