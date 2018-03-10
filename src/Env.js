/**
 * Created by mapbar_front on 2018/3/10.
 */
/**
 * @introduction
 * 样式相关的配置，与样式无关的都不能写入里面，相当于一个全局common.css
 */
import { Platform, NativeModules, Dimensions, StatusBar } from 'react-native';

const { width, height} = Dimensions.get('screen');

const baseFontSize = width / 720;

const color = {
    mainColor: '#3c78ff',
    bgColor: '#f1f1f1',
    baseColor: '#ffffff'
}