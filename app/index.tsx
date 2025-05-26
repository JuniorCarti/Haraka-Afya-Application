import { Redirect } from 'expo-router';

export default function Root() {
  // Change this to check actual authentication status
  const isAuthenticated = false;
  
  if (!isAuthenticated) {
    return <Redirect href="/login" />;
  }
  
  return <Redirect href="/(tabs)" />;
}