<template>
	<div id="app" :class="{'hide-menu': !isMenuVisible}"> <!-- 'hide-menu se o menu nao estiver visivel automaticamente sera aplicado em hide menu, que foi emplementado no css logo abaixo -->
		<Header title="Mark Press - Sistema de Aferição de presença" 
		:hideToggle="false"
		:hideUserDropdown="false"/>
		<Menu/>
		<Content/>
		<Footer/>
	</div>
</template>

<script>
import { mapState } from 'vuex'  //responsavel por mapear um atributo da store dentro do meu componente

 import Header from "./components/template/Header"
 import Menu from "./components/template/Menu"
 import Content from "./components/template/Content"
 import Footer from "./components/template/Footer"

export default {
	name: "App",
	components: {Header, Menu, Content, Footer},
	computed: mapState(['isMenuVisible'])
}
</script>

<style>

	*{
		font-family: "Lato", sans-serif;	
	}
	body{
		margin: 0; /* tirando as margens para ocupar as telas inteiras */
	
	}
	#app{ /* id da aplicação definida la em cima app */
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale; /*suavisar as fontes quando renderizar a aplicação */

		height: 100vh; /*100vh significa que ele via ocupar a tela inteira da aplicação*/
		display: grid; /* para organizar os grid-area de cada componente na tela*/
		grid-template-rows: 60px 1fr 40px; /*60 px header 1f e o conteudo da pag que vai ocupar o max que der e 40 e o rodape (footer)*/

		grid-template-columns: 300px 1fr; /* duas colunas uma de 300px que sera o menu*/
		grid-template-areas: 
			"header header" /*(tempos 2 colunas e seis linhas) primeira linha header 2x qye vai ocupar de ponta a ponta*/
			"menu content" /* 2 linha menu do lado esquerdo e o content do lado direio */
			"menu footer"; /* 2 linha menu do lado esquerdo e o footer do lado direio */
	}
	#app.hide-menu{ /*me de qualquer elemento que tem o id app e tenha a classe hide-menu*/
		grid-template-areas:
			"header header" /*(tempos 2 colunas e seis linhas) primeira linha header 2x qye vai ocupar de ponta a ponta*/
			"content content" /* 2 linha menu do lado esquerdo e o content do lado direio */
			"footer footer"; /* 2 linha menu do lado esquerdo e o footer do lado direio */
	}

</style>