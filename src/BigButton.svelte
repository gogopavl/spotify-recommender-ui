<script>
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()

  export let buttonText = 'non-functional button?'

  function handleClickEvent() {
    // Dispatches event that will be handled by parent
    dispatch('buttonClicked', {
      wasClicked: true,
      buttonText: buttonText,
    })
  }
</script>

<style>
  .big-button {
    /* Text styles */
    text-align: center;
    text-decoration: none;
    font-size: 5vh;
    color: white;

    /* Button styles */
    height: 20vh;
    width: 20vh;
    background-color: #04aa6d;
    border: none;
    border-radius: 50%;
    display: inline-block;
    cursor: pointer;
  }
</style>

<button class="big-button" on:click={handleClickEvent}>{buttonText}</button>
