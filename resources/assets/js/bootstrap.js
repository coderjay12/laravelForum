
window._ = require('lodash');

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
    window.$ = window.jQuery = require('jquery');

    require('bootstrap-sass');
} catch (e) {}

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');

window.Vue = require('vue');

window.axios.defaults.headers.common['X-CSRF-TOKEN'] = window.App.csrfToken;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

let authorizations = require('./authorizations.js');

Vue.prototype.signedIn = window.App.signedIn;

Vue.prototype.authorize = function(...params) {
  let user = window.App.loggedUser;
  if (! user) return false;

  return (typeof(params[0]) === 'string') ? authorizations[params[0]](params[1]) : params[0](user);

};

window.events = new Vue();

window.flash = function ( message, type = 'success') {
  window.events.$emit('flash', { message, type });
};
/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo'

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: 'your-pusher-key'
// });