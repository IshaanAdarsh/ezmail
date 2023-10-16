<script>
  import "../app.css";
  let open = false;
  let toggle = () => {
    open = !open;
    console.log(open);
  };

  import { browser } from '$app/environment';

  let colorScheme = "dark";
  if(browser) {
    if(localStorage.getItem("ezmail_color_scheme")) {
      colorScheme = localStorage.getItem("ezmail_color_scheme");
    } else {
      colorScheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      localStorage.setItem("ezmail_color_scheme", colorScheme);
    }

    if (colorScheme === 'dark') {
      document.documentElement.classList.add('dark');
    }
  }


  let toggleColorScheme = (event) => {
    if(browser) {
      colorScheme = colorScheme === 'dark' ? 'light' : 'dark';
      document.documentElement.classList.toggle('dark');
      localStorage.setItem("ezmail_color_scheme", colorScheme);
    }
  };


  import { clickOutside } from "../click_outside.js";
  import Trans from "../components/trans.svelte";
  import { fly } from "svelte/transition";
  
	import { quintOut } from 'svelte/easing';
  import { page } from "$app/stores";
</script>

<body class="bg-neutral-100 dark:bg-gray-900" />

<nav
  data-aos="zoom-out"
  class=" border-gray-200 px-2 sm:px-4 py-2.5 bg-neutral-100 dark:bg-gray-900"
