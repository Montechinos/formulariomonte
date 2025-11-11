import "../global.css";
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
import { router } from 'expo-router';
import { registerSchema } from '../lib/validations/authSchemas';
import { z } from 'zod';

const RegistroScreen: React.FC = () => {
  // Estados para los campos del formulario
  const [nombre, setNombre] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  
  // Estados para errores
  const [errors, setErrors] = useState<{
    nombre?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
  }>({});

  const handleNavigateToLogin = (): void => {
    router.push('/(auth)/login');
  };

  const handleRegister = (): void => {
    // Limpiar errores previos
    setErrors({});

    try {
      // Validar con Zod
      const validatedData = registerSchema.parse({
        nombre,
        email,
        password,
        confirmPassword,
      });

      console.log('✅ Registro exitoso:', validatedData);
      
      // Aquí irá la lógica de registro
      // Por ejemplo: llamar a una API, crear usuario, etc.
      
      // Simular registro exitoso
      alert('¡Registro exitoso!');
      
      // Navegar a login o home
      router.push('/(auth)/login');
      
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Mapear errores de Zod a nuestro estado
        const fieldErrors: {
          nombre?: string;
          email?: string;
          password?: string;
          confirmPassword?: string;
        } = {};
        
        error.errors.forEach((err) => {
          const field = err.path[0] as string;
          fieldErrors[field as keyof typeof fieldErrors] = err.message;
        });
        
        setErrors(fieldErrors);
        console.log('❌ Errores de validación:', fieldErrors);
      }
    }
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
              Crear Cuenta
            </Text>
            <Text className="text-base text-gray-600">
              Completa los datos para registrarte
            </Text>
          </View>

          {/* Formulario */}
          <View className="mb-6">
            {/* Campo Nombre */}
            <View className="mb-4">
              <Text className="text-gray-700 font-semibold mb-2 text-base">
                Nombre
              </Text>
              <TextInput
                value={nombre}
                onChangeText={setNombre}
                placeholder="Ingresa tu nombre completo"
                placeholderTextColor="#9CA3AF"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 bg-white text-base"
              />
            </View>

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
                placeholder="Mínimo 8 caracteres"
                placeholderTextColor="#9CA3AF"
                secureTextEntry
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 bg-white text-base"
              />
            </View>

            {/* Campo Confirmar Contraseña */}
            <View className="mb-4">
              <Text className="text-gray-700 font-semibold mb-2 text-base">
                Confirmar Contraseña
              </Text>
              <TextInput
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                placeholder="Repite tu contraseña"
                placeholderTextColor="#9CA3AF"
                secureTextEntry
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 bg-white text-base"
              />
            </View>
          </View>

          {/* Botón de Registro */}
          <TouchableOpacity
            onPress={handleRegister}
            className="bg-blue-600 py-4 rounded-lg mb-6 active:bg-blue-700"
          >
            <Text className="text-white text-center font-bold text-base">
              Registrarse
            </Text>
          </TouchableOpacity>

          {/* Navegación a Login */}
          <View className="flex-row justify-center items-center">
            <Text className="text-gray-600 text-base">
              ¿Ya tienes cuenta?{' '}
            </Text>
            <TouchableOpacity onPress={handleNavigateToLogin}>
              <Text className="text-blue-600 font-semibold text-base">
                Inicia sesión
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegistroScreen;