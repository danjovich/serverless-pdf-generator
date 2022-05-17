import { DynamoDB } from 'aws-sdk';

const options = {
  region: 'localhost',
  endpoint: 'http://localhost:8000', // porta padrão do DynamoDB
  // essas credenciais são só para evitar um erro, tanto faz o que for colocado
  accessKeyId: 'x',
  secretAccessKey: 'x'
};

// essa variável de ambiente já vem com o serverless-dynamodb-local
const isOffline = () => process.env.IS_OFFLINE;

const document = isOffline() ? new DynamoDB.DocumentClient(options) : new DynamoDB.DocumentClient();

export default document;
