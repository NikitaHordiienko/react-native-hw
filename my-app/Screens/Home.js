import {
    StyleSheet,
    View,
    TouchableOpacity,
} from 'react-native';

import PostsIcon from '../assets/images/grid.svg';
import UserIcon from '../assets/images/user.svg';
import CreateIcon from '../assets/images/Union.svg';

export default function Home() {
    return (
        <View style={styles.container}>
            <View style={[styles.navigation, styles.shadowProp]}>
                <View style={styles.buttonsThumb}>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        style={styles.linkBtn}
                    >
                        <PostsIcon width={24} height={24}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={styles.linkBtnActive}
                    >
                        <CreateIcon style={{color: '#FFFFFF'}} width={13} height={13}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        style={styles.linkBtn}
                    >
                        <UserIcon width={24} height={24}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    navigation: {
        position: 'absolute',
        backgroundColor: '#FFFFFF',
        bottom: 0,
        left: 0,
        width: '100%',
        height: 83,        
    },
    shadowProp: {
        shadowColor: 'rgba(0, 0, 0, 0.3)',
        shadowOffset: {width: -0.5, height: 0},
        shadowOpacity: 1,
    },
    buttonsThumb: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 9,
    },
    linkBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40,
    },
    linkBtnActive: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 70,
        height:40,
        marginLeft: 31,
        marginRight: 31,
        backgroundColor: '#FF6C00',
        borderRadius: 20,
    }
})