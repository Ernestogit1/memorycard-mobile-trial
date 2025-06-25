import React, { useState } from 'react';
import { 
    View, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    StyleSheet,
    ActivityIndicator 
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '@redux/auth/auth.actions';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const { loading, error } = useSelector(state => state.auth);

const handleLogin = async () => {
    if (username && password) {
        try {
            await dispatch(login(username, password));
        } catch (error) {
            console.error('Login failed:', error);
        }
    }
};

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Memory Card Game</Text>
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            {error && <Text style={styles.error}>{error}</Text>}
            <TouchableOpacity 
                style={styles.button} 
                onPress={handleLogin}
                disabled={loading}
            >
                {loading ? (
                    <ActivityIndicator color="#fff" />
                ) : (
                    <Text style={styles.buttonText}>Login</Text>
                )}
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
        textAlign: 'center'
    },
    input: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 5,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#ddd'
    },
    button: {
        backgroundColor: '#007AFF',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold'
    },
    error: {
        color: 'red',
        marginBottom: 10
    }
});

export default LoginScreen;