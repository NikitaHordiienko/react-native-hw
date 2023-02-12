import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native';

import BackIcon from '../assets/images/arrow-left.svg';
import CameraIcon from '../assets/images/camera.svg';
import MapIcon from '../assets/images/map-pin.svg';
import TrashIcon from '../assets/images/trash.svg';

export default function CreatePostsScreen() {
    return (
        <View style={styles.container}>
            <View style={[styles.header, styles.shadowProp]}>
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.backBtn}
                >
                    <BackIcon width={24} height={24}/>
                </TouchableOpacity>
                <Text style={styles.screenTitle}>
                    Создать публикацию
                </Text>
            </View>
            <View style={styles.form}>
                <View style={styles.postPhotoThumb}>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={styles.cameraBtn}
                    >
                        <CameraIcon width={24} height={24}/>
                    </TouchableOpacity>                    
                </View>
                <Text style={styles.photoDownloadText}>Загрузите фото</Text>
                <View style={styles.formInputThumb}>
                    <TextInput
                        style={[styles.formInput, { marginBottom: 16, fontFamily: 'Roboto-Medium' }]}
                        placeholder='Название...'
                    />
                    <View style={styles.formLocationInputThumb}>
                        <MapIcon style={styles.locationIcon} width={24} height={24}/>
                        <TextInput
                            style={[styles.formInput, {paddingLeft: 28}]}
                            placeholder='Местность...'
                        />
                    </View>
                </View>
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.postBtn}
                >
                    <Text style={styles.postBtnTitle}>
                        Опубликовать
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.deleteBtn}
                >
                    <TrashIcon width={24} height={24}/>
                </TouchableOpacity>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
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
    },
    shadowProp: {
        shadowColor: 'rgba(0, 0, 0, 0.3)',
        shadowOffset: {width: -0.5, height: 0},
        shadowOpacity: 1,
    },
    screenTitle: {
        marginLeft: 70,
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
        borderWidth: 1,
        borderColor: '#E8E8E8',
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: '#F6F6F6',
        marginBottom: 8,
    },
    cameraBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
        height: 60,
        borderRadius: '50%',
        backgroundColor: '#FFFFFF',
    },
    photoDownloadText: {
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        lineHeight: 19,
        color: '#BDBDBD',
        marginBottom: 32,
    },
    formInputThumb: {
        marginBottom: 32,
    },
    formInput: {
        width: 358,
        height: 50,
        borderBottomWidth: 1,
        borderColor: '#E8E8E8',
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        lineHeight: 19,
        color: '#212121',
    },
    formLocationInputThumb: {
        position: 'relative'
    },
    locationIcon: {
        position: 'absolute',
        top: 13,
    },
    postBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F6F6F6',
        width: 358,
        height: 50,
        borderRadius: 100,
        marginBottom: 136,
    },
    postBtnTitle: {
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        lineHeight: 19,
        color: '#BDBDBD',
    },
    deleteBtn: {
        marginLeft: 'auto',
        marginRight: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F6F6F6',
        width: 70,
        height: 40,
        borderRadius: 100,
    }
})