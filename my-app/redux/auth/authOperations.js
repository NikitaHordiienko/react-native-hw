import { auth } from '../../firebase/config';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    onAuthStateChanged,
    signOut
} from "firebase/auth";
import { authSlice } from './authReducer';

const {
    updateUserProfile,
    authStateChanged,
    authSignOut
} = authSlice.actions;

export const authSignInUser = ({email, password}) => async (dispatch, getState) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log('error', error);
        console.log('error. message', error.message);
    }
};

export const authSignUpUser = ({login, email, password}) => async (dispatch, getState) => {
    try {
        await createUserWithEmailAndPassword(auth, email, password);
        
        await updateProfile(auth.currentUser, {
            displayName: login,
        });
        
        const user = await auth.currentUser;
        
        dispatch(updateUserProfile({ userId: user.uid, login: user.displayName }));
    } catch (error) {
        console.log('error', error);
        console.log('error. message', error.message);
    }
};

export const authSignOutUser = () => async (dispatch, getState) => {
    await signOut(auth);

    dispatch(authSignOut());
};

export const authStateChangeUser = () => async (dispatch, getState) => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            dispatch(authStateChanged({stateChange: true}));
            dispatch(updateUserProfile({ userId: user.uid, login: user.displayName }));            
        }  
    });
};