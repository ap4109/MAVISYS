import { StyleSheet } from 'react-native';
import { setValueBasedOnHeight, setValueBasedOnWidth } from '../../utils/utils';
const Styles = StyleSheet.create({
    container: {
        backgroundColor: '#D6EAF8',
        justifyContent: 'flex-start',
        flex: 1,
    },
    viewStyle: {
        alignSelf: 'center',
        borderColor: '#357EC7',
        height: setValueBasedOnHeight(70),
        width: setValueBasedOnWidth(90),
        borderWidth: 1,
    },
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
export default Styles;
