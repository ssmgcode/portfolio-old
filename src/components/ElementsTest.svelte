<div class="container">
  <button>Single button</button>
  <input type="text" />
  <button class="primary">Primary button</button>
  <div class="surface">
    <h1>Dialog</h1>
    <p>This is a dialog</p>
  </div>
  <div class="surface"><p>Hola</p></div>
  <section class="surface"><button>Hola</button></section>
  <input type="text" />
  <textarea name="" id="" cols="30" rows="10" />
  <input type="checkbox" />
  <input type="radio" />
  <input type="range" name="" id="" />
  <input type="range" name="hola" id="hola" />
  <input type="time" />
  <input type="text" placeholder="Hola, soy un placeholder" />
  <form action="" class="surface">
    <input type="text" required />
    <input type="text" class="success" />
  </form>
</div>

<style>
  .container {
    padding: 2em;
  }

  button {
    margin-bottom: 0.5em;
  }

  div.surface {
    margin: 2em 0;
  }

  div.surface > * {
    margin: 0;
    padding: 0;
  }
</style>
