// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import * as Long from "long";
import {protobuf as $protobuf} from "google-gax";
/** Namespace google. */
export namespace google {

    /** Namespace cloud. */
    namespace cloud {

        /** Namespace sql. */
        namespace sql {

            /** Namespace v1beta4. */
            namespace v1beta4 {

                /** Represents a SqlBackupRunsService */
                class SqlBackupRunsService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new SqlBackupRunsService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new SqlBackupRunsService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): SqlBackupRunsService;

                    /**
                     * Calls Delete.
                     * @param request SqlBackupRunsDeleteRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public delete(request: google.cloud.sql.v1beta4.ISqlBackupRunsDeleteRequest, callback: google.cloud.sql.v1beta4.SqlBackupRunsService.DeleteCallback): void;

                    /**
                     * Calls Delete.
                     * @param request SqlBackupRunsDeleteRequest message or plain object
                     * @returns Promise
                     */
                    public delete(request: google.cloud.sql.v1beta4.ISqlBackupRunsDeleteRequest): Promise<google.cloud.sql.v1beta4.Operation>;

                    /**
                     * Calls Get.
                     * @param request SqlBackupRunsGetRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and BackupRun
                     */
                    public get(request: google.cloud.sql.v1beta4.ISqlBackupRunsGetRequest, callback: google.cloud.sql.v1beta4.SqlBackupRunsService.GetCallback): void;

                    /**
                     * Calls Get.
                     * @param request SqlBackupRunsGetRequest message or plain object
                     * @returns Promise
                     */
                    public get(request: google.cloud.sql.v1beta4.ISqlBackupRunsGetRequest): Promise<google.cloud.sql.v1beta4.BackupRun>;

                    /**
                     * Calls Insert.
                     * @param request SqlBackupRunsInsertRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public insert(request: google.cloud.sql.v1beta4.ISqlBackupRunsInsertRequest, callback: google.cloud.sql.v1beta4.SqlBackupRunsService.InsertCallback): void;

                    /**
                     * Calls Insert.
                     * @param request SqlBackupRunsInsertRequest message or plain object
                     * @returns Promise
                     */
                    public insert(request: google.cloud.sql.v1beta4.ISqlBackupRunsInsertRequest): Promise<google.cloud.sql.v1beta4.Operation>;

                    /**
                     * Calls List.
                     * @param request SqlBackupRunsListRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and BackupRunsListResponse
                     */
                    public list(request: google.cloud.sql.v1beta4.ISqlBackupRunsListRequest, callback: google.cloud.sql.v1beta4.SqlBackupRunsService.ListCallback): void;

                    /**
                     * Calls List.
                     * @param request SqlBackupRunsListRequest message or plain object
                     * @returns Promise
                     */
                    public list(request: google.cloud.sql.v1beta4.ISqlBackupRunsListRequest): Promise<google.cloud.sql.v1beta4.BackupRunsListResponse>;
                }

                namespace SqlBackupRunsService {

                    /**
                     * Callback as used by {@link google.cloud.sql.v1beta4.SqlBackupRunsService#delete_}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteCallback = (error: (Error|null), response?: google.cloud.sql.v1beta4.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.sql.v1beta4.SqlBackupRunsService#get}.
                     * @param error Error, if any
                     * @param [response] BackupRun
                     */
                    type GetCallback = (error: (Error|null), response?: google.cloud.sql.v1beta4.BackupRun) => void;

                    /**
                     * Callback as used by {@link google.cloud.sql.v1beta4.SqlBackupRunsService#insert}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type InsertCallback = (error: (Error|null), response?: google.cloud.sql.v1beta4.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.sql.v1beta4.SqlBackupRunsService#list}.
                     * @param error Error, if any
                     * @param [response] BackupRunsListResponse
                     */
                    type ListCallback = (error: (Error|null), response?: google.cloud.sql.v1beta4.BackupRunsListResponse) => void;
                }

                /** Represents a SqlDatabasesService */
                class SqlDatabasesService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new SqlDatabasesService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new SqlDatabasesService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): SqlDatabasesService;

                    /**
                     * Calls Delete.
                     * @param request SqlDatabasesDeleteRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public delete(request: google.cloud.sql.v1beta4.ISqlDatabasesDeleteRequest, callback: google.cloud.sql.v1beta4.SqlDatabasesService.DeleteCallback): void;

                    /**
                     * Calls Delete.
                     * @param request SqlDatabasesDeleteRequest message or plain object
                     * @returns Promise
                     */
                    public delete(request: google.cloud.sql.v1beta4.ISqlDatabasesDeleteRequest): Promise<google.cloud.sql.v1beta4.Operation>;

                    /**
                     * Calls Get.
                     * @param request SqlDatabasesGetRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Database
                     */
                    public get(request: google.cloud.sql.v1beta4.ISqlDatabasesGetRequest, callback: google.cloud.sql.v1beta4.SqlDatabasesService.GetCallback): void;

                    /**
                     * Calls Get.
                     * @param request SqlDatabasesGetRequest message or plain object
                     * @returns Promise
                     */
                    public get(request: google.cloud.sql.v1beta4.ISqlDatabasesGetRequest): Promise<google.cloud.sql.v1beta4.Database>;

                    /**
                     * Calls Insert.
                     * @param request SqlDatabasesInsertRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public insert(request: google.cloud.sql.v1beta4.ISqlDatabasesInsertRequest, callback: google.cloud.sql.v1beta4.SqlDatabasesService.InsertCallback): void;

                    /**
                     * Calls Insert.
                     * @param request SqlDatabasesInsertRequest message or plain object
                     * @returns Promise
                     */
                    public insert(request: google.cloud.sql.v1beta4.ISqlDatabasesInsertRequest): Promise<google.cloud.sql.v1beta4.Operation>;

                    /**
                     * Calls List.
                     * @param request SqlDatabasesListRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and DatabasesListResponse
                     */
                    public list(request: google.cloud.sql.v1beta4.ISqlDatabasesListRequest, callback: google.cloud.sql.v1beta4.SqlDatabasesService.ListCallback): void;

                    /**
                     * Calls List.
                     * @param request SqlDatabasesListRequest message or plain object
                     * @returns Promise
                     */
                    public list(request: google.cloud.sql.v1beta4.ISqlDatabasesListRequest): Promise<google.cloud.sql.v1beta4.DatabasesListResponse>;

                    /**
                     * Calls Patch.
                     * @param request SqlDatabasesUpdateRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public patch(request: google.cloud.sql.v1beta4.ISqlDatabasesUpdateRequest, callback: google.cloud.sql.v1beta4.SqlDatabasesService.PatchCallback): void;

                    /**
                     * Calls Patch.
                     * @param request SqlDatabasesUpdateRequest message or plain object
                     * @returns Promise
                     */
                    public patch(request: google.cloud.sql.v1beta4.ISqlDatabasesUpdateRequest): Promise<google.cloud.sql.v1beta4.Operation>;

                    /**
                     * Calls Update.
                     * @param request SqlDatabasesUpdateRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public update(request: google.cloud.sql.v1beta4.ISqlDatabasesUpdateRequest, callback: google.cloud.sql.v1beta4.SqlDatabasesService.UpdateCallback): void;

                    /**
                     * Calls Update.
                     * @param request SqlDatabasesUpdateRequest message or plain object
                     * @returns Promise
                     */
                    public update(request: google.cloud.sql.v1beta4.ISqlDatabasesUpdateRequest): Promise<google.cloud.sql.v1beta4.Operation>;
                }

                namespace SqlDatabasesService {

                    /**
                     * Callback as used by {@link google.cloud.sql.v1beta4.SqlDatabasesService#delete_}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteCallback = (error: (Error|null), response?: google.cloud.sql.v1beta4.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.sql.v1beta4.SqlDatabasesService#get}.
                     * @param error Error, if any
                     * @param [response] Database
                     */
                    type GetCallback = (error: (Error|null), response?: google.cloud.sql.v1beta4.Database) => void;

                    /**
                     * Callback as used by {@link google.cloud.sql.v1beta4.SqlDatabasesService#insert}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type InsertCallback = (error: (Error|null), response?: google.cloud.sql.v1beta4.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.sql.v1beta4.SqlDatabasesService#list}.
                     * @param error Error, if any
                     * @param [response] DatabasesListResponse
                     */
                    type ListCallback = (error: (Error|null), response?: google.cloud.sql.v1beta4.DatabasesListResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.sql.v1beta4.SqlDatabasesService#patch}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type PatchCallback = (error: (Error|null), response?: google.cloud.sql.v1beta4.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.sql.v1beta4.SqlDatabasesService#update}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateCallback = (error: (Error|null), response?: google.cloud.sql.v1beta4.Operation) => void;
                }

                /** Represents a SqlFlagsService */
                class SqlFlagsService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new SqlFlagsService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new SqlFlagsService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): SqlFlagsService;

                    /**
                     * Calls List.
                     * @param request SqlFlagsListRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and FlagsListResponse
                     */
                    public list(request: google.cloud.sql.v1beta4.ISqlFlagsListRequest, callback: google.cloud.sql.v1beta4.SqlFlagsService.ListCallback): void;

                    /**
                     * Calls List.
                     * @param request SqlFlagsListRequest message or plain object
                     * @returns Promise
                     */
                    public list(request: google.cloud.sql.v1beta4.ISqlFlagsListRequest): Promise<google.cloud.sql.v1beta4.FlagsListResponse>;
                }

                namespace SqlFlagsService {

                    /**
                     * Callback as used by {@link google.cloud.sql.v1beta4.SqlFlagsService#list}.
                     * @param error Error, if any
                     * @param [response] FlagsListResponse
                     */
                    type ListCallback = (error: (Error|null), response?: google.cloud.sql.v1beta4.FlagsListResponse) => void;
                }

                /** Represents a SqlInstancesService */
                class SqlInstancesService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new SqlInstancesService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new SqlInstancesService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): SqlInstancesService;

                    /**
                     * Calls AddServerCa.
                     * @param request SqlInstancesAddServerCaRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public addServerCa(request: google.cloud.sql.v1beta4.ISqlInstancesAddServerCaRequest, callback: google.cloud.sql.v1beta4.SqlInstancesService.AddServerCaCallback): void;

                    /**
                     * Calls AddServerCa.
                     * @param request SqlInstancesAddServerCaRequest message or plain object
                     * @returns Promise
                     */
                    public addServerCa(request: google.cloud.sql.v1beta4.ISqlInstancesAddServerCaRequest): Promise<google.cloud.sql.v1beta4.Operation>;

                    /**
                     * Calls Clone.
                     * @param request SqlInstancesCloneRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public clone(request: google.cloud.sql.v1beta4.ISqlInstancesCloneRequest, callback: google.cloud.sql.v1beta4.SqlInstancesService.CloneCallback): void;

                    /**
                     * Calls Clone.
                     * @param request SqlInstancesCloneRequest message or plain object
                     * @returns Promise
                     */
                    public clone(request: google.cloud.sql.v1beta4.ISqlInstancesCloneRequest): Promise<google.cloud.sql.v1beta4.Operation>;

                    /**
                     * Calls Delete.
                     * @param request SqlInstancesDeleteRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public delete(request: google.cloud.sql.v1beta4.ISqlInstancesDeleteRequest, callback: google.cloud.sql.v1beta4.SqlInstancesService.DeleteCallback): void;

                    /**
                     * Calls Delete.
                     * @param request SqlInstancesDeleteRequest message or plain object
                     * @returns Promise
                     */
                    public delete(request: google.cloud.sql.v1beta4.ISqlInstancesDeleteRequest): Promise<google.cloud.sql.v1beta4.Operation>;

                    /**
                     * Calls DemoteMaster.
                     * @param request SqlInstancesDemoteMasterRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public demoteMaster(request: google.cloud.sql.v1beta4.ISqlInstancesDemoteMasterRequest, callback: google.cloud.sql.v1beta4.SqlInstancesService.DemoteMasterCallback): void;

                    /**
                     * Calls DemoteMaster.
                     * @param request SqlInstancesDemoteMasterRequest message or plain object
                     * @returns Promise
                     */
                    public demoteMaster(request: google.cloud.sql.v1beta4.ISqlInstancesDemoteMasterRequest): Promise<google.cloud.sql.v1beta4.Operation>;

                    /**
                     * Calls Export.
                     * @param request SqlInstancesExportRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public export(request: google.cloud.sql.v1beta4.ISqlInstancesExportRequest, callback: google.cloud.sql.v1beta4.SqlInstancesService.ExportCallback): void;

                    /**
                     * Calls Export.
                     * @param request SqlInstancesExportRequest message or plain object
                     * @returns Promise
                     */
                    public export(request: google.cloud.sql.v1beta4.ISqlInstancesExportRequest): Promise<google.cloud.sql.v1beta4.Operation>;

                    /**
                     * Calls Failover.
                     * @param request SqlInstancesFailoverRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public failover(request: google.cloud.sql.v1beta4.ISqlInstancesFailoverRequest, callback: google.cloud.sql.v1beta4.SqlInstancesService.FailoverCallback): void;

                    /**
                     * Calls Failover.
                     * @param request SqlInstancesFailoverRequest message or plain object
                     * @returns Promise
                     */
                    public failover(request: google.cloud.sql.v1beta4.ISqlInstancesFailoverRequest): Promise<google.cloud.sql.v1beta4.Operation>;

                    /**
                     * Calls Get.
                     * @param request SqlInstancesGetRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and DatabaseInstance
                     */
                    public get(request: google.cloud.sql.v1beta4.ISqlInstancesGetRequest, callback: google.cloud.sql.v1beta4.SqlInstancesService.GetCallback): void;

                    /**
                     * Calls Get.
                     * @param request SqlInstancesGetRequest message or plain object
                     * @returns Promise
                     */
                    public get(request: google.cloud.sql.v1beta4.ISqlInstancesGetRequest): Promise<google.cloud.sql.v1beta4.DatabaseInstance>;

                    /**
                     * Calls Import.
                     * @param request SqlInstancesImportRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public import(request: google.cloud.sql.v1beta4.ISqlInstancesImportRequest, callback: google.cloud.sql.v1beta4.SqlInstancesService.ImportCallback): void;

                    /**
                     * Calls Import.
                     * @param request SqlInstancesImportRequest message or plain object
                     * @returns Promise
                     */
                    public import(request: google.cloud.sql.v1beta4.ISqlInstancesImportRequest): Promise<google.cloud.sql.v1beta4.Operation>;

                    /**
                     * Calls Insert.
                     * @param request SqlInstancesInsertRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public insert(request: google.cloud.sql.v1beta4.ISqlInstancesInsertRequest, callback: google.cloud.sql.v1beta4.SqlInstancesService.InsertCallback): void;

                    /**
                     * Calls Insert.
                     * @param request SqlInstancesInsertRequest message or plain object
                     * @returns Promise
                     */
                    public insert(request: google.cloud.sql.v1beta4.ISqlInstancesInsertRequest): Promise<google.cloud.sql.v1beta4.Operation>;

                    /**
                     * Calls List.
                     * @param request SqlInstancesListRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and InstancesListResponse
                     */
                    public list(request: google.cloud.sql.v1beta4.ISqlInstancesListRequest, callback: google.cloud.sql.v1beta4.SqlInstancesService.ListCallback): void;

                    /**
                     * Calls List.
                     * @param request SqlInstancesListRequest message or plain object
                     * @returns Promise
                     */
                    public list(request: google.cloud.sql.v1beta4.ISqlInstancesListRequest): Promise<google.cloud.sql.v1beta4.InstancesListResponse>;

                    /**
                     * Calls ListServerCas.
                     * @param request SqlInstancesListServerCasRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and InstancesListServerCasResponse
                     */
                    public listServerCas(request: google.cloud.sql.v1beta4.ISqlInstancesListServerCasRequest, callback: google.cloud.sql.v1beta4.SqlInstancesService.ListServerCasCallback): void;

                    /**
                     * Calls ListServerCas.
                     * @param request SqlInstancesListServerCasRequest message or plain object
                     * @returns Promise
                     */
                    public listServerCas(request: google.cloud.sql.v1beta4.ISqlInstancesListServerCasRequest): Promise<google.cloud.sql.v1beta4.InstancesListServerCasResponse>;

                    /**
                     * Calls Patch.
                     * @param request SqlInstancesPatchRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public patch(request: google.cloud.sql.v1beta4.ISqlInstancesPatchRequest, callback: google.cloud.sql.v1beta4.SqlInstancesService.PatchCallback): void;

                    /**
                     * Calls Patch.
                     * @param request SqlInstancesPatchRequest message or plain object
                     * @returns Promise
                     */
                    public patch(request: google.cloud.sql.v1beta4.ISqlInstancesPatchRequest): Promise<google.cloud.sql.v1beta4.Operation>;

                    /**
                     * Calls PromoteReplica.
                     * @param request SqlInstancesPromoteReplicaRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public promoteReplica(request: google.cloud.sql.v1beta4.ISqlInstancesPromoteReplicaRequest, callback: google.cloud.sql.v1beta4.SqlInstancesService.PromoteReplicaCallback): void;

                    /**
                     * Calls PromoteReplica.
                     * @param request SqlInstancesPromoteReplicaRequest message or plain object
                     * @returns Promise
                     */
                    public promoteReplica(request: google.cloud.sql.v1beta4.ISqlInstancesPromoteReplicaRequest): Promise<google.cloud.sql.v1beta4.Operation>;

                    /**
                     * Calls ResetSslConfig.
                     * @param request SqlInstancesResetSslConfigRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public resetSslConfig(request: google.cloud.sql.v1beta4.ISqlInstancesResetSslConfigRequest, callback: google.cloud.sql.v1beta4.SqlInstancesService.ResetSslConfigCallback): void;

                    /**
                     * Calls ResetSslConfig.
                     * @param request SqlInstancesResetSslConfigRequest message or plain object
                     * @returns Promise
                     */
                    public resetSslConfig(request: google.cloud.sql.v1beta4.ISqlInstancesResetSslConfigRequest): Promise<google.cloud.sql.v1beta4.Operation>;

                    /**
                     * Calls Restart.
                     * @param request SqlInstancesRestartRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public restart(request: google.cloud.sql.v1beta4.ISqlInstancesRestartRequest, callback: google.cloud.sql.v1beta4.SqlInstancesService.RestartCallback): void;

                    /**
                     * Calls Restart.
                     * @param request SqlInstancesRestartRequest message or plain object
                     * @returns Promise
                     */
                    public restart(request: google.cloud.sql.v1beta4.ISqlInstancesRestartRequest): Promise<google.cloud.sql.v1beta4.Operation>;

                    /**
                     * Calls RestoreBackup.
                     * @param request SqlInstancesRestoreBackupRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public restoreBackup(request: google.cloud.sql.v1beta4.ISqlInstancesRestoreBackupRequest, callback: google.cloud.sql.v1beta4.SqlInstancesService.RestoreBackupCallback): void;

                    /**
                     * Calls RestoreBackup.
                     * @param request SqlInstancesRestoreBackupRequest message or plain object
                     * @returns Promise
                     */
                    public restoreBackup(request: google.cloud.sql.v1beta4.ISqlInstancesRestoreBackupRequest): Promise<google.cloud.sql.v1beta4.Operation>;

                    /**
                     * Calls RotateServerCa.
                     * @param request SqlInstancesRotateServerCaRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public rotateServerCa(request: google.cloud.sql.v1beta4.ISqlInstancesRotateServerCaRequest, callback: google.cloud.sql.v1beta4.SqlInstancesService.RotateServerCaCallback): void;

                    /**
                     * Calls RotateServerCa.
                     * @param request SqlInstancesRotateServerCaRequest message or plain object
                     * @returns Promise
                     */
                    public rotateServerCa(request: google.cloud.sql.v1beta4.ISqlInstancesRotateServerCaRequest): Promise<google.cloud.sql.v1beta4.Operation>;

                    /**
                     * Calls StartReplica.
                     * @param request SqlInstancesStartReplicaRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public startReplica(request: google.cloud.sql.v1beta4.ISqlInstancesStartReplicaRequest, callback: google.cloud.sql.v1beta4.SqlInstancesService.StartReplicaCallback): void;

                    /**
                     * Calls StartReplica.
                     * @param request SqlInstancesStartReplicaRequest message or plain object
                     * @returns Promise
                     */
                    public startReplica(request: google.cloud.sql.v1beta4.ISqlInstancesStartReplicaRequest): Promise<google.cloud.sql.v1beta4.Operation>;

                    /**
                     * Calls StopReplica.
                     * @param request SqlInstancesStopReplicaRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public stopReplica(request: google.cloud.sql.v1beta4.ISqlInstancesStopReplicaRequest, callback: google.cloud.sql.v1beta4.SqlInstancesService.StopReplicaCallback): void;

                    /**
                     * Calls StopReplica.
                     * @param request SqlInstancesStopReplicaRequest message or plain object
                     * @returns Promise
                     */
                    public stopReplica(request: google.cloud.sql.v1beta4.ISqlInstancesStopReplicaRequest): Promise<google.cloud.sql.v1beta4.Operation>;

                    /**
                     * Calls TruncateLog.
                     * @param request SqlInstancesTruncateLogRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public truncateLog(request: google.cloud.sql.v1beta4.ISqlInstancesTruncateLogRequest, callback: google.cloud.sql.v1beta4.SqlInstancesService.TruncateLogCallback): void;

                    /**
                     * Calls TruncateLog.
                     * @param request SqlInstancesTruncateLogRequest message or plain object
                     * @returns Promise
                     */
                    public truncateLog(request: google.cloud.sql.v1beta4.ISqlInstancesTruncateLogRequest): Promise<google.cloud.sql.v1beta4.Operation>;

                    /**
                     * Calls Update.
                     * @param request SqlInstancesUpdateRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public update(request: google.cloud.sql.v1beta4.ISqlInstancesUpdateRequest, callback: google.cloud.sql.v1beta4.SqlInstancesService.UpdateCallback): void;

                    /**
                     * Calls Update.
                     * @param request SqlInstancesUpdateRequest message or plain object
                     * @returns Promise
                     */
                    public update(request: google.cloud.sql.v1beta4.ISqlInstancesUpdateRequest): Promise<google.cloud.sql.v1beta4.Operation>;

                    /**
                     * Calls CreateEphemeral.
                     * @param request SqlInstancesCreateEphemeralCertRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and SslCert
                     */
                    public createEphemeral(request: google.cloud.sql.v1beta4.ISqlInstancesCreateEphemeralCertRequest, callback: google.cloud.sql.v1beta4.SqlInstancesService.CreateEphemeralCallback): void;

                    /**
                     * Calls CreateEphemeral.
                     * @param request SqlInstancesCreateEphemeralCertRequest message or plain object
                     * @returns Promise
                     */
                    public createEphemeral(request: google.cloud.sql.v1beta4.ISqlInstancesCreateEphemeralCertRequest): Promise<google.cloud.sql.v1beta4.SslCert>;

                    /**
                     * Calls RescheduleMaintenance.
                     * @param request SqlInstancesRescheduleMaintenanceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public rescheduleMaintenance(request: google.cloud.sql.v1beta4.ISqlInstancesRescheduleMaintenanceRequest, callback: google.cloud.sql.v1beta4.SqlInstancesService.RescheduleMaintenanceCallback): void;

                    /**
                     * Calls RescheduleMaintenance.
                     * @param request SqlInstancesRescheduleMaintenanceRequest message or plain object
                     * @returns Promise
                     */
                    public rescheduleMaintenance(request: google.cloud.sql.v1beta4.ISqlInstancesRescheduleMaintenanceRequest): Promise<google.cloud.sql.v1beta4.Operation>;

                    /**
                     * Calls VerifyExternalSyncSettings.
                     * @param request SqlInstancesVerifyExternalSyncSettingsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and SqlInstancesVerifyExternalSyncSettingsResponse
                     */
                    public verifyExternalSyncSettings(request: google.cloud.sql.v1beta4.ISqlInstancesVerifyExternalSyncSettingsRequest, callback: google.cloud.sql.v1beta4.SqlInstancesService.VerifyExternalSyncSettingsCallback): void;

                    /**
                     * Calls VerifyExternalSyncSettings.
                     * @param request SqlInstancesVerifyExternalSyncSettingsRequest message or plain object
                     * @returns Promise
                     */
                    public verifyExternalSyncSettings(request: google.cloud.sql.v1beta4.ISqlInstancesVerifyExternalSyncSettingsRequest): Promise<google.cloud.sql.v1beta4.SqlInstancesVerifyExternalSyncSettingsResponse>;

                    /**
                     * Calls StartExternalSync.
                     * @param request SqlInstancesStartExternalSyncRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public startExternalSync(request: google.cloud.sql.v1beta4.ISqlInstancesStartExternalSyncRequest, callback: google.cloud.sql.v1beta4.SqlInstancesService.StartExternalSyncCallback): void;

                    /**
                     * Calls StartExternalSync.
                     * @param request SqlInstancesStartExternalSyncRequest message or plain object
                     * @returns Promise
                     */
                    public startExternalSync(request: google.cloud.sql.v1beta4.ISqlInstancesStartExternalSyncRequest): Promise<google.cloud.sql.v1beta4.Operation>;
                }

                namespace SqlInstancesService {

                    /**
                     * Callback as used by {@link google.cloud.sql.v1beta4.SqlInstancesService#addServerCa}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type AddServerCaCallback = (error: (Error|null), response?: google.cloud.sql.v1beta4.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.sql.v1beta4.SqlInstancesService#clone}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CloneCallback = (error: (Error|null), response?: google.cloud.sql.v1beta4.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.sql.v1beta4.SqlInstancesService#delete_}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteCallback = (error: (Error|null), response?: google.cloud.sql.v1beta4.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.sql.v1beta4.SqlInstancesService#demoteMaster}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DemoteMasterCallback = (error: (Error|null), response?: google.cloud.sql.v1beta4.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.sql.v1beta4.SqlInstancesService#export_}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type ExportCallback = (error: (Error|null), response?: google.cloud.sql.v1beta4.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.sql.v1beta4.SqlInstancesService#failover}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type FailoverCallback = (error: (Error|null), response?: google.cloud.sql.v1beta4.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.sql.v1beta4.SqlInstancesService#get}.
                     * @param error Error, if any
                     * @param [response] DatabaseInstance
                     */
                    type GetCallback = (error: (Error|null), response?: google.cloud.sql.v1beta4.DatabaseInstance) => void;

                    /**
                     * Callback as used by {@link google.cloud.sql.v1beta4.SqlInstancesService#import_}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type ImportCallback = (error: (Error|null), response?: google.cloud.sql.v1beta4.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.sql.v1beta4.SqlInstancesService#insert}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type InsertCallback = (error: (Error|null), response?: google.cloud.sql.v1beta4.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.sql.v1beta4.SqlInstancesService#list}.
                     * @param error Error, if any
                     * @param [response] InstancesListResponse
                     */
                    type ListCallback = (error: (Error|null), response?: google.cloud.sql.v1beta4.InstancesListResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.sql.v1beta4.SqlInstancesService#listServerCas}.
                     * @param error Error, if any
                     * @param [response] InstancesListServerCasResponse
                     */
                    type ListServerCasCallback = (error: (Error|null), response?: google.cloud.sql.v1beta4.InstancesListServerCasResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.sql.v1beta4.SqlInstancesService#patch}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type PatchCallback = (error: (Error|null), response?: google.cloud.sql.v1beta4.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.sql.v1beta4.SqlInstancesService#promoteReplica}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type PromoteReplicaCallback = (error: (Error|null), response?: google.cloud.sql.v1beta4.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.sql.v1beta4.SqlInstancesService#resetSslConfig}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type ResetSslConfigCallback = (error: (Error|null), response?: google.cloud.sql.v1beta4.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.sql.v1beta4.SqlInstancesService#restart}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type RestartCallback = (error: (Error|null), response?: google.cloud.sql.v1beta4.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.sql.v1beta4.SqlInstancesService#restoreBackup}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type RestoreBackupCallback = (error: (Error|null), response?: google.cloud.sql.v1beta4.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.sql.v1beta4.SqlInstancesService#rotateServerCa}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type RotateServerCaCallback = (error: (Error|null), response?: google.cloud.sql.v1beta4.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.sql.v1beta4.SqlInstancesService#startReplica}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type StartReplicaCallback = (error: (Error|null), response?: google.cloud.sql.v1beta4.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.sql.v1beta4.SqlInstancesService#stopReplica}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type StopReplicaCallback = (error: (Error|null), response?: google.cloud.sql.v1beta4.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.sql.v1beta4.SqlInstancesService#truncateLog}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type TruncateLogCallback = (error: (Error|null), response?: google.cloud.sql.v1beta4.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.sql.v1beta4.SqlInstancesService#update}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateCallback = (error: (Error|null), response?: google.cloud.sql.v1beta4.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.sql.v1beta4.SqlInstancesService#createEphemeral}.
                     * @param error Error, if any
                     * @param [response] SslCert
                     */
                    type CreateEphemeralCallback = (error: (Error|null), response?: google.cloud.sql.v1beta4.SslCert) => void;

                    /**
                     * Callback as used by {@link google.cloud.sql.v1beta4.SqlInstancesService#rescheduleMaintenance}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type RescheduleMaintenanceCallback = (error: (Error|null), response?: google.cloud.sql.v1beta4.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.sql.v1beta4.SqlInstancesService#verifyExternalSyncSettings}.
                     * @param error Error, if any
                     * @param [response] SqlInstancesVerifyExternalSyncSettingsResponse
                     */
                    type VerifyExternalSyncSettingsCallback = (error: (Error|null), response?: google.cloud.sql.v1beta4.SqlInstancesVerifyExternalSyncSettingsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.sql.v1beta4.SqlInstancesService#startExternalSync}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type StartExternalSyncCallback = (error: (Error|null), response?: google.cloud.sql.v1beta4.Operation) => void;
                }

                /** Represents a SqlOperationsService */
                class SqlOperationsService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new SqlOperationsService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new SqlOperationsService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): SqlOperationsService;

                    /**
                     * Calls Get.
                     * @param request SqlOperationsGetRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public get(request: google.cloud.sql.v1beta4.ISqlOperationsGetRequest, callback: google.cloud.sql.v1beta4.SqlOperationsService.GetCallback): void;

                    /**
                     * Calls Get.
                     * @param request SqlOperationsGetRequest message or plain object
                     * @returns Promise
                     */
                    public get(request: google.cloud.sql.v1beta4.ISqlOperationsGetRequest): Promise<google.cloud.sql.v1beta4.Operation>;

                    /**
                     * Calls List.
                     * @param request SqlOperationsListRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and OperationsListResponse
                     */
                    public list(request: google.cloud.sql.v1beta4.ISqlOperationsListRequest, callback: google.cloud.sql.v1beta4.SqlOperationsService.ListCallback): void;

                    /**
                     * Calls List.
                     * @param request SqlOperationsListRequest message or plain object
                     * @returns Promise
                     */
                    public list(request: google.cloud.sql.v1beta4.ISqlOperationsListRequest): Promise<google.cloud.sql.v1beta4.OperationsListResponse>;
                }

                namespace SqlOperationsService {

                    /**
                     * Callback as used by {@link google.cloud.sql.v1beta4.SqlOperationsService#get}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type GetCallback = (error: (Error|null), response?: google.cloud.sql.v1beta4.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.sql.v1beta4.SqlOperationsService#list}.
                     * @param error Error, if any
                     * @param [response] OperationsListResponse
                     */
                    type ListCallback = (error: (Error|null), response?: google.cloud.sql.v1beta4.OperationsListResponse) => void;
                }

                /** Represents a SqlSslCertsService */
                class SqlSslCertsService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new SqlSslCertsService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new SqlSslCertsService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): SqlSslCertsService;

                    /**
                     * Calls Delete.
                     * @param request SqlSslCertsDeleteRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public delete(request: google.cloud.sql.v1beta4.ISqlSslCertsDeleteRequest, callback: google.cloud.sql.v1beta4.SqlSslCertsService.DeleteCallback): void;

                    /**
                     * Calls Delete.
                     * @param request SqlSslCertsDeleteRequest message or plain object
                     * @returns Promise
                     */
                    public delete(request: google.cloud.sql.v1beta4.ISqlSslCertsDeleteRequest): Promise<google.cloud.sql.v1beta4.Operation>;

                    /**
                     * Calls Get.
                     * @param request SqlSslCertsGetRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and SslCert
                     */
                    public get(request: google.cloud.sql.v1beta4.ISqlSslCertsGetRequest, callback: google.cloud.sql.v1beta4.SqlSslCertsService.GetCallback): void;

                    /**
                     * Calls Get.
                     * @param request SqlSslCertsGetRequest message or plain object
                     * @returns Promise
                     */
                    public get(request: google.cloud.sql.v1beta4.ISqlSslCertsGetRequest): Promise<google.cloud.sql.v1beta4.SslCert>;

                    /**
                     * Calls Insert.
                     * @param request SqlSslCertsInsertRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and SslCertsInsertResponse
                     */
                    public insert(request: google.cloud.sql.v1beta4.ISqlSslCertsInsertRequest, callback: google.cloud.sql.v1beta4.SqlSslCertsService.InsertCallback): void;

                    /**
                     * Calls Insert.
                     * @param request SqlSslCertsInsertRequest message or plain object
                     * @returns Promise
                     */
                    public insert(request: google.cloud.sql.v1beta4.ISqlSslCertsInsertRequest): Promise<google.cloud.sql.v1beta4.SslCertsInsertResponse>;

                    /**
                     * Calls List.
                     * @param request SqlSslCertsListRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and SslCertsListResponse
                     */
                    public list(request: google.cloud.sql.v1beta4.ISqlSslCertsListRequest, callback: google.cloud.sql.v1beta4.SqlSslCertsService.ListCallback): void;

                    /**
                     * Calls List.
                     * @param request SqlSslCertsListRequest message or plain object
                     * @returns Promise
                     */
                    public list(request: google.cloud.sql.v1beta4.ISqlSslCertsListRequest): Promise<google.cloud.sql.v1beta4.SslCertsListResponse>;
                }

                namespace SqlSslCertsService {

                    /**
                     * Callback as used by {@link google.cloud.sql.v1beta4.SqlSslCertsService#delete_}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteCallback = (error: (Error|null), response?: google.cloud.sql.v1beta4.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.sql.v1beta4.SqlSslCertsService#get}.
                     * @param error Error, if any
                     * @param [response] SslCert
                     */
                    type GetCallback = (error: (Error|null), response?: google.cloud.sql.v1beta4.SslCert) => void;

                    /**
                     * Callback as used by {@link google.cloud.sql.v1beta4.SqlSslCertsService#insert}.
                     * @param error Error, if any
                     * @param [response] SslCertsInsertResponse
                     */
                    type InsertCallback = (error: (Error|null), response?: google.cloud.sql.v1beta4.SslCertsInsertResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.sql.v1beta4.SqlSslCertsService#list}.
                     * @param error Error, if any
                     * @param [response] SslCertsListResponse
                     */
                    type ListCallback = (error: (Error|null), response?: google.cloud.sql.v1beta4.SslCertsListResponse) => void;
                }

                /** Properties of a SqlBackupRunsDeleteRequest. */
                interface ISqlBackupRunsDeleteRequest {

                    /** SqlBackupRunsDeleteRequest id */
                    id?: (number|Long|string|null);

                    /** SqlBackupRunsDeleteRequest instance */
                    instance?: (string|null);

                    /** SqlBackupRunsDeleteRequest project */
                    project?: (string|null);
                }

                /** Represents a SqlBackupRunsDeleteRequest. */
                class SqlBackupRunsDeleteRequest implements ISqlBackupRunsDeleteRequest {

                    /**
                     * Constructs a new SqlBackupRunsDeleteRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.ISqlBackupRunsDeleteRequest);

                    /** SqlBackupRunsDeleteRequest id. */
                    public id: (number|Long|string);

                    /** SqlBackupRunsDeleteRequest instance. */
                    public instance: string;

                    /** SqlBackupRunsDeleteRequest project. */
                    public project: string;

                    /**
                     * Creates a new SqlBackupRunsDeleteRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SqlBackupRunsDeleteRequest instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.ISqlBackupRunsDeleteRequest): google.cloud.sql.v1beta4.SqlBackupRunsDeleteRequest;

                    /**
                     * Encodes the specified SqlBackupRunsDeleteRequest message. Does not implicitly {@link google.cloud.sql.v1beta4.SqlBackupRunsDeleteRequest.verify|verify} messages.
                     * @param message SqlBackupRunsDeleteRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.ISqlBackupRunsDeleteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SqlBackupRunsDeleteRequest message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.SqlBackupRunsDeleteRequest.verify|verify} messages.
                     * @param message SqlBackupRunsDeleteRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.ISqlBackupRunsDeleteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SqlBackupRunsDeleteRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SqlBackupRunsDeleteRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.SqlBackupRunsDeleteRequest;

                    /**
                     * Decodes a SqlBackupRunsDeleteRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SqlBackupRunsDeleteRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.SqlBackupRunsDeleteRequest;

                    /**
                     * Verifies a SqlBackupRunsDeleteRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SqlBackupRunsDeleteRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SqlBackupRunsDeleteRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.SqlBackupRunsDeleteRequest;

                    /**
                     * Creates a plain object from a SqlBackupRunsDeleteRequest message. Also converts values to other types if specified.
                     * @param message SqlBackupRunsDeleteRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.SqlBackupRunsDeleteRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SqlBackupRunsDeleteRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SqlBackupRunsGetRequest. */
                interface ISqlBackupRunsGetRequest {

                    /** SqlBackupRunsGetRequest id */
                    id?: (number|Long|string|null);

                    /** SqlBackupRunsGetRequest instance */
                    instance?: (string|null);

                    /** SqlBackupRunsGetRequest project */
                    project?: (string|null);
                }

                /** Represents a SqlBackupRunsGetRequest. */
                class SqlBackupRunsGetRequest implements ISqlBackupRunsGetRequest {

                    /**
                     * Constructs a new SqlBackupRunsGetRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.ISqlBackupRunsGetRequest);

                    /** SqlBackupRunsGetRequest id. */
                    public id: (number|Long|string);

                    /** SqlBackupRunsGetRequest instance. */
                    public instance: string;

                    /** SqlBackupRunsGetRequest project. */
                    public project: string;

                    /**
                     * Creates a new SqlBackupRunsGetRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SqlBackupRunsGetRequest instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.ISqlBackupRunsGetRequest): google.cloud.sql.v1beta4.SqlBackupRunsGetRequest;

                    /**
                     * Encodes the specified SqlBackupRunsGetRequest message. Does not implicitly {@link google.cloud.sql.v1beta4.SqlBackupRunsGetRequest.verify|verify} messages.
                     * @param message SqlBackupRunsGetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.ISqlBackupRunsGetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SqlBackupRunsGetRequest message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.SqlBackupRunsGetRequest.verify|verify} messages.
                     * @param message SqlBackupRunsGetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.ISqlBackupRunsGetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SqlBackupRunsGetRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SqlBackupRunsGetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.SqlBackupRunsGetRequest;

                    /**
                     * Decodes a SqlBackupRunsGetRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SqlBackupRunsGetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.SqlBackupRunsGetRequest;

                    /**
                     * Verifies a SqlBackupRunsGetRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SqlBackupRunsGetRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SqlBackupRunsGetRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.SqlBackupRunsGetRequest;

                    /**
                     * Creates a plain object from a SqlBackupRunsGetRequest message. Also converts values to other types if specified.
                     * @param message SqlBackupRunsGetRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.SqlBackupRunsGetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SqlBackupRunsGetRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SqlBackupRunsInsertRequest. */
                interface ISqlBackupRunsInsertRequest {

                    /** SqlBackupRunsInsertRequest instance */
                    instance?: (string|null);

                    /** SqlBackupRunsInsertRequest project */
                    project?: (string|null);

                    /** SqlBackupRunsInsertRequest body */
                    body?: (google.cloud.sql.v1beta4.IBackupRun|null);
                }

                /** Represents a SqlBackupRunsInsertRequest. */
                class SqlBackupRunsInsertRequest implements ISqlBackupRunsInsertRequest {

                    /**
                     * Constructs a new SqlBackupRunsInsertRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.ISqlBackupRunsInsertRequest);

                    /** SqlBackupRunsInsertRequest instance. */
                    public instance: string;

                    /** SqlBackupRunsInsertRequest project. */
                    public project: string;

                    /** SqlBackupRunsInsertRequest body. */
                    public body?: (google.cloud.sql.v1beta4.IBackupRun|null);

                    /**
                     * Creates a new SqlBackupRunsInsertRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SqlBackupRunsInsertRequest instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.ISqlBackupRunsInsertRequest): google.cloud.sql.v1beta4.SqlBackupRunsInsertRequest;

                    /**
                     * Encodes the specified SqlBackupRunsInsertRequest message. Does not implicitly {@link google.cloud.sql.v1beta4.SqlBackupRunsInsertRequest.verify|verify} messages.
                     * @param message SqlBackupRunsInsertRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.ISqlBackupRunsInsertRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SqlBackupRunsInsertRequest message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.SqlBackupRunsInsertRequest.verify|verify} messages.
                     * @param message SqlBackupRunsInsertRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.ISqlBackupRunsInsertRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SqlBackupRunsInsertRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SqlBackupRunsInsertRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.SqlBackupRunsInsertRequest;

                    /**
                     * Decodes a SqlBackupRunsInsertRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SqlBackupRunsInsertRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.SqlBackupRunsInsertRequest;

                    /**
                     * Verifies a SqlBackupRunsInsertRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SqlBackupRunsInsertRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SqlBackupRunsInsertRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.SqlBackupRunsInsertRequest;

                    /**
                     * Creates a plain object from a SqlBackupRunsInsertRequest message. Also converts values to other types if specified.
                     * @param message SqlBackupRunsInsertRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.SqlBackupRunsInsertRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SqlBackupRunsInsertRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SqlBackupRunsListRequest. */
                interface ISqlBackupRunsListRequest {

                    /** SqlBackupRunsListRequest instance */
                    instance?: (string|null);

                    /** SqlBackupRunsListRequest maxResults */
                    maxResults?: (number|null);

                    /** SqlBackupRunsListRequest pageToken */
                    pageToken?: (string|null);

                    /** SqlBackupRunsListRequest project */
                    project?: (string|null);
                }

                /** Represents a SqlBackupRunsListRequest. */
                class SqlBackupRunsListRequest implements ISqlBackupRunsListRequest {

                    /**
                     * Constructs a new SqlBackupRunsListRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.ISqlBackupRunsListRequest);

                    /** SqlBackupRunsListRequest instance. */
                    public instance: string;

                    /** SqlBackupRunsListRequest maxResults. */
                    public maxResults: number;

                    /** SqlBackupRunsListRequest pageToken. */
                    public pageToken: string;

                    /** SqlBackupRunsListRequest project. */
                    public project: string;

                    /**
                     * Creates a new SqlBackupRunsListRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SqlBackupRunsListRequest instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.ISqlBackupRunsListRequest): google.cloud.sql.v1beta4.SqlBackupRunsListRequest;

                    /**
                     * Encodes the specified SqlBackupRunsListRequest message. Does not implicitly {@link google.cloud.sql.v1beta4.SqlBackupRunsListRequest.verify|verify} messages.
                     * @param message SqlBackupRunsListRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.ISqlBackupRunsListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SqlBackupRunsListRequest message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.SqlBackupRunsListRequest.verify|verify} messages.
                     * @param message SqlBackupRunsListRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.ISqlBackupRunsListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SqlBackupRunsListRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SqlBackupRunsListRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.SqlBackupRunsListRequest;

                    /**
                     * Decodes a SqlBackupRunsListRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SqlBackupRunsListRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.SqlBackupRunsListRequest;

                    /**
                     * Verifies a SqlBackupRunsListRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SqlBackupRunsListRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SqlBackupRunsListRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.SqlBackupRunsListRequest;

                    /**
                     * Creates a plain object from a SqlBackupRunsListRequest message. Also converts values to other types if specified.
                     * @param message SqlBackupRunsListRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.SqlBackupRunsListRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SqlBackupRunsListRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SqlDatabasesDeleteRequest. */
                interface ISqlDatabasesDeleteRequest {

                    /** SqlDatabasesDeleteRequest database */
                    database?: (string|null);

                    /** SqlDatabasesDeleteRequest instance */
                    instance?: (string|null);

                    /** SqlDatabasesDeleteRequest project */
                    project?: (string|null);
                }

                /** Represents a SqlDatabasesDeleteRequest. */
                class SqlDatabasesDeleteRequest implements ISqlDatabasesDeleteRequest {

                    /**
                     * Constructs a new SqlDatabasesDeleteRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.ISqlDatabasesDeleteRequest);

                    /** SqlDatabasesDeleteRequest database. */
                    public database: string;

                    /** SqlDatabasesDeleteRequest instance. */
                    public instance: string;

                    /** SqlDatabasesDeleteRequest project. */
                    public project: string;

                    /**
                     * Creates a new SqlDatabasesDeleteRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SqlDatabasesDeleteRequest instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.ISqlDatabasesDeleteRequest): google.cloud.sql.v1beta4.SqlDatabasesDeleteRequest;

                    /**
                     * Encodes the specified SqlDatabasesDeleteRequest message. Does not implicitly {@link google.cloud.sql.v1beta4.SqlDatabasesDeleteRequest.verify|verify} messages.
                     * @param message SqlDatabasesDeleteRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.ISqlDatabasesDeleteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SqlDatabasesDeleteRequest message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.SqlDatabasesDeleteRequest.verify|verify} messages.
                     * @param message SqlDatabasesDeleteRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.ISqlDatabasesDeleteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SqlDatabasesDeleteRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SqlDatabasesDeleteRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.SqlDatabasesDeleteRequest;

                    /**
                     * Decodes a SqlDatabasesDeleteRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SqlDatabasesDeleteRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.SqlDatabasesDeleteRequest;

                    /**
                     * Verifies a SqlDatabasesDeleteRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SqlDatabasesDeleteRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SqlDatabasesDeleteRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.SqlDatabasesDeleteRequest;

                    /**
                     * Creates a plain object from a SqlDatabasesDeleteRequest message. Also converts values to other types if specified.
                     * @param message SqlDatabasesDeleteRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.SqlDatabasesDeleteRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SqlDatabasesDeleteRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SqlDatabasesGetRequest. */
                interface ISqlDatabasesGetRequest {

                    /** SqlDatabasesGetRequest database */
                    database?: (string|null);

                    /** SqlDatabasesGetRequest instance */
                    instance?: (string|null);

                    /** SqlDatabasesGetRequest project */
                    project?: (string|null);
                }

                /** Represents a SqlDatabasesGetRequest. */
                class SqlDatabasesGetRequest implements ISqlDatabasesGetRequest {

                    /**
                     * Constructs a new SqlDatabasesGetRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.ISqlDatabasesGetRequest);

                    /** SqlDatabasesGetRequest database. */
                    public database: string;

                    /** SqlDatabasesGetRequest instance. */
                    public instance: string;

                    /** SqlDatabasesGetRequest project. */
                    public project: string;

                    /**
                     * Creates a new SqlDatabasesGetRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SqlDatabasesGetRequest instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.ISqlDatabasesGetRequest): google.cloud.sql.v1beta4.SqlDatabasesGetRequest;

                    /**
                     * Encodes the specified SqlDatabasesGetRequest message. Does not implicitly {@link google.cloud.sql.v1beta4.SqlDatabasesGetRequest.verify|verify} messages.
                     * @param message SqlDatabasesGetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.ISqlDatabasesGetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SqlDatabasesGetRequest message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.SqlDatabasesGetRequest.verify|verify} messages.
                     * @param message SqlDatabasesGetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.ISqlDatabasesGetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SqlDatabasesGetRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SqlDatabasesGetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.SqlDatabasesGetRequest;

                    /**
                     * Decodes a SqlDatabasesGetRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SqlDatabasesGetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.SqlDatabasesGetRequest;

                    /**
                     * Verifies a SqlDatabasesGetRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SqlDatabasesGetRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SqlDatabasesGetRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.SqlDatabasesGetRequest;

                    /**
                     * Creates a plain object from a SqlDatabasesGetRequest message. Also converts values to other types if specified.
                     * @param message SqlDatabasesGetRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.SqlDatabasesGetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SqlDatabasesGetRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SqlDatabasesInsertRequest. */
                interface ISqlDatabasesInsertRequest {

                    /** SqlDatabasesInsertRequest instance */
                    instance?: (string|null);

                    /** SqlDatabasesInsertRequest project */
                    project?: (string|null);

                    /** SqlDatabasesInsertRequest body */
                    body?: (google.cloud.sql.v1beta4.IDatabase|null);
                }

                /** Represents a SqlDatabasesInsertRequest. */
                class SqlDatabasesInsertRequest implements ISqlDatabasesInsertRequest {

                    /**
                     * Constructs a new SqlDatabasesInsertRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.ISqlDatabasesInsertRequest);

                    /** SqlDatabasesInsertRequest instance. */
                    public instance: string;

                    /** SqlDatabasesInsertRequest project. */
                    public project: string;

                    /** SqlDatabasesInsertRequest body. */
                    public body?: (google.cloud.sql.v1beta4.IDatabase|null);

                    /**
                     * Creates a new SqlDatabasesInsertRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SqlDatabasesInsertRequest instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.ISqlDatabasesInsertRequest): google.cloud.sql.v1beta4.SqlDatabasesInsertRequest;

                    /**
                     * Encodes the specified SqlDatabasesInsertRequest message. Does not implicitly {@link google.cloud.sql.v1beta4.SqlDatabasesInsertRequest.verify|verify} messages.
                     * @param message SqlDatabasesInsertRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.ISqlDatabasesInsertRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SqlDatabasesInsertRequest message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.SqlDatabasesInsertRequest.verify|verify} messages.
                     * @param message SqlDatabasesInsertRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.ISqlDatabasesInsertRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SqlDatabasesInsertRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SqlDatabasesInsertRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.SqlDatabasesInsertRequest;

                    /**
                     * Decodes a SqlDatabasesInsertRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SqlDatabasesInsertRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.SqlDatabasesInsertRequest;

                    /**
                     * Verifies a SqlDatabasesInsertRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SqlDatabasesInsertRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SqlDatabasesInsertRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.SqlDatabasesInsertRequest;

                    /**
                     * Creates a plain object from a SqlDatabasesInsertRequest message. Also converts values to other types if specified.
                     * @param message SqlDatabasesInsertRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.SqlDatabasesInsertRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SqlDatabasesInsertRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SqlDatabasesListRequest. */
                interface ISqlDatabasesListRequest {

                    /** SqlDatabasesListRequest instance */
                    instance?: (string|null);

                    /** SqlDatabasesListRequest project */
                    project?: (string|null);
                }

                /** Represents a SqlDatabasesListRequest. */
                class SqlDatabasesListRequest implements ISqlDatabasesListRequest {

                    /**
                     * Constructs a new SqlDatabasesListRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.ISqlDatabasesListRequest);

                    /** SqlDatabasesListRequest instance. */
                    public instance: string;

                    /** SqlDatabasesListRequest project. */
                    public project: string;

                    /**
                     * Creates a new SqlDatabasesListRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SqlDatabasesListRequest instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.ISqlDatabasesListRequest): google.cloud.sql.v1beta4.SqlDatabasesListRequest;

                    /**
                     * Encodes the specified SqlDatabasesListRequest message. Does not implicitly {@link google.cloud.sql.v1beta4.SqlDatabasesListRequest.verify|verify} messages.
                     * @param message SqlDatabasesListRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.ISqlDatabasesListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SqlDatabasesListRequest message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.SqlDatabasesListRequest.verify|verify} messages.
                     * @param message SqlDatabasesListRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.ISqlDatabasesListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SqlDatabasesListRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SqlDatabasesListRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.SqlDatabasesListRequest;

                    /**
                     * Decodes a SqlDatabasesListRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SqlDatabasesListRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.SqlDatabasesListRequest;

                    /**
                     * Verifies a SqlDatabasesListRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SqlDatabasesListRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SqlDatabasesListRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.SqlDatabasesListRequest;

                    /**
                     * Creates a plain object from a SqlDatabasesListRequest message. Also converts values to other types if specified.
                     * @param message SqlDatabasesListRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.SqlDatabasesListRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SqlDatabasesListRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SqlDatabasesUpdateRequest. */
                interface ISqlDatabasesUpdateRequest {

                    /** SqlDatabasesUpdateRequest database */
                    database?: (string|null);

                    /** SqlDatabasesUpdateRequest instance */
                    instance?: (string|null);

                    /** SqlDatabasesUpdateRequest project */
                    project?: (string|null);

                    /** SqlDatabasesUpdateRequest body */
                    body?: (google.cloud.sql.v1beta4.IDatabase|null);
                }

                /** Represents a SqlDatabasesUpdateRequest. */
                class SqlDatabasesUpdateRequest implements ISqlDatabasesUpdateRequest {

                    /**
                     * Constructs a new SqlDatabasesUpdateRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.ISqlDatabasesUpdateRequest);

                    /** SqlDatabasesUpdateRequest database. */
                    public database: string;

                    /** SqlDatabasesUpdateRequest instance. */
                    public instance: string;

                    /** SqlDatabasesUpdateRequest project. */
                    public project: string;

                    /** SqlDatabasesUpdateRequest body. */
                    public body?: (google.cloud.sql.v1beta4.IDatabase|null);

                    /**
                     * Creates a new SqlDatabasesUpdateRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SqlDatabasesUpdateRequest instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.ISqlDatabasesUpdateRequest): google.cloud.sql.v1beta4.SqlDatabasesUpdateRequest;

                    /**
                     * Encodes the specified SqlDatabasesUpdateRequest message. Does not implicitly {@link google.cloud.sql.v1beta4.SqlDatabasesUpdateRequest.verify|verify} messages.
                     * @param message SqlDatabasesUpdateRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.ISqlDatabasesUpdateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SqlDatabasesUpdateRequest message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.SqlDatabasesUpdateRequest.verify|verify} messages.
                     * @param message SqlDatabasesUpdateRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.ISqlDatabasesUpdateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SqlDatabasesUpdateRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SqlDatabasesUpdateRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.SqlDatabasesUpdateRequest;

                    /**
                     * Decodes a SqlDatabasesUpdateRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SqlDatabasesUpdateRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.SqlDatabasesUpdateRequest;

                    /**
                     * Verifies a SqlDatabasesUpdateRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SqlDatabasesUpdateRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SqlDatabasesUpdateRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.SqlDatabasesUpdateRequest;

                    /**
                     * Creates a plain object from a SqlDatabasesUpdateRequest message. Also converts values to other types if specified.
                     * @param message SqlDatabasesUpdateRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.SqlDatabasesUpdateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SqlDatabasesUpdateRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SqlFlagsListRequest. */
                interface ISqlFlagsListRequest {

                    /** SqlFlagsListRequest databaseVersion */
                    databaseVersion?: (string|null);
                }

                /** Represents a SqlFlagsListRequest. */
                class SqlFlagsListRequest implements ISqlFlagsListRequest {

                    /**
                     * Constructs a new SqlFlagsListRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.ISqlFlagsListRequest);

                    /** SqlFlagsListRequest databaseVersion. */
                    public databaseVersion: string;

                    /**
                     * Creates a new SqlFlagsListRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SqlFlagsListRequest instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.ISqlFlagsListRequest): google.cloud.sql.v1beta4.SqlFlagsListRequest;

                    /**
                     * Encodes the specified SqlFlagsListRequest message. Does not implicitly {@link google.cloud.sql.v1beta4.SqlFlagsListRequest.verify|verify} messages.
                     * @param message SqlFlagsListRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.ISqlFlagsListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SqlFlagsListRequest message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.SqlFlagsListRequest.verify|verify} messages.
                     * @param message SqlFlagsListRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.ISqlFlagsListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SqlFlagsListRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SqlFlagsListRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.SqlFlagsListRequest;

                    /**
                     * Decodes a SqlFlagsListRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SqlFlagsListRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.SqlFlagsListRequest;

                    /**
                     * Verifies a SqlFlagsListRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SqlFlagsListRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SqlFlagsListRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.SqlFlagsListRequest;

                    /**
                     * Creates a plain object from a SqlFlagsListRequest message. Also converts values to other types if specified.
                     * @param message SqlFlagsListRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.SqlFlagsListRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SqlFlagsListRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SqlInstancesAddServerCaRequest. */
                interface ISqlInstancesAddServerCaRequest {

                    /** SqlInstancesAddServerCaRequest instance */
                    instance?: (string|null);

                    /** SqlInstancesAddServerCaRequest project */
                    project?: (string|null);
                }

                /** Represents a SqlInstancesAddServerCaRequest. */
                class SqlInstancesAddServerCaRequest implements ISqlInstancesAddServerCaRequest {

                    /**
                     * Constructs a new SqlInstancesAddServerCaRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.ISqlInstancesAddServerCaRequest);

                    /** SqlInstancesAddServerCaRequest instance. */
                    public instance: string;

                    /** SqlInstancesAddServerCaRequest project. */
                    public project: string;

                    /**
                     * Creates a new SqlInstancesAddServerCaRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SqlInstancesAddServerCaRequest instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.ISqlInstancesAddServerCaRequest): google.cloud.sql.v1beta4.SqlInstancesAddServerCaRequest;

                    /**
                     * Encodes the specified SqlInstancesAddServerCaRequest message. Does not implicitly {@link google.cloud.sql.v1beta4.SqlInstancesAddServerCaRequest.verify|verify} messages.
                     * @param message SqlInstancesAddServerCaRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.ISqlInstancesAddServerCaRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SqlInstancesAddServerCaRequest message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.SqlInstancesAddServerCaRequest.verify|verify} messages.
                     * @param message SqlInstancesAddServerCaRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.ISqlInstancesAddServerCaRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SqlInstancesAddServerCaRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SqlInstancesAddServerCaRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.SqlInstancesAddServerCaRequest;

                    /**
                     * Decodes a SqlInstancesAddServerCaRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SqlInstancesAddServerCaRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.SqlInstancesAddServerCaRequest;

                    /**
                     * Verifies a SqlInstancesAddServerCaRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SqlInstancesAddServerCaRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SqlInstancesAddServerCaRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.SqlInstancesAddServerCaRequest;

                    /**
                     * Creates a plain object from a SqlInstancesAddServerCaRequest message. Also converts values to other types if specified.
                     * @param message SqlInstancesAddServerCaRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.SqlInstancesAddServerCaRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SqlInstancesAddServerCaRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SqlInstancesCloneRequest. */
                interface ISqlInstancesCloneRequest {

                    /** SqlInstancesCloneRequest instance */
                    instance?: (string|null);

                    /** SqlInstancesCloneRequest project */
                    project?: (string|null);

                    /** SqlInstancesCloneRequest body */
                    body?: (google.cloud.sql.v1beta4.IInstancesCloneRequest|null);
                }

                /** Represents a SqlInstancesCloneRequest. */
                class SqlInstancesCloneRequest implements ISqlInstancesCloneRequest {

                    /**
                     * Constructs a new SqlInstancesCloneRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.ISqlInstancesCloneRequest);

                    /** SqlInstancesCloneRequest instance. */
                    public instance: string;

                    /** SqlInstancesCloneRequest project. */
                    public project: string;

                    /** SqlInstancesCloneRequest body. */
                    public body?: (google.cloud.sql.v1beta4.IInstancesCloneRequest|null);

                    /**
                     * Creates a new SqlInstancesCloneRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SqlInstancesCloneRequest instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.ISqlInstancesCloneRequest): google.cloud.sql.v1beta4.SqlInstancesCloneRequest;

                    /**
                     * Encodes the specified SqlInstancesCloneRequest message. Does not implicitly {@link google.cloud.sql.v1beta4.SqlInstancesCloneRequest.verify|verify} messages.
                     * @param message SqlInstancesCloneRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.ISqlInstancesCloneRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SqlInstancesCloneRequest message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.SqlInstancesCloneRequest.verify|verify} messages.
                     * @param message SqlInstancesCloneRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.ISqlInstancesCloneRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SqlInstancesCloneRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SqlInstancesCloneRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.SqlInstancesCloneRequest;

                    /**
                     * Decodes a SqlInstancesCloneRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SqlInstancesCloneRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.SqlInstancesCloneRequest;

                    /**
                     * Verifies a SqlInstancesCloneRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SqlInstancesCloneRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SqlInstancesCloneRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.SqlInstancesCloneRequest;

                    /**
                     * Creates a plain object from a SqlInstancesCloneRequest message. Also converts values to other types if specified.
                     * @param message SqlInstancesCloneRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.SqlInstancesCloneRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SqlInstancesCloneRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SqlInstancesDeleteRequest. */
                interface ISqlInstancesDeleteRequest {

                    /** SqlInstancesDeleteRequest instance */
                    instance?: (string|null);

                    /** SqlInstancesDeleteRequest project */
                    project?: (string|null);
                }

                /** Represents a SqlInstancesDeleteRequest. */
                class SqlInstancesDeleteRequest implements ISqlInstancesDeleteRequest {

                    /**
                     * Constructs a new SqlInstancesDeleteRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.ISqlInstancesDeleteRequest);

                    /** SqlInstancesDeleteRequest instance. */
                    public instance: string;

                    /** SqlInstancesDeleteRequest project. */
                    public project: string;

                    /**
                     * Creates a new SqlInstancesDeleteRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SqlInstancesDeleteRequest instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.ISqlInstancesDeleteRequest): google.cloud.sql.v1beta4.SqlInstancesDeleteRequest;

                    /**
                     * Encodes the specified SqlInstancesDeleteRequest message. Does not implicitly {@link google.cloud.sql.v1beta4.SqlInstancesDeleteRequest.verify|verify} messages.
                     * @param message SqlInstancesDeleteRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.ISqlInstancesDeleteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SqlInstancesDeleteRequest message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.SqlInstancesDeleteRequest.verify|verify} messages.
                     * @param message SqlInstancesDeleteRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.ISqlInstancesDeleteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SqlInstancesDeleteRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SqlInstancesDeleteRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.SqlInstancesDeleteRequest;

                    /**
                     * Decodes a SqlInstancesDeleteRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SqlInstancesDeleteRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.SqlInstancesDeleteRequest;

                    /**
                     * Verifies a SqlInstancesDeleteRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SqlInstancesDeleteRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SqlInstancesDeleteRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.SqlInstancesDeleteRequest;

                    /**
                     * Creates a plain object from a SqlInstancesDeleteRequest message. Also converts values to other types if specified.
                     * @param message SqlInstancesDeleteRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.SqlInstancesDeleteRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SqlInstancesDeleteRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SqlInstancesDemoteMasterRequest. */
                interface ISqlInstancesDemoteMasterRequest {

                    /** SqlInstancesDemoteMasterRequest instance */
                    instance?: (string|null);

                    /** SqlInstancesDemoteMasterRequest project */
                    project?: (string|null);

                    /** SqlInstancesDemoteMasterRequest body */
                    body?: (google.cloud.sql.v1beta4.IInstancesDemoteMasterRequest|null);
                }

                /** Represents a SqlInstancesDemoteMasterRequest. */
                class SqlInstancesDemoteMasterRequest implements ISqlInstancesDemoteMasterRequest {

                    /**
                     * Constructs a new SqlInstancesDemoteMasterRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.ISqlInstancesDemoteMasterRequest);

                    /** SqlInstancesDemoteMasterRequest instance. */
                    public instance: string;

                    /** SqlInstancesDemoteMasterRequest project. */
                    public project: string;

                    /** SqlInstancesDemoteMasterRequest body. */
                    public body?: (google.cloud.sql.v1beta4.IInstancesDemoteMasterRequest|null);

                    /**
                     * Creates a new SqlInstancesDemoteMasterRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SqlInstancesDemoteMasterRequest instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.ISqlInstancesDemoteMasterRequest): google.cloud.sql.v1beta4.SqlInstancesDemoteMasterRequest;

                    /**
                     * Encodes the specified SqlInstancesDemoteMasterRequest message. Does not implicitly {@link google.cloud.sql.v1beta4.SqlInstancesDemoteMasterRequest.verify|verify} messages.
                     * @param message SqlInstancesDemoteMasterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.ISqlInstancesDemoteMasterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SqlInstancesDemoteMasterRequest message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.SqlInstancesDemoteMasterRequest.verify|verify} messages.
                     * @param message SqlInstancesDemoteMasterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.ISqlInstancesDemoteMasterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SqlInstancesDemoteMasterRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SqlInstancesDemoteMasterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.SqlInstancesDemoteMasterRequest;

                    /**
                     * Decodes a SqlInstancesDemoteMasterRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SqlInstancesDemoteMasterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.SqlInstancesDemoteMasterRequest;

                    /**
                     * Verifies a SqlInstancesDemoteMasterRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SqlInstancesDemoteMasterRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SqlInstancesDemoteMasterRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.SqlInstancesDemoteMasterRequest;

                    /**
                     * Creates a plain object from a SqlInstancesDemoteMasterRequest message. Also converts values to other types if specified.
                     * @param message SqlInstancesDemoteMasterRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.SqlInstancesDemoteMasterRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SqlInstancesDemoteMasterRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SqlInstancesExportRequest. */
                interface ISqlInstancesExportRequest {

                    /** SqlInstancesExportRequest instance */
                    instance?: (string|null);

                    /** SqlInstancesExportRequest project */
                    project?: (string|null);

                    /** SqlInstancesExportRequest body */
                    body?: (google.cloud.sql.v1beta4.IInstancesExportRequest|null);
                }

                /** Represents a SqlInstancesExportRequest. */
                class SqlInstancesExportRequest implements ISqlInstancesExportRequest {

                    /**
                     * Constructs a new SqlInstancesExportRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.ISqlInstancesExportRequest);

                    /** SqlInstancesExportRequest instance. */
                    public instance: string;

                    /** SqlInstancesExportRequest project. */
                    public project: string;

                    /** SqlInstancesExportRequest body. */
                    public body?: (google.cloud.sql.v1beta4.IInstancesExportRequest|null);

                    /**
                     * Creates a new SqlInstancesExportRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SqlInstancesExportRequest instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.ISqlInstancesExportRequest): google.cloud.sql.v1beta4.SqlInstancesExportRequest;

                    /**
                     * Encodes the specified SqlInstancesExportRequest message. Does not implicitly {@link google.cloud.sql.v1beta4.SqlInstancesExportRequest.verify|verify} messages.
                     * @param message SqlInstancesExportRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.ISqlInstancesExportRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SqlInstancesExportRequest message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.SqlInstancesExportRequest.verify|verify} messages.
                     * @param message SqlInstancesExportRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.ISqlInstancesExportRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SqlInstancesExportRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SqlInstancesExportRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.SqlInstancesExportRequest;

                    /**
                     * Decodes a SqlInstancesExportRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SqlInstancesExportRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.SqlInstancesExportRequest;

                    /**
                     * Verifies a SqlInstancesExportRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SqlInstancesExportRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SqlInstancesExportRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.SqlInstancesExportRequest;

                    /**
                     * Creates a plain object from a SqlInstancesExportRequest message. Also converts values to other types if specified.
                     * @param message SqlInstancesExportRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.SqlInstancesExportRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SqlInstancesExportRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SqlInstancesFailoverRequest. */
                interface ISqlInstancesFailoverRequest {

                    /** SqlInstancesFailoverRequest instance */
                    instance?: (string|null);

                    /** SqlInstancesFailoverRequest project */
                    project?: (string|null);

                    /** SqlInstancesFailoverRequest body */
                    body?: (google.cloud.sql.v1beta4.IInstancesFailoverRequest|null);
                }

                /** Represents a SqlInstancesFailoverRequest. */
                class SqlInstancesFailoverRequest implements ISqlInstancesFailoverRequest {

                    /**
                     * Constructs a new SqlInstancesFailoverRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.ISqlInstancesFailoverRequest);

                    /** SqlInstancesFailoverRequest instance. */
                    public instance: string;

                    /** SqlInstancesFailoverRequest project. */
                    public project: string;

                    /** SqlInstancesFailoverRequest body. */
                    public body?: (google.cloud.sql.v1beta4.IInstancesFailoverRequest|null);

                    /**
                     * Creates a new SqlInstancesFailoverRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SqlInstancesFailoverRequest instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.ISqlInstancesFailoverRequest): google.cloud.sql.v1beta4.SqlInstancesFailoverRequest;

                    /**
                     * Encodes the specified SqlInstancesFailoverRequest message. Does not implicitly {@link google.cloud.sql.v1beta4.SqlInstancesFailoverRequest.verify|verify} messages.
                     * @param message SqlInstancesFailoverRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.ISqlInstancesFailoverRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SqlInstancesFailoverRequest message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.SqlInstancesFailoverRequest.verify|verify} messages.
                     * @param message SqlInstancesFailoverRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.ISqlInstancesFailoverRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SqlInstancesFailoverRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SqlInstancesFailoverRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.SqlInstancesFailoverRequest;

                    /**
                     * Decodes a SqlInstancesFailoverRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SqlInstancesFailoverRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.SqlInstancesFailoverRequest;

                    /**
                     * Verifies a SqlInstancesFailoverRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SqlInstancesFailoverRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SqlInstancesFailoverRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.SqlInstancesFailoverRequest;

                    /**
                     * Creates a plain object from a SqlInstancesFailoverRequest message. Also converts values to other types if specified.
                     * @param message SqlInstancesFailoverRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.SqlInstancesFailoverRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SqlInstancesFailoverRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SqlInstancesGetRequest. */
                interface ISqlInstancesGetRequest {

                    /** SqlInstancesGetRequest instance */
                    instance?: (string|null);

                    /** SqlInstancesGetRequest project */
                    project?: (string|null);
                }

                /** Represents a SqlInstancesGetRequest. */
                class SqlInstancesGetRequest implements ISqlInstancesGetRequest {

                    /**
                     * Constructs a new SqlInstancesGetRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.ISqlInstancesGetRequest);

                    /** SqlInstancesGetRequest instance. */
                    public instance: string;

                    /** SqlInstancesGetRequest project. */
                    public project: string;

                    /**
                     * Creates a new SqlInstancesGetRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SqlInstancesGetRequest instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.ISqlInstancesGetRequest): google.cloud.sql.v1beta4.SqlInstancesGetRequest;

                    /**
                     * Encodes the specified SqlInstancesGetRequest message. Does not implicitly {@link google.cloud.sql.v1beta4.SqlInstancesGetRequest.verify|verify} messages.
                     * @param message SqlInstancesGetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.ISqlInstancesGetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SqlInstancesGetRequest message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.SqlInstancesGetRequest.verify|verify} messages.
                     * @param message SqlInstancesGetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.ISqlInstancesGetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SqlInstancesGetRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SqlInstancesGetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.SqlInstancesGetRequest;

                    /**
                     * Decodes a SqlInstancesGetRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SqlInstancesGetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.SqlInstancesGetRequest;

                    /**
                     * Verifies a SqlInstancesGetRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SqlInstancesGetRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SqlInstancesGetRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.SqlInstancesGetRequest;

                    /**
                     * Creates a plain object from a SqlInstancesGetRequest message. Also converts values to other types if specified.
                     * @param message SqlInstancesGetRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.SqlInstancesGetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SqlInstancesGetRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SqlInstancesImportRequest. */
                interface ISqlInstancesImportRequest {

                    /** SqlInstancesImportRequest instance */
                    instance?: (string|null);

                    /** SqlInstancesImportRequest project */
                    project?: (string|null);

                    /** SqlInstancesImportRequest body */
                    body?: (google.cloud.sql.v1beta4.IInstancesImportRequest|null);
                }

                /** Represents a SqlInstancesImportRequest. */
                class SqlInstancesImportRequest implements ISqlInstancesImportRequest {

                    /**
                     * Constructs a new SqlInstancesImportRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.ISqlInstancesImportRequest);

                    /** SqlInstancesImportRequest instance. */
                    public instance: string;

                    /** SqlInstancesImportRequest project. */
                    public project: string;

                    /** SqlInstancesImportRequest body. */
                    public body?: (google.cloud.sql.v1beta4.IInstancesImportRequest|null);

                    /**
                     * Creates a new SqlInstancesImportRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SqlInstancesImportRequest instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.ISqlInstancesImportRequest): google.cloud.sql.v1beta4.SqlInstancesImportRequest;

                    /**
                     * Encodes the specified SqlInstancesImportRequest message. Does not implicitly {@link google.cloud.sql.v1beta4.SqlInstancesImportRequest.verify|verify} messages.
                     * @param message SqlInstancesImportRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.ISqlInstancesImportRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SqlInstancesImportRequest message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.SqlInstancesImportRequest.verify|verify} messages.
                     * @param message SqlInstancesImportRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.ISqlInstancesImportRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SqlInstancesImportRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SqlInstancesImportRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.SqlInstancesImportRequest;

                    /**
                     * Decodes a SqlInstancesImportRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SqlInstancesImportRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.SqlInstancesImportRequest;

                    /**
                     * Verifies a SqlInstancesImportRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SqlInstancesImportRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SqlInstancesImportRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.SqlInstancesImportRequest;

                    /**
                     * Creates a plain object from a SqlInstancesImportRequest message. Also converts values to other types if specified.
                     * @param message SqlInstancesImportRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.SqlInstancesImportRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SqlInstancesImportRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SqlInstancesInsertRequest. */
                interface ISqlInstancesInsertRequest {

                    /** SqlInstancesInsertRequest project */
                    project?: (string|null);

                    /** SqlInstancesInsertRequest body */
                    body?: (google.cloud.sql.v1beta4.IDatabaseInstance|null);
                }

                /** Represents a SqlInstancesInsertRequest. */
                class SqlInstancesInsertRequest implements ISqlInstancesInsertRequest {

                    /**
                     * Constructs a new SqlInstancesInsertRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.ISqlInstancesInsertRequest);

                    /** SqlInstancesInsertRequest project. */
                    public project: string;

                    /** SqlInstancesInsertRequest body. */
                    public body?: (google.cloud.sql.v1beta4.IDatabaseInstance|null);

                    /**
                     * Creates a new SqlInstancesInsertRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SqlInstancesInsertRequest instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.ISqlInstancesInsertRequest): google.cloud.sql.v1beta4.SqlInstancesInsertRequest;

                    /**
                     * Encodes the specified SqlInstancesInsertRequest message. Does not implicitly {@link google.cloud.sql.v1beta4.SqlInstancesInsertRequest.verify|verify} messages.
                     * @param message SqlInstancesInsertRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.ISqlInstancesInsertRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SqlInstancesInsertRequest message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.SqlInstancesInsertRequest.verify|verify} messages.
                     * @param message SqlInstancesInsertRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.ISqlInstancesInsertRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SqlInstancesInsertRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SqlInstancesInsertRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.SqlInstancesInsertRequest;

                    /**
                     * Decodes a SqlInstancesInsertRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SqlInstancesInsertRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.SqlInstancesInsertRequest;

                    /**
                     * Verifies a SqlInstancesInsertRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SqlInstancesInsertRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SqlInstancesInsertRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.SqlInstancesInsertRequest;

                    /**
                     * Creates a plain object from a SqlInstancesInsertRequest message. Also converts values to other types if specified.
                     * @param message SqlInstancesInsertRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.SqlInstancesInsertRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SqlInstancesInsertRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SqlInstancesListRequest. */
                interface ISqlInstancesListRequest {

                    /** SqlInstancesListRequest filter */
                    filter?: (string|null);

                    /** SqlInstancesListRequest maxResults */
                    maxResults?: (number|null);

                    /** SqlInstancesListRequest pageToken */
                    pageToken?: (string|null);

                    /** SqlInstancesListRequest project */
                    project?: (string|null);
                }

                /** Represents a SqlInstancesListRequest. */
                class SqlInstancesListRequest implements ISqlInstancesListRequest {

                    /**
                     * Constructs a new SqlInstancesListRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.ISqlInstancesListRequest);

                    /** SqlInstancesListRequest filter. */
                    public filter: string;

                    /** SqlInstancesListRequest maxResults. */
                    public maxResults: number;

                    /** SqlInstancesListRequest pageToken. */
                    public pageToken: string;

                    /** SqlInstancesListRequest project. */
                    public project: string;

                    /**
                     * Creates a new SqlInstancesListRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SqlInstancesListRequest instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.ISqlInstancesListRequest): google.cloud.sql.v1beta4.SqlInstancesListRequest;

                    /**
                     * Encodes the specified SqlInstancesListRequest message. Does not implicitly {@link google.cloud.sql.v1beta4.SqlInstancesListRequest.verify|verify} messages.
                     * @param message SqlInstancesListRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.ISqlInstancesListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SqlInstancesListRequest message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.SqlInstancesListRequest.verify|verify} messages.
                     * @param message SqlInstancesListRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.ISqlInstancesListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SqlInstancesListRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SqlInstancesListRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.SqlInstancesListRequest;

                    /**
                     * Decodes a SqlInstancesListRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SqlInstancesListRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.SqlInstancesListRequest;

                    /**
                     * Verifies a SqlInstancesListRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SqlInstancesListRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SqlInstancesListRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.SqlInstancesListRequest;

                    /**
                     * Creates a plain object from a SqlInstancesListRequest message. Also converts values to other types if specified.
                     * @param message SqlInstancesListRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.SqlInstancesListRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SqlInstancesListRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SqlInstancesListServerCasRequest. */
                interface ISqlInstancesListServerCasRequest {

                    /** SqlInstancesListServerCasRequest instance */
                    instance?: (string|null);

                    /** SqlInstancesListServerCasRequest project */
                    project?: (string|null);
                }

                /** Represents a SqlInstancesListServerCasRequest. */
                class SqlInstancesListServerCasRequest implements ISqlInstancesListServerCasRequest {

                    /**
                     * Constructs a new SqlInstancesListServerCasRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.ISqlInstancesListServerCasRequest);

                    /** SqlInstancesListServerCasRequest instance. */
                    public instance: string;

                    /** SqlInstancesListServerCasRequest project. */
                    public project: string;

                    /**
                     * Creates a new SqlInstancesListServerCasRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SqlInstancesListServerCasRequest instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.ISqlInstancesListServerCasRequest): google.cloud.sql.v1beta4.SqlInstancesListServerCasRequest;

                    /**
                     * Encodes the specified SqlInstancesListServerCasRequest message. Does not implicitly {@link google.cloud.sql.v1beta4.SqlInstancesListServerCasRequest.verify|verify} messages.
                     * @param message SqlInstancesListServerCasRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.ISqlInstancesListServerCasRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SqlInstancesListServerCasRequest message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.SqlInstancesListServerCasRequest.verify|verify} messages.
                     * @param message SqlInstancesListServerCasRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.ISqlInstancesListServerCasRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SqlInstancesListServerCasRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SqlInstancesListServerCasRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.SqlInstancesListServerCasRequest;

                    /**
                     * Decodes a SqlInstancesListServerCasRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SqlInstancesListServerCasRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.SqlInstancesListServerCasRequest;

                    /**
                     * Verifies a SqlInstancesListServerCasRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SqlInstancesListServerCasRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SqlInstancesListServerCasRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.SqlInstancesListServerCasRequest;

                    /**
                     * Creates a plain object from a SqlInstancesListServerCasRequest message. Also converts values to other types if specified.
                     * @param message SqlInstancesListServerCasRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.SqlInstancesListServerCasRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SqlInstancesListServerCasRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SqlInstancesPatchRequest. */
                interface ISqlInstancesPatchRequest {

                    /** SqlInstancesPatchRequest instance */
                    instance?: (string|null);

                    /** SqlInstancesPatchRequest project */
                    project?: (string|null);

                    /** SqlInstancesPatchRequest body */
                    body?: (google.cloud.sql.v1beta4.IDatabaseInstance|null);
                }

                /** Represents a SqlInstancesPatchRequest. */
                class SqlInstancesPatchRequest implements ISqlInstancesPatchRequest {

                    /**
                     * Constructs a new SqlInstancesPatchRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.ISqlInstancesPatchRequest);

                    /** SqlInstancesPatchRequest instance. */
                    public instance: string;

                    /** SqlInstancesPatchRequest project. */
                    public project: string;

                    /** SqlInstancesPatchRequest body. */
                    public body?: (google.cloud.sql.v1beta4.IDatabaseInstance|null);

                    /**
                     * Creates a new SqlInstancesPatchRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SqlInstancesPatchRequest instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.ISqlInstancesPatchRequest): google.cloud.sql.v1beta4.SqlInstancesPatchRequest;

                    /**
                     * Encodes the specified SqlInstancesPatchRequest message. Does not implicitly {@link google.cloud.sql.v1beta4.SqlInstancesPatchRequest.verify|verify} messages.
                     * @param message SqlInstancesPatchRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.ISqlInstancesPatchRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SqlInstancesPatchRequest message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.SqlInstancesPatchRequest.verify|verify} messages.
                     * @param message SqlInstancesPatchRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.ISqlInstancesPatchRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SqlInstancesPatchRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SqlInstancesPatchRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.SqlInstancesPatchRequest;

                    /**
                     * Decodes a SqlInstancesPatchRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SqlInstancesPatchRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.SqlInstancesPatchRequest;

                    /**
                     * Verifies a SqlInstancesPatchRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SqlInstancesPatchRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SqlInstancesPatchRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.SqlInstancesPatchRequest;

                    /**
                     * Creates a plain object from a SqlInstancesPatchRequest message. Also converts values to other types if specified.
                     * @param message SqlInstancesPatchRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.SqlInstancesPatchRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SqlInstancesPatchRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SqlInstancesPromoteReplicaRequest. */
                interface ISqlInstancesPromoteReplicaRequest {

                    /** SqlInstancesPromoteReplicaRequest instance */
                    instance?: (string|null);

                    /** SqlInstancesPromoteReplicaRequest project */
                    project?: (string|null);
                }

                /** Represents a SqlInstancesPromoteReplicaRequest. */
                class SqlInstancesPromoteReplicaRequest implements ISqlInstancesPromoteReplicaRequest {

                    /**
                     * Constructs a new SqlInstancesPromoteReplicaRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.ISqlInstancesPromoteReplicaRequest);

                    /** SqlInstancesPromoteReplicaRequest instance. */
                    public instance: string;

                    /** SqlInstancesPromoteReplicaRequest project. */
                    public project: string;

                    /**
                     * Creates a new SqlInstancesPromoteReplicaRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SqlInstancesPromoteReplicaRequest instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.ISqlInstancesPromoteReplicaRequest): google.cloud.sql.v1beta4.SqlInstancesPromoteReplicaRequest;

                    /**
                     * Encodes the specified SqlInstancesPromoteReplicaRequest message. Does not implicitly {@link google.cloud.sql.v1beta4.SqlInstancesPromoteReplicaRequest.verify|verify} messages.
                     * @param message SqlInstancesPromoteReplicaRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.ISqlInstancesPromoteReplicaRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SqlInstancesPromoteReplicaRequest message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.SqlInstancesPromoteReplicaRequest.verify|verify} messages.
                     * @param message SqlInstancesPromoteReplicaRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.ISqlInstancesPromoteReplicaRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SqlInstancesPromoteReplicaRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SqlInstancesPromoteReplicaRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.SqlInstancesPromoteReplicaRequest;

                    /**
                     * Decodes a SqlInstancesPromoteReplicaRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SqlInstancesPromoteReplicaRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.SqlInstancesPromoteReplicaRequest;

                    /**
                     * Verifies a SqlInstancesPromoteReplicaRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SqlInstancesPromoteReplicaRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SqlInstancesPromoteReplicaRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.SqlInstancesPromoteReplicaRequest;

                    /**
                     * Creates a plain object from a SqlInstancesPromoteReplicaRequest message. Also converts values to other types if specified.
                     * @param message SqlInstancesPromoteReplicaRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.SqlInstancesPromoteReplicaRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SqlInstancesPromoteReplicaRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SqlInstancesResetSslConfigRequest. */
                interface ISqlInstancesResetSslConfigRequest {

                    /** SqlInstancesResetSslConfigRequest instance */
                    instance?: (string|null);

                    /** SqlInstancesResetSslConfigRequest project */
                    project?: (string|null);
                }

                /** Represents a SqlInstancesResetSslConfigRequest. */
                class SqlInstancesResetSslConfigRequest implements ISqlInstancesResetSslConfigRequest {

                    /**
                     * Constructs a new SqlInstancesResetSslConfigRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.ISqlInstancesResetSslConfigRequest);

                    /** SqlInstancesResetSslConfigRequest instance. */
                    public instance: string;

                    /** SqlInstancesResetSslConfigRequest project. */
                    public project: string;

                    /**
                     * Creates a new SqlInstancesResetSslConfigRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SqlInstancesResetSslConfigRequest instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.ISqlInstancesResetSslConfigRequest): google.cloud.sql.v1beta4.SqlInstancesResetSslConfigRequest;

                    /**
                     * Encodes the specified SqlInstancesResetSslConfigRequest message. Does not implicitly {@link google.cloud.sql.v1beta4.SqlInstancesResetSslConfigRequest.verify|verify} messages.
                     * @param message SqlInstancesResetSslConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.ISqlInstancesResetSslConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SqlInstancesResetSslConfigRequest message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.SqlInstancesResetSslConfigRequest.verify|verify} messages.
                     * @param message SqlInstancesResetSslConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.ISqlInstancesResetSslConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SqlInstancesResetSslConfigRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SqlInstancesResetSslConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.SqlInstancesResetSslConfigRequest;

                    /**
                     * Decodes a SqlInstancesResetSslConfigRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SqlInstancesResetSslConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.SqlInstancesResetSslConfigRequest;

                    /**
                     * Verifies a SqlInstancesResetSslConfigRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SqlInstancesResetSslConfigRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SqlInstancesResetSslConfigRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.SqlInstancesResetSslConfigRequest;

                    /**
                     * Creates a plain object from a SqlInstancesResetSslConfigRequest message. Also converts values to other types if specified.
                     * @param message SqlInstancesResetSslConfigRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.SqlInstancesResetSslConfigRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SqlInstancesResetSslConfigRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SqlInstancesRestartRequest. */
                interface ISqlInstancesRestartRequest {

                    /** SqlInstancesRestartRequest instance */
                    instance?: (string|null);

                    /** SqlInstancesRestartRequest project */
                    project?: (string|null);
                }

                /** Represents a SqlInstancesRestartRequest. */
                class SqlInstancesRestartRequest implements ISqlInstancesRestartRequest {

                    /**
                     * Constructs a new SqlInstancesRestartRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.ISqlInstancesRestartRequest);

                    /** SqlInstancesRestartRequest instance. */
                    public instance: string;

                    /** SqlInstancesRestartRequest project. */
                    public project: string;

                    /**
                     * Creates a new SqlInstancesRestartRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SqlInstancesRestartRequest instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.ISqlInstancesRestartRequest): google.cloud.sql.v1beta4.SqlInstancesRestartRequest;

                    /**
                     * Encodes the specified SqlInstancesRestartRequest message. Does not implicitly {@link google.cloud.sql.v1beta4.SqlInstancesRestartRequest.verify|verify} messages.
                     * @param message SqlInstancesRestartRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.ISqlInstancesRestartRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SqlInstancesRestartRequest message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.SqlInstancesRestartRequest.verify|verify} messages.
                     * @param message SqlInstancesRestartRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.ISqlInstancesRestartRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SqlInstancesRestartRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SqlInstancesRestartRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.SqlInstancesRestartRequest;

                    /**
                     * Decodes a SqlInstancesRestartRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SqlInstancesRestartRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.SqlInstancesRestartRequest;

                    /**
                     * Verifies a SqlInstancesRestartRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SqlInstancesRestartRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SqlInstancesRestartRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.SqlInstancesRestartRequest;

                    /**
                     * Creates a plain object from a SqlInstancesRestartRequest message. Also converts values to other types if specified.
                     * @param message SqlInstancesRestartRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.SqlInstancesRestartRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SqlInstancesRestartRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SqlInstancesRestoreBackupRequest. */
                interface ISqlInstancesRestoreBackupRequest {

                    /** SqlInstancesRestoreBackupRequest instance */
                    instance?: (string|null);

                    /** SqlInstancesRestoreBackupRequest project */
                    project?: (string|null);

                    /** SqlInstancesRestoreBackupRequest body */
                    body?: (google.cloud.sql.v1beta4.IInstancesRestoreBackupRequest|null);
                }

                /** Represents a SqlInstancesRestoreBackupRequest. */
                class SqlInstancesRestoreBackupRequest implements ISqlInstancesRestoreBackupRequest {

                    /**
                     * Constructs a new SqlInstancesRestoreBackupRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.ISqlInstancesRestoreBackupRequest);

                    /** SqlInstancesRestoreBackupRequest instance. */
                    public instance: string;

                    /** SqlInstancesRestoreBackupRequest project. */
                    public project: string;

                    /** SqlInstancesRestoreBackupRequest body. */
                    public body?: (google.cloud.sql.v1beta4.IInstancesRestoreBackupRequest|null);

                    /**
                     * Creates a new SqlInstancesRestoreBackupRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SqlInstancesRestoreBackupRequest instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.ISqlInstancesRestoreBackupRequest): google.cloud.sql.v1beta4.SqlInstancesRestoreBackupRequest;

                    /**
                     * Encodes the specified SqlInstancesRestoreBackupRequest message. Does not implicitly {@link google.cloud.sql.v1beta4.SqlInstancesRestoreBackupRequest.verify|verify} messages.
                     * @param message SqlInstancesRestoreBackupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.ISqlInstancesRestoreBackupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SqlInstancesRestoreBackupRequest message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.SqlInstancesRestoreBackupRequest.verify|verify} messages.
                     * @param message SqlInstancesRestoreBackupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.ISqlInstancesRestoreBackupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SqlInstancesRestoreBackupRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SqlInstancesRestoreBackupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.SqlInstancesRestoreBackupRequest;

                    /**
                     * Decodes a SqlInstancesRestoreBackupRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SqlInstancesRestoreBackupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.SqlInstancesRestoreBackupRequest;

                    /**
                     * Verifies a SqlInstancesRestoreBackupRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SqlInstancesRestoreBackupRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SqlInstancesRestoreBackupRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.SqlInstancesRestoreBackupRequest;

                    /**
                     * Creates a plain object from a SqlInstancesRestoreBackupRequest message. Also converts values to other types if specified.
                     * @param message SqlInstancesRestoreBackupRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.SqlInstancesRestoreBackupRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SqlInstancesRestoreBackupRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SqlInstancesRotateServerCaRequest. */
                interface ISqlInstancesRotateServerCaRequest {

                    /** SqlInstancesRotateServerCaRequest instance */
                    instance?: (string|null);

                    /** SqlInstancesRotateServerCaRequest project */
                    project?: (string|null);

                    /** SqlInstancesRotateServerCaRequest body */
                    body?: (google.cloud.sql.v1beta4.IInstancesRotateServerCaRequest|null);
                }

                /** Represents a SqlInstancesRotateServerCaRequest. */
                class SqlInstancesRotateServerCaRequest implements ISqlInstancesRotateServerCaRequest {

                    /**
                     * Constructs a new SqlInstancesRotateServerCaRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.ISqlInstancesRotateServerCaRequest);

                    /** SqlInstancesRotateServerCaRequest instance. */
                    public instance: string;

                    /** SqlInstancesRotateServerCaRequest project. */
                    public project: string;

                    /** SqlInstancesRotateServerCaRequest body. */
                    public body?: (google.cloud.sql.v1beta4.IInstancesRotateServerCaRequest|null);

                    /**
                     * Creates a new SqlInstancesRotateServerCaRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SqlInstancesRotateServerCaRequest instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.ISqlInstancesRotateServerCaRequest): google.cloud.sql.v1beta4.SqlInstancesRotateServerCaRequest;

                    /**
                     * Encodes the specified SqlInstancesRotateServerCaRequest message. Does not implicitly {@link google.cloud.sql.v1beta4.SqlInstancesRotateServerCaRequest.verify|verify} messages.
                     * @param message SqlInstancesRotateServerCaRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.ISqlInstancesRotateServerCaRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SqlInstancesRotateServerCaRequest message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.SqlInstancesRotateServerCaRequest.verify|verify} messages.
                     * @param message SqlInstancesRotateServerCaRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.ISqlInstancesRotateServerCaRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SqlInstancesRotateServerCaRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SqlInstancesRotateServerCaRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.SqlInstancesRotateServerCaRequest;

                    /**
                     * Decodes a SqlInstancesRotateServerCaRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SqlInstancesRotateServerCaRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.SqlInstancesRotateServerCaRequest;

                    /**
                     * Verifies a SqlInstancesRotateServerCaRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SqlInstancesRotateServerCaRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SqlInstancesRotateServerCaRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.SqlInstancesRotateServerCaRequest;

                    /**
                     * Creates a plain object from a SqlInstancesRotateServerCaRequest message. Also converts values to other types if specified.
                     * @param message SqlInstancesRotateServerCaRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.SqlInstancesRotateServerCaRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SqlInstancesRotateServerCaRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SqlInstancesStartReplicaRequest. */
                interface ISqlInstancesStartReplicaRequest {

                    /** SqlInstancesStartReplicaRequest instance */
                    instance?: (string|null);

                    /** SqlInstancesStartReplicaRequest project */
                    project?: (string|null);
                }

                /** Represents a SqlInstancesStartReplicaRequest. */
                class SqlInstancesStartReplicaRequest implements ISqlInstancesStartReplicaRequest {

                    /**
                     * Constructs a new SqlInstancesStartReplicaRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.ISqlInstancesStartReplicaRequest);

                    /** SqlInstancesStartReplicaRequest instance. */
                    public instance: string;

                    /** SqlInstancesStartReplicaRequest project. */
                    public project: string;

                    /**
                     * Creates a new SqlInstancesStartReplicaRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SqlInstancesStartReplicaRequest instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.ISqlInstancesStartReplicaRequest): google.cloud.sql.v1beta4.SqlInstancesStartReplicaRequest;

                    /**
                     * Encodes the specified SqlInstancesStartReplicaRequest message. Does not implicitly {@link google.cloud.sql.v1beta4.SqlInstancesStartReplicaRequest.verify|verify} messages.
                     * @param message SqlInstancesStartReplicaRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.ISqlInstancesStartReplicaRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SqlInstancesStartReplicaRequest message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.SqlInstancesStartReplicaRequest.verify|verify} messages.
                     * @param message SqlInstancesStartReplicaRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.ISqlInstancesStartReplicaRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SqlInstancesStartReplicaRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SqlInstancesStartReplicaRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.SqlInstancesStartReplicaRequest;

                    /**
                     * Decodes a SqlInstancesStartReplicaRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SqlInstancesStartReplicaRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.SqlInstancesStartReplicaRequest;

                    /**
                     * Verifies a SqlInstancesStartReplicaRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SqlInstancesStartReplicaRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SqlInstancesStartReplicaRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.SqlInstancesStartReplicaRequest;

                    /**
                     * Creates a plain object from a SqlInstancesStartReplicaRequest message. Also converts values to other types if specified.
                     * @param message SqlInstancesStartReplicaRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.SqlInstancesStartReplicaRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SqlInstancesStartReplicaRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SqlInstancesStopReplicaRequest. */
                interface ISqlInstancesStopReplicaRequest {

                    /** SqlInstancesStopReplicaRequest instance */
                    instance?: (string|null);

                    /** SqlInstancesStopReplicaRequest project */
                    project?: (string|null);
                }

                /** Represents a SqlInstancesStopReplicaRequest. */
                class SqlInstancesStopReplicaRequest implements ISqlInstancesStopReplicaRequest {

                    /**
                     * Constructs a new SqlInstancesStopReplicaRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.ISqlInstancesStopReplicaRequest);

                    /** SqlInstancesStopReplicaRequest instance. */
                    public instance: string;

                    /** SqlInstancesStopReplicaRequest project. */
                    public project: string;

                    /**
                     * Creates a new SqlInstancesStopReplicaRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SqlInstancesStopReplicaRequest instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.ISqlInstancesStopReplicaRequest): google.cloud.sql.v1beta4.SqlInstancesStopReplicaRequest;

                    /**
                     * Encodes the specified SqlInstancesStopReplicaRequest message. Does not implicitly {@link google.cloud.sql.v1beta4.SqlInstancesStopReplicaRequest.verify|verify} messages.
                     * @param message SqlInstancesStopReplicaRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.ISqlInstancesStopReplicaRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SqlInstancesStopReplicaRequest message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.SqlInstancesStopReplicaRequest.verify|verify} messages.
                     * @param message SqlInstancesStopReplicaRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.ISqlInstancesStopReplicaRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SqlInstancesStopReplicaRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SqlInstancesStopReplicaRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.SqlInstancesStopReplicaRequest;

                    /**
                     * Decodes a SqlInstancesStopReplicaRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SqlInstancesStopReplicaRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.SqlInstancesStopReplicaRequest;

                    /**
                     * Verifies a SqlInstancesStopReplicaRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SqlInstancesStopReplicaRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SqlInstancesStopReplicaRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.SqlInstancesStopReplicaRequest;

                    /**
                     * Creates a plain object from a SqlInstancesStopReplicaRequest message. Also converts values to other types if specified.
                     * @param message SqlInstancesStopReplicaRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.SqlInstancesStopReplicaRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SqlInstancesStopReplicaRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SqlInstancesTruncateLogRequest. */
                interface ISqlInstancesTruncateLogRequest {

                    /** SqlInstancesTruncateLogRequest instance */
                    instance?: (string|null);

                    /** SqlInstancesTruncateLogRequest project */
                    project?: (string|null);

                    /** SqlInstancesTruncateLogRequest body */
                    body?: (google.cloud.sql.v1beta4.IInstancesTruncateLogRequest|null);
                }

                /** Represents a SqlInstancesTruncateLogRequest. */
                class SqlInstancesTruncateLogRequest implements ISqlInstancesTruncateLogRequest {

                    /**
                     * Constructs a new SqlInstancesTruncateLogRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.ISqlInstancesTruncateLogRequest);

                    /** SqlInstancesTruncateLogRequest instance. */
                    public instance: string;

                    /** SqlInstancesTruncateLogRequest project. */
                    public project: string;

                    /** SqlInstancesTruncateLogRequest body. */
                    public body?: (google.cloud.sql.v1beta4.IInstancesTruncateLogRequest|null);

                    /**
                     * Creates a new SqlInstancesTruncateLogRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SqlInstancesTruncateLogRequest instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.ISqlInstancesTruncateLogRequest): google.cloud.sql.v1beta4.SqlInstancesTruncateLogRequest;

                    /**
                     * Encodes the specified SqlInstancesTruncateLogRequest message. Does not implicitly {@link google.cloud.sql.v1beta4.SqlInstancesTruncateLogRequest.verify|verify} messages.
                     * @param message SqlInstancesTruncateLogRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.ISqlInstancesTruncateLogRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SqlInstancesTruncateLogRequest message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.SqlInstancesTruncateLogRequest.verify|verify} messages.
                     * @param message SqlInstancesTruncateLogRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.ISqlInstancesTruncateLogRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SqlInstancesTruncateLogRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SqlInstancesTruncateLogRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.SqlInstancesTruncateLogRequest;

                    /**
                     * Decodes a SqlInstancesTruncateLogRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SqlInstancesTruncateLogRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.SqlInstancesTruncateLogRequest;

                    /**
                     * Verifies a SqlInstancesTruncateLogRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SqlInstancesTruncateLogRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SqlInstancesTruncateLogRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.SqlInstancesTruncateLogRequest;

                    /**
                     * Creates a plain object from a SqlInstancesTruncateLogRequest message. Also converts values to other types if specified.
                     * @param message SqlInstancesTruncateLogRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.SqlInstancesTruncateLogRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SqlInstancesTruncateLogRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SqlInstancesUpdateRequest. */
                interface ISqlInstancesUpdateRequest {

                    /** SqlInstancesUpdateRequest instance */
                    instance?: (string|null);

                    /** SqlInstancesUpdateRequest project */
                    project?: (string|null);

                    /** SqlInstancesUpdateRequest body */
                    body?: (google.cloud.sql.v1beta4.IDatabaseInstance|null);
                }

                /** Represents a SqlInstancesUpdateRequest. */
                class SqlInstancesUpdateRequest implements ISqlInstancesUpdateRequest {

                    /**
                     * Constructs a new SqlInstancesUpdateRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.ISqlInstancesUpdateRequest);

                    /** SqlInstancesUpdateRequest instance. */
                    public instance: string;

                    /** SqlInstancesUpdateRequest project. */
                    public project: string;

                    /** SqlInstancesUpdateRequest body. */
                    public body?: (google.cloud.sql.v1beta4.IDatabaseInstance|null);

                    /**
                     * Creates a new SqlInstancesUpdateRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SqlInstancesUpdateRequest instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.ISqlInstancesUpdateRequest): google.cloud.sql.v1beta4.SqlInstancesUpdateRequest;

                    /**
                     * Encodes the specified SqlInstancesUpdateRequest message. Does not implicitly {@link google.cloud.sql.v1beta4.SqlInstancesUpdateRequest.verify|verify} messages.
                     * @param message SqlInstancesUpdateRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.ISqlInstancesUpdateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SqlInstancesUpdateRequest message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.SqlInstancesUpdateRequest.verify|verify} messages.
                     * @param message SqlInstancesUpdateRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.ISqlInstancesUpdateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SqlInstancesUpdateRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SqlInstancesUpdateRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.SqlInstancesUpdateRequest;

                    /**
                     * Decodes a SqlInstancesUpdateRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SqlInstancesUpdateRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.SqlInstancesUpdateRequest;

                    /**
                     * Verifies a SqlInstancesUpdateRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SqlInstancesUpdateRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SqlInstancesUpdateRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.SqlInstancesUpdateRequest;

                    /**
                     * Creates a plain object from a SqlInstancesUpdateRequest message. Also converts values to other types if specified.
                     * @param message SqlInstancesUpdateRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.SqlInstancesUpdateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SqlInstancesUpdateRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SqlInstancesRescheduleMaintenanceRequest. */
                interface ISqlInstancesRescheduleMaintenanceRequest {

                    /** SqlInstancesRescheduleMaintenanceRequest instance */
                    instance?: (string|null);

                    /** SqlInstancesRescheduleMaintenanceRequest project */
                    project?: (string|null);

                    /** SqlInstancesRescheduleMaintenanceRequest body */
                    body?: (google.cloud.sql.v1beta4.ISqlInstancesRescheduleMaintenanceRequestBody|null);
                }

                /** Represents a SqlInstancesRescheduleMaintenanceRequest. */
                class SqlInstancesRescheduleMaintenanceRequest implements ISqlInstancesRescheduleMaintenanceRequest {

                    /**
                     * Constructs a new SqlInstancesRescheduleMaintenanceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.ISqlInstancesRescheduleMaintenanceRequest);

                    /** SqlInstancesRescheduleMaintenanceRequest instance. */
                    public instance: string;

                    /** SqlInstancesRescheduleMaintenanceRequest project. */
                    public project: string;

                    /** SqlInstancesRescheduleMaintenanceRequest body. */
                    public body?: (google.cloud.sql.v1beta4.ISqlInstancesRescheduleMaintenanceRequestBody|null);

                    /**
                     * Creates a new SqlInstancesRescheduleMaintenanceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SqlInstancesRescheduleMaintenanceRequest instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.ISqlInstancesRescheduleMaintenanceRequest): google.cloud.sql.v1beta4.SqlInstancesRescheduleMaintenanceRequest;

                    /**
                     * Encodes the specified SqlInstancesRescheduleMaintenanceRequest message. Does not implicitly {@link google.cloud.sql.v1beta4.SqlInstancesRescheduleMaintenanceRequest.verify|verify} messages.
                     * @param message SqlInstancesRescheduleMaintenanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.ISqlInstancesRescheduleMaintenanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SqlInstancesRescheduleMaintenanceRequest message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.SqlInstancesRescheduleMaintenanceRequest.verify|verify} messages.
                     * @param message SqlInstancesRescheduleMaintenanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.ISqlInstancesRescheduleMaintenanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SqlInstancesRescheduleMaintenanceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SqlInstancesRescheduleMaintenanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.SqlInstancesRescheduleMaintenanceRequest;

                    /**
                     * Decodes a SqlInstancesRescheduleMaintenanceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SqlInstancesRescheduleMaintenanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.SqlInstancesRescheduleMaintenanceRequest;

                    /**
                     * Verifies a SqlInstancesRescheduleMaintenanceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SqlInstancesRescheduleMaintenanceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SqlInstancesRescheduleMaintenanceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.SqlInstancesRescheduleMaintenanceRequest;

                    /**
                     * Creates a plain object from a SqlInstancesRescheduleMaintenanceRequest message. Also converts values to other types if specified.
                     * @param message SqlInstancesRescheduleMaintenanceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.SqlInstancesRescheduleMaintenanceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SqlInstancesRescheduleMaintenanceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SqlInstancesVerifyExternalSyncSettingsRequest. */
                interface ISqlInstancesVerifyExternalSyncSettingsRequest {

                    /** SqlInstancesVerifyExternalSyncSettingsRequest instance */
                    instance?: (string|null);

                    /** SqlInstancesVerifyExternalSyncSettingsRequest project */
                    project?: (string|null);

                    /** SqlInstancesVerifyExternalSyncSettingsRequest verifyConnectionOnly */
                    verifyConnectionOnly?: (boolean|null);

                    /** SqlInstancesVerifyExternalSyncSettingsRequest syncMode */
                    syncMode?: (google.cloud.sql.v1beta4.SqlInstancesVerifyExternalSyncSettingsRequest.ExternalSyncMode|keyof typeof google.cloud.sql.v1beta4.SqlInstancesVerifyExternalSyncSettingsRequest.ExternalSyncMode|null);
                }

                /** Represents a SqlInstancesVerifyExternalSyncSettingsRequest. */
                class SqlInstancesVerifyExternalSyncSettingsRequest implements ISqlInstancesVerifyExternalSyncSettingsRequest {

                    /**
                     * Constructs a new SqlInstancesVerifyExternalSyncSettingsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.ISqlInstancesVerifyExternalSyncSettingsRequest);

                    /** SqlInstancesVerifyExternalSyncSettingsRequest instance. */
                    public instance: string;

                    /** SqlInstancesVerifyExternalSyncSettingsRequest project. */
                    public project: string;

                    /** SqlInstancesVerifyExternalSyncSettingsRequest verifyConnectionOnly. */
                    public verifyConnectionOnly: boolean;

                    /** SqlInstancesVerifyExternalSyncSettingsRequest syncMode. */
                    public syncMode: (google.cloud.sql.v1beta4.SqlInstancesVerifyExternalSyncSettingsRequest.ExternalSyncMode|keyof typeof google.cloud.sql.v1beta4.SqlInstancesVerifyExternalSyncSettingsRequest.ExternalSyncMode);

                    /**
                     * Creates a new SqlInstancesVerifyExternalSyncSettingsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SqlInstancesVerifyExternalSyncSettingsRequest instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.ISqlInstancesVerifyExternalSyncSettingsRequest): google.cloud.sql.v1beta4.SqlInstancesVerifyExternalSyncSettingsRequest;

                    /**
                     * Encodes the specified SqlInstancesVerifyExternalSyncSettingsRequest message. Does not implicitly {@link google.cloud.sql.v1beta4.SqlInstancesVerifyExternalSyncSettingsRequest.verify|verify} messages.
                     * @param message SqlInstancesVerifyExternalSyncSettingsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.ISqlInstancesVerifyExternalSyncSettingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SqlInstancesVerifyExternalSyncSettingsRequest message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.SqlInstancesVerifyExternalSyncSettingsRequest.verify|verify} messages.
                     * @param message SqlInstancesVerifyExternalSyncSettingsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.ISqlInstancesVerifyExternalSyncSettingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SqlInstancesVerifyExternalSyncSettingsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SqlInstancesVerifyExternalSyncSettingsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.SqlInstancesVerifyExternalSyncSettingsRequest;

                    /**
                     * Decodes a SqlInstancesVerifyExternalSyncSettingsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SqlInstancesVerifyExternalSyncSettingsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.SqlInstancesVerifyExternalSyncSettingsRequest;

                    /**
                     * Verifies a SqlInstancesVerifyExternalSyncSettingsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SqlInstancesVerifyExternalSyncSettingsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SqlInstancesVerifyExternalSyncSettingsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.SqlInstancesVerifyExternalSyncSettingsRequest;

                    /**
                     * Creates a plain object from a SqlInstancesVerifyExternalSyncSettingsRequest message. Also converts values to other types if specified.
                     * @param message SqlInstancesVerifyExternalSyncSettingsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.SqlInstancesVerifyExternalSyncSettingsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SqlInstancesVerifyExternalSyncSettingsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace SqlInstancesVerifyExternalSyncSettingsRequest {

                    /** ExternalSyncMode enum. */
                    enum ExternalSyncMode {
                        EXTERNAL_SYNC_MODE_UNSPECIFIED = 0,
                        ONLINE = 1,
                        OFFLINE = 2
                    }
                }

                /** Properties of a SqlInstancesStartExternalSyncRequest. */
                interface ISqlInstancesStartExternalSyncRequest {

                    /** SqlInstancesStartExternalSyncRequest instance */
                    instance?: (string|null);

                    /** SqlInstancesStartExternalSyncRequest project */
                    project?: (string|null);

                    /** SqlInstancesStartExternalSyncRequest syncMode */
                    syncMode?: (google.cloud.sql.v1beta4.SqlInstancesVerifyExternalSyncSettingsRequest.ExternalSyncMode|keyof typeof google.cloud.sql.v1beta4.SqlInstancesVerifyExternalSyncSettingsRequest.ExternalSyncMode|null);

                    /** SqlInstancesStartExternalSyncRequest skipVerification */
                    skipVerification?: (boolean|null);
                }

                /** Represents a SqlInstancesStartExternalSyncRequest. */
                class SqlInstancesStartExternalSyncRequest implements ISqlInstancesStartExternalSyncRequest {

                    /**
                     * Constructs a new SqlInstancesStartExternalSyncRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.ISqlInstancesStartExternalSyncRequest);

                    /** SqlInstancesStartExternalSyncRequest instance. */
                    public instance: string;

                    /** SqlInstancesStartExternalSyncRequest project. */
                    public project: string;

                    /** SqlInstancesStartExternalSyncRequest syncMode. */
                    public syncMode: (google.cloud.sql.v1beta4.SqlInstancesVerifyExternalSyncSettingsRequest.ExternalSyncMode|keyof typeof google.cloud.sql.v1beta4.SqlInstancesVerifyExternalSyncSettingsRequest.ExternalSyncMode);

                    /** SqlInstancesStartExternalSyncRequest skipVerification. */
                    public skipVerification: boolean;

                    /**
                     * Creates a new SqlInstancesStartExternalSyncRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SqlInstancesStartExternalSyncRequest instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.ISqlInstancesStartExternalSyncRequest): google.cloud.sql.v1beta4.SqlInstancesStartExternalSyncRequest;

                    /**
                     * Encodes the specified SqlInstancesStartExternalSyncRequest message. Does not implicitly {@link google.cloud.sql.v1beta4.SqlInstancesStartExternalSyncRequest.verify|verify} messages.
                     * @param message SqlInstancesStartExternalSyncRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.ISqlInstancesStartExternalSyncRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SqlInstancesStartExternalSyncRequest message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.SqlInstancesStartExternalSyncRequest.verify|verify} messages.
                     * @param message SqlInstancesStartExternalSyncRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.ISqlInstancesStartExternalSyncRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SqlInstancesStartExternalSyncRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SqlInstancesStartExternalSyncRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.SqlInstancesStartExternalSyncRequest;

                    /**
                     * Decodes a SqlInstancesStartExternalSyncRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SqlInstancesStartExternalSyncRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.SqlInstancesStartExternalSyncRequest;

                    /**
                     * Verifies a SqlInstancesStartExternalSyncRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SqlInstancesStartExternalSyncRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SqlInstancesStartExternalSyncRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.SqlInstancesStartExternalSyncRequest;

                    /**
                     * Creates a plain object from a SqlInstancesStartExternalSyncRequest message. Also converts values to other types if specified.
                     * @param message SqlInstancesStartExternalSyncRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.SqlInstancesStartExternalSyncRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SqlInstancesStartExternalSyncRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SqlOperationsGetRequest. */
                interface ISqlOperationsGetRequest {

                    /** SqlOperationsGetRequest operation */
                    operation?: (string|null);

                    /** SqlOperationsGetRequest project */
                    project?: (string|null);
                }

                /** Represents a SqlOperationsGetRequest. */
                class SqlOperationsGetRequest implements ISqlOperationsGetRequest {

                    /**
                     * Constructs a new SqlOperationsGetRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.ISqlOperationsGetRequest);

                    /** SqlOperationsGetRequest operation. */
                    public operation: string;

                    /** SqlOperationsGetRequest project. */
                    public project: string;

                    /**
                     * Creates a new SqlOperationsGetRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SqlOperationsGetRequest instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.ISqlOperationsGetRequest): google.cloud.sql.v1beta4.SqlOperationsGetRequest;

                    /**
                     * Encodes the specified SqlOperationsGetRequest message. Does not implicitly {@link google.cloud.sql.v1beta4.SqlOperationsGetRequest.verify|verify} messages.
                     * @param message SqlOperationsGetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.ISqlOperationsGetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SqlOperationsGetRequest message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.SqlOperationsGetRequest.verify|verify} messages.
                     * @param message SqlOperationsGetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.ISqlOperationsGetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SqlOperationsGetRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SqlOperationsGetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.SqlOperationsGetRequest;

                    /**
                     * Decodes a SqlOperationsGetRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SqlOperationsGetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.SqlOperationsGetRequest;

                    /**
                     * Verifies a SqlOperationsGetRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SqlOperationsGetRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SqlOperationsGetRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.SqlOperationsGetRequest;

                    /**
                     * Creates a plain object from a SqlOperationsGetRequest message. Also converts values to other types if specified.
                     * @param message SqlOperationsGetRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.SqlOperationsGetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SqlOperationsGetRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SqlOperationsListRequest. */
                interface ISqlOperationsListRequest {

                    /** SqlOperationsListRequest instance */
                    instance?: (string|null);

                    /** SqlOperationsListRequest maxResults */
                    maxResults?: (number|null);

                    /** SqlOperationsListRequest pageToken */
                    pageToken?: (string|null);

                    /** SqlOperationsListRequest project */
                    project?: (string|null);
                }

                /** Represents a SqlOperationsListRequest. */
                class SqlOperationsListRequest implements ISqlOperationsListRequest {

                    /**
                     * Constructs a new SqlOperationsListRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.ISqlOperationsListRequest);

                    /** SqlOperationsListRequest instance. */
                    public instance: string;

                    /** SqlOperationsListRequest maxResults. */
                    public maxResults: number;

                    /** SqlOperationsListRequest pageToken. */
                    public pageToken: string;

                    /** SqlOperationsListRequest project. */
                    public project: string;

                    /**
                     * Creates a new SqlOperationsListRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SqlOperationsListRequest instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.ISqlOperationsListRequest): google.cloud.sql.v1beta4.SqlOperationsListRequest;

                    /**
                     * Encodes the specified SqlOperationsListRequest message. Does not implicitly {@link google.cloud.sql.v1beta4.SqlOperationsListRequest.verify|verify} messages.
                     * @param message SqlOperationsListRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.ISqlOperationsListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SqlOperationsListRequest message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.SqlOperationsListRequest.verify|verify} messages.
                     * @param message SqlOperationsListRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.ISqlOperationsListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SqlOperationsListRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SqlOperationsListRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.SqlOperationsListRequest;

                    /**
                     * Decodes a SqlOperationsListRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SqlOperationsListRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.SqlOperationsListRequest;

                    /**
                     * Verifies a SqlOperationsListRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SqlOperationsListRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SqlOperationsListRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.SqlOperationsListRequest;

                    /**
                     * Creates a plain object from a SqlOperationsListRequest message. Also converts values to other types if specified.
                     * @param message SqlOperationsListRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.SqlOperationsListRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SqlOperationsListRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SqlInstancesCreateEphemeralCertRequest. */
                interface ISqlInstancesCreateEphemeralCertRequest {

                    /** SqlInstancesCreateEphemeralCertRequest instance */
                    instance?: (string|null);

                    /** SqlInstancesCreateEphemeralCertRequest project */
                    project?: (string|null);

                    /** SqlInstancesCreateEphemeralCertRequest body */
                    body?: (google.cloud.sql.v1beta4.ISslCertsCreateEphemeralRequest|null);
                }

                /** Represents a SqlInstancesCreateEphemeralCertRequest. */
                class SqlInstancesCreateEphemeralCertRequest implements ISqlInstancesCreateEphemeralCertRequest {

                    /**
                     * Constructs a new SqlInstancesCreateEphemeralCertRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.ISqlInstancesCreateEphemeralCertRequest);

                    /** SqlInstancesCreateEphemeralCertRequest instance. */
                    public instance: string;

                    /** SqlInstancesCreateEphemeralCertRequest project. */
                    public project: string;

                    /** SqlInstancesCreateEphemeralCertRequest body. */
                    public body?: (google.cloud.sql.v1beta4.ISslCertsCreateEphemeralRequest|null);

                    /**
                     * Creates a new SqlInstancesCreateEphemeralCertRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SqlInstancesCreateEphemeralCertRequest instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.ISqlInstancesCreateEphemeralCertRequest): google.cloud.sql.v1beta4.SqlInstancesCreateEphemeralCertRequest;

                    /**
                     * Encodes the specified SqlInstancesCreateEphemeralCertRequest message. Does not implicitly {@link google.cloud.sql.v1beta4.SqlInstancesCreateEphemeralCertRequest.verify|verify} messages.
                     * @param message SqlInstancesCreateEphemeralCertRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.ISqlInstancesCreateEphemeralCertRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SqlInstancesCreateEphemeralCertRequest message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.SqlInstancesCreateEphemeralCertRequest.verify|verify} messages.
                     * @param message SqlInstancesCreateEphemeralCertRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.ISqlInstancesCreateEphemeralCertRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SqlInstancesCreateEphemeralCertRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SqlInstancesCreateEphemeralCertRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.SqlInstancesCreateEphemeralCertRequest;

                    /**
                     * Decodes a SqlInstancesCreateEphemeralCertRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SqlInstancesCreateEphemeralCertRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.SqlInstancesCreateEphemeralCertRequest;

                    /**
                     * Verifies a SqlInstancesCreateEphemeralCertRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SqlInstancesCreateEphemeralCertRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SqlInstancesCreateEphemeralCertRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.SqlInstancesCreateEphemeralCertRequest;

                    /**
                     * Creates a plain object from a SqlInstancesCreateEphemeralCertRequest message. Also converts values to other types if specified.
                     * @param message SqlInstancesCreateEphemeralCertRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.SqlInstancesCreateEphemeralCertRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SqlInstancesCreateEphemeralCertRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SqlSslCertsDeleteRequest. */
                interface ISqlSslCertsDeleteRequest {

                    /** SqlSslCertsDeleteRequest instance */
                    instance?: (string|null);

                    /** SqlSslCertsDeleteRequest project */
                    project?: (string|null);

                    /** SqlSslCertsDeleteRequest sha1Fingerprint */
                    sha1Fingerprint?: (string|null);
                }

                /** Represents a SqlSslCertsDeleteRequest. */
                class SqlSslCertsDeleteRequest implements ISqlSslCertsDeleteRequest {

                    /**
                     * Constructs a new SqlSslCertsDeleteRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.ISqlSslCertsDeleteRequest);

                    /** SqlSslCertsDeleteRequest instance. */
                    public instance: string;

                    /** SqlSslCertsDeleteRequest project. */
                    public project: string;

                    /** SqlSslCertsDeleteRequest sha1Fingerprint. */
                    public sha1Fingerprint: string;

                    /**
                     * Creates a new SqlSslCertsDeleteRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SqlSslCertsDeleteRequest instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.ISqlSslCertsDeleteRequest): google.cloud.sql.v1beta4.SqlSslCertsDeleteRequest;

                    /**
                     * Encodes the specified SqlSslCertsDeleteRequest message. Does not implicitly {@link google.cloud.sql.v1beta4.SqlSslCertsDeleteRequest.verify|verify} messages.
                     * @param message SqlSslCertsDeleteRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.ISqlSslCertsDeleteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SqlSslCertsDeleteRequest message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.SqlSslCertsDeleteRequest.verify|verify} messages.
                     * @param message SqlSslCertsDeleteRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.ISqlSslCertsDeleteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SqlSslCertsDeleteRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SqlSslCertsDeleteRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.SqlSslCertsDeleteRequest;

                    /**
                     * Decodes a SqlSslCertsDeleteRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SqlSslCertsDeleteRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.SqlSslCertsDeleteRequest;

                    /**
                     * Verifies a SqlSslCertsDeleteRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SqlSslCertsDeleteRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SqlSslCertsDeleteRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.SqlSslCertsDeleteRequest;

                    /**
                     * Creates a plain object from a SqlSslCertsDeleteRequest message. Also converts values to other types if specified.
                     * @param message SqlSslCertsDeleteRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.SqlSslCertsDeleteRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SqlSslCertsDeleteRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SqlSslCertsGetRequest. */
                interface ISqlSslCertsGetRequest {

                    /** SqlSslCertsGetRequest instance */
                    instance?: (string|null);

                    /** SqlSslCertsGetRequest project */
                    project?: (string|null);

                    /** SqlSslCertsGetRequest sha1Fingerprint */
                    sha1Fingerprint?: (string|null);
                }

                /** Represents a SqlSslCertsGetRequest. */
                class SqlSslCertsGetRequest implements ISqlSslCertsGetRequest {

                    /**
                     * Constructs a new SqlSslCertsGetRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.ISqlSslCertsGetRequest);

                    /** SqlSslCertsGetRequest instance. */
                    public instance: string;

                    /** SqlSslCertsGetRequest project. */
                    public project: string;

                    /** SqlSslCertsGetRequest sha1Fingerprint. */
                    public sha1Fingerprint: string;

                    /**
                     * Creates a new SqlSslCertsGetRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SqlSslCertsGetRequest instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.ISqlSslCertsGetRequest): google.cloud.sql.v1beta4.SqlSslCertsGetRequest;

                    /**
                     * Encodes the specified SqlSslCertsGetRequest message. Does not implicitly {@link google.cloud.sql.v1beta4.SqlSslCertsGetRequest.verify|verify} messages.
                     * @param message SqlSslCertsGetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.ISqlSslCertsGetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SqlSslCertsGetRequest message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.SqlSslCertsGetRequest.verify|verify} messages.
                     * @param message SqlSslCertsGetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.ISqlSslCertsGetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SqlSslCertsGetRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SqlSslCertsGetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.SqlSslCertsGetRequest;

                    /**
                     * Decodes a SqlSslCertsGetRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SqlSslCertsGetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.SqlSslCertsGetRequest;

                    /**
                     * Verifies a SqlSslCertsGetRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SqlSslCertsGetRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SqlSslCertsGetRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.SqlSslCertsGetRequest;

                    /**
                     * Creates a plain object from a SqlSslCertsGetRequest message. Also converts values to other types if specified.
                     * @param message SqlSslCertsGetRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.SqlSslCertsGetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SqlSslCertsGetRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SqlSslCertsInsertRequest. */
                interface ISqlSslCertsInsertRequest {

                    /** SqlSslCertsInsertRequest instance */
                    instance?: (string|null);

                    /** SqlSslCertsInsertRequest project */
                    project?: (string|null);

                    /** SqlSslCertsInsertRequest body */
                    body?: (google.cloud.sql.v1beta4.ISslCertsInsertRequest|null);
                }

                /** Represents a SqlSslCertsInsertRequest. */
                class SqlSslCertsInsertRequest implements ISqlSslCertsInsertRequest {

                    /**
                     * Constructs a new SqlSslCertsInsertRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.ISqlSslCertsInsertRequest);

                    /** SqlSslCertsInsertRequest instance. */
                    public instance: string;

                    /** SqlSslCertsInsertRequest project. */
                    public project: string;

                    /** SqlSslCertsInsertRequest body. */
                    public body?: (google.cloud.sql.v1beta4.ISslCertsInsertRequest|null);

                    /**
                     * Creates a new SqlSslCertsInsertRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SqlSslCertsInsertRequest instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.ISqlSslCertsInsertRequest): google.cloud.sql.v1beta4.SqlSslCertsInsertRequest;

                    /**
                     * Encodes the specified SqlSslCertsInsertRequest message. Does not implicitly {@link google.cloud.sql.v1beta4.SqlSslCertsInsertRequest.verify|verify} messages.
                     * @param message SqlSslCertsInsertRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.ISqlSslCertsInsertRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SqlSslCertsInsertRequest message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.SqlSslCertsInsertRequest.verify|verify} messages.
                     * @param message SqlSslCertsInsertRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.ISqlSslCertsInsertRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SqlSslCertsInsertRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SqlSslCertsInsertRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.SqlSslCertsInsertRequest;

                    /**
                     * Decodes a SqlSslCertsInsertRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SqlSslCertsInsertRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.SqlSslCertsInsertRequest;

                    /**
                     * Verifies a SqlSslCertsInsertRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SqlSslCertsInsertRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SqlSslCertsInsertRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.SqlSslCertsInsertRequest;

                    /**
                     * Creates a plain object from a SqlSslCertsInsertRequest message. Also converts values to other types if specified.
                     * @param message SqlSslCertsInsertRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.SqlSslCertsInsertRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SqlSslCertsInsertRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SqlSslCertsListRequest. */
                interface ISqlSslCertsListRequest {

                    /** SqlSslCertsListRequest instance */
                    instance?: (string|null);

                    /** SqlSslCertsListRequest project */
                    project?: (string|null);
                }

                /** Represents a SqlSslCertsListRequest. */
                class SqlSslCertsListRequest implements ISqlSslCertsListRequest {

                    /**
                     * Constructs a new SqlSslCertsListRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.ISqlSslCertsListRequest);

                    /** SqlSslCertsListRequest instance. */
                    public instance: string;

                    /** SqlSslCertsListRequest project. */
                    public project: string;

                    /**
                     * Creates a new SqlSslCertsListRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SqlSslCertsListRequest instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.ISqlSslCertsListRequest): google.cloud.sql.v1beta4.SqlSslCertsListRequest;

                    /**
                     * Encodes the specified SqlSslCertsListRequest message. Does not implicitly {@link google.cloud.sql.v1beta4.SqlSslCertsListRequest.verify|verify} messages.
                     * @param message SqlSslCertsListRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.ISqlSslCertsListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SqlSslCertsListRequest message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.SqlSslCertsListRequest.verify|verify} messages.
                     * @param message SqlSslCertsListRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.ISqlSslCertsListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SqlSslCertsListRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SqlSslCertsListRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.SqlSslCertsListRequest;

                    /**
                     * Decodes a SqlSslCertsListRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SqlSslCertsListRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.SqlSslCertsListRequest;

                    /**
                     * Verifies a SqlSslCertsListRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SqlSslCertsListRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SqlSslCertsListRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.SqlSslCertsListRequest;

                    /**
                     * Creates a plain object from a SqlSslCertsListRequest message. Also converts values to other types if specified.
                     * @param message SqlSslCertsListRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.SqlSslCertsListRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SqlSslCertsListRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an AclEntry. */
                interface IAclEntry {

                    /** AclEntry value */
                    value?: (string|null);

                    /** AclEntry expirationTime */
                    expirationTime?: (google.protobuf.ITimestamp|null);

                    /** AclEntry name */
                    name?: (string|null);

                    /** AclEntry kind */
                    kind?: (string|null);
                }

                /** Represents an AclEntry. */
                class AclEntry implements IAclEntry {

                    /**
                     * Constructs a new AclEntry.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.IAclEntry);

                    /** AclEntry value. */
                    public value: string;

                    /** AclEntry expirationTime. */
                    public expirationTime?: (google.protobuf.ITimestamp|null);

                    /** AclEntry name. */
                    public name: string;

                    /** AclEntry kind. */
                    public kind: string;

                    /**
                     * Creates a new AclEntry instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AclEntry instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.IAclEntry): google.cloud.sql.v1beta4.AclEntry;

                    /**
                     * Encodes the specified AclEntry message. Does not implicitly {@link google.cloud.sql.v1beta4.AclEntry.verify|verify} messages.
                     * @param message AclEntry message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.IAclEntry, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AclEntry message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.AclEntry.verify|verify} messages.
                     * @param message AclEntry message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.IAclEntry, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AclEntry message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AclEntry
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.AclEntry;

                    /**
                     * Decodes an AclEntry message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AclEntry
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.AclEntry;

                    /**
                     * Verifies an AclEntry message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AclEntry message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AclEntry
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.AclEntry;

                    /**
                     * Creates a plain object from an AclEntry message. Also converts values to other types if specified.
                     * @param message AclEntry
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.AclEntry, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AclEntry to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an ApiWarning. */
                interface IApiWarning {

                    /** ApiWarning code */
                    code?: (google.cloud.sql.v1beta4.ApiWarning.SqlApiWarningCode|keyof typeof google.cloud.sql.v1beta4.ApiWarning.SqlApiWarningCode|null);

                    /** ApiWarning message */
                    message?: (string|null);

                    /** ApiWarning region */
                    region?: (string|null);
                }

                /** Represents an ApiWarning. */
                class ApiWarning implements IApiWarning {

                    /**
                     * Constructs a new ApiWarning.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.IApiWarning);

                    /** ApiWarning code. */
                    public code: (google.cloud.sql.v1beta4.ApiWarning.SqlApiWarningCode|keyof typeof google.cloud.sql.v1beta4.ApiWarning.SqlApiWarningCode);

                    /** ApiWarning message. */
                    public message: string;

                    /** ApiWarning region. */
                    public region: string;

                    /**
                     * Creates a new ApiWarning instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ApiWarning instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.IApiWarning): google.cloud.sql.v1beta4.ApiWarning;

                    /**
                     * Encodes the specified ApiWarning message. Does not implicitly {@link google.cloud.sql.v1beta4.ApiWarning.verify|verify} messages.
                     * @param message ApiWarning message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.IApiWarning, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ApiWarning message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.ApiWarning.verify|verify} messages.
                     * @param message ApiWarning message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.IApiWarning, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ApiWarning message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ApiWarning
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.ApiWarning;

                    /**
                     * Decodes an ApiWarning message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ApiWarning
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.ApiWarning;

                    /**
                     * Verifies an ApiWarning message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ApiWarning message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ApiWarning
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.ApiWarning;

                    /**
                     * Creates a plain object from an ApiWarning message. Also converts values to other types if specified.
                     * @param message ApiWarning
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.ApiWarning, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ApiWarning to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace ApiWarning {

                    /** SqlApiWarningCode enum. */
                    enum SqlApiWarningCode {
                        SQL_API_WARNING_CODE_UNSPECIFIED = 0,
                        REGION_UNREACHABLE = 1
                    }
                }

                /** Properties of a BackupRetentionSettings. */
                interface IBackupRetentionSettings {

                    /** BackupRetentionSettings retentionUnit */
                    retentionUnit?: (google.cloud.sql.v1beta4.BackupRetentionSettings.RetentionUnit|keyof typeof google.cloud.sql.v1beta4.BackupRetentionSettings.RetentionUnit|null);

                    /** BackupRetentionSettings retainedBackups */
                    retainedBackups?: (google.protobuf.IInt32Value|null);
                }

                /** Represents a BackupRetentionSettings. */
                class BackupRetentionSettings implements IBackupRetentionSettings {

                    /**
                     * Constructs a new BackupRetentionSettings.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.IBackupRetentionSettings);

                    /** BackupRetentionSettings retentionUnit. */
                    public retentionUnit: (google.cloud.sql.v1beta4.BackupRetentionSettings.RetentionUnit|keyof typeof google.cloud.sql.v1beta4.BackupRetentionSettings.RetentionUnit);

                    /** BackupRetentionSettings retainedBackups. */
                    public retainedBackups?: (google.protobuf.IInt32Value|null);

                    /**
                     * Creates a new BackupRetentionSettings instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BackupRetentionSettings instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.IBackupRetentionSettings): google.cloud.sql.v1beta4.BackupRetentionSettings;

                    /**
                     * Encodes the specified BackupRetentionSettings message. Does not implicitly {@link google.cloud.sql.v1beta4.BackupRetentionSettings.verify|verify} messages.
                     * @param message BackupRetentionSettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.IBackupRetentionSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BackupRetentionSettings message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.BackupRetentionSettings.verify|verify} messages.
                     * @param message BackupRetentionSettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.IBackupRetentionSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BackupRetentionSettings message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BackupRetentionSettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.BackupRetentionSettings;

                    /**
                     * Decodes a BackupRetentionSettings message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BackupRetentionSettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.BackupRetentionSettings;

                    /**
                     * Verifies a BackupRetentionSettings message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BackupRetentionSettings message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BackupRetentionSettings
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.BackupRetentionSettings;

                    /**
                     * Creates a plain object from a BackupRetentionSettings message. Also converts values to other types if specified.
                     * @param message BackupRetentionSettings
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.BackupRetentionSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BackupRetentionSettings to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace BackupRetentionSettings {

                    /** RetentionUnit enum. */
                    enum RetentionUnit {
                        RETENTION_UNIT_UNSPECIFIED = 0,
                        COUNT = 1
                    }
                }

                /** Properties of a BackupConfiguration. */
                interface IBackupConfiguration {

                    /** BackupConfiguration startTime */
                    startTime?: (string|null);

                    /** BackupConfiguration enabled */
                    enabled?: (google.protobuf.IBoolValue|null);

                    /** BackupConfiguration kind */
                    kind?: (string|null);

                    /** BackupConfiguration binaryLogEnabled */
                    binaryLogEnabled?: (google.protobuf.IBoolValue|null);

                    /** BackupConfiguration replicationLogArchivingEnabled */
                    replicationLogArchivingEnabled?: (google.protobuf.IBoolValue|null);

                    /** BackupConfiguration location */
                    location?: (string|null);

                    /** BackupConfiguration pointInTimeRecoveryEnabled */
                    pointInTimeRecoveryEnabled?: (google.protobuf.IBoolValue|null);

                    /** BackupConfiguration transactionLogRetentionDays */
                    transactionLogRetentionDays?: (google.protobuf.IInt32Value|null);

                    /** BackupConfiguration backupRetentionSettings */
                    backupRetentionSettings?: (google.cloud.sql.v1beta4.IBackupRetentionSettings|null);
                }

                /** Represents a BackupConfiguration. */
                class BackupConfiguration implements IBackupConfiguration {

                    /**
                     * Constructs a new BackupConfiguration.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.IBackupConfiguration);

                    /** BackupConfiguration startTime. */
                    public startTime: string;

                    /** BackupConfiguration enabled. */
                    public enabled?: (google.protobuf.IBoolValue|null);

                    /** BackupConfiguration kind. */
                    public kind: string;

                    /** BackupConfiguration binaryLogEnabled. */
                    public binaryLogEnabled?: (google.protobuf.IBoolValue|null);

                    /** BackupConfiguration replicationLogArchivingEnabled. */
                    public replicationLogArchivingEnabled?: (google.protobuf.IBoolValue|null);

                    /** BackupConfiguration location. */
                    public location: string;

                    /** BackupConfiguration pointInTimeRecoveryEnabled. */
                    public pointInTimeRecoveryEnabled?: (google.protobuf.IBoolValue|null);

                    /** BackupConfiguration transactionLogRetentionDays. */
                    public transactionLogRetentionDays?: (google.protobuf.IInt32Value|null);

                    /** BackupConfiguration backupRetentionSettings. */
                    public backupRetentionSettings?: (google.cloud.sql.v1beta4.IBackupRetentionSettings|null);

                    /**
                     * Creates a new BackupConfiguration instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BackupConfiguration instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.IBackupConfiguration): google.cloud.sql.v1beta4.BackupConfiguration;

                    /**
                     * Encodes the specified BackupConfiguration message. Does not implicitly {@link google.cloud.sql.v1beta4.BackupConfiguration.verify|verify} messages.
                     * @param message BackupConfiguration message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.IBackupConfiguration, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BackupConfiguration message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.BackupConfiguration.verify|verify} messages.
                     * @param message BackupConfiguration message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.IBackupConfiguration, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BackupConfiguration message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BackupConfiguration
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.BackupConfiguration;

                    /**
                     * Decodes a BackupConfiguration message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BackupConfiguration
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.BackupConfiguration;

                    /**
                     * Verifies a BackupConfiguration message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BackupConfiguration message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BackupConfiguration
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.BackupConfiguration;

                    /**
                     * Creates a plain object from a BackupConfiguration message. Also converts values to other types if specified.
                     * @param message BackupConfiguration
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.BackupConfiguration, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BackupConfiguration to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a BackupRun. */
                interface IBackupRun {

                    /** BackupRun kind */
                    kind?: (string|null);

                    /** BackupRun status */
                    status?: (google.cloud.sql.v1beta4.SqlBackupRunStatus|keyof typeof google.cloud.sql.v1beta4.SqlBackupRunStatus|null);

                    /** BackupRun enqueuedTime */
                    enqueuedTime?: (google.protobuf.ITimestamp|null);

                    /** BackupRun id */
                    id?: (number|Long|string|null);

                    /** BackupRun startTime */
                    startTime?: (google.protobuf.ITimestamp|null);

                    /** BackupRun endTime */
                    endTime?: (google.protobuf.ITimestamp|null);

                    /** BackupRun error */
                    error?: (google.cloud.sql.v1beta4.IOperationError|null);

                    /** BackupRun type */
                    type?: (google.cloud.sql.v1beta4.SqlBackupRunType|keyof typeof google.cloud.sql.v1beta4.SqlBackupRunType|null);

                    /** BackupRun description */
                    description?: (string|null);

                    /** BackupRun windowStartTime */
                    windowStartTime?: (google.protobuf.ITimestamp|null);

                    /** BackupRun instance */
                    instance?: (string|null);

                    /** BackupRun selfLink */
                    selfLink?: (string|null);

                    /** BackupRun location */
                    location?: (string|null);

                    /** BackupRun diskEncryptionConfiguration */
                    diskEncryptionConfiguration?: (google.cloud.sql.v1beta4.IDiskEncryptionConfiguration|null);

                    /** BackupRun diskEncryptionStatus */
                    diskEncryptionStatus?: (google.cloud.sql.v1beta4.IDiskEncryptionStatus|null);

                    /** BackupRun backupKind */
                    backupKind?: (google.cloud.sql.v1beta4.SqlBackupKind|keyof typeof google.cloud.sql.v1beta4.SqlBackupKind|null);
                }

                /** Represents a BackupRun. */
                class BackupRun implements IBackupRun {

                    /**
                     * Constructs a new BackupRun.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.IBackupRun);

                    /** BackupRun kind. */
                    public kind: string;

                    /** BackupRun status. */
                    public status: (google.cloud.sql.v1beta4.SqlBackupRunStatus|keyof typeof google.cloud.sql.v1beta4.SqlBackupRunStatus);

                    /** BackupRun enqueuedTime. */
                    public enqueuedTime?: (google.protobuf.ITimestamp|null);

                    /** BackupRun id. */
                    public id: (number|Long|string);

                    /** BackupRun startTime. */
                    public startTime?: (google.protobuf.ITimestamp|null);

                    /** BackupRun endTime. */
                    public endTime?: (google.protobuf.ITimestamp|null);

                    /** BackupRun error. */
                    public error?: (google.cloud.sql.v1beta4.IOperationError|null);

                    /** BackupRun type. */
                    public type: (google.cloud.sql.v1beta4.SqlBackupRunType|keyof typeof google.cloud.sql.v1beta4.SqlBackupRunType);

                    /** BackupRun description. */
                    public description: string;

                    /** BackupRun windowStartTime. */
                    public windowStartTime?: (google.protobuf.ITimestamp|null);

                    /** BackupRun instance. */
                    public instance: string;

                    /** BackupRun selfLink. */
                    public selfLink: string;

                    /** BackupRun location. */
                    public location: string;

                    /** BackupRun diskEncryptionConfiguration. */
                    public diskEncryptionConfiguration?: (google.cloud.sql.v1beta4.IDiskEncryptionConfiguration|null);

                    /** BackupRun diskEncryptionStatus. */
                    public diskEncryptionStatus?: (google.cloud.sql.v1beta4.IDiskEncryptionStatus|null);

                    /** BackupRun backupKind. */
                    public backupKind: (google.cloud.sql.v1beta4.SqlBackupKind|keyof typeof google.cloud.sql.v1beta4.SqlBackupKind);

                    /**
                     * Creates a new BackupRun instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BackupRun instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.IBackupRun): google.cloud.sql.v1beta4.BackupRun;

                    /**
                     * Encodes the specified BackupRun message. Does not implicitly {@link google.cloud.sql.v1beta4.BackupRun.verify|verify} messages.
                     * @param message BackupRun message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.IBackupRun, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BackupRun message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.BackupRun.verify|verify} messages.
                     * @param message BackupRun message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.IBackupRun, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BackupRun message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BackupRun
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.BackupRun;

                    /**
                     * Decodes a BackupRun message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BackupRun
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.BackupRun;

                    /**
                     * Verifies a BackupRun message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BackupRun message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BackupRun
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.BackupRun;

                    /**
                     * Creates a plain object from a BackupRun message. Also converts values to other types if specified.
                     * @param message BackupRun
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.BackupRun, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BackupRun to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a BackupRunsListResponse. */
                interface IBackupRunsListResponse {

                    /** BackupRunsListResponse kind */
                    kind?: (string|null);

                    /** BackupRunsListResponse items */
                    items?: (google.cloud.sql.v1beta4.IBackupRun[]|null);

                    /** BackupRunsListResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a BackupRunsListResponse. */
                class BackupRunsListResponse implements IBackupRunsListResponse {

                    /**
                     * Constructs a new BackupRunsListResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.IBackupRunsListResponse);

                    /** BackupRunsListResponse kind. */
                    public kind: string;

                    /** BackupRunsListResponse items. */
                    public items: google.cloud.sql.v1beta4.IBackupRun[];

                    /** BackupRunsListResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new BackupRunsListResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BackupRunsListResponse instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.IBackupRunsListResponse): google.cloud.sql.v1beta4.BackupRunsListResponse;

                    /**
                     * Encodes the specified BackupRunsListResponse message. Does not implicitly {@link google.cloud.sql.v1beta4.BackupRunsListResponse.verify|verify} messages.
                     * @param message BackupRunsListResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.IBackupRunsListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BackupRunsListResponse message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.BackupRunsListResponse.verify|verify} messages.
                     * @param message BackupRunsListResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.IBackupRunsListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BackupRunsListResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BackupRunsListResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.BackupRunsListResponse;

                    /**
                     * Decodes a BackupRunsListResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BackupRunsListResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.BackupRunsListResponse;

                    /**
                     * Verifies a BackupRunsListResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BackupRunsListResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BackupRunsListResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.BackupRunsListResponse;

                    /**
                     * Creates a plain object from a BackupRunsListResponse message. Also converts values to other types if specified.
                     * @param message BackupRunsListResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.BackupRunsListResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BackupRunsListResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a BinLogCoordinates. */
                interface IBinLogCoordinates {

                    /** BinLogCoordinates binLogFileName */
                    binLogFileName?: (string|null);

                    /** BinLogCoordinates binLogPosition */
                    binLogPosition?: (number|Long|string|null);

                    /** BinLogCoordinates kind */
                    kind?: (string|null);
                }

                /** Represents a BinLogCoordinates. */
                class BinLogCoordinates implements IBinLogCoordinates {

                    /**
                     * Constructs a new BinLogCoordinates.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.IBinLogCoordinates);

                    /** BinLogCoordinates binLogFileName. */
                    public binLogFileName: string;

                    /** BinLogCoordinates binLogPosition. */
                    public binLogPosition: (number|Long|string);

                    /** BinLogCoordinates kind. */
                    public kind: string;

                    /**
                     * Creates a new BinLogCoordinates instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BinLogCoordinates instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.IBinLogCoordinates): google.cloud.sql.v1beta4.BinLogCoordinates;

                    /**
                     * Encodes the specified BinLogCoordinates message. Does not implicitly {@link google.cloud.sql.v1beta4.BinLogCoordinates.verify|verify} messages.
                     * @param message BinLogCoordinates message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.IBinLogCoordinates, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BinLogCoordinates message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.BinLogCoordinates.verify|verify} messages.
                     * @param message BinLogCoordinates message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.IBinLogCoordinates, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BinLogCoordinates message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BinLogCoordinates
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.BinLogCoordinates;

                    /**
                     * Decodes a BinLogCoordinates message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BinLogCoordinates
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.BinLogCoordinates;

                    /**
                     * Verifies a BinLogCoordinates message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BinLogCoordinates message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BinLogCoordinates
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.BinLogCoordinates;

                    /**
                     * Creates a plain object from a BinLogCoordinates message. Also converts values to other types if specified.
                     * @param message BinLogCoordinates
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.BinLogCoordinates, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BinLogCoordinates to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a BackupContext. */
                interface IBackupContext {

                    /** BackupContext backupId */
                    backupId?: (number|Long|string|null);

                    /** BackupContext kind */
                    kind?: (string|null);
                }

                /** Represents a BackupContext. */
                class BackupContext implements IBackupContext {

                    /**
                     * Constructs a new BackupContext.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.IBackupContext);

                    /** BackupContext backupId. */
                    public backupId: (number|Long|string);

                    /** BackupContext kind. */
                    public kind: string;

                    /**
                     * Creates a new BackupContext instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BackupContext instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.IBackupContext): google.cloud.sql.v1beta4.BackupContext;

                    /**
                     * Encodes the specified BackupContext message. Does not implicitly {@link google.cloud.sql.v1beta4.BackupContext.verify|verify} messages.
                     * @param message BackupContext message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.IBackupContext, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BackupContext message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.BackupContext.verify|verify} messages.
                     * @param message BackupContext message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.IBackupContext, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BackupContext message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BackupContext
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.BackupContext;

                    /**
                     * Decodes a BackupContext message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BackupContext
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.BackupContext;

                    /**
                     * Verifies a BackupContext message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BackupContext message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BackupContext
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.BackupContext;

                    /**
                     * Creates a plain object from a BackupContext message. Also converts values to other types if specified.
                     * @param message BackupContext
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.BackupContext, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BackupContext to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CloneContext. */
                interface ICloneContext {

                    /** CloneContext kind */
                    kind?: (string|null);

                    /** CloneContext pitrTimestampMs */
                    pitrTimestampMs?: (number|Long|string|null);

                    /** CloneContext destinationInstanceName */
                    destinationInstanceName?: (string|null);

                    /** CloneContext binLogCoordinates */
                    binLogCoordinates?: (google.cloud.sql.v1beta4.IBinLogCoordinates|null);

                    /** CloneContext pointInTime */
                    pointInTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a CloneContext. */
                class CloneContext implements ICloneContext {

                    /**
                     * Constructs a new CloneContext.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.ICloneContext);

                    /** CloneContext kind. */
                    public kind: string;

                    /** CloneContext pitrTimestampMs. */
                    public pitrTimestampMs: (number|Long|string);

                    /** CloneContext destinationInstanceName. */
                    public destinationInstanceName: string;

                    /** CloneContext binLogCoordinates. */
                    public binLogCoordinates?: (google.cloud.sql.v1beta4.IBinLogCoordinates|null);

                    /** CloneContext pointInTime. */
                    public pointInTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new CloneContext instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CloneContext instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.ICloneContext): google.cloud.sql.v1beta4.CloneContext;

                    /**
                     * Encodes the specified CloneContext message. Does not implicitly {@link google.cloud.sql.v1beta4.CloneContext.verify|verify} messages.
                     * @param message CloneContext message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.ICloneContext, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CloneContext message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.CloneContext.verify|verify} messages.
                     * @param message CloneContext message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.ICloneContext, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CloneContext message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CloneContext
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.CloneContext;

                    /**
                     * Decodes a CloneContext message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CloneContext
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.CloneContext;

                    /**
                     * Verifies a CloneContext message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CloneContext message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CloneContext
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.CloneContext;

                    /**
                     * Creates a plain object from a CloneContext message. Also converts values to other types if specified.
                     * @param message CloneContext
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.CloneContext, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CloneContext to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Database. */
                interface IDatabase {

                    /** Database kind */
                    kind?: (string|null);

                    /** Database charset */
                    charset?: (string|null);

                    /** Database collation */
                    collation?: (string|null);

                    /** Database etag */
                    etag?: (string|null);

                    /** Database name */
                    name?: (string|null);

                    /** Database instance */
                    instance?: (string|null);

                    /** Database selfLink */
                    selfLink?: (string|null);

                    /** Database project */
                    project?: (string|null);

                    /** Database sqlserverDatabaseDetails */
                    sqlserverDatabaseDetails?: (google.cloud.sql.v1beta4.ISqlServerDatabaseDetails|null);
                }

                /** Represents a Database. */
                class Database implements IDatabase {

                    /**
                     * Constructs a new Database.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.IDatabase);

                    /** Database kind. */
                    public kind: string;

                    /** Database charset. */
                    public charset: string;

                    /** Database collation. */
                    public collation: string;

                    /** Database etag. */
                    public etag: string;

                    /** Database name. */
                    public name: string;

                    /** Database instance. */
                    public instance: string;

                    /** Database selfLink. */
                    public selfLink: string;

                    /** Database project. */
                    public project: string;

                    /** Database sqlserverDatabaseDetails. */
                    public sqlserverDatabaseDetails?: (google.cloud.sql.v1beta4.ISqlServerDatabaseDetails|null);

                    /** Database databaseDetails. */
                    public databaseDetails?: "sqlserverDatabaseDetails";

                    /**
                     * Creates a new Database instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Database instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.IDatabase): google.cloud.sql.v1beta4.Database;

                    /**
                     * Encodes the specified Database message. Does not implicitly {@link google.cloud.sql.v1beta4.Database.verify|verify} messages.
                     * @param message Database message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.IDatabase, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Database message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.Database.verify|verify} messages.
                     * @param message Database message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.IDatabase, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Database message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Database
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.Database;

                    /**
                     * Decodes a Database message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Database
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.Database;

                    /**
                     * Verifies a Database message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Database message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Database
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.Database;

                    /**
                     * Creates a plain object from a Database message. Also converts values to other types if specified.
                     * @param message Database
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.Database, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Database to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SqlServerDatabaseDetails. */
                interface ISqlServerDatabaseDetails {

                    /** SqlServerDatabaseDetails compatibilityLevel */
                    compatibilityLevel?: (number|null);

                    /** SqlServerDatabaseDetails recoveryModel */
                    recoveryModel?: (string|null);
                }

                /** Represents a SqlServerDatabaseDetails. */
                class SqlServerDatabaseDetails implements ISqlServerDatabaseDetails {

                    /**
                     * Constructs a new SqlServerDatabaseDetails.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.ISqlServerDatabaseDetails);

                    /** SqlServerDatabaseDetails compatibilityLevel. */
                    public compatibilityLevel: number;

                    /** SqlServerDatabaseDetails recoveryModel. */
                    public recoveryModel: string;

                    /**
                     * Creates a new SqlServerDatabaseDetails instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SqlServerDatabaseDetails instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.ISqlServerDatabaseDetails): google.cloud.sql.v1beta4.SqlServerDatabaseDetails;

                    /**
                     * Encodes the specified SqlServerDatabaseDetails message. Does not implicitly {@link google.cloud.sql.v1beta4.SqlServerDatabaseDetails.verify|verify} messages.
                     * @param message SqlServerDatabaseDetails message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.ISqlServerDatabaseDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SqlServerDatabaseDetails message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.SqlServerDatabaseDetails.verify|verify} messages.
                     * @param message SqlServerDatabaseDetails message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.ISqlServerDatabaseDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SqlServerDatabaseDetails message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SqlServerDatabaseDetails
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.SqlServerDatabaseDetails;

                    /**
                     * Decodes a SqlServerDatabaseDetails message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SqlServerDatabaseDetails
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.SqlServerDatabaseDetails;

                    /**
                     * Verifies a SqlServerDatabaseDetails message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SqlServerDatabaseDetails message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SqlServerDatabaseDetails
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.SqlServerDatabaseDetails;

                    /**
                     * Creates a plain object from a SqlServerDatabaseDetails message. Also converts values to other types if specified.
                     * @param message SqlServerDatabaseDetails
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.SqlServerDatabaseDetails, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SqlServerDatabaseDetails to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DatabaseFlags. */
                interface IDatabaseFlags {

                    /** DatabaseFlags name */
                    name?: (string|null);

                    /** DatabaseFlags value */
                    value?: (string|null);
                }

                /** Represents a DatabaseFlags. */
                class DatabaseFlags implements IDatabaseFlags {

                    /**
                     * Constructs a new DatabaseFlags.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.IDatabaseFlags);

                    /** DatabaseFlags name. */
                    public name: string;

                    /** DatabaseFlags value. */
                    public value: string;

                    /**
                     * Creates a new DatabaseFlags instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DatabaseFlags instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.IDatabaseFlags): google.cloud.sql.v1beta4.DatabaseFlags;

                    /**
                     * Encodes the specified DatabaseFlags message. Does not implicitly {@link google.cloud.sql.v1beta4.DatabaseFlags.verify|verify} messages.
                     * @param message DatabaseFlags message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.IDatabaseFlags, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DatabaseFlags message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.DatabaseFlags.verify|verify} messages.
                     * @param message DatabaseFlags message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.IDatabaseFlags, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DatabaseFlags message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DatabaseFlags
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.DatabaseFlags;

                    /**
                     * Decodes a DatabaseFlags message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DatabaseFlags
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.DatabaseFlags;

                    /**
                     * Verifies a DatabaseFlags message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DatabaseFlags message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DatabaseFlags
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.DatabaseFlags;

                    /**
                     * Creates a plain object from a DatabaseFlags message. Also converts values to other types if specified.
                     * @param message DatabaseFlags
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.DatabaseFlags, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DatabaseFlags to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DatabaseInstance. */
                interface IDatabaseInstance {

                    /** DatabaseInstance kind */
                    kind?: (string|null);

                    /** DatabaseInstance state */
                    state?: (google.cloud.sql.v1beta4.DatabaseInstance.SqlInstanceState|keyof typeof google.cloud.sql.v1beta4.DatabaseInstance.SqlInstanceState|null);

                    /** DatabaseInstance databaseVersion */
                    databaseVersion?: (google.cloud.sql.v1beta4.SqlDatabaseVersion|keyof typeof google.cloud.sql.v1beta4.SqlDatabaseVersion|null);

                    /** DatabaseInstance settings */
                    settings?: (google.cloud.sql.v1beta4.ISettings|null);

                    /** DatabaseInstance etag */
                    etag?: (string|null);

                    /** DatabaseInstance failoverReplica */
                    failoverReplica?: (google.cloud.sql.v1beta4.DatabaseInstance.ISqlFailoverReplica|null);

                    /** DatabaseInstance masterInstanceName */
                    masterInstanceName?: (string|null);

                    /** DatabaseInstance replicaNames */
                    replicaNames?: (string[]|null);

                    /** DatabaseInstance maxDiskSize */
                    maxDiskSize?: (google.protobuf.IInt64Value|null);

                    /** DatabaseInstance currentDiskSize */
                    currentDiskSize?: (google.protobuf.IInt64Value|null);

                    /** DatabaseInstance ipAddresses */
                    ipAddresses?: (google.cloud.sql.v1beta4.IIpMapping[]|null);

                    /** DatabaseInstance serverCaCert */
                    serverCaCert?: (google.cloud.sql.v1beta4.ISslCert|null);

                    /** DatabaseInstance instanceType */
                    instanceType?: (google.cloud.sql.v1beta4.SqlInstanceType|keyof typeof google.cloud.sql.v1beta4.SqlInstanceType|null);

                    /** DatabaseInstance project */
                    project?: (string|null);

                    /** DatabaseInstance ipv6Address */
                    ipv6Address?: (string|null);

                    /** DatabaseInstance serviceAccountEmailAddress */
                    serviceAccountEmailAddress?: (string|null);

                    /** DatabaseInstance onPremisesConfiguration */
                    onPremisesConfiguration?: (google.cloud.sql.v1beta4.IOnPremisesConfiguration|null);

                    /** DatabaseInstance replicaConfiguration */
                    replicaConfiguration?: (google.cloud.sql.v1beta4.IReplicaConfiguration|null);

                    /** DatabaseInstance backendType */
                    backendType?: (google.cloud.sql.v1beta4.SqlBackendType|keyof typeof google.cloud.sql.v1beta4.SqlBackendType|null);

                    /** DatabaseInstance selfLink */
                    selfLink?: (string|null);

                    /** DatabaseInstance suspensionReason */
                    suspensionReason?: (google.cloud.sql.v1beta4.SqlSuspensionReason[]|null);

                    /** DatabaseInstance connectionName */
                    connectionName?: (string|null);

                    /** DatabaseInstance name */
                    name?: (string|null);

                    /** DatabaseInstance region */
                    region?: (string|null);

                    /** DatabaseInstance gceZone */
                    gceZone?: (string|null);

                    /** DatabaseInstance secondaryGceZone */
                    secondaryGceZone?: (string|null);

                    /** DatabaseInstance diskEncryptionConfiguration */
                    diskEncryptionConfiguration?: (google.cloud.sql.v1beta4.IDiskEncryptionConfiguration|null);

                    /** DatabaseInstance diskEncryptionStatus */
                    diskEncryptionStatus?: (google.cloud.sql.v1beta4.IDiskEncryptionStatus|null);

                    /** DatabaseInstance rootPassword */
                    rootPassword?: (string|null);

                    /** DatabaseInstance scheduledMaintenance */
                    scheduledMaintenance?: (google.cloud.sql.v1beta4.DatabaseInstance.ISqlScheduledMaintenance|null);

                    /** DatabaseInstance satisfiesPzs */
                    satisfiesPzs?: (google.protobuf.IBoolValue|null);

                    /** DatabaseInstance outOfDiskReport */
                    outOfDiskReport?: (google.cloud.sql.v1beta4.DatabaseInstance.ISqlOutOfDiskReport|null);
                }

                /** Represents a DatabaseInstance. */
                class DatabaseInstance implements IDatabaseInstance {

                    /**
                     * Constructs a new DatabaseInstance.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.IDatabaseInstance);

                    /** DatabaseInstance kind. */
                    public kind: string;

                    /** DatabaseInstance state. */
                    public state: (google.cloud.sql.v1beta4.DatabaseInstance.SqlInstanceState|keyof typeof google.cloud.sql.v1beta4.DatabaseInstance.SqlInstanceState);

                    /** DatabaseInstance databaseVersion. */
                    public databaseVersion: (google.cloud.sql.v1beta4.SqlDatabaseVersion|keyof typeof google.cloud.sql.v1beta4.SqlDatabaseVersion);

                    /** DatabaseInstance settings. */
                    public settings?: (google.cloud.sql.v1beta4.ISettings|null);

                    /** DatabaseInstance etag. */
                    public etag: string;

                    /** DatabaseInstance failoverReplica. */
                    public failoverReplica?: (google.cloud.sql.v1beta4.DatabaseInstance.ISqlFailoverReplica|null);

                    /** DatabaseInstance masterInstanceName. */
                    public masterInstanceName: string;

                    /** DatabaseInstance replicaNames. */
                    public replicaNames: string[];

                    /** DatabaseInstance maxDiskSize. */
                    public maxDiskSize?: (google.protobuf.IInt64Value|null);

                    /** DatabaseInstance currentDiskSize. */
                    public currentDiskSize?: (google.protobuf.IInt64Value|null);

                    /** DatabaseInstance ipAddresses. */
                    public ipAddresses: google.cloud.sql.v1beta4.IIpMapping[];

                    /** DatabaseInstance serverCaCert. */
                    public serverCaCert?: (google.cloud.sql.v1beta4.ISslCert|null);

                    /** DatabaseInstance instanceType. */
                    public instanceType: (google.cloud.sql.v1beta4.SqlInstanceType|keyof typeof google.cloud.sql.v1beta4.SqlInstanceType);

                    /** DatabaseInstance project. */
                    public project: string;

                    /** DatabaseInstance ipv6Address. */
                    public ipv6Address: string;

                    /** DatabaseInstance serviceAccountEmailAddress. */
                    public serviceAccountEmailAddress: string;

                    /** DatabaseInstance onPremisesConfiguration. */
                    public onPremisesConfiguration?: (google.cloud.sql.v1beta4.IOnPremisesConfiguration|null);

                    /** DatabaseInstance replicaConfiguration. */
                    public replicaConfiguration?: (google.cloud.sql.v1beta4.IReplicaConfiguration|null);

                    /** DatabaseInstance backendType. */
                    public backendType: (google.cloud.sql.v1beta4.SqlBackendType|keyof typeof google.cloud.sql.v1beta4.SqlBackendType);

                    /** DatabaseInstance selfLink. */
                    public selfLink: string;

                    /** DatabaseInstance suspensionReason. */
                    public suspensionReason: google.cloud.sql.v1beta4.SqlSuspensionReason[];

                    /** DatabaseInstance connectionName. */
                    public connectionName: string;

                    /** DatabaseInstance name. */
                    public name: string;

                    /** DatabaseInstance region. */
                    public region: string;

                    /** DatabaseInstance gceZone. */
                    public gceZone: string;

                    /** DatabaseInstance secondaryGceZone. */
                    public secondaryGceZone: string;

                    /** DatabaseInstance diskEncryptionConfiguration. */
                    public diskEncryptionConfiguration?: (google.cloud.sql.v1beta4.IDiskEncryptionConfiguration|null);

                    /** DatabaseInstance diskEncryptionStatus. */
                    public diskEncryptionStatus?: (google.cloud.sql.v1beta4.IDiskEncryptionStatus|null);

                    /** DatabaseInstance rootPassword. */
                    public rootPassword: string;

                    /** DatabaseInstance scheduledMaintenance. */
                    public scheduledMaintenance?: (google.cloud.sql.v1beta4.DatabaseInstance.ISqlScheduledMaintenance|null);

                    /** DatabaseInstance satisfiesPzs. */
                    public satisfiesPzs?: (google.protobuf.IBoolValue|null);

                    /** DatabaseInstance outOfDiskReport. */
                    public outOfDiskReport?: (google.cloud.sql.v1beta4.DatabaseInstance.ISqlOutOfDiskReport|null);

                    /** DatabaseInstance _outOfDiskReport. */
                    public _outOfDiskReport?: "outOfDiskReport";

                    /**
                     * Creates a new DatabaseInstance instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DatabaseInstance instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.IDatabaseInstance): google.cloud.sql.v1beta4.DatabaseInstance;

                    /**
                     * Encodes the specified DatabaseInstance message. Does not implicitly {@link google.cloud.sql.v1beta4.DatabaseInstance.verify|verify} messages.
                     * @param message DatabaseInstance message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.IDatabaseInstance, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DatabaseInstance message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.DatabaseInstance.verify|verify} messages.
                     * @param message DatabaseInstance message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.IDatabaseInstance, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DatabaseInstance message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DatabaseInstance
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.DatabaseInstance;

                    /**
                     * Decodes a DatabaseInstance message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DatabaseInstance
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.DatabaseInstance;

                    /**
                     * Verifies a DatabaseInstance message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DatabaseInstance message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DatabaseInstance
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.DatabaseInstance;

                    /**
                     * Creates a plain object from a DatabaseInstance message. Also converts values to other types if specified.
                     * @param message DatabaseInstance
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.DatabaseInstance, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DatabaseInstance to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace DatabaseInstance {

                    /** Properties of a SqlFailoverReplica. */
                    interface ISqlFailoverReplica {

                        /** SqlFailoverReplica name */
                        name?: (string|null);

                        /** SqlFailoverReplica available */
                        available?: (google.protobuf.IBoolValue|null);
                    }

                    /** Represents a SqlFailoverReplica. */
                    class SqlFailoverReplica implements ISqlFailoverReplica {

                        /**
                         * Constructs a new SqlFailoverReplica.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.sql.v1beta4.DatabaseInstance.ISqlFailoverReplica);

                        /** SqlFailoverReplica name. */
                        public name: string;

                        /** SqlFailoverReplica available. */
                        public available?: (google.protobuf.IBoolValue|null);

                        /**
                         * Creates a new SqlFailoverReplica instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SqlFailoverReplica instance
                         */
                        public static create(properties?: google.cloud.sql.v1beta4.DatabaseInstance.ISqlFailoverReplica): google.cloud.sql.v1beta4.DatabaseInstance.SqlFailoverReplica;

                        /**
                         * Encodes the specified SqlFailoverReplica message. Does not implicitly {@link google.cloud.sql.v1beta4.DatabaseInstance.SqlFailoverReplica.verify|verify} messages.
                         * @param message SqlFailoverReplica message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.sql.v1beta4.DatabaseInstance.ISqlFailoverReplica, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SqlFailoverReplica message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.DatabaseInstance.SqlFailoverReplica.verify|verify} messages.
                         * @param message SqlFailoverReplica message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.sql.v1beta4.DatabaseInstance.ISqlFailoverReplica, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SqlFailoverReplica message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SqlFailoverReplica
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.DatabaseInstance.SqlFailoverReplica;

                        /**
                         * Decodes a SqlFailoverReplica message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SqlFailoverReplica
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.DatabaseInstance.SqlFailoverReplica;

                        /**
                         * Verifies a SqlFailoverReplica message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SqlFailoverReplica message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SqlFailoverReplica
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.DatabaseInstance.SqlFailoverReplica;

                        /**
                         * Creates a plain object from a SqlFailoverReplica message. Also converts values to other types if specified.
                         * @param message SqlFailoverReplica
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.sql.v1beta4.DatabaseInstance.SqlFailoverReplica, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SqlFailoverReplica to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a SqlScheduledMaintenance. */
                    interface ISqlScheduledMaintenance {

                        /** SqlScheduledMaintenance startTime */
                        startTime?: (google.protobuf.ITimestamp|null);

                        /** SqlScheduledMaintenance canDefer */
                        canDefer?: (boolean|null);

                        /** SqlScheduledMaintenance canReschedule */
                        canReschedule?: (boolean|null);
                    }

                    /** Represents a SqlScheduledMaintenance. */
                    class SqlScheduledMaintenance implements ISqlScheduledMaintenance {

                        /**
                         * Constructs a new SqlScheduledMaintenance.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.sql.v1beta4.DatabaseInstance.ISqlScheduledMaintenance);

                        /** SqlScheduledMaintenance startTime. */
                        public startTime?: (google.protobuf.ITimestamp|null);

                        /** SqlScheduledMaintenance canDefer. */
                        public canDefer: boolean;

                        /** SqlScheduledMaintenance canReschedule. */
                        public canReschedule: boolean;

                        /**
                         * Creates a new SqlScheduledMaintenance instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SqlScheduledMaintenance instance
                         */
                        public static create(properties?: google.cloud.sql.v1beta4.DatabaseInstance.ISqlScheduledMaintenance): google.cloud.sql.v1beta4.DatabaseInstance.SqlScheduledMaintenance;

                        /**
                         * Encodes the specified SqlScheduledMaintenance message. Does not implicitly {@link google.cloud.sql.v1beta4.DatabaseInstance.SqlScheduledMaintenance.verify|verify} messages.
                         * @param message SqlScheduledMaintenance message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.sql.v1beta4.DatabaseInstance.ISqlScheduledMaintenance, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SqlScheduledMaintenance message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.DatabaseInstance.SqlScheduledMaintenance.verify|verify} messages.
                         * @param message SqlScheduledMaintenance message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.sql.v1beta4.DatabaseInstance.ISqlScheduledMaintenance, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SqlScheduledMaintenance message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SqlScheduledMaintenance
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.DatabaseInstance.SqlScheduledMaintenance;

                        /**
                         * Decodes a SqlScheduledMaintenance message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SqlScheduledMaintenance
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.DatabaseInstance.SqlScheduledMaintenance;

                        /**
                         * Verifies a SqlScheduledMaintenance message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SqlScheduledMaintenance message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SqlScheduledMaintenance
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.DatabaseInstance.SqlScheduledMaintenance;

                        /**
                         * Creates a plain object from a SqlScheduledMaintenance message. Also converts values to other types if specified.
                         * @param message SqlScheduledMaintenance
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.sql.v1beta4.DatabaseInstance.SqlScheduledMaintenance, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SqlScheduledMaintenance to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a SqlOutOfDiskReport. */
                    interface ISqlOutOfDiskReport {

                        /** SqlOutOfDiskReport sqlOutOfDiskState */
                        sqlOutOfDiskState?: (google.cloud.sql.v1beta4.DatabaseInstance.SqlOutOfDiskReport.SqlOutOfDiskState|keyof typeof google.cloud.sql.v1beta4.DatabaseInstance.SqlOutOfDiskReport.SqlOutOfDiskState|null);

                        /** SqlOutOfDiskReport sqlMinRecommendedIncreaseSizeGb */
                        sqlMinRecommendedIncreaseSizeGb?: (number|null);
                    }

                    /** Represents a SqlOutOfDiskReport. */
                    class SqlOutOfDiskReport implements ISqlOutOfDiskReport {

                        /**
                         * Constructs a new SqlOutOfDiskReport.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.sql.v1beta4.DatabaseInstance.ISqlOutOfDiskReport);

                        /** SqlOutOfDiskReport sqlOutOfDiskState. */
                        public sqlOutOfDiskState?: (google.cloud.sql.v1beta4.DatabaseInstance.SqlOutOfDiskReport.SqlOutOfDiskState|keyof typeof google.cloud.sql.v1beta4.DatabaseInstance.SqlOutOfDiskReport.SqlOutOfDiskState|null);

                        /** SqlOutOfDiskReport sqlMinRecommendedIncreaseSizeGb. */
                        public sqlMinRecommendedIncreaseSizeGb?: (number|null);

                        /** SqlOutOfDiskReport _sqlOutOfDiskState. */
                        public _sqlOutOfDiskState?: "sqlOutOfDiskState";

                        /** SqlOutOfDiskReport _sqlMinRecommendedIncreaseSizeGb. */
                        public _sqlMinRecommendedIncreaseSizeGb?: "sqlMinRecommendedIncreaseSizeGb";

                        /**
                         * Creates a new SqlOutOfDiskReport instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SqlOutOfDiskReport instance
                         */
                        public static create(properties?: google.cloud.sql.v1beta4.DatabaseInstance.ISqlOutOfDiskReport): google.cloud.sql.v1beta4.DatabaseInstance.SqlOutOfDiskReport;

                        /**
                         * Encodes the specified SqlOutOfDiskReport message. Does not implicitly {@link google.cloud.sql.v1beta4.DatabaseInstance.SqlOutOfDiskReport.verify|verify} messages.
                         * @param message SqlOutOfDiskReport message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.sql.v1beta4.DatabaseInstance.ISqlOutOfDiskReport, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SqlOutOfDiskReport message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.DatabaseInstance.SqlOutOfDiskReport.verify|verify} messages.
                         * @param message SqlOutOfDiskReport message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.sql.v1beta4.DatabaseInstance.ISqlOutOfDiskReport, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SqlOutOfDiskReport message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SqlOutOfDiskReport
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.DatabaseInstance.SqlOutOfDiskReport;

                        /**
                         * Decodes a SqlOutOfDiskReport message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SqlOutOfDiskReport
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.DatabaseInstance.SqlOutOfDiskReport;

                        /**
                         * Verifies a SqlOutOfDiskReport message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SqlOutOfDiskReport message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SqlOutOfDiskReport
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.DatabaseInstance.SqlOutOfDiskReport;

                        /**
                         * Creates a plain object from a SqlOutOfDiskReport message. Also converts values to other types if specified.
                         * @param message SqlOutOfDiskReport
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.sql.v1beta4.DatabaseInstance.SqlOutOfDiskReport, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SqlOutOfDiskReport to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace SqlOutOfDiskReport {

                        /** SqlOutOfDiskState enum. */
                        enum SqlOutOfDiskState {
                            SQL_OUT_OF_DISK_STATE_UNSPECIFIED = 0,
                            NORMAL = 1,
                            SOFT_SHUTDOWN = 2
                        }
                    }

                    /** SqlInstanceState enum. */
                    enum SqlInstanceState {
                        SQL_INSTANCE_STATE_UNSPECIFIED = 0,
                        RUNNABLE = 1,
                        SUSPENDED = 2,
                        PENDING_DELETE = 3,
                        PENDING_CREATE = 4,
                        MAINTENANCE = 5,
                        FAILED = 6
                    }
                }

                /** Properties of a DatabasesListResponse. */
                interface IDatabasesListResponse {

                    /** DatabasesListResponse kind */
                    kind?: (string|null);

                    /** DatabasesListResponse items */
                    items?: (google.cloud.sql.v1beta4.IDatabase[]|null);
                }

                /** Represents a DatabasesListResponse. */
                class DatabasesListResponse implements IDatabasesListResponse {

                    /**
                     * Constructs a new DatabasesListResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.IDatabasesListResponse);

                    /** DatabasesListResponse kind. */
                    public kind: string;

                    /** DatabasesListResponse items. */
                    public items: google.cloud.sql.v1beta4.IDatabase[];

                    /**
                     * Creates a new DatabasesListResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DatabasesListResponse instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.IDatabasesListResponse): google.cloud.sql.v1beta4.DatabasesListResponse;

                    /**
                     * Encodes the specified DatabasesListResponse message. Does not implicitly {@link google.cloud.sql.v1beta4.DatabasesListResponse.verify|verify} messages.
                     * @param message DatabasesListResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.IDatabasesListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DatabasesListResponse message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.DatabasesListResponse.verify|verify} messages.
                     * @param message DatabasesListResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.IDatabasesListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DatabasesListResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DatabasesListResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.DatabasesListResponse;

                    /**
                     * Decodes a DatabasesListResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DatabasesListResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.DatabasesListResponse;

                    /**
                     * Verifies a DatabasesListResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DatabasesListResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DatabasesListResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.DatabasesListResponse;

                    /**
                     * Creates a plain object from a DatabasesListResponse message. Also converts values to other types if specified.
                     * @param message DatabasesListResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.DatabasesListResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DatabasesListResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DemoteMasterConfiguration. */
                interface IDemoteMasterConfiguration {

                    /** DemoteMasterConfiguration kind */
                    kind?: (string|null);

                    /** DemoteMasterConfiguration mysqlReplicaConfiguration */
                    mysqlReplicaConfiguration?: (google.cloud.sql.v1beta4.IDemoteMasterMySqlReplicaConfiguration|null);
                }

                /** Represents a DemoteMasterConfiguration. */
                class DemoteMasterConfiguration implements IDemoteMasterConfiguration {

                    /**
                     * Constructs a new DemoteMasterConfiguration.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.IDemoteMasterConfiguration);

                    /** DemoteMasterConfiguration kind. */
                    public kind: string;

                    /** DemoteMasterConfiguration mysqlReplicaConfiguration. */
                    public mysqlReplicaConfiguration?: (google.cloud.sql.v1beta4.IDemoteMasterMySqlReplicaConfiguration|null);

                    /**
                     * Creates a new DemoteMasterConfiguration instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DemoteMasterConfiguration instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.IDemoteMasterConfiguration): google.cloud.sql.v1beta4.DemoteMasterConfiguration;

                    /**
                     * Encodes the specified DemoteMasterConfiguration message. Does not implicitly {@link google.cloud.sql.v1beta4.DemoteMasterConfiguration.verify|verify} messages.
                     * @param message DemoteMasterConfiguration message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.IDemoteMasterConfiguration, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DemoteMasterConfiguration message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.DemoteMasterConfiguration.verify|verify} messages.
                     * @param message DemoteMasterConfiguration message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.IDemoteMasterConfiguration, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DemoteMasterConfiguration message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DemoteMasterConfiguration
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.DemoteMasterConfiguration;

                    /**
                     * Decodes a DemoteMasterConfiguration message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DemoteMasterConfiguration
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.DemoteMasterConfiguration;

                    /**
                     * Verifies a DemoteMasterConfiguration message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DemoteMasterConfiguration message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DemoteMasterConfiguration
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.DemoteMasterConfiguration;

                    /**
                     * Creates a plain object from a DemoteMasterConfiguration message. Also converts values to other types if specified.
                     * @param message DemoteMasterConfiguration
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.DemoteMasterConfiguration, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DemoteMasterConfiguration to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DemoteMasterContext. */
                interface IDemoteMasterContext {

                    /** DemoteMasterContext kind */
                    kind?: (string|null);

                    /** DemoteMasterContext verifyGtidConsistency */
                    verifyGtidConsistency?: (google.protobuf.IBoolValue|null);

                    /** DemoteMasterContext masterInstanceName */
                    masterInstanceName?: (string|null);

                    /** DemoteMasterContext replicaConfiguration */
                    replicaConfiguration?: (google.cloud.sql.v1beta4.IDemoteMasterConfiguration|null);
                }

                /** Represents a DemoteMasterContext. */
                class DemoteMasterContext implements IDemoteMasterContext {

                    /**
                     * Constructs a new DemoteMasterContext.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.IDemoteMasterContext);

                    /** DemoteMasterContext kind. */
                    public kind: string;

                    /** DemoteMasterContext verifyGtidConsistency. */
                    public verifyGtidConsistency?: (google.protobuf.IBoolValue|null);

                    /** DemoteMasterContext masterInstanceName. */
                    public masterInstanceName: string;

                    /** DemoteMasterContext replicaConfiguration. */
                    public replicaConfiguration?: (google.cloud.sql.v1beta4.IDemoteMasterConfiguration|null);

                    /**
                     * Creates a new DemoteMasterContext instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DemoteMasterContext instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.IDemoteMasterContext): google.cloud.sql.v1beta4.DemoteMasterContext;

                    /**
                     * Encodes the specified DemoteMasterContext message. Does not implicitly {@link google.cloud.sql.v1beta4.DemoteMasterContext.verify|verify} messages.
                     * @param message DemoteMasterContext message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.IDemoteMasterContext, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DemoteMasterContext message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.DemoteMasterContext.verify|verify} messages.
                     * @param message DemoteMasterContext message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.IDemoteMasterContext, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DemoteMasterContext message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DemoteMasterContext
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.DemoteMasterContext;

                    /**
                     * Decodes a DemoteMasterContext message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DemoteMasterContext
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.DemoteMasterContext;

                    /**
                     * Verifies a DemoteMasterContext message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DemoteMasterContext message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DemoteMasterContext
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.DemoteMasterContext;

                    /**
                     * Creates a plain object from a DemoteMasterContext message. Also converts values to other types if specified.
                     * @param message DemoteMasterContext
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.DemoteMasterContext, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DemoteMasterContext to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DemoteMasterMySqlReplicaConfiguration. */
                interface IDemoteMasterMySqlReplicaConfiguration {

                    /** DemoteMasterMySqlReplicaConfiguration kind */
                    kind?: (string|null);

                    /** DemoteMasterMySqlReplicaConfiguration username */
                    username?: (string|null);

                    /** DemoteMasterMySqlReplicaConfiguration password */
                    password?: (string|null);

                    /** DemoteMasterMySqlReplicaConfiguration clientKey */
                    clientKey?: (string|null);

                    /** DemoteMasterMySqlReplicaConfiguration clientCertificate */
                    clientCertificate?: (string|null);

                    /** DemoteMasterMySqlReplicaConfiguration caCertificate */
                    caCertificate?: (string|null);
                }

                /** Represents a DemoteMasterMySqlReplicaConfiguration. */
                class DemoteMasterMySqlReplicaConfiguration implements IDemoteMasterMySqlReplicaConfiguration {

                    /**
                     * Constructs a new DemoteMasterMySqlReplicaConfiguration.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.IDemoteMasterMySqlReplicaConfiguration);

                    /** DemoteMasterMySqlReplicaConfiguration kind. */
                    public kind: string;

                    /** DemoteMasterMySqlReplicaConfiguration username. */
                    public username: string;

                    /** DemoteMasterMySqlReplicaConfiguration password. */
                    public password: string;

                    /** DemoteMasterMySqlReplicaConfiguration clientKey. */
                    public clientKey: string;

                    /** DemoteMasterMySqlReplicaConfiguration clientCertificate. */
                    public clientCertificate: string;

                    /** DemoteMasterMySqlReplicaConfiguration caCertificate. */
                    public caCertificate: string;

                    /**
                     * Creates a new DemoteMasterMySqlReplicaConfiguration instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DemoteMasterMySqlReplicaConfiguration instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.IDemoteMasterMySqlReplicaConfiguration): google.cloud.sql.v1beta4.DemoteMasterMySqlReplicaConfiguration;

                    /**
                     * Encodes the specified DemoteMasterMySqlReplicaConfiguration message. Does not implicitly {@link google.cloud.sql.v1beta4.DemoteMasterMySqlReplicaConfiguration.verify|verify} messages.
                     * @param message DemoteMasterMySqlReplicaConfiguration message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.IDemoteMasterMySqlReplicaConfiguration, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DemoteMasterMySqlReplicaConfiguration message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.DemoteMasterMySqlReplicaConfiguration.verify|verify} messages.
                     * @param message DemoteMasterMySqlReplicaConfiguration message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.IDemoteMasterMySqlReplicaConfiguration, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DemoteMasterMySqlReplicaConfiguration message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DemoteMasterMySqlReplicaConfiguration
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.DemoteMasterMySqlReplicaConfiguration;

                    /**
                     * Decodes a DemoteMasterMySqlReplicaConfiguration message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DemoteMasterMySqlReplicaConfiguration
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.DemoteMasterMySqlReplicaConfiguration;

                    /**
                     * Verifies a DemoteMasterMySqlReplicaConfiguration message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DemoteMasterMySqlReplicaConfiguration message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DemoteMasterMySqlReplicaConfiguration
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.DemoteMasterMySqlReplicaConfiguration;

                    /**
                     * Creates a plain object from a DemoteMasterMySqlReplicaConfiguration message. Also converts values to other types if specified.
                     * @param message DemoteMasterMySqlReplicaConfiguration
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.DemoteMasterMySqlReplicaConfiguration, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DemoteMasterMySqlReplicaConfiguration to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an ExportContext. */
                interface IExportContext {

                    /** ExportContext uri */
                    uri?: (string|null);

                    /** ExportContext databases */
                    databases?: (string[]|null);

                    /** ExportContext kind */
                    kind?: (string|null);

                    /** ExportContext sqlExportOptions */
                    sqlExportOptions?: (google.cloud.sql.v1beta4.ExportContext.ISqlExportOptions|null);

                    /** ExportContext csvExportOptions */
                    csvExportOptions?: (google.cloud.sql.v1beta4.ExportContext.ISqlCsvExportOptions|null);

                    /** ExportContext fileType */
                    fileType?: (google.cloud.sql.v1beta4.SqlFileType|keyof typeof google.cloud.sql.v1beta4.SqlFileType|null);

                    /** ExportContext offload */
                    offload?: (google.protobuf.IBoolValue|null);
                }

                /** Represents an ExportContext. */
                class ExportContext implements IExportContext {

                    /**
                     * Constructs a new ExportContext.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.IExportContext);

                    /** ExportContext uri. */
                    public uri: string;

                    /** ExportContext databases. */
                    public databases: string[];

                    /** ExportContext kind. */
                    public kind: string;

                    /** ExportContext sqlExportOptions. */
                    public sqlExportOptions?: (google.cloud.sql.v1beta4.ExportContext.ISqlExportOptions|null);

                    /** ExportContext csvExportOptions. */
                    public csvExportOptions?: (google.cloud.sql.v1beta4.ExportContext.ISqlCsvExportOptions|null);

                    /** ExportContext fileType. */
                    public fileType: (google.cloud.sql.v1beta4.SqlFileType|keyof typeof google.cloud.sql.v1beta4.SqlFileType);

                    /** ExportContext offload. */
                    public offload?: (google.protobuf.IBoolValue|null);

                    /**
                     * Creates a new ExportContext instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ExportContext instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.IExportContext): google.cloud.sql.v1beta4.ExportContext;

                    /**
                     * Encodes the specified ExportContext message. Does not implicitly {@link google.cloud.sql.v1beta4.ExportContext.verify|verify} messages.
                     * @param message ExportContext message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.IExportContext, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ExportContext message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.ExportContext.verify|verify} messages.
                     * @param message ExportContext message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.IExportContext, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ExportContext message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ExportContext
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.ExportContext;

                    /**
                     * Decodes an ExportContext message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ExportContext
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.ExportContext;

                    /**
                     * Verifies an ExportContext message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ExportContext message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ExportContext
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.ExportContext;

                    /**
                     * Creates a plain object from an ExportContext message. Also converts values to other types if specified.
                     * @param message ExportContext
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.ExportContext, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ExportContext to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace ExportContext {

                    /** Properties of a SqlCsvExportOptions. */
                    interface ISqlCsvExportOptions {

                        /** SqlCsvExportOptions selectQuery */
                        selectQuery?: (string|null);
                    }

                    /** Represents a SqlCsvExportOptions. */
                    class SqlCsvExportOptions implements ISqlCsvExportOptions {

                        /**
                         * Constructs a new SqlCsvExportOptions.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.sql.v1beta4.ExportContext.ISqlCsvExportOptions);

                        /** SqlCsvExportOptions selectQuery. */
                        public selectQuery: string;

                        /**
                         * Creates a new SqlCsvExportOptions instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SqlCsvExportOptions instance
                         */
                        public static create(properties?: google.cloud.sql.v1beta4.ExportContext.ISqlCsvExportOptions): google.cloud.sql.v1beta4.ExportContext.SqlCsvExportOptions;

                        /**
                         * Encodes the specified SqlCsvExportOptions message. Does not implicitly {@link google.cloud.sql.v1beta4.ExportContext.SqlCsvExportOptions.verify|verify} messages.
                         * @param message SqlCsvExportOptions message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.sql.v1beta4.ExportContext.ISqlCsvExportOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SqlCsvExportOptions message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.ExportContext.SqlCsvExportOptions.verify|verify} messages.
                         * @param message SqlCsvExportOptions message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.sql.v1beta4.ExportContext.ISqlCsvExportOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SqlCsvExportOptions message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SqlCsvExportOptions
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.ExportContext.SqlCsvExportOptions;

                        /**
                         * Decodes a SqlCsvExportOptions message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SqlCsvExportOptions
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.ExportContext.SqlCsvExportOptions;

                        /**
                         * Verifies a SqlCsvExportOptions message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SqlCsvExportOptions message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SqlCsvExportOptions
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.ExportContext.SqlCsvExportOptions;

                        /**
                         * Creates a plain object from a SqlCsvExportOptions message. Also converts values to other types if specified.
                         * @param message SqlCsvExportOptions
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.sql.v1beta4.ExportContext.SqlCsvExportOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SqlCsvExportOptions to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a SqlExportOptions. */
                    interface ISqlExportOptions {

                        /** SqlExportOptions tables */
                        tables?: (string[]|null);

                        /** SqlExportOptions schemaOnly */
                        schemaOnly?: (google.protobuf.IBoolValue|null);

                        /** SqlExportOptions mysqlExportOptions */
                        mysqlExportOptions?: (google.cloud.sql.v1beta4.ExportContext.SqlExportOptions.IMysqlExportOptions|null);
                    }

                    /** Represents a SqlExportOptions. */
                    class SqlExportOptions implements ISqlExportOptions {

                        /**
                         * Constructs a new SqlExportOptions.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.sql.v1beta4.ExportContext.ISqlExportOptions);

                        /** SqlExportOptions tables. */
                        public tables: string[];

                        /** SqlExportOptions schemaOnly. */
                        public schemaOnly?: (google.protobuf.IBoolValue|null);

                        /** SqlExportOptions mysqlExportOptions. */
                        public mysqlExportOptions?: (google.cloud.sql.v1beta4.ExportContext.SqlExportOptions.IMysqlExportOptions|null);

                        /**
                         * Creates a new SqlExportOptions instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SqlExportOptions instance
                         */
                        public static create(properties?: google.cloud.sql.v1beta4.ExportContext.ISqlExportOptions): google.cloud.sql.v1beta4.ExportContext.SqlExportOptions;

                        /**
                         * Encodes the specified SqlExportOptions message. Does not implicitly {@link google.cloud.sql.v1beta4.ExportContext.SqlExportOptions.verify|verify} messages.
                         * @param message SqlExportOptions message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.sql.v1beta4.ExportContext.ISqlExportOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SqlExportOptions message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.ExportContext.SqlExportOptions.verify|verify} messages.
                         * @param message SqlExportOptions message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.sql.v1beta4.ExportContext.ISqlExportOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SqlExportOptions message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SqlExportOptions
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.ExportContext.SqlExportOptions;

                        /**
                         * Decodes a SqlExportOptions message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SqlExportOptions
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.ExportContext.SqlExportOptions;

                        /**
                         * Verifies a SqlExportOptions message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SqlExportOptions message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SqlExportOptions
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.ExportContext.SqlExportOptions;

                        /**
                         * Creates a plain object from a SqlExportOptions message. Also converts values to other types if specified.
                         * @param message SqlExportOptions
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.sql.v1beta4.ExportContext.SqlExportOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SqlExportOptions to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace SqlExportOptions {

                        /** Properties of a MysqlExportOptions. */
                        interface IMysqlExportOptions {

                            /** MysqlExportOptions masterData */
                            masterData?: (google.protobuf.IInt32Value|null);
                        }

                        /** Represents a MysqlExportOptions. */
                        class MysqlExportOptions implements IMysqlExportOptions {

                            /**
                             * Constructs a new MysqlExportOptions.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.sql.v1beta4.ExportContext.SqlExportOptions.IMysqlExportOptions);

                            /** MysqlExportOptions masterData. */
                            public masterData?: (google.protobuf.IInt32Value|null);

                            /**
                             * Creates a new MysqlExportOptions instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns MysqlExportOptions instance
                             */
                            public static create(properties?: google.cloud.sql.v1beta4.ExportContext.SqlExportOptions.IMysqlExportOptions): google.cloud.sql.v1beta4.ExportContext.SqlExportOptions.MysqlExportOptions;

                            /**
                             * Encodes the specified MysqlExportOptions message. Does not implicitly {@link google.cloud.sql.v1beta4.ExportContext.SqlExportOptions.MysqlExportOptions.verify|verify} messages.
                             * @param message MysqlExportOptions message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.sql.v1beta4.ExportContext.SqlExportOptions.IMysqlExportOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified MysqlExportOptions message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.ExportContext.SqlExportOptions.MysqlExportOptions.verify|verify} messages.
                             * @param message MysqlExportOptions message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.sql.v1beta4.ExportContext.SqlExportOptions.IMysqlExportOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a MysqlExportOptions message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns MysqlExportOptions
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.ExportContext.SqlExportOptions.MysqlExportOptions;

                            /**
                             * Decodes a MysqlExportOptions message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns MysqlExportOptions
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.ExportContext.SqlExportOptions.MysqlExportOptions;

                            /**
                             * Verifies a MysqlExportOptions message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a MysqlExportOptions message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns MysqlExportOptions
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.ExportContext.SqlExportOptions.MysqlExportOptions;

                            /**
                             * Creates a plain object from a MysqlExportOptions message. Also converts values to other types if specified.
                             * @param message MysqlExportOptions
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.sql.v1beta4.ExportContext.SqlExportOptions.MysqlExportOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this MysqlExportOptions to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }
                    }
                }

                /** Properties of a FailoverContext. */
                interface IFailoverContext {

                    /** FailoverContext settingsVersion */
                    settingsVersion?: (number|Long|string|null);

                    /** FailoverContext kind */
                    kind?: (string|null);
                }

                /** Represents a FailoverContext. */
                class FailoverContext implements IFailoverContext {

                    /**
                     * Constructs a new FailoverContext.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.IFailoverContext);

                    /** FailoverContext settingsVersion. */
                    public settingsVersion: (number|Long|string);

                    /** FailoverContext kind. */
                    public kind: string;

                    /**
                     * Creates a new FailoverContext instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FailoverContext instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.IFailoverContext): google.cloud.sql.v1beta4.FailoverContext;

                    /**
                     * Encodes the specified FailoverContext message. Does not implicitly {@link google.cloud.sql.v1beta4.FailoverContext.verify|verify} messages.
                     * @param message FailoverContext message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.IFailoverContext, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified FailoverContext message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.FailoverContext.verify|verify} messages.
                     * @param message FailoverContext message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.IFailoverContext, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FailoverContext message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FailoverContext
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.FailoverContext;

                    /**
                     * Decodes a FailoverContext message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FailoverContext
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.FailoverContext;

                    /**
                     * Verifies a FailoverContext message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a FailoverContext message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns FailoverContext
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.FailoverContext;

                    /**
                     * Creates a plain object from a FailoverContext message. Also converts values to other types if specified.
                     * @param message FailoverContext
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.FailoverContext, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FailoverContext to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Flag. */
                interface IFlag {

                    /** Flag name */
                    name?: (string|null);

                    /** Flag type */
                    type?: (google.cloud.sql.v1beta4.SqlFlagType|keyof typeof google.cloud.sql.v1beta4.SqlFlagType|null);

                    /** Flag appliesTo */
                    appliesTo?: (google.cloud.sql.v1beta4.SqlDatabaseVersion[]|null);

                    /** Flag allowedStringValues */
                    allowedStringValues?: (string[]|null);

                    /** Flag minValue */
                    minValue?: (google.protobuf.IInt64Value|null);

                    /** Flag maxValue */
                    maxValue?: (google.protobuf.IInt64Value|null);

                    /** Flag requiresRestart */
                    requiresRestart?: (google.protobuf.IBoolValue|null);

                    /** Flag kind */
                    kind?: (string|null);

                    /** Flag inBeta */
                    inBeta?: (google.protobuf.IBoolValue|null);

                    /** Flag allowedIntValues */
                    allowedIntValues?: ((number|Long|string)[]|null);
                }

                /** Represents a Flag. */
                class Flag implements IFlag {

                    /**
                     * Constructs a new Flag.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.IFlag);

                    /** Flag name. */
                    public name: string;

                    /** Flag type. */
                    public type: (google.cloud.sql.v1beta4.SqlFlagType|keyof typeof google.cloud.sql.v1beta4.SqlFlagType);

                    /** Flag appliesTo. */
                    public appliesTo: google.cloud.sql.v1beta4.SqlDatabaseVersion[];

                    /** Flag allowedStringValues. */
                    public allowedStringValues: string[];

                    /** Flag minValue. */
                    public minValue?: (google.protobuf.IInt64Value|null);

                    /** Flag maxValue. */
                    public maxValue?: (google.protobuf.IInt64Value|null);

                    /** Flag requiresRestart. */
                    public requiresRestart?: (google.protobuf.IBoolValue|null);

                    /** Flag kind. */
                    public kind: string;

                    /** Flag inBeta. */
                    public inBeta?: (google.protobuf.IBoolValue|null);

                    /** Flag allowedIntValues. */
                    public allowedIntValues: (number|Long|string)[];

                    /**
                     * Creates a new Flag instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Flag instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.IFlag): google.cloud.sql.v1beta4.Flag;

                    /**
                     * Encodes the specified Flag message. Does not implicitly {@link google.cloud.sql.v1beta4.Flag.verify|verify} messages.
                     * @param message Flag message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.IFlag, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Flag message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.Flag.verify|verify} messages.
                     * @param message Flag message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.IFlag, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Flag message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Flag
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.Flag;

                    /**
                     * Decodes a Flag message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Flag
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.Flag;

                    /**
                     * Verifies a Flag message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Flag message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Flag
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.Flag;

                    /**
                     * Creates a plain object from a Flag message. Also converts values to other types if specified.
                     * @param message Flag
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.Flag, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Flag to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a FlagsListResponse. */
                interface IFlagsListResponse {

                    /** FlagsListResponse kind */
                    kind?: (string|null);

                    /** FlagsListResponse items */
                    items?: (google.cloud.sql.v1beta4.IFlag[]|null);
                }

                /** Represents a FlagsListResponse. */
                class FlagsListResponse implements IFlagsListResponse {

                    /**
                     * Constructs a new FlagsListResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.IFlagsListResponse);

                    /** FlagsListResponse kind. */
                    public kind: string;

                    /** FlagsListResponse items. */
                    public items: google.cloud.sql.v1beta4.IFlag[];

                    /**
                     * Creates a new FlagsListResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FlagsListResponse instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.IFlagsListResponse): google.cloud.sql.v1beta4.FlagsListResponse;

                    /**
                     * Encodes the specified FlagsListResponse message. Does not implicitly {@link google.cloud.sql.v1beta4.FlagsListResponse.verify|verify} messages.
                     * @param message FlagsListResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.IFlagsListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified FlagsListResponse message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.FlagsListResponse.verify|verify} messages.
                     * @param message FlagsListResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.IFlagsListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FlagsListResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FlagsListResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.FlagsListResponse;

                    /**
                     * Decodes a FlagsListResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FlagsListResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.FlagsListResponse;

                    /**
                     * Verifies a FlagsListResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a FlagsListResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns FlagsListResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.FlagsListResponse;

                    /**
                     * Creates a plain object from a FlagsListResponse message. Also converts values to other types if specified.
                     * @param message FlagsListResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.FlagsListResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FlagsListResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an ImportContext. */
                interface IImportContext {

                    /** ImportContext uri */
                    uri?: (string|null);

                    /** ImportContext database */
                    database?: (string|null);

                    /** ImportContext kind */
                    kind?: (string|null);

                    /** ImportContext fileType */
                    fileType?: (google.cloud.sql.v1beta4.SqlFileType|keyof typeof google.cloud.sql.v1beta4.SqlFileType|null);

                    /** ImportContext csvImportOptions */
                    csvImportOptions?: (google.cloud.sql.v1beta4.ImportContext.ISqlCsvImportOptions|null);

                    /** ImportContext importUser */
                    importUser?: (string|null);

                    /** ImportContext bakImportOptions */
                    bakImportOptions?: (google.cloud.sql.v1beta4.ImportContext.ISqlBakImportOptions|null);
                }

                /** Represents an ImportContext. */
                class ImportContext implements IImportContext {

                    /**
                     * Constructs a new ImportContext.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.IImportContext);

                    /** ImportContext uri. */
                    public uri: string;

                    /** ImportContext database. */
                    public database: string;

                    /** ImportContext kind. */
                    public kind: string;

                    /** ImportContext fileType. */
                    public fileType: (google.cloud.sql.v1beta4.SqlFileType|keyof typeof google.cloud.sql.v1beta4.SqlFileType);

                    /** ImportContext csvImportOptions. */
                    public csvImportOptions?: (google.cloud.sql.v1beta4.ImportContext.ISqlCsvImportOptions|null);

                    /** ImportContext importUser. */
                    public importUser: string;

                    /** ImportContext bakImportOptions. */
                    public bakImportOptions?: (google.cloud.sql.v1beta4.ImportContext.ISqlBakImportOptions|null);

                    /**
                     * Creates a new ImportContext instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ImportContext instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.IImportContext): google.cloud.sql.v1beta4.ImportContext;

                    /**
                     * Encodes the specified ImportContext message. Does not implicitly {@link google.cloud.sql.v1beta4.ImportContext.verify|verify} messages.
                     * @param message ImportContext message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.IImportContext, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ImportContext message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.ImportContext.verify|verify} messages.
                     * @param message ImportContext message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.IImportContext, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ImportContext message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ImportContext
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.ImportContext;

                    /**
                     * Decodes an ImportContext message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ImportContext
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.ImportContext;

                    /**
                     * Verifies an ImportContext message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ImportContext message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ImportContext
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.ImportContext;

                    /**
                     * Creates a plain object from an ImportContext message. Also converts values to other types if specified.
                     * @param message ImportContext
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.ImportContext, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ImportContext to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace ImportContext {

                    /** Properties of a SqlCsvImportOptions. */
                    interface ISqlCsvImportOptions {

                        /** SqlCsvImportOptions table */
                        table?: (string|null);

                        /** SqlCsvImportOptions columns */
                        columns?: (string[]|null);
                    }

                    /** Represents a SqlCsvImportOptions. */
                    class SqlCsvImportOptions implements ISqlCsvImportOptions {

                        /**
                         * Constructs a new SqlCsvImportOptions.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.sql.v1beta4.ImportContext.ISqlCsvImportOptions);

                        /** SqlCsvImportOptions table. */
                        public table: string;

                        /** SqlCsvImportOptions columns. */
                        public columns: string[];

                        /**
                         * Creates a new SqlCsvImportOptions instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SqlCsvImportOptions instance
                         */
                        public static create(properties?: google.cloud.sql.v1beta4.ImportContext.ISqlCsvImportOptions): google.cloud.sql.v1beta4.ImportContext.SqlCsvImportOptions;

                        /**
                         * Encodes the specified SqlCsvImportOptions message. Does not implicitly {@link google.cloud.sql.v1beta4.ImportContext.SqlCsvImportOptions.verify|verify} messages.
                         * @param message SqlCsvImportOptions message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.sql.v1beta4.ImportContext.ISqlCsvImportOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SqlCsvImportOptions message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.ImportContext.SqlCsvImportOptions.verify|verify} messages.
                         * @param message SqlCsvImportOptions message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.sql.v1beta4.ImportContext.ISqlCsvImportOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SqlCsvImportOptions message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SqlCsvImportOptions
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.ImportContext.SqlCsvImportOptions;

                        /**
                         * Decodes a SqlCsvImportOptions message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SqlCsvImportOptions
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.ImportContext.SqlCsvImportOptions;

                        /**
                         * Verifies a SqlCsvImportOptions message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SqlCsvImportOptions message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SqlCsvImportOptions
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.ImportContext.SqlCsvImportOptions;

                        /**
                         * Creates a plain object from a SqlCsvImportOptions message. Also converts values to other types if specified.
                         * @param message SqlCsvImportOptions
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.sql.v1beta4.ImportContext.SqlCsvImportOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SqlCsvImportOptions to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a SqlBakImportOptions. */
                    interface ISqlBakImportOptions {

                        /** SqlBakImportOptions encryptionOptions */
                        encryptionOptions?: (google.cloud.sql.v1beta4.ImportContext.SqlBakImportOptions.IEncryptionOptions|null);
                    }

                    /** Represents a SqlBakImportOptions. */
                    class SqlBakImportOptions implements ISqlBakImportOptions {

                        /**
                         * Constructs a new SqlBakImportOptions.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.sql.v1beta4.ImportContext.ISqlBakImportOptions);

                        /** SqlBakImportOptions encryptionOptions. */
                        public encryptionOptions?: (google.cloud.sql.v1beta4.ImportContext.SqlBakImportOptions.IEncryptionOptions|null);

                        /**
                         * Creates a new SqlBakImportOptions instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SqlBakImportOptions instance
                         */
                        public static create(properties?: google.cloud.sql.v1beta4.ImportContext.ISqlBakImportOptions): google.cloud.sql.v1beta4.ImportContext.SqlBakImportOptions;

                        /**
                         * Encodes the specified SqlBakImportOptions message. Does not implicitly {@link google.cloud.sql.v1beta4.ImportContext.SqlBakImportOptions.verify|verify} messages.
                         * @param message SqlBakImportOptions message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.sql.v1beta4.ImportContext.ISqlBakImportOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SqlBakImportOptions message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.ImportContext.SqlBakImportOptions.verify|verify} messages.
                         * @param message SqlBakImportOptions message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.sql.v1beta4.ImportContext.ISqlBakImportOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SqlBakImportOptions message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SqlBakImportOptions
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.ImportContext.SqlBakImportOptions;

                        /**
                         * Decodes a SqlBakImportOptions message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SqlBakImportOptions
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.ImportContext.SqlBakImportOptions;

                        /**
                         * Verifies a SqlBakImportOptions message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SqlBakImportOptions message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SqlBakImportOptions
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.ImportContext.SqlBakImportOptions;

                        /**
                         * Creates a plain object from a SqlBakImportOptions message. Also converts values to other types if specified.
                         * @param message SqlBakImportOptions
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.sql.v1beta4.ImportContext.SqlBakImportOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SqlBakImportOptions to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace SqlBakImportOptions {

                        /** Properties of an EncryptionOptions. */
                        interface IEncryptionOptions {

                            /** EncryptionOptions certPath */
                            certPath?: (string|null);

                            /** EncryptionOptions pvkPath */
                            pvkPath?: (string|null);

                            /** EncryptionOptions pvkPassword */
                            pvkPassword?: (string|null);
                        }

                        /** Represents an EncryptionOptions. */
                        class EncryptionOptions implements IEncryptionOptions {

                            /**
                             * Constructs a new EncryptionOptions.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.sql.v1beta4.ImportContext.SqlBakImportOptions.IEncryptionOptions);

                            /** EncryptionOptions certPath. */
                            public certPath: string;

                            /** EncryptionOptions pvkPath. */
                            public pvkPath: string;

                            /** EncryptionOptions pvkPassword. */
                            public pvkPassword: string;

                            /**
                             * Creates a new EncryptionOptions instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns EncryptionOptions instance
                             */
                            public static create(properties?: google.cloud.sql.v1beta4.ImportContext.SqlBakImportOptions.IEncryptionOptions): google.cloud.sql.v1beta4.ImportContext.SqlBakImportOptions.EncryptionOptions;

                            /**
                             * Encodes the specified EncryptionOptions message. Does not implicitly {@link google.cloud.sql.v1beta4.ImportContext.SqlBakImportOptions.EncryptionOptions.verify|verify} messages.
                             * @param message EncryptionOptions message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.sql.v1beta4.ImportContext.SqlBakImportOptions.IEncryptionOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified EncryptionOptions message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.ImportContext.SqlBakImportOptions.EncryptionOptions.verify|verify} messages.
                             * @param message EncryptionOptions message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.sql.v1beta4.ImportContext.SqlBakImportOptions.IEncryptionOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an EncryptionOptions message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns EncryptionOptions
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.ImportContext.SqlBakImportOptions.EncryptionOptions;

                            /**
                             * Decodes an EncryptionOptions message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns EncryptionOptions
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.ImportContext.SqlBakImportOptions.EncryptionOptions;

                            /**
                             * Verifies an EncryptionOptions message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an EncryptionOptions message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns EncryptionOptions
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.ImportContext.SqlBakImportOptions.EncryptionOptions;

                            /**
                             * Creates a plain object from an EncryptionOptions message. Also converts values to other types if specified.
                             * @param message EncryptionOptions
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.sql.v1beta4.ImportContext.SqlBakImportOptions.EncryptionOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this EncryptionOptions to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }
                    }
                }

                /** SqlFileType enum. */
                enum SqlFileType {
                    SQL_FILE_TYPE_UNSPECIFIED = 0,
                    SQL = 1,
                    CSV = 2,
                    BAK = 4
                }

                /** Properties of an InstancesCloneRequest. */
                interface IInstancesCloneRequest {

                    /** InstancesCloneRequest cloneContext */
                    cloneContext?: (google.cloud.sql.v1beta4.ICloneContext|null);
                }

                /** Represents an InstancesCloneRequest. */
                class InstancesCloneRequest implements IInstancesCloneRequest {

                    /**
                     * Constructs a new InstancesCloneRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.IInstancesCloneRequest);

                    /** InstancesCloneRequest cloneContext. */
                    public cloneContext?: (google.cloud.sql.v1beta4.ICloneContext|null);

                    /**
                     * Creates a new InstancesCloneRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns InstancesCloneRequest instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.IInstancesCloneRequest): google.cloud.sql.v1beta4.InstancesCloneRequest;

                    /**
                     * Encodes the specified InstancesCloneRequest message. Does not implicitly {@link google.cloud.sql.v1beta4.InstancesCloneRequest.verify|verify} messages.
                     * @param message InstancesCloneRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.IInstancesCloneRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified InstancesCloneRequest message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.InstancesCloneRequest.verify|verify} messages.
                     * @param message InstancesCloneRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.IInstancesCloneRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an InstancesCloneRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns InstancesCloneRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.InstancesCloneRequest;

                    /**
                     * Decodes an InstancesCloneRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns InstancesCloneRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.InstancesCloneRequest;

                    /**
                     * Verifies an InstancesCloneRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an InstancesCloneRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns InstancesCloneRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.InstancesCloneRequest;

                    /**
                     * Creates a plain object from an InstancesCloneRequest message. Also converts values to other types if specified.
                     * @param message InstancesCloneRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.InstancesCloneRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this InstancesCloneRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an InstancesDemoteMasterRequest. */
                interface IInstancesDemoteMasterRequest {

                    /** InstancesDemoteMasterRequest demoteMasterContext */
                    demoteMasterContext?: (google.cloud.sql.v1beta4.IDemoteMasterContext|null);
                }

                /** Represents an InstancesDemoteMasterRequest. */
                class InstancesDemoteMasterRequest implements IInstancesDemoteMasterRequest {

                    /**
                     * Constructs a new InstancesDemoteMasterRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.IInstancesDemoteMasterRequest);

                    /** InstancesDemoteMasterRequest demoteMasterContext. */
                    public demoteMasterContext?: (google.cloud.sql.v1beta4.IDemoteMasterContext|null);

                    /**
                     * Creates a new InstancesDemoteMasterRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns InstancesDemoteMasterRequest instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.IInstancesDemoteMasterRequest): google.cloud.sql.v1beta4.InstancesDemoteMasterRequest;

                    /**
                     * Encodes the specified InstancesDemoteMasterRequest message. Does not implicitly {@link google.cloud.sql.v1beta4.InstancesDemoteMasterRequest.verify|verify} messages.
                     * @param message InstancesDemoteMasterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.IInstancesDemoteMasterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified InstancesDemoteMasterRequest message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.InstancesDemoteMasterRequest.verify|verify} messages.
                     * @param message InstancesDemoteMasterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.IInstancesDemoteMasterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an InstancesDemoteMasterRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns InstancesDemoteMasterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.InstancesDemoteMasterRequest;

                    /**
                     * Decodes an InstancesDemoteMasterRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns InstancesDemoteMasterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.InstancesDemoteMasterRequest;

                    /**
                     * Verifies an InstancesDemoteMasterRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an InstancesDemoteMasterRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns InstancesDemoteMasterRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.InstancesDemoteMasterRequest;

                    /**
                     * Creates a plain object from an InstancesDemoteMasterRequest message. Also converts values to other types if specified.
                     * @param message InstancesDemoteMasterRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.InstancesDemoteMasterRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this InstancesDemoteMasterRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an InstancesExportRequest. */
                interface IInstancesExportRequest {

                    /** InstancesExportRequest exportContext */
                    exportContext?: (google.cloud.sql.v1beta4.IExportContext|null);
                }

                /** Represents an InstancesExportRequest. */
                class InstancesExportRequest implements IInstancesExportRequest {

                    /**
                     * Constructs a new InstancesExportRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.IInstancesExportRequest);

                    /** InstancesExportRequest exportContext. */
                    public exportContext?: (google.cloud.sql.v1beta4.IExportContext|null);

                    /**
                     * Creates a new InstancesExportRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns InstancesExportRequest instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.IInstancesExportRequest): google.cloud.sql.v1beta4.InstancesExportRequest;

                    /**
                     * Encodes the specified InstancesExportRequest message. Does not implicitly {@link google.cloud.sql.v1beta4.InstancesExportRequest.verify|verify} messages.
                     * @param message InstancesExportRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.IInstancesExportRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified InstancesExportRequest message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.InstancesExportRequest.verify|verify} messages.
                     * @param message InstancesExportRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.IInstancesExportRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an InstancesExportRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns InstancesExportRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.InstancesExportRequest;

                    /**
                     * Decodes an InstancesExportRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns InstancesExportRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.InstancesExportRequest;

                    /**
                     * Verifies an InstancesExportRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an InstancesExportRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns InstancesExportRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.InstancesExportRequest;

                    /**
                     * Creates a plain object from an InstancesExportRequest message. Also converts values to other types if specified.
                     * @param message InstancesExportRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.InstancesExportRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this InstancesExportRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an InstancesFailoverRequest. */
                interface IInstancesFailoverRequest {

                    /** InstancesFailoverRequest failoverContext */
                    failoverContext?: (google.cloud.sql.v1beta4.IFailoverContext|null);
                }

                /** Represents an InstancesFailoverRequest. */
                class InstancesFailoverRequest implements IInstancesFailoverRequest {

                    /**
                     * Constructs a new InstancesFailoverRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.IInstancesFailoverRequest);

                    /** InstancesFailoverRequest failoverContext. */
                    public failoverContext?: (google.cloud.sql.v1beta4.IFailoverContext|null);

                    /**
                     * Creates a new InstancesFailoverRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns InstancesFailoverRequest instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.IInstancesFailoverRequest): google.cloud.sql.v1beta4.InstancesFailoverRequest;

                    /**
                     * Encodes the specified InstancesFailoverRequest message. Does not implicitly {@link google.cloud.sql.v1beta4.InstancesFailoverRequest.verify|verify} messages.
                     * @param message InstancesFailoverRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.IInstancesFailoverRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified InstancesFailoverRequest message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.InstancesFailoverRequest.verify|verify} messages.
                     * @param message InstancesFailoverRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.IInstancesFailoverRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an InstancesFailoverRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns InstancesFailoverRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.InstancesFailoverRequest;

                    /**
                     * Decodes an InstancesFailoverRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns InstancesFailoverRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.InstancesFailoverRequest;

                    /**
                     * Verifies an InstancesFailoverRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an InstancesFailoverRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns InstancesFailoverRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.InstancesFailoverRequest;

                    /**
                     * Creates a plain object from an InstancesFailoverRequest message. Also converts values to other types if specified.
                     * @param message InstancesFailoverRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.InstancesFailoverRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this InstancesFailoverRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an InstancesImportRequest. */
                interface IInstancesImportRequest {

                    /** InstancesImportRequest importContext */
                    importContext?: (google.cloud.sql.v1beta4.IImportContext|null);
                }

                /** Represents an InstancesImportRequest. */
                class InstancesImportRequest implements IInstancesImportRequest {

                    /**
                     * Constructs a new InstancesImportRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.IInstancesImportRequest);

                    /** InstancesImportRequest importContext. */
                    public importContext?: (google.cloud.sql.v1beta4.IImportContext|null);

                    /**
                     * Creates a new InstancesImportRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns InstancesImportRequest instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.IInstancesImportRequest): google.cloud.sql.v1beta4.InstancesImportRequest;

                    /**
                     * Encodes the specified InstancesImportRequest message. Does not implicitly {@link google.cloud.sql.v1beta4.InstancesImportRequest.verify|verify} messages.
                     * @param message InstancesImportRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.IInstancesImportRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified InstancesImportRequest message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.InstancesImportRequest.verify|verify} messages.
                     * @param message InstancesImportRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.IInstancesImportRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an InstancesImportRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns InstancesImportRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.InstancesImportRequest;

                    /**
                     * Decodes an InstancesImportRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns InstancesImportRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.InstancesImportRequest;

                    /**
                     * Verifies an InstancesImportRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an InstancesImportRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns InstancesImportRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.InstancesImportRequest;

                    /**
                     * Creates a plain object from an InstancesImportRequest message. Also converts values to other types if specified.
                     * @param message InstancesImportRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.InstancesImportRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this InstancesImportRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an InstancesListResponse. */
                interface IInstancesListResponse {

                    /** InstancesListResponse kind */
                    kind?: (string|null);

                    /** InstancesListResponse warnings */
                    warnings?: (google.cloud.sql.v1beta4.IApiWarning[]|null);

                    /** InstancesListResponse items */
                    items?: (google.cloud.sql.v1beta4.IDatabaseInstance[]|null);

                    /** InstancesListResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents an InstancesListResponse. */
                class InstancesListResponse implements IInstancesListResponse {

                    /**
                     * Constructs a new InstancesListResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.IInstancesListResponse);

                    /** InstancesListResponse kind. */
                    public kind: string;

                    /** InstancesListResponse warnings. */
                    public warnings: google.cloud.sql.v1beta4.IApiWarning[];

                    /** InstancesListResponse items. */
                    public items: google.cloud.sql.v1beta4.IDatabaseInstance[];

                    /** InstancesListResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new InstancesListResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns InstancesListResponse instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.IInstancesListResponse): google.cloud.sql.v1beta4.InstancesListResponse;

                    /**
                     * Encodes the specified InstancesListResponse message. Does not implicitly {@link google.cloud.sql.v1beta4.InstancesListResponse.verify|verify} messages.
                     * @param message InstancesListResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.IInstancesListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified InstancesListResponse message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.InstancesListResponse.verify|verify} messages.
                     * @param message InstancesListResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.IInstancesListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an InstancesListResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns InstancesListResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.InstancesListResponse;

                    /**
                     * Decodes an InstancesListResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns InstancesListResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.InstancesListResponse;

                    /**
                     * Verifies an InstancesListResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an InstancesListResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns InstancesListResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.InstancesListResponse;

                    /**
                     * Creates a plain object from an InstancesListResponse message. Also converts values to other types if specified.
                     * @param message InstancesListResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.InstancesListResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this InstancesListResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an InstancesListServerCasResponse. */
                interface IInstancesListServerCasResponse {

                    /** InstancesListServerCasResponse certs */
                    certs?: (google.cloud.sql.v1beta4.ISslCert[]|null);

                    /** InstancesListServerCasResponse activeVersion */
                    activeVersion?: (string|null);

                    /** InstancesListServerCasResponse kind */
                    kind?: (string|null);
                }

                /** Represents an InstancesListServerCasResponse. */
                class InstancesListServerCasResponse implements IInstancesListServerCasResponse {

                    /**
                     * Constructs a new InstancesListServerCasResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.IInstancesListServerCasResponse);

                    /** InstancesListServerCasResponse certs. */
                    public certs: google.cloud.sql.v1beta4.ISslCert[];

                    /** InstancesListServerCasResponse activeVersion. */
                    public activeVersion: string;

                    /** InstancesListServerCasResponse kind. */
                    public kind: string;

                    /**
                     * Creates a new InstancesListServerCasResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns InstancesListServerCasResponse instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.IInstancesListServerCasResponse): google.cloud.sql.v1beta4.InstancesListServerCasResponse;

                    /**
                     * Encodes the specified InstancesListServerCasResponse message. Does not implicitly {@link google.cloud.sql.v1beta4.InstancesListServerCasResponse.verify|verify} messages.
                     * @param message InstancesListServerCasResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.IInstancesListServerCasResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified InstancesListServerCasResponse message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.InstancesListServerCasResponse.verify|verify} messages.
                     * @param message InstancesListServerCasResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.IInstancesListServerCasResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an InstancesListServerCasResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns InstancesListServerCasResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.InstancesListServerCasResponse;

                    /**
                     * Decodes an InstancesListServerCasResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns InstancesListServerCasResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.InstancesListServerCasResponse;

                    /**
                     * Verifies an InstancesListServerCasResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an InstancesListServerCasResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns InstancesListServerCasResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.InstancesListServerCasResponse;

                    /**
                     * Creates a plain object from an InstancesListServerCasResponse message. Also converts values to other types if specified.
                     * @param message InstancesListServerCasResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.InstancesListServerCasResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this InstancesListServerCasResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an InstancesRestoreBackupRequest. */
                interface IInstancesRestoreBackupRequest {

                    /** InstancesRestoreBackupRequest restoreBackupContext */
                    restoreBackupContext?: (google.cloud.sql.v1beta4.IRestoreBackupContext|null);
                }

                /** Represents an InstancesRestoreBackupRequest. */
                class InstancesRestoreBackupRequest implements IInstancesRestoreBackupRequest {

                    /**
                     * Constructs a new InstancesRestoreBackupRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.IInstancesRestoreBackupRequest);

                    /** InstancesRestoreBackupRequest restoreBackupContext. */
                    public restoreBackupContext?: (google.cloud.sql.v1beta4.IRestoreBackupContext|null);

                    /**
                     * Creates a new InstancesRestoreBackupRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns InstancesRestoreBackupRequest instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.IInstancesRestoreBackupRequest): google.cloud.sql.v1beta4.InstancesRestoreBackupRequest;

                    /**
                     * Encodes the specified InstancesRestoreBackupRequest message. Does not implicitly {@link google.cloud.sql.v1beta4.InstancesRestoreBackupRequest.verify|verify} messages.
                     * @param message InstancesRestoreBackupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.IInstancesRestoreBackupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified InstancesRestoreBackupRequest message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.InstancesRestoreBackupRequest.verify|verify} messages.
                     * @param message InstancesRestoreBackupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.IInstancesRestoreBackupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an InstancesRestoreBackupRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns InstancesRestoreBackupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.InstancesRestoreBackupRequest;

                    /**
                     * Decodes an InstancesRestoreBackupRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns InstancesRestoreBackupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.InstancesRestoreBackupRequest;

                    /**
                     * Verifies an InstancesRestoreBackupRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an InstancesRestoreBackupRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns InstancesRestoreBackupRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.InstancesRestoreBackupRequest;

                    /**
                     * Creates a plain object from an InstancesRestoreBackupRequest message. Also converts values to other types if specified.
                     * @param message InstancesRestoreBackupRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.InstancesRestoreBackupRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this InstancesRestoreBackupRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an InstancesRotateServerCaRequest. */
                interface IInstancesRotateServerCaRequest {

                    /** InstancesRotateServerCaRequest rotateServerCaContext */
                    rotateServerCaContext?: (google.cloud.sql.v1beta4.IRotateServerCaContext|null);
                }

                /** Represents an InstancesRotateServerCaRequest. */
                class InstancesRotateServerCaRequest implements IInstancesRotateServerCaRequest {

                    /**
                     * Constructs a new InstancesRotateServerCaRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.IInstancesRotateServerCaRequest);

                    /** InstancesRotateServerCaRequest rotateServerCaContext. */
                    public rotateServerCaContext?: (google.cloud.sql.v1beta4.IRotateServerCaContext|null);

                    /**
                     * Creates a new InstancesRotateServerCaRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns InstancesRotateServerCaRequest instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.IInstancesRotateServerCaRequest): google.cloud.sql.v1beta4.InstancesRotateServerCaRequest;

                    /**
                     * Encodes the specified InstancesRotateServerCaRequest message. Does not implicitly {@link google.cloud.sql.v1beta4.InstancesRotateServerCaRequest.verify|verify} messages.
                     * @param message InstancesRotateServerCaRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.IInstancesRotateServerCaRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified InstancesRotateServerCaRequest message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.InstancesRotateServerCaRequest.verify|verify} messages.
                     * @param message InstancesRotateServerCaRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.IInstancesRotateServerCaRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an InstancesRotateServerCaRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns InstancesRotateServerCaRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.InstancesRotateServerCaRequest;

                    /**
                     * Decodes an InstancesRotateServerCaRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns InstancesRotateServerCaRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.InstancesRotateServerCaRequest;

                    /**
                     * Verifies an InstancesRotateServerCaRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an InstancesRotateServerCaRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns InstancesRotateServerCaRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.InstancesRotateServerCaRequest;

                    /**
                     * Creates a plain object from an InstancesRotateServerCaRequest message. Also converts values to other types if specified.
                     * @param message InstancesRotateServerCaRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.InstancesRotateServerCaRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this InstancesRotateServerCaRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an InstancesTruncateLogRequest. */
                interface IInstancesTruncateLogRequest {

                    /** InstancesTruncateLogRequest truncateLogContext */
                    truncateLogContext?: (google.cloud.sql.v1beta4.ITruncateLogContext|null);
                }

                /** Represents an InstancesTruncateLogRequest. */
                class InstancesTruncateLogRequest implements IInstancesTruncateLogRequest {

                    /**
                     * Constructs a new InstancesTruncateLogRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.IInstancesTruncateLogRequest);

                    /** InstancesTruncateLogRequest truncateLogContext. */
                    public truncateLogContext?: (google.cloud.sql.v1beta4.ITruncateLogContext|null);

                    /**
                     * Creates a new InstancesTruncateLogRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns InstancesTruncateLogRequest instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.IInstancesTruncateLogRequest): google.cloud.sql.v1beta4.InstancesTruncateLogRequest;

                    /**
                     * Encodes the specified InstancesTruncateLogRequest message. Does not implicitly {@link google.cloud.sql.v1beta4.InstancesTruncateLogRequest.verify|verify} messages.
                     * @param message InstancesTruncateLogRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.IInstancesTruncateLogRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified InstancesTruncateLogRequest message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.InstancesTruncateLogRequest.verify|verify} messages.
                     * @param message InstancesTruncateLogRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.IInstancesTruncateLogRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an InstancesTruncateLogRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns InstancesTruncateLogRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.InstancesTruncateLogRequest;

                    /**
                     * Decodes an InstancesTruncateLogRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns InstancesTruncateLogRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.InstancesTruncateLogRequest;

                    /**
                     * Verifies an InstancesTruncateLogRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an InstancesTruncateLogRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns InstancesTruncateLogRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.InstancesTruncateLogRequest;

                    /**
                     * Creates a plain object from an InstancesTruncateLogRequest message. Also converts values to other types if specified.
                     * @param message InstancesTruncateLogRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.InstancesTruncateLogRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this InstancesTruncateLogRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SqlInstancesVerifyExternalSyncSettingsResponse. */
                interface ISqlInstancesVerifyExternalSyncSettingsResponse {

                    /** SqlInstancesVerifyExternalSyncSettingsResponse kind */
                    kind?: (string|null);

                    /** SqlInstancesVerifyExternalSyncSettingsResponse errors */
                    errors?: (google.cloud.sql.v1beta4.ISqlExternalSyncSettingError[]|null);

                    /** SqlInstancesVerifyExternalSyncSettingsResponse warnings */
                    warnings?: (google.cloud.sql.v1beta4.ISqlExternalSyncSettingError[]|null);
                }

                /** Represents a SqlInstancesVerifyExternalSyncSettingsResponse. */
                class SqlInstancesVerifyExternalSyncSettingsResponse implements ISqlInstancesVerifyExternalSyncSettingsResponse {

                    /**
                     * Constructs a new SqlInstancesVerifyExternalSyncSettingsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.ISqlInstancesVerifyExternalSyncSettingsResponse);

                    /** SqlInstancesVerifyExternalSyncSettingsResponse kind. */
                    public kind: string;

                    /** SqlInstancesVerifyExternalSyncSettingsResponse errors. */
                    public errors: google.cloud.sql.v1beta4.ISqlExternalSyncSettingError[];

                    /** SqlInstancesVerifyExternalSyncSettingsResponse warnings. */
                    public warnings: google.cloud.sql.v1beta4.ISqlExternalSyncSettingError[];

                    /**
                     * Creates a new SqlInstancesVerifyExternalSyncSettingsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SqlInstancesVerifyExternalSyncSettingsResponse instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.ISqlInstancesVerifyExternalSyncSettingsResponse): google.cloud.sql.v1beta4.SqlInstancesVerifyExternalSyncSettingsResponse;

                    /**
                     * Encodes the specified SqlInstancesVerifyExternalSyncSettingsResponse message. Does not implicitly {@link google.cloud.sql.v1beta4.SqlInstancesVerifyExternalSyncSettingsResponse.verify|verify} messages.
                     * @param message SqlInstancesVerifyExternalSyncSettingsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.ISqlInstancesVerifyExternalSyncSettingsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SqlInstancesVerifyExternalSyncSettingsResponse message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.SqlInstancesVerifyExternalSyncSettingsResponse.verify|verify} messages.
                     * @param message SqlInstancesVerifyExternalSyncSettingsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.ISqlInstancesVerifyExternalSyncSettingsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SqlInstancesVerifyExternalSyncSettingsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SqlInstancesVerifyExternalSyncSettingsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.SqlInstancesVerifyExternalSyncSettingsResponse;

                    /**
                     * Decodes a SqlInstancesVerifyExternalSyncSettingsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SqlInstancesVerifyExternalSyncSettingsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.SqlInstancesVerifyExternalSyncSettingsResponse;

                    /**
                     * Verifies a SqlInstancesVerifyExternalSyncSettingsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SqlInstancesVerifyExternalSyncSettingsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SqlInstancesVerifyExternalSyncSettingsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.SqlInstancesVerifyExternalSyncSettingsResponse;

                    /**
                     * Creates a plain object from a SqlInstancesVerifyExternalSyncSettingsResponse message. Also converts values to other types if specified.
                     * @param message SqlInstancesVerifyExternalSyncSettingsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.SqlInstancesVerifyExternalSyncSettingsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SqlInstancesVerifyExternalSyncSettingsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SqlExternalSyncSettingError. */
                interface ISqlExternalSyncSettingError {

                    /** SqlExternalSyncSettingError kind */
                    kind?: (string|null);

                    /** SqlExternalSyncSettingError type */
                    type?: (google.cloud.sql.v1beta4.SqlExternalSyncSettingError.SqlExternalSyncSettingErrorType|keyof typeof google.cloud.sql.v1beta4.SqlExternalSyncSettingError.SqlExternalSyncSettingErrorType|null);

                    /** SqlExternalSyncSettingError detail */
                    detail?: (string|null);
                }

                /** Represents a SqlExternalSyncSettingError. */
                class SqlExternalSyncSettingError implements ISqlExternalSyncSettingError {

                    /**
                     * Constructs a new SqlExternalSyncSettingError.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.ISqlExternalSyncSettingError);

                    /** SqlExternalSyncSettingError kind. */
                    public kind: string;

                    /** SqlExternalSyncSettingError type. */
                    public type: (google.cloud.sql.v1beta4.SqlExternalSyncSettingError.SqlExternalSyncSettingErrorType|keyof typeof google.cloud.sql.v1beta4.SqlExternalSyncSettingError.SqlExternalSyncSettingErrorType);

                    /** SqlExternalSyncSettingError detail. */
                    public detail: string;

                    /**
                     * Creates a new SqlExternalSyncSettingError instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SqlExternalSyncSettingError instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.ISqlExternalSyncSettingError): google.cloud.sql.v1beta4.SqlExternalSyncSettingError;

                    /**
                     * Encodes the specified SqlExternalSyncSettingError message. Does not implicitly {@link google.cloud.sql.v1beta4.SqlExternalSyncSettingError.verify|verify} messages.
                     * @param message SqlExternalSyncSettingError message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.ISqlExternalSyncSettingError, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SqlExternalSyncSettingError message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.SqlExternalSyncSettingError.verify|verify} messages.
                     * @param message SqlExternalSyncSettingError message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.ISqlExternalSyncSettingError, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SqlExternalSyncSettingError message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SqlExternalSyncSettingError
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.SqlExternalSyncSettingError;

                    /**
                     * Decodes a SqlExternalSyncSettingError message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SqlExternalSyncSettingError
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.SqlExternalSyncSettingError;

                    /**
                     * Verifies a SqlExternalSyncSettingError message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SqlExternalSyncSettingError message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SqlExternalSyncSettingError
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.SqlExternalSyncSettingError;

                    /**
                     * Creates a plain object from a SqlExternalSyncSettingError message. Also converts values to other types if specified.
                     * @param message SqlExternalSyncSettingError
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.SqlExternalSyncSettingError, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SqlExternalSyncSettingError to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace SqlExternalSyncSettingError {

                    /** SqlExternalSyncSettingErrorType enum. */
                    enum SqlExternalSyncSettingErrorType {
                        SQL_EXTERNAL_SYNC_SETTING_ERROR_TYPE_UNSPECIFIED = 0,
                        CONNECTION_FAILURE = 1,
                        BINLOG_NOT_ENABLED = 2,
                        INCOMPATIBLE_DATABASE_VERSION = 3,
                        REPLICA_ALREADY_SETUP = 4,
                        INSUFFICIENT_PRIVILEGE = 5,
                        UNSUPPORTED_MIGRATION_TYPE = 6,
                        NO_PGLOGICAL_INSTALLED = 7,
                        PGLOGICAL_NODE_ALREADY_EXISTS = 8,
                        INVALID_WAL_LEVEL = 9,
                        INVALID_SHARED_PRELOAD_LIBRARY = 10,
                        INSUFFICIENT_MAX_REPLICATION_SLOTS = 11,
                        INSUFFICIENT_MAX_WAL_SENDERS = 12,
                        INSUFFICIENT_MAX_WORKER_PROCESSES = 13,
                        UNSUPPORTED_EXTENSIONS = 14,
                        INVALID_RDS_LOGICAL_REPLICATION = 15,
                        INVALID_LOGGING_SETUP = 16,
                        INVALID_DB_PARAM = 17,
                        UNSUPPORTED_GTID_MODE = 18,
                        SQLSERVER_AGENT_NOT_RUNNING = 19,
                        UNSUPPORTED_TABLE_DEFINITION = 20,
                        UNSUPPORTED_DEFINER = 21
                    }
                }

                /** Properties of an IpConfiguration. */
                interface IIpConfiguration {

                    /** IpConfiguration ipv4Enabled */
                    ipv4Enabled?: (google.protobuf.IBoolValue|null);

                    /** IpConfiguration privateNetwork */
                    privateNetwork?: (string|null);

                    /** IpConfiguration requireSsl */
                    requireSsl?: (google.protobuf.IBoolValue|null);

                    /** IpConfiguration authorizedNetworks */
                    authorizedNetworks?: (google.cloud.sql.v1beta4.IAclEntry[]|null);
                }

                /** Represents an IpConfiguration. */
                class IpConfiguration implements IIpConfiguration {

                    /**
                     * Constructs a new IpConfiguration.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.IIpConfiguration);

                    /** IpConfiguration ipv4Enabled. */
                    public ipv4Enabled?: (google.protobuf.IBoolValue|null);

                    /** IpConfiguration privateNetwork. */
                    public privateNetwork: string;

                    /** IpConfiguration requireSsl. */
                    public requireSsl?: (google.protobuf.IBoolValue|null);

                    /** IpConfiguration authorizedNetworks. */
                    public authorizedNetworks: google.cloud.sql.v1beta4.IAclEntry[];

                    /**
                     * Creates a new IpConfiguration instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns IpConfiguration instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.IIpConfiguration): google.cloud.sql.v1beta4.IpConfiguration;

                    /**
                     * Encodes the specified IpConfiguration message. Does not implicitly {@link google.cloud.sql.v1beta4.IpConfiguration.verify|verify} messages.
                     * @param message IpConfiguration message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.IIpConfiguration, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified IpConfiguration message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.IpConfiguration.verify|verify} messages.
                     * @param message IpConfiguration message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.IIpConfiguration, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an IpConfiguration message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns IpConfiguration
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.IpConfiguration;

                    /**
                     * Decodes an IpConfiguration message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns IpConfiguration
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.IpConfiguration;

                    /**
                     * Verifies an IpConfiguration message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an IpConfiguration message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns IpConfiguration
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.IpConfiguration;

                    /**
                     * Creates a plain object from an IpConfiguration message. Also converts values to other types if specified.
                     * @param message IpConfiguration
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.IpConfiguration, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this IpConfiguration to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an IpMapping. */
                interface IIpMapping {

                    /** IpMapping type */
                    type?: (google.cloud.sql.v1beta4.SqlIpAddressType|keyof typeof google.cloud.sql.v1beta4.SqlIpAddressType|null);

                    /** IpMapping ipAddress */
                    ipAddress?: (string|null);

                    /** IpMapping timeToRetire */
                    timeToRetire?: (google.protobuf.ITimestamp|null);
                }

                /** Represents an IpMapping. */
                class IpMapping implements IIpMapping {

                    /**
                     * Constructs a new IpMapping.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.IIpMapping);

                    /** IpMapping type. */
                    public type: (google.cloud.sql.v1beta4.SqlIpAddressType|keyof typeof google.cloud.sql.v1beta4.SqlIpAddressType);

                    /** IpMapping ipAddress. */
                    public ipAddress: string;

                    /** IpMapping timeToRetire. */
                    public timeToRetire?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new IpMapping instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns IpMapping instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.IIpMapping): google.cloud.sql.v1beta4.IpMapping;

                    /**
                     * Encodes the specified IpMapping message. Does not implicitly {@link google.cloud.sql.v1beta4.IpMapping.verify|verify} messages.
                     * @param message IpMapping message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.IIpMapping, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified IpMapping message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.IpMapping.verify|verify} messages.
                     * @param message IpMapping message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.IIpMapping, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an IpMapping message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns IpMapping
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.IpMapping;

                    /**
                     * Decodes an IpMapping message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns IpMapping
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.IpMapping;

                    /**
                     * Verifies an IpMapping message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an IpMapping message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns IpMapping
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.IpMapping;

                    /**
                     * Creates a plain object from an IpMapping message. Also converts values to other types if specified.
                     * @param message IpMapping
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.IpMapping, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this IpMapping to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a LocationPreference. */
                interface ILocationPreference {

                    /** LocationPreference followGaeApplication */
                    followGaeApplication?: (string|null);

                    /** LocationPreference zone */
                    zone?: (string|null);

                    /** LocationPreference secondaryZone */
                    secondaryZone?: (string|null);

                    /** LocationPreference kind */
                    kind?: (string|null);
                }

                /** Represents a LocationPreference. */
                class LocationPreference implements ILocationPreference {

                    /**
                     * Constructs a new LocationPreference.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.ILocationPreference);

                    /** LocationPreference followGaeApplication. */
                    public followGaeApplication: string;

                    /** LocationPreference zone. */
                    public zone: string;

                    /** LocationPreference secondaryZone. */
                    public secondaryZone: string;

                    /** LocationPreference kind. */
                    public kind: string;

                    /**
                     * Creates a new LocationPreference instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns LocationPreference instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.ILocationPreference): google.cloud.sql.v1beta4.LocationPreference;

                    /**
                     * Encodes the specified LocationPreference message. Does not implicitly {@link google.cloud.sql.v1beta4.LocationPreference.verify|verify} messages.
                     * @param message LocationPreference message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.ILocationPreference, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified LocationPreference message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.LocationPreference.verify|verify} messages.
                     * @param message LocationPreference message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.ILocationPreference, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a LocationPreference message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns LocationPreference
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.LocationPreference;

                    /**
                     * Decodes a LocationPreference message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns LocationPreference
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.LocationPreference;

                    /**
                     * Verifies a LocationPreference message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a LocationPreference message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns LocationPreference
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.LocationPreference;

                    /**
                     * Creates a plain object from a LocationPreference message. Also converts values to other types if specified.
                     * @param message LocationPreference
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.LocationPreference, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this LocationPreference to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a MaintenanceWindow. */
                interface IMaintenanceWindow {

                    /** MaintenanceWindow hour */
                    hour?: (google.protobuf.IInt32Value|null);

                    /** MaintenanceWindow day */
                    day?: (google.protobuf.IInt32Value|null);

                    /** MaintenanceWindow updateTrack */
                    updateTrack?: (google.cloud.sql.v1beta4.SqlUpdateTrack|keyof typeof google.cloud.sql.v1beta4.SqlUpdateTrack|null);

                    /** MaintenanceWindow kind */
                    kind?: (string|null);
                }

                /** Represents a MaintenanceWindow. */
                class MaintenanceWindow implements IMaintenanceWindow {

                    /**
                     * Constructs a new MaintenanceWindow.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.IMaintenanceWindow);

                    /** MaintenanceWindow hour. */
                    public hour?: (google.protobuf.IInt32Value|null);

                    /** MaintenanceWindow day. */
                    public day?: (google.protobuf.IInt32Value|null);

                    /** MaintenanceWindow updateTrack. */
                    public updateTrack: (google.cloud.sql.v1beta4.SqlUpdateTrack|keyof typeof google.cloud.sql.v1beta4.SqlUpdateTrack);

                    /** MaintenanceWindow kind. */
                    public kind: string;

                    /**
                     * Creates a new MaintenanceWindow instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MaintenanceWindow instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.IMaintenanceWindow): google.cloud.sql.v1beta4.MaintenanceWindow;

                    /**
                     * Encodes the specified MaintenanceWindow message. Does not implicitly {@link google.cloud.sql.v1beta4.MaintenanceWindow.verify|verify} messages.
                     * @param message MaintenanceWindow message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.IMaintenanceWindow, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MaintenanceWindow message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.MaintenanceWindow.verify|verify} messages.
                     * @param message MaintenanceWindow message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.IMaintenanceWindow, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MaintenanceWindow message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MaintenanceWindow
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.MaintenanceWindow;

                    /**
                     * Decodes a MaintenanceWindow message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MaintenanceWindow
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.MaintenanceWindow;

                    /**
                     * Verifies a MaintenanceWindow message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MaintenanceWindow message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MaintenanceWindow
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.MaintenanceWindow;

                    /**
                     * Creates a plain object from a MaintenanceWindow message. Also converts values to other types if specified.
                     * @param message MaintenanceWindow
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.MaintenanceWindow, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MaintenanceWindow to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DenyMaintenancePeriod. */
                interface IDenyMaintenancePeriod {

                    /** DenyMaintenancePeriod startDate */
                    startDate?: (string|null);

                    /** DenyMaintenancePeriod endDate */
                    endDate?: (string|null);

                    /** DenyMaintenancePeriod time */
                    time?: (string|null);
                }

                /** Represents a DenyMaintenancePeriod. */
                class DenyMaintenancePeriod implements IDenyMaintenancePeriod {

                    /**
                     * Constructs a new DenyMaintenancePeriod.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.IDenyMaintenancePeriod);

                    /** DenyMaintenancePeriod startDate. */
                    public startDate: string;

                    /** DenyMaintenancePeriod endDate. */
                    public endDate: string;

                    /** DenyMaintenancePeriod time. */
                    public time: string;

                    /**
                     * Creates a new DenyMaintenancePeriod instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DenyMaintenancePeriod instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.IDenyMaintenancePeriod): google.cloud.sql.v1beta4.DenyMaintenancePeriod;

                    /**
                     * Encodes the specified DenyMaintenancePeriod message. Does not implicitly {@link google.cloud.sql.v1beta4.DenyMaintenancePeriod.verify|verify} messages.
                     * @param message DenyMaintenancePeriod message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.IDenyMaintenancePeriod, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DenyMaintenancePeriod message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.DenyMaintenancePeriod.verify|verify} messages.
                     * @param message DenyMaintenancePeriod message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.IDenyMaintenancePeriod, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DenyMaintenancePeriod message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DenyMaintenancePeriod
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.DenyMaintenancePeriod;

                    /**
                     * Decodes a DenyMaintenancePeriod message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DenyMaintenancePeriod
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.DenyMaintenancePeriod;

                    /**
                     * Verifies a DenyMaintenancePeriod message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DenyMaintenancePeriod message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DenyMaintenancePeriod
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.DenyMaintenancePeriod;

                    /**
                     * Creates a plain object from a DenyMaintenancePeriod message. Also converts values to other types if specified.
                     * @param message DenyMaintenancePeriod
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.DenyMaintenancePeriod, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DenyMaintenancePeriod to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an InsightsConfig. */
                interface IInsightsConfig {

                    /** InsightsConfig queryInsightsEnabled */
                    queryInsightsEnabled?: (boolean|null);

                    /** InsightsConfig recordClientAddress */
                    recordClientAddress?: (boolean|null);

                    /** InsightsConfig recordApplicationTags */
                    recordApplicationTags?: (boolean|null);

                    /** InsightsConfig queryStringLength */
                    queryStringLength?: (google.protobuf.IInt32Value|null);

                    /** InsightsConfig queryPlansPerMinute */
                    queryPlansPerMinute?: (google.protobuf.IInt32Value|null);
                }

                /** Represents an InsightsConfig. */
                class InsightsConfig implements IInsightsConfig {

                    /**
                     * Constructs a new InsightsConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.IInsightsConfig);

                    /** InsightsConfig queryInsightsEnabled. */
                    public queryInsightsEnabled: boolean;

                    /** InsightsConfig recordClientAddress. */
                    public recordClientAddress: boolean;

                    /** InsightsConfig recordApplicationTags. */
                    public recordApplicationTags: boolean;

                    /** InsightsConfig queryStringLength. */
                    public queryStringLength?: (google.protobuf.IInt32Value|null);

                    /** InsightsConfig queryPlansPerMinute. */
                    public queryPlansPerMinute?: (google.protobuf.IInt32Value|null);

                    /**
                     * Creates a new InsightsConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns InsightsConfig instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.IInsightsConfig): google.cloud.sql.v1beta4.InsightsConfig;

                    /**
                     * Encodes the specified InsightsConfig message. Does not implicitly {@link google.cloud.sql.v1beta4.InsightsConfig.verify|verify} messages.
                     * @param message InsightsConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.IInsightsConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified InsightsConfig message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.InsightsConfig.verify|verify} messages.
                     * @param message InsightsConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.IInsightsConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an InsightsConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns InsightsConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.InsightsConfig;

                    /**
                     * Decodes an InsightsConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns InsightsConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.InsightsConfig;

                    /**
                     * Verifies an InsightsConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an InsightsConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns InsightsConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.InsightsConfig;

                    /**
                     * Creates a plain object from an InsightsConfig message. Also converts values to other types if specified.
                     * @param message InsightsConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.InsightsConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this InsightsConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a MySqlReplicaConfiguration. */
                interface IMySqlReplicaConfiguration {

                    /** MySqlReplicaConfiguration dumpFilePath */
                    dumpFilePath?: (string|null);

                    /** MySqlReplicaConfiguration username */
                    username?: (string|null);

                    /** MySqlReplicaConfiguration password */
                    password?: (string|null);

                    /** MySqlReplicaConfiguration connectRetryInterval */
                    connectRetryInterval?: (google.protobuf.IInt32Value|null);

                    /** MySqlReplicaConfiguration masterHeartbeatPeriod */
                    masterHeartbeatPeriod?: (google.protobuf.IInt64Value|null);

                    /** MySqlReplicaConfiguration caCertificate */
                    caCertificate?: (string|null);

                    /** MySqlReplicaConfiguration clientCertificate */
                    clientCertificate?: (string|null);

                    /** MySqlReplicaConfiguration clientKey */
                    clientKey?: (string|null);

                    /** MySqlReplicaConfiguration sslCipher */
                    sslCipher?: (string|null);

                    /** MySqlReplicaConfiguration verifyServerCertificate */
                    verifyServerCertificate?: (google.protobuf.IBoolValue|null);

                    /** MySqlReplicaConfiguration kind */
                    kind?: (string|null);
                }

                /** Represents a MySqlReplicaConfiguration. */
                class MySqlReplicaConfiguration implements IMySqlReplicaConfiguration {

                    /**
                     * Constructs a new MySqlReplicaConfiguration.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.IMySqlReplicaConfiguration);

                    /** MySqlReplicaConfiguration dumpFilePath. */
                    public dumpFilePath: string;

                    /** MySqlReplicaConfiguration username. */
                    public username: string;

                    /** MySqlReplicaConfiguration password. */
                    public password: string;

                    /** MySqlReplicaConfiguration connectRetryInterval. */
                    public connectRetryInterval?: (google.protobuf.IInt32Value|null);

                    /** MySqlReplicaConfiguration masterHeartbeatPeriod. */
                    public masterHeartbeatPeriod?: (google.protobuf.IInt64Value|null);

                    /** MySqlReplicaConfiguration caCertificate. */
                    public caCertificate: string;

                    /** MySqlReplicaConfiguration clientCertificate. */
                    public clientCertificate: string;

                    /** MySqlReplicaConfiguration clientKey. */
                    public clientKey: string;

                    /** MySqlReplicaConfiguration sslCipher. */
                    public sslCipher: string;

                    /** MySqlReplicaConfiguration verifyServerCertificate. */
                    public verifyServerCertificate?: (google.protobuf.IBoolValue|null);

                    /** MySqlReplicaConfiguration kind. */
                    public kind: string;

                    /**
                     * Creates a new MySqlReplicaConfiguration instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MySqlReplicaConfiguration instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.IMySqlReplicaConfiguration): google.cloud.sql.v1beta4.MySqlReplicaConfiguration;

                    /**
                     * Encodes the specified MySqlReplicaConfiguration message. Does not implicitly {@link google.cloud.sql.v1beta4.MySqlReplicaConfiguration.verify|verify} messages.
                     * @param message MySqlReplicaConfiguration message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.IMySqlReplicaConfiguration, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MySqlReplicaConfiguration message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.MySqlReplicaConfiguration.verify|verify} messages.
                     * @param message MySqlReplicaConfiguration message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.IMySqlReplicaConfiguration, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MySqlReplicaConfiguration message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MySqlReplicaConfiguration
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.MySqlReplicaConfiguration;

                    /**
                     * Decodes a MySqlReplicaConfiguration message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MySqlReplicaConfiguration
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.MySqlReplicaConfiguration;

                    /**
                     * Verifies a MySqlReplicaConfiguration message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MySqlReplicaConfiguration message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MySqlReplicaConfiguration
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.MySqlReplicaConfiguration;

                    /**
                     * Creates a plain object from a MySqlReplicaConfiguration message. Also converts values to other types if specified.
                     * @param message MySqlReplicaConfiguration
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.MySqlReplicaConfiguration, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MySqlReplicaConfiguration to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an OnPremisesConfiguration. */
                interface IOnPremisesConfiguration {

                    /** OnPremisesConfiguration hostPort */
                    hostPort?: (string|null);

                    /** OnPremisesConfiguration kind */
                    kind?: (string|null);

                    /** OnPremisesConfiguration username */
                    username?: (string|null);

                    /** OnPremisesConfiguration password */
                    password?: (string|null);

                    /** OnPremisesConfiguration caCertificate */
                    caCertificate?: (string|null);

                    /** OnPremisesConfiguration clientCertificate */
                    clientCertificate?: (string|null);

                    /** OnPremisesConfiguration clientKey */
                    clientKey?: (string|null);

                    /** OnPremisesConfiguration dumpFilePath */
                    dumpFilePath?: (string|null);
                }

                /** Represents an OnPremisesConfiguration. */
                class OnPremisesConfiguration implements IOnPremisesConfiguration {

                    /**
                     * Constructs a new OnPremisesConfiguration.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.IOnPremisesConfiguration);

                    /** OnPremisesConfiguration hostPort. */
                    public hostPort: string;

                    /** OnPremisesConfiguration kind. */
                    public kind: string;

                    /** OnPremisesConfiguration username. */
                    public username: string;

                    /** OnPremisesConfiguration password. */
                    public password: string;

                    /** OnPremisesConfiguration caCertificate. */
                    public caCertificate: string;

                    /** OnPremisesConfiguration clientCertificate. */
                    public clientCertificate: string;

                    /** OnPremisesConfiguration clientKey. */
                    public clientKey: string;

                    /** OnPremisesConfiguration dumpFilePath. */
                    public dumpFilePath: string;

                    /**
                     * Creates a new OnPremisesConfiguration instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OnPremisesConfiguration instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.IOnPremisesConfiguration): google.cloud.sql.v1beta4.OnPremisesConfiguration;

                    /**
                     * Encodes the specified OnPremisesConfiguration message. Does not implicitly {@link google.cloud.sql.v1beta4.OnPremisesConfiguration.verify|verify} messages.
                     * @param message OnPremisesConfiguration message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.IOnPremisesConfiguration, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OnPremisesConfiguration message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.OnPremisesConfiguration.verify|verify} messages.
                     * @param message OnPremisesConfiguration message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.IOnPremisesConfiguration, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OnPremisesConfiguration message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OnPremisesConfiguration
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.OnPremisesConfiguration;

                    /**
                     * Decodes an OnPremisesConfiguration message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OnPremisesConfiguration
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.OnPremisesConfiguration;

                    /**
                     * Verifies an OnPremisesConfiguration message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an OnPremisesConfiguration message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns OnPremisesConfiguration
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.OnPremisesConfiguration;

                    /**
                     * Creates a plain object from an OnPremisesConfiguration message. Also converts values to other types if specified.
                     * @param message OnPremisesConfiguration
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.OnPremisesConfiguration, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OnPremisesConfiguration to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DiskEncryptionConfiguration. */
                interface IDiskEncryptionConfiguration {

                    /** DiskEncryptionConfiguration kmsKeyName */
                    kmsKeyName?: (string|null);

                    /** DiskEncryptionConfiguration kind */
                    kind?: (string|null);
                }

                /** Represents a DiskEncryptionConfiguration. */
                class DiskEncryptionConfiguration implements IDiskEncryptionConfiguration {

                    /**
                     * Constructs a new DiskEncryptionConfiguration.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.IDiskEncryptionConfiguration);

                    /** DiskEncryptionConfiguration kmsKeyName. */
                    public kmsKeyName: string;

                    /** DiskEncryptionConfiguration kind. */
                    public kind: string;

                    /**
                     * Creates a new DiskEncryptionConfiguration instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DiskEncryptionConfiguration instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.IDiskEncryptionConfiguration): google.cloud.sql.v1beta4.DiskEncryptionConfiguration;

                    /**
                     * Encodes the specified DiskEncryptionConfiguration message. Does not implicitly {@link google.cloud.sql.v1beta4.DiskEncryptionConfiguration.verify|verify} messages.
                     * @param message DiskEncryptionConfiguration message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.IDiskEncryptionConfiguration, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DiskEncryptionConfiguration message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.DiskEncryptionConfiguration.verify|verify} messages.
                     * @param message DiskEncryptionConfiguration message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.IDiskEncryptionConfiguration, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DiskEncryptionConfiguration message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DiskEncryptionConfiguration
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.DiskEncryptionConfiguration;

                    /**
                     * Decodes a DiskEncryptionConfiguration message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DiskEncryptionConfiguration
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.DiskEncryptionConfiguration;

                    /**
                     * Verifies a DiskEncryptionConfiguration message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DiskEncryptionConfiguration message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DiskEncryptionConfiguration
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.DiskEncryptionConfiguration;

                    /**
                     * Creates a plain object from a DiskEncryptionConfiguration message. Also converts values to other types if specified.
                     * @param message DiskEncryptionConfiguration
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.DiskEncryptionConfiguration, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DiskEncryptionConfiguration to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DiskEncryptionStatus. */
                interface IDiskEncryptionStatus {

                    /** DiskEncryptionStatus kmsKeyVersionName */
                    kmsKeyVersionName?: (string|null);

                    /** DiskEncryptionStatus kind */
                    kind?: (string|null);
                }

                /** Represents a DiskEncryptionStatus. */
                class DiskEncryptionStatus implements IDiskEncryptionStatus {

                    /**
                     * Constructs a new DiskEncryptionStatus.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.IDiskEncryptionStatus);

                    /** DiskEncryptionStatus kmsKeyVersionName. */
                    public kmsKeyVersionName: string;

                    /** DiskEncryptionStatus kind. */
                    public kind: string;

                    /**
                     * Creates a new DiskEncryptionStatus instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DiskEncryptionStatus instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.IDiskEncryptionStatus): google.cloud.sql.v1beta4.DiskEncryptionStatus;

                    /**
                     * Encodes the specified DiskEncryptionStatus message. Does not implicitly {@link google.cloud.sql.v1beta4.DiskEncryptionStatus.verify|verify} messages.
                     * @param message DiskEncryptionStatus message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.IDiskEncryptionStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DiskEncryptionStatus message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.DiskEncryptionStatus.verify|verify} messages.
                     * @param message DiskEncryptionStatus message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.IDiskEncryptionStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DiskEncryptionStatus message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DiskEncryptionStatus
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.DiskEncryptionStatus;

                    /**
                     * Decodes a DiskEncryptionStatus message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DiskEncryptionStatus
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.DiskEncryptionStatus;

                    /**
                     * Verifies a DiskEncryptionStatus message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DiskEncryptionStatus message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DiskEncryptionStatus
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.DiskEncryptionStatus;

                    /**
                     * Creates a plain object from a DiskEncryptionStatus message. Also converts values to other types if specified.
                     * @param message DiskEncryptionStatus
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.DiskEncryptionStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DiskEncryptionStatus to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an Operation. */
                interface IOperation {

                    /** Operation kind */
                    kind?: (string|null);

                    /** Operation targetLink */
                    targetLink?: (string|null);

                    /** Operation status */
                    status?: (google.cloud.sql.v1beta4.Operation.SqlOperationStatus|keyof typeof google.cloud.sql.v1beta4.Operation.SqlOperationStatus|null);

                    /** Operation user */
                    user?: (string|null);

                    /** Operation insertTime */
                    insertTime?: (google.protobuf.ITimestamp|null);

                    /** Operation startTime */
                    startTime?: (google.protobuf.ITimestamp|null);

                    /** Operation endTime */
                    endTime?: (google.protobuf.ITimestamp|null);

                    /** Operation error */
                    error?: (google.cloud.sql.v1beta4.IOperationErrors|null);

                    /** Operation operationType */
                    operationType?: (google.cloud.sql.v1beta4.Operation.SqlOperationType|keyof typeof google.cloud.sql.v1beta4.Operation.SqlOperationType|null);

                    /** Operation importContext */
                    importContext?: (google.cloud.sql.v1beta4.IImportContext|null);

                    /** Operation exportContext */
                    exportContext?: (google.cloud.sql.v1beta4.IExportContext|null);

                    /** Operation backupContext */
                    backupContext?: (google.cloud.sql.v1beta4.IBackupContext|null);

                    /** Operation name */
                    name?: (string|null);

                    /** Operation targetId */
                    targetId?: (string|null);

                    /** Operation selfLink */
                    selfLink?: (string|null);

                    /** Operation targetProject */
                    targetProject?: (string|null);
                }

                /** Represents an Operation. */
                class Operation implements IOperation {

                    /**
                     * Constructs a new Operation.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.IOperation);

                    /** Operation kind. */
                    public kind: string;

                    /** Operation targetLink. */
                    public targetLink: string;

                    /** Operation status. */
                    public status: (google.cloud.sql.v1beta4.Operation.SqlOperationStatus|keyof typeof google.cloud.sql.v1beta4.Operation.SqlOperationStatus);

                    /** Operation user. */
                    public user: string;

                    /** Operation insertTime. */
                    public insertTime?: (google.protobuf.ITimestamp|null);

                    /** Operation startTime. */
                    public startTime?: (google.protobuf.ITimestamp|null);

                    /** Operation endTime. */
                    public endTime?: (google.protobuf.ITimestamp|null);

                    /** Operation error. */
                    public error?: (google.cloud.sql.v1beta4.IOperationErrors|null);

                    /** Operation operationType. */
                    public operationType: (google.cloud.sql.v1beta4.Operation.SqlOperationType|keyof typeof google.cloud.sql.v1beta4.Operation.SqlOperationType);

                    /** Operation importContext. */
                    public importContext?: (google.cloud.sql.v1beta4.IImportContext|null);

                    /** Operation exportContext. */
                    public exportContext?: (google.cloud.sql.v1beta4.IExportContext|null);

                    /** Operation backupContext. */
                    public backupContext?: (google.cloud.sql.v1beta4.IBackupContext|null);

                    /** Operation name. */
                    public name: string;

                    /** Operation targetId. */
                    public targetId: string;

                    /** Operation selfLink. */
                    public selfLink: string;

                    /** Operation targetProject. */
                    public targetProject: string;

                    /**
                     * Creates a new Operation instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Operation instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.IOperation): google.cloud.sql.v1beta4.Operation;

                    /**
                     * Encodes the specified Operation message. Does not implicitly {@link google.cloud.sql.v1beta4.Operation.verify|verify} messages.
                     * @param message Operation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.IOperation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Operation message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.Operation.verify|verify} messages.
                     * @param message Operation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.IOperation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Operation message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Operation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.Operation;

                    /**
                     * Decodes an Operation message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Operation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.Operation;

                    /**
                     * Verifies an Operation message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Operation message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Operation
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.Operation;

                    /**
                     * Creates a plain object from an Operation message. Also converts values to other types if specified.
                     * @param message Operation
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.Operation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Operation to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Operation {

                    /** SqlOperationType enum. */
                    enum SqlOperationType {
                        SQL_OPERATION_TYPE_UNSPECIFIED = 0,
                        IMPORT = 1,
                        EXPORT = 2,
                        CREATE = 3,
                        UPDATE = 4,
                        DELETE = 5,
                        RESTART = 6,
                        BACKUP = 7,
                        SNAPSHOT = 8,
                        BACKUP_VOLUME = 9,
                        DELETE_VOLUME = 10,
                        RESTORE_VOLUME = 11,
                        INJECT_USER = 12,
                        CLONE = 14,
                        STOP_REPLICA = 15,
                        START_REPLICA = 16,
                        PROMOTE_REPLICA = 17,
                        CREATE_REPLICA = 18,
                        CREATE_USER = 19,
                        DELETE_USER = 20,
                        UPDATE_USER = 21,
                        CREATE_DATABASE = 22,
                        DELETE_DATABASE = 23,
                        UPDATE_DATABASE = 24,
                        FAILOVER = 25,
                        DELETE_BACKUP = 26,
                        RECREATE_REPLICA = 27,
                        TRUNCATE_LOG = 28,
                        DEMOTE_MASTER = 29,
                        MAINTENANCE = 30,
                        ENABLE_PRIVATE_IP = 31,
                        DEFER_MAINTENANCE = 32,
                        CREATE_CLONE = 33,
                        RESCHEDULE_MAINTENANCE = 34,
                        START_EXTERNAL_SYNC = 35
                    }

                    /** SqlOperationStatus enum. */
                    enum SqlOperationStatus {
                        SQL_OPERATION_STATUS_UNSPECIFIED = 0,
                        PENDING = 1,
                        RUNNING = 2,
                        DONE = 3
                    }
                }

                /** Properties of an OperationError. */
                interface IOperationError {

                    /** OperationError kind */
                    kind?: (string|null);

                    /** OperationError code */
                    code?: (string|null);

                    /** OperationError message */
                    message?: (string|null);
                }

                /** Represents an OperationError. */
                class OperationError implements IOperationError {

                    /**
                     * Constructs a new OperationError.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.IOperationError);

                    /** OperationError kind. */
                    public kind: string;

                    /** OperationError code. */
                    public code: string;

                    /** OperationError message. */
                    public message: string;

                    /**
                     * Creates a new OperationError instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OperationError instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.IOperationError): google.cloud.sql.v1beta4.OperationError;

                    /**
                     * Encodes the specified OperationError message. Does not implicitly {@link google.cloud.sql.v1beta4.OperationError.verify|verify} messages.
                     * @param message OperationError message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.IOperationError, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OperationError message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.OperationError.verify|verify} messages.
                     * @param message OperationError message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.IOperationError, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OperationError message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OperationError
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.OperationError;

                    /**
                     * Decodes an OperationError message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OperationError
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.OperationError;

                    /**
                     * Verifies an OperationError message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an OperationError message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns OperationError
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.OperationError;

                    /**
                     * Creates a plain object from an OperationError message. Also converts values to other types if specified.
                     * @param message OperationError
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.OperationError, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OperationError to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an OperationErrors. */
                interface IOperationErrors {

                    /** OperationErrors kind */
                    kind?: (string|null);

                    /** OperationErrors errors */
                    errors?: (google.cloud.sql.v1beta4.IOperationError[]|null);
                }

                /** Represents an OperationErrors. */
                class OperationErrors implements IOperationErrors {

                    /**
                     * Constructs a new OperationErrors.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.IOperationErrors);

                    /** OperationErrors kind. */
                    public kind: string;

                    /** OperationErrors errors. */
                    public errors: google.cloud.sql.v1beta4.IOperationError[];

                    /**
                     * Creates a new OperationErrors instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OperationErrors instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.IOperationErrors): google.cloud.sql.v1beta4.OperationErrors;

                    /**
                     * Encodes the specified OperationErrors message. Does not implicitly {@link google.cloud.sql.v1beta4.OperationErrors.verify|verify} messages.
                     * @param message OperationErrors message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.IOperationErrors, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OperationErrors message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.OperationErrors.verify|verify} messages.
                     * @param message OperationErrors message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.IOperationErrors, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OperationErrors message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OperationErrors
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.OperationErrors;

                    /**
                     * Decodes an OperationErrors message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OperationErrors
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.OperationErrors;

                    /**
                     * Verifies an OperationErrors message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an OperationErrors message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns OperationErrors
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.OperationErrors;

                    /**
                     * Creates a plain object from an OperationErrors message. Also converts values to other types if specified.
                     * @param message OperationErrors
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.OperationErrors, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OperationErrors to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an OperationsListResponse. */
                interface IOperationsListResponse {

                    /** OperationsListResponse kind */
                    kind?: (string|null);

                    /** OperationsListResponse items */
                    items?: (google.cloud.sql.v1beta4.IOperation[]|null);

                    /** OperationsListResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents an OperationsListResponse. */
                class OperationsListResponse implements IOperationsListResponse {

                    /**
                     * Constructs a new OperationsListResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.IOperationsListResponse);

                    /** OperationsListResponse kind. */
                    public kind: string;

                    /** OperationsListResponse items. */
                    public items: google.cloud.sql.v1beta4.IOperation[];

                    /** OperationsListResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new OperationsListResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OperationsListResponse instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.IOperationsListResponse): google.cloud.sql.v1beta4.OperationsListResponse;

                    /**
                     * Encodes the specified OperationsListResponse message. Does not implicitly {@link google.cloud.sql.v1beta4.OperationsListResponse.verify|verify} messages.
                     * @param message OperationsListResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.IOperationsListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OperationsListResponse message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.OperationsListResponse.verify|verify} messages.
                     * @param message OperationsListResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.IOperationsListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OperationsListResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OperationsListResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.OperationsListResponse;

                    /**
                     * Decodes an OperationsListResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OperationsListResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.OperationsListResponse;

                    /**
                     * Verifies an OperationsListResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an OperationsListResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns OperationsListResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.OperationsListResponse;

                    /**
                     * Creates a plain object from an OperationsListResponse message. Also converts values to other types if specified.
                     * @param message OperationsListResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.OperationsListResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OperationsListResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ReplicaConfiguration. */
                interface IReplicaConfiguration {

                    /** ReplicaConfiguration kind */
                    kind?: (string|null);

                    /** ReplicaConfiguration mysqlReplicaConfiguration */
                    mysqlReplicaConfiguration?: (google.cloud.sql.v1beta4.IMySqlReplicaConfiguration|null);

                    /** ReplicaConfiguration failoverTarget */
                    failoverTarget?: (google.protobuf.IBoolValue|null);
                }

                /** Represents a ReplicaConfiguration. */
                class ReplicaConfiguration implements IReplicaConfiguration {

                    /**
                     * Constructs a new ReplicaConfiguration.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.IReplicaConfiguration);

                    /** ReplicaConfiguration kind. */
                    public kind: string;

                    /** ReplicaConfiguration mysqlReplicaConfiguration. */
                    public mysqlReplicaConfiguration?: (google.cloud.sql.v1beta4.IMySqlReplicaConfiguration|null);

                    /** ReplicaConfiguration failoverTarget. */
                    public failoverTarget?: (google.protobuf.IBoolValue|null);

                    /**
                     * Creates a new ReplicaConfiguration instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ReplicaConfiguration instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.IReplicaConfiguration): google.cloud.sql.v1beta4.ReplicaConfiguration;

                    /**
                     * Encodes the specified ReplicaConfiguration message. Does not implicitly {@link google.cloud.sql.v1beta4.ReplicaConfiguration.verify|verify} messages.
                     * @param message ReplicaConfiguration message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.IReplicaConfiguration, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ReplicaConfiguration message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.ReplicaConfiguration.verify|verify} messages.
                     * @param message ReplicaConfiguration message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.IReplicaConfiguration, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ReplicaConfiguration message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ReplicaConfiguration
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.ReplicaConfiguration;

                    /**
                     * Decodes a ReplicaConfiguration message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ReplicaConfiguration
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.ReplicaConfiguration;

                    /**
                     * Verifies a ReplicaConfiguration message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ReplicaConfiguration message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ReplicaConfiguration
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.ReplicaConfiguration;

                    /**
                     * Creates a plain object from a ReplicaConfiguration message. Also converts values to other types if specified.
                     * @param message ReplicaConfiguration
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.ReplicaConfiguration, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ReplicaConfiguration to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a RestoreBackupContext. */
                interface IRestoreBackupContext {

                    /** RestoreBackupContext kind */
                    kind?: (string|null);

                    /** RestoreBackupContext backupRunId */
                    backupRunId?: (number|Long|string|null);

                    /** RestoreBackupContext instanceId */
                    instanceId?: (string|null);

                    /** RestoreBackupContext project */
                    project?: (string|null);
                }

                /** Represents a RestoreBackupContext. */
                class RestoreBackupContext implements IRestoreBackupContext {

                    /**
                     * Constructs a new RestoreBackupContext.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.IRestoreBackupContext);

                    /** RestoreBackupContext kind. */
                    public kind: string;

                    /** RestoreBackupContext backupRunId. */
                    public backupRunId: (number|Long|string);

                    /** RestoreBackupContext instanceId. */
                    public instanceId: string;

                    /** RestoreBackupContext project. */
                    public project: string;

                    /**
                     * Creates a new RestoreBackupContext instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RestoreBackupContext instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.IRestoreBackupContext): google.cloud.sql.v1beta4.RestoreBackupContext;

                    /**
                     * Encodes the specified RestoreBackupContext message. Does not implicitly {@link google.cloud.sql.v1beta4.RestoreBackupContext.verify|verify} messages.
                     * @param message RestoreBackupContext message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.IRestoreBackupContext, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RestoreBackupContext message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.RestoreBackupContext.verify|verify} messages.
                     * @param message RestoreBackupContext message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.IRestoreBackupContext, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RestoreBackupContext message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RestoreBackupContext
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.RestoreBackupContext;

                    /**
                     * Decodes a RestoreBackupContext message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RestoreBackupContext
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.RestoreBackupContext;

                    /**
                     * Verifies a RestoreBackupContext message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RestoreBackupContext message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RestoreBackupContext
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.RestoreBackupContext;

                    /**
                     * Creates a plain object from a RestoreBackupContext message. Also converts values to other types if specified.
                     * @param message RestoreBackupContext
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.RestoreBackupContext, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RestoreBackupContext to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a RotateServerCaContext. */
                interface IRotateServerCaContext {

                    /** RotateServerCaContext kind */
                    kind?: (string|null);

                    /** RotateServerCaContext nextVersion */
                    nextVersion?: (string|null);
                }

                /** Represents a RotateServerCaContext. */
                class RotateServerCaContext implements IRotateServerCaContext {

                    /**
                     * Constructs a new RotateServerCaContext.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.IRotateServerCaContext);

                    /** RotateServerCaContext kind. */
                    public kind: string;

                    /** RotateServerCaContext nextVersion. */
                    public nextVersion: string;

                    /**
                     * Creates a new RotateServerCaContext instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RotateServerCaContext instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.IRotateServerCaContext): google.cloud.sql.v1beta4.RotateServerCaContext;

                    /**
                     * Encodes the specified RotateServerCaContext message. Does not implicitly {@link google.cloud.sql.v1beta4.RotateServerCaContext.verify|verify} messages.
                     * @param message RotateServerCaContext message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.IRotateServerCaContext, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RotateServerCaContext message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.RotateServerCaContext.verify|verify} messages.
                     * @param message RotateServerCaContext message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.IRotateServerCaContext, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RotateServerCaContext message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RotateServerCaContext
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.RotateServerCaContext;

                    /**
                     * Decodes a RotateServerCaContext message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RotateServerCaContext
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.RotateServerCaContext;

                    /**
                     * Verifies a RotateServerCaContext message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RotateServerCaContext message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RotateServerCaContext
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.RotateServerCaContext;

                    /**
                     * Creates a plain object from a RotateServerCaContext message. Also converts values to other types if specified.
                     * @param message RotateServerCaContext
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.RotateServerCaContext, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RotateServerCaContext to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Settings. */
                interface ISettings {

                    /** Settings settingsVersion */
                    settingsVersion?: (google.protobuf.IInt64Value|null);

                    /** Settings authorizedGaeApplications */
                    authorizedGaeApplications?: (string[]|null);

                    /** Settings tier */
                    tier?: (string|null);

                    /** Settings kind */
                    kind?: (string|null);

                    /** Settings userLabels */
                    userLabels?: ({ [k: string]: string }|null);

                    /** Settings availabilityType */
                    availabilityType?: (google.cloud.sql.v1beta4.SqlAvailabilityType|keyof typeof google.cloud.sql.v1beta4.SqlAvailabilityType|null);

                    /** Settings pricingPlan */
                    pricingPlan?: (google.cloud.sql.v1beta4.SqlPricingPlan|keyof typeof google.cloud.sql.v1beta4.SqlPricingPlan|null);

                    /** Settings replicationType */
                    replicationType?: (google.cloud.sql.v1beta4.SqlReplicationType|keyof typeof google.cloud.sql.v1beta4.SqlReplicationType|null);

                    /** Settings storageAutoResizeLimit */
                    storageAutoResizeLimit?: (google.protobuf.IInt64Value|null);

                    /** Settings activationPolicy */
                    activationPolicy?: (google.cloud.sql.v1beta4.Settings.SqlActivationPolicy|keyof typeof google.cloud.sql.v1beta4.Settings.SqlActivationPolicy|null);

                    /** Settings ipConfiguration */
                    ipConfiguration?: (google.cloud.sql.v1beta4.IIpConfiguration|null);

                    /** Settings storageAutoResize */
                    storageAutoResize?: (google.protobuf.IBoolValue|null);

                    /** Settings locationPreference */
                    locationPreference?: (google.cloud.sql.v1beta4.ILocationPreference|null);

                    /** Settings databaseFlags */
                    databaseFlags?: (google.cloud.sql.v1beta4.IDatabaseFlags[]|null);

                    /** Settings dataDiskType */
                    dataDiskType?: (google.cloud.sql.v1beta4.SqlDataDiskType|keyof typeof google.cloud.sql.v1beta4.SqlDataDiskType|null);

                    /** Settings maintenanceWindow */
                    maintenanceWindow?: (google.cloud.sql.v1beta4.IMaintenanceWindow|null);

                    /** Settings backupConfiguration */
                    backupConfiguration?: (google.cloud.sql.v1beta4.IBackupConfiguration|null);

                    /** Settings databaseReplicationEnabled */
                    databaseReplicationEnabled?: (google.protobuf.IBoolValue|null);

                    /** Settings crashSafeReplicationEnabled */
                    crashSafeReplicationEnabled?: (google.protobuf.IBoolValue|null);

                    /** Settings dataDiskSizeGb */
                    dataDiskSizeGb?: (google.protobuf.IInt64Value|null);

                    /** Settings activeDirectoryConfig */
                    activeDirectoryConfig?: (google.cloud.sql.v1beta4.ISqlActiveDirectoryConfig|null);

                    /** Settings collation */
                    collation?: (string|null);

                    /** Settings denyMaintenancePeriods */
                    denyMaintenancePeriods?: (google.cloud.sql.v1beta4.IDenyMaintenancePeriod[]|null);

                    /** Settings insightsConfig */
                    insightsConfig?: (google.cloud.sql.v1beta4.IInsightsConfig|null);
                }

                /** Represents a Settings. */
                class Settings implements ISettings {

                    /**
                     * Constructs a new Settings.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.ISettings);

                    /** Settings settingsVersion. */
                    public settingsVersion?: (google.protobuf.IInt64Value|null);

                    /** Settings authorizedGaeApplications. */
                    public authorizedGaeApplications: string[];

                    /** Settings tier. */
                    public tier: string;

                    /** Settings kind. */
                    public kind: string;

                    /** Settings userLabels. */
                    public userLabels: { [k: string]: string };

                    /** Settings availabilityType. */
                    public availabilityType: (google.cloud.sql.v1beta4.SqlAvailabilityType|keyof typeof google.cloud.sql.v1beta4.SqlAvailabilityType);

                    /** Settings pricingPlan. */
                    public pricingPlan: (google.cloud.sql.v1beta4.SqlPricingPlan|keyof typeof google.cloud.sql.v1beta4.SqlPricingPlan);

                    /** Settings replicationType. */
                    public replicationType: (google.cloud.sql.v1beta4.SqlReplicationType|keyof typeof google.cloud.sql.v1beta4.SqlReplicationType);

                    /** Settings storageAutoResizeLimit. */
                    public storageAutoResizeLimit?: (google.protobuf.IInt64Value|null);

                    /** Settings activationPolicy. */
                    public activationPolicy: (google.cloud.sql.v1beta4.Settings.SqlActivationPolicy|keyof typeof google.cloud.sql.v1beta4.Settings.SqlActivationPolicy);

                    /** Settings ipConfiguration. */
                    public ipConfiguration?: (google.cloud.sql.v1beta4.IIpConfiguration|null);

                    /** Settings storageAutoResize. */
                    public storageAutoResize?: (google.protobuf.IBoolValue|null);

                    /** Settings locationPreference. */
                    public locationPreference?: (google.cloud.sql.v1beta4.ILocationPreference|null);

                    /** Settings databaseFlags. */
                    public databaseFlags: google.cloud.sql.v1beta4.IDatabaseFlags[];

                    /** Settings dataDiskType. */
                    public dataDiskType: (google.cloud.sql.v1beta4.SqlDataDiskType|keyof typeof google.cloud.sql.v1beta4.SqlDataDiskType);

                    /** Settings maintenanceWindow. */
                    public maintenanceWindow?: (google.cloud.sql.v1beta4.IMaintenanceWindow|null);

                    /** Settings backupConfiguration. */
                    public backupConfiguration?: (google.cloud.sql.v1beta4.IBackupConfiguration|null);

                    /** Settings databaseReplicationEnabled. */
                    public databaseReplicationEnabled?: (google.protobuf.IBoolValue|null);

                    /** Settings crashSafeReplicationEnabled. */
                    public crashSafeReplicationEnabled?: (google.protobuf.IBoolValue|null);

                    /** Settings dataDiskSizeGb. */
                    public dataDiskSizeGb?: (google.protobuf.IInt64Value|null);

                    /** Settings activeDirectoryConfig. */
                    public activeDirectoryConfig?: (google.cloud.sql.v1beta4.ISqlActiveDirectoryConfig|null);

                    /** Settings collation. */
                    public collation: string;

                    /** Settings denyMaintenancePeriods. */
                    public denyMaintenancePeriods: google.cloud.sql.v1beta4.IDenyMaintenancePeriod[];

                    /** Settings insightsConfig. */
                    public insightsConfig?: (google.cloud.sql.v1beta4.IInsightsConfig|null);

                    /**
                     * Creates a new Settings instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Settings instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.ISettings): google.cloud.sql.v1beta4.Settings;

                    /**
                     * Encodes the specified Settings message. Does not implicitly {@link google.cloud.sql.v1beta4.Settings.verify|verify} messages.
                     * @param message Settings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.ISettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Settings message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.Settings.verify|verify} messages.
                     * @param message Settings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.ISettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Settings message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Settings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.Settings;

                    /**
                     * Decodes a Settings message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Settings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.Settings;

                    /**
                     * Verifies a Settings message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Settings message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Settings
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.Settings;

                    /**
                     * Creates a plain object from a Settings message. Also converts values to other types if specified.
                     * @param message Settings
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.Settings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Settings to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Settings {

                    /** SqlActivationPolicy enum. */
                    enum SqlActivationPolicy {
                        SQL_ACTIVATION_POLICY_UNSPECIFIED = 0,
                        ALWAYS = 1,
                        NEVER = 2,
                        ON_DEMAND = 3
                    }
                }

                /** Properties of a SslCert. */
                interface ISslCert {

                    /** SslCert kind */
                    kind?: (string|null);

                    /** SslCert certSerialNumber */
                    certSerialNumber?: (string|null);

                    /** SslCert cert */
                    cert?: (string|null);

                    /** SslCert createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** SslCert commonName */
                    commonName?: (string|null);

                    /** SslCert expirationTime */
                    expirationTime?: (google.protobuf.ITimestamp|null);

                    /** SslCert sha1Fingerprint */
                    sha1Fingerprint?: (string|null);

                    /** SslCert instance */
                    instance?: (string|null);

                    /** SslCert selfLink */
                    selfLink?: (string|null);
                }

                /** Represents a SslCert. */
                class SslCert implements ISslCert {

                    /**
                     * Constructs a new SslCert.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.ISslCert);

                    /** SslCert kind. */
                    public kind: string;

                    /** SslCert certSerialNumber. */
                    public certSerialNumber: string;

                    /** SslCert cert. */
                    public cert: string;

                    /** SslCert createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** SslCert commonName. */
                    public commonName: string;

                    /** SslCert expirationTime. */
                    public expirationTime?: (google.protobuf.ITimestamp|null);

                    /** SslCert sha1Fingerprint. */
                    public sha1Fingerprint: string;

                    /** SslCert instance. */
                    public instance: string;

                    /** SslCert selfLink. */
                    public selfLink: string;

                    /**
                     * Creates a new SslCert instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SslCert instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.ISslCert): google.cloud.sql.v1beta4.SslCert;

                    /**
                     * Encodes the specified SslCert message. Does not implicitly {@link google.cloud.sql.v1beta4.SslCert.verify|verify} messages.
                     * @param message SslCert message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.ISslCert, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SslCert message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.SslCert.verify|verify} messages.
                     * @param message SslCert message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.ISslCert, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SslCert message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SslCert
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.SslCert;

                    /**
                     * Decodes a SslCert message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SslCert
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.SslCert;

                    /**
                     * Verifies a SslCert message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SslCert message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SslCert
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.SslCert;

                    /**
                     * Creates a plain object from a SslCert message. Also converts values to other types if specified.
                     * @param message SslCert
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.SslCert, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SslCert to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SslCertDetail. */
                interface ISslCertDetail {

                    /** SslCertDetail certInfo */
                    certInfo?: (google.cloud.sql.v1beta4.ISslCert|null);

                    /** SslCertDetail certPrivateKey */
                    certPrivateKey?: (string|null);
                }

                /** Represents a SslCertDetail. */
                class SslCertDetail implements ISslCertDetail {

                    /**
                     * Constructs a new SslCertDetail.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.ISslCertDetail);

                    /** SslCertDetail certInfo. */
                    public certInfo?: (google.cloud.sql.v1beta4.ISslCert|null);

                    /** SslCertDetail certPrivateKey. */
                    public certPrivateKey: string;

                    /**
                     * Creates a new SslCertDetail instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SslCertDetail instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.ISslCertDetail): google.cloud.sql.v1beta4.SslCertDetail;

                    /**
                     * Encodes the specified SslCertDetail message. Does not implicitly {@link google.cloud.sql.v1beta4.SslCertDetail.verify|verify} messages.
                     * @param message SslCertDetail message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.ISslCertDetail, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SslCertDetail message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.SslCertDetail.verify|verify} messages.
                     * @param message SslCertDetail message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.ISslCertDetail, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SslCertDetail message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SslCertDetail
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.SslCertDetail;

                    /**
                     * Decodes a SslCertDetail message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SslCertDetail
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.SslCertDetail;

                    /**
                     * Verifies a SslCertDetail message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SslCertDetail message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SslCertDetail
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.SslCertDetail;

                    /**
                     * Creates a plain object from a SslCertDetail message. Also converts values to other types if specified.
                     * @param message SslCertDetail
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.SslCertDetail, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SslCertDetail to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SslCertsCreateEphemeralRequest. */
                interface ISslCertsCreateEphemeralRequest {

                    /** SslCertsCreateEphemeralRequest publicKey */
                    publicKey?: (string|null);

                    /** SslCertsCreateEphemeralRequest accessToken */
                    accessToken?: (string|null);
                }

                /** Represents a SslCertsCreateEphemeralRequest. */
                class SslCertsCreateEphemeralRequest implements ISslCertsCreateEphemeralRequest {

                    /**
                     * Constructs a new SslCertsCreateEphemeralRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.ISslCertsCreateEphemeralRequest);

                    /** SslCertsCreateEphemeralRequest publicKey. */
                    public publicKey: string;

                    /** SslCertsCreateEphemeralRequest accessToken. */
                    public accessToken: string;

                    /**
                     * Creates a new SslCertsCreateEphemeralRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SslCertsCreateEphemeralRequest instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.ISslCertsCreateEphemeralRequest): google.cloud.sql.v1beta4.SslCertsCreateEphemeralRequest;

                    /**
                     * Encodes the specified SslCertsCreateEphemeralRequest message. Does not implicitly {@link google.cloud.sql.v1beta4.SslCertsCreateEphemeralRequest.verify|verify} messages.
                     * @param message SslCertsCreateEphemeralRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.ISslCertsCreateEphemeralRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SslCertsCreateEphemeralRequest message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.SslCertsCreateEphemeralRequest.verify|verify} messages.
                     * @param message SslCertsCreateEphemeralRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.ISslCertsCreateEphemeralRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SslCertsCreateEphemeralRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SslCertsCreateEphemeralRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.SslCertsCreateEphemeralRequest;

                    /**
                     * Decodes a SslCertsCreateEphemeralRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SslCertsCreateEphemeralRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.SslCertsCreateEphemeralRequest;

                    /**
                     * Verifies a SslCertsCreateEphemeralRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SslCertsCreateEphemeralRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SslCertsCreateEphemeralRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.SslCertsCreateEphemeralRequest;

                    /**
                     * Creates a plain object from a SslCertsCreateEphemeralRequest message. Also converts values to other types if specified.
                     * @param message SslCertsCreateEphemeralRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.SslCertsCreateEphemeralRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SslCertsCreateEphemeralRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SslCertsInsertRequest. */
                interface ISslCertsInsertRequest {

                    /** SslCertsInsertRequest commonName */
                    commonName?: (string|null);
                }

                /** Represents a SslCertsInsertRequest. */
                class SslCertsInsertRequest implements ISslCertsInsertRequest {

                    /**
                     * Constructs a new SslCertsInsertRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.ISslCertsInsertRequest);

                    /** SslCertsInsertRequest commonName. */
                    public commonName: string;

                    /**
                     * Creates a new SslCertsInsertRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SslCertsInsertRequest instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.ISslCertsInsertRequest): google.cloud.sql.v1beta4.SslCertsInsertRequest;

                    /**
                     * Encodes the specified SslCertsInsertRequest message. Does not implicitly {@link google.cloud.sql.v1beta4.SslCertsInsertRequest.verify|verify} messages.
                     * @param message SslCertsInsertRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.ISslCertsInsertRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SslCertsInsertRequest message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.SslCertsInsertRequest.verify|verify} messages.
                     * @param message SslCertsInsertRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.ISslCertsInsertRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SslCertsInsertRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SslCertsInsertRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.SslCertsInsertRequest;

                    /**
                     * Decodes a SslCertsInsertRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SslCertsInsertRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.SslCertsInsertRequest;

                    /**
                     * Verifies a SslCertsInsertRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SslCertsInsertRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SslCertsInsertRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.SslCertsInsertRequest;

                    /**
                     * Creates a plain object from a SslCertsInsertRequest message. Also converts values to other types if specified.
                     * @param message SslCertsInsertRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.SslCertsInsertRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SslCertsInsertRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SqlInstancesRescheduleMaintenanceRequestBody. */
                interface ISqlInstancesRescheduleMaintenanceRequestBody {

                    /** SqlInstancesRescheduleMaintenanceRequestBody reschedule */
                    reschedule?: (google.cloud.sql.v1beta4.SqlInstancesRescheduleMaintenanceRequestBody.IReschedule|null);
                }

                /** Represents a SqlInstancesRescheduleMaintenanceRequestBody. */
                class SqlInstancesRescheduleMaintenanceRequestBody implements ISqlInstancesRescheduleMaintenanceRequestBody {

                    /**
                     * Constructs a new SqlInstancesRescheduleMaintenanceRequestBody.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.ISqlInstancesRescheduleMaintenanceRequestBody);

                    /** SqlInstancesRescheduleMaintenanceRequestBody reschedule. */
                    public reschedule?: (google.cloud.sql.v1beta4.SqlInstancesRescheduleMaintenanceRequestBody.IReschedule|null);

                    /**
                     * Creates a new SqlInstancesRescheduleMaintenanceRequestBody instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SqlInstancesRescheduleMaintenanceRequestBody instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.ISqlInstancesRescheduleMaintenanceRequestBody): google.cloud.sql.v1beta4.SqlInstancesRescheduleMaintenanceRequestBody;

                    /**
                     * Encodes the specified SqlInstancesRescheduleMaintenanceRequestBody message. Does not implicitly {@link google.cloud.sql.v1beta4.SqlInstancesRescheduleMaintenanceRequestBody.verify|verify} messages.
                     * @param message SqlInstancesRescheduleMaintenanceRequestBody message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.ISqlInstancesRescheduleMaintenanceRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SqlInstancesRescheduleMaintenanceRequestBody message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.SqlInstancesRescheduleMaintenanceRequestBody.verify|verify} messages.
                     * @param message SqlInstancesRescheduleMaintenanceRequestBody message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.ISqlInstancesRescheduleMaintenanceRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SqlInstancesRescheduleMaintenanceRequestBody message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SqlInstancesRescheduleMaintenanceRequestBody
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.SqlInstancesRescheduleMaintenanceRequestBody;

                    /**
                     * Decodes a SqlInstancesRescheduleMaintenanceRequestBody message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SqlInstancesRescheduleMaintenanceRequestBody
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.SqlInstancesRescheduleMaintenanceRequestBody;

                    /**
                     * Verifies a SqlInstancesRescheduleMaintenanceRequestBody message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SqlInstancesRescheduleMaintenanceRequestBody message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SqlInstancesRescheduleMaintenanceRequestBody
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.SqlInstancesRescheduleMaintenanceRequestBody;

                    /**
                     * Creates a plain object from a SqlInstancesRescheduleMaintenanceRequestBody message. Also converts values to other types if specified.
                     * @param message SqlInstancesRescheduleMaintenanceRequestBody
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.SqlInstancesRescheduleMaintenanceRequestBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SqlInstancesRescheduleMaintenanceRequestBody to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace SqlInstancesRescheduleMaintenanceRequestBody {

                    /** Properties of a Reschedule. */
                    interface IReschedule {

                        /** Reschedule rescheduleType */
                        rescheduleType?: (google.cloud.sql.v1beta4.SqlInstancesRescheduleMaintenanceRequestBody.RescheduleType|keyof typeof google.cloud.sql.v1beta4.SqlInstancesRescheduleMaintenanceRequestBody.RescheduleType|null);

                        /** Reschedule scheduleTime */
                        scheduleTime?: (google.protobuf.ITimestamp|null);
                    }

                    /** Represents a Reschedule. */
                    class Reschedule implements IReschedule {

                        /**
                         * Constructs a new Reschedule.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.sql.v1beta4.SqlInstancesRescheduleMaintenanceRequestBody.IReschedule);

                        /** Reschedule rescheduleType. */
                        public rescheduleType: (google.cloud.sql.v1beta4.SqlInstancesRescheduleMaintenanceRequestBody.RescheduleType|keyof typeof google.cloud.sql.v1beta4.SqlInstancesRescheduleMaintenanceRequestBody.RescheduleType);

                        /** Reschedule scheduleTime. */
                        public scheduleTime?: (google.protobuf.ITimestamp|null);

                        /**
                         * Creates a new Reschedule instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Reschedule instance
                         */
                        public static create(properties?: google.cloud.sql.v1beta4.SqlInstancesRescheduleMaintenanceRequestBody.IReschedule): google.cloud.sql.v1beta4.SqlInstancesRescheduleMaintenanceRequestBody.Reschedule;

                        /**
                         * Encodes the specified Reschedule message. Does not implicitly {@link google.cloud.sql.v1beta4.SqlInstancesRescheduleMaintenanceRequestBody.Reschedule.verify|verify} messages.
                         * @param message Reschedule message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.sql.v1beta4.SqlInstancesRescheduleMaintenanceRequestBody.IReschedule, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Reschedule message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.SqlInstancesRescheduleMaintenanceRequestBody.Reschedule.verify|verify} messages.
                         * @param message Reschedule message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.sql.v1beta4.SqlInstancesRescheduleMaintenanceRequestBody.IReschedule, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Reschedule message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Reschedule
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.SqlInstancesRescheduleMaintenanceRequestBody.Reschedule;

                        /**
                         * Decodes a Reschedule message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Reschedule
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.SqlInstancesRescheduleMaintenanceRequestBody.Reschedule;

                        /**
                         * Verifies a Reschedule message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Reschedule message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Reschedule
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.SqlInstancesRescheduleMaintenanceRequestBody.Reschedule;

                        /**
                         * Creates a plain object from a Reschedule message. Also converts values to other types if specified.
                         * @param message Reschedule
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.sql.v1beta4.SqlInstancesRescheduleMaintenanceRequestBody.Reschedule, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Reschedule to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** RescheduleType enum. */
                    enum RescheduleType {
                        RESCHEDULE_TYPE_UNSPECIFIED = 0,
                        IMMEDIATE = 1,
                        NEXT_AVAILABLE_WINDOW = 2,
                        SPECIFIC_TIME = 3
                    }
                }

                /** Properties of a SslCertsInsertResponse. */
                interface ISslCertsInsertResponse {

                    /** SslCertsInsertResponse kind */
                    kind?: (string|null);

                    /** SslCertsInsertResponse operation */
                    operation?: (google.cloud.sql.v1beta4.IOperation|null);

                    /** SslCertsInsertResponse serverCaCert */
                    serverCaCert?: (google.cloud.sql.v1beta4.ISslCert|null);

                    /** SslCertsInsertResponse clientCert */
                    clientCert?: (google.cloud.sql.v1beta4.ISslCertDetail|null);
                }

                /** Represents a SslCertsInsertResponse. */
                class SslCertsInsertResponse implements ISslCertsInsertResponse {

                    /**
                     * Constructs a new SslCertsInsertResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.ISslCertsInsertResponse);

                    /** SslCertsInsertResponse kind. */
                    public kind: string;

                    /** SslCertsInsertResponse operation. */
                    public operation?: (google.cloud.sql.v1beta4.IOperation|null);

                    /** SslCertsInsertResponse serverCaCert. */
                    public serverCaCert?: (google.cloud.sql.v1beta4.ISslCert|null);

                    /** SslCertsInsertResponse clientCert. */
                    public clientCert?: (google.cloud.sql.v1beta4.ISslCertDetail|null);

                    /**
                     * Creates a new SslCertsInsertResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SslCertsInsertResponse instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.ISslCertsInsertResponse): google.cloud.sql.v1beta4.SslCertsInsertResponse;

                    /**
                     * Encodes the specified SslCertsInsertResponse message. Does not implicitly {@link google.cloud.sql.v1beta4.SslCertsInsertResponse.verify|verify} messages.
                     * @param message SslCertsInsertResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.ISslCertsInsertResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SslCertsInsertResponse message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.SslCertsInsertResponse.verify|verify} messages.
                     * @param message SslCertsInsertResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.ISslCertsInsertResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SslCertsInsertResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SslCertsInsertResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.SslCertsInsertResponse;

                    /**
                     * Decodes a SslCertsInsertResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SslCertsInsertResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.SslCertsInsertResponse;

                    /**
                     * Verifies a SslCertsInsertResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SslCertsInsertResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SslCertsInsertResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.SslCertsInsertResponse;

                    /**
                     * Creates a plain object from a SslCertsInsertResponse message. Also converts values to other types if specified.
                     * @param message SslCertsInsertResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.SslCertsInsertResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SslCertsInsertResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SslCertsListResponse. */
                interface ISslCertsListResponse {

                    /** SslCertsListResponse kind */
                    kind?: (string|null);

                    /** SslCertsListResponse items */
                    items?: (google.cloud.sql.v1beta4.ISslCert[]|null);
                }

                /** Represents a SslCertsListResponse. */
                class SslCertsListResponse implements ISslCertsListResponse {

                    /**
                     * Constructs a new SslCertsListResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.ISslCertsListResponse);

                    /** SslCertsListResponse kind. */
                    public kind: string;

                    /** SslCertsListResponse items. */
                    public items: google.cloud.sql.v1beta4.ISslCert[];

                    /**
                     * Creates a new SslCertsListResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SslCertsListResponse instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.ISslCertsListResponse): google.cloud.sql.v1beta4.SslCertsListResponse;

                    /**
                     * Encodes the specified SslCertsListResponse message. Does not implicitly {@link google.cloud.sql.v1beta4.SslCertsListResponse.verify|verify} messages.
                     * @param message SslCertsListResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.ISslCertsListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SslCertsListResponse message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.SslCertsListResponse.verify|verify} messages.
                     * @param message SslCertsListResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.ISslCertsListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SslCertsListResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SslCertsListResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.SslCertsListResponse;

                    /**
                     * Decodes a SslCertsListResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SslCertsListResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.SslCertsListResponse;

                    /**
                     * Verifies a SslCertsListResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SslCertsListResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SslCertsListResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.SslCertsListResponse;

                    /**
                     * Creates a plain object from a SslCertsListResponse message. Also converts values to other types if specified.
                     * @param message SslCertsListResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.SslCertsListResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SslCertsListResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a TruncateLogContext. */
                interface ITruncateLogContext {

                    /** TruncateLogContext kind */
                    kind?: (string|null);

                    /** TruncateLogContext logType */
                    logType?: (string|null);
                }

                /** Represents a TruncateLogContext. */
                class TruncateLogContext implements ITruncateLogContext {

                    /**
                     * Constructs a new TruncateLogContext.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.ITruncateLogContext);

                    /** TruncateLogContext kind. */
                    public kind: string;

                    /** TruncateLogContext logType. */
                    public logType: string;

                    /**
                     * Creates a new TruncateLogContext instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TruncateLogContext instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.ITruncateLogContext): google.cloud.sql.v1beta4.TruncateLogContext;

                    /**
                     * Encodes the specified TruncateLogContext message. Does not implicitly {@link google.cloud.sql.v1beta4.TruncateLogContext.verify|verify} messages.
                     * @param message TruncateLogContext message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.ITruncateLogContext, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TruncateLogContext message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.TruncateLogContext.verify|verify} messages.
                     * @param message TruncateLogContext message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.ITruncateLogContext, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TruncateLogContext message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TruncateLogContext
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.TruncateLogContext;

                    /**
                     * Decodes a TruncateLogContext message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TruncateLogContext
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.TruncateLogContext;

                    /**
                     * Verifies a TruncateLogContext message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TruncateLogContext message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TruncateLogContext
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.TruncateLogContext;

                    /**
                     * Creates a plain object from a TruncateLogContext message. Also converts values to other types if specified.
                     * @param message TruncateLogContext
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.TruncateLogContext, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TruncateLogContext to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SqlActiveDirectoryConfig. */
                interface ISqlActiveDirectoryConfig {

                    /** SqlActiveDirectoryConfig kind */
                    kind?: (string|null);

                    /** SqlActiveDirectoryConfig domain */
                    domain?: (string|null);
                }

                /** Represents a SqlActiveDirectoryConfig. */
                class SqlActiveDirectoryConfig implements ISqlActiveDirectoryConfig {

                    /**
                     * Constructs a new SqlActiveDirectoryConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.ISqlActiveDirectoryConfig);

                    /** SqlActiveDirectoryConfig kind. */
                    public kind: string;

                    /** SqlActiveDirectoryConfig domain. */
                    public domain: string;

                    /**
                     * Creates a new SqlActiveDirectoryConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SqlActiveDirectoryConfig instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.ISqlActiveDirectoryConfig): google.cloud.sql.v1beta4.SqlActiveDirectoryConfig;

                    /**
                     * Encodes the specified SqlActiveDirectoryConfig message. Does not implicitly {@link google.cloud.sql.v1beta4.SqlActiveDirectoryConfig.verify|verify} messages.
                     * @param message SqlActiveDirectoryConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.ISqlActiveDirectoryConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SqlActiveDirectoryConfig message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.SqlActiveDirectoryConfig.verify|verify} messages.
                     * @param message SqlActiveDirectoryConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.ISqlActiveDirectoryConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SqlActiveDirectoryConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SqlActiveDirectoryConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.SqlActiveDirectoryConfig;

                    /**
                     * Decodes a SqlActiveDirectoryConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SqlActiveDirectoryConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.SqlActiveDirectoryConfig;

                    /**
                     * Verifies a SqlActiveDirectoryConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SqlActiveDirectoryConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SqlActiveDirectoryConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.SqlActiveDirectoryConfig;

                    /**
                     * Creates a plain object from a SqlActiveDirectoryConfig message. Also converts values to other types if specified.
                     * @param message SqlActiveDirectoryConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.SqlActiveDirectoryConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SqlActiveDirectoryConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** SqlBackupRunStatus enum. */
                enum SqlBackupRunStatus {
                    SQL_BACKUP_RUN_STATUS_UNSPECIFIED = 0,
                    ENQUEUED = 1,
                    OVERDUE = 2,
                    RUNNING = 3,
                    FAILED = 4,
                    SUCCESSFUL = 5,
                    SKIPPED = 6,
                    DELETION_PENDING = 7,
                    DELETION_FAILED = 8,
                    DELETED = 9
                }

                /** SqlBackupRunType enum. */
                enum SqlBackupRunType {
                    SQL_BACKUP_RUN_TYPE_UNSPECIFIED = 0,
                    AUTOMATED = 1,
                    ON_DEMAND = 2
                }

                /** SqlBackupKind enum. */
                enum SqlBackupKind {
                    SQL_BACKUP_KIND_UNSPECIFIED = 0,
                    SNAPSHOT = 1,
                    PHYSICAL = 2
                }

                /** SqlBackendType enum. */
                enum SqlBackendType {
                    SQL_BACKEND_TYPE_UNSPECIFIED = 0,
                    FIRST_GEN = 1,
                    SECOND_GEN = 2,
                    EXTERNAL = 3
                }

                /** SqlIpAddressType enum. */
                enum SqlIpAddressType {
                    SQL_IP_ADDRESS_TYPE_UNSPECIFIED = 0,
                    PRIMARY = 1,
                    OUTGOING = 2,
                    PRIVATE = 3,
                    MIGRATED_1ST_GEN = 4
                }

                /** SqlInstanceType enum. */
                enum SqlInstanceType {
                    SQL_INSTANCE_TYPE_UNSPECIFIED = 0,
                    CLOUD_SQL_INSTANCE = 1,
                    ON_PREMISES_INSTANCE = 2,
                    READ_REPLICA_INSTANCE = 3
                }

                /** SqlDatabaseVersion enum. */
                enum SqlDatabaseVersion {
                    SQL_DATABASE_VERSION_UNSPECIFIED = 0,
                    MYSQL_5_1 = 2,
                    MYSQL_5_5 = 3,
                    MYSQL_5_6 = 5,
                    MYSQL_5_7 = 6,
                    POSTGRES_9_6 = 9,
                    POSTGRES_11 = 10,
                    SQLSERVER_2017_STANDARD = 11,
                    SQLSERVER_2017_ENTERPRISE = 14,
                    SQLSERVER_2017_EXPRESS = 15,
                    SQLSERVER_2017_WEB = 16,
                    POSTGRES_10 = 18,
                    POSTGRES_12 = 19,
                    MYSQL_8_0 = 20,
                    POSTGRES_13 = 23
                }

                /** SqlSuspensionReason enum. */
                enum SqlSuspensionReason {
                    SQL_SUSPENSION_REASON_UNSPECIFIED = 0,
                    BILLING_ISSUE = 2,
                    LEGAL_ISSUE = 3,
                    OPERATIONAL_ISSUE = 4,
                    KMS_KEY_ISSUE = 5
                }

                /** SqlPricingPlan enum. */
                enum SqlPricingPlan {
                    SQL_PRICING_PLAN_UNSPECIFIED = 0,
                    PACKAGE = 1,
                    PER_USE = 2
                }

                /** SqlReplicationType enum. */
                enum SqlReplicationType {
                    SQL_REPLICATION_TYPE_UNSPECIFIED = 0,
                    SYNCHRONOUS = 1,
                    ASYNCHRONOUS = 2
                }

                /** SqlDataDiskType enum. */
                enum SqlDataDiskType {
                    SQL_DATA_DISK_TYPE_UNSPECIFIED = 0,
                    PD_SSD = 1,
                    PD_HDD = 2,
                    OBSOLETE_LOCAL_SSD = 3
                }

                /** SqlAvailabilityType enum. */
                enum SqlAvailabilityType {
                    SQL_AVAILABILITY_TYPE_UNSPECIFIED = 0,
                    ZONAL = 1,
                    REGIONAL = 2
                }

                /** SqlUpdateTrack enum. */
                enum SqlUpdateTrack {
                    SQL_UPDATE_TRACK_UNSPECIFIED = 0,
                    canary = 1,
                    stable = 2
                }

                /** SqlFlagType enum. */
                enum SqlFlagType {
                    SQL_FLAG_TYPE_UNSPECIFIED = 0,
                    BOOLEAN = 1,
                    STRING = 2,
                    INTEGER = 3,
                    NONE = 4,
                    MYSQL_TIMEZONE_OFFSET = 5,
                    FLOAT = 6,
                    REPEATED_STRING = 7
                }

                /** Represents a SqlTiersService */
                class SqlTiersService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new SqlTiersService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new SqlTiersService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): SqlTiersService;

                    /**
                     * Calls List.
                     * @param request SqlTiersListRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and TiersListResponse
                     */
                    public list(request: google.cloud.sql.v1beta4.ISqlTiersListRequest, callback: google.cloud.sql.v1beta4.SqlTiersService.ListCallback): void;

                    /**
                     * Calls List.
                     * @param request SqlTiersListRequest message or plain object
                     * @returns Promise
                     */
                    public list(request: google.cloud.sql.v1beta4.ISqlTiersListRequest): Promise<google.cloud.sql.v1beta4.TiersListResponse>;
                }

                namespace SqlTiersService {

                    /**
                     * Callback as used by {@link google.cloud.sql.v1beta4.SqlTiersService#list}.
                     * @param error Error, if any
                     * @param [response] TiersListResponse
                     */
                    type ListCallback = (error: (Error|null), response?: google.cloud.sql.v1beta4.TiersListResponse) => void;
                }

                /** Properties of a SqlTiersListRequest. */
                interface ISqlTiersListRequest {

                    /** SqlTiersListRequest project */
                    project?: (string|null);
                }

                /** Represents a SqlTiersListRequest. */
                class SqlTiersListRequest implements ISqlTiersListRequest {

                    /**
                     * Constructs a new SqlTiersListRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.ISqlTiersListRequest);

                    /** SqlTiersListRequest project. */
                    public project: string;

                    /**
                     * Creates a new SqlTiersListRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SqlTiersListRequest instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.ISqlTiersListRequest): google.cloud.sql.v1beta4.SqlTiersListRequest;

                    /**
                     * Encodes the specified SqlTiersListRequest message. Does not implicitly {@link google.cloud.sql.v1beta4.SqlTiersListRequest.verify|verify} messages.
                     * @param message SqlTiersListRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.ISqlTiersListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SqlTiersListRequest message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.SqlTiersListRequest.verify|verify} messages.
                     * @param message SqlTiersListRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.ISqlTiersListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SqlTiersListRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SqlTiersListRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.SqlTiersListRequest;

                    /**
                     * Decodes a SqlTiersListRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SqlTiersListRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.SqlTiersListRequest;

                    /**
                     * Verifies a SqlTiersListRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SqlTiersListRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SqlTiersListRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.SqlTiersListRequest;

                    /**
                     * Creates a plain object from a SqlTiersListRequest message. Also converts values to other types if specified.
                     * @param message SqlTiersListRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.SqlTiersListRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SqlTiersListRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a TiersListResponse. */
                interface ITiersListResponse {

                    /** TiersListResponse kind */
                    kind?: (string|null);

                    /** TiersListResponse items */
                    items?: (google.cloud.sql.v1beta4.ITier[]|null);
                }

                /** Represents a TiersListResponse. */
                class TiersListResponse implements ITiersListResponse {

                    /**
                     * Constructs a new TiersListResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.ITiersListResponse);

                    /** TiersListResponse kind. */
                    public kind: string;

                    /** TiersListResponse items. */
                    public items: google.cloud.sql.v1beta4.ITier[];

                    /**
                     * Creates a new TiersListResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TiersListResponse instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.ITiersListResponse): google.cloud.sql.v1beta4.TiersListResponse;

                    /**
                     * Encodes the specified TiersListResponse message. Does not implicitly {@link google.cloud.sql.v1beta4.TiersListResponse.verify|verify} messages.
                     * @param message TiersListResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.ITiersListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TiersListResponse message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.TiersListResponse.verify|verify} messages.
                     * @param message TiersListResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.ITiersListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TiersListResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TiersListResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.TiersListResponse;

                    /**
                     * Decodes a TiersListResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TiersListResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.TiersListResponse;

                    /**
                     * Verifies a TiersListResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TiersListResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TiersListResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.TiersListResponse;

                    /**
                     * Creates a plain object from a TiersListResponse message. Also converts values to other types if specified.
                     * @param message TiersListResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.TiersListResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TiersListResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Tier. */
                interface ITier {

                    /** Tier tier */
                    tier?: (string|null);

                    /** Tier RAM */
                    RAM?: (number|Long|string|null);

                    /** Tier kind */
                    kind?: (string|null);

                    /** Tier Disk_Quota */
                    Disk_Quota?: (number|Long|string|null);

                    /** Tier region */
                    region?: (string[]|null);
                }

                /** Represents a Tier. */
                class Tier implements ITier {

                    /**
                     * Constructs a new Tier.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.ITier);

                    /** Tier tier. */
                    public tier: string;

                    /** Tier RAM. */
                    public RAM: (number|Long|string);

                    /** Tier kind. */
                    public kind: string;

                    /** Tier Disk_Quota. */
                    public Disk_Quota: (number|Long|string);

                    /** Tier region. */
                    public region: string[];

                    /**
                     * Creates a new Tier instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Tier instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.ITier): google.cloud.sql.v1beta4.Tier;

                    /**
                     * Encodes the specified Tier message. Does not implicitly {@link google.cloud.sql.v1beta4.Tier.verify|verify} messages.
                     * @param message Tier message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.ITier, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Tier message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.Tier.verify|verify} messages.
                     * @param message Tier message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.ITier, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Tier message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Tier
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.Tier;

                    /**
                     * Decodes a Tier message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Tier
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.Tier;

                    /**
                     * Verifies a Tier message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Tier message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Tier
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.Tier;

                    /**
                     * Creates a plain object from a Tier message. Also converts values to other types if specified.
                     * @param message Tier
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.Tier, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Tier to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Represents a SqlUsersService */
                class SqlUsersService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new SqlUsersService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new SqlUsersService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): SqlUsersService;

                    /**
                     * Calls Delete.
                     * @param request SqlUsersDeleteRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public delete(request: google.cloud.sql.v1beta4.ISqlUsersDeleteRequest, callback: google.cloud.sql.v1beta4.SqlUsersService.DeleteCallback): void;

                    /**
                     * Calls Delete.
                     * @param request SqlUsersDeleteRequest message or plain object
                     * @returns Promise
                     */
                    public delete(request: google.cloud.sql.v1beta4.ISqlUsersDeleteRequest): Promise<google.cloud.sql.v1beta4.Operation>;

                    /**
                     * Calls Insert.
                     * @param request SqlUsersInsertRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public insert(request: google.cloud.sql.v1beta4.ISqlUsersInsertRequest, callback: google.cloud.sql.v1beta4.SqlUsersService.InsertCallback): void;

                    /**
                     * Calls Insert.
                     * @param request SqlUsersInsertRequest message or plain object
                     * @returns Promise
                     */
                    public insert(request: google.cloud.sql.v1beta4.ISqlUsersInsertRequest): Promise<google.cloud.sql.v1beta4.Operation>;

                    /**
                     * Calls List.
                     * @param request SqlUsersListRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and UsersListResponse
                     */
                    public list(request: google.cloud.sql.v1beta4.ISqlUsersListRequest, callback: google.cloud.sql.v1beta4.SqlUsersService.ListCallback): void;

                    /**
                     * Calls List.
                     * @param request SqlUsersListRequest message or plain object
                     * @returns Promise
                     */
                    public list(request: google.cloud.sql.v1beta4.ISqlUsersListRequest): Promise<google.cloud.sql.v1beta4.UsersListResponse>;

                    /**
                     * Calls Update.
                     * @param request SqlUsersUpdateRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public update(request: google.cloud.sql.v1beta4.ISqlUsersUpdateRequest, callback: google.cloud.sql.v1beta4.SqlUsersService.UpdateCallback): void;

                    /**
                     * Calls Update.
                     * @param request SqlUsersUpdateRequest message or plain object
                     * @returns Promise
                     */
                    public update(request: google.cloud.sql.v1beta4.ISqlUsersUpdateRequest): Promise<google.cloud.sql.v1beta4.Operation>;
                }

                namespace SqlUsersService {

                    /**
                     * Callback as used by {@link google.cloud.sql.v1beta4.SqlUsersService#delete_}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteCallback = (error: (Error|null), response?: google.cloud.sql.v1beta4.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.sql.v1beta4.SqlUsersService#insert}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type InsertCallback = (error: (Error|null), response?: google.cloud.sql.v1beta4.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.sql.v1beta4.SqlUsersService#list}.
                     * @param error Error, if any
                     * @param [response] UsersListResponse
                     */
                    type ListCallback = (error: (Error|null), response?: google.cloud.sql.v1beta4.UsersListResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.sql.v1beta4.SqlUsersService#update}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateCallback = (error: (Error|null), response?: google.cloud.sql.v1beta4.Operation) => void;
                }

                /** Properties of a SqlUsersDeleteRequest. */
                interface ISqlUsersDeleteRequest {

                    /** SqlUsersDeleteRequest host */
                    host?: (string|null);

                    /** SqlUsersDeleteRequest instance */
                    instance?: (string|null);

                    /** SqlUsersDeleteRequest name */
                    name?: (string|null);

                    /** SqlUsersDeleteRequest project */
                    project?: (string|null);
                }

                /** Represents a SqlUsersDeleteRequest. */
                class SqlUsersDeleteRequest implements ISqlUsersDeleteRequest {

                    /**
                     * Constructs a new SqlUsersDeleteRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.ISqlUsersDeleteRequest);

                    /** SqlUsersDeleteRequest host. */
                    public host: string;

                    /** SqlUsersDeleteRequest instance. */
                    public instance: string;

                    /** SqlUsersDeleteRequest name. */
                    public name: string;

                    /** SqlUsersDeleteRequest project. */
                    public project: string;

                    /**
                     * Creates a new SqlUsersDeleteRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SqlUsersDeleteRequest instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.ISqlUsersDeleteRequest): google.cloud.sql.v1beta4.SqlUsersDeleteRequest;

                    /**
                     * Encodes the specified SqlUsersDeleteRequest message. Does not implicitly {@link google.cloud.sql.v1beta4.SqlUsersDeleteRequest.verify|verify} messages.
                     * @param message SqlUsersDeleteRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.ISqlUsersDeleteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SqlUsersDeleteRequest message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.SqlUsersDeleteRequest.verify|verify} messages.
                     * @param message SqlUsersDeleteRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.ISqlUsersDeleteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SqlUsersDeleteRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SqlUsersDeleteRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.SqlUsersDeleteRequest;

                    /**
                     * Decodes a SqlUsersDeleteRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SqlUsersDeleteRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.SqlUsersDeleteRequest;

                    /**
                     * Verifies a SqlUsersDeleteRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SqlUsersDeleteRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SqlUsersDeleteRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.SqlUsersDeleteRequest;

                    /**
                     * Creates a plain object from a SqlUsersDeleteRequest message. Also converts values to other types if specified.
                     * @param message SqlUsersDeleteRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.SqlUsersDeleteRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SqlUsersDeleteRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SqlUsersUpdateRequest. */
                interface ISqlUsersUpdateRequest {

                    /** SqlUsersUpdateRequest host */
                    host?: (string|null);

                    /** SqlUsersUpdateRequest instance */
                    instance?: (string|null);

                    /** SqlUsersUpdateRequest name */
                    name?: (string|null);

                    /** SqlUsersUpdateRequest project */
                    project?: (string|null);

                    /** SqlUsersUpdateRequest body */
                    body?: (google.cloud.sql.v1beta4.IUser|null);
                }

                /** Represents a SqlUsersUpdateRequest. */
                class SqlUsersUpdateRequest implements ISqlUsersUpdateRequest {

                    /**
                     * Constructs a new SqlUsersUpdateRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.ISqlUsersUpdateRequest);

                    /** SqlUsersUpdateRequest host. */
                    public host: string;

                    /** SqlUsersUpdateRequest instance. */
                    public instance: string;

                    /** SqlUsersUpdateRequest name. */
                    public name: string;

                    /** SqlUsersUpdateRequest project. */
                    public project: string;

                    /** SqlUsersUpdateRequest body. */
                    public body?: (google.cloud.sql.v1beta4.IUser|null);

                    /**
                     * Creates a new SqlUsersUpdateRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SqlUsersUpdateRequest instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.ISqlUsersUpdateRequest): google.cloud.sql.v1beta4.SqlUsersUpdateRequest;

                    /**
                     * Encodes the specified SqlUsersUpdateRequest message. Does not implicitly {@link google.cloud.sql.v1beta4.SqlUsersUpdateRequest.verify|verify} messages.
                     * @param message SqlUsersUpdateRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.ISqlUsersUpdateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SqlUsersUpdateRequest message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.SqlUsersUpdateRequest.verify|verify} messages.
                     * @param message SqlUsersUpdateRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.ISqlUsersUpdateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SqlUsersUpdateRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SqlUsersUpdateRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.SqlUsersUpdateRequest;

                    /**
                     * Decodes a SqlUsersUpdateRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SqlUsersUpdateRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.SqlUsersUpdateRequest;

                    /**
                     * Verifies a SqlUsersUpdateRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SqlUsersUpdateRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SqlUsersUpdateRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.SqlUsersUpdateRequest;

                    /**
                     * Creates a plain object from a SqlUsersUpdateRequest message. Also converts values to other types if specified.
                     * @param message SqlUsersUpdateRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.SqlUsersUpdateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SqlUsersUpdateRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SqlUsersInsertRequest. */
                interface ISqlUsersInsertRequest {

                    /** SqlUsersInsertRequest instance */
                    instance?: (string|null);

                    /** SqlUsersInsertRequest project */
                    project?: (string|null);

                    /** SqlUsersInsertRequest body */
                    body?: (google.cloud.sql.v1beta4.IUser|null);
                }

                /** Represents a SqlUsersInsertRequest. */
                class SqlUsersInsertRequest implements ISqlUsersInsertRequest {

                    /**
                     * Constructs a new SqlUsersInsertRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.ISqlUsersInsertRequest);

                    /** SqlUsersInsertRequest instance. */
                    public instance: string;

                    /** SqlUsersInsertRequest project. */
                    public project: string;

                    /** SqlUsersInsertRequest body. */
                    public body?: (google.cloud.sql.v1beta4.IUser|null);

                    /**
                     * Creates a new SqlUsersInsertRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SqlUsersInsertRequest instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.ISqlUsersInsertRequest): google.cloud.sql.v1beta4.SqlUsersInsertRequest;

                    /**
                     * Encodes the specified SqlUsersInsertRequest message. Does not implicitly {@link google.cloud.sql.v1beta4.SqlUsersInsertRequest.verify|verify} messages.
                     * @param message SqlUsersInsertRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.ISqlUsersInsertRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SqlUsersInsertRequest message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.SqlUsersInsertRequest.verify|verify} messages.
                     * @param message SqlUsersInsertRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.ISqlUsersInsertRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SqlUsersInsertRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SqlUsersInsertRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.SqlUsersInsertRequest;

                    /**
                     * Decodes a SqlUsersInsertRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SqlUsersInsertRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.SqlUsersInsertRequest;

                    /**
                     * Verifies a SqlUsersInsertRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SqlUsersInsertRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SqlUsersInsertRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.SqlUsersInsertRequest;

                    /**
                     * Creates a plain object from a SqlUsersInsertRequest message. Also converts values to other types if specified.
                     * @param message SqlUsersInsertRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.SqlUsersInsertRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SqlUsersInsertRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SqlUsersListRequest. */
                interface ISqlUsersListRequest {

                    /** SqlUsersListRequest instance */
                    instance?: (string|null);

                    /** SqlUsersListRequest project */
                    project?: (string|null);
                }

                /** Represents a SqlUsersListRequest. */
                class SqlUsersListRequest implements ISqlUsersListRequest {

                    /**
                     * Constructs a new SqlUsersListRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.ISqlUsersListRequest);

                    /** SqlUsersListRequest instance. */
                    public instance: string;

                    /** SqlUsersListRequest project. */
                    public project: string;

                    /**
                     * Creates a new SqlUsersListRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SqlUsersListRequest instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.ISqlUsersListRequest): google.cloud.sql.v1beta4.SqlUsersListRequest;

                    /**
                     * Encodes the specified SqlUsersListRequest message. Does not implicitly {@link google.cloud.sql.v1beta4.SqlUsersListRequest.verify|verify} messages.
                     * @param message SqlUsersListRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.ISqlUsersListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SqlUsersListRequest message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.SqlUsersListRequest.verify|verify} messages.
                     * @param message SqlUsersListRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.ISqlUsersListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SqlUsersListRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SqlUsersListRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.SqlUsersListRequest;

                    /**
                     * Decodes a SqlUsersListRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SqlUsersListRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.SqlUsersListRequest;

                    /**
                     * Verifies a SqlUsersListRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SqlUsersListRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SqlUsersListRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.SqlUsersListRequest;

                    /**
                     * Creates a plain object from a SqlUsersListRequest message. Also converts values to other types if specified.
                     * @param message SqlUsersListRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.SqlUsersListRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SqlUsersListRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a User. */
                interface IUser {

                    /** User kind */
                    kind?: (string|null);

                    /** User password */
                    password?: (string|null);

                    /** User etag */
                    etag?: (string|null);

                    /** User name */
                    name?: (string|null);

                    /** User host */
                    host?: (string|null);

                    /** User instance */
                    instance?: (string|null);

                    /** User project */
                    project?: (string|null);

                    /** User type */
                    type?: (google.cloud.sql.v1beta4.User.SqlUserType|keyof typeof google.cloud.sql.v1beta4.User.SqlUserType|null);

                    /** User sqlserverUserDetails */
                    sqlserverUserDetails?: (google.cloud.sql.v1beta4.ISqlServerUserDetails|null);
                }

                /** Represents a User. */
                class User implements IUser {

                    /**
                     * Constructs a new User.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.IUser);

                    /** User kind. */
                    public kind: string;

                    /** User password. */
                    public password: string;

                    /** User etag. */
                    public etag: string;

                    /** User name. */
                    public name: string;

                    /** User host. */
                    public host: string;

                    /** User instance. */
                    public instance: string;

                    /** User project. */
                    public project: string;

                    /** User type. */
                    public type: (google.cloud.sql.v1beta4.User.SqlUserType|keyof typeof google.cloud.sql.v1beta4.User.SqlUserType);

                    /** User sqlserverUserDetails. */
                    public sqlserverUserDetails?: (google.cloud.sql.v1beta4.ISqlServerUserDetails|null);

                    /** User userDetails. */
                    public userDetails?: "sqlserverUserDetails";

                    /**
                     * Creates a new User instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns User instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.IUser): google.cloud.sql.v1beta4.User;

                    /**
                     * Encodes the specified User message. Does not implicitly {@link google.cloud.sql.v1beta4.User.verify|verify} messages.
                     * @param message User message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified User message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.User.verify|verify} messages.
                     * @param message User message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a User message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns User
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.User;

                    /**
                     * Decodes a User message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns User
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.User;

                    /**
                     * Verifies a User message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a User message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns User
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.User;

                    /**
                     * Creates a plain object from a User message. Also converts values to other types if specified.
                     * @param message User
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.User, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this User to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace User {

                    /** SqlUserType enum. */
                    enum SqlUserType {
                        BUILT_IN = 0,
                        CLOUD_IAM_USER = 1,
                        CLOUD_IAM_SERVICE_ACCOUNT = 2
                    }
                }

                /** Properties of a SqlServerUserDetails. */
                interface ISqlServerUserDetails {

                    /** SqlServerUserDetails disabled */
                    disabled?: (boolean|null);

                    /** SqlServerUserDetails serverRoles */
                    serverRoles?: (string[]|null);
                }

                /** Represents a SqlServerUserDetails. */
                class SqlServerUserDetails implements ISqlServerUserDetails {

                    /**
                     * Constructs a new SqlServerUserDetails.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.ISqlServerUserDetails);

                    /** SqlServerUserDetails disabled. */
                    public disabled: boolean;

                    /** SqlServerUserDetails serverRoles. */
                    public serverRoles: string[];

                    /**
                     * Creates a new SqlServerUserDetails instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SqlServerUserDetails instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.ISqlServerUserDetails): google.cloud.sql.v1beta4.SqlServerUserDetails;

                    /**
                     * Encodes the specified SqlServerUserDetails message. Does not implicitly {@link google.cloud.sql.v1beta4.SqlServerUserDetails.verify|verify} messages.
                     * @param message SqlServerUserDetails message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.ISqlServerUserDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SqlServerUserDetails message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.SqlServerUserDetails.verify|verify} messages.
                     * @param message SqlServerUserDetails message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.ISqlServerUserDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SqlServerUserDetails message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SqlServerUserDetails
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.SqlServerUserDetails;

                    /**
                     * Decodes a SqlServerUserDetails message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SqlServerUserDetails
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.SqlServerUserDetails;

                    /**
                     * Verifies a SqlServerUserDetails message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SqlServerUserDetails message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SqlServerUserDetails
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.SqlServerUserDetails;

                    /**
                     * Creates a plain object from a SqlServerUserDetails message. Also converts values to other types if specified.
                     * @param message SqlServerUserDetails
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.SqlServerUserDetails, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SqlServerUserDetails to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a UsersListResponse. */
                interface IUsersListResponse {

                    /** UsersListResponse kind */
                    kind?: (string|null);

                    /** UsersListResponse items */
                    items?: (google.cloud.sql.v1beta4.IUser[]|null);

                    /** UsersListResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a UsersListResponse. */
                class UsersListResponse implements IUsersListResponse {

                    /**
                     * Constructs a new UsersListResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.sql.v1beta4.IUsersListResponse);

                    /** UsersListResponse kind. */
                    public kind: string;

                    /** UsersListResponse items. */
                    public items: google.cloud.sql.v1beta4.IUser[];

                    /** UsersListResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new UsersListResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UsersListResponse instance
                     */
                    public static create(properties?: google.cloud.sql.v1beta4.IUsersListResponse): google.cloud.sql.v1beta4.UsersListResponse;

                    /**
                     * Encodes the specified UsersListResponse message. Does not implicitly {@link google.cloud.sql.v1beta4.UsersListResponse.verify|verify} messages.
                     * @param message UsersListResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.sql.v1beta4.IUsersListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UsersListResponse message, length delimited. Does not implicitly {@link google.cloud.sql.v1beta4.UsersListResponse.verify|verify} messages.
                     * @param message UsersListResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.sql.v1beta4.IUsersListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a UsersListResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UsersListResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.sql.v1beta4.UsersListResponse;

                    /**
                     * Decodes a UsersListResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UsersListResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.sql.v1beta4.UsersListResponse;

                    /**
                     * Verifies a UsersListResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a UsersListResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UsersListResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.sql.v1beta4.UsersListResponse;

                    /**
                     * Creates a plain object from a UsersListResponse message. Also converts values to other types if specified.
                     * @param message UsersListResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.sql.v1beta4.UsersListResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UsersListResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }
        }
    }

    /** Namespace api. */
    namespace api {

        /** Properties of a Http. */
        interface IHttp {

            /** Http rules */
            rules?: (google.api.IHttpRule[]|null);

            /** Http fullyDecodeReservedExpansion */
            fullyDecodeReservedExpansion?: (boolean|null);
        }

        /** Represents a Http. */
        class Http implements IHttp {

            /**
             * Constructs a new Http.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IHttp);

            /** Http rules. */
            public rules: google.api.IHttpRule[];

            /** Http fullyDecodeReservedExpansion. */
            public fullyDecodeReservedExpansion: boolean;

            /**
             * Creates a new Http instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Http instance
             */
            public static create(properties?: google.api.IHttp): google.api.Http;

            /**
             * Encodes the specified Http message. Does not implicitly {@link google.api.Http.verify|verify} messages.
             * @param message Http message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IHttp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Http message, length delimited. Does not implicitly {@link google.api.Http.verify|verify} messages.
             * @param message Http message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IHttp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Http message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Http
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.Http;

            /**
             * Decodes a Http message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Http
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.Http;

            /**
             * Verifies a Http message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Http message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Http
             */
            public static fromObject(object: { [k: string]: any }): google.api.Http;

            /**
             * Creates a plain object from a Http message. Also converts values to other types if specified.
             * @param message Http
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.Http, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Http to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a HttpRule. */
        interface IHttpRule {

            /** HttpRule selector */
            selector?: (string|null);

            /** HttpRule get */
            get?: (string|null);

            /** HttpRule put */
            put?: (string|null);

            /** HttpRule post */
            post?: (string|null);

            /** HttpRule delete */
            "delete"?: (string|null);

            /** HttpRule patch */
            patch?: (string|null);

            /** HttpRule custom */
            custom?: (google.api.ICustomHttpPattern|null);

            /** HttpRule body */
            body?: (string|null);

            /** HttpRule responseBody */
            responseBody?: (string|null);

            /** HttpRule additionalBindings */
            additionalBindings?: (google.api.IHttpRule[]|null);
        }

        /** Represents a HttpRule. */
        class HttpRule implements IHttpRule {

            /**
             * Constructs a new HttpRule.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IHttpRule);

            /** HttpRule selector. */
            public selector: string;

            /** HttpRule get. */
            public get?: (string|null);

            /** HttpRule put. */
            public put?: (string|null);

            /** HttpRule post. */
            public post?: (string|null);

            /** HttpRule delete. */
            public delete?: (string|null);

            /** HttpRule patch. */
            public patch?: (string|null);

            /** HttpRule custom. */
            public custom?: (google.api.ICustomHttpPattern|null);

            /** HttpRule body. */
            public body: string;

            /** HttpRule responseBody. */
            public responseBody: string;

            /** HttpRule additionalBindings. */
            public additionalBindings: google.api.IHttpRule[];

            /** HttpRule pattern. */
            public pattern?: ("get"|"put"|"post"|"delete"|"patch"|"custom");

            /**
             * Creates a new HttpRule instance using the specified properties.
             * @param [properties] Properties to set
             * @returns HttpRule instance
             */
            public static create(properties?: google.api.IHttpRule): google.api.HttpRule;

            /**
             * Encodes the specified HttpRule message. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
             * @param message HttpRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IHttpRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified HttpRule message, length delimited. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
             * @param message HttpRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IHttpRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a HttpRule message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns HttpRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.HttpRule;

            /**
             * Decodes a HttpRule message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns HttpRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.HttpRule;

            /**
             * Verifies a HttpRule message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a HttpRule message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns HttpRule
             */
            public static fromObject(object: { [k: string]: any }): google.api.HttpRule;

            /**
             * Creates a plain object from a HttpRule message. Also converts values to other types if specified.
             * @param message HttpRule
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.HttpRule, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this HttpRule to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CustomHttpPattern. */
        interface ICustomHttpPattern {

            /** CustomHttpPattern kind */
            kind?: (string|null);

            /** CustomHttpPattern path */
            path?: (string|null);
        }

        /** Represents a CustomHttpPattern. */
        class CustomHttpPattern implements ICustomHttpPattern {

            /**
             * Constructs a new CustomHttpPattern.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.ICustomHttpPattern);

            /** CustomHttpPattern kind. */
            public kind: string;

            /** CustomHttpPattern path. */
            public path: string;

            /**
             * Creates a new CustomHttpPattern instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CustomHttpPattern instance
             */
            public static create(properties?: google.api.ICustomHttpPattern): google.api.CustomHttpPattern;

            /**
             * Encodes the specified CustomHttpPattern message. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
             * @param message CustomHttpPattern message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.ICustomHttpPattern, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CustomHttpPattern message, length delimited. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
             * @param message CustomHttpPattern message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.ICustomHttpPattern, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CustomHttpPattern message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CustomHttpPattern
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.CustomHttpPattern;

            /**
             * Decodes a CustomHttpPattern message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CustomHttpPattern
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.CustomHttpPattern;

            /**
             * Verifies a CustomHttpPattern message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CustomHttpPattern message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CustomHttpPattern
             */
            public static fromObject(object: { [k: string]: any }): google.api.CustomHttpPattern;

            /**
             * Creates a plain object from a CustomHttpPattern message. Also converts values to other types if specified.
             * @param message CustomHttpPattern
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.CustomHttpPattern, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CustomHttpPattern to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** FieldBehavior enum. */
        enum FieldBehavior {
            FIELD_BEHAVIOR_UNSPECIFIED = 0,
            OPTIONAL = 1,
            REQUIRED = 2,
            OUTPUT_ONLY = 3,
            INPUT_ONLY = 4,
            IMMUTABLE = 5,
            UNORDERED_LIST = 6
        }
    }

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a FileDescriptorSet. */
        interface IFileDescriptorSet {

            /** FileDescriptorSet file */
            file?: (google.protobuf.IFileDescriptorProto[]|null);
        }

        /** Represents a FileDescriptorSet. */
        class FileDescriptorSet implements IFileDescriptorSet {

            /**
             * Constructs a new FileDescriptorSet.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorSet);

            /** FileDescriptorSet file. */
            public file: google.protobuf.IFileDescriptorProto[];

            /**
             * Creates a new FileDescriptorSet instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorSet instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorSet): google.protobuf.FileDescriptorSet;

            /**
             * Encodes the specified FileDescriptorSet message. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorSet message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorSet;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorSet;

            /**
             * Verifies a FileDescriptorSet message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorSet message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorSet
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorSet;

            /**
             * Creates a plain object from a FileDescriptorSet message. Also converts values to other types if specified.
             * @param message FileDescriptorSet
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorSet to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FileDescriptorProto. */
        interface IFileDescriptorProto {

            /** FileDescriptorProto name */
            name?: (string|null);

            /** FileDescriptorProto package */
            "package"?: (string|null);

            /** FileDescriptorProto dependency */
            dependency?: (string[]|null);

            /** FileDescriptorProto publicDependency */
            publicDependency?: (number[]|null);

            /** FileDescriptorProto weakDependency */
            weakDependency?: (number[]|null);

            /** FileDescriptorProto messageType */
            messageType?: (google.protobuf.IDescriptorProto[]|null);

            /** FileDescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** FileDescriptorProto service */
            service?: (google.protobuf.IServiceDescriptorProto[]|null);

            /** FileDescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** FileDescriptorProto options */
            options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo */
            sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax */
            syntax?: (string|null);
        }

        /** Represents a FileDescriptorProto. */
        class FileDescriptorProto implements IFileDescriptorProto {

            /**
             * Constructs a new FileDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorProto);

            /** FileDescriptorProto name. */
            public name: string;

            /** FileDescriptorProto package. */
            public package: string;

            /** FileDescriptorProto dependency. */
            public dependency: string[];

            /** FileDescriptorProto publicDependency. */
            public publicDependency: number[];

            /** FileDescriptorProto weakDependency. */
            public weakDependency: number[];

            /** FileDescriptorProto messageType. */
            public messageType: google.protobuf.IDescriptorProto[];

            /** FileDescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** FileDescriptorProto service. */
            public service: google.protobuf.IServiceDescriptorProto[];

            /** FileDescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** FileDescriptorProto options. */
            public options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo. */
            public sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax. */
            public syntax: string;

            /**
             * Creates a new FileDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorProto): google.protobuf.FileDescriptorProto;

            /**
             * Encodes the specified FileDescriptorProto message. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorProto;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorProto;

            /**
             * Verifies a FileDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorProto;

            /**
             * Creates a plain object from a FileDescriptorProto message. Also converts values to other types if specified.
             * @param message FileDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DescriptorProto. */
        interface IDescriptorProto {

            /** DescriptorProto name */
            name?: (string|null);

            /** DescriptorProto field */
            field?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto nestedType */
            nestedType?: (google.protobuf.IDescriptorProto[]|null);

            /** DescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** DescriptorProto extensionRange */
            extensionRange?: (google.protobuf.DescriptorProto.IExtensionRange[]|null);

            /** DescriptorProto oneofDecl */
            oneofDecl?: (google.protobuf.IOneofDescriptorProto[]|null);

            /** DescriptorProto options */
            options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange */
            reservedRange?: (google.protobuf.DescriptorProto.IReservedRange[]|null);

            /** DescriptorProto reservedName */
            reservedName?: (string[]|null);
        }

        /** Represents a DescriptorProto. */
        class DescriptorProto implements IDescriptorProto {

            /**
             * Constructs a new DescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDescriptorProto);

            /** DescriptorProto name. */
            public name: string;

            /** DescriptorProto field. */
            public field: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto nestedType. */
            public nestedType: google.protobuf.IDescriptorProto[];

            /** DescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** DescriptorProto extensionRange. */
            public extensionRange: google.protobuf.DescriptorProto.IExtensionRange[];

            /** DescriptorProto oneofDecl. */
            public oneofDecl: google.protobuf.IOneofDescriptorProto[];

            /** DescriptorProto options. */
            public options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange. */
            public reservedRange: google.protobuf.DescriptorProto.IReservedRange[];

            /** DescriptorProto reservedName. */
            public reservedName: string[];

            /**
             * Creates a new DescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DescriptorProto instance
             */
            public static create(properties?: google.protobuf.IDescriptorProto): google.protobuf.DescriptorProto;

            /**
             * Encodes the specified DescriptorProto message. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto;

            /**
             * Verifies a DescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto;

            /**
             * Creates a plain object from a DescriptorProto message. Also converts values to other types if specified.
             * @param message DescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.DescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace DescriptorProto {

            /** Properties of an ExtensionRange. */
            interface IExtensionRange {

                /** ExtensionRange start */
                start?: (number|null);

                /** ExtensionRange end */
                end?: (number|null);

                /** ExtensionRange options */
                options?: (google.protobuf.IExtensionRangeOptions|null);
            }

            /** Represents an ExtensionRange. */
            class ExtensionRange implements IExtensionRange {

                /**
                 * Constructs a new ExtensionRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IExtensionRange);

                /** ExtensionRange start. */
                public start: number;

                /** ExtensionRange end. */
                public end: number;

                /** ExtensionRange options. */
                public options?: (google.protobuf.IExtensionRangeOptions|null);

                /**
                 * Creates a new ExtensionRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ExtensionRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IExtensionRange): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Encodes the specified ExtensionRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ExtensionRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Verifies an ExtensionRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ExtensionRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ExtensionRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Creates a plain object from an ExtensionRange message. Also converts values to other types if specified.
                 * @param message ExtensionRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ExtensionRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ExtensionRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ReservedRange. */
            interface IReservedRange {

                /** ReservedRange start */
                start?: (number|null);

                /** ReservedRange end */
                end?: (number|null);
            }

            /** Represents a ReservedRange. */
            class ReservedRange implements IReservedRange {

                /**
                 * Constructs a new ReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IReservedRange);

                /** ReservedRange start. */
                public start: number;

                /** ReservedRange end. */
                public end: number;

                /**
                 * Creates a new ReservedRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ReservedRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IReservedRange): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Encodes the specified ReservedRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ReservedRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Verifies a ReservedRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ReservedRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Creates a plain object from a ReservedRange message. Also converts values to other types if specified.
                 * @param message ReservedRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ReservedRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ReservedRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of an ExtensionRangeOptions. */
        interface IExtensionRangeOptions {

            /** ExtensionRangeOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an ExtensionRangeOptions. */
        class ExtensionRangeOptions implements IExtensionRangeOptions {

            /**
             * Constructs a new ExtensionRangeOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IExtensionRangeOptions);

            /** ExtensionRangeOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new ExtensionRangeOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExtensionRangeOptions instance
             */
            public static create(properties?: google.protobuf.IExtensionRangeOptions): google.protobuf.ExtensionRangeOptions;

            /**
             * Encodes the specified ExtensionRangeOptions message. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.verify|verify} messages.
             * @param message ExtensionRangeOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IExtensionRangeOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ExtensionRangeOptions message, length delimited. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.verify|verify} messages.
             * @param message ExtensionRangeOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IExtensionRangeOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExtensionRangeOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExtensionRangeOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ExtensionRangeOptions;

            /**
             * Decodes an ExtensionRangeOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ExtensionRangeOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ExtensionRangeOptions;

            /**
             * Verifies an ExtensionRangeOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ExtensionRangeOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ExtensionRangeOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ExtensionRangeOptions;

            /**
             * Creates a plain object from an ExtensionRangeOptions message. Also converts values to other types if specified.
             * @param message ExtensionRangeOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ExtensionRangeOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ExtensionRangeOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FieldDescriptorProto. */
        interface IFieldDescriptorProto {

            /** FieldDescriptorProto name */
            name?: (string|null);

            /** FieldDescriptorProto number */
            number?: (number|null);

            /** FieldDescriptorProto label */
            label?: (google.protobuf.FieldDescriptorProto.Label|keyof typeof google.protobuf.FieldDescriptorProto.Label|null);

            /** FieldDescriptorProto type */
            type?: (google.protobuf.FieldDescriptorProto.Type|keyof typeof google.protobuf.FieldDescriptorProto.Type|null);

            /** FieldDescriptorProto typeName */
            typeName?: (string|null);

            /** FieldDescriptorProto extendee */
            extendee?: (string|null);

            /** FieldDescriptorProto defaultValue */
            defaultValue?: (string|null);

            /** FieldDescriptorProto oneofIndex */
            oneofIndex?: (number|null);

            /** FieldDescriptorProto jsonName */
            jsonName?: (string|null);

            /** FieldDescriptorProto options */
            options?: (google.protobuf.IFieldOptions|null);

            /** FieldDescriptorProto proto3Optional */
            proto3Optional?: (boolean|null);
        }

        /** Represents a FieldDescriptorProto. */
        class FieldDescriptorProto implements IFieldDescriptorProto {

            /**
             * Constructs a new FieldDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldDescriptorProto);

            /** FieldDescriptorProto name. */
            public name: string;

            /** FieldDescriptorProto number. */
            public number: number;

            /** FieldDescriptorProto label. */
            public label: (google.protobuf.FieldDescriptorProto.Label|keyof typeof google.protobuf.FieldDescriptorProto.Label);

            /** FieldDescriptorProto type. */
            public type: (google.protobuf.FieldDescriptorProto.Type|keyof typeof google.protobuf.FieldDescriptorProto.Type);

            /** FieldDescriptorProto typeName. */
            public typeName: string;

            /** FieldDescriptorProto extendee. */
            public extendee: string;

            /** FieldDescriptorProto defaultValue. */
            public defaultValue: string;

            /** FieldDescriptorProto oneofIndex. */
            public oneofIndex: number;

            /** FieldDescriptorProto jsonName. */
            public jsonName: string;

            /** FieldDescriptorProto options. */
            public options?: (google.protobuf.IFieldOptions|null);

            /** FieldDescriptorProto proto3Optional. */
            public proto3Optional: boolean;

            /**
             * Creates a new FieldDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFieldDescriptorProto): google.protobuf.FieldDescriptorProto;

            /**
             * Encodes the specified FieldDescriptorProto message. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldDescriptorProto;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldDescriptorProto;

            /**
             * Verifies a FieldDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldDescriptorProto;

            /**
             * Creates a plain object from a FieldDescriptorProto message. Also converts values to other types if specified.
             * @param message FieldDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FieldDescriptorProto {

            /** Type enum. */
            enum Type {
                TYPE_DOUBLE = 1,
                TYPE_FLOAT = 2,
                TYPE_INT64 = 3,
                TYPE_UINT64 = 4,
                TYPE_INT32 = 5,
                TYPE_FIXED64 = 6,
                TYPE_FIXED32 = 7,
                TYPE_BOOL = 8,
                TYPE_STRING = 9,
                TYPE_GROUP = 10,
                TYPE_MESSAGE = 11,
                TYPE_BYTES = 12,
                TYPE_UINT32 = 13,
                TYPE_ENUM = 14,
                TYPE_SFIXED32 = 15,
                TYPE_SFIXED64 = 16,
                TYPE_SINT32 = 17,
                TYPE_SINT64 = 18
            }

            /** Label enum. */
            enum Label {
                LABEL_OPTIONAL = 1,
                LABEL_REQUIRED = 2,
                LABEL_REPEATED = 3
            }
        }

        /** Properties of an OneofDescriptorProto. */
        interface IOneofDescriptorProto {

            /** OneofDescriptorProto name */
            name?: (string|null);

            /** OneofDescriptorProto options */
            options?: (google.protobuf.IOneofOptions|null);
        }

        /** Represents an OneofDescriptorProto. */
        class OneofDescriptorProto implements IOneofDescriptorProto {

            /**
             * Constructs a new OneofDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofDescriptorProto);

            /** OneofDescriptorProto name. */
            public name: string;

            /** OneofDescriptorProto options. */
            public options?: (google.protobuf.IOneofOptions|null);

            /**
             * Creates a new OneofDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IOneofDescriptorProto): google.protobuf.OneofDescriptorProto;

            /**
             * Encodes the specified OneofDescriptorProto message. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofDescriptorProto;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofDescriptorProto;

            /**
             * Verifies an OneofDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofDescriptorProto;

            /**
             * Creates a plain object from an OneofDescriptorProto message. Also converts values to other types if specified.
             * @param message OneofDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumDescriptorProto. */
        interface IEnumDescriptorProto {

            /** EnumDescriptorProto name */
            name?: (string|null);

            /** EnumDescriptorProto value */
            value?: (google.protobuf.IEnumValueDescriptorProto[]|null);

            /** EnumDescriptorProto options */
            options?: (google.protobuf.IEnumOptions|null);

            /** EnumDescriptorProto reservedRange */
            reservedRange?: (google.protobuf.EnumDescriptorProto.IEnumReservedRange[]|null);

            /** EnumDescriptorProto reservedName */
            reservedName?: (string[]|null);
        }

        /** Represents an EnumDescriptorProto. */
        class EnumDescriptorProto implements IEnumDescriptorProto {

            /**
             * Constructs a new EnumDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumDescriptorProto);

            /** EnumDescriptorProto name. */
            public name: string;

            /** EnumDescriptorProto value. */
            public value: google.protobuf.IEnumValueDescriptorProto[];

            /** EnumDescriptorProto options. */
            public options?: (google.protobuf.IEnumOptions|null);

            /** EnumDescriptorProto reservedRange. */
            public reservedRange: google.protobuf.EnumDescriptorProto.IEnumReservedRange[];

            /** EnumDescriptorProto reservedName. */
            public reservedName: string[];

            /**
             * Creates a new EnumDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumDescriptorProto): google.protobuf.EnumDescriptorProto;

            /**
             * Encodes the specified EnumDescriptorProto message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumDescriptorProto;

            /**
             * Verifies an EnumDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto;

            /**
             * Creates a plain object from an EnumDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace EnumDescriptorProto {

            /** Properties of an EnumReservedRange. */
            interface IEnumReservedRange {

                /** EnumReservedRange start */
                start?: (number|null);

                /** EnumReservedRange end */
                end?: (number|null);
            }

            /** Represents an EnumReservedRange. */
            class EnumReservedRange implements IEnumReservedRange {

                /**
                 * Constructs a new EnumReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.EnumDescriptorProto.IEnumReservedRange);

                /** EnumReservedRange start. */
                public start: number;

                /** EnumReservedRange end. */
                public end: number;

                /**
                 * Creates a new EnumReservedRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns EnumReservedRange instance
                 */
                public static create(properties?: google.protobuf.EnumDescriptorProto.IEnumReservedRange): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Encodes the specified EnumReservedRange message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.EnumReservedRange.verify|verify} messages.
                 * @param message EnumReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.EnumDescriptorProto.IEnumReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified EnumReservedRange message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.EnumReservedRange.verify|verify} messages.
                 * @param message EnumReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.EnumDescriptorProto.IEnumReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an EnumReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns EnumReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Decodes an EnumReservedRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns EnumReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Verifies an EnumReservedRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an EnumReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns EnumReservedRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Creates a plain object from an EnumReservedRange message. Also converts values to other types if specified.
                 * @param message EnumReservedRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.EnumDescriptorProto.EnumReservedRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this EnumReservedRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of an EnumValueDescriptorProto. */
        interface IEnumValueDescriptorProto {

            /** EnumValueDescriptorProto name */
            name?: (string|null);

            /** EnumValueDescriptorProto number */
            number?: (number|null);

            /** EnumValueDescriptorProto options */
            options?: (google.protobuf.IEnumValueOptions|null);
        }

        /** Represents an EnumValueDescriptorProto. */
        class EnumValueDescriptorProto implements IEnumValueDescriptorProto {

            /**
             * Constructs a new EnumValueDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueDescriptorProto);

            /** EnumValueDescriptorProto name. */
            public name: string;

            /** EnumValueDescriptorProto number. */
            public number: number;

            /** EnumValueDescriptorProto options. */
            public options?: (google.protobuf.IEnumValueOptions|null);

            /**
             * Creates a new EnumValueDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumValueDescriptorProto): google.protobuf.EnumValueDescriptorProto;

            /**
             * Encodes the specified EnumValueDescriptorProto message. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueDescriptorProto;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueDescriptorProto;

            /**
             * Verifies an EnumValueDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueDescriptorProto;

            /**
             * Creates a plain object from an EnumValueDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumValueDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ServiceDescriptorProto. */
        interface IServiceDescriptorProto {

            /** ServiceDescriptorProto name */
            name?: (string|null);

            /** ServiceDescriptorProto method */
            method?: (google.protobuf.IMethodDescriptorProto[]|null);

            /** ServiceDescriptorProto options */
            options?: (google.protobuf.IServiceOptions|null);
        }

        /** Represents a ServiceDescriptorProto. */
        class ServiceDescriptorProto implements IServiceDescriptorProto {

            /**
             * Constructs a new ServiceDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceDescriptorProto);

            /** ServiceDescriptorProto name. */
            public name: string;

            /** ServiceDescriptorProto method. */
            public method: google.protobuf.IMethodDescriptorProto[];

            /** ServiceDescriptorProto options. */
            public options?: (google.protobuf.IServiceOptions|null);

            /**
             * Creates a new ServiceDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IServiceDescriptorProto): google.protobuf.ServiceDescriptorProto;

            /**
             * Encodes the specified ServiceDescriptorProto message. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceDescriptorProto;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceDescriptorProto;

            /**
             * Verifies a ServiceDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceDescriptorProto;

            /**
             * Creates a plain object from a ServiceDescriptorProto message. Also converts values to other types if specified.
             * @param message ServiceDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MethodDescriptorProto. */
        interface IMethodDescriptorProto {

            /** MethodDescriptorProto name */
            name?: (string|null);

            /** MethodDescriptorProto inputType */
            inputType?: (string|null);

            /** MethodDescriptorProto outputType */
            outputType?: (string|null);

            /** MethodDescriptorProto options */
            options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming */
            clientStreaming?: (boolean|null);

            /** MethodDescriptorProto serverStreaming */
            serverStreaming?: (boolean|null);
        }

        /** Represents a MethodDescriptorProto. */
        class MethodDescriptorProto implements IMethodDescriptorProto {

            /**
             * Constructs a new MethodDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodDescriptorProto);

            /** MethodDescriptorProto name. */
            public name: string;

            /** MethodDescriptorProto inputType. */
            public inputType: string;

            /** MethodDescriptorProto outputType. */
            public outputType: string;

            /** MethodDescriptorProto options. */
            public options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming. */
            public clientStreaming: boolean;

            /** MethodDescriptorProto serverStreaming. */
            public serverStreaming: boolean;

            /**
             * Creates a new MethodDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IMethodDescriptorProto): google.protobuf.MethodDescriptorProto;

            /**
             * Encodes the specified MethodDescriptorProto message. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodDescriptorProto;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodDescriptorProto;

            /**
             * Verifies a MethodDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodDescriptorProto;

            /**
             * Creates a plain object from a MethodDescriptorProto message. Also converts values to other types if specified.
             * @param message MethodDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FileOptions. */
        interface IFileOptions {

            /** FileOptions javaPackage */
            javaPackage?: (string|null);

            /** FileOptions javaOuterClassname */
            javaOuterClassname?: (string|null);

            /** FileOptions javaMultipleFiles */
            javaMultipleFiles?: (boolean|null);

            /** FileOptions javaGenerateEqualsAndHash */
            javaGenerateEqualsAndHash?: (boolean|null);

            /** FileOptions javaStringCheckUtf8 */
            javaStringCheckUtf8?: (boolean|null);

            /** FileOptions optimizeFor */
            optimizeFor?: (google.protobuf.FileOptions.OptimizeMode|keyof typeof google.protobuf.FileOptions.OptimizeMode|null);

            /** FileOptions goPackage */
            goPackage?: (string|null);

            /** FileOptions ccGenericServices */
            ccGenericServices?: (boolean|null);

            /** FileOptions javaGenericServices */
            javaGenericServices?: (boolean|null);

            /** FileOptions pyGenericServices */
            pyGenericServices?: (boolean|null);

            /** FileOptions phpGenericServices */
            phpGenericServices?: (boolean|null);

            /** FileOptions deprecated */
            deprecated?: (boolean|null);

            /** FileOptions ccEnableArenas */
            ccEnableArenas?: (boolean|null);

            /** FileOptions objcClassPrefix */
            objcClassPrefix?: (string|null);

            /** FileOptions csharpNamespace */
            csharpNamespace?: (string|null);

            /** FileOptions swiftPrefix */
            swiftPrefix?: (string|null);

            /** FileOptions phpClassPrefix */
            phpClassPrefix?: (string|null);

            /** FileOptions phpNamespace */
            phpNamespace?: (string|null);

            /** FileOptions phpMetadataNamespace */
            phpMetadataNamespace?: (string|null);

            /** FileOptions rubyPackage */
            rubyPackage?: (string|null);

            /** FileOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents a FileOptions. */
        class FileOptions implements IFileOptions {

            /**
             * Constructs a new FileOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileOptions);

            /** FileOptions javaPackage. */
            public javaPackage: string;

            /** FileOptions javaOuterClassname. */
            public javaOuterClassname: string;

            /** FileOptions javaMultipleFiles. */
            public javaMultipleFiles: boolean;

            /** FileOptions javaGenerateEqualsAndHash. */
            public javaGenerateEqualsAndHash: boolean;

            /** FileOptions javaStringCheckUtf8. */
            public javaStringCheckUtf8: boolean;

            /** FileOptions optimizeFor. */
            public optimizeFor: (google.protobuf.FileOptions.OptimizeMode|keyof typeof google.protobuf.FileOptions.OptimizeMode);

            /** FileOptions goPackage. */
            public goPackage: string;

            /** FileOptions ccGenericServices. */
            public ccGenericServices: boolean;

            /** FileOptions javaGenericServices. */
            public javaGenericServices: boolean;

            /** FileOptions pyGenericServices. */
            public pyGenericServices: boolean;

            /** FileOptions phpGenericServices. */
            public phpGenericServices: boolean;

            /** FileOptions deprecated. */
            public deprecated: boolean;

            /** FileOptions ccEnableArenas. */
            public ccEnableArenas: boolean;

            /** FileOptions objcClassPrefix. */
            public objcClassPrefix: string;

            /** FileOptions csharpNamespace. */
            public csharpNamespace: string;

            /** FileOptions swiftPrefix. */
            public swiftPrefix: string;

            /** FileOptions phpClassPrefix. */
            public phpClassPrefix: string;

            /** FileOptions phpNamespace. */
            public phpNamespace: string;

            /** FileOptions phpMetadataNamespace. */
            public phpMetadataNamespace: string;

            /** FileOptions rubyPackage. */
            public rubyPackage: string;

            /** FileOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FileOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileOptions instance
             */
            public static create(properties?: google.protobuf.IFileOptions): google.protobuf.FileOptions;

            /**
             * Encodes the specified FileOptions message. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileOptions message, length delimited. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileOptions;

            /**
             * Decodes a FileOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileOptions;

            /**
             * Verifies a FileOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileOptions;

            /**
             * Creates a plain object from a FileOptions message. Also converts values to other types if specified.
             * @param message FileOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FileOptions {

            /** OptimizeMode enum. */
            enum OptimizeMode {
                SPEED = 1,
                CODE_SIZE = 2,
                LITE_RUNTIME = 3
            }
        }

        /** Properties of a MessageOptions. */
        interface IMessageOptions {

            /** MessageOptions messageSetWireFormat */
            messageSetWireFormat?: (boolean|null);

            /** MessageOptions noStandardDescriptorAccessor */
            noStandardDescriptorAccessor?: (boolean|null);

            /** MessageOptions deprecated */
            deprecated?: (boolean|null);

            /** MessageOptions mapEntry */
            mapEntry?: (boolean|null);

            /** MessageOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents a MessageOptions. */
        class MessageOptions implements IMessageOptions {

            /**
             * Constructs a new MessageOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMessageOptions);

            /** MessageOptions messageSetWireFormat. */
            public messageSetWireFormat: boolean;

            /** MessageOptions noStandardDescriptorAccessor. */
            public noStandardDescriptorAccessor: boolean;

            /** MessageOptions deprecated. */
            public deprecated: boolean;

            /** MessageOptions mapEntry. */
            public mapEntry: boolean;

            /** MessageOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MessageOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageOptions instance
             */
            public static create(properties?: google.protobuf.IMessageOptions): google.protobuf.MessageOptions;

            /**
             * Encodes the specified MessageOptions message. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageOptions message, length delimited. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MessageOptions;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MessageOptions;

            /**
             * Verifies a MessageOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MessageOptions;

            /**
             * Creates a plain object from a MessageOptions message. Also converts values to other types if specified.
             * @param message MessageOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MessageOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FieldOptions. */
        interface IFieldOptions {

            /** FieldOptions ctype */
            ctype?: (google.protobuf.FieldOptions.CType|keyof typeof google.protobuf.FieldOptions.CType|null);

            /** FieldOptions packed */
            packed?: (boolean|null);

            /** FieldOptions jstype */
            jstype?: (google.protobuf.FieldOptions.JSType|keyof typeof google.protobuf.FieldOptions.JSType|null);

            /** FieldOptions lazy */
            lazy?: (boolean|null);

            /** FieldOptions deprecated */
            deprecated?: (boolean|null);

            /** FieldOptions weak */
            weak?: (boolean|null);

            /** FieldOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** FieldOptions .google.api.fieldBehavior */
            ".google.api.fieldBehavior"?: (google.api.FieldBehavior[]|null);
        }

        /** Represents a FieldOptions. */
        class FieldOptions implements IFieldOptions {

            /**
             * Constructs a new FieldOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldOptions);

            /** FieldOptions ctype. */
            public ctype: (google.protobuf.FieldOptions.CType|keyof typeof google.protobuf.FieldOptions.CType);

            /** FieldOptions packed. */
            public packed: boolean;

            /** FieldOptions jstype. */
            public jstype: (google.protobuf.FieldOptions.JSType|keyof typeof google.protobuf.FieldOptions.JSType);

            /** FieldOptions lazy. */
            public lazy: boolean;

            /** FieldOptions deprecated. */
            public deprecated: boolean;

            /** FieldOptions weak. */
            public weak: boolean;

            /** FieldOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FieldOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldOptions instance
             */
            public static create(properties?: google.protobuf.IFieldOptions): google.protobuf.FieldOptions;

            /**
             * Encodes the specified FieldOptions message. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldOptions message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldOptions;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldOptions;

            /**
             * Verifies a FieldOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldOptions;

            /**
             * Creates a plain object from a FieldOptions message. Also converts values to other types if specified.
             * @param message FieldOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FieldOptions {

            /** CType enum. */
            enum CType {
                STRING = 0,
                CORD = 1,
                STRING_PIECE = 2
            }

            /** JSType enum. */
            enum JSType {
                JS_NORMAL = 0,
                JS_STRING = 1,
                JS_NUMBER = 2
            }
        }

        /** Properties of an OneofOptions. */
        interface IOneofOptions {

            /** OneofOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an OneofOptions. */
        class OneofOptions implements IOneofOptions {

            /**
             * Constructs a new OneofOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofOptions);

            /** OneofOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new OneofOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofOptions instance
             */
            public static create(properties?: google.protobuf.IOneofOptions): google.protobuf.OneofOptions;

            /**
             * Encodes the specified OneofOptions message. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofOptions message, length delimited. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofOptions;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofOptions;

            /**
             * Verifies an OneofOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofOptions;

            /**
             * Creates a plain object from an OneofOptions message. Also converts values to other types if specified.
             * @param message OneofOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumOptions. */
        interface IEnumOptions {

            /** EnumOptions allowAlias */
            allowAlias?: (boolean|null);

            /** EnumOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an EnumOptions. */
        class EnumOptions implements IEnumOptions {

            /**
             * Constructs a new EnumOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumOptions);

            /** EnumOptions allowAlias. */
            public allowAlias: boolean;

            /** EnumOptions deprecated. */
            public deprecated: boolean;

            /** EnumOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumOptions instance
             */
            public static create(properties?: google.protobuf.IEnumOptions): google.protobuf.EnumOptions;

            /**
             * Encodes the specified EnumOptions message. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumOptions;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumOptions;

            /**
             * Verifies an EnumOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumOptions;

            /**
             * Creates a plain object from an EnumOptions message. Also converts values to other types if specified.
             * @param message EnumOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumValueOptions. */
        interface IEnumValueOptions {

            /** EnumValueOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumValueOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an EnumValueOptions. */
        class EnumValueOptions implements IEnumValueOptions {

            /**
             * Constructs a new EnumValueOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueOptions);

            /** EnumValueOptions deprecated. */
            public deprecated: boolean;

            /** EnumValueOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumValueOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueOptions instance
             */
            public static create(properties?: google.protobuf.IEnumValueOptions): google.protobuf.EnumValueOptions;

            /**
             * Encodes the specified EnumValueOptions message. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueOptions;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueOptions;

            /**
             * Verifies an EnumValueOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueOptions;

            /**
             * Creates a plain object from an EnumValueOptions message. Also converts values to other types if specified.
             * @param message EnumValueOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ServiceOptions. */
        interface IServiceOptions {

            /** ServiceOptions deprecated */
            deprecated?: (boolean|null);

            /** ServiceOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** ServiceOptions .google.api.defaultHost */
            ".google.api.defaultHost"?: (string|null);

            /** ServiceOptions .google.api.oauthScopes */
            ".google.api.oauthScopes"?: (string|null);
        }

        /** Represents a ServiceOptions. */
        class ServiceOptions implements IServiceOptions {

            /**
             * Constructs a new ServiceOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceOptions);

            /** ServiceOptions deprecated. */
            public deprecated: boolean;

            /** ServiceOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new ServiceOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceOptions instance
             */
            public static create(properties?: google.protobuf.IServiceOptions): google.protobuf.ServiceOptions;

            /**
             * Encodes the specified ServiceOptions message. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceOptions message, length delimited. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceOptions;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceOptions;

            /**
             * Verifies a ServiceOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceOptions;

            /**
             * Creates a plain object from a ServiceOptions message. Also converts values to other types if specified.
             * @param message ServiceOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MethodOptions. */
        interface IMethodOptions {

            /** MethodOptions deprecated */
            deprecated?: (boolean|null);

            /** MethodOptions idempotencyLevel */
            idempotencyLevel?: (google.protobuf.MethodOptions.IdempotencyLevel|keyof typeof google.protobuf.MethodOptions.IdempotencyLevel|null);

            /** MethodOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** MethodOptions .google.api.http */
            ".google.api.http"?: (google.api.IHttpRule|null);

            /** MethodOptions .google.api.methodSignature */
            ".google.api.methodSignature"?: (string[]|null);
        }

        /** Represents a MethodOptions. */
        class MethodOptions implements IMethodOptions {

            /**
             * Constructs a new MethodOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodOptions);

            /** MethodOptions deprecated. */
            public deprecated: boolean;

            /** MethodOptions idempotencyLevel. */
            public idempotencyLevel: (google.protobuf.MethodOptions.IdempotencyLevel|keyof typeof google.protobuf.MethodOptions.IdempotencyLevel);

            /** MethodOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MethodOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodOptions instance
             */
            public static create(properties?: google.protobuf.IMethodOptions): google.protobuf.MethodOptions;

            /**
             * Encodes the specified MethodOptions message. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodOptions message, length delimited. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodOptions;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodOptions;

            /**
             * Verifies a MethodOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodOptions;

            /**
             * Creates a plain object from a MethodOptions message. Also converts values to other types if specified.
             * @param message MethodOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace MethodOptions {

            /** IdempotencyLevel enum. */
            enum IdempotencyLevel {
                IDEMPOTENCY_UNKNOWN = 0,
                NO_SIDE_EFFECTS = 1,
                IDEMPOTENT = 2
            }
        }

        /** Properties of an UninterpretedOption. */
        interface IUninterpretedOption {

            /** UninterpretedOption name */
            name?: (google.protobuf.UninterpretedOption.INamePart[]|null);

            /** UninterpretedOption identifierValue */
            identifierValue?: (string|null);

            /** UninterpretedOption positiveIntValue */
            positiveIntValue?: (number|Long|string|null);

            /** UninterpretedOption negativeIntValue */
            negativeIntValue?: (number|Long|string|null);

            /** UninterpretedOption doubleValue */
            doubleValue?: (number|null);

            /** UninterpretedOption stringValue */
            stringValue?: (Uint8Array|string|null);

            /** UninterpretedOption aggregateValue */
            aggregateValue?: (string|null);
        }

        /** Represents an UninterpretedOption. */
        class UninterpretedOption implements IUninterpretedOption {

            /**
             * Constructs a new UninterpretedOption.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUninterpretedOption);

            /** UninterpretedOption name. */
            public name: google.protobuf.UninterpretedOption.INamePart[];

            /** UninterpretedOption identifierValue. */
            public identifierValue: string;

            /** UninterpretedOption positiveIntValue. */
            public positiveIntValue: (number|Long|string);

            /** UninterpretedOption negativeIntValue. */
            public negativeIntValue: (number|Long|string);

            /** UninterpretedOption doubleValue. */
            public doubleValue: number;

            /** UninterpretedOption stringValue. */
            public stringValue: (Uint8Array|string);

            /** UninterpretedOption aggregateValue. */
            public aggregateValue: string;

            /**
             * Creates a new UninterpretedOption instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UninterpretedOption instance
             */
            public static create(properties?: google.protobuf.IUninterpretedOption): google.protobuf.UninterpretedOption;

            /**
             * Encodes the specified UninterpretedOption message. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UninterpretedOption message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption;

            /**
             * Verifies an UninterpretedOption message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UninterpretedOption message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UninterpretedOption
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption;

            /**
             * Creates a plain object from an UninterpretedOption message. Also converts values to other types if specified.
             * @param message UninterpretedOption
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UninterpretedOption, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UninterpretedOption to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace UninterpretedOption {

            /** Properties of a NamePart. */
            interface INamePart {

                /** NamePart namePart */
                namePart: string;

                /** NamePart isExtension */
                isExtension: boolean;
            }

            /** Represents a NamePart. */
            class NamePart implements INamePart {

                /**
                 * Constructs a new NamePart.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.UninterpretedOption.INamePart);

                /** NamePart namePart. */
                public namePart: string;

                /** NamePart isExtension. */
                public isExtension: boolean;

                /**
                 * Creates a new NamePart instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NamePart instance
                 */
                public static create(properties?: google.protobuf.UninterpretedOption.INamePart): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Encodes the specified NamePart message. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NamePart message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NamePart message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Decodes a NamePart message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Verifies a NamePart message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NamePart message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NamePart
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Creates a plain object from a NamePart message. Also converts values to other types if specified.
                 * @param message NamePart
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.UninterpretedOption.NamePart, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NamePart to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a SourceCodeInfo. */
        interface ISourceCodeInfo {

            /** SourceCodeInfo location */
            location?: (google.protobuf.SourceCodeInfo.ILocation[]|null);
        }

        /** Represents a SourceCodeInfo. */
        class SourceCodeInfo implements ISourceCodeInfo {

            /**
             * Constructs a new SourceCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ISourceCodeInfo);

            /** SourceCodeInfo location. */
            public location: google.protobuf.SourceCodeInfo.ILocation[];

            /**
             * Creates a new SourceCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SourceCodeInfo instance
             */
            public static create(properties?: google.protobuf.ISourceCodeInfo): google.protobuf.SourceCodeInfo;

            /**
             * Encodes the specified SourceCodeInfo message. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SourceCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo;

            /**
             * Verifies a SourceCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SourceCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SourceCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo;

            /**
             * Creates a plain object from a SourceCodeInfo message. Also converts values to other types if specified.
             * @param message SourceCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.SourceCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SourceCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace SourceCodeInfo {

            /** Properties of a Location. */
            interface ILocation {

                /** Location path */
                path?: (number[]|null);

                /** Location span */
                span?: (number[]|null);

                /** Location leadingComments */
                leadingComments?: (string|null);

                /** Location trailingComments */
                trailingComments?: (string|null);

                /** Location leadingDetachedComments */
                leadingDetachedComments?: (string[]|null);
            }

            /** Represents a Location. */
            class Location implements ILocation {

                /**
                 * Constructs a new Location.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.SourceCodeInfo.ILocation);

                /** Location path. */
                public path: number[];

                /** Location span. */
                public span: number[];

                /** Location leadingComments. */
                public leadingComments: string;

                /** Location trailingComments. */
                public trailingComments: string;

                /** Location leadingDetachedComments. */
                public leadingDetachedComments: string[];

                /**
                 * Creates a new Location instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Location instance
                 */
                public static create(properties?: google.protobuf.SourceCodeInfo.ILocation): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Encodes the specified Location message. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Location message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Location message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Decodes a Location message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Verifies a Location message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Location message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Location
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Creates a plain object from a Location message. Also converts values to other types if specified.
                 * @param message Location
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.SourceCodeInfo.Location, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Location to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a GeneratedCodeInfo. */
        interface IGeneratedCodeInfo {

            /** GeneratedCodeInfo annotation */
            annotation?: (google.protobuf.GeneratedCodeInfo.IAnnotation[]|null);
        }

        /** Represents a GeneratedCodeInfo. */
        class GeneratedCodeInfo implements IGeneratedCodeInfo {

            /**
             * Constructs a new GeneratedCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IGeneratedCodeInfo);

            /** GeneratedCodeInfo annotation. */
            public annotation: google.protobuf.GeneratedCodeInfo.IAnnotation[];

            /**
             * Creates a new GeneratedCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GeneratedCodeInfo instance
             */
            public static create(properties?: google.protobuf.IGeneratedCodeInfo): google.protobuf.GeneratedCodeInfo;

            /**
             * Encodes the specified GeneratedCodeInfo message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GeneratedCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo;

            /**
             * Verifies a GeneratedCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GeneratedCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GeneratedCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo;

            /**
             * Creates a plain object from a GeneratedCodeInfo message. Also converts values to other types if specified.
             * @param message GeneratedCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.GeneratedCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GeneratedCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace GeneratedCodeInfo {

            /** Properties of an Annotation. */
            interface IAnnotation {

                /** Annotation path */
                path?: (number[]|null);

                /** Annotation sourceFile */
                sourceFile?: (string|null);

                /** Annotation begin */
                begin?: (number|null);

                /** Annotation end */
                end?: (number|null);
            }

            /** Represents an Annotation. */
            class Annotation implements IAnnotation {

                /**
                 * Constructs a new Annotation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation);

                /** Annotation path. */
                public path: number[];

                /** Annotation sourceFile. */
                public sourceFile: string;

                /** Annotation begin. */
                public begin: number;

                /** Annotation end. */
                public end: number;

                /**
                 * Creates a new Annotation instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Annotation instance
                 */
                public static create(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Encodes the specified Annotation message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Annotation message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Annotation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Decodes an Annotation message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Verifies an Annotation message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Annotation
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Creates a plain object from an Annotation message. Also converts values to other types if specified.
                 * @param message Annotation
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.GeneratedCodeInfo.Annotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Annotation to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a Timestamp. */
        interface ITimestamp {

            /** Timestamp seconds */
            seconds?: (number|Long|string|null);

            /** Timestamp nanos */
            nanos?: (number|null);
        }

        /** Represents a Timestamp. */
        class Timestamp implements ITimestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ITimestamp);

            /** Timestamp seconds. */
            public seconds: (number|Long|string);

            /** Timestamp nanos. */
            public nanos: number;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Timestamp instance
             */
            public static create(properties?: google.protobuf.ITimestamp): google.protobuf.Timestamp;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp;

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Timestamp;

            /**
             * Verifies a Timestamp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Timestamp
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Timestamp;

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @param message Timestamp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Timestamp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DoubleValue. */
        interface IDoubleValue {

            /** DoubleValue value */
            value?: (number|null);
        }

        /** Represents a DoubleValue. */
        class DoubleValue implements IDoubleValue {

            /**
             * Constructs a new DoubleValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDoubleValue);

            /** DoubleValue value. */
            public value: number;

            /**
             * Creates a new DoubleValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DoubleValue instance
             */
            public static create(properties?: google.protobuf.IDoubleValue): google.protobuf.DoubleValue;

            /**
             * Encodes the specified DoubleValue message. Does not implicitly {@link google.protobuf.DoubleValue.verify|verify} messages.
             * @param message DoubleValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDoubleValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DoubleValue message, length delimited. Does not implicitly {@link google.protobuf.DoubleValue.verify|verify} messages.
             * @param message DoubleValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDoubleValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DoubleValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DoubleValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DoubleValue;

            /**
             * Decodes a DoubleValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DoubleValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DoubleValue;

            /**
             * Verifies a DoubleValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DoubleValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DoubleValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.DoubleValue;

            /**
             * Creates a plain object from a DoubleValue message. Also converts values to other types if specified.
             * @param message DoubleValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.DoubleValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DoubleValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FloatValue. */
        interface IFloatValue {

            /** FloatValue value */
            value?: (number|null);
        }

        /** Represents a FloatValue. */
        class FloatValue implements IFloatValue {

            /**
             * Constructs a new FloatValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFloatValue);

            /** FloatValue value. */
            public value: number;

            /**
             * Creates a new FloatValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FloatValue instance
             */
            public static create(properties?: google.protobuf.IFloatValue): google.protobuf.FloatValue;

            /**
             * Encodes the specified FloatValue message. Does not implicitly {@link google.protobuf.FloatValue.verify|verify} messages.
             * @param message FloatValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFloatValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FloatValue message, length delimited. Does not implicitly {@link google.protobuf.FloatValue.verify|verify} messages.
             * @param message FloatValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFloatValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FloatValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FloatValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FloatValue;

            /**
             * Decodes a FloatValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FloatValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FloatValue;

            /**
             * Verifies a FloatValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FloatValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FloatValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FloatValue;

            /**
             * Creates a plain object from a FloatValue message. Also converts values to other types if specified.
             * @param message FloatValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FloatValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FloatValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Int64Value. */
        interface IInt64Value {

            /** Int64Value value */
            value?: (number|Long|string|null);
        }

        /** Represents an Int64Value. */
        class Int64Value implements IInt64Value {

            /**
             * Constructs a new Int64Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IInt64Value);

            /** Int64Value value. */
            public value: (number|Long|string);

            /**
             * Creates a new Int64Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Int64Value instance
             */
            public static create(properties?: google.protobuf.IInt64Value): google.protobuf.Int64Value;

            /**
             * Encodes the specified Int64Value message. Does not implicitly {@link google.protobuf.Int64Value.verify|verify} messages.
             * @param message Int64Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Int64Value message, length delimited. Does not implicitly {@link google.protobuf.Int64Value.verify|verify} messages.
             * @param message Int64Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Int64Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Int64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Int64Value;

            /**
             * Decodes an Int64Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Int64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Int64Value;

            /**
             * Verifies an Int64Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Int64Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Int64Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Int64Value;

            /**
             * Creates a plain object from an Int64Value message. Also converts values to other types if specified.
             * @param message Int64Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Int64Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Int64Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a UInt64Value. */
        interface IUInt64Value {

            /** UInt64Value value */
            value?: (number|Long|string|null);
        }

        /** Represents a UInt64Value. */
        class UInt64Value implements IUInt64Value {

            /**
             * Constructs a new UInt64Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUInt64Value);

            /** UInt64Value value. */
            public value: (number|Long|string);

            /**
             * Creates a new UInt64Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UInt64Value instance
             */
            public static create(properties?: google.protobuf.IUInt64Value): google.protobuf.UInt64Value;

            /**
             * Encodes the specified UInt64Value message. Does not implicitly {@link google.protobuf.UInt64Value.verify|verify} messages.
             * @param message UInt64Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UInt64Value message, length delimited. Does not implicitly {@link google.protobuf.UInt64Value.verify|verify} messages.
             * @param message UInt64Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IUInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UInt64Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UInt64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UInt64Value;

            /**
             * Decodes a UInt64Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UInt64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UInt64Value;

            /**
             * Verifies a UInt64Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UInt64Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UInt64Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UInt64Value;

            /**
             * Creates a plain object from a UInt64Value message. Also converts values to other types if specified.
             * @param message UInt64Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UInt64Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UInt64Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Int32Value. */
        interface IInt32Value {

            /** Int32Value value */
            value?: (number|null);
        }

        /** Represents an Int32Value. */
        class Int32Value implements IInt32Value {

            /**
             * Constructs a new Int32Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IInt32Value);

            /** Int32Value value. */
            public value: number;

            /**
             * Creates a new Int32Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Int32Value instance
             */
            public static create(properties?: google.protobuf.IInt32Value): google.protobuf.Int32Value;

            /**
             * Encodes the specified Int32Value message. Does not implicitly {@link google.protobuf.Int32Value.verify|verify} messages.
             * @param message Int32Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Int32Value message, length delimited. Does not implicitly {@link google.protobuf.Int32Value.verify|verify} messages.
             * @param message Int32Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Int32Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Int32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Int32Value;

            /**
             * Decodes an Int32Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Int32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Int32Value;

            /**
             * Verifies an Int32Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Int32Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Int32Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Int32Value;

            /**
             * Creates a plain object from an Int32Value message. Also converts values to other types if specified.
             * @param message Int32Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Int32Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Int32Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a UInt32Value. */
        interface IUInt32Value {

            /** UInt32Value value */
            value?: (number|null);
        }

        /** Represents a UInt32Value. */
        class UInt32Value implements IUInt32Value {

            /**
             * Constructs a new UInt32Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUInt32Value);

            /** UInt32Value value. */
            public value: number;

            /**
             * Creates a new UInt32Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UInt32Value instance
             */
            public static create(properties?: google.protobuf.IUInt32Value): google.protobuf.UInt32Value;

            /**
             * Encodes the specified UInt32Value message. Does not implicitly {@link google.protobuf.UInt32Value.verify|verify} messages.
             * @param message UInt32Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UInt32Value message, length delimited. Does not implicitly {@link google.protobuf.UInt32Value.verify|verify} messages.
             * @param message UInt32Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IUInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UInt32Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UInt32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UInt32Value;

            /**
             * Decodes a UInt32Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UInt32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UInt32Value;

            /**
             * Verifies a UInt32Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UInt32Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UInt32Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UInt32Value;

            /**
             * Creates a plain object from a UInt32Value message. Also converts values to other types if specified.
             * @param message UInt32Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UInt32Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UInt32Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a BoolValue. */
        interface IBoolValue {

            /** BoolValue value */
            value?: (boolean|null);
        }

        /** Represents a BoolValue. */
        class BoolValue implements IBoolValue {

            /**
             * Constructs a new BoolValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IBoolValue);

            /** BoolValue value. */
            public value: boolean;

            /**
             * Creates a new BoolValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BoolValue instance
             */
            public static create(properties?: google.protobuf.IBoolValue): google.protobuf.BoolValue;

            /**
             * Encodes the specified BoolValue message. Does not implicitly {@link google.protobuf.BoolValue.verify|verify} messages.
             * @param message BoolValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IBoolValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BoolValue message, length delimited. Does not implicitly {@link google.protobuf.BoolValue.verify|verify} messages.
             * @param message BoolValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IBoolValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BoolValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BoolValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.BoolValue;

            /**
             * Decodes a BoolValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BoolValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.BoolValue;

            /**
             * Verifies a BoolValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BoolValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BoolValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.BoolValue;

            /**
             * Creates a plain object from a BoolValue message. Also converts values to other types if specified.
             * @param message BoolValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.BoolValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BoolValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a StringValue. */
        interface IStringValue {

            /** StringValue value */
            value?: (string|null);
        }

        /** Represents a StringValue. */
        class StringValue implements IStringValue {

            /**
             * Constructs a new StringValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IStringValue);

            /** StringValue value. */
            public value: string;

            /**
             * Creates a new StringValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StringValue instance
             */
            public static create(properties?: google.protobuf.IStringValue): google.protobuf.StringValue;

            /**
             * Encodes the specified StringValue message. Does not implicitly {@link google.protobuf.StringValue.verify|verify} messages.
             * @param message StringValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IStringValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StringValue message, length delimited. Does not implicitly {@link google.protobuf.StringValue.verify|verify} messages.
             * @param message StringValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IStringValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StringValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StringValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.StringValue;

            /**
             * Decodes a StringValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StringValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.StringValue;

            /**
             * Verifies a StringValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a StringValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StringValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.StringValue;

            /**
             * Creates a plain object from a StringValue message. Also converts values to other types if specified.
             * @param message StringValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.StringValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StringValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a BytesValue. */
        interface IBytesValue {

            /** BytesValue value */
            value?: (Uint8Array|string|null);
        }

        /** Represents a BytesValue. */
        class BytesValue implements IBytesValue {

            /**
             * Constructs a new BytesValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IBytesValue);

            /** BytesValue value. */
            public value: (Uint8Array|string);

            /**
             * Creates a new BytesValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BytesValue instance
             */
            public static create(properties?: google.protobuf.IBytesValue): google.protobuf.BytesValue;

            /**
             * Encodes the specified BytesValue message. Does not implicitly {@link google.protobuf.BytesValue.verify|verify} messages.
             * @param message BytesValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IBytesValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BytesValue message, length delimited. Does not implicitly {@link google.protobuf.BytesValue.verify|verify} messages.
             * @param message BytesValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IBytesValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BytesValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BytesValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.BytesValue;

            /**
             * Decodes a BytesValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BytesValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.BytesValue;

            /**
             * Verifies a BytesValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BytesValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BytesValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.BytesValue;

            /**
             * Creates a plain object from a BytesValue message. Also converts values to other types if specified.
             * @param message BytesValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.BytesValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BytesValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}
