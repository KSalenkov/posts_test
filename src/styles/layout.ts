import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const isLarge = width >= 500;

export default {width, height, isLarge};
