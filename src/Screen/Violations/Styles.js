import { StyleSheet } from 'react-native';
import { setValueBasedOnWidth } from '../../utils/utils';
import { setValueBasedOnHeight } from '../../utils/utils'
const Styles = StyleSheet.create({
    viewStyle: {
        alignSelf: 'center',
        borderColor: '#357EC7',
        height: setValueBasedOnHeight(40),
        width: setValueBasedOnWidth(90),
        borderWidth: 1,
    },
    container: {
        backgroundColor: '#D6EAF8',
        justifyContent: 'flex-start',
        flex: 1,
    },
    textView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#327BEC',
        maxHeight: setValueBasedOnHeight(5),
        alignItems: 'center'
    },
    textStyle: {
        color: '#ffffff',
        fontSize: 22,
        fontWeight: 'bold'
    },
    viewlogoVio: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    logoVio: {
        height: setValueBasedOnHeight(10),
        width: setValueBasedOnWidth(20),

    },
    vioText: {
        color: '#2E920C',
        fontSize: 18,
        fontWeight: 'bold'
    },
    body: {
        flex: 1,
        justifyContent: 'center'
    }


});
export default Styles;
