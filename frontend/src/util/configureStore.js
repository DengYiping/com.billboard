import rootReducer from '../reducer/rootReducer';
import { createStore, applyMiddleware, compose} from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import rootEpic from '../epic/rootEpic';

function configureStore(default_state = {}){
    const epicMiddleware = createEpicMiddleware();
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(
        rootReducer,
        default_state,
        composeEnhancers(
            applyMiddleware(epicMiddleware)
    ));
    
    epicMiddleware.run(rootEpic);
    return store;
}

export default configureStore;