import { Stack } from 'expo-router';
import Toast from 'react-native-toast-message'; // ✅ Import necesario

export default function RootLayout() {
  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
        }}
      >
        {/* Ruta inicial - Redirige a login */}
        <Stack.Screen 
          name="index" 
          options={{
            headerShown: false,
          }}
        />
        
        {/* Grupo de autenticación */}
        <Stack.Screen 
          name="(auth)" 
          options={{
            headerShown: false,
          }}
        />
        
        {/* Pantalla de registro */}
        <Stack.Screen 
          name="register" 
          options={{
            title: 'Registro',
            headerShown: false,
          }}
        />
      </Stack>

      {/* ✅ Componente necesario para mostrar los toasts */}
      <Toast />
    </>
  );
}
