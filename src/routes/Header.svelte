<script>
	import { page } from '$app/stores';
</script>

<header class="header">
	<nav class="nav">
		<!-- <li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li> -->
		<a class="link" href="/">Home</a>

		<a class="link" href="/projects">Projects</a>

		<a class="link" href="/services">Services</a>

		<a class="link" href="/about">About</a>

		<a class="link" href="/contact">Contact</a>
	</nav>
</header>

<style>
	header {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.nav {
		border: solid black 2px;
		background-color: #b8b8b8;
		position: fixed;
		/* right: 1rem; */
		bottom: 0.3rem;
		z-index: 10;
		border-radius: 0.5rem;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		padding: 1rem 0.5rem 1rem 0.5rem;
		
	}

	.link {
		font-size: 0.9rem;
		margin: 0 0.5rem 0 0.5rem;
	}

	/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
	.link {
		font-size: 1.3rem;
	}
}

@media (min-width: 992px) {
		.nav {
			max-width: fit-content;
		}
	}
</style>
