import { injectReducer } from '../../store/reducers';

export default (store) => ({
  path : 'search',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const GameSearch = require('./containers/GameSearchContainer').default;
      const reducer = require('./modules/gameSearch').default;

      /*  Add the reducer to the store on key 'gameSearch'  */
      injectReducer(store, { key: 'gameSearch', reducer });

      /*  Return getComponent   */
      cb(null, GameSearch);

    /* Webpack named bundle   */
    }, 'gameSearch');
  }
});
