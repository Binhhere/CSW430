import React, {useState} from 'react';
import {Alert, ScrollView, StyleSheet, Text} from 'react-native';
import {Button, TextInput} from 'react-native-paper';

const initialForm = {
  title: '', description: '', price: '', discountPercentage: '',
  rating: '', stock: '', brand: '', category: '', images: '',
};

export default function ProductAdd() {
  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);

  const update = (key, value) => setForm(current => ({...current, [key]: value}));

  const handleSubmit = async () => {
    if (!form.title.trim()) {
      Alert.alert('Validation', 'Title is required.');
      return;
    }

    setSubmitting(true);
    try {
      const payload = {
        ...form,
        price: Number(form.price) || 0,
        discountPercentage: Number(form.discountPercentage) || 0,
        rating: Number(form.rating) || 0,
        stock: Number(form.stock) || 0,
        images: form.images.split(',').map(v => v.trim()).filter(Boolean),
      };

      const response = await fetch('https://dummyjson.com/products/add', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const created = await response.json();
      Alert.alert('Success', `Product added successfully. Returned id: ${created.id}`);
      setForm(initialForm);
    } catch (err) {
      Alert.alert('Error', `Cannot add product: ${err.message}`);
    } finally {
      setSubmitting(false);
    }
  };

  const fields = [
    ['title', 'Title', 'Enter title'],
    ['description', 'Description', 'Enter description'],
    ['price', 'Price', 'Enter price', 'numeric'],
    ['discountPercentage', 'Discount Percentage', 'Enter discount percentage', 'numeric'],
    ['rating', 'Rating', 'Enter rating', 'numeric'],
    ['stock', 'Stock', 'Enter stock', 'numeric'],
    ['brand', 'Brand', 'Enter brand'],
    ['category', 'Category', 'Enter category'],
    ['images', 'Images', 'Enter image URL(s), separated by commas'],
  ];

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <Text style={styles.heading}>Add a Product</Text>
      {fields.map(([key, label, placeholder, keyboardType]) => (
        <TextInput
          key={key}
          mode="outlined"
          label={label}
          placeholder={placeholder}
          value={form[key]}
          onChangeText={value => update(key, value)}
          keyboardType={keyboardType || 'default'}
          multiline={key === 'description'}
          style={styles.input}
        />
      ))}
      <Button mode="contained" loading={submitting} disabled={submitting} onPress={handleSubmit} contentStyle={styles.buttonContent}>
        SUBMIT
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {padding: 16, paddingBottom: 40, backgroundColor: '#fff'},
  heading: {fontSize: 22, fontWeight: '700', marginBottom: 12},
  input: {marginBottom: 10},
  buttonContent: {height: 48},
});
