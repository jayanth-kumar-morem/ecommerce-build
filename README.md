<div align="center">
<h1 align="center">
<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
<br>ECOMMERCE-BUILD</h1>
<h3>◦ ECOMMERCE WEB APP BOILERPLATE</h3>
<h3>◦ Developed with the software and tools below.</h3>

[![Demo](https://img.shields.io/badge/Demo-Link-blue.svg?style=flat-square)](https://ecommerce-ab1e0.web.app/)
[![Demo](https://img.shields.io/badge/Demo-Link-blue.svg?style=flat-square)](https://ecommerce-build-6a5x0bvcl-jayanth-kumar-morems-projects.vercel.app/signin)

<p align="center">
<img src="https://img.shields.io/badge/Firebase-FFCA28.svg?style=flat-square&logo=Firebase&logoColor=black" alt="Firebase" />
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat-square&logo=JavaScript&logoColor=black" alt="JavaScript" />
<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style=flat-square&logo=HTML5&logoColor=white" alt="HTML5" />
<img src="https://img.shields.io/badge/styledcomponents-DB7093.svg?style=flat-square&logo=styled-components&logoColor=white" alt="styledcomponents" />

<img src="https://img.shields.io/badge/ReduxSaga-999999.svg?style=flat-square&logo=Redux-Saga&logoColor=white" alt="ReduxSaga" />
<img src="https://img.shields.io/badge/Redux-764ABC.svg?style=flat-square&logo=Redux&logoColor=white" alt="Redux" />
<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat-square&logo=React&logoColor=black" alt="React" />
<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat-square&logo=JSON&logoColor=white" alt="JSON" />
</p>
<img src="https://img.shields.io/github/license/jayanth-kumar-morem/ecommerce-build?style=flat-square&color=5D6D7E" alt="GitHub license" />
<img src="https://img.shields.io/github/last-commit/jayanth-kumar-morem/ecommerce-build?style=flat-square&color=5D6D7E" alt="git-last-commit" />
<img src="https://img.shields.io/github/commit-activity/m/jayanth-kumar-morem/ecommerce-build?style=flat-square&color=5D6D7E" alt="GitHub commit activity" />
<img src="https://img.shields.io/github/languages/top/jayanth-kumar-morem/ecommerce-build?style=flat-square&color=5D6D7E" alt="GitHub top language" />
</div>

---

## 📖 Table of Contents
- [📖 Table of Contents](#-table-of-contents)
- [📍 Overview](#-overview)
- [📦 Features](#-features)
- [📂 Repository Structure](#-repository-structure)
- [⚙️ Modules](#️-modules)
- [🚀 Getting Started](#-getting-started)
  - [🔧 Installation](#-installation)
  - [🤖 Running ecommerce-build](#-running-ecommerce-build)
- [🛣 Project Roadmap](#-project-roadmap)
- [🤝 Contributing](#-contributing)
  - [Contributing Guidelines](#contributing-guidelines)
- [📄 License](#-license)

---


## 📍 Overview

The "ECOMMERCE WEB APP BOILERPLATE" is a React-based web application template for building e-commerce platforms. Developed with technologies such as Firebase, JavaScript, HTML5, and styled-components, it leverages state management with Redux and Redux Saga. The project's folder structure is organized with components, pages, and Redux slices. The application includes features like user authentication, shopping cart functionality, and integrates with Firebase for backend services. It follows modern web development practices and utilizes popular tools like React and styled-components for efficient and maintainable code.

---

## 📦 Features

This boilerplate leverages JavaScript, React, Redux, and Firebase for seamless integration of essential e-commerce functionalities, including user authentication, shopping cart management, and dynamic product displays. With a clean folder structure and styled components, it provides a solid foundation for building modern, scalable e-commerce applications. The use of Redux for state management ensures a robust and maintainable architecture, while Firebase offers a scalable backend for seamless data storage and authentication. Get started quickly with this versatile boilerplate for your e-commerce projects.

---

## 📂 Repository Structure

```sh
└── ecommerce-build/
    ├── firebase.json
    ├── package-lock.json
    ├── package.json
    ├── public/
    │   ├── index.html
    │   ├── manifest.json
    │   └── robots.txt
    ├── src/
    │   ├── App.css
    │   ├── App.js
    │   ├── App.test.js
    │   ├── components/
    │   │   ├── cart-dropdown/
    │   │   ├── cart-icon/
    │   │   ├── cart-item/
    │   │   ├── checkout-item/
    │   │   ├── collection-item/
    │   │   ├── collection-preview/
    │   │   ├── collections-overview/
    │   │   ├── custom-button/
    │   │   ├── directory/
    │   │   ├── form-input/
    │   │   ├── header/
    │   │   ├── menu-item/
    │   │   ├── sign-in/
    │   │   ├── sign-up/
    │   │   ├── stripe-button/
    │   │   └── with-spinner/
    │   ├── firebase/
    │   │   └── firebase.utils.js
    │   ├── index.css
    │   ├── index.js
    │   ├── pages/
    │   │   ├── checkout/
    │   │   ├── collection/
    │   │   ├── homepage/
    │   │   ├── product/
    │   │   ├── shop/
    │   │   └── sign-in-and-sign-up/
    │   ├── redux/
    │   │   ├── cart/
    │   │   ├── directory/
    │   │   ├── root-reducer.js
    │   │   ├── shop/
    │   │   ├── store.js
    │   │   └── user/
    │   └── serviceWorker.js
    └── yarn.lock

```

---


## ⚙️ Modules
<details>
<summary>Modules</summary>

| Directory                               | Summary                   |
| ---------------------------------------- | ------------------------- |
| **public**                               | Static assets and HTML    |
| ├── index.html                           | Main HTML file            |
| ├── manifest.json                        | Web App manifest          |
| └── robots.txt                           | Robots.txt file           |
| **src**                                  | Source code               |
| ├── App.css                              | Styles for App component  |
| ├── App.js                               | Main App component        |
| ├── App.test.js                          | Tests for App component   |
| **components**                           | Reusable UI components    |
| │   ├── cart-dropdown/                   | Cart dropdown component   |
| │   ├── cart-icon/                       | Cart icon component       |
| │   ├── cart-item/                       | Cart item component       |
| │   ├── checkout-item/                   | Checkout item component   |
| │   ├── collection-item/                 | Collection item component |
| │   ├── collection-preview/              | Collection preview component |
| │   ├── collections-overview/            | Collections overview component |
| │   ├── custom-button/                   | Custom button component   |
| │   ├── directory/                       | Directory component       |
| │   ├── form-input/                      | Form input component      |
| │   ├── header/                          | Header component          |
| │   ├── menu-item/                       | Menu item component       |
| │   ├── sign-in/                         | Sign-in component         |
| │   ├── sign-up/                         | Sign-up component         |
| │   ├── stripe-button/                   | Stripe button component   |
| │   └── with-spinner/                    | Higher-order component for displaying spinner |
| ├── firebase/                            | Firebase-related utilities|
| │   └── firebase.utils.js                | Firebase utility functions|
| ├── index.css                            | Global styles             |
| ├── index.js                             | Entry point for the app   |
| **pages**                               | React components for each page/screen |
| │   ├── checkout/                        | Checkout page component   |
| │   ├── collection/                      | Collection page component |
| │   ├── homepage/                        | Homepage component        |
| │   ├── product/                         | Product page component    |
| │   ├── shop/                            | Shop page component       |
| │   └── sign-in-and-sign-up/             | Sign-in/Sign-up page component |
| **redux**                               | Redux state management    |
| │   ├── cart/                            | Cart Redux module         |
| │   ├── directory/                       | Directory Redux module    |
| │   ├── root-reducer.js                  | Root reducer combining all reducers |
| │   ├── shop/                            | Shop Redux module         |
| │   ├── store.js                          | Redux store configuration |
| │   └── user/                             | User Redux module         |
| ├── serviceWorker.js                      | Service Worker for PWA    |
</details>

---

## 🚀 Getting Started

***Dependencies***

Please ensure you have the following dependencies installed on your system:

`- ℹ️ NodeJS >= 20.x`

### 🔧 Installation

1. Clone the ecommerce-build repository:
```sh
git clone https://github.com/jayanth-kumar-morem/ecommerce-build
```

2. Change to the project directory:
```sh
cd ecommerce-build
```

3. Install the dependencies:
```sh
yarn install
```

### 🤖 Running ecommerce-build

```sh
yarn start
```

---


## 🛣 Project Roadmap

> - [X] `ℹ️  Implement User Authentication`: Set up user authentication using Firebase to allow users to sign in and sign up securely.
> - [X] `ℹ️  Shopping Cart Functionality`: Implement shopping cart features using Redux for state management, allowing users to add and remove items.
> - [X] `ℹ️  Firebase Integration`: Integrate Firebase for backend services, including real-time data storage and authentication.
> - [X] `ℹ️  Dynamic Product Displays`: Create dynamic product displays and pages for showcasing various product categories and details.
> - [X] `ℹ️  Redux State Management`: Utilize Redux for state management to maintain a consistent and scalable application architecture.
> - [X] `ℹ️  Styled Components`: Leverage styled-components for efficient and maintainable styling of React components.
> - [X] `ℹ️  Clean Folder Structure`: Organize the project with a clean and intuitive folder structure, separating components, pages, and Redux slices.

---

## 🤝 Contributing

Contributions are welcome! Here are several ways you can contribute:

- [Submit Pull Requests](https://github.com/jayanth-kumar-morem/ecommerce-build/pulls): Review open PRs, and submit your own PRs.
- [Report Issues](https://github.com/jayanth-kumar-morem/ecommerce-build/issues): Submit bugs found or log feature requests for JAYANTH-KUMAR-MOREM.

### Contributing Guidelines

<details>
<summary>Click to expand</summary>

1. **Fork the Repository**: Start by forking the project repository to your GitHub account.
2. **Clone Locally**: Clone the forked repository to your local machine using a Git client.
   ```sh
   git clone <your-forked-repo-url>
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear and concise message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to GitHub**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.

Once your PR is reviewed and approved, it will be merged into the main branch.

</details>

---

## 📄 License


This project is protected under the [SELECT-A-LICENSE](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---
