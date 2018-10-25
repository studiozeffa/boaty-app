import React from 'react';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

const buttonColor = '#1a5091';
const buttonActiveColor = '#13407e';
const white = '#fff';

interface IProps {
  loading: boolean;
  url: string;
  onFetchRequest: () => void;
}

const ImageViewer = ({ url, loading, onFetchRequest }: IProps) => (
  <View style={styles.container}>
    <Image style={styles.image} source={{ uri: url }} />
    <TouchableHighlight
      style={styles.button}
      onPress={onFetchRequest}
      activeOpacity={1}
      underlayColor={buttonActiveColor}
      disabled={loading}
    >
      {loading ? (
        <ActivityIndicator size="small" color={white} />
      ) : (
        <Text style={styles.buttonLabel}>Again!</Text>
      )}
    </TouchableHighlight>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  button: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: buttonColor,
    borderRadius: 4,
  },
  buttonLabel: {
    fontSize: 18,
    color: white,
  },
});

export default ImageViewer;
