## Документация по TaskBot RU

Эта документация описывает функциональность Discord-бота, который позволяет создавать задачи в определенных форумах внутри сервера Discord. Бот прослушивает команду "/add", которая принимает два аргумента: "user" и "text".

### Детали аргументов

### User

Это необязательный аргумент, который должен быть упоминанием пользователя. Если указано, задача будет создана в форуме для этого пользователя. Если не указано, задача будет создана в глобальном форуме.

### Text

Это обязательный аргумент, который представляет собой краткое описание задачи. Это значение будет использоваться в качестве названия темы в форуме задач.

### Детали форума

Существует четыре форума, в которых можно создавать задачи. Глобальный форум используется, когда не указан пользователь. Чтобы добавить форум для конкретного пользователя, нужно изменить код в файле "addTask.js". Примеры добавления форумов для конкретных пользователей можно найти на строках 50 и 81 файла "addTask.js".

### Обзор кода

Бот реализован в "index.js" и использует библиотеку Discord.js. Когда бот запускается, он считывает все файлы команд в каталоге "commands" и сохраняет их в коллекции. Когда пользователь вводит команду "/add", бот проверяет, существует ли команда, а затем выполняет функцию "execute" для этой команды. Команда "addTask.js" отвечает за создание задач.

Когда выполняется команда "/add", бот проверяет, находится ли пользователь в правильном канале. Если да, он анализирует предоставленные аргументы и создает ответ, который будет отправлен обратно пользователю. После отправки ответа бот создает тему форума задач в соответствующем форуме на основе аргумента пользователя (если предоставлен) и описания задачи.

### Настройка бота

Чтобы настроить бота, выполните следующие действия:

1. Установите зависимости, запустив `npm i`. Это загрузит и установит необходимые пакеты для запуска бота.
2. Создайте файл `.env` в корневом каталоге проекта. Добавьте токен вашего Discord-бота в файл в следующем формате: `TOKEN=your_token_here`. Также добавьте идентификатор сервера, где находится бот, как `GUILDID=guild_id_here`, и идентификатор клиента бота как `CLIENTID=client_id_here`.
3. Запустите бота, используя команду `npm run dc && npm run start`.

Как только бот запущен, он будет прослушивать команду "/add" в указанных каналах и создавать темы форума задач на основе предоставленных аргументов.

## TaskBot Documentation EN

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
