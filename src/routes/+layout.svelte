<script>
  import "../app.css";
  let open = false;
  let toggle = () => {
    open = !open;
    console.log(open);
  };
  import { clickOutside } from "../click_outside.js";
  import Trans from "../components/trans.svelte";
  import { fade } from "svelte/transition";
  import { page } from "$app/stores";
</script>

<body class="bg-gray-900" />

<nav
  data-aos="zoom-out"
  class=" border-gray-200 px-2 sm:px-4 py-2.5 rounded  bg-gray-900"
>
  <div class="container flex flex-wrap items-center justify-between mx-auto">
    <a href="/" class="flex items-center">
      <img
        src="https://github.com/IshaanAdarsh/ezmail/assets/100434702/fa856830-9d12-4ae8-b445-630b7d8ac209"
        class="h-14 inline transition md:hover:scale-150 "
        alt="Flowbite Logo"
      />
    </a>
    <button
      on:click={toggle}
      data-collapse-toggle="navbar-default"
      type="button"
      class="inline-flex items-center p-2 ml-3 text-sm  rounded-lg md:hidden  focus:outline-none focus:ring-2   text-gray-400  hover:bg-gray-700  focus:ring-gray-600"
      aria-controls="navbar-default"
      aria-expanded="false"
    >
      <span class="sr-only">Open main menu</span>
      <svg
        class="w-6 h-6"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        ><path
          fill-rule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          clip-rule="evenodd"
        /></svg
      >
    </button>
    <div
      class="hidden transition-all w-full md:block md:w-auto"
      id="navbar-default"
    >
      <ul
        class="flex flex-col p-4 mt-4 border  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium md:border-0    md:bg-gray-900  border-gray-700"
      >
        <li>
          <a
            href="/prof"
            class=" transition hover:text-primary-500 hover:scale-110 block py-2 pl-3 pr-4  rounded  md:hover:bg-transparent md:border-0  md:p-0  text-gray-400   hover:bg-gray-700 md: hover:bg-transparent"
            >To Professor</a
          >
        </li>
        <li>
          <a
            href="/admin"
            class="transition hover:text-primary-500 hover:scale-110 block py-2 pl-3 pr-4  rounded  md:hover:bg-transparent md:border-0  md:p-0  text-gray-400   hover:bg-gray-700  md: hover:bg-transparent"
            >To Administration</a
          >
        </li>
        <li>
          <a
            href="/others"
            class="transition hover:text-primary-500 hover:scale-110 block py-2 pl-3 pr-4  rounded  md:hover:bg-transparent md:border-0 md:p-0  text-gray-400   hover:bg-gray-700 md: hover:bg-transparent"
            >Alumni and Strangers</a
          >
        </li>
        <li>
          <a
            href="/about"
            class=" transition hover:text-primary-500 hover:scale-110 block py-2 pl-3 pr-4  rounded  md:hover:bg-transparent md:border-0  md:p-0  text-gray-400   hover:bg-gray-700 md: hover:bg-transparent"
            >About</a
          >
        </li>
      </ul>
    </div>
  </div>
</nav>

{#if open === true}
  <div
    transition:fade
    class="absolute z-50 rounded-lg shadow-md right-10 top-10 margin-1 border shadow-primary-700  bg-gray-900 border-primary-700 text-white margin-auto"
    use:clickOutside
    on:outclick={toggle}
    on:click={toggle}
  >
    <div class="flex flex-col gap-1 justify-center content-center  text-2xl">
      <div class="mb-2 hover:text-white text-primary-500 p-5">
        <a href="/prof">To Professor</a>
      </div>
      <div class="mb-2 hover:text-white text-primary-500 p-5">
        <a href="/admin">To Administration</a>
      </div>
      <div class="mb-2 hover:text-white text-primary-500 p-5">
        <a href="/others">To Alumni</a>
      </div>
      <div class="mb-1 hover:text-white text-primary-500 p-5">
        <a href="/about">About</a>
      </div>
    </div>
  </div>
{/if}

<Trans url={$page.url}>
  <slot />
</Trans>

<footer class="mt-5 p-8 rounded-lg shadow md:px-6 md:py-8 bg-gray-900">
  <div class="sm:flex sm:items-center sm:justify-between">
    <a href="/" class="flex items-center mb-4 sm:mb-0">
      <img
        src="https://raw.githubusercontent.com/IshaanAdarsh/Email.help/main/ezmail.png"
        class="h-14"
        alt="Flowbite Logo"
      />
    </a>
    <ul
      class="px-2 flex flex-wrap items-center mb-6 text-lg underline underline-offset-2  sm:mb-0 text-gray-400"
    >
      <li>
        <a href="prof" class="mr-4 hover:underline md:mr-6 ">To Professor</a>
      </li>
      <li>
        <a href="admin" class="mr-4 hover:underline md:mr-6"
          >To Administration</a
        >
      </li>
      <li>
        <a href="/others" class="mr-4 hover:underline md:mr-6 "
          >Alumni and Strangers</a
        >
      </li>
      <li>
        <a href="about" class="hover:underline">About</a>
      </li>
    </ul>
  </div>
  <hr class="my-6  sm:mx-auto border-gray-700 lg:my-8" />
  <span class="block text-md  sm:text-center text-gray-400"
    >© 2023 <a
      href="https://raw.githubusercontent.com/IshaanAdarsh/Email.help/main/ezmail.png"
      class="hover:underline">Ezmail™</a
    >. Made By <a href="https://www.github.com/nown1ne">Abhinav</a> and
    <a href="https://github.com/IshaanAdarsh">Ishaan</a>.
  </span>
</footer>
