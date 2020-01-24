// @flow

export type Resource = {|
    Type: 'AWS::DynamoDB::Table' | string,
    Properties: {|
        TableName: string,
    |},
|};

export type Resources = {
    [string]: Resource,
};

export type Console = {|log: any => void|};

export type Serverless = {|
    service: {|
        resources: {|
            Resources: Resources,
        |},

        provider: {|region: string|},
    |},
    cli: Console,
|};
