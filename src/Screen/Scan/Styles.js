import { StyleSheet } from 'react-native';
import { setValueBasedOnWidth } from '../../utils/utils';
import { setValueBasedOnHeight } from '../../utils/utils'
const Styles = StyleSheet.create({
    container: {
        backgroundColor: '#D6EAF8',
        flex: 1,
    },
    viewStyle: {
        // flex:1,
        alignSelf: 'center',
        // justifyContent: 'space-around',
        borderColor: '#357EC7',
        height: setValueBasedOnHeight(77),
        width: setValueBasedOnWidth(90),
        borderWidth: setValueBasedOnWidth(0.4),
        
        
    },
});
export default Styles;
