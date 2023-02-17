import { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
} from 'react-native';
import { Camera } from 'expo-camera';
import * as Location from 'expo-location';

import BackIcon from '../assets/images/arrow-left.svg';
import CameraIcon from '../assets/images/camera.svg';
import MapIcon from '../assets/images/map-pin.svg';
import TrashIcon from '../assets/images/trash.svg';

export default function CreatePostsScreen({ navigation }) {
    const [hasPermission, setHasPermission] = useState(null);
    const [camera, setCamera] = useState(null);
    const [photo, setPhoto] = useState(null);
    const [isCameraReady, setIsCameraReady] = useState(false);
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState(null);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === "granted");
        })();
        (async () => {      
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }
        })();
    }, []);

    const takePhoto = async () => {
        const photo = await camera.takePictureAsync();
        setPhoto(photo.uri);
        let geoLocation = await Location.getCurrentPositionAsync({});
        let address = await Location.reverseGeocodeAsync(geoLocation.coords);
        setLocation(...address)
    }

    const onCameraReady = () => {
        setIsCameraReady(true);
    };

    if (hasPermission === null) {
        return <View />;
    };

    if (hasPermission === false) {
        return <Text style={styles.text}>No access to camera</Text>;
    };

    const onSubmitForm = () => {
        navigation.navigate('DefaultScreen', { photo, title, location });
        setPhoto(null);
        setTitle('');
        setLocation(null);
    };
    const clearForm = () => {
        setPhoto(null);
        setTitle('');
        setLocation(null);
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.backBtn}
                    onPress={() => navigation.navigate('Posts')}
                >
                    <BackIcon width={24} height={24}/>
                </TouchableOpacity>
                <Text style={styles.screenTitle}>
                    Создать публикацию
                </Text>
            </View>
            <View style={styles.form}>
                {photo === null
                    ?
                    <Camera
                        style={styles.postPhotoThumb}
                        ref={setCamera}
                        onCameraReady={onCameraReady}
                    >
                        <TouchableOpacity
                            activeOpacity={0.7}
                            style={{...styles.cameraBtn, backgroundColor: '#FFFFFF'}}
                            onPress={takePhoto}
                        >
                            <CameraIcon
                                style={{ color: '#BDBDBD' }}
                                width={24}
                                height={24}
                            />
                        </TouchableOpacity>                    
                    </Camera>
                    :
                    <View style={styles.postPhotoThumb}>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            style={{...styles.cameraBtn, backgroundColor: 'rgba(255, 255, 255, 0.3)'}}
                            onPress={() => setPhoto(null)}
                        >
                            <CameraIcon
                                style={{ color: '#FFFFFF' }}
                                width={24}
                                height={24}
                            />
                        </TouchableOpacity> 
                        <Image
                            style={styles.postImage}
                            source={{ uri: photo }}
                        />
                    </View>
                }                
                <Text style={styles.photoDownloadText}>
                    {photo === null ? 'Загрузите фото' : 'Редактировать фото'}
                </Text>
                <View style={styles.formInputThumb}>
                    <TextInput
                        style={[styles.formInput, { marginBottom: 16, fontFamily: 'Roboto-Medium' }]}
                        placeholder='Название...'
                        value={title}
                        onChangeText={(value) => setTitle(value)}
                    />
                    <View style={styles.formLocationInputThumb}>
                        <MapIcon style={styles.locationIcon} width={24} height={24}/>
                        <TextInput
                            style={[styles.formInput, { paddingLeft: 28 }]}
                            editable={false}
                            placeholder={photo === null ? 'Местность...' : 'Определяем местоположение...'}
                            value={location === null ? '' : `${location.region}, ${location.country}`}
                        />
                    </View>
                </View>
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={{
                        ...styles.postBtn,
                        backgroundColor: photo === null || title === '' || location === null ? '#F6F6F6' : '#FF6C00'
                    }}
                    onPress={onSubmitForm}
                >
                    <Text
                        style={{
                            ...styles.postBtnTitle,
                            color: photo === null || title === '' || location === null ? '#BDBDBD' : '#FFFFFF'
                        }}
                    >
                        Опубликовать
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.deleteBtn}
                    onPress={clearForm}
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
        position: 'relative',
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
        width: 358,
        height: 50,
        borderRadius: 100,
        marginBottom: 136,
    },
    postBtnTitle: {
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        lineHeight: 19,
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
    },
    postImage: {
        position: 'absolute',
        zIndex: -1,
        width: 358,
        height: 240,
        resizeMode: 'cover',
    },
})