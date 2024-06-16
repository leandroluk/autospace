import {DocumentBuilder} from '@nestjs/swagger';
import {vars} from './vars';

const graphqlPath = '/graphql';
const apolloExplorerUrl = 'https://studio.apollographql.com/sandbox/explorer';
const document = 'query users{ users{ uid } }';
const apolloHref = `${apolloExplorerUrl}?endpoint=${vars.hostname}/graphql&document=${document}`;

export const swagger = new DocumentBuilder()
  .setTitle('Autospace | Leandro S. Gomes')
  .setDescription(
    `
The Autospace API.
<h1>Looking for the graphql api?</h1>
Go to <a href="${graphqlPath}" target="_blank">${graphqlPath}</a>.
Or, You might also need to use the
<a target="_blank" href="${apolloHref}">Apollo explorer</a> 
for a greater experience
    `,
  )
  .setVersion('0.1')
  .addBearerAuth()
  .build();
