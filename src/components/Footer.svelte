<script>
  import FooterSection from './FooterSection.svelte'
</script>

<footer>
  <FooterSection title="About" gridArea="about">
    <span>Made with Svelte and TypeScript</span>
  </FooterSection>
  <FooterSection title="Explore" gridArea="explore" />
  <FooterSection title="Follow" gridArea="follow" />
</footer>

<style>
  footer {
    height: 450px;
    background: var(--surface-background);
    grid-area: footer;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
    grid-template-areas:
      'about'
      'explore'
      'follow';
    gap: 10px;
  }
</style>
