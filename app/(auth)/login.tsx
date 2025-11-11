import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from "react-native";
import { router } from "expo-router";
import { loginSchema } from "@/lib/validations/authSchemas";
import { z } from "zod";
import Toast from "react-native-toast-message";

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const handleLogin = (): void => {
    setErrors({});

    try {
      const validatedData = loginSchema.parse({ email, password });

      console.log("✅ Login exitoso:", validatedData);

      // ✅ Muestra mensaje de éxito
      Toast.show({
        type: "success",
        text1: "Inicio de sesión exitoso 🎉",
        text2: "¡Bienvenido de nuevo!",
        visibilityTime: 3000,
      });

      router.push("../(auth)/index");
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: { email?: string; password?: string } = {};
        error.errors.forEach((err) => {
          const field = err.path[0] as string;
          fieldErrors[field as keyof typeof fieldErrors] = err.message;
        });
        setErrors(fieldErrors);
        console.log("❌ Errores de validación:", fieldErrors);
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
              Bienvenido
            </Text>
            <Text className="text-base text-gray-600">
              Inicia sesión para continuar
            </Text>
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
              <Text className="text-red-500 text-sm mt-1">{errors.email}</Text>
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
              placeholder="Ingresa tu contraseña"
              placeholderTextColor="#9CA3AF"
              secureTextEntry
              className={`w-full px-4 py-3 rounded-lg border-2 ${
                errors.password ? "border-red-500" : "border-gray-300"
              } bg-white text-base`}
            />
            {errors.password && (
              <Text className="text-red-500 text-sm mt-1">
                {errors.password}
              </Text>
            )}
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

          {/* Ir a Registro */}
          <View className="flex-row justify-center items-center">
            <Text className="text-gray-600 text-base">
              ¿No tienes cuenta?{" "}
            </Text>
            <TouchableOpacity onPress={() => router.push("/register")}>
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
