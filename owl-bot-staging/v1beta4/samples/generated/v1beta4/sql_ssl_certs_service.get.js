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
  // [START sql_v1beta4_generated_SqlSslCertsService_Get_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Cloud SQL instance ID. This does not include the project ID.
   */
  // const instance = 'abc123'
  /**
   *  Project ID of the project that contains the instance.
   */
  // const project = 'my-project'
  /**
   *  Sha1 FingerPrint.
   */
  // const sha1Fingerprint = 'abc123'

  // Imports the Sql library
  const {SqlSslCertsServiceClient} = require('@google-cloud/sql').v1beta4;

  // Instantiates a client
  const sqlClient = new SqlSslCertsServiceClient();

  async function get() {
    // Construct request
    const request = {
    };

    // Run request
    const response = await sqlClient.get(request);
    console.log(response);
  }

  get();
  // [END sql_v1beta4_generated_SqlSslCertsService_Get_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));