import { StatusBar, FlatList, SafeAreaView, View } from 'react-native'
import styled from 'styled-components/native'

export const SafeArea = styled(SafeAreaView)`
    flex: 1;
    ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px;`}
    background-color: ${(props) => props.theme.colors.bg.primary}
`
