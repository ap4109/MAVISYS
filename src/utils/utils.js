import {Dimensions} from 'react-native'
export const setValueBasedOnWidth=(value)=>{
    let deviceWidth = Dimensions.get("window").width;
    
    caculatedValue = deviceWidth * value / 100

    return caculatedValue
}
export const setValueBasedOnHeight=(value)=>{
    let deviceHeight = Dimensions.get("window").height;
    
    caculatedValue = deviceHeight * value / 100

    return caculatedValue
}
