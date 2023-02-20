import { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    FlatList,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { collection, onSnapshot } from 'firebase/firestore';
import { authSignOutUser } from '../../redux/auth/authOperations';
import { dataBase } from '../../firebase/config';

import CommentIcon from '../../assets/images/message-circle.svg';
import MapIcon from '../../assets/images/map-pin.svg';
import LogOutIcon from '../../assets/images/log-out.svg';

const userAvatar = require('../../assets/images/user.png');

export default function DefaultPostsScreen({ route, navigation }) {
    const [posts, setPosts] = useState([]);
    const dispatch = useDispatch();

    const getAllPosts = async () => {
        const postsCollection = await collection(dataBase, 'posts');

        const showCollection = await onSnapshot(postsCollection, (snapshot) => {
            setPosts(
                snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            );
        });
    }

    const signOut = () => {
        dispatch(authSignOutUser());
    }

    useEffect(() => {
        getAllPosts();
    }, []);
 
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.screenTitle}>
                    Публикации
                </Text>
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.logOutBtn}
                    onPress={signOut}
                >
                    <LogOutIcon width={24} height={24}/>
                </TouchableOpacity>
            </View>
            <View style={styles.userThumb}>
                <View style={styles.useraAvatarThumb}>
                    <Image
                        style={styles.userAvatar}
                        source={userAvatar}
                    />
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
            <FlatList
                data={posts}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={styles.postThumb}>
                        <View style={styles.postPhotoThumb}>
                            <Image
                                style={styles.postImage}
                                source={{ uri: item.photo }}
                            />
                        </View>
                        <Text style={styles.postTitle}>
                            {item.title}
                        </Text>
                        <View style={styles.postInfoThumb}>
                            <TouchableOpacity
                                activeOpacity={0.7}
                                style={styles.postValueThumb}
                                onPress={() => navigation.navigate('Comment', {photo: item.photo, postId: item.id})}
                            >
                                <CommentIcon width={24} height={24} />
                                <Text style={styles.postCommentsNumber}>0</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                activeOpacity={0.7}
                                style={styles.postValueThumb}
                                onPress={() => navigation.navigate('Map', {coordinates: item.coordinates})}
                            >
                                <MapIcon width={24} height={24}/>
                                <Text style={styles.postLocationTitle}>
                                    {`${item.location.region}, ${item.location.country}`}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />           
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
        marginBottom: 32,
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