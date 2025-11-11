import "../global.css";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Alert,
} from "react-native";
import { router } from "expo-router";
import { registerSchema } from "../lib/validations/authSchemas";
import { z } from "zod";
import { AUTH_MESSAGES } from "../lib/constants/messages";

const RegistroScreen: React.FC = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<{
    nombre?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
  }>({});

  const handleRegister = (): void => {
    setErrors({});
    try {
      const validatedData = registerSchema.parse({
        nombre,
        email,
        password,
        confirmPassword,
      });

      console.log("✅ Registro exitoso:", validatedData);

      Alert.alert("Registro exitoso", AUTH_MESSAGES.SUCCESS_REGISTER);
      router.push("/login"); // ✅ Ruta correcta

    } catch (error) {
      if (error instanceof z.ZodError) {
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
      } else {
        Alert.alert("Error", AUTH_MESSAGES.UNKNOWN_ERROR);
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
          <View className="mb-8">
            <Text className="text-3xl font-bold text-gray-900 mb-2">
              Crear Cuenta
            </Text>
            <Text className="text-base text-gray-600">
              Completa los datos para registrarte
            </Text>
          </View>

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
              className={`w-full px-4 py-3 rounded-lg border-2 ${
                errors.nombre ? "border-red-500" : "border-gray-300"
              } bg-white text-base`}
            />
            {errors.nombre && (
              <Text className="text-red-500 mt-1 text-sm">
                {errors.nombre}
              </Text>
            )}
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
              className={`w-full px-4 py-3 rounded-lg border-2 ${
                errors.email ? "border-red-500" : "border-gray-300"
              } bg-white text-base`}
            />
            {errors.email && (
              <Text className="text-red-500 mt-1 text-sm">{errors.email}</Text>
            )}
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
              className={`w-full px-4 py-3 rounded-lg border-2 ${
                errors.password ? "border-red-500" : "border-gray-300"
              } bg-white text-base`}
            />
            {errors.password && (
              <Text className="text-red-500 mt-1 text-sm">
                {errors.password}
              </Text>
            )}
          </View>

          {/* Campo Confirmar Contraseña */}
          <View className="mb-6">
            <Text className="text-gray-700 font-semibold mb-2 text-base">
              Confirmar Contraseña
            </Text>
            <TextInput
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              placeholder="Repite tu contraseña"
              placeholderTextColor="#9CA3AF"
              secureTextEntry
              className={`w-full px-4 py-3 rounded-lg border-2 ${
                errors.confirmPassword ? "border-red-500" : "border-gray-300"
              } bg-white text-base`}
            />
            {errors.confirmPassword && (
              <Text className="text-red-500 mt-1 text-sm">
                {errors.confirmPassword}
              </Text>
            )}
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
              ¿Ya tienes cuenta?{" "}
            </Text>
            <TouchableOpacity onPress={() => router.push("/login")}>
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
