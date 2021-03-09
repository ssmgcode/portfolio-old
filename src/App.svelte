<script lang="ts">
  // Components
  import LandingPage from './landing/LandingPage.svelte'

  // External libraries
  import { Router, Route } from 'svelte-navigator'
  import NavBar from './components/navbar/NavBar.svelte'
  import Footer from './components/Footer.svelte'
  import RouteNotFound from './components/RouteNotFound.svelte'
  import PageNotFound from './components/PageNotFound.svelte'
  import 'boxicons'
</script>

<div id="app">
  <Router>
    <NavBar />
    <div class="middle-section">
      <main>
        <Route path="/">
          <LandingPage />
        </Route>
        <RouteNotFound>
          <PageNotFound />
        </RouteNotFound>
      </main>
      <Footer />
    </div>
  </Router>
</div>

<style>
  #app {
    height: 100vh;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
    grid-template-areas:
      'middle-section'
      'navbar';
  }

  .middle-section {
    grid-area: middle-section;
    overflow: auto;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
    grid-template-areas:
      'main'
      'footer';
  }

  main {
    grid-area: main;
  }

  @media only screen and (min-width: 768px) {
    #app {
      grid-template-columns: 1fr;
      grid-template-rows: auto 1fr;
      grid-template-areas:
        'navbar'
        'middle-section';
    }
  }
</style>
