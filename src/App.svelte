<script lang="ts">
  // Components
  import Landing from './landing/LandingPage.svelte'

  // External libraries
  import { Router, Route } from 'svelte-navigator'
</script>

<Router>
  <Route path="/">
    <Landing />
  </Route>
</Router>
