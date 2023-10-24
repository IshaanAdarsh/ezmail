<script>
  let errorMsg = "";
  async function handleSubmit(event) {
    event.preventDefault();

    const email = document.getElementById("userMail").value;
    const password = document.getElementById("password").value;
    const data = {
      email,
      password,
    };

    try {
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const json = await response.json();
      if (json.result === "Successfull") {
        localStorage.setItem("token", json.authToken);
        window.location.href = "/";
      } else {
        errorMsg = json.error;
      }
    } catch (error) {
      errorMsg = error;
    }
  }
</script>

<body
  class="sm:w-[50%] w-full h-[50vh] m-auto border-2 border-gray-600 dark:focus:border-gray-500 rounded-xl flex items-center justify-center flex-col"
>
  <h1 class="text-3xl font-extrabold text-gray-800 dark:text-white m-auto">
    {#if errorMsg}
      <span class="text-red-600">
        {errorMsg}
      </span>
    {:else}
      Login
    {/if}
  </h1>
  <form
    on:submit={handleSubmit}
    method="POST"
    class=" flex items-center justify-center flex-col space-y-4 m-auto"
  >
    <div class=" space-y-2">
      <label for="userMail" class="text-gray-600 dark:text-gray-400 text-lg"
        >email:</label
      >
      <input
        type="email"
        class="inputSty"
        id="userMail"
        name="userMail"
        required
        placeholder="example@gmail.com"
      />
    </div>
    <div class=" space-y-2">
      <label for="password" class="text-gray-600 dark:text-gray-400 text-lg"
        >password:</label
      >
      <input
        type="password"
        class="inputSty"
        id="password"
        name="password"
        required
      />
    </div>
    <button
      type="submit"
      class="py-2 px-8 inline-flex items-center justify-center text-base font-medium text-center text-white rounded-md bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-900"
      >login
      <svg
        class="w-5 h-5 ml-2 -mr-1"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        ><path
          fill-rule="evenodd"
          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
          clip-rule="evenodd"
        /></svg
      >
    </button>
  </form>
</body>
