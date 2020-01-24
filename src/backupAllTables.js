// @flow

import chalk from 'chalk';

import createBackup from './createBackup';
import getDynamoDbTableNames from './getDynamoDbTableNames';

import type {Console, Resources} from './serverless';

export default function backupAllTables(region: string, resources: Resources, console: Console): Promise<void> {
    const tableNames = getDynamoDbTableNames(resources);
    const timestamp = new Date().getTime();

    if (!tableNames.length) {
        console.log(`There is no DynamoDB table to backup.`);
        return Promise.resolve();
    }

    console.log(`Backing up dynamodb ${tableNames.join(', ')} for region ${region} and timestamp ${timestamp}.`);

    const backups = tableNames.map(table =>
        createBackup(region, table, timestamp).then(b => {
            if (b.created) {
                console.log(chalk.green(`Table ${b.tableName} backup created successfully.`));
            } else {
                console.log(chalk.red(`Table ${b.tableName} backup failed.`));
            }

            return b;
        })
    );

    return Promise.all(backups).then(res => {
        const successMigrationCount = res.filter(r => r.created).length;
        const allMigrationCount = res.length;
        const color = successMigrationCount === allMigrationCount ? chalk.green : chalk.red;

        console.log(
            color(
                `${chalk.yellow(successMigrationCount)} out of ${chalk.yellow(
                    allMigrationCount
                )} DynamoDB has been create successfully.`
            )
        );
    });
}
