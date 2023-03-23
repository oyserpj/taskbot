const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const channels = require("../channels");

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

          // Функция создания треда в форуме для нужного пользователя, принимает нужный канал
          function createTaskThread(channelId) {
            const taskChannel = interaction.guild.channels.cache.get(channelId);

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

          // Создание треда в форуме
          if (user && channels[user.value]) {
            createTaskThread(channels[user.value]);
          } else {
            createTaskThread("1086972110523605022");
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
