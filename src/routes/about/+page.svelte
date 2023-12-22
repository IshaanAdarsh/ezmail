<script>
  import TagCloud from "TagCloud";
  const container = ".content";
  import { onMount } from "svelte";
  import Carousel from "svelte-carousel";
  import { Octokit } from "octokit";

  const texts = [
    "3D",
    "TagCloud",
    "JavaScript",
    "CSS3",
    "TailwindCSS",
    "Svelte",
    "SvelteKit",
    "Vercel",
    "Git",
    "Github",
  ];
  const options = {
    maxSpeed: "fast",
  };

  let ss;

  const octokit = new Octokit();

  let contributors = [];

  octokit.request("GET /repos/IshaanAdarsh/ezmail/contributors").then((res) => {
    contributors = [...res.data];
  });

  onMount(() => {
    TagCloud(container, texts, options);
  });
</script>

<svelte:window bind:innerWidth={ss} />
<br />

<div class="px-80">
  <div class="mt-28">
    <h1
      class="text-center text-6xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-gray-800 dark:text-white mt-20 mb-20"
    >
      About Us
    </h1>
    <div class="px-4 md:px-0 text-gray-500 dark:text-gray-400">
      <ul>
        <li>
          <p
            class="mb-8 text-lg font-normal text-center py-4 lg:text-xl sm:px-16 xl:px-48"
          >
            We are excited to introduce our new email template website, designed
            to promote a culture of effective and efficient communication among
            college students. The website offers a wide range of templates for
            various scenarios, such as requesting information from professors,
            scheduling meetings, and networking with professionals.
          </p>
        </li>
        <li>
          <p
            class="mb-8 text-lg font-normal text-center py-4 lg:text-xl sm:px-16 xl:px-48"
          >
            Our templates are designed to be easy to use and customize, allowing
            students to quickly and effectively communicate their needs and
            ideas. They are also designed to be professional and respectful,
            promoting a positive image of the college community.
          </p>
        </li>
        <li>
          <p
            class="mb-8 text-lg font-normal text-center py-4 lg:text-xl sm:px-16 xl:px-48"
          >
            We believe that by promoting a culture of effective communication,
            we can help students succeed academically and professionally. Our
            templates are a great resource for students who are new to the
            college environment, or who want to improve their communication
            skills.
          </p>
        </li>
        <li>
          <p
            class="mb-8 text-lg font-normal text-center py-4 lg:text-xl sm:px-16 xl:px-48"
          >
            We would love for you to check out our website and let us know what
            you think. We are always looking for feedback and suggestions on how
            to improve our service.
          </p>
        </li>
      </ul>
    </div>
  </div>
  <br />
  <div class="mt-28">
    <h1
      class="text-center mb-20 text-6xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-white"
    >
      <span
        class="text-transparent bg-clip-text bg-gradient-to-b from-text-gradient-1 via-purple-900 to-violet-600 gray-"
        >Tech Stack</span
      >
    </h1>

    <div class="px-4 md:px-0 text-gray-500 dark:text-gray-400">
      <p
        class="mb-2 text-xl font-normal text-center lg:text-xl sm:px-16 xl:px-48"
      >
        We believe that the key to success in web development is staying
        up-to-date with the latest technologies and best practices. Our tech
        stack is built on a combination of cutting-edge technologies that allow
        us to create fast, efficient, and user-friendly web applications.Our
        core tech stack includes:<br /><br />
      </p>
      <span class="content tagcloud text-2xl mx-auto text-purple-600" />
    </div>

    <br /><br /><br />

    {#if contributors.length}
      <h1
        class="my-2 text-center text-4xl font-extrabold tracking-tight leading-none md:text-6xl lg:text-6xl text-white mb-20"
      >
        <span
          id="problems"
          class="mt-6 text-transparent bg-clip-text bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-text-gradient-1 via-purple-900 to-violet-600"
        >
          Contributors
        </span>
      </h1>

      {#if ss < 768}
        <Carousel autoplayDuration={2500}>
          {#each contributors as contributor}
            <div class="flex items-center justify-center my-8">
              <a
                href={contributor.html_url}
                target="_blank"
                rel="noreferrer"
                class="text-[#00acee] hover:text-black dark:hover:text-white flex flex-col items-center justify-center"
              >
                <img
                  src={contributor.avatar_url}
                  class="rounded-full h-40 w-40"
                  alt="avatar"
                />
                <h3>{contributor.login}</h3>
              </a>
            </div>
          {/each}
        </Carousel>
      {:else if ss < 1024}
        <div class="mx-16">
          <Carousel particlesToShow={2} autoplayDuration={2500}>
            {#each contributors as contributor}
              <div class="flex items-center justify-center my-8">
                <a
                  href={contributor.html_url}
                  target="_blank"
                  rel="noreferrer"
                  class="text-[#00acee] hover:text-black dark:hover:text-white flex flex-col items-center justify-center"
                >
                  <img
                    src={contributor.avatar_url}
                    class="rounded-full h-40 w-40"
                    alt="avatar"
                  />
                  <h3>{contributor.login}</h3>
                </a>
              </div>
            {/each}
          </Carousel>
        </div>
      {:else if ss < 1440}
        <div class="mx-20">
          <Carousel
            particlesToShow={3}
            particlesToScroll={2}
            autoplayDuration={2500}
          >
            {#each contributors as contributor}
              <div class="flex items-center justify-center my-8">
                <a
                  href={contributor.html_url}
                  target="_blank"
                  rel="noreferrer"
                  class="text-[#00acee] hover:text-black dark:hover:text-white flex flex-col items-center justify-center"
                >
                  <img
                    src={contributor.avatar_url}
                    class="rounded-full h-40 w-40"
                    alt="avatar"
                  />
                  <h3>{contributor.login}</h3>
                </a>
              </div>
            {/each}
          </Carousel>
        </div>
      {:else}
        <div class="mx-44">
          <Carousel
            particlesToShow={4}
            particlesToScroll={2}
            autoplayDuration={2500}
          >
            {#each contributors as contributor}
              <div class="flex items-center justify-center my-8">
                <a
                  href={contributor.html_url}
                  target="blank"
                  class="text-[#00acee] hover:text-black dark:hover:text-white flex flex-col items-center justify-center"
                >
                  <img
                    src={contributor.avatar_url}
                    class="rounded-full h-40 w-40"
                    alt="avatar"
                  />
                  <h3>{contributor.login}</h3>
                </a>
              </div>
            {/each}
          </Carousel>
        </div>
      {/if}
    {/if}
  </div>

  <br /><br /><br />

  <div class="my-40">
    <h1
      class="mt-2 text-center mb-20 text-4xl font-extrabold tracking-tight leading-none md:text-6xl lg:text-6xl text-white"
    >
      <span
        id="problems"
        class="mt-6 text-transparent bg-clip-text bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-text-gradient-1 via-purple-900 to-violet-600"
        >Navigating Problems</span
      >
    </h1>

    <div class="px-4 md:px-0 text-gray-500 dark:text-gray-400">
      <p
        class="mb-8 text-lg font-normal text-left lg:text-xl sm:px-16 xl:px-48 px-4 block"
      >
        We came across a lot of problems while making our project here are a few
        notable ones and how we solved them.<br /><br />
        1. <b>New lines in javascript string: </b><br />
        All of the templates in our website are stored in easy to edit javascript
        stores and the entire mail is stored as a single string to make using it
        easier to move around the website and edit. So we had to include all of the
        line breaks inside the string itself<br /><br />

        <a
          class="underline italic"
          href="https://stackoverflow.com/questions/10154429/javascript-string-with-new-line-but-not-using-n"
          >The solution</a
        >
        --- We found that using "\n" would solve our problems but by going the extra
        mile of searching it up we also found out about template literals making
        storing entire mails as a string really easy making contributing really beginner
        friendly<br /><br />

        2. <b>Setting the content of the textarea as body of email:</b><br />
        Our next problem was bringing those strings into the textarea while keeping
        them editable and sending the edited text as the body of the email.<br
        /><br /><a
          class="underline italic"
          href="https://stackoverflow.com/questions/44710300/how-to-add-the-content-of-a-textarea-to-the-body-of-an-email"
          >The solution</a
        >
        --- This took a lot of time as we landed upon multiple solution each with
        their own problems which would all require us to change the working of our
        whole system after a lot of finding we finally found this solution.<br
        /><br />

        3. <b>Adding line breaks into email body: </b><br />
        Although it might not even look a problem this was by far the hardest problem
        to solve. We found multiple solution that didn't work like intended. We tried
        replacing new lines with br tags but that didn't work.<br /><br />
        <a
          class="underline italic"
          href="https://stackoverflow.com/questions/22765834/insert-a-line-break-in-mailto-body"
          >The solution</a
        >
        --- After a lot of searching and trying out different solution we finally
        found that e mail text uses this special symbol to insert line breaks instead
        <code>" %0D%0A "</code>
        <br /><br />
        <center> Thanks for reading till the very end. Peace ✌️ </center>
      </p>
    </div>
  </div>
</div>

<section class="bg-neutral-100 dark:bg-gray-900 my-40">
  <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
    <div class="mx-auto mb-8 max-w-screen-md lg:mb-16">
      <h2
        class="mb-4 text-4xl tracking-tight font-extrabold text-gray-800 dark:text-white"
      >
        Contact Us
      </h2>
      <p class="font-light sm:text-xl text-gray-500 dark:text-gray-400">
        We're committed to making email communication easy!<br />
        Simplify Your Email Experience - Get in Touch!
        <br /><br />
      </p>

      <div class="flex-col">
        <!--body -->
        <form
          class="flex flex-col gap-4"
          onsubmit="sendEmail(); reset(); return false;"
        >
          <input
            class="rounded-lg py-2 px-5 w-full bg-transparent border text-black dark:text-white"
            type="text"
            id="name"
            placeholder="Your Name"
            required
          />
          <input
            class="rounded-lg py-2 px-5 w-full bg-transparent border text-black dark:text-white"
            type="email"
            id="email"
            placeholder="Email id"
            required
          />
          <input
            class="rounded-lg py-2 px-5 w-full bg-transparent border text-black dark:text-white"
            type="text"
            id="phone"
            placeholder="Phone No."
            required
          />
          <textarea
            class="rounded-lg py-2 px-5 w-full bg-transparent border text-black dark:text-white"
            id="message"
            rows="4"
            placeholder="How can I help you?"
          />
          <button
            class="inline-flex items-center px-7 py-3 bg-primary-700 hover:bg-primary-800 text-white text-lg rounded-lg focus:outline-none hover:cursor-pointer mx-auto mt-5"
            id="submit"
            >Send <svg
              class="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              ><path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              /></svg
            ></button
          >
        </form>
      </div>
    </div>
    <div class="grid gap-16 grid-cols-2" />
  </div>
</section>
