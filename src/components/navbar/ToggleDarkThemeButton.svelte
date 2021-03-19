<script lang="ts">
  export let isDarkThemeTurnedOn: boolean
</script>

{#if isDarkThemeTurnedOn}
  <box-icon name="sun" />
{:else}
  <box-icon name="moon" />
{/if}

<style>
  box-icon {
    fill: var(--text-color);
  }
</style>