>
  <div class="container flex flex-wrap items-center justify-between mx-auto">
    <a href="/" class="flex items-center">
      <img
        src="https://github.com/IshaanAdarsh/ezmail/assets/100434702/fa856830-9d12-4ae8-b445-630b7d8ac209"
        class="h-14 inline transition md:hover:scale-150 invert dark:invert-0"
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
        class="flex flex-col p-4 mt-4 border items-center  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium md:border-0  border-gray-700"
      >
        <li>
          <a
            href="/prof"
            class=" transition hover:text-primary-500 hover:scale-110 block py-2 pl-3 pr-4  rounded  md:hover:bg-transparent md:border-0  md:p-0 text-gray-600 dark:text-gray-400   hover:bg-gray-700 md: hover:bg-transparent"
            >To Professor</a
          >
        </li>
        <li>
          <a
            href="/admin"
            class=" transition hover:text-primary-500 hover:scale-110 block py-2 pl-3 pr-4  rounded  md:hover:bg-transparent md:border-0  md:p-0 text-gray-600 dark:text-gray-400   hover:bg-gray-700 md: hover:bg-transparent"
            >To Administration</a
          >
        </li>
        <li>
          <a
            href="/others"
            class=" transition hover:text-primary-500 hover:scale-110 block py-2 pl-3 pr-4  rounded  md:hover:bg-transparent md:border-0  md:p-0 text-gray-600 dark:text-gray-400   hover:bg-gray-700 md: hover:bg-transparent"
            >Alumni and Strangers</a
          >
        </li>
        <li>
          <a
            href="/about"
            class=" transition hover:text-primary-500 hover:scale-110 block py-2 pl-3 pr-4  rounded  md:hover:bg-transparent md:border-0  md:p-0 text-gray-600 dark:text-gray-400   hover:bg-gray-700 md: hover:bg-transparent"
            >About</a
          >
        </li>
        <li>
          <div id="google_translate_element"></div>
        </li>
        <li class="inline-flex">        
          <button on:click={toggleColorScheme}>
            {#if colorScheme === "dark"}
              <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-11a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1Zm0 12a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1ZM4.343 5.757a1 1 0 0 0 1.414-1.414L4.343 2.929a1 1 0 0 0-1.414 1.414l1.414 1.414Zm11.314 8.486a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM4 10a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1Zm15-1h-2a1 1 0 1 0 0 2h2a1 1 0 0 0 0-2ZM4.343 14.243l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414a1 1 0 0 0-1.414-1.414ZM14.95 6.05a1 1 0 0 0 .707-.293l1.414-1.414a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 .707 1.707Z"/>
              </svg>
            {:else}
              <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                <path d="M17.8 13.75a1 1 0 0 0-.859-.5A7.488 7.488 0 0 1 10.52 2a1 1 0 0 0 0-.969A1.035 1.035 0 0 0 9.687.5h-.113a9.5 9.5 0 1 0 8.222 14.247 1 1 0 0 0 .004-.997Z"/>
              </svg>
              {/if}
          </button>
        </li>
      </ul>
    </div>
  </div>
</nav>

{#if open === true}
  <div
  transition:fly={{ delay: 100, duration: 1000, x: 900, y:0, opacity: 0.3, easing: quintOut  }}
	
    class="z-50 md:hidden fixed flex-col items-center bottom-0  flex w-full backdrop-filter left-0 backdrop-blur-2xl top-0 bg-opacity-97 shadow-lg  h-screen border shadow-primary-700  border-primary-700 text-white margin-auto"
    use:clickOutside
    on:outclick={toggle}
  >
  <div class="flex justify-around items-center w-full pl-8">

    <a href="/" on:click={toggle}>
      <img
        src="https://github.com/IshaanAdarsh/ezmail/assets/100434702/fa856830-9d12-4ae8-b445-630b7d8ac209"
        class="h-16 inline transition hover:scale-110 invert dark:invert-0"
        alt="Flowbite Logo"
      />
    </a>
    <button on:click={toggle} class='p-6 ml-auto'>
      <svg stroke="#6366F1" fill="none" stroke-width="0.5" viewBox="0 0 15 15" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z" fill="#6366F1"></path></svg>
    </button>
  </div>

    <div class="flex flex-col gap-10 justify-center text-2xl mt-24 w-full items-center">
      <div transition:fly={{ delay: 100, duration: 1200, x: 900, y:0, opacity: 0.3, easing: quintOut  }} 
      class="mb-2 text-gray-500 dark:text-gray-300 hover:bg-primary-500 rounded-lg hover:text-white hover:shadow-lg hover:shadow-gray-500 px-4 py-2  ">
        <a href="/prof" on:click={toggle}>To Professor</a>
      </div>
      <div transition:fly={{ delay: 100, duration: 1200, x: 900, y:0, opacity: 0.3, easing: quintOut  }} 
      class="mb-2 text-gray-500 dark:text-gray-300 hover:bg-primary-500 rounded-lg hover:text-white hover:shadow-lg hover:shadow-gray-500 px-4 py-2  ">
        <a href="/admin" on:click={toggle}>To Administration</a>
      </div>
      <div transition:fly={{ delay: 100, duration: 1200, x: 900, y:0, opacity: 0.3, easing: quintOut  }} 
      class="mb-2 text-gray-500 dark:text-gray-300 hover:bg-primary-500 rounded-lg hover:text-white hover:shadow-lg hover:shadow-gray-500 px-4 py-2  ">
        <a href="/others" on:click={toggle}>To Alumni</a>
      </div>
      <div transition:fly={{ delay: 100, duration: 1200, x: 900, y:0, opacity: 0.3, easing: quintOut  }}
      class="mb-2 text-gray-500 dark:text-gray-300 hover:bg-primary-500 rounded-lg hover:text-white hover:shadow-lg hover:shadow-gray-500 px-4 py-2  ">
        <a href="/about" on:click={toggle}>About</a>
      </div>
      <div transition:fly={{ delay: 100, duration: 1200, x: 900, y:0, opacity: 0.3, easing: quintOut  }}
      class="mb-2 text-gray-500 dark:text-gray-300 hover:bg-primary-500 rounded-lg hover:text-white hover:shadow-lg hover:shadow-gray-500 px-4 py-2  ">
        <button on:click={toggleColorScheme} class="inline-flex items-center">
            {#if colorScheme === "dark"}
              <svg class="w-6 h-6 text-gray-800 dark:text-white mr-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-11a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1Zm0 12a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1ZM4.343 5.757a1 1 0 0 0 1.414-1.414L4.343 2.929a1 1 0 0 0-1.414 1.414l1.414 1.414Zm11.314 8.486a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM4 10a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1Zm15-1h-2a1 1 0 1 0 0 2h2a1 1 0 0 0 0-2ZM4.343 14.243l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414a1 1 0 0 0-1.414-1.414ZM14.95 6.05a1 1 0 0 0 .707-.293l1.414-1.414a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 .707 1.707Z"/>
              </svg>
              Light
            {:else}
              <svg class="w-6 h-6 text-gray-800 dark:text-white mr-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                <path d="M17.8 13.75a1 1 0 0 0-.859-.5A7.488 7.488 0 0 1 10.52 2a1 1 0 0 0 0-.969A1.035 1.035 0 0 0 9.687.5h-.113a9.5 9.5 0 1 0 8.222 14.247 1 1 0 0 0 .004-.997Z"/>
              </svg>
              Dark
              {/if}
          </button>
      </div>
    </div>
    
  </div>
{/if}

<Trans url={$page.url}>
  <slot />
</Trans>

<footer class="mt-5 p-8 rounded-lg shadow md:px-6 md:py-8">
  <div class="sm:flex justify-between ">
    <a href="/" class="flex items-center mb-4 sm:mb-0 ">
      <img
        src="https://github.com/IshaanAdarsh/ezmail/assets/100434702/fa856830-9d12-4ae8-b445-630b7d8ac209"
        class="h-14 m-auto invert dark:invert-0" alt="Flowbite Logo"/>
    </a>
    <ul
      class="px-2 flex flex-wrap items-center justify-center space-x-4 break-words text-center mb-6 text-lg underline underline-offset-2 sm:mb-0 text-gray-600 dark:text-gray-400">
      <li>
        <a href="prof" class="hover:underline ">To Professor</a>
      </li>
      <li>
        <a href="admin" class="hover:underline "
          >To Administration</a
        >
      </li>
      <li>
        <a href="/others" class="hover:underline  "
          >Alumni and Strangers</a
        >
      </li>
      <li>
        <a href="about" class="hover:underline ">About</a>
      </li>
    </ul>
  </div>
  <hr class="my-6  sm:mx-auto border-gray-700 lg:my-8" />
  <span class="block text-md  sm:text-center text-gray-700 dark:text-gray-400"
    >© 2023 <a
      href="https://raw.githubusercontent.com/IshaanAdarsh/Email.help/main/ezmail.png"
      class="hover:underline">Ezmail™</a
    >. Made By <a href="https://www.github.com/nown1ne">Abhinav</a> and
    <a href="https://github.com/IshaanAdarsh">Ishaan</a>.
  </span>
</footer>