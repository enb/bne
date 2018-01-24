История изменений
=================

2.2.2
-----

### Исправления ошибок

* Исправлено кэширование в технологии `levels-to-bemdecl` (@L0stSoul [#255]).
* Исправлена схема уровней `levels-plain`: не работала с `enb@1.x` (@dmkova [#250]).
* Исправлена технология `provide-deps`: должна поддерживать зависимости в формате массива (@dmkova [#251]).

[#255]: https://github.com/enb/enb-bem-techs/pull/255
[#251]: https://github.com/enb/enb-bem-techs/pull/251
[#250]: https://github.com/enb/enb-bem-techs/pull/250

### Зависимости

* Модуль `bem-naming@0.5.1` обновлен до версии `1.0.1`.
* Модуль `inherit@2.2.3` обновлен до версии `2.2.6`.
* Модуль `js-yaml@3.5.2` обновлен до версии `3.7.0`.
* Модуль `vow@0.4.12` обновлен до версии `0.4.13`.

### Остальное

* Пакет `enb-bem-techs` переехал в организацию [enb](https://github.com/enb) (@blond [240dbd4]).
* Небольшие исправления документации:
  * [6d1d7b4](https://github.com/enb/enb-bem-techs/commit/6d1d7b43ba98a10b8228c88e4c703fcbe4f008ed) (@vithar)
  * [0ae5234](https://github.com/enb/enb-bem-techs/commit/0ae5234e37e6a723757312e63a700a56eed44110) (@mikhailrojo)
  * [7d5c190](https://github.com/enb/enb-bem-techs/commit/7d5c19087e7028b3e2658d52624362a948533335) (@versus-stack)
  * [b890390](https://github.com/enb/enb-bem-techs/commit/b890390c8b62df2c8c81b08920d762ee905ef55b) (@blond)

[240dbd4]: https://github.com/enb/enb-bem-techs/commit/240dbd401ec19d7c961308acceab7a6f98c565ea

2.2.1
-----

### Исправления ошибок

Исправлена работа технологии `deps-by-tech-to-bemdecl`:

* Неправильно учитывался контекст БЭМ-сущности по имени файла ([#201]).

2.2.0
-----

### Опции

Для технологий `levels-to-bemdecl`, `bemjson-to-bemdecl` и `deps-by-tech-to-bemdecl` добавлена опция [bemdeclFormat](docs/api.ru.md#bemdeclformat).

Опция позволяет возвращать результат не только в стандартном BEMDECL-формате, но и формате результата `deps` и `depsOld` технологий.

Пример BEMDECL-формата:

```js
{ blocks: [{ name: 'b', elems: [{ name: 'e', mods: [{ name: 'm', vals: [{ name: 'v' }] }] }] }]}
```

Пример DEPS-формата:

```js
{ deps: [{ block: 'b', elem: 'e', mod: 'm', val: 'v' }] }
```

**Важно:** DEPS-формат позволяет выражать декларации, в которые может входить элемент без своего блока и модификатор без своего блока или элемента. Это может быть необходимо при сборке бандлов, которые будут догружаться в браузере.

2.1.1
-----

### Исправления ошибок

Исправлена работа технологии `deps-by-tech-to-bemdecl`:

* Не учитывался контекст БЭМ-сущности по имени файла ([#191]).
* Некорректно обрабатывалась короткая запись для булевых модификаторов ([#192]).

### Зависимости

* Модуль `enb-async-require@1.0.0` обновлен до версии `1.0.1`.
* Модуль `enb-require-or-eval@1.0.1` обновлен до версии `1.0.2`.
* Модуль `inherit@2.2.2` обновлен до версии `2.2.3`: возможность подменять метод `__base()` при тестировании.
* Модуль `js-yaml@3.4.2` обновлен до версии `3.5.2`.
* Модуль `vow@0.4.11` обновлен до версии `0.4.12`.

2.1.0
-----

### Крупные изменения

* Добавлена поддержка `enb` версии `1.x` ([#185]).

### Зависимости

* Модуль `js-yaml@3.4.0` обновлен до версии `3.4.2`.
* Модуль `vow@0.4.10` обновлен до версии `0.4.11`.

2.0.1
-----

### Исправления ошибок

* Исправлена технология `files`: в списках файлов появлялись дубликаты, если уровень переопределения находился в директории другого уровня ([#179]).

### Зависимости

* Модуль `js-yaml@3.3.1` обновлен до версии `3.4.0`.

2.0.0
-----

**Важно:** ознакомтесь с [руководством по переходу на версию `2.0.0`](MIGRATION-2.md).

### Технология `files`

[ __*major*__ ] Исправлен порядок файлов, возвращаемый для нескольких суффиксов:
  * Файлы должны быть отсортированы сперва по имени сущности, и только потом по суффиксу ([#129]).
  * Файлы должны быть отсортированы сперва по уровню, и только потом по суффиксу ([#156]).

### Технология `deps-old`

* [ __*major*__ ] Исправлена ошибка раскрытия `must`-зависимостей ([#175]). Алгоритм раскрытия зависимостей был полностью переписан.
* Добавлена опция [strict](docs/api.ru.md#strict), которая включает строгий режим раскрытия зависимостей.
* Теперь в консоль выводятся предупреждения о циклических `must`-зависимостях.

### Технология `deps`

* Исправлена ошибка, из-за которой невозможно было задать `must`-зависимость модификатору от своего блока ([#148]).

### Формат `deps.js`

В чтении и обработке `deps.js`-файлов исправлены следующие ошибки:

* Не учитывались элементы, переданные в виде массива в поле `elem` ([#136]).
* Не учитывались булевые модификаторы, переданные в виде массива строк ([#113]).
* Не учитывался контекст блока для его элементов и модификаторов ([#112]).
* Исправлена обработка пустых `deps.js`-файлов ([#151]).

### Технология `merge-bemdecl`

* Исправлено объединение деклараций: не учитывались модификаторы без значения ([#116]).

### Технология `subtract-deps`

* Исправлена обработка опций `from` и `what`: не раскрывался `?` в названии таргета ([#128]).

### Зависимости

* Модуль `js-yaml@3.2.7` обновлен до версии `3.3.1`.
* Модуль `vow@0.4.8` обновлен до версии `0.4.10`.

1.0.4
-----

### Исправления ошибок

Исправлена ошибка, из-за которой невозможно было представить декларацию БЭМ-сущностей в DEPS-формате в виде массива ([#107]). Актуально для технологий, ожидающих или возвращающих декларацию в формате принятом в `enb@0.13.x`.

Ошибки могли возникать в двух случаях:

1. Если базовые технологии получали на вход декларации, построенные с помощью сторонних технологий.
2. Если сторонние технологии получали на вход декларации, построенные с помощью базовых технологий.

Исправления были внесены в следующие технологии:
  * `deps`
  * `deps-old`
  * `files`
  * `merge-deps`
  * `subtract-deps`

### Также в релиз вошли следующие изменения

* Добавлена поддержка `Node.js` версии `0.12`.
* Добавлена поддержка `io.js`.
* Модуль `js-yaml@3.2.5` обновлён до версии `3.2.7`.

1.0.3
-----

### Исправления ошибок

* Исправлена технология `levels-to-bemdecl`: не правильно строился BEMDECL для булевых модификаторов ([#103]).

### Также в релиз вошли следующие изменения

* Модуль `vow@0.4.7` обновлён до версии `0.4.8`.

1.0.2
-----

### Исправления ошибок

* Исправлены технологии `merge-bemdecl` и `merge-deps`: ошибка возникала при отсутствии результирующего файла до начала сборки ([#99]).

### Также в релиз вошли следующие изменения

* Модуль `bem-naming@0.5.0` обновлён до версии `0.5.1`.

1.0.1
-----

### Исправления ошибок

* Для технологии `deps-merge` возвращена возможность объединять BEMDECL-файлы с DEPS-файлами ([#94]).
* Исправлено кэширование для следующих технологий: `merge-deps`, `merge-bemdecl` и `deps-by-tech-to-bemdecl` ([#93], [#97]).

### Также в релиз вошли следующие изменения

* Модуль `bem-naming@0.4.0` обновлён до версии `0.5.0`.
* Модуль `js-yaml@3.2.3` обновлён до версии `3.2.5`.

1.0.0
-----

Для версии `1.0.0` история изменений описана по отношению к пакету `enb@0.13.x`.

### Изменения, ломающие обратную совместимость

* Удалена вся логика, связанная с `BEViS` методологией.
* Технологии `bemjson-to-bemdecl`, `deps-by-tech-to-bemdecl`, `merge-bemdecl` и `provide-bemdecl` теперь предоставляют результат в `bemdecl` формате, вместо `deps` формата.
* Технологии `merge-bemdecl` и `provide-bemdecl` теперь ожидает исходные таргеты в `bemdecl` формате, вместо `deps` формата.

### Крупные изменения

* Модуль экспортирует все предоставляемые технологии ([#70]).
* Добавлена `levels-to-bemdecl` технология ([#41]).
* Опция `levels` из `levels` технологии теперь может принимать пути относительно корня, вместо абсолютных ([#10]).
* Опция `destTech` из `deps-by-tech-to-bemdecl` технологии теперь не является обязательной ([#67]).

### API технологий

* Технология `bemdecl-from-bemjson` переименована в `bemjson-to-bemdecl`.
* Технология `bemdecl-from-deps-by-tech.js` переименована в `deps-by-tech-to-bemdecl`.
* Технология `bemdecl-merge` переименована в `merge-bemdecl`.
* Технология `deps-merge` переименована в `merge-deps`.
* Технология `deps-subtract` переименована в `subtract-deps`.
* Технология `bemdecl-provider` переименована в `provide-bemdecl`.
* Технология `deps-provider` переименована в `provide-deps`.
* Опции `sourceTarget` и `destTarget` из `bemdecl-from-bemjson` технологии объявлены **deprecated**, вместо них следует использовать `source` и `target` соответственно.
* Опции `bemdeclSources` и `bemdeclTarget` из `merge-bemdecl` технологии объявлены **deprecated**, вместо них следует использовать `sources` и `target` соответственно.
* Опции `sourceNodePath`, `sourceTarget` и `bemdeclTarget` из `provide-bemdecl` технологии объявлены **deprecated**, вместо них следует использовать `node`, `source` и `target` соответственно.
* Опции `bemdeclTarget` и `depsTarget` из `deps` технологии объявлены **deprecated**, вместо них следует использовать `bemdeclFile` и `target` соответственно.
* Опции `depsSources` и `depsTarget` из `merge-deps` технологии объявлены **deprecated**, вместо них следует использовать `sources` и `target` соответственно.
* Опции `bemdeclTarget` и `depsTarget` из `deps-old` технологии объявлены **deprecated**, вместо них следует использовать `bemdeclFile` и `target` соответственно.
* Опции `sourceNodePath`, `sourceTarget` и `depsTarget` из `provide-deps` технологии объявлены **deprecated**, вместо них следует использовать `node`, `source` и `target` соответственно.
* Опции `subtractFromTarget`, `subtractWhatTarget` и `depsTarget` из `subtract-deps` технологии объявлены **deprecated**, вместо них следует использовать `from`, `what` и `target` соответственно.
* Опция `depsTarget` из `files` технологии объявлена **deprecated**, вместо неё следует использовать `depsFile`.

### Исправления ошибок

* Исправлена ошибка в `deps` и `deps-old` технологиях, из-за которой было невозможно выразить булевый модификатор со значением `true` в `deps` формате.
* Исправлена ошибка в `bemjson-to-bemdecl` технологии, связанная с `undefined` в `bemjson` формате.
* Исправлена ошибка в `deps-by-tech-to-bemdecl` технологии, из-за которой поле `block` не подставлялось по контексту.
* Исправлены ошибки при использовании в Windows.

### Также в релиз вошли следующие изменения

* Улучшена документация технологий.
* Добавлены руководства по сборке бандлов, страниц и дистрибутивов.
* Добавлены тесты для технологий.
* Добавлены молульные тесты.
* Добавлены тесты на производительность для сканера уровней.
* Настроен запуск автотестов с помощью `appveyor` для Windows.
* Добавлена зависимость от модуля `bem-naming` версии `0.4.0`.
* Модуль `vow` обновлён до версии `0.4.7`.
* Модуль `inherit` обновлён до версии `2.2.2`.
* Модуль `js-yaml` обновлён до версии `3.2.3`.

[#201]: https://github.com/enb/enb-bem-techs/issues/201
[#192]: https://github.com/enb/enb-bem-techs/issues/192
[#191]: https://github.com/enb/enb-bem-techs/issues/191
[#185]: https://github.com/enb/enb-bem-techs/pull/185
[#179]: https://github.com/enb/enb-bem-techs/issues/179
[#175]: https://github.com/enb/enb-bem-techs/issues/175
[#156]: https://github.com/enb/enb-bem-techs/issues/156
[#151]: https://github.com/enb/enb-bem-techs/issues/151
[#148]: https://github.com/enb/enb-bem-techs/issues/148
[#136]: https://github.com/enb/enb-bem-techs/issues/136
[#129]: https://github.com/enb/enb-bem-techs/issues/129
[#116]: https://github.com/enb/enb-bem-techs/issues/116
[#113]: https://github.com/enb/enb-bem-techs/issues/113
[#112]: https://github.com/enb/enb-bem-techs/issues/112
[#107]: https://github.com/enb/enb-bem-techs/issues/107
[#103]: https://github.com/enb/enb-bem-techs/issues/103
[#99]: https://github.com/enb/enb-bem-techs/issues/99
[#97]: https://github.com/enb/enb-bem-techs/issues/97
[#94]: https://github.com/enb/enb-bem-techs/issues/94
[#93]: https://github.com/enb/enb-bem-techs/issues/93
[#70]: https://github.com/enb/enb-bem-techs/issues/70
[#67]: https://github.com/enb/enb-bem-techs/issues/67
[#41]: https://github.com/enb/enb-bem-techs/issues/41
[#10]: https://github.com/enb/enb-bem-techs/issues/10