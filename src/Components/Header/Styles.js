import { StyleSheet } from 'react-native';
import { setValueBasedOnWidth } from '../../utils/utils';
import { setValueBasedOnHeight } from '../../utils/utils'
const Styles = StyleSheet.create({
    container: {
        paddingHorizontal:setValueBasedOnWidth(5)
    },
    logoView: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    imageLeft: {
        height: setValueBasedOnHeight(10),
        width: setValueBasedOnWidth(28),
        resizeMode: 'contain'
    },
    imageRight: {
        height: setValueBasedOnHeight(10),
        width: setValueBasedOnWidth(28),
        resizeMode: 'center',
    },
    TouchView: {
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'center'
    },
    backButton: {
        height: 22,
        width: 22,
        alignSelf: 'center'
    },
    textStyle: {
        fontSize: 22,
        color: '#327BEC',
        fontWeight: 'bold',
        paddingLeft: setValueBasedOnWidth(1),
        
    }
}
)

export default Styles;
