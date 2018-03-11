/**
 * Created by mapbar_front on 2018/3/10.
 */
import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {StackNavigator} from 'react-navigation'

import Config from './config';


class HomeScreen extends Component {
    render() {
        return (
            <View>
                <Text>HomeScreen</Text>
                <Button
                    title='goto'
                    onPress={() => this.props.navigation.navigate('Other')}
                />
            </View>
        )
    }
}
class OtherScreen extends Component {
    render() {
        return (
            <View>
                <Text>OtherScreen</Text>
                <Button
                    title='goBack'
                    onPress={() => this.props.navigation.goBack()}
                />
            </View>
        )
    }
}

import LoginPage from './views/loginPage/LoginPage';

const RootStack = StackNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
        Other: {
            screen: OtherScreen,
        },
        Login: {
            screen: LoginPage,
        }
    },
    {
        initialRouteName: 'Login',
    }
);

export default class App extends React.Component {
    render() {
        return <RootStack />;
    }
}