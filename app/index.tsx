import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Dealing with anxiety after my recent diagnosis',
      author: 'Jennifer Thompson',
      time: '3 hours ago',
      category: 'Mental Health',
      content: 'I was recently diagnosed with diabetes and have been struggling with anxiety...',
      likes: 24,
      comments: 12,
      tags: ['#anxiety', '#diabetes', '#mentalhealth'],
    },
    {
      id: 2,
      title: 'Best exercises for lower back pain relief',
      author: 'Dr. Marcus Williams',
      time: '5 hours ago',
      category: 'Fitness & Exercise',
      content: 'Here are some effective exercises you can do at home to relieve lower back pain...',
      likes: 31,
      comments: 18,
      tags: ['#backpain', '#exercise', '#fitness'],
    },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recent Discussions</Text>
      <ScrollView style={styles.postsContainer}>
        {posts.map((post) => (
          <TouchableOpacity key={post.id} style={styles.postCard}>
            <View style={styles.postHeader}>
              <Text style={styles.postTitle}>{post.title}</Text>
              <Text style={styles.postMeta}>{post.author} • {post.time} • {post.category}</Text>
            </View>
            <Text style={styles.postContent}>{post.content}</Text>
            <View style={styles.postTags}>
              {post.tags.map((tag, index) => (
                <Text key={index} style={styles.tag}>{tag}</Text>
              ))}
            </View>
            <View style={styles.postActions}>
              <View style={styles.action}>
                <Text style={styles.actionText}>❤️ {post.likes}</Text>
              </View>
              <View style={styles.action}>
                <Text style={styles.actionText}>💬 {post.comments}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  postsContainer: {
    flex: 1,
  },
  postCard: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 2,
  },
  postHeader: {
    marginBottom: 8,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#333',
  },
  postMeta: {
    fontSize: 12,
    color: '#666',
  },
  postContent: {
    fontSize: 14,
    color: '#333',
    marginBottom: 8,
  },
  postTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 12,
  },
  tag: {
    backgroundColor: '#e9ecef',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginRight: 8,
    marginBottom: 4,
    fontSize: 12,
    color: '#495057',
  },
  postActions: {
    flexDirection: 'row',
  },
  action: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  actionText: {
    marginLeft: 4,
    fontSize: 14,
    color: '#666',
  },
});