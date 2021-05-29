<template>
    <div class="admin-pages">
        <PageTitle icon="fa fa-cogs" main="Adiministração do Sistema"
            sub="Cadastros & Cia"/>
            <div class="admin-pages-tabs">
                <b-card no-body> <!-- tags que começam com b vem do bootstrapvue--> 
                    <b-tabs card>
                        <b-tab title="Eventos" active>
                            <EventAdmin /> <!--chamando a tela--> 
                        </b-tab>    
                         <b-tab title="Categorias">
                            <CategoryAdmin/> <!--chamando a tela-->
                        </b-tab>  
                          <b-tab title="Usuários">
                            <UserAdmin /> <!--chamando a tela-->
                        </b-tab>
                    </b-tabs>
                 </b-card>
            </div>
    </div>
    
</template>



<script>
import PageTitle from "../template/PageTitle"
import EventAdmin from "./EventAdmin"
import CategoryAdmin from "./CategoryAdmin"
import UserAdmin from "./UserAdmin"
export default {
    name: 'AdminPages',
    components:{ PageTitle, EventAdmin, CategoryAdmin, UserAdmin } //registrando o componente para conseguir usar dentro do template
}
</script>

<style>

</style>