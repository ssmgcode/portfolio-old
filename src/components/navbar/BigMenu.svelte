<script lang="ts">
  import { Link } from 'svelte-navigator'
  import formatRoutes from '../../utils/formatRoutes'
  export let navBarLinks: string[]

  const formattedRoutes = formatRoutes(navBarLinks)
</script>

<div class="big-menu">
  {#each formattedRoutes as { link, name }}
    <Link to={link} class="menu-item"><span>{name}</span></Link>
  {/each}
</div>

<style>
  .big-menu {
    display: none;

    flex: 0 1 auto;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    gap: 10px;
  }

  :global(.big-menu > .menu-item) {
    color: rgba(var(--monochromatic-color), 0.7);
    text-decoration: none;
  }

  :global(.big-menu > .menu-item):hover {
    text-decoration: underline;
  }

  @media only screen and (min-width: 768px) {
    .big-menu {
      display: grid;
    }
  }
</style>
