    import Vue from 'vue'
    import Vuex from 'vuex'
     

    Vue.use(Vuex)

    export default new Vuex.Store({
        state:{
            isMenuVisible: true,
            user: {
                name: 'Lucas Lopeszera',
                email: 'luqinhasgameplay@cidade.com.br'
            }
        },
        mutations:{
            toggleMenu(state, isVisible){
                 if(isVisible === undefined){
                    state.isMenuVisible = !state.isMenuVisible  //se tiver verdadeiro atribui falso e se tiver falso atribui verdadeiro
                 }else{
                     state.isMenuVisible = isVisible
                 }
            }
        }
    })