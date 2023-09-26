<script>
    export let data;
</script>

<div class="min-h-screen sm:mt-16 mt-5 ">
    <grid class="grid grid-cols-3 gap-8 content-start auto-cols-auto auto-rows-auto justify-center p-4 ">
        {#each data.summaries as {slug, title, subject}}
        <div class="w-5/6 shadow-sm shadow-primary-500  p-6 mx-auto border  rounded-lg  bg-gray-800 border-gray-700">
            <a href="/prof/{slug}">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">{title}</h5>
            </a>
            <p class="mb-3 font-normal text-gray-400 truncate">{subject}</p>
            <a href="/prof/{slug}" class="inline-flex  items-center px-3 py-2 text-sm font-medium text-center text-white  rounded-lg  focus:ring-4 focus:outline-none  bg-primary-700 hover:bg-primary-500 focus:ring-primary-800">
                Read more
                <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
        </div>
        {/each}
    </grid>
</div>