// @flow

import backupAllTables from './backupAllTables';

import type {Serverless} from './serverless';

class BackupBeforeDeployPlugin {
    serverless: Serverless;
    hooks = {
        'before:deploy:resources': () => {
            const {cli, service} = this.serverless;
            const region = service.provider.region;
            return backupAllTables(region, service.resources.Resources, cli);
        },
    };
    commands = {
        deploy: {
            lifecycleEvents: ['resources'],
        },
    };

    constructor(serverless: Serverless) {
        this.serverless = serverless;
    }
}

module.exports = BackupBeforeDeployPlugin;
