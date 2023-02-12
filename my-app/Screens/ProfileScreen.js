import { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
} from 'react-native';

const backgroundImage = require('../assets/images/bgphoto.png');
import CommentIcon from '../assets/images/messagefill.svg';
import LikeIcon from '../assets/images/thumbs-up.svg';
import MapIcon from '../assets/images/map-pin.svg';
import AddIcon from '../assets/images/add.svg';
import LogOutIcon from '../assets/images/log-out.svg';
const forestImage = require('../assets/images/forest.png');

export default function ProfileScreen() {

    return (
        <View style={styles.container}>
            <ImageBackground
                source={backgroundImage}
                style={styles.backgroundImage}                
            >
                <View style={styles.profile}>                    
                    <View style={styles.avatarThumb}>
                        <Image  style={styles.userAvatar} source={forestImage} />
                        <TouchableOpacity
                            activeOpacity={0.7}
                            style={styles.addAvatarBtn}
                            >
                            <AddIcon style={{color: '#BDBDBD', transform: [{ rotate: '45deg'}]}} width={25} height={25}/>
                        </TouchableOpacity>
                    </View>
                    <LogOutIcon style={styles.logOutIcon} width={24} height={24}/>
                    <Text style={styles.profileTitle}>
                        Natali Romanova
                    </Text>
                    <View style={styles.postThumb}>
                        <View style={styles.postPhotoThumb}>
                            <Image  style={styles.postImage} source={forestImage} />
                        </View>
                        <Text style={styles.postTitle}>Лес</Text>
                        <View style={styles.postInfoThumb}>
                            <View style={styles.postValueThumb}>
                                <CommentIcon width={24} height={24} />
                                <Text style={styles.postCommentsNumber}>8</Text>
                            </View>
                            <View style={styles.postLikesThumb}>
                                <LikeIcon width={24} height={24} />
                                <Text style={styles.postCommentsNumber}>153</Text>
                            </View>
                            <View style={styles.postLocationThumb}>
                                <MapIcon width={24} height={24}/>
                                <Text style={styles.postLocationTitle}>Ukraine</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>

    );

    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        height: '100%',
        width: '100%',
    },
    profile: {
        marginTop: 179,
        position: 'relative',
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        paddingTop: 22,
        paddingBottom: 78,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
    },
    avatarThumb: {
        position: 'absolute',
        top: -60,
        width: 120,
        height: 120,
        backgroundColor: '#F6F6F6',
        borderRadius: 16,
    },
    userAvatar: {
        width: 120,
        height: 120,
        resizeMode: 'cover',
        borderRadius: 16,
    },
    addAvatarBtn: {
        position: 'absolute',
        bottom: 14,
        right: -14,
        color: 'red'
    },
    logOutIcon: {
        marginLeft: 'auto',
        marginBottom: 46,
    },
    profileTitle: {
        fontFamily: 'Roboto-Medium',
        fontSize: 30,
        lineHeight: 35,
        marginBottom: 32,
        color: '#212121',
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
    },
    postValueThumb: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 24,
    },
    postLikesThumb: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    postLocationThumb: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 'auto',
    },
    postCommentsNumber: {
        marginLeft: 6,
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        lineHeight: 19,
        color: '#212121',
    },
    postLocationTitle: {
        marginLeft: 3,
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        lineHeight: 19,
        color: '#212121',
        textDecorationLine: 1,
    }
});