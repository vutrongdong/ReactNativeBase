import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const PriceText = ({ price, salePrice, style }) => (
  <View style={[styles.wrapperPrice, style]}>
    <Text style={styles.price}>{`${price.currency} ${price.value}`}</Text>
    {salePrice && <Text style={styles.salePrice}>{`${salePrice.currency} ${salePrice.value}`}</Text>}
  </View>
);

export default PriceText;
