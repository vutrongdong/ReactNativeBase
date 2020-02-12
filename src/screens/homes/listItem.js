import React from 'react';
import { Image, View, Text } from 'react-native';
import rn from 'random-number';
import styles from './styles';
import RatingView from './ratingView';
import PriceText from './priceText';

const ListItem = (props) => {
  const { name, offer, reviewScore, reviewCount, image } = props;
  return (
    <View style={styles.wrapper}>
      <View style={styles.thumbnailView}>
        <Image source={{ uri:image.thumbUrl }} style={styles.thumbnail} />
      </View>
      <View style={styles.detailsView}>
        <Text style={styles.productName}>{name}</Text>
        <RatingView rating={reviewScore} reviewCount={reviewCount} style={styles.rating} />
        <PriceText price={offer.price} salePrice={offer.salePrice} style={styles.priceText} />
        <View style={styles.shipping}>
          <Text style={styles.shippingText}>{`${rn({ min: 2, max: 7, integer: true })} Days Shipping`}</Text>
        </View>
      </View>
    </View>
  );
};

export default ListItem;
