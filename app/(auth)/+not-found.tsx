import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

export default function NotFoundScreen() {
  const router = useRouter();

  return (
    <ScrollView className="flex-1 bg-blue-100">
      
      {/* Header */}
      <View className="bg-blue-600 pt-12 pb-6 px-4 border-b-8 border-blue-800">
        <View className="flex-row items-center justify-center mb-4">
          <View className="w-12 h-12 bg-white rounded-full border-4 border-blue-800 mr-3">
            <View className="w-full h-full rounded-full border-2 border-blue-400" />
          </View>
          <Text className="text-2xl font-black text-white text-center">
            Iniciaste sesión con éxito
          </Text>
        </View>
      </View>

      {/* Error 404 */}
      <View className="flex-1 justify-center items-center p-8 min-h-screen">
        <View className="bg-white rounded-2xl border-8 border-blue-800 p-8 w-full max-w-md">

          {/* Código */}
          <View className="bg-blue-500 p-4 rounded-xl border-4 border-blue-800 mb-6">
            <Text className="text-white font-black text-center text-6xl">
              404
            </Text>
          </View>

          {/* Título */}
          <Text className="text-blue-900 font-black text-2xl text-center mb-4">
            Ruta no encontrada
          </Text>

          {/* Descripción */}
          <View className="bg-blue-50 p-4 rounded-xl border-4 border-blue-800 mb-6">
            <Text className="text-blue-800 font-bold text-center text-base">
              Iniciaste sesión con éxito, pero la ruta no fue encontrada.
            </Text>
            <Text className="text-blue-700 text-center text-sm mt-2">
              Verifica que la URL sea correcta.
            </Text>
          </View>

          {/* Indicador visual */}
          <View className="mb-6">
            <View className="w-20 h-20 bg-blue-300 rounded-full mx-auto border-4 border-blue-800" />
            <Text className="text-center text-blue-700 font-bold mt-2">
              Página no disponible
            </Text>
          </View>

          {/* Botones */}
          <View className="gap-3">

            <TouchableOpacity
              onPress={() => router.push('/')}
              className="bg-blue-600 p-4 rounded-xl border-4 border-blue-800"
              style={{
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.5,
                shadowRadius: 0,
              }}
            >
              <Text className="text-white font-black text-center text-lg">
                IR AL INICIO
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => router.replace('/')}
              className="bg-blue-300 p-4 rounded-xl border-4 border-blue-800"
              style={{
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.5,
                shadowRadius: 0,
              }}
            >
              <Text className="text-blue-900 font-black text-center text-lg">
                VOLVER ATRÁS
              </Text>
            </TouchableOpacity>

          </View>
        </View>

        {/* Footer info */}
        <View className="mt-8 bg-blue-600 p-4 rounded-xl border-4 border-blue-800 w-full max-w-md">
          <Text className="text-white font-bold text-center text-sm">
            Tip: Verifica que la URL esté correcta
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
