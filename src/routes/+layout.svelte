<script>
	import Header from './Header.svelte';
	import './styles.css';
</script>

<div class="app" id="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<p>AVIDU©2023</p>
	</footer>
</div>

<style>
	.app {
		max-width: 100vw;
		padding: 0.5rem;
		background-color: #b9b9b9;
		overflow: hidden;
		justify-content: center;
		align-items: center;
		border-radius: 0.5rem;
	}


	footer p {
		/* margin: 2rem 0 2rem 0; */
		font-weight: bolder;
		font-size: 15vw;
		text-align: center;
	}

	@media (min-width: 1200px) {
	}
</style>
