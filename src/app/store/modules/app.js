/**
 * Created by mendieta on 10/23/16.
 */

import { environment } from "src/config";
export const LOCALE_CHANGED = "locale/changed";
export const LOCALE_LOADING = "locale/loading";
export const ASSET_LOADING = 'app/loading';
export const CURRENT_INDEX = 'app/currentIndex';

const state = {
    public: environment.url.public,
    locale: "",
    locale_loading: false,
    loading: true,
    currentIndex: 3,
};

const actions = {
    [LOCALE_LOADING]({ commit }) {
        commit(LOCALE_LOADING, true);
    },
    [LOCALE_CHANGED]({ commit }, locale) {
        commit(LOCALE_CHANGED, locale);
    },
    [ASSET_LOADING]({ commit }, payload) {
        commit(ASSET_LOADING, payload);
    }
};

const mutations = {
    [LOCALE_CHANGED](state, locale) {
        state.locale = locale;
        state.locale_loading = false;
    },
    [LOCALE_LOADING](state) {
        state.locale_loading = true;
    },
    [ASSET_LOADING](state, payload) {
        state.loading = payload;
    },
    [CURRENT_INDEX](state, payload) {
        state.currentIndex = payload;
    }
};

const getters = {
    locale: state => {
        return state.locale;
    },
    public: state => {
        return state.public;
    },
    currentIndex: state => {
        return state.currentIndex;
    },
};

export default { state, actions, mutations, getters };