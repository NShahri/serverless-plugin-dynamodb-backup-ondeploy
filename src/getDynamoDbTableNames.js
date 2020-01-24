// @flow

import type {Resource, Resources} from './serverless';

export default function getDynamoDbTableNames(resources: Resources = {}): string[] {
    const values: Resource[] = (Object.values(resources): any);
    return values.filter(r => r.Type === 'AWS::DynamoDB::Table').map(t => t.Properties.TableName);
}
