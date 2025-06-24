import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const PlayScreen = () => {
    const { user } = useSelector(state => state.auth);

    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>Welcome, {user?.username}!</Text>
            <Text style={styles.text}>Memory Card Game Coming Soon...</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5'
    },
    welcome: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20
    },
    text: {
        fontSize: 18,
        color: '#666'
    }
});

export default PlayScreen;