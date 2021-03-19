<script lang="ts">
  // Components
  import BigMenu from './BigMenu.svelte'
  import SmallMenu from './SmallMenu.svelte'
  import ToggleDarkTheme from './ToggleDarkTheme.svelte'
  import ToggleDarkThemeButton from './ToggleDarkThemeButton.svelte'

  // Scripts
  import { Link } from 'svelte-navigator'

  let showSmallMenu: boolean = false
  const toggleShowSmallMenu = () => (showSmallMenu = !showSmallMenu)
  window.onclick = (e) => {
    if (!e.target.matches('.burger')) {
      showSmallMenu = false
    }
  }

  const navBarLinks = ['education', 'experience', 'projects', 'contact me']
</script>

<nav>
  <h1 class="title"><Link to="/">SSMG</Link></h1>
  <ToggleDarkTheme let:isDarkThemeTurnedOn>
    <ToggleDarkThemeButton {isDarkThemeTurnedOn} />
  </ToggleDarkTheme>
  <BigMenu {navBarLinks} />
  <button class="burger" on:click={toggleShowSmallMenu}>
    <box-icon name="menu" size="2em" class="burger" color="var(--text-color)" />
  </button>
</nav>
{#if showSmallMenu}
  <SmallMenu {navBarLinks} {toggleShowSmallMenu} />
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
    font-size: 1.5em;
  }

  nav .title > :global(a) {
    color: inherit;
    text-decoration: none;
  }

  @media only screen and (min-width: 768px) {
    .burger {
      display: none;
    }
  }
</style>
