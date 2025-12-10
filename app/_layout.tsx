import { Stack } from 'expo-router';
import { KeyboardProvider } from "react-native-keyboard-controller";

const RootLayout = () => {
    return (
        <KeyboardProvider>
            <Stack>
                <Stack.Screen name="index" options={{ headerShown: false }} />
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            </Stack>
        </KeyboardProvider>
    )
}

export default RootLayout