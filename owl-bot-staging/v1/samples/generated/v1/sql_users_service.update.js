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
  // [START sqladmin_v1_generated_SqlUsersService_Update_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Optional. Host of the user in the instance.
   */
  // const host = 'abc123'
  /**
   *  Database instance ID. This does not include the project ID.
   */
  // const instance = 'abc123'
  /**
   *  Name of the user in the instance.
   */
  // const name = 'abc123'
  /**
   *  Project ID of the project that contains the instance.
   */
  // const project = 'my-project'
  /**
   */
  // const body = ''

  // Imports the Sql library
  const {SqlUsersServiceClient} = require('@google-cloud/sql').v1;

  // Instantiates a client
  const sqlClient = new SqlUsersServiceClient();

  async function update() {
    // Construct request
    const request = {
    };

    // Run request
    const response = await sqlClient.update(request);
    console.log(response);
  }

  update();
  // [END sqladmin_v1_generated_SqlUsersService_Update_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
