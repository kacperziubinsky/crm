import { createStore } from "vuex";
import mutations from "./mutations";
const store = createStore({
    state(){
        return {
            clients: [
                {id: 0, company: 'Krzak', name: 'Wojciech', mail: 'kontakt@krzak.pl', phone: '+48 343 232 123', task: 'Zadzwonić, zbałamucić'},
                {id: 1, company: 'Serdel', name: 'Zbigniew', mail: 'kontakt@serdel.pl', phone: '+48 123 123 123', task: 'Żądać kasy!'}
            ],
            projects: [
                {id: 0, company: 'Krzak', name: 'Strona Internetowa', tasks: ['Projekt strony głównej', 'Dodać SEO', 'Stworzyć logo']},
                {id: 1, company: 'Serdel', name: 'Sklep', tasks: ['zainstalować Woocomerce', 'Dodać produkty', 'Przetestować płatność']}
            ],
        }
    },
    mutations
});

export default store;