'use strict;'

import _ from 'lodash';
import ds from 'deepstream.io-client-js';


function subscribe(){

  var message = document.createElement('message');
  message.innerHTML = "hello deepstream";
  // Connect to deepstreamHub
  var client = ds('wss://154.deepstreamhub.com?apiKey=2a1f5527-cc17-46b6-8204-7abfd4bc6581')
  // Login
  client.login();
  // Listen to record changes
  var record = client.record.getRecord('my-record');
  record.subscribe(function(data) {
      message.innerHTML = data.message;
  });
  return message;
}

document.body.appendChild(subscribe());

