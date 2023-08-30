import { PublicClientApplication } from '@azure/msal-browser';
import axios from 'axios';
import Swal from 'sweetalert2';

import { msalConfig, logoutRequest } from '../configs/msal-configs'
import {msalInstance} from '../main'
import errorClasses from './4xx-alert.module.css';

const instance = axios.create({
    baseURL: 'https://testingsystem-backend-dev.azurewebsites.net/'
})

// const pca = new PublicClientApplication(msalConfig);
// const accounts = pca.getAllAccounts()

instance.interceptors.request.use( async function(config) {
        try {
            const request = {
                scopes: ['openid', 'User.Read']
            }
            const acquiredToken = await msalInstance.acquireTokenSilent(request);

            await axios.get('https://graph.microsoft.com/v1.0/me', {
                headers: {
                    Authorization: `Bearer ${acquiredToken.accessToken}`
                }
            })

            config.headers.access_token = acquiredToken.accessToken;
            config.headers.id_token = acquiredToken.idToken;
        } catch(error) {
            console.error("AcquiredSilentToken Error: ", error)
        }
    return config
}, async function(error) {
    console.log('Error: ', error)
    return Promise.reject(error);
})

instance.interceptors.response.use((response) => response, async (error)=> {
    console.log('Error Response: ', error.response)
    if (error.response?.status === 401)
    return Swal.fire({
      icon: "warning",
      titleText: "ระยะเวลาการเข้าใช้งานของท่านหมดแล้ว",
      text: "กรุณาเข้าสู่ระบบใหม่อีกครั้ง",
      confirmButtonText:  "เข้าสู่ระบบอีกครั้ง",
      confirmButtonColor: "#ED6F2D",
      allowOutsideClick: false,
      allowEscapeKey: false,
      customClass: {
        popup: errorClasses.popup,
        title: errorClasses.title,
        confirmButton: errorClasses["btn-confirm"],
      },
    }).then((swalResult) => {
      if (swalResult.isConfirmed) {
        localStorage.clear();
        msalInstance.loginRedirect({
          ...logoutRequest,
          ...(accounts.length ? { account: accounts[0] } : null),
        });
      }
    });
    return Promise.reject(error);
})

export default instance