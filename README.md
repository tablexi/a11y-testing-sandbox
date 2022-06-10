# Accessibility Testing Sandbox

A simple React App, built with [Create React App](./docs/CRA_README.md), that helps us to test out accessibility features.

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

We will be using the following tools during the working session:

- Axe DevTools - extension for [Chrome](https://chrome.google.com/webstore/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd) and [Firefox](https://addons.mozilla.org/en-GB/firefox/addon/axe-devtools/)
- Google Lighthouse - built into Chrome DevTools, available for [Firefox](https://addons.mozilla.org/en-GB/firefox/addon/google-lighthouse/)
- Tota11y - extension for [Chrome](https://chrome.google.com/webstore/detail/tota11y-plugin-from-khan/oedofneiplgibimfkccchnimiadcmhpe) and [Firefox](https://addons.mozilla.org/en-GB/firefox/addon/tota11y-accessibility-toolkit/)
- Wave - extension for [Chrome](https://chrome.google.com/webstore/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh) and [Firefox](https://addons.mozilla.org/en-GB/firefox/addon/wave-accessibility-tool/)

We've also set up CI for Axe, Lighthouse and Pa11y following [this guide](https://www.adrianbolonio.com/en/accessibility-github-actions/). The configuration can be found in [./.github/workflow/a11y.yml](./.github/workflows/a11y.yml).

## Additional resources

We won't cover these [additional resources](https://docs.google.com/presentation/d/1BDgNvwI-PfwptjykfwcgB_OvABbs4hoC4P4B4kTxRaU/edit) during the working session, but they inspired us and so we wanted to pass them on!
