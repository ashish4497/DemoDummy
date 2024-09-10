import NewsCard from "@/components/news";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
} from "react-native";

export default function Sports() {
  const [news, setnews] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://newsapi.org/v2/everything?q=apple&from=2024-09-08&to=2024-09-08&sortBy=popularity&apiKey=9b6e4ba310984f1eb99e6246ec316f40"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
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
    <SafeAreaView>
      {news?.length < 0 ? (
        <ActivityIndicator />
      ) : (
        <>
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <NewsCard news={news} />
          </ScrollView>
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
