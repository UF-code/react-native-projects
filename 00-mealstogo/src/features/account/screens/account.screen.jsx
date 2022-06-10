import React from 'react'

import { Button } from 'react-native-paper'
import { Spacer } from '../../../components/spacer/spacer.component.jsx'

import {
    AccountBackground,
    AccountContainer,
    AccountCover,
    AuthButton,
} from '../components/account.styles.js'

export const AccountScreen = ({ navigation }) => {
    return (
        <AccountBackground>
            <AccountCover />
            <AccountContainer>
                <Spacer />

                <AuthButton
                    icon='lock-open-outline'
                    mode='contained'
                    onPress={() => navigation.navigate('Login')}
                >
                    Login
                </AuthButton>

                <Spacer size='large' />

                <AuthButton
                    icon='lock-open-outline'
                    mode='contained'
                    onPress={() => navigation.navigate('Register')}
                >
                    Register
                </AuthButton>

                <Spacer />
            </AccountContainer>
        </AccountBackground>
    )
}
