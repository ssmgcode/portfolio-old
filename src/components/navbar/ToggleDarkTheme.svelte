<script lang="ts">
  import darkThemeStore from '../../stores/dark-theme'

  const toggleDarkTheme = () => {
    darkThemeStore.toggleDarkModeTheme()
  }

  $: isDarkThemeTurnedOn = $darkThemeStore
</script>

<button on:click={toggleDarkTheme}>
  <slot {isDarkThemeTurnedOn} />
</button>

<style>
  button {
    margin-right: 1em;
  }
</style>
