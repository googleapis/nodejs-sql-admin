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
  // [START sql_v1beta4_generated_SqlFlagsService_List_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Database type and version you want to retrieve flags for. By default, this
   *  method returns flags for all database types and versions.
   */
  // const databaseVersion = 'abc123'

  // Imports the Sql library
  const {SqlFlagsServiceClient} = require('@google-cloud/sql').v1beta4;

  // Instantiates a client
  const sqlClient = new SqlFlagsServiceClient();

  async function list() {
    // Construct request
    const request = {};

    // Run request
    const response = await sqlClient.list(request);
    console.log(response);
  }

  list();
  // [END sql_v1beta4_generated_SqlFlagsService_List_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
