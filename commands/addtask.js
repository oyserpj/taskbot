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
          // Определение пользователей к форумам
          const channels = {
            "1086972110523605022": interaction.guild.channels.cache.get(
              "1086972110523605022"
            ),
            "1086971454437998633": interaction.guild.channels.cache.get(
              "1086971454437998633"
            ),
            "1087005148188000319": interaction.guild.channels.cache.get(
              "1087005148188000319"
            ),
            "1087005105720659998": interaction.guild.channels.cache.get(
              "1087005105720659998"
            ),
            "1088391112420499456": interaction.guild.channels.cache.get(
              "1088391112420499456"
            ),
            "<@247395057924177920>": interaction.guild.channels.cache.get(
              "1086971454437998633"
            ),
            "<@480775560620933121>": interaction.guild.channels.cache.get(
              "1087005148188000319"
            ),
            "<@270556086308700160>": interaction.guild.channels.cache.get(
              "1087005105720659998"
            ),
            "<@473800235445911553>": interaction.guild.channels.cache.get(
              "1088391112420499456"
            ),
          };

          //Создание треда в форуме
          const channels = require("../channels");
          const channel =
            channels[user?.value] || channels["1086972110523605022"];
          createTaskThread(channel);
        });
    } else {
      interaction.reply({
        content: "Создание задач доступно только в <#1086971070004863056>",
        ephemeral: true,
      });
    }
  },
};
