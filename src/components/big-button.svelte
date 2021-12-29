<script>
  export let buttonLink = "/"; // Defaults to home page
  export let buttonSvg =
    "M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"; // Defaults to click icon
</script>

<button
  class="big-button m-2 text-slate-50 bg-emerald-500 hover:bg-emerald-400 rounded-full h-52 w-52"
  ><a href={buttonLink}
    ><svg
      class="h-20 w-20 m-auto"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d={buttonSvg}
      />
    </svg></a
  ></button
>

<style>
</style>
