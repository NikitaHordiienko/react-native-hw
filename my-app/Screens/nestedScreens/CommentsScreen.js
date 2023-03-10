import { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    FlatList,
} from 'react-native';
import { dataBase } from '../../firebase/config';
import { collection, addDoc, doc, onSnapshot } from 'firebase/firestore';

import BackIcon from '../../assets/images/arrow-left.svg';
import SendIcon from '../../assets/images/Vector.svg';

const forestImage = require('../../assets/images/forest.png');
const userAvatar = require('../../assets/images/user.png');

export default function CommentScreen({ navigation, route }) {
    const { postId, photo } = route.params;

    const [commentValue, setCommentValue] = useState('');
    const [allComments, setAllComments] = useState([]);

    const postsCollection = doc(dataBase, 'posts', postId);
    const commentCollecton = collection(postsCollection, 'comments');

    const getAllComments = async () => {
        const showCommentsCollection = await onSnapshot(commentCollecton, (snapshot) => {
            setAllComments(
                snapshot.docs.map((doc) => ({ ...doc.data(), commentId: doc.id }))
            );
        });
    }

    useEffect(() => {
        navigation.getParent()?.setOptions({
            tabBarStyle: {
                display: "none"
        }
        });
        return () => navigation.getParent()?.setOptions({
            tabBarStyle: {
                display: "contents",
                paddingHorizontal: 75,
            },
        });
    }, [navigation]);

    useEffect(() => {
        getAllComments();
    }, []);

    const createComment = async () => {
        setCommentValue('');
        await addDoc(commentCollecton, { comment: commentValue, date: Date.now() });
    }

    const onSubmitForm = () => {
        createComment();
        setCommentValue('')
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.backBtn}
                    onPress={() => navigation.navigate('DefaultScreen')}
                >
                    <BackIcon width={24} height={24}/>
                </TouchableOpacity>
                <Text style={styles.screenTitle}>
                    ??????????????????????
                </Text>
            </View>
            <View style={styles.postPhotoThumb}>
                <Image
                    style={styles.postImage}
                    source={{uri: photo}}
                />                    
            </View>
            <FlatList
                data={allComments}
                keyExtractor={(item) => item.commentId}
                renderItem={({ item }) => (
                    <View style={styles.commentsThumb}>
                        <View style={styles.friendThumb}>
                            <View style={styles.friendAvatarThumb}>
                                <Image
                                    style={styles.friendAvatar}
                                    source={forestImage}
                                /> 
                            </View>
                            <View style={styles.friendCommentThumb}>
                                <Text style={styles.friendComment}>
                                    {item.comment}
                                </Text>
                                <Text style={styles.friendCommentDate}>
                                    {new Date(item.date).toLocaleString()}
                                </Text>
                            </View>
                        </View>
                    </View>
                )}
            />
            <View style={styles.commentForm}>
                <TextInput
                    style={[styles.formInput]}
                    placeholder='????????????????????????????...'
                    value={commentValue}
                    onChangeText={setCommentValue}
                />
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.sendBtn}

                    onPress={onSubmitForm}
                >
                    <SendIcon width={10} height={14} />
                </TouchableOpacity>
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
        marginLeft: 100,
        marginRight: 'auto',
        paddingBottom: 11,
        fontFamily: 'Roboto-Medium',
        fontSize: 17,
        lineHeight: 22,
    },
    backBtn: {
        paddingBottom: 10,
    },
    postPhotoThumb: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 358,
        height: 240,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: '#F6F6F6',
        marginBottom: 32,
    },
    postImage: {
        width: 358,
        height: 240,
        resizeMode: 'cover',
    },
    commentsThumb: {
        paddingHorizontal: 16,
    },
    friendThumb: {
        width: 358,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 24,
    },
    friendAvatarThumb: {
        width: 28,
        height: 28,
        backgroundColor: 'grey',
        borderRadius: '50%',
        overflow: 'hidden',
    },
    friendAvatar: {
        width: 28,
        height: 28,
        resizeMode: 'cover',
    },
    friendCommentThumb: {
        padding: 16,
        width: 314,
        minHeight: 69,
        backgroundColor: 'rgba(0, 0, 0, 0.03)',
        borderTopLeftRadius: 0,
        borderTopRightRadius: 6,
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6,
    },
    friendComment: {
        fontFamily: 'Roboto-Regular',
        fontSize: 13,
        lineHeight: 18,
        color: '#212121',
        marginBottom: 8,
    },
    friendCommentDate: {
        marginLeft: 'auto',
        fontFamily: 'Roboto-Regular',
        fontSize: 10,
        lineHeight: 12,
        color: '#BDBDBD',
    },
    userThumb: {
        width: 358,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 24,
    },
    userCommentThumb: {
        padding: 16,
        width: 314,
        minHeight: 69,
        backgroundColor: 'rgba(0, 0, 0, 0.03)',
        borderTopLeftRadius: 6,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6,
    },
    userCommentDate: {
        marginRight: 'auto',
        fontFamily: 'Roboto-Regular',
        fontSize: 10,
        lineHeight: 12,
        color: '#BDBDBD',
    },
    commentForm: {
        marginBottom: 30,
    },
    formInput: {
        width: 358,
        height: 50,
        borderWidth: 1,
        borderColor: '#E8E8E8',
        borderRadius: 100,
        backgroundColor: '#F6F6F6',
        fontFamily: 'Roboto-Medium',
        fontSize: 16,
        lineHeight: 19,
        color: '#212121',
        paddingLeft: 16,
        paddingRight: 42,
    },
    sendBtn: {
        position: 'absolute',
        top: 8,
        right: 8,
        width: 34,
        height: 34,
        backgroundColor: '#FF6C00',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

                {/* <View style={styles.friendThumb}>
                    <View style={styles.friendAvatarThumb}>
                        <Image
                            style={styles.friendAvatar}
                            source={forestImage}
                        /> 
                    </View>
                    <View style={styles.friendCommentThumb}>
                        <Text style={styles.friendComment}>
                            Really love your most recent photo. I???ve been trying to capture the same thing for a few months and would love some tips!
                        </Text>
                        <Text style={styles.friendCommentDate}>
                            09 ????????, 2020 | 08:40
                        </Text>
                    </View>
                </View>
                <View style={styles.userThumb}>                    
                    <View style={styles.userCommentThumb}>
                        <Text style={styles.friendComment}>
                            A fast 50mm like f1.8 would help with the bokeh. I???ve been using primes as they tend to get a bit sharper images.
                        </Text>
                        <Text style={styles.userCommentDate}>
                            09 ????????, 2020 | 09:14
                        </Text>
                    </View>
                    <View style={styles.friendAvatarThumb}>
                        <Image  style={styles.friendAvatar} source={userAvatar} /> 
                    </View>
                </View>
                <View
                    style={[styles.friendThumb, {
                        marginBottom: 0
                    }]}>
                    <View style={styles.friendAvatarThumb}>
                        <Image
                            style={styles.friendAvatar}
                            source={forestImage}
                        /> 
                    </View>
                    <View style={styles.friendCommentThumb}>
                        <Text style={styles.friendComment}>
                            Thank you! That was very helpful!
                        </Text>
                        <Text style={styles.friendCommentDate}>
                            09 ????????, 2020 | 09:20
                        </Text>
                    </View>
                </View> */}