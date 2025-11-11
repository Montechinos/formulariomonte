import { Redirect } from 'expo-router';

export default function Index() {
  // Redirige automáticamente a la pantalla de login al abrir la app
  return <Redirect href="/(auth)/login" />;
}