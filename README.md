# NUCSSA-website

This is the website for NUCSSA.

## Installation Guide

### For Beginners
Note that it is not required to have these skills,
tutorial provided in this README should be sufficient enough for you to set up this website. 
But it is highly recommended(and very helpful) for 
you to: 
- Learn some **basic** knowledge of how to use terminal and command lines.
- Learn some **basic** knowledge of git and git commands.
- Have some basic ideas of how web development works.

### Preparing your environment

To get started with Gatsby, you’ll need to make sure you have the following software tools installed:

- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [Node.js](https://nodejs.org/en/)
- [npm CLI](https://www.npmjs.com/)
- Gatsby CLI
- [yarn CLI](https://yarnpkg.com/en/)

### Step By Step Guide

1. Install Git by following the [official guide](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

2. Install Node and npm [here](https://nodejs.org/en/). \
To check if you have Node.js installed, run this command in your terminal:
```
node -v
```
To confirm that you have npm installed you can run this command in your terminal:

```
npm -v
```

3. Install Gatsby CLI:

```
npm install --global gatsby-cli
```

4. Install Yarn. Detailed steps are provided [here](https://yarnpkg.com/lang/en/docs/install)

For more information about preparing your environment, 
check out the [preparing your environment](https://www.gatsbyjs.org/docs/preparing-your-environment/) page 
or [set up tutorial](https://www.gatsbyjs.org/tutorial/part-zero/) on Gatsby official website.

### Getting started

The first step to run NUCSSA website locally is downloading the code by cloning the repository:
```
git@github.com:NUCSSA/nucssa-website.git
```
If you get Permission denied error using ssh refer [here](https://help.github.com/articles/error-permission-denied-publickey/) 
or use https link as a fallback:
```
https://github.com/NUCSSA/nucssa-website.git
```
Go to nucssa-website folder:
```
cd nucssa-website
```
Install: to install necessary libraries:
```text
yarn install
```
Develop: to hot-serve your website on http://localhost:8000

```text
gatsby develop
```

After running this command, you should be able to see the website on
http://localhost:8000.

#### Other useful commands

Build: to create static site ready to host (under /public).
```text
gatsby build
```

Deploy: to deploy new changes to [Github Pages](https://nucssa.github.io/nucssa-website/)
```text
yarn run deploy
```
For more information about Using Gatsby CLI and how to start, please read 
their [full documentations](https://www.gatsbyjs.org/docs/).

## Features

- Easy editable content in **Markdown** files (posts, pages and parts)


## Useful links
- [Gatsby](https://www.gatsbyjs.org)
- [Yarn](https://yarnpkg.com/zh-Hans/)
- [GatsbyJS Hero](https://github.com/greglobinski/gatsby-starter-hero-blog)
- [React](https://reactjs.org/)
- [GraphQL](https://graphql.org/)
- [Git](https://git-scm.com/)

## Useful tools
- [Webstorm](https://www.jetbrains.com/webstorm/) 
- [Visual Studio Code](https://code.visualstudio.com/) 
- [Markdown Editor](https://stackedit.io/app)

