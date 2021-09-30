import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
    appId: 'com.logseq.app',
    appName: 'Logseq',
    bundledWebRuntime: false,
    webDir: 'public',
    plugins: {
        SplashScreen: {
            launchShowDuration: 3000,
            launchAutoHide: false
        },
    }
    // do not commit this into source control
    // source: https://capacitorjs.com/docs/guides/live-reload
    // , server: {
    //     url: process.env.LOGSEQ_APP_SERVER_URL,
    //     cleartext: true
    // }
};

export = config;