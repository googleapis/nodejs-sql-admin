// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **

import * as protos from '../protos/protos';
import * as assert from 'assert';
import * as sinon from 'sinon';
import {SinonStub} from 'sinon';
import { describe, it } from 'mocha';
import * as sqlusersserviceModule from '../src';

import {protobuf} from 'google-gax';

function generateSampleMessage<T extends object>(instance: T) {
    const filledObject = (instance.constructor as typeof protobuf.Message)
        .toObject(instance as protobuf.Message<T>, {defaults: true});
    return (instance.constructor as typeof protobuf.Message).fromObject(filledObject) as T;
}

function stubSimpleCall<ResponseType>(response?: ResponseType, error?: Error) {
    return error ? sinon.stub().rejects(error) : sinon.stub().resolves([response]);
}

function stubSimpleCallWithCallback<ResponseType>(response?: ResponseType, error?: Error) {
    return error ? sinon.stub().callsArgWith(2, error) : sinon.stub().callsArgWith(2, null, response);
}

describe('v1.SqlUsersServiceClient', () => {
    it('has servicePath', () => {
        const servicePath = sqlusersserviceModule.v1.SqlUsersServiceClient.servicePath;
        assert(servicePath);
    });

    it('has apiEndpoint', () => {
        const apiEndpoint = sqlusersserviceModule.v1.SqlUsersServiceClient.apiEndpoint;
        assert(apiEndpoint);
    });

    it('has port', () => {
        const port = sqlusersserviceModule.v1.SqlUsersServiceClient.port;
        assert(port);
        assert(typeof port === 'number');
    });

    it('should create a client with no option', () => {
        const client = new sqlusersserviceModule.v1.SqlUsersServiceClient();
        assert(client);
    });

    it('should create a client with gRPC fallback', () => {
        const client = new sqlusersserviceModule.v1.SqlUsersServiceClient({
            fallback: true,
        });
        assert(client);
    });

    it('has initialize method and supports deferred initialization', async () => {
        const client = new sqlusersserviceModule.v1.SqlUsersServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
        assert.strictEqual(client.sqlUsersServiceStub, undefined);
        await client.initialize();
        assert(client.sqlUsersServiceStub);
    });

    it('has close method', () => {
        const client = new sqlusersserviceModule.v1.SqlUsersServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
        client.close();
    });

    it('has getProjectId method', async () => {
        const fakeProjectId = 'fake-project-id';
        const client = new sqlusersserviceModule.v1.SqlUsersServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
        client.auth.getProjectId = sinon.stub().resolves(fakeProjectId);
        const result = await client.getProjectId();
        assert.strictEqual(result, fakeProjectId);
        assert((client.auth.getProjectId as SinonStub).calledWithExactly());
    });

    it('has getProjectId method with callback', async () => {
        const fakeProjectId = 'fake-project-id';
        const client = new sqlusersserviceModule.v1.SqlUsersServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
        client.auth.getProjectId = sinon.stub().callsArgWith(0, null, fakeProjectId);
        const promise = new Promise((resolve, reject) => {
            client.getProjectId((err?: Error|null, projectId?: string|null) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(projectId);
                }
            });
        });
        const result = await promise;
        assert.strictEqual(result, fakeProjectId);
    });

    describe('delete', () => {
        it('invokes delete without error', async () => {
            const client = new sqlusersserviceModule.v1.SqlUsersServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.sql.v1.SqlUsersDeleteRequest());
            request.project = '';
            const expectedHeaderRequestParams = "project=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedResponse = generateSampleMessage(new protos.google.cloud.sql.v1.Operation());
            client.innerApiCalls.delete = stubSimpleCall(expectedResponse);
            const [response] = await client.delete(request);
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.delete as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes delete without error using callback', async () => {
            const client = new sqlusersserviceModule.v1.SqlUsersServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.sql.v1.SqlUsersDeleteRequest());
            request.project = '';
            const expectedHeaderRequestParams = "project=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedResponse = generateSampleMessage(new protos.google.cloud.sql.v1.Operation());
            client.innerApiCalls.delete = stubSimpleCallWithCallback(expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.delete(
                    request,
                    (err?: Error|null, result?: protos.google.cloud.sql.v1.IOperation|null) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
            });
            const response = await promise;
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.delete as SinonStub)
                .getCall(0).calledWith(request, expectedOptions /*, callback defined above */));
        });

        it('invokes delete with error', async () => {
            const client = new sqlusersserviceModule.v1.SqlUsersServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.sql.v1.SqlUsersDeleteRequest());
            request.project = '';
            const expectedHeaderRequestParams = "project=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedError = new Error('expected');
            client.innerApiCalls.delete = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.delete(request), expectedError);
            assert((client.innerApiCalls.delete as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });
    });

    describe('insert', () => {
        it('invokes insert without error', async () => {
            const client = new sqlusersserviceModule.v1.SqlUsersServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.sql.v1.SqlUsersInsertRequest());
            request.project = '';
            const expectedHeaderRequestParams = "project=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedResponse = generateSampleMessage(new protos.google.cloud.sql.v1.Operation());
            client.innerApiCalls.insert = stubSimpleCall(expectedResponse);
            const [response] = await client.insert(request);
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.insert as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes insert without error using callback', async () => {
            const client = new sqlusersserviceModule.v1.SqlUsersServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.sql.v1.SqlUsersInsertRequest());
            request.project = '';
            const expectedHeaderRequestParams = "project=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedResponse = generateSampleMessage(new protos.google.cloud.sql.v1.Operation());
            client.innerApiCalls.insert = stubSimpleCallWithCallback(expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.insert(
                    request,
                    (err?: Error|null, result?: protos.google.cloud.sql.v1.IOperation|null) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
            });
            const response = await promise;
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.insert as SinonStub)
                .getCall(0).calledWith(request, expectedOptions /*, callback defined above */));
        });

        it('invokes insert with error', async () => {
            const client = new sqlusersserviceModule.v1.SqlUsersServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.sql.v1.SqlUsersInsertRequest());
            request.project = '';
            const expectedHeaderRequestParams = "project=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedError = new Error('expected');
            client.innerApiCalls.insert = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.insert(request), expectedError);
            assert((client.innerApiCalls.insert as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });
    });

    describe('list', () => {
        it('invokes list without error', async () => {
            const client = new sqlusersserviceModule.v1.SqlUsersServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.sql.v1.SqlUsersListRequest());
            request.project = '';
            const expectedHeaderRequestParams = "project=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedResponse = generateSampleMessage(new protos.google.cloud.sql.v1.UsersListResponse());
            client.innerApiCalls.list = stubSimpleCall(expectedResponse);
            const [response] = await client.list(request);
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.list as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes list without error using callback', async () => {
            const client = new sqlusersserviceModule.v1.SqlUsersServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.sql.v1.SqlUsersListRequest());
            request.project = '';
            const expectedHeaderRequestParams = "project=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedResponse = generateSampleMessage(new protos.google.cloud.sql.v1.UsersListResponse());
            client.innerApiCalls.list = stubSimpleCallWithCallback(expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.list(
                    request,
                    (err?: Error|null, result?: protos.google.cloud.sql.v1.IUsersListResponse|null) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
            });
            const response = await promise;
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.list as SinonStub)
                .getCall(0).calledWith(request, expectedOptions /*, callback defined above */));
        });

        it('invokes list with error', async () => {
            const client = new sqlusersserviceModule.v1.SqlUsersServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.sql.v1.SqlUsersListRequest());
            request.project = '';
            const expectedHeaderRequestParams = "project=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedError = new Error('expected');
            client.innerApiCalls.list = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.list(request), expectedError);
            assert((client.innerApiCalls.list as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });
    });

    describe('update', () => {
        it('invokes update without error', async () => {
            const client = new sqlusersserviceModule.v1.SqlUsersServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.sql.v1.SqlUsersUpdateRequest());
            request.project = '';
            const expectedHeaderRequestParams = "project=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedResponse = generateSampleMessage(new protos.google.cloud.sql.v1.Operation());
            client.innerApiCalls.update = stubSimpleCall(expectedResponse);
            const [response] = await client.update(request);
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.update as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes update without error using callback', async () => {
            const client = new sqlusersserviceModule.v1.SqlUsersServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.sql.v1.SqlUsersUpdateRequest());
            request.project = '';
            const expectedHeaderRequestParams = "project=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedResponse = generateSampleMessage(new protos.google.cloud.sql.v1.Operation());
            client.innerApiCalls.update = stubSimpleCallWithCallback(expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.update(
                    request,
                    (err?: Error|null, result?: protos.google.cloud.sql.v1.IOperation|null) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
            });
            const response = await promise;
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.update as SinonStub)
                .getCall(0).calledWith(request, expectedOptions /*, callback defined above */));
        });

        it('invokes update with error', async () => {
            const client = new sqlusersserviceModule.v1.SqlUsersServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.sql.v1.SqlUsersUpdateRequest());
            request.project = '';
            const expectedHeaderRequestParams = "project=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedError = new Error('expected');
            client.innerApiCalls.update = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.update(request), expectedError);
            assert((client.innerApiCalls.update as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });
    });
});
