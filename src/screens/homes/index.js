import React, {useEffect} from 'react';
import { FlatList, View, Platform, Text } from 'react-native';
import ListItem from './listItem';
import * as productActions from '../../actions/productActions';
import styles from './styles';
import { useSelector, useDispatch } from 'react-redux';

const Home = () => {
  const dispatch = useDispatch();
  const keyExtractor = (item, index) => {
    return `${item.url}-${index}`;
  }
  const renderItem = ({ item }) => {
    return <ListItem {...item} />;
  }
  useEffect(() => {
    dispatch(productActions.fetchProducts());
  }, []);

  const { products } = useSelector(state => ({
    ...state.productReducer
  }));

  return (
    <View>
      <View style={styles.headerHome}>
          <Text style={styles.titleHome}>My Home</Text>
      </View>
      <FlatList
        ItemSeparatorComponent={Platform.OS === 'android' && (() => (
          <View style={styles.viewHome} />
        ))}
        data={products}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
}

export default Home;
