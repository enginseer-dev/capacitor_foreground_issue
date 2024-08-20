/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!
    var pushwoosh = cordova.require("pushwoosh-cordova-plugin.PushNotification");

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');

    pushwooshInitialize(pushwoosh);

    registerForPushNotificationAction(pushwoosh);
}

function pushwooshInitialize(pushwoosh) {
    // Should be called before pushwoosh.onDeviceReady
    document.addEventListener('push-notification', function (event) {
        var notification = event.notification;
        // Handle push open here
        console.log('Received push notification: ', notification);
    });
}

function registerForPushNotificationAction(pushwoosh) {
    pushwoosh.setShowPushnotificationAlert(false);
    pushwoosh.registerDevice(
                function (status) {
                    var pushToken = status.pushToken;
                    // Handle successful registration here
                    console.log('Push token received: ', pushToken);
                },
                function (status) {
                    // Handle registration error here
                    console.error('Push registration failed: ', status);
                }
            );
}

function pushwooshInitialize(pushwoosh) {
    // Should be called before pushwoosh.onDeviceReady
    document.addEventListener('push-notification', function (event) {
        var notification = event.notification;
        // Handle push open here
        console.log('Received push notification: ', notification);
    });

/**
 * Function: onDeviceReady
 * [android, ios, wp8, windows] Initialize Pushwoosh plugin and trigger a start push message
 * Should be called on every app launch
 * 
 * Parameters:
 * "config.appid" - Pushwoosh application code
 * "config.projectid" - GCM project number for android platform
 * "config.serviceName" - MPNS service name for wp8 platform
 * 
 * initialize Pushwoosh with projectid: 
 * "GOOGLE_PROJECT_NUMBER", appid : "PUSHWOOSH_APP_ID", serviceName : "WINDOWS_PHONE_SERVICE". 
 * This will trigger all pending push notifications on start.
 *           |    |
 *           |    |
 *         __|    |__
 *         \        /
 *          \      /
 *           \    /
 *            \__/
 */
    pushwoosh.onDeviceReady({        
        appid: "75F3B-35454",
        projectid: "XXXXXXXXXXXXXXX",
        serviceName: "XXXX"
    });
}
