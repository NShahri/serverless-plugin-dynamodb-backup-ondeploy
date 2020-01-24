import DynamoDB from 'aws-sdk/clients/dynamodb';
import createBackup from './createBackup';
jest.mock('aws-sdk'); // SoundPlayer is now a mock constructor

beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    DynamoDB.mockClear();
});

it('We can check if the consumer called the class constructor', async () => {
    const result = await createBackup('region', 'tableName', 12324);
    expect(result).toHaveBeenCalledTimes(1);
});
