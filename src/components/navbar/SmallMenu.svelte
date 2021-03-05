<script lang="ts">
  import { Link } from 'svelte-navigator'
  import { slide, fade } from 'svelte/transition'
</script>

<div class="container" transition:fade={{ duration: 200 }}>
  <div
    class="small-menu"
    on:click|stopPropagation
    transition:slide={{ duration: 200 }}
  >
    <h3 class="title">Menu</h3>
    <Link to="/education" class="menu-item"><p>Education</p></Link>
    <Link to="/experience" class="menu-item"><p>Experience</p></Link>
    <Link to="/projects" class="menu-item"><p>Projects</p></Link>
    <Link to="/contact-me" class="menu-item"><p>Contact me</p></Link>
  </div>
</div>

<style>
  .container {
    height: 100vh;
    width: 100vw;
    background: rgba(0, 0, 0, 0.2);
    background: rgba(244, 244, 244, 0.8);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
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

    padding: 1rem;
    padding-bottom: 2rem;
    background: var(--surface-color);
    text-align: center;
    box-shadow: var(--shadow-outside-3);
    border-radius: var(--border-radius) var(--border-radius) 0 0;
  }

  .title {
    margin: 0;
  }

  :global(.small-menu > .menu-item) {
    color: rgba(var(--monochromatic-color), 0.7);
    text-decoration: none;
    border-radius: 6px;
  }

  :global(.small-menu > .menu-item):hover {
    background: rgba(var(--monochromatic-color), 0.1);
    text-decoration: none;
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
