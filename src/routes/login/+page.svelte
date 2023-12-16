<script>
  let errorMsg = "";
  function removeUserInput() {
    document.getElementById("userMail").value = "";
    document.getElementById("password").value = "";
  }
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
        removeUserInput();
      }
    } catch (error) {
      errorMsg = error;
      removeUserInput();
    }
  }
</script>

<body>
  <div class="container">
    <div class="form-container sign-in">
      
      <form class="form-container" on:submit={handleSubmit} method="POST">
        <h1 class="heading1">
          {#if errorMsg}
            <span>
              {errorMsg}
            </span>
          {:else}
            Login
          {/if}
        </h1>
  
        <div>
          <label for="userMail">Email</label>
          <input
            type="email"
            class=" input-box"
            id="userMail"
            name="userMail"
            required
            placeholder="example@gmail.com"
          />
          <label for="password">Password</label>
          <input
            type="password"
            class=" input-box"
            id="password"
            name="password"
            
            required
          />
        </div>
        <button type="submit" class="input">Login </button>
        <p></p>
      </form>
    </div>
    <div class="toggle-container">
      <div class="toggle">
        <div class="toggle-panel toggle-right">
          <h1 class="heading2">Hello, there!</h1>
          <p>Register with your personal details to use all of site features</p>
          <a href="/signin"><button id="register">Sign Up</button> </a>
        </div>
      </div>
    </div>
  </div>
</body>

<style> 

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
  }
#register{
background-color: #eee;
color: #512da8;
}
  body {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 80vh;
  }

.heading2{
  font-size: x-large; 
  font-size: xx-large;
  
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
}
 
.heading1{
  font-size: xx-large;
  color: #512da8;
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
  padding-bottom: 20px;
}

  .container {
    background-color: #fff;
    border-radius: 30px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.35);
    position: relative;
    overflow: hidden;
    width: 768px;
    max-width: 100%;
    min-height: 480px;
  }

  .container p {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.3px;
    margin: 20px 0;
  }

  .container span {
    font-size: 12px;
  }

  .container a {
    color: #333;
    font-size: 13px;
    text-decoration: none;
    margin: 15px 0 10px;
  }

  .container button {
    background-color: #512da8;
    color: #fff;
    font-size: 12px;
    padding: 10px 45px;
    border: 1px solid transparent;
    border-radius: 8px;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    margin-top: 10px;
    cursor: pointer;
  }

  .container form {
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 40px;
    height: 100%;
  }

  .container input {
    background-color: #eee;
    border: none;
    margin: 8px 0;
    padding: 10px 15px;
    font-size: 13px;
    border-radius: 8px;
    width: 100%;
    outline: none;
  }

  .form-container {
    position: absolute;
    top: 0;
    height: 100%;
    transition: all 0.6s ease-in-out;
  }

  .sign-in {
    left: 0;
    width: 50%;
    z-index: 2;
  }

  
  .toggle-panel {
    position: absolute;
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 30px;
    text-align: center;
    top: 0;
    transform: translateX(0);
    transition: all 0.6s ease-in-out;
  }

  .toggle-container{
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: all 0.6s ease-in-out;
    border-radius: 150px 0 0 100px;
    z-index: 1000;
}

  .toggle {
    background-color: #512da8;
    height: 100%;
    background: linear-gradient(to right, #5c6bc0, #512da8);
    color: #fff;
    position: relative;
    left: -100%;
    height: 100%;
    width: 200%;
    transform: translateX(0);
    transition: all 0.6s ease-in-out;
  }
  .toggle-right {
    right: 0;
    transform: translateX(0);
  }
</style>
