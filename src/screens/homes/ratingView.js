import React from 'react';
import { Platform, View, Text } from 'react-native';
import { range } from 'lodash';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const commaNumber = require('comma-number');

let filledIconName = 'ios-star';
let emptyIconName = 'ios-star-outline';
if (Platform.OS === 'android') {
  filledIconName = 'md-star';
  emptyIconName = 'md-star-outline';
}
const MAX_RATING = 5;
const RatingView = ({ rating, reviewCount, style }) => {
  const { wrapperRating } = styles;
  return (
    <View style={[wrapperRating, style]}>
      {
        range(MAX_RATING).map(
          index => (
            <Icon
              key={index}
              name={parseInt(rating) > index ? filledIconName : emptyIconName}
              size={18}
              color="#FFD700"
              style={styles.iconRating}
            />
          )
        )
      }
      <Text style={styles.textRating}>{`(${commaNumber(reviewCount)})`}</Text>
    </View>
  );
};

export default RatingView;
