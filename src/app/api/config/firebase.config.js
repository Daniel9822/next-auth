import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { envs } from './envs'

export const firebaseConfig = {
  apiKey: envs.API_KEY,
  authDomain: envs.AUTH_DOMAIN,
  projectId: envs.PROJECT_ID,
  storageBucket: envs.STORAGE_BUCKET,
  messagingSenderId: envs.MESSAGING_SENDER_ID,
  appId: envs.APP_ID,
  measurementId: envs.MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);