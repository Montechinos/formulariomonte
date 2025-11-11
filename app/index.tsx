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

interface RegistroScreenProps {
  navigation?: any; // Puedes tipar con NavigationProp si usas React Navigation
}

const RegistroScreen: React.FC<RegistroScreenProps> = ({ navigation }) => {
  // Estados para los campos del formulario
  const [nombre, setNombre] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const handleNavigateToLogin = (): void => {
    // Navegación simulada - reemplazar con navigation.navigate('Login')
    console.log('Navegar a Login');
    // navigation?.navigate('Login');
  };

  const handleRegister = (): void => {
    console.log('Registro:', { nombre, email, password, confirmPassword });
    // Aquí irá la lógica de registro
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