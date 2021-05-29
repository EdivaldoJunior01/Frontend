<template>
   <div class="home">
        <PageTitle icon="fa fa-home" main="Dashboard"
            sub="Pensou em presença pensou em Marks Press"/>

        <div class="stats">
            <Stat title="Categorias" :value="stat.categories"
                icon="fa fa-folder" color="#d54d50" />

            <Stat title="Eventos" :value="stat.articles"
                icon="fa fa-meh-o" color="#3bc480" />
            
            <Stat title="Usuários" :value="stat.users"
                icon="fa fa-user" color="#3282cd" />
        </div>
    </div>
</template>

<script>
import PageTitle from "../template/PageTitle"
import Stat from './Stat'
import axios from 'axios' //meio que e pro backand 
import { baseApiUrl } from '@/global'

export default {
    name: 'home',
    components: { PageTitle, Stat},  //resgistrando ele para consegui usar dentro do template
    data: function(){
        return{
            stat: {}
        }
    },
    methods:{
        getStats(){
            axios.get(`${baseApiUrl}/stats`).then(res => this.stat = res.data)
        }
    },
    mounted(){
        this.getStats()
    }
}
</script>


<style>
    .stats{
        display: flex;
        justify-content: space-between; /* cada um dos componentes ocupa um canto (categorias, eventos e usuario)*/
        flex-wrap: wrap; /*permite que quebre as linhas */
         
    }
</style>