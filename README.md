## TaskBot Documentation

This documentation covers the functionality of a Discord bot that allows for the creation of tasks in specific forums within a Discord server. The bot listens for the "/add" command, which takes two arguments: "user" and "text".

### Argument Details

### User

This is an optional argument that should be a user mention. If provided, the task will be created in the forum for that user. If not provided, the task will be created in the global forum.

### Text

This is a required argument that is a brief description of the task. This value will be used as the name of the thread in the task forum.

### Forum Details

There are four forums that tasks can be created in. The global forum is used when no user is provided. To add a forum for a specific user, the code in the "addTask.js" file needs to be modified. Examples of how to add forums for specific users can be found on lines 50 and 81 of the "addTask.js" file.

### Code Overview

The bot is implemented in "index.js" and uses the Discord.js library. When the bot starts up, it reads in all the command files in the "commands" directory and stores them in a collection. When a user enters the "/add" command, the bot checks whether the command exists and then executes the "execute" function for that command. The "addTask.js" command is responsible for creating tasks.

When the "/add" command is executed, the bot checks whether the user is in the correct channel. If they are, it parses the provided arguments and creates a response that will be sent back to the user. After sending the response, the bot creates a task forum thread in the appropriate forum based on the user argument (if provided) and the task description argument.

### Bot Setup

To set up the bot, follow these steps:

1. Install the dependencies by running `npm i`. This will download and install the necessary packages to run the bot.
2. Create a `.env` file in the root directory of the project. Add your Discord bot token to the file in the following format: `TOKEN=your_token_here`. Also, add the Guild ID where the bot is located as `GUILDID=guild_id_here` and the Client ID of the bot as `CLIENTID=client_id_here`.
3. Run the bot using the command `npm run dc && npm run start`.

Once the bot is running, it will listen for the "/add" command in the specified channels and create task forum threads based on the provided arguments.
