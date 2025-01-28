import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { GradientButton } from '../components/GradientButton';

export const HomeScreen = ({ navigation }) => {
  const { theme } = useTheme();
  const [categories] = useState([
    { id: '1', name: 'Work' },
    { id: '2', name: 'Personal' },
  ]);

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.title, { color: theme.text }]}>Categories</Text>
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.categoryCard, { backgroundColor: theme.surface }]}
            onPress={() => navigation.navigate('Tasks', { category: item })}>
            <Text style={[styles.categoryText, { color: theme.text }]}>
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
      <GradientButton
        title="Add Category"
        colors={[theme.gradientStart, theme.gradientEnd]}
        onPress={() => navigation.navigate('AddCategory')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  categoryCard: {
    padding: 20,
    borderRadius: 15,
    marginBottom: 10,
    elevation: 2,
  },
  categoryText: {
    fontSize: 18,
    fontWeight: '600',
  },
});
