<script lang="ts">
  // Components
  import BigMenu from './BigMenu.svelte'
  import SmallMenu from './SmallMenu.svelte'

  let showSmallMenu: boolean = true
  const toggleShowSmallMenu = () => (showSmallMenu = !showSmallMenu)
  window.onclick = (e) => {
    if (!e.target.matches('.burger')) showSmallMenu = false
  }
</script>

<nav>
  <h1 class="title" on:click={() => document.body.classList.toggle('dark')}>
    SSMG
  </h1>
  <BigMenu />
  <button class="burger" on:click={toggleShowSmallMenu}>
    <box-icon name="menu" size="2em" class="burger" />
  </button>
</nav>
{#if showSmallMenu}
  <SmallMenu />
{/if}

<style>
  nav {
    grid-area: navbar;

    height: var(--navbar-height);
    background: var(--surface-background);
    box-shadow: var(--widget-default-outset-shadow-1);
    padding: 1rem;

    display: flex;
    align-items: center;

    text-transform: capitalize;
  }

  .burger {
    padding: 0;
  }

  .title {
    flex: 1 1 auto;
    font-size: 1.2em;
  }

  @media only screen and (min-width: 768px) {
    .burger {
      display: none;
    }
  }
</style>
