import { StyleSheet } from 'react-native';
import { setValueBasedOnWidth } from '../../utils/utils';
import { setValueBasedOnHeight } from '../../utils/utils'
const Styles = StyleSheet.create({
    textStyle: {
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop: setValueBasedOnHeight(4),
        fontSize: 35
    },
    viewStyle: {
        borderColor: '#357EC7',
        height: setValueBasedOnHeight(50),
        width: setValueBasedOnWidth(90),
        borderWidth: setValueBasedOnWidth(0.4),
        justifyContent: 'flex-start'
    },
    inputStyle: {
        borderBottomWidth: setValueBasedOnWidth(0.4),
        borderBottomColor: '#357EC7',
        marginHorizontal: setValueBasedOnWidth(5),
        marginTop: setValueBasedOnHeight(5),
        color: '#000000',
        fontWeight: 'bold',
        height: setValueBasedOnHeight(6),
        fontSize: 15,
    },
    keyboard: {
        backgroundColor: '#D6EAF8',
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center'
    },
    container: {
        flex: 1,
        backgroundColor: '#D6EAF8'
    }
});
export default Styles;
