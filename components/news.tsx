import React ,{useState, useEffect, Suspense}from 'react';
import { View, Image, Text, StyleSheet,ActivityIndicator } from 'react-native';

const NewsCard = ({news}) => {
  return (
    <View style={styles.container}>
    <Text style={styles.headingtitle}>Recent News</Text>
    <Suspense fallback={<ActivityIndicator size="large"/>}>
    {news?.map((item: { urlToImage: any; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; description: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }, index: React.Key | null | undefined) => (
      <View key={index} style={styles.card}>
        <Image source={{ uri: item.urlToImage }} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </View>
    ))}
    </Suspense>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  card: {
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    marginVertical:10,
    marginHorizontal:10,
    width: '95%',
  },
  headingtitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
    fontFamily: 'SpaceMono',
    paddingHorizontal:10
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  content: {
    padding: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    fontFamily: 'SpaceMono',
  },
  description: {
    fontSize: 14,
    color: '#666',
    fontFamily: 'SpaceMono',
  },
});

export default NewsCard;
