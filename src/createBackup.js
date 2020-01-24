// @flow

import {DynamoDB} from 'aws-sdk';

export default function createBackup(
    region: string,
    tableName: string,
    timestamp: number
): Promise<{|tableName: string, backupName?: string, created: boolean, status?: string|}> {
    const dynamodb = new DynamoDB({region});

    return dynamodb
        .createBackup({
            BackupName: `${tableName}-${timestamp}`,
            TableName: tableName,
        })
        .promise()
        .then(({BackupDetails}) => ({
            tableName,
            backupName: BackupDetails.BackupName,
            created: true,
            status: BackupDetails.BackupStatus,
        }))
        .catch(err => ({
            tableName,
            created: false,
            error: err,
        }));
}
