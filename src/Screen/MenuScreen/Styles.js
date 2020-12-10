import { StyleSheet } from 'react-native'
import { setValueBasedOnWidth } from '../../utils/utils';
import { setValueBasedOnHeight } from '../../utils/utils'
const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D6EAF8'
    },
    glogo: {
        height: setValueBasedOnHeight(20),
        width: setValueBasedOnWidth(35),
        resizeMode: 'contain',
        alignSelf: 'center',    
    },
    ImageView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    logo3view: {
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'center'
    },
    logo3: {
        height: setValueBasedOnHeight(20),
        width: setValueBasedOnWidth(35),
        resizeMode: 'contain',
        marginHorizontal:setValueBasedOnWidth(5)
    },
    textStyle1: {
        fontSize: 14,
        paddingTop: setValueBasedOnHeight(4),
        fontWeight:'bold',
        marginTop:setValueBasedOnWidth(4)
    
    },
    textStyle2: {
        fontSize: 16,
        color: '#E32525',
        paddingTop: setValueBasedOnHeight(3.9),
        fontWeight:'bold',
        marginTop:setValueBasedOnWidth(3.7)
        
    },
    textStyle: {
        fontSize: 14,
        fontWeight:'bold'
    },
    infoView: {
        alignSelf: 'center',
        alignItems: 'center',
        marginTop:setValueBasedOnHeight(2),
        
    },
    infoTextStyle: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    buttonView: {
        flex: 1,
        marginVertical: setValueBasedOnHeight(2),
        flexDirection: 'column',
        justifyContent: 'flex-end'
        
    },
    buttons: {
        flex:1,
        flexDirection: 'row', 
        
    },
    scanButtonView: {
         flex:1,
    },
    scanButton: {
        width: setValueBasedOnWidth(80),
         
    },
})
export default Styles;