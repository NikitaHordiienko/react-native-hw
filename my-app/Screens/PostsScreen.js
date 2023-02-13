import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';

import CommentIcon from '../assets/images/message-circle.svg';
import MapIcon from '../assets/images/map-pin.svg';
import LogOutIcon from '../assets/images/log-out.svg';

const userAvatar = require('../assets/images/user.png');
const forestImage = require('../assets/images/forest.png');

export default function PostsScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.screenTitle}>
                    Публикации
                </Text>
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.logOutBtn}
                >
                    <LogOutIcon width={24} height={24}/>
                </TouchableOpacity>
            </View>
            <View style={styles.userThumb}>
                <View style={styles.useraAvatarThumb}>
                    <Image  style={styles.userAvatar} source={userAvatar} />
                </View>
                <View>
                    <Text style={styles.userName}>
                        Natali Romanova
                    </Text>
                    <Text style={styles.userMail}>
                        email@example.com
                    </Text>
                </View>                
            </View>
            <View style={styles.postThumb}>
                <View style={styles.postPhotoThumb}>
                    <Image  style={styles.postImage} source={forestImage} />
                </View>
                <Text style={styles.postTitle}>Лес</Text>
                <View style={styles.postInfoThumb}>
                    <View style={styles.postValueThumb}>
                        <CommentIcon width={24} height={24} />
                        <Text style={styles.postCommentsNumber}>0</Text>
                    </View>
                    <View style={styles.postValueThumb}>
                        <MapIcon width={24} height={24}/>
                        <Text style={styles.postLocationTitle}>Ivano-Frankivs'k Region, Ukraine</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    header: {
        flexDirection: 'row',
        paddingHorizontal: 16,
        alignItems: 'flex-end',
        justifyContent: 'center',
        width: '100%',
        height: 88,
        backgroundColor: '#FFFFFF',
        marginBottom: 32,
        borderBottomWidth: 0.5,
        borderBottomColor: '#E8E8E8',
    },
    screenTitle: {
        marginLeft: 'auto',
        marginRight: 106,
        paddingBottom: 11,
        fontFamily: 'Roboto-Medium',
        fontSize: 17,
        lineHeight: 22,
    },
    logOutBtn: {
        paddingBottom: 10,
    },
    userThumb: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 'auto',
        paddingHorizontal: 16,
        marginBottom: 32,
    },
    useraAvatarThumb: {
        width: 60,
        height: 60,
        backgroundColor: 'grey',
        borderRadius: 16,
        overflow: 'hidden',
        marginRight: 8,
    },
    userAvatar: {
        width: 60,
        height: 60,
        resizeMode: 'cover',
    },
    userName: {
        fontFamily: 'Roboto-Bold',
        fontSize: 13,
        lineHeight: 15,
        color: '#212121',
    },
    userMail: {
        fontFamily: 'Roboto-Regular',
        fontSize: 11,
        lineHeight: 13,
        color: 'rgba(33, 33, 33, 0.8)',
    },
    postThumb: {
        paddingHorizontal: 16,        
    },
    postPhotoThumb: {
        width: 358,
        height: 240,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: 'grey',
        marginBottom: 8,
    },
    postImage: {
        width: 358,
        height: 240,
        resizeMode: 'cover',
    },
    postTitle: {
        fontFamily: 'Roboto-Medium',
        fontSize: 16,
        lineHeight: 19,
        color: '#212121',
        marginBottom: 8,
    },
    postInfoThumb: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    postValueThumb: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    postCommentsNumber: {
        marginLeft: 6,
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        lineHeight: 19,
        color: '#BDBDBD',
    },
    postLocationTitle: {
        marginLeft: 3,
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        lineHeight: 19,
        color: '#212121',
        textDecorationLine: 1,
    }    
})