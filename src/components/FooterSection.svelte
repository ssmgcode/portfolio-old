<script lang="ts">
  export let title: string
  export let gridArea: string
</script>

<section style="grid-area: {gridArea}">
  <h3 class="title">{title}</h3>
  <slot />
</section>

<style>
  section {
    justify-self: center;
    align-self: center;
    text-align: center;
  }

  .title {
    margin: 0;
  }
</style>
