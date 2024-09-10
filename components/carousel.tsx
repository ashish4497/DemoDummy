import React, { useEffect, useState } from 'react';
import { Dimensions, Image, Text, View, StyleSheet } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

function CarouselBanner() {
  const [topheadlines, setTopHeadlines] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=9b6e4ba310984f1eb99e6246ec316f40');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      setTopHeadlines(result.articles);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const width = Dimensions.get('window').width;

  return (
    <View style={styles.container}>
      <Carousel
        loop
        autoPlay={true}
        scrollAnimationDuration={6000}
        width={width}
        height={width / 2}
        data={topheadlines}
        renderItem={({ index }) => (
          <View style={styles.carouselItem} key={index}>
            <Image source={{ uri: topheadlines[index]?.urlToImage }} style={styles.image} />
            <Text style={styles.title}>{topheadlines[index]?.title}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  carouselItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal:15,
    paddingBottom: 40, 
    flexDirection: 'column',
    borderRadius: 10, 
    backgroundColor: '#fff', 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.3, 
    shadowRadius: 5, 
    elevation: 5, 
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    marginBottom: 10,
  },
  title: {
    fontSize: 12,
    textAlign: 'left',
    paddingHorizontal: 10,
    fontFamily: 'SpaceMono',
  },
});


export default CarouselBanner;
