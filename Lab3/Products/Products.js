import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Image,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Button} from 'react-native-paper';

const PRODUCTS_URL = 'https://dummyjson.com/products';

function ProductRow({item}) {
  return (
    <View style={styles.card}>
      <Image source={{uri: item.thumbnail}} style={styles.thumbnail} />
      <View style={styles.info}>
        <Text style={styles.title}>Title: {item.title}</Text>
        <Text numberOfLines={3}>Description: {item.description}</Text>
        <Text>Price: ${item.price}</Text>
        <Text style={styles.discount}>Discount: {item.discountPercentage}% off</Text>
        <Text>Rating: {item.rating}</Text>
        <Text>Stock: {item.stock}</Text>
        <Text>Brand: {item.brand || 'N/A'}</Text>
        <Text>Category: {item.category}</Text>
        <View style={styles.actions}>
          <Button mode="contained-tonal" compact onPress={() => Alert.alert('Detail', 'Handled in the Detail tab.')}>DETAIL</Button>
          <Button mode="contained-tonal" compact onPress={() => Alert.alert('Add', 'Handled in the Add tab.')}>ADD</Button>
          <Button mode="contained-tonal" compact onPress={() => Alert.alert('Delete', 'Lab requirement: no delete handling.')}>DELETE</Button>
        </View>
      </View>
    </View>
  );
}

export default function ProductList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState('');

  const loadProducts = async (isRefresh = false) => {
    isRefresh ? setRefreshing(true) : setLoading(true);
    setError('');
    try {
      const response = await fetch(PRODUCTS_URL);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const json = await response.json();
      setData(json.products || []);
    } catch (err) {
      setError(`Cannot load products: ${err.message}`);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  if (loading) {
    return <View style={styles.center}><ActivityIndicator size="large" /><Text>Loading products...</Text></View>;
  }

  return (
    <View style={styles.screen}>
      <Text style={styles.header}>Product list</Text>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <FlatList
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => <ProductRow item={item} />}
        contentContainerStyle={styles.listContent}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={() => loadProducts(true)} />}
        ListEmptyComponent={<Text style={styles.empty}>No products found.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {flex: 1, backgroundColor: '#fff'},
  header: {fontSize: 25, fontWeight: '700', paddingHorizontal: 16, paddingVertical: 14},
  listContent: {paddingHorizontal: 12, paddingBottom: 24},
  card: {flexDirection: 'row', paddingVertical: 14, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: '#bbb'},
  thumbnail: {width: 92, height: 92, resizeMode: 'contain', marginRight: 12, backgroundColor: '#f5f5f5', borderRadius: 8},
  info: {flex: 1, gap: 2},
  title: {fontSize: 16, fontWeight: '700'},
  discount: {color: '#16803c', fontWeight: '600'},
  actions: {flexDirection: 'row', flexWrap: 'wrap', gap: 6, marginTop: 8},
  center: {flex: 1, alignItems: 'center', justifyContent: 'center', gap: 12},
  error: {color: '#b00020', paddingHorizontal: 16, paddingBottom: 8},
  empty: {textAlign: 'center', marginTop: 32},
});
