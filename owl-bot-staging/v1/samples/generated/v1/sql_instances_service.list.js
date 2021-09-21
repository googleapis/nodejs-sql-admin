// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


'use strict';

function main() {
  // [START sql_list_sample]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  A filter expression that filters resources listed in the response.
   *  The expression is in the form of field:value. For example,
   *  'instanceType:CLOUD_SQL_INSTANCE'. Fields can be nested as needed as per
   *  their JSON representation, such as 'settings.userLabels.auto_start:true'.
   *  Multiple filter queries are space-separated. For example.
   *  'state:RUNNABLE instanceType:CLOUD_SQL_INSTANCE'. By default, each
   *  expression is an AND expression. However, you can include AND and OR
   *  expressions explicitly.
   */
  // const filter = 'abc123'
  /**
   *  The maximum number of results to return per response.
   */
  // const maxResults = 1234
  /**
   *  A previously-returned page token representing part of the larger set of
   *  results to view.
   */
  // const pageToken = 'abc123'
  /**
   *  Project ID of the project for which to list Cloud SQL instances.
   */
  // const project = 'my-project'

  // Imports the Sql library
  const {SqlInstancesServiceClient} = require('@google-cloud/sql').v1;

  // Instantiates a client
  const sqlClient = new SqlInstancesServiceClient();

  async function list() {
    // Construct request
    const request = {
    };

    // Run request
    const response = await sqlClient.list(request);
    console.log(response);
  }

  list();
  // [END sql_list_sample]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
