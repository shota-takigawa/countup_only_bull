import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import config from "./config";

const Firebase = {
  install(Vue) {
    const firebaseApp = firebase.initializeApp(config);
    const settings = { timestampsInSnapshots: true };
    firebaseApp.firestore().settings(settings);

    // instance propertyの登録
    Vue.prototype.$firestore = firebaseApp.firestore();
    Vue.prototype.$auth = firebaseApp.auth();
  }
};

export default Firebase;
