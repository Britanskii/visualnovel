import {legend} from "../../interfaces/interfaces";
import toStory from "../../functions/toStory";
import {Player} from "../../characters/characters";
import {backgroundsScene7} from "../../../data/backgrounds";
import archive_night from "../../../res/backgrounds/scene7/archive_night.jpg";
import archive_outside_night_open from "../../../res/backgrounds/scene7/archive_outside_night_open.jpg";

const Scene7B2_1 = toStory((): legend[] => {

    const backgrounds = backgroundsScene7

    return [
        {
            speaker: Player.name,
            text: "Кажется неизвестные ушли. Интересно, кто были эти люди? Хотя… к проповеднику не ходи, это были люди корпорации.",
        },
        {
            speaker: Player.name,
            text: "Вот уж никогда не подумал бы, что своей дурацкой выдумкой попаду пальцем в глаз глубинному монстру. Может не так уж и неправ дядя своей идеей фикс о сохранении правдивой истории Ливронды.",
        },
        {
            text: "",
            background: backgrounds.black
        },
        {
            speaker: Player.name,
            text: "Если я правильно понял, то нужные мне документы лежат где-то там…",
        },
        {
            speaker: Player.name,
            text: "Отлично! Делаем фото и осталось только исполнить просьбу Симны.",
        },
        {
            speaker: Player.name,
            text: "Хм. Отменный кабинет. Так и хочется здесь какую-нибудь гадость сделать. (Затемнение, та же локация, только вещи раскиданы.)",
        },
        {
            speaker: Player.name,
            text: "Вот это другое дело. В самый раз! Интересно, что за материал для бумаги они используют? На обычную не похоже.",
        },
        {
            speaker: Player.name,
            text: "Отлично, в самый раз делать ноги… Ухх, а ребята то заперли меня внутри! Стоило об этом подумать. Впрочем, видел я замок от этой двери.",
            background: backgrounds.archive_night
        },
        {
            speaker: Player.name,
            text: "Держится на соплях и добром слове. Небольшой вандализм вполне вписывается в картину о проникновении и беспорядке...",
        },
        {
            speaker: Player.name,
            text: "Готово! Теперь с чистой совестью и спокойной душой можно пойти и отоспаться перед завтрашним днём. Чую, мои приключения на этом корабле только начинаются!",
            background: backgrounds.archive_outside_night_open
        },
    ]
})

export default Scene7B2_1