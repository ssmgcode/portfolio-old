<script lang="ts">
  import { Link } from 'svelte-navigator'
</script>

<div class="big-menu">
  <Link to="/education" class="menu-item"><span>Education</span></Link>
  <Link to="/experience" class="menu-item"><span>Experience</span></Link>
  <Link to="/projects" class="menu-item"><span>Projects</span></Link>
  <Link to="/contact-me" class="menu-item"><span>Contact me</span></Link>
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
