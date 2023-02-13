import { useState } from 'react';
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

const backgroundImage = require('../assets/images/bgphoto.png');

const inititalState = {
    email: '',
    password: '',
}

export default function LoginScreen({navigation}) {
    const [state, setState] = useState(inititalState);
    const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
    const [activeInputName, setActiveInputName] = useState('');
    const [isPasswordHidden, setIsPasswordHidden] = useState(true);

    const keyboardCloseToggle = () => {
        setActiveInputName('')
        setIsKeyboardOpen(false)
        Keyboard.dismiss();
    }

    const passwordHideToggle = () => {
        setIsPasswordHidden(!isPasswordHidden)
    }

    const onSubmitForm = () => {
        console.log(state);
        setState(inititalState);
    }

    return (
        <TouchableWithoutFeedback onPress={keyboardCloseToggle}>
            <View style={styles.container}>
                <ImageBackground
                    source={backgroundImage}
                    style={styles.backgroundImage}                
                >
                    <KeyboardAvoidingView
                        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                        style={styles.containerWithKeyboard}
                    >
                        <View style={{...styles.form, marginTop: isKeyboardOpen ? 263 : 355}}>
                            <Text style={styles.formTitle}>
                                Войти
                            </Text>
                            <View style={styles.formInputThumb}>
                                <TextInput style={[styles.formInput, {
                                    marginBottom: 16, activeInputName,
                                    backgroundColor: activeInputName === 'email' ? '#FFFFFF' : '#F6F6F6',
                                    borderColor: activeInputName === 'email' ? '#FF6C00' : '#E8E8E8'
                                    }]}
                                    placeholder='Адрес электронной почты'
                                    value={state.email}
                                    keyboardType='email-address'
                                    onFocus={() => {
                                        setIsKeyboardOpen(true);
                                        setActiveInputName('email')
                                    }}
                                    onBlur={() => {
                                        setActiveInputName('')
                                    }}
                                    onSubmitEditing={keyboardCloseToggle}
                                    onChangeText={(value) => setState((prevState) => ({...prevState, email: value}))}
                                />
                                <View style={styles.formPasswordThumb}>
                                    <TextInput style={[styles.formInput, {
                                        activeInputName,
                                        backgroundColor: activeInputName === 'password' ? '#FFFFFF' : '#F6F6F6',
                                        borderColor: activeInputName === 'password' ? '#FF6C00' : '#E8E8E8',
                                        paddingRight: 95
                                        }]}
                                        placeholder='Пароль'
                                        value={state.password}
                                        secureTextEntry={isPasswordHidden}
                                        onFocus={() => {
                                            setIsKeyboardOpen(true);
                                            setActiveInputName('password')
                                        }}
                                        onBlur={() => {
                                            setActiveInputName('')
                                        }}
                                        onSubmitEditing={keyboardCloseToggle}
                                        onChangeText={(value) => setState((prevState) => ({...prevState, password: value}))}
                                    />
                                    <TouchableOpacity
                                        activeOpacity={0.5}
                                        style={styles.showPasswordBtn}
                                        onPress={passwordHideToggle}
                                    >
                                        <Text style={styles.showPasswordBtnTitle}>
                                            {isPasswordHidden ? 'Показать' : 'Скрыть'}
                                        </Text>
                                    </TouchableOpacity>                            
                                </View>                        
                            </View>                            
                            <TouchableOpacity
                                activeOpacity={0.7}
                                style={styles.registerBtn}
                                onPress={onSubmitForm}>
                                <Text style={styles.registerBtnTitle}>
                                    Войти
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                activeOpacity={0.5}
                                onPress={() => navigation.navigate('Register')}
                            >
                                <Text style={styles.linkBtn}>
                                    Нет аккаунта? Зарегистрироваться
                                </Text>
                            </TouchableOpacity>                    
                        </View>
                    </KeyboardAvoidingView>
                </ImageBackground>
                </View>
            </TouchableWithoutFeedback>
    );

    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    },
    containerWithKeyboard: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        height: '100%',
        width: '100%',
    },
    form: {
        position: 'relative',
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        paddingTop: 32,
        paddingBottom: 144,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
    },
    formTitle: {
        fontFamily: 'Roboto-Medium',
        fontSize: 30,
        lineHeight: 35,
        marginBottom: 33,
    },
    formInput: {
        paddingLeft: 16,
        paddingRight: 16,
        width: 343,
        height: 50,
        borderWidth: 1,
        borderRadius: 8,
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        lineHeight: 19,
    },
    formPasswordThumb: {
        position: 'relative',
    },
    showPasswordBtn: {
        position: 'absolute',
        right: 0,
        paddingTop: 16,
        paddingBottom: 15,
        paddingRight: 16,
    },
    showPasswordBtnTitle: {
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        lineHeight: 19,
        color: '#1B4371',
    },
    formInputThumb: {
        marginBottom: 43,
    },
    registerBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF6C00',
        width: 343,
        height: 50,
        borderRadius: 100,
        marginBottom: 16,
    },
    registerBtnTitle: {
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        lineHeight: 19,
        color: '#FFFFFF',
    },
    linkBtn: {
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        lineHeight: 19,
        color: '#1B4371',
    }
});