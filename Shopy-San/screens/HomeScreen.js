import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/globalStyles';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.headerHome}>
        <Text style={styles.appName}>Shopy‑San</Text>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>JS</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>¡putaaaaa!</Text>
        <Text style={styles.subtitle}>Aquí puedes ver tus productos, pedidos y perfil.</Text>

        <View style={styles.row}>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionText}>Productos</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionText}>Pedidos</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={[styles.primaryButtonAlt, { marginTop: 18 }]}
          onPress={() => navigation.replace('Login')}
        >
          <Text style={styles.primaryTextAlt}>Cerrar sesión</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
