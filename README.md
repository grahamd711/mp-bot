### Supported `/slash` commands

The `/ask-design` custom slash command will need to be configured in the Slack admin dashboard while creating the app. This command exposes the following functionality:

- `/ask-design` or `/ask-design help` - Lists all available commands
- `/ask-design colors` - Displays the mP brand colors
- `/ask-design decks` - Links to the latest mP master decks
- `/ask-design fonts` - Links to .zip folder for Roboto Font
- `/ask-design guidelines` - Links to the mP brand guidelines
- `/ask-design logos` - Lists a variety of mP logos
- `/ask-design suggest` - Links to a Google Form to input user suggestions


### Install

```shell
$ npm install
```

### Copy `.env-example` to `.env`

```shell
$ cp .env-example .env
```

### Configure

```shell
NODE_ENV=development
PORT=3000
```
### Running locally

```shell
$ npm start

mPBot running on PORT 3000
```

Visit [localhost:3000](http://localhost:3000).