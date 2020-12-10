import { StyleSheet } from 'react-native';
import { setValueBasedOnWidth } from '../../utils/utils';
import { setValueBasedOnHeight } from '../../utils/utils'
const Styles = StyleSheet.create({
    container: {
        backgroundColor: '#D6EAF8',
        flex: 1,
    },
    viewStyle: {
        alignSelf: 'center',
        borderColor: '#357EC7',
        height: setValueBasedOnHeight(77),
        width: setValueBasedOnWidth(90),
        borderWidth: 1,
    },
    logo3: {
        height: setValueBasedOnHeight(15),
        width: setValueBasedOnWidth(15),
        
        marginHorizontal:setValueBasedOnWidth(5)
    },
    logo3view: {
        
        flexDirection: 'row',
        alignSelf: 'center'
    },
    ImageView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    textStyle1: {
        fontSize: 10,
        paddingTop: setValueBasedOnHeight(4),
        fontWeight:'bold',
        marginTop:setValueBasedOnWidth(4)
    
    },
    textStyle2: {
        fontSize: 10,
        color: '#E32525',
        paddingTop: setValueBasedOnHeight(3.9),
        fontWeight:'bold',
        marginTop:setValueBasedOnWidth(3.7)
        
    },
    textStyle: {
        fontSize: 10,
        fontWeight:'bold'
    },
});
export default Styles;
