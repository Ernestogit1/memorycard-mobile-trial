import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '@redux/auth/auth.actions';

const PlayScreen = () => {
    const { user } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    
    const handleLogout = () => {
        dispatch(logoutUser());
    };

    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>Welcome, {user?.username}!</Text>
            <Text style={styles.text}>Memory Card Game Coming Soon...</Text>
            
            <TouchableOpacity 
                style={styles.logoutButton} 
                onPress={handleLogout}
            >
                <Text style={styles.logoutButtonText}>Logout</Text>
            </TouchableOpacity>
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
        color: '#666',
        marginBottom: 40
    },
    logoutButton: {
        backgroundColor: '#FF3B30',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        marginTop: 20
    },
    logoutButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    }
});

export default PlayScreen;