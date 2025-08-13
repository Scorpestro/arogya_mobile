import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ForumScreen() {
  const [selectedCategory, setSelectedCategory] = useState('All Discussions');
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
    {
      id: 3,
      title: 'Healthy meal prep ideas for busy professionals',
      author: 'Sarah Johnson',
      time: '1 day ago',
      category: 'Nutrition',
      content: 'As a busy professional, I struggle to maintain a healthy diet. Here are some meal prep ideas...',
      likes: 42,
      comments: 15,
      tags: ['#nutrition', '#mealprep', '#healthyeating'],
    },
  ]);

  const categories = [
    { name: 'All Discussions', count: 24 },
    { name: 'General Health', count: 8 },
    { name: 'Mental Health', count: 6 },
    { name: 'Fitness & Exercise', count: 5 },
    { name: 'Nutrition', count: 3 },
    { name: 'Sleep Health', count: 2 },
  ];

  const filteredPosts = selectedCategory === 'All Discussions' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  return (
    <View style={styles.container}>
      <View style={styles.forumLayout}>
        <View style={styles.categoriesContainer}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <ScrollView>
            {categories.map((category) => (
              <TouchableOpacity
                key={category.name}
                style={[
                  styles.categoryItem,
                  selectedCategory === category.name && styles.selectedCategory
                ]}
                onPress={() => setSelectedCategory(category.name)}
              >
                <Text style={[
                  styles.categoryText,
                  selectedCategory === category.name && styles.selectedCategoryText
                ]}>
                  {category.name}
                </Text>
                <Text style={styles.categoryCount}>{category.count}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <TouchableOpacity style={styles.guidelinesButton}>
            <Text style={styles.guidelinesText}>Community Guidelines</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.postsContainer}>
          <Text style={styles.sectionTitle}>{selectedCategory}</Text>
          <ScrollView>
            {filteredPosts.map((post) => (
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
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  forumLayout: {
    flex: 1,
    flexDirection: 'row',
  },
  categoriesContainer: {
    width: '30%',
    backgroundColor: '#e9ecef',
    padding: 16,
    borderRightWidth: 1,
    borderRightColor: '#dee2e6',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  categoryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 4,
    marginBottom: 4,
  },
  selectedCategory: {
    backgroundColor: '#007AFF',
  },
  categoryText: {
    fontSize: 14,
    color: '#495057',
  },
  selectedCategoryText: {
    color: 'white',
    fontWeight: 'bold',
  },
  categoryCount: {
    fontSize: 12,
    color: '#6c757d',
    backgroundColor: '#dee2e6',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 10,
  },
  guidelinesButton: {
    marginTop: 16,
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderTopWidth: 1,
    borderTopColor: '#dee2e6',
  },
  guidelinesText: {
    fontSize: 14,
    color: '#007AFF',
    textAlign: 'center',
  },
  postsContainer: {
    flex: 1,
    padding: 16,
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
    fontSize: 16,
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