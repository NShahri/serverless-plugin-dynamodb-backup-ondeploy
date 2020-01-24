# serverless-plugin-dynamodb-backup-ondeploy
Backup dynamodb tables on serverless deploy. 

## Introduction
- This plugin works on `serverless deploy` command
- This plugin fetches list of all DynamoDB tables which are defined as resource in `serverless.yml`
- Then it will create backup for tables

## Installation

```bash
# Yarn
yarn add serverless-plugin-dynamodb-backup-ondeploy --dev
# NPM:
npm install serverless-plugin-dynamodb-backup-ondeploy --save-dev
```

## Usage
Add to `serverless-plugin-dynamodb-backup-ondeploy` to list of plugins in `serverless.yml` file.

```yml
# serverless.yml
plugins:
  - serverless-plugin-dynamodb-backup-ondeploy
```

## TODO
- Detect new tables and ignore backups
- Detect delete tables and make backups before deleting

## License
MIT
