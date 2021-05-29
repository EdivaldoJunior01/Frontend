<template>
    <div class="user-dropdown"> 
         <div class="user-button"> <!-- inicio botton -->
             <span class="d-nome d-sm-block"> {{ user.name }}</span>
             <div class="user-dropdown-img"> 
                 <Gravatar :email="user.email" alt="User"/> <!-- os ":" e se eu quero que o valor seja interpretado eu coloco os : antes da propriedade  -->
            </div>
            <i class="fa fa-angle-down"></i>   <!-- icone para mostrar que se trata do dropdown (setinha pra baixo no canto superio direito) -->
        </div>                      <!-- final botton -->
        <div class="user-dropdown-content"> <!-- links -->
            <router-link to=/admin> <!-- passando a pag admin quando clicar no botão -->
                <i class="fa fa-cogs"></i> Administração
            </router-link>
            <a href>
                <i class="fa fa-sign-out"></i> Sair</a>
        </div>
    </div>
   
</template>

<script>
import { mapState } from 'vuex'
import Gravatar from 'vue-gravatar'

export default {
    name:'UserDropdown',
    components: {Gravatar}, //pra poder usar o gravatar dentro do template
    computed: mapState(['user'])  //tenho acesso ao usuario dentro do componente usuario definido na store.js

    
}
</script>

<style>
    .user-dropdown{
        position: relative;
        height: 100; /* altura 100%*/ 
    }
    .user-button{
        display: flex;
        align-items: center;
        color: #fff;
        font-weight: 100;
        height: 100%;
        padding: 0px 20px;/* espaçameto na direita e na esquerda*/
    }
    .user-dropdown:hover{
        background-color: rgba(0, 0, 0, 0.2);
    }
    .user-dropdown-img{
        margin: 0px 10px; /* para que a img de uma distancia entre os dois componentes*/
    }
    .user-dropdown-img > img{/*confg para que img fique do tamanho certo*/
        max-height: 37px; /*altura max da img*/
        border-radius: 5px;
    }
    .user-dropdown-content{
        position: absolute;
        right: 0px; /*alinhar do lado direito da tela */
        background-color: #f9f9f9;
        min-width: 170px; /*tamanho min*/
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        padding: 10px;
        z-index: 1;     /*para aparecer na frente das outras coisas ter uma certa preferencia*/

        display: flex;
        flex-direction: column; /*agr sapoha e uma coluna*/
        flex-wrap: wrap;

        visibility: hidden;
        opacity: 0;
        transition: visibility 0s, opacity 0.5s linear; 
    }

    .user-dropdown:hover .user-dropdown-content{ /*quando o userdropdown estiver com a classe hover sign que agr ele vai aplicar outra regra em cima do content*/
        visibility: visible;
        opacity: 1;
    }
    .user-dropdown-content a{
        text-decoration: none;
        color: #000;
        padding: 10px; /*Espaçamento entre os links (adm e sair)*/
    }
    .user-dropdown-content a:hover{ /*quando passar o mause mudar a cor do link*/
    text-decoration: none;
    color: #000;
    background-color:#ededed;
    }

</style>

