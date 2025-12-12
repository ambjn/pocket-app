import { useAuth, useUser } from '@clerk/clerk-expo'
import { Link } from 'expo-router'
import React from 'react'
import { ScrollView, Text, TouchableOpacity } from 'react-native'

const Settings = () => {
    const { user } = useUser()
    const { isSignedIn, signOut } = useAuth()
    return (
        <ScrollView contentInsetAdjustmentBehavior='automatic'>
            <Text>Your account: {user?.emailAddresses[0].emailAddress}</Text>
            {isSignedIn && (
                <TouchableOpacity onPress={() => signOut()}>
                    <Text>Sign out</Text>
                </TouchableOpacity>
            )}
            {!isSignedIn && (
                <Link href={'/'} replace asChild>
                    <TouchableOpacity>
                        <Text>Sign up or in</Text>
                    </TouchableOpacity>
                </Link>
            )}
        </ScrollView>
    )
}

export default Settings