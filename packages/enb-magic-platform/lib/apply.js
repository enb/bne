var path = require('path'),

    chalk = require('chalk'),
    enb = require('enb'),

    MakePlatform = enb.MakePlatform;

/**
 * Выполняет функцию в инициализированной make-платформе.
 *
 * @param {Function} [f]
 * @param {Object}   [opts]
 * @param {String}   [opts.dir]                Корень проекта.
 * @param {Boolean}  [opts.noCache=false]      Не учитывать кэш при запуске таска.
 * @param {Boolean}  [opts.noLog=false]        Не выводить сообщения в консоль в процессе выполнения таска.
 * @param {Boolean}  [opts.hideWarnings=false] Не выводить warning-сообщения в консоль в процессе выполнения таска.
 * @param {Boolean}  [opts.graph=false]        Выводить граф сборки.
 * @returns {Promise}
 */
module.exports = function (f, opts) {
    var startTime = new Date(),
        makePlatform = new MakePlatform(),
        logger;

    return makePlatform.init(path.resolve(opts.dir))
        .then(function () {
            logger = makePlatform.getLogger();

            if (opts.noLog) {
                logger.setEnabled(false);
            } else if (opts.hideWarnings) {
                logger.hideWarnings();
            }

            logger.log('build started');

            if (opts.cache) {
                makePlatform.loadCache();
            }

            return f(makePlatform)
                .then(function (buildInfo) {
                    if (opts.graph) {
                        console.log(makePlatform.getBuildGraph().render());
                    }

                    logger.log('build finished - ' + chalk.red((new Date() - startTime) + 'ms'));

                    return makePlatform.saveCacheAsync()
                        .then(function () {
                            makePlatform.destruct();
                            return buildInfo;
                        });
                });
        })
        .fail(function (err) {
            if (opts.graph) {
                console.log(makePlatform.getBuildGraph().render());
            }

            logger && logger.log('build failed');

            throw err;
        });
};
