import { createStore, applyMiddleware, combineReducers } from 'redux';
import {defaultState} from '../../server/defaultState';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
import * as sagas from './sagas.mock';
import * as mutations from './mutations';
import { TaskList } from '../components/TaskList';

export const store = createStore(
    combineReducers({
         tasks(tasks = defaultState.tasks, action){
             switch(action.type){
                 case mutations.CREATE_TASK:
                     return [ ...tasks, {
                         id: action.taskID,
                         name: "New Task",
                         group: action.groupID,
                         owner: action.ownerID,
                         isComplete: false
                     }]
                 case mutations.SET_TASK_COMPLETE:
                     return tasks.map(task =>  {
                        return (task.id === action.taskID) ? 
                            { ...task, isComplete: action.isComplete} : 
                            task;
                     });    
             }
             return tasks;
         },
         comments(comments = defaultState.comments){
             return  comments;
         },
         groups(groups =  defaultState.groups){
             return groups;
         },
         users(groups = defaultState.groups){
             return groups; 
         }
    }),
    applyMiddleware(createLogger(), sagaMiddleware)
);

for (let saga in sagas){
    sagaMiddleware.run(sagas[saga]);
}