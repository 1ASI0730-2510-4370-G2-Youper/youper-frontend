import es from "./locales/es.json";
import en from "./locales/en.json";
import {createI18n} from "vue-i18n"; // se debe instalar


const i18n = createI18n({
    legacy: true,
    locale: "es",
    globalInjection: true,
    messages: {
        es,
        en
    },
});

export default i18n;
