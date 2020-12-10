import { StyleSheet } from 'react-native';
import { setValueBasedOnWidth } from '../../utils/utils';
import { setValueBasedOnHeight } from '../../utils/utils'
const Styles = StyleSheet.create({
    container: {
        paddingLeft: setValueBasedOnWidth(5),
        justifyContent: 'flex-end',
        
    },
    upperText: {
        color: '#668cff',
        fontSize: 13
    },
    logoView: {
        flexDirection: 'row'
    },
    logoStyle: {
        height: setValueBasedOnHeight(9),
        width: setValueBasedOnWidth(15),
        resizeMode: 'contain'
    },
    name: {
        flexDirection: 'column',
        justifyContent: 'center',
        paddingLeft: setValueBasedOnWidth(1)
    },
    nameStyle: {
        color: '#3d0099', 
        fontSize: 15
    }
})

export default Styles;
