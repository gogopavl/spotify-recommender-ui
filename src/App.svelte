<script>
  import BigButton from './BigButton.svelte'
  import TextInput from './TextInput.svelte'
  import ImageInput from './ImageInput.svelte'
  const name = 'world'
  const src = 'images/homer.gif'
  $: noButtonIsClicked = true

  function renderInputComponent(event) {
    // alert(
    //   '!event.detail.wasClicked = ' +
    //     event.detail.wasClicked +
    //     ' text = ' +
    //     event.detail.buttonText,
    // )
    noButtonIsClicked = !event.detail.wasClicked
  }
</script>

<h1>Spotify playlist recommender</h1>
{#if noButtonIsClicked}
  <BigButton on:buttonClicked={renderInputComponent} buttonText="text" />
  <BigButton on:buttonClicked={renderInputComponent} buttonText="image" />
{:else}
  <TextInput />
  <ImageInput />
{/if}
