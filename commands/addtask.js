const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("add")
    .setDescription("Добавить задачу.")
    .addStringOption((option) =>
      option
        .setName("user")
        .setDescription(
          "Кому задачка ? (Необязательно, задачка может быть общая)"
        )
        .setRequired(false)
    )
    .addStringOption((option) =>
      option
        .setName("text")
        .setDescription("Краткое описание задачки.")
        .setRequired(false)
    ),
  async execute(interaction) {
    if (interaction.channel.id === "1086971070004863056") {
      // Получение аргументов
      const user = interaction.options.get("user");
      const text = interaction.options.get("text");

      // Отправка ответа
      interaction
        .reply({
          content: "Красава",
          ephemeral: true,
        })
        .then(() => {
          const successResponse = new EmbedBuilder()
            .setColor("#141414")
            .setTitle("Задачка создана")
            .setDescription(
              user
                ? `Задачка для ${user.value} успешно создана.\n\n**${text.value}**\n\n`
                : `Общая задачка успешно создана.\n\n**${text.value}**\n\n`
            )
            .setTimestamp()
            .setFooter({
              text: interaction.user.username,
              iconURL: interaction.user.avatarURL(),
            });
          interaction.channel.send({ embeds: [successResponse] });

          // Создание таска в форуме
          const globalTasksChannel = interaction.guild.channels.cache.get(
            "1086972110523605022"
          );
          const meaningTasksChannel = interaction.guild.channels.cache.get(
            "1086971454437998633"
          );
          const beraTasksChannel = interaction.guild.channels.cache.get(
            "1087005148188000319"
          );
          const kostochkaTasksChannel = interaction.guild.channels.cache.get(
            "1087005105720659998"
          );
          console.log(user.value);

          function createTaskThread(taskChannel) {
            taskChannel.threads.create({
              name: text.value,
              message: {
                content: `${
                  user
                    ? `${user.value} для тебя задачка.\n\n`
                    : "Общая задачка\n\n"
                } Подробное описание задачи и дополнительные ресурсы:`,
              },
              appliedTags: ["1087010624980123708"],
            });
          }

          if (!user) {
            createTaskThread(globalTasksChannel);
          }
          if (user) {
            if (user.value === "<@247395057924177920>") {
              createTaskThread(meaningTasksChannel);
            } else if (user.value === "<@480775560620933121>") {
              createTaskThread(beraTasksChannel);
            } else if (user.value === "<@270556086308700160>") {
              createTaskThread(kostochkaTasksChannel);
            } else {
              createTaskThread(globalTasksChannel);
            }
          }
        });
    } else {
      interaction.reply({
        content: "Создание задач доступно только в <#1086971070004863056>",
        ephemeral: true,
      });
    }
  },
};
