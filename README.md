# Accessibility Testing Sandbox

A simple React App, built with [Create React App](./docs/CRA_README.md), that helps us to test out accessibility features. We decided to use a React app rather than simple HTML pages as we more often use React than straight HTML on our projects at the moment. Feel free to add different options as needed though.

## Up and running

```shell
# grab the code
git clone git@github.com:tablexi/a11y-testing-sandbox

# change into the repo root directory
cd a11y-testing-sandbox

# check that you have the necessary version of Node JS installed
# feel free to use the Node version manager of your choice
asdf current nodejs

# install the dependencies
npm i

# start the server
npm start
```

## Running tests

```shell
npm test
```

## A11y testing tools

### In the browser

We will be using the following tools during the working session. We've only tried these out in Firefox and Chrome-like browsers (Chrome and Brave specifically). If you would like to try using Safari or some other browser, please update this section with anything that you find.

- Axe DevTools - extension for [Chrome](https://chrome.google.com/webstore/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd) and [Firefox](https://addons.mozilla.org/en-GB/firefox/addon/axe-devtools/)
- Google Lighthouse - built into Chrome DevTools, see [note below](#using-lighthouse-with-firefox) for using with Firefox
- Tota11y - extension for [Chrome](https://chrome.google.com/webstore/detail/tota11y-plugin-from-khan/oedofneiplgibimfkccchnimiadcmhpe) and [Firefox](https://addons.mozilla.org/en-GB/firefox/addon/tota11y-accessibility-toolkit/)
- Wave - extension for [Chrome](https://chrome.google.com/webstore/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh) and [Firefox](https://addons.mozilla.org/en-GB/firefox/addon/wave-accessibility-tool/)

### Using Lighthouse with Firefox

There is [an extension](https://addons.mozilla.org/en-GB/firefox/addon/google-lighthouse/) available for Firefox. However, this does not work when testing localhost. If you want to use Lighthouse to test localhost we need to use the [Lighthouse CLI tool](). Unfortunately this requires us to have Chrome installed, so it's probably easiest just to use directly in Chrome (or a Chrome-like browser).

If we want to use the CLI tool, there is more information in the [Lighthouse repo](https://github.com/GoogleChrome/lighthouse#using-the-node-cli).

### In CI

We've also set up CI for Axe, Lighthouse and Pa11y following [this guide](https://www.adrianbolonio.com/en/accessibility-github-actions/). The configuration can be found in [./.github/workflow/a11y.yml](./.github/workflows/a11y.yml).

## A note on motion settings

One of the things that we included was the use of the CSS media query [prefers-reduced-motion](./src/components/a11y/index.css). This will prevent animations if the user has selected to reduce motion in their OS. If we would like to see this in action we can follow the [instructions here](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion#user_preferences) for our OS.

## Additional resources

We won't cover these [additional resources](https://docs.google.com/presentation/d/1BDgNvwI-PfwptjykfwcgB_OvABbs4hoC4P4B4kTxRaU/edit) during the working session, but they inspired us and so we wanted to pass them on!
