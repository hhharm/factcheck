interface QnA {
  readonly answer: string;
  readonly question: string;
  readonly correctAnswer: 0 | 1;
}
// 0 is false, 1 is true
export const qnas: QnA[] = [
  {
    question: 'По данным ЮНЕСКО, украинский гимн признан лучшим в мире',
    answer:
      'Шутку о том, что ЮНЕСКО признало гимн Украины самым лучшим в мире,\
 запустил пиарщик Максим Саваневский еще в 2013 году. Затем СМИ откопали этот фейк в 2015 году \
 и еще раз распространили. О своих впечатлениях Максим делится по этой <a href="http://watcher.com.ua/2016/02/17/triumf-ukrayinskoho-kopipasterstva-abo-yak-novynarna-kachka-mozhe-zhyty-rokamy" target=_blank>ссылке</a>.',
    correctAnswer: 0,
  },
  {
    question: 'Арсенальная — самая глубокая станция в метро в мире.',
    answer:
      "Самая глубокая станция метро в мире находится в Северной Корее.\
 Украина на втором месте. Поэтому точно можно сказать, что станция метро Арсенальная – не самая глубокая станция метро в мире.\
 Подробнее о топ-5 глубоких станциях метро читайте <a href='https://www.worldatlas.com/articles/deepest-metro-stations-in-the-world.html' target='_blank'>здесь (на английском)</a>",
    correctAnswer: 0,
  },
  {
    question:
      'Правительство Великобритании запретило использование словосочетания "фейковые новости" в документах',
    answer:
      "Теперь любые стратегические документы, касающиеся вмешательства в выборы или безопасность в Интернете, должны использовать термин \"дезинформация\".\
 Детали <a href='https://www.telegraph.co.uk/technology/2018/10/22/government-bans-phrase-fake-news/?fbclid=IwAR3LJejhZeQ9MIbLI44QNChg9LiQNUc8bBdvhQGIPnbidxaiUxLdUpYwvv8' target='_blank'>здесь (на английском)</a>",
    correctAnswer: 1,
  },
  {
    question:
      'Аэропорт Орли в Париже назван так в честь украинского гетмана Филиппа Орлика.',
    answer:
      'Аэропорт назван именем <a href="https://en.wikipedia.org/wiki/Orly" target="_blank">коммуны Орли, где он расположен</a>.\
 Коммуна названа в честь римского рода <a href="https://ru.wikipedia.org/wiki/%D0%90%D0%B2%D1%80%D0%B5%D0%BB%D0%B8%D0%B8" target="_blank">Аврелиев, имевших там виллу .',
    correctAnswer: 0,
  },
];
