import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Image, StyleSheet, Text, View} from 'react-native';
import {Button, Card} from 'react-native-paper';

export default function ProductDetail() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let active = true;
    const load = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products/2');
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const json = await response.json();
        if (active) setData(json);
      } catch (err) {
        if (active) setError(`Cannot load detail: ${err.message}`);
      } finally {
        if (active) setLoading(false);
      }
    };
    load();
    return () => { active = false; };
  }, []);

  if (loading) return <View style={styles.center}><ActivityIndicator size="large" /></View>;
  if (error) return <View style={styles.center}><Text style={styles.error}>{error}</Text></View>;
  if (!data) return null;

  return (
    <View style={styles.screen}>
      <Text style={styles.heading}>Product Detail</Text>
      <Card>
        <Image source={{uri: data.thumbnail}} style={styles.image} />
        <Card.Content style={styles.content}>
          <Text style={styles.title}>Title: {data.title}</Text>
          <Text>Description: {data.description}</Text>
          <Text>Price: ${data.price}</Text>
          <Text>Discount: {data.discountPercentage}%</Text>
          <Text>Rating: {data.rating} stars</Text>
          <Text>Stock: {data.stock} units</Text>
          <Text>Brand: {data.brand || 'N/A'}</Text>
          <Text>Category: {data.category}</Text>
          <View style={styles.actions}>
            <Button mode="contained">Delete</Button>
            <Button mode="outlined">Cancel</Button>
          </View>
          <Text style={styles.note}>Delete and Cancel are intentionally not handled, matching the lab note.</Text>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {flex: 1, padding: 12, backgroundColor: '#fff'},
  heading: {fontSize: 22, fontWeight: '700', marginBottom: 12},
  image: {width: '100%', height: 260, resizeMode: 'contain', backgroundColor: '#f4f4f4'},
  content: {paddingTop: 14, gap: 4},
  title: {fontSize: 23, fontWeight: '700'},
  actions: {flexDirection: 'row', justifyContent: 'flex-end', gap: 10, marginTop: 18},
  note: {fontSize: 12, opacity: 0.65, marginTop: 8},
  center: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  error: {color: '#b00020'},
});
