<template>
    <footer class="footer">
        <span>Copyright Oficial Brasil© <strong>MARKPRESS </strong>2021</span>
    </footer>
   
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style >
    .footer{
        grid-area: footer;
        background-color: #DDD;
        color: #333;

        display: flex;
        align-items: center;
        justify-content: flex-end; /* alinhar do lado direito da tela */
        padding-right: 10px; /* para que o texto do footer não fique colado do lado direito da pagx */

    }
</style>

