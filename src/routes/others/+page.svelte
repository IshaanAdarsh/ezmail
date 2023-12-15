<script>
    export let data;
</script>

<div class="min-h-screen sm:mt-16 mt-5 text-sm">
        <grid class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1   gap-8 content-start auto-cols-auto auto-rows-auto justify-center p-4 w-[90%] mx-auto">
            {#each data.summaries as {slug, title, subject, tag}}
            <div class="w-full flex flex-col justify-between shadow-sm shadow-primary-500  p-6 mx-auto border  rounded-lg bg-white dark:bg-gray-800 border-gray-700">
                <a href="/others/{slug}">
                    <h5 class="mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-800 dark:text-white">{title}</h5>
                </a>
                <p class="mb-3 font-normal text-sm sm:text-base text-gray-400 truncate">{subject}</p>
                <a href="/others/{slug}" class="inline-flex w-fit items-center px-3 py-2 text-sm font-medium text-center text-white  rounded-lg  focus:ring-4 focus:outline-none  bg-primary-700 hover:bg-primary-500 focus:ring-primary-800">
                    Read more
                    <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
                <div div class="flex flex-row mt-2 flex-wrap items-center">
                    <h5 class="mr-2 text-lg md:text-sm tracking-tight text-gray-800 dark:text-white">Tags: </h5> 
                    {#each tag as taga}
                        <div
                            class="inline-flex w-fit items-center mx-1 my-1.5 px-1.5 py-1 text-sm font-medium text-center text-green-500 rounded-lg bg-green-200 bg-opacity-0 border-2 border-green-500 focus:ring-4 focus:outline-none focus:ring-primary-800"
                        >
                            {taga}
                        </div>
                    {/each}
                </div>
            </div>
            {/each}
    </grid>
</div>