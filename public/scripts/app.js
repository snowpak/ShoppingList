'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = require('react-redux');

var _AppRouter = require('./routers/AppRouter');

var _AppRouter2 = _interopRequireDefault(_AppRouter);

var _configureStore = require('./store/configureStore');

var _configureStore2 = _interopRequireDefault(_configureStore);

var _expenses = require('./actions/expenses');

var _filters = require('./actions/filters');

var _expenses2 = require('./selectors/expenses');

var _expenses3 = _interopRequireDefault(_expenses2);

require('normalize.css/normalize.css');

require('./styles/styles.scss');

require('react-dates/lib/css/_datepicker.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _configureStore2.default)();

store.dispatch((0, _expenses.addExpense)({ description: 'Water bill', amount: 4500 }));
store.dispatch((0, _expenses.addExpense)({ description: 'Gas bill', createdAt: 1000 }));
store.dispatch((0, _expenses.addExpense)({ description: 'Rent', amount: 109500 }));

var state = store.getState();
var visibleExpenses = (0, _expenses3.default)(state.expenses, state.filters);
console.log(visibleExpenses);

var jsx = _react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(_AppRouter2.default, null)
);

_reactDom2.default.render(jsx, document.getElementById('app'));
