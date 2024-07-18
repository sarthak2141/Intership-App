import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // You can choose any icon set you like

const data = [
  { icon: 'work', label: 'Certifications', count: '4400+', color: '#FF6347' },
  { icon: 'person', label: 'Resume Services', count: '1700+', color: '#4682B4' },
  { icon: 'description', label: 'Premium Services', count: '1250+', color: '#32CD32' },
];

const ServiceCard = ({ icon, label, count, color }) => (
  <View style={styles.card}>
    <Icon name={icon} size={40} color={color} />
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.count}>{count}</Text>
  </View>
);

const FotterCard = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
    <View style={styles.container}>
      {data.map((item, index) => (
        <ServiceCard 
          key={index}
          icon={item.icon}
          label={item.label}
          count={item.count}
          color={item.color}
        />
      ))}
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 20,
  },
  card: {
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    marginVertical: 5,
    marginHorizontal:15,
    fontWeight:'500'
  },
  count: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default FotterCard;
