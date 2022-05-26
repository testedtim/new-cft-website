# Draft and prototyping CMS for Code for Tucson
## Description and usage

Using NetlifyCMS to build a mostly static site, with easy to access content for later updating.

### Why are there so many things on such a simple website
This page uses [11ty](https://www.11ty.dev/), which is a [Jamstack](https://jamstack.org/what-is-jamstack/) and [Nunjucks](https://mozilla.github.io/nunjucks/) as a templating engine.

What this means is you can build reuseable components and pages using Nunjucks syntax, then run 11ty to build the static website to be hosted. It looks complicated, but this method allows for faster page building, as a signle component can be used across multiple pages quickly. 

### Quickstart

* Download [Node.js](https://nodejs.org/en/) and install it to your computer
* Clone this repo - Either download it and unzip it somewhere or clone it with git
* In a powershell or terminal navigate to the root directory of the project (Where the package.json is)
* Run `npm install`
* Run `npm run serve`
* Start coding

These steps should get you a local server running at https://localhost:8080/ that will refresh automatically whenever a file is changed and then saved in the project directory. You get to see your changes made in real time.

hint: If you aren't seeing your changes then you might have a syntax error. ctrl+c in the terminal to kill the servers, then run `npm run serve` again to get them started up. If there's an error you'll see it in the terminal. 

### netlifyCMS
If you followed the quickstart steps above, the command also started a local backend server for netlifycms. If you go to https://localhost:8080/admin you should be met with a login screen. From here you can check out the CMS. It's a bit more limited than originally expected, but it is customizeable so has a lot of potential.

NetlifyCMS and Netlify are not actually associated with each other, but hosting a netlifycms site on netlify is incredibly easy. Unfortunately, at this time a code for tucson netlify account does not exist, so this static page is being hosted on github pages. This means authentication for the CMS is broken, but the page is still hosted.

If you have made changes to the code and would like to push them to a repo to be hosted live on github pages, I've tried to simplify the process by adding a github script to the package.json. Change the value of pathprefix to match the subfolder of the hosted site and [configure github pages to use /docs](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#choosing-a-publishing-source) as the source. Then run `npm run github`

###### package.json
~~~
"scripts": {
    "build": "npx eleventy",
    "watch": "npx eleventy --watch",
    "serve": "concurrently --kill-others \"npx netlify-cms-proxy-server\" \"npx eleventy --serve\"",
    "debug": "DEBUG=* npx eleventy",
    **"github": "npx eleventy --pathprefix=new-cft-website --output=docs"**
},
~~~

## Todo
- [x] Reset styles
- [x] Cleanup directories
- [x] Homepage
- [x] Projects
- [x] Get involved
- [x] Update project posts
- [x] About page
- [x] Code of conduct
- [ ] Update this Todo

## Contributing
If you're new to coding, we recommend installing:
- a text editor like [VS Code](https://code.visualstudio.com/)
- [Git](https://github.com/git-guides/install-git) which is a version control system. This helps people collaborate on projects. If you're new to git, take a look a [Github Git tutorial](https://rogerdudler.github.io/git-guide/)

Feel free to dive in! [Open an issue](https://github.com/CodeForTucson/new-cft-website/issues/new), submit Pull Requests (PRs), or even start your own project!

If you'd like to get your feet wet, take a look at some [good first issues](https://github.com/CodeForTucson/new-cft-website/labels/good%20first%20issue).

### Brief Tutorial
We recommend newcomers to first read an old [guide](https://rogerdudler.github.io/git-guide/). However, the developer community recently agreed to rename the `master` branch to `main`. 
As a refresher, to contribute, take the following steps:

- First, `clone` the repo
```
git clone <repo_url>
```

If you are not added yet as a collaborator, you may first need to [fork](https://docs.github.com/en/github-ae@latest/get-started/quickstart/fork-a-repo) the repo in order to contribute.

- Create a new `branch` from the [main](https://www.atlassian.com/git/tutorials/using-branches) branch (or `master`, or whatever branch you want to work off of).
```
git checkout -b <your_new_branch_name>
```

- Make some code edits in your code editor. Then `stage` your changes with:
```
git add <the_file_you_modified>
```

- Then you need to `commit` your changes with a message
```
git commit -m 'A brief summary of your code'
```

- Push your changes to the remote repo (hosted here on Github):
```
git push -u origin <your_new_branch_name>
```

- Finally, on Github, create a [Pull Request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) if you don't have write access to the repository.



Standard Readme follows the [Contributor Covenant](http://contributor-covenant.org/version/1/3/0/) Code of Conduct.
## Learning Resources
### Websites
- Front-end development. Most coders find it easiest to start with front-end development. This is how to code how a website looks and feels like. Languages to start with are
	- [HTML, CSS, Javascript: Freecodecamp](https://www.freecodecamp.org/)
	- [HTML, CSS, Javascript: W3Schools](https://www.w3schools.com/)
	- [JamStack](https://jamstack.org/) - a modern, more sophisticated way of building websites and apps, once you know HTML, CSS, and JS.
- Back-end development. This often involves working with data and logic to do something useful. Some common, beginner-friendly languages are:
	- [NodeJS](https://www.w3schools.com/nodejs/)
	- [Python](https://www.learnpython.org/)
	- [PHP](https://www.w3schools.com/php/)
	- [C#](https://www.w3schools.com/cs/index.php)
	- [SQL](https://www.w3schools.com/) has different variants like MySQL, PostgreSQL, SQL Server, etc. They all very similar so just pick one.
		- [MySQL](https://www.mysqltutorial.org/)
		- [PostgreSQL](https://www.postgresqltutorial.com/)
		- [SQL Server](https://www.sqlservertutorial.net/)
- Mobile development.
	- [Android](https://developer.android.com/)
	- [iOS](https://developer.apple.com/tutorials/app-dev-training)
	- Multi-platform allows you to write apps that work on both Android and Apple devices with one codebase.
		- [Flutter](https://flutter.dev/)
		- [ReactNative](https://reactnative.dev/)
		- [Nativescript](https://nativescript.org/)
- Analytics. For machine learning, data analysis, and automation, Python is the way to go. 
	- [Python](https://www.learnpython.org/)
	- [Data Analysis](https://www.freecodecamp.org/learn/data-analysis-with-python/)
	- Machine Learning
		- [Basics](https://www.coursera.org/learn/machine-learning)
		- [Deep Learning](https://www.freecodecamp.org/learn/machine-learning-with-python/#tensorflow)
- User Interfaces and User Experience (UI/UX):
	- [Figma](https://www.figma.com/)
	- [AdobeXD](https://www.adobe.com/products/xd.html)
- Devops optimizes how people develop code
	- [Docker](https://docs.docker.com/get-started/)
	- [Kubernetes](https://kubernetes.io/docs/tutorials/kubernetes-basics/)
	- [Github Actions](https://github.com/features/actions)

### Video Resources
- Front-end/Back-end
	- [Academind](https://www.youtube.com/c/Academind)
	- [Traversy Media](https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA)
- Machine Learning
	- [Andrew Ng](https://www.youtube.com/watch?v=jGwO_UgTS7I&list=PLoROMvodv4rMiGQp3WXShtMGgzqpfVfbU)
- Devops
	- [Techworld with Nana](https://www.youtube.com/c/TechWorldwithNana)

Feel free to add resources you'd find helpful, or request new ones be added by creating an issue!

## Social
[Visit us on Slack](codefortucson.slack.com)
[Join us on Meetup](https://www.meetup.com/Code-for-Tucson/)

# Eleventy Netlify Boilerplate
### Click the button below to try it out!

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/danurbanowicz/eleventy-netlify-boilerplate&stack=cms)