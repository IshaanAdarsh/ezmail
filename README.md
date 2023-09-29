<p align="center">
    <img src="https://github.com/IshaanAdarsh/ezmail/assets/100434702/fa856830-9d12-4ae8-b445-630b7d8ac209" alt="ezmail" width="400"/>
</p>

<h1 align="center" size = ""> About Ezmail </h1>

We are excited to introduce our new email template website, designed to promote a culture of effective and efficient communication among college students. The website offers a wide range of templates for various scenarios, such as requesting information from professors, scheduling meetings, and networking with professionals.

We would love for you to check out our website and let us know what you think. We are always looking for feedback and suggestions on how to improve our service.
This repository contains the code used to create our website - "Ezmail".

<hr>

## 🛠️ Technology Stack

<div align="left">

<img src= "https://img.shields.io/badge/svelte-%23f1413d.svg?style=for-the-badge&logo=svelte&logoColor=white">

<img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white">

<img alt="HTML" src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white"/>

<img alt="CSS" src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white"/>

<img alt="Javascript" src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>

<img src="https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white">

</div>

## How to **contribute**?

If you're not comfortable with the command line, [here are tutorials using GUI tools.](https://docs.github.com/en/desktop/installing-and-configuring-github-desktop/overview/getting-started-with-github-desktop). If you don't have git on your machine, [install it](https://help.github.com/articles/set-up-git/).

<img align="right" width="400" src="https://firstcontributions.github.io/assets/Readme/fork.png" alt="fork this repository" />

**1.** Fork [this](https://github.com/IshaanAdarsh/ezmail) repository.

**2.** Clone your forked copy of the project.

```shell
git clone https://github.com/<your_name>/ezmail.git
```

**3.** Navigate to the project directory :file_folder: .

```shell
cd ezmail
```

**4.** Add a reference(remote) to the original repository.

```shell
git remote add upstream https://github.com/IshaanAdarsh/ezmail
```

**5.** Check the remotes for this repository.

```shell
git remote -v
```

**6.** Always take a pull from the upstream repository to your master branch to keep it at par with the main project(updated repository).

```shell
git pull upstream main
```

**7.** Create a new branch.

```shell
git checkout -b <your_branch_name>
```

**8.** Perform your desired changes to the code base on that branch.

**9.** Track your changes :heavy_check_mark: .

```shell
git add .
```

**10.** Commit your changes.

```shell
git commit -m "Relevant message"
```

**11.** Push the committed changes in your feature branch to your remote repo.

```shell
git push -u origin <your_branch_name>
```

**12.** To create a pull request, click on `compare and pull requests. Please ensure you compare your feature branch to the desired branch of the repository you are supposed to make a PR to.

**13.** Add an appropriate title and description to your pull request explaining your changes and efforts.

**14.** Click on `Create Pull Request`.

**15** Voila! You have made a PR to Bug Buster's Community Website. Sit back patiently and relax while your PR is reviewed.

<hr>

## How to **add a template**

After the above setup is done follow these steps to a template

**1.** Navigate to `/src` and then to the section you want to contribute to, for example `/prof`

**2.** Open the `data.js` file.

**3.** You will see a javascript object with the fields `slug` - the url of the template

`title` - the subject if the email

`subject` - a short summary of the main purpose of the email

`content` - the body of the email

> Please note that the `content` field can only have a string value and strings can not have new lines. Add a `\n` wherever a new line is to added.

> You can also join multiple strings by simply adding a plus sign ` "hello"+" world"`

**4.** After doing the necessary formatting. Check the working of the changes made and ensure that everything else is also working fine by running it locally.

**5.** Create a pull request

## How to **run project the project**?

Please make sure you have vs code editor installed. If you don't have it, [download it](https://code.visualstudio.com/download).

**1.** Open VS code and clone the repo .

```shell
git clone https://github.com/IshaanAdarsh/ezmail
```

**2.** Open all files in vs code.

```shell
cd ezmail
```

**3.** Install dependencies

```shell
npm i
```

**4.** Start development server

```shell
npm run dev -- --open
```

<hr>

<h2 align="center"> Project Maintainers & Admins</h2> 
<div align="center"> 
    <a href="https://github.com/IshaanAdarsh">
    <img src="https://avatars.githubusercontent.com/u/100434702?v=4" width=100px height=100px />
    </a>
    <p align="center"> Ishaan Adarsh </p>
</div>
<div align="center"> 
    <a href="https://github.com/nown1ne">
    <img src="https://avatars.githubusercontent.com/u/25835195?v=4" width=100px height=100px />
    </a>
    <p align="center"> Abhinav Srinivas </p>
</div>



<h2 align="center"> Project Contributors </h2>

<div align="center">
    <a href="https://github.com/IshaanAdarsh/ezmail/graphs/contributors">
    <img src="https://contrib.rocks/image?repo=IshaanAdarsh/ezmail" />
    </a>
</div>

