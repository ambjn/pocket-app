import { COLORS } from '@/utils/Colors';
import { Stack } from 'expo-router';

export default function SettingsLayout() {
  return (
    <Stack screenOptions={{ contentStyle: { backgroundColor: COLORS.white } }} >
      <Stack.Screen name="index" options={{ title: 'Settings', headerLargeTitleEnabled: true, headerTransparent: true }} />
    </Stack>
  );
}
