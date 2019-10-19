# es6-js-deepdive
angular es6 concepts

# Observables
Observables provide support for passing messages between publishers and subscribers in your application, As a publisher, you create an Observable instance that defines a subscriber function. This is the function that is executed when a consumer calls the subscribe() method. The subscriber function defines how to obtain or generate values or messages to be published.<br/><br/>
Observables are used in reactive programming which deals with a “sequence of asynchronous events”

# Promises vs. Observable
Both Promises and Observables help us to work with the asynchronous functionalities in JavaScript. Promises are values that will resolve in asynchronous ways like http calls. They handle a single event when an asynchronous operation completes or fails. <br/><br/>
Observables are like Promises, except they work with multiple values, they clean up after themselves, they can be cancelled. If the result of a HTTP request or some asynchronous operations isn’t needed anymore, the Subscription of an Observable allows to cancel the subscription, while a Promise will eventually call the success or failed callback even when you don’t need the notification or the result it provides anymore.<br/><br/>
An Observable is like a Stream (in many languages) and allows to pass 0, 1, or more events where the callback is called for each event. They deal with a sequence of asynchronous events.

# Dependency Injection

Car
Car > Engine > Pistons
Car > Wheels