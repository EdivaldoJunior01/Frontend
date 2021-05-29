<template>
    <div class="stat">
        <div class="stat-icon">
            <i :class="icon" :style="style"></i>
        </div>
        <div class="stat-info">
            <span class="stat-title"> {{ title }} </span>
            <span class="stat-value"> {{ value }} </span>
        </div>
    </div>
</template>


<script>
export default {
    name: 'Stat',
    props: ['title', 'value', 'icon', 'color'], //titulo, valor, icone, e a cor
    computed:{
        style(){
            return "color:" + (this.color || "#000") //se eventualmente a cor n for passada o componente ira assumir a cor preto
        }
    }
}
</script>

<style>
    .stat{
        flex: 1; /*pra ele crescer de acordo com a nessecidade */
        display: flex;
        border-radius: 8px;
        margin-right: 20px; /*para nao ficar grudado no outro*/
        margin-bottom: 20px; /*se eventualmente quando quebrar linha n ficar grudado no um componente no outro*/
        background-color: #fff;
        padding: 20px;
        border: 1px solid rgba(0, 0, 0, 0.2);
        box-shadow: 0 1px 5px rgba(0, 0 , 0, 0.15);     
    }
    .stat-icon{
        display: flex;
        align-items: center;
    }
    .stat-icon i{
        font-size: 5rem;
    }
    .stat-info{
        flex: 1; /* significa que esse componente stat-info ele vai crescer dentro de um flex container
        que no caso e state ou seja o stat-icon nao vai crescer mais o stat-info sim*/
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }
    .stat-title{
        font-size: 1.2rem;

    }
    .stat-value{
        font-size: 3rem;
    }
</style>