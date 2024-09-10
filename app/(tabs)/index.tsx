import React ,{useState, useEffect}from 'react';
import CarouselBanner from '@/components/carousel';
import NewsCard from '@/components/news';
import { StyleSheet, Text, SafeAreaView, View, ScrollView,ActivityIndicator } from 'react-native';

export default function HomeScreen() {
  const [news, setnews] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=9b6e4ba310984f1eb99e6246ec316f40');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      setnews(result.articles);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {
          news?.length < 0 ? <ActivityIndicator size="large" />:
          <>
          <Text style={styles.title}>Trending News</Text><CarouselBanner /><View style={styles.cardContainer}>
              <NewsCard news={news} />
            </View>
            </>
        }
      </ScrollView>
    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: '600', 
    paddingVertical: 10,
    fontFamily: 'SpaceMono',
    paddingHorizontal:10
  },
  scrollContainer: {
    flexGrow: 1,
  },
  cardContainer: {
    marginTop: 20, 
  },
});
