## E2E using [Webdriver.io](https://github.com/webdriverio/webdriverio) and [selenium](https://github.com/elgalu/docker-selenium) in Docker

[![CircleCI](https://circleci.com/gh/artemv/webdriverio-docker.svg?style=svg)](https://circleci.com/gh/artemv/webdriverio-docker)
[![Known Vulnerabilities](https://snyk.io/test/github/artemv/webdriverio-docker/badge.svg?targetFile=package.json)](https://snyk.io/test/github/artemv/webdriverio-docker?targetFile=package.json)

Sample project running E2E tests in (non-headless) Chrome and Firefox with `wdio` and selenium nodes configured via 
`docker-compose` with working CI config running on CircleCI docker executor type.

**Usage**

1. `git clone git@github.com:artemv/webdriverio-docker.git`
1. `cd webdriverio-docker`
1. `docker-compose up -d (--build)`
1. `docker exec selenium-hub wait_all_done 30s`
1. `docker exec e2e-runner yarn test` - You should see tests pass
