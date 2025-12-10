import { COLORS } from '@/utils/Colors';
import { Stack } from 'expo-router';

export default function SavesLayout() {
  return (
    <Stack screenOptions={{ contentStyle: { backgroundColor: COLORS.white } }} >
      <Stack.Screen name="index" options={{ title: 'Saves', headerLargeTitleEnabled: true, headerLargeTitleShadowVisible: false }} />
    </Stack>
  );
}
