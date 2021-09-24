import { useCallback, useEffect } from 'react';
import authService from '../../service/authService';
import {setUserData} from '../../actions/accountAction';
import { useDispatch } from 'react-redux';


const Auth = ({children}) => {

    const dispatch = useDispatch();

    const initAuth = useCallback( async () => {
        if(authService.isAuthenticated()) {
            //recuperar os dados novamente do usuario logado
            await dispatch(setUserData());
        }
    },[dispatch])

    useEffect(() => {
        initAuth();
    },[initAuth])

    return children;
}
 
export default Auth;