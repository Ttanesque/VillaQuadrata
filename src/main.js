import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import App from './App.vue';
import router from './router';

import './style.css';

const i18n = createI18n({
    legacy: false, 
    locale: 'fr', 
    fallbackLocale: 'en',
});

createApp(App).use(i18n).use(router).mount('#app')
