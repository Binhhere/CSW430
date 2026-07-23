import React, {useState} from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {Button, Card, TextInput} from 'react-native-paper';

function ProductCard({item}) {
  return (
    <Card style={styles.card}>
      <Card.Title title="Product Detail" />
      <Image source={{uri: item.thumbnail}} style={styles.image} />
      <Card.Content style={styles.content}>
        <Text style={styles.title}>Title: {item.title}</Text>
        <Text>Description: {item.description}</Text>
        <Text>Price: ${item.price}</Text>
        <Text>Discount: {item.discountPercentage}%</Text>
        <Text>Rating: {item.rating} stars</Text>
        <Text>Stock: {item.stock} units</Text>
        <Text>Brand: {item.brand || 'N/A'}</Text>
        <Text>Category: {item.category}</Text>
      </Card.Content>
    </Card>
  );
}

export default function ProductSearch() {
  const [value, setValue] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const searchProduct = async () => {
    if (!value.trim()) {
      setData([]);
      setMessage('Enter a product name.');
      return;
    }

    setLoading(true);
    setMessage('');
    try {
      const response = await fetch(`https://dummyjson.com/products/search?q=${encodeURIComponent(value.trim())}`);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const json = await response.json();
      setData(json.products || []);
      if (!json.products?.length) setMessage('No matching products.');
    } catch (err) {
      setData([]);
      setMessage(`Search failed: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.heading}>Search Products</Text>
      <TextInput mode="outlined" placeholder="e.g. iphone" value={value} onChangeText={setValue} onSubmitEditing={searchProduct} returnKeyType="search" />
      <Button mode="contained" onPress={searchProduct} loading={loading} disabled={loading} style={styles.button}>SEARCH</Button>
      {message ? <Text style={styles.message}>{message}</Text> : null}
      <FlatList
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => <ProductCard item={item} />}
        contentContainerStyle={styles.list}
        keyboardShouldPersistTaps="handled"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {flex: 1, padding: 12, backgroundColor: '#fff'},
  heading: {fontSize: 22, fontWeight: '700', marginBottom: 10},
  button: {marginTop: 10},
  message: {textAlign: 'center', marginTop: 16},
  list: {paddingVertical: 12, paddingBottom: 32},
  card: {marginBottom: 14, overflow: 'hidden'},
  image: {width: '100%', height: 220, resizeMode: 'contain', backgroundColor: '#f4f4f4'},
  content: {paddingTop: 12, paddingBottom: 16, gap: 3},
  title: {fontSize: 22, fontWeight: '700'},
});
