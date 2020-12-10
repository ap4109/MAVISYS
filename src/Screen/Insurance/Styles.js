import { StyleSheet } from 'react-native';
import { setValueBasedOnWidth } from '../../utils/utils';
import { setValueBasedOnHeight } from '../../utils/utils'
const Styles = StyleSheet.create({
    container: {
        backgroundColor: '#D6EAF8',
        justifyContent: 'flex-start',
        flex: 1,
    },
    viewStyle: {
        alignSelf: 'center',
        borderColor: '#357EC7',
        height: setValueBasedOnHeight(65),
        width: setValueBasedOnWidth(90),
        borderWidth: 1,
    },
    textStyle:
    {
        fontSize: 15,
        color: '#357EC7',
        fontWeight: 'bold',
        paddingHorizontal: setValueBasedOnWidth(5),

    },
    
});
export default Styles;
