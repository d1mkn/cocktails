import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsAuth,
  selectIsRefreshing,
  selectUser,
  selectIsLoading,
} from './selectors';
import { signOut, refreshUser } from './operations';
import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const user = useSelector(selectUser);
  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoading = useSelector(selectIsLoading);
  const navigation = useNavigate();

  const handleSignOut = () => {
    dispatch(signOut());
  };

  const handleRefreshUser = () => {
    dispatch(refreshUser());
  };

  return {
    isAuth,
    user,
    isRefreshing,
    isLoading,
    handleSignOut,
    navigation,
    handleRefreshUser,
  };
};
