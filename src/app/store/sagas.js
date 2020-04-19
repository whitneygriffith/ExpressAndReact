import {take, put, select } from 'redux-saga/effects';
import uuid  from 'uuid';
import axios from 'axios';

import * as mutations from './mutations';

const url = "http://localhost:7777";

export function* taskCreationSaga(){
    while(true){
        const  {groupID} = yield take(mutations.REQUEST_TASK_CREATION);
        const ownerID = 'U1';
        const taskID = uuid();
        yield put(mutations.createTask(taskID, groupID, ownerID));
        console.log("Got group ID", groupID);
        const { res } = yield axios.post(url + '/task/new', {
            task:{
                id: taskID, 
                group: groupID, 
                owner: ownerID, 
                isComplete: false, 
                name: "New task"
            }
        });

        console.info("Got  response, ", res);
    }
}