<script lang="ts">
  import { Link } from 'svelte-navigator'
  import { slide, fade } from 'svelte/transition'
  import formatRoutes from '../../utils/formatRoutes'
  export let navBarLinks: string[]
  export let toggleShowSmallMenu: () => boolean

  const formattedRoutes = formatRoutes(navBarLinks)
</script>

<div class="container" transition:fade={{ duration: 200 }}>
  <div
    class="small-menu surface"
    on:click|stopPropagation
    transition:slide={{ duration: 200 }}
  >
    <h3 class="title">Menu</h3>
    {#each formattedRoutes as { link, name }}
      <Link on:click={toggleShowSmallMenu} to={link} class="menu-item">
        <p>{name}</p>
      </Link>
    {/each}
  </div>
</div>

<style>
  .container {
    height: 100vh;
    width: 100vw;
    background: rgba(244, 244, 244, 0.8);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
  }

  :global(body.dark) .container {
    background: rgba(11, 11, 11, 0.8);
  }

  .small-menu {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 90%;
    margin-left: auto;
    margin-right: auto;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, 1fr);
    gap: 10px;

    padding-bottom: 2rem;
    text-align: center;
    box-shadow: var(--shadow-outside-2);
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  .title {
    margin: 0;
  }

  :global(.small-menu > .menu-item) {
    color: rgba(var(--monochromatic-color), 0.7);
    text-decoration: none;
    border-radius: 6px;
  }

  p {
    margin: 0;
  }

  @media only screen and (min-width: 768px) {
    .container {
      display: none;
    }
  }
</style>
