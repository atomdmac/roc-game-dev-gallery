import { injectReducer } from '../../store/reducers';

export default (store) => ({
  path : 'project/:id',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const GameDetails = require('./containers/GameDetailsContainer').default;
      const reducer = require('./modules/game-details').default;

      /*  Add the reducer to the store on key 'gameDetails'  */
      injectReducer(store, { key: 'gameDetails', reducer });

      /*  Return getComponent   */
      cb(null, GameDetails);

    /* Webpack named bundle   */
    }, 'gameDetails');
  }
});
