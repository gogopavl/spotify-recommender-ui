<script>
  import { goto } from "$app/navigation";
  $: inputText = "";

  const onKeyPress = (e) => {
    if (e.charCode === 13) {
      // "Enter" key is struck
      handleSubmission();
    }
  };

  async function handleSubmission() {
    alert("button event handler " + inputText);
    // goto("/", { replaceState: false });
    const url = "http://localhost:8080/spotify-recommender/v1/analyses";
    const payload = JSON.stringify({ text: inputText });
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: payload,
    }).then((response) => console.log(response.json()));
    debugger;
  }
</script>

<div class="flex">
  <input
    id="text-input"
    on:keypress={onKeyPress}
    bind:value={inputText}
    class="p-2 text-slate-700 rounded-lg"
    type="text"
    placeholder="Start typing..."
    name="given-text"
  />
  <button id="text-submit" type="submit" on:click={handleSubmission}
    ><svg
      xmlns="http://www.w3.org/2000/svg"
      class="mx-2 h-10 w-10"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  </button>
</div>

<style>
</style>
