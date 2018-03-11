/**
 * Created by mapbar_front on 2018/3/11.
 */
import { View, Text, Button, Image } from 'react-native';
import React,{ Component } from 'react';





export default class LoginPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            showType: 1,
        }
    }
    componentDidMount(){
        storage.load({
            key: 'loginState',

            // autoSync(默认为true)意味着在没有找到数据或数据过期时自动调用相应的sync方法
            autoSync: true,

            // syncInBackground(默认为true)意味着如果数据过期，
            // 在调用sync方法的同时先返回已经过期的数据。
            // 设置为false的话，则等待sync方法提供的最新数据(当然会需要更多时间)。
            syncInBackground: true,

            // 你还可以给sync方法传递额外的参数
            syncParams: {
                extraFetchOptions: {
                    // 各种参数
                },
                someFlag: true,
            },
        }).then(res => {
            console.log(res);
        })
    }
    LoginEvent(){
        console.log('login')
    }

    render(){
        return (
            <View>
                <View>
                    <Image/>

                </View>
                <View>
                    <View/>
                    <Text>
                        用短信验证码登录
                    </Text>
                </View>
                <View>
                    <Button
                        onPress={() => this.LoginEvent() }
                        title="Press Me"
                        accessibilityLabel="See an informative alert"
                    />
                </View>
                <View>

                </View>

            </View>
        )
    }
}