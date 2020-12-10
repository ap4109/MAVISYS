import { StyleSheet } from 'react-native';
import { setValueBasedOnWidth } from '../../utils/utils';
import { setValueBasedOnHeight } from '../../utils/utils'
const Styles = StyleSheet.create({
    container: {
        backgroundColor: '#D6EAF8',
        flex: 1,
    },
    viewStyle: {
        flex:1,
        alignSelf: 'center',
        borderColor: '#357EC7',
        height: setValueBasedOnHeight(80),
        width: setValueBasedOnWidth(90),
        borderWidth: 1,
    },
});
export default Styles;
