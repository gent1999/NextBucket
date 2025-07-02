import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const { data } = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/googlelogin`, {
          access_token: tokenResponse.access_token,
        });

        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));

        navigate('/dashboard');
      } catch (err) {
        console.error('Login failed:', err);
      }
    },
    onError: (err) => console.error('Google Login Error:', err),
  });

  return { login };
}; 