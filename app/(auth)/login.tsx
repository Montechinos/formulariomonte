import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';
import { Link, router } from 'expo-router';

const LoginScreen: React.FC = () => {
  // Estados para los campos del formulario
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleNavigateToRegister = (): void => {
    router.push('/register');
  };

  const handleLogin = (): void => {
    console.log('Login:', { email, password });
    // Aquí irá la lógica de login
    // Después de login exitoso puedes navegar a home:
    // router.replace('/(tabs)/home');
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" />
      
      <ScrollView 
        className="flex-1"
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View className="flex-1 px-6 justify-center py-8">
          {/* Header */}
          <View className="mb-8">
            <Text className="text-3xl font-bold text-gray-900 mb-2">
              Bienvenido
            </Text>
            <Text className="text-base text-gray-600">
              Inicia sesión para continuar
            </Text>
          </View>

          {/* Formulario */}
          <View className="mb-6">
            {/* Campo Email */}
            <View className="mb-4">
              <Text className="text-gray-700 font-semibold mb-2 text-base">
                Correo Electrónico
              </Text>
              <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="correo@ejemplo.com"
                placeholderTextColor="#9CA3AF"
                keyboardType="email-address"
                autoCapitalize="none"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 bg-white text-base"
              />
            </View>

            {/* Campo Contraseña */}
            <View className="mb-4">
              <Text className="text-gray-700 font-semibold mb-2 text-base">
                Contraseña
              </Text>
              <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder="Ingresa tu contraseña"
                placeholderTextColor="#9CA3AF"
                secureTextEntry
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 bg-white text-base"
              />
            </View>

            {/* Olvidaste tu contraseña */}
            <TouchableOpacity className="self-end mb-2">
              <Text className="text-blue-600 text-sm font-medium">
                ¿Olvidaste tu contraseña?
              </Text>
            </TouchableOpacity>
          </View>

          {/* Botón de Login */}
          <TouchableOpacity
            onPress={handleLogin}
            className="bg-blue-600 py-4 rounded-lg mb-6 active:bg-blue-700"
          >
            <Text className="text-white text-center font-bold text-base">
              Iniciar Sesión
            </Text>
          </TouchableOpacity>

          {/* Navegación a Registro */}
          <View className="flex-row justify-center items-center">
            <Text className="text-gray-600 text-base">
              ¿No tienes cuenta?{' '}
            </Text>
            <TouchableOpacity onPress={handleNavigateToRegister}>
              <Text className="text-blue-600 font-semibold text-base">
                Regístrate
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;