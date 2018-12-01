import rootReducer from '../reducer/rootReducer';
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import rootEpic from '../epic/rootEpic';

function configureStore(default_state = {}){
    const epicMiddleware = createEpicMiddleware();
    const store = createStore(
        rootReducer,
        default_state,
        applyMiddleware(epicMiddleware)
    );
    
    epicMiddleware.run(rootEpic);
    return store;
}

export default configureStore;