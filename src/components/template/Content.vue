<template>
    <div class="content">
        <router-view></router-view>  <!-- fazendo isso, sempre que eu selecionar uma nova rota, smp que um componente
                                    for selecionado, ele vai renderizar dentro do router-view, o resultando desse componente -->

    </div>
</template>

<script>
export default {
    name: 'Content'
}
</script>

<style >
    .content{
        grid-area: content;
        background-color: #efefef;
        padding: 20px;

    }
</style>

