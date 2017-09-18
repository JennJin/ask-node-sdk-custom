'use strict';

var Alexa = require('alexa-sdk');
var skillContent = require('./ItemsList');


const APP_ID = 'amzn1.ask.skill.edc49b35-aea9-459f-adcc-4f463dbc7f5a';
const SKILL_NAME = 'Banana Facts';
const INVALID_INTENT = "Sorry, I can't do that.";
const STOP_MESSAGE = "Remember, a banana a day, keeps the doctor away!!";

var FACTS = [
    "Did you know there are ancient Egyptian hieroglyphs that depict people with bananas?",
    "Bananas have been around as early back as 6th century B.C. (this is when they were first mentioned in literature)",
    "Miss Chiquita first appeared on the famous banana labels in 1963.",
    "Did you know there is a museum in Auburn, Washington dedicated to bananas? It's called the Washington Banana Museum.",
    "The banana plant reaches its full height of 15 to 30 feet in about one year. The trunk of a banana plant is made of sheaths of tightly overlapping leaves.",
    "Did you know bananas, apples & watermelons float in water?",
    "You can use the inside of a banana peel to polish patent leather shoes.",
    "The average American eats 27 pounds of bananas each year!",
    "A man in India once ate 81 bananas in a half an hour.",
    "Bananas don't grow on trees. They're actually a giant herb.",
    "Bananas are one of the few foods to contain the 6 major vitamin groups.",
    "If you peel a banana from the bottom up you won't get the string things.",
    "Those stringy things are called phloem (pronounced FLOM).",
    "The word banana comes from an Arab word 'banan' meaning finger.",
    "An individual banana is called a finger. A bunch of bananas is called a hand.",
    "The scientific name for banana is musa sapientum, which mean fruit of the wise men.",
    "Bananas are a very rich source of vitamin B6, which your brain needs to function properly and make you wise.",
    "The phrase 'going bananas' was first recorded in the Oxford English Dictionary because of the banana's connection with monkeys."
];



var handlers = {
    'LaunchRequest': function () {
        this.emit('WelcomeMessage');
    },
    
    // Welcome Message
    'WelcomeMessage' : function () {
        
        var speechOutput = "Welcome to the Screen Sample Skill! What would you like to see?";
        var reprompt = "What would you like to see?";
        var cardTitle = "Screen Sample Skill";
        
        var imageObj = {
            "smallImageUrl": "https://s3-us-west-2.amazonaws.com/ask-skills/banana_logo_480x720.jpg",
            "largeImageUrl": "https://s3-us-west-2.amazonaws.com/ask-skills/banana_logo_480x720.jpg"
        };
        
        // Reads Response and Creates Card in the Alexa App
        this.response.speak(speechOutput).listen(reprompt).cardRenderer(cardTitle, cardTitle, imageObj);
        
        // Check to see if device supports Display Templates
        if (this.event.context.System.device.supportedInterfaces.Display) {
            
            // Required
            var token = "abc";
            // VISIBLE (default) or HIDDEN
            var backButton = "HIDDEN";
            // Optional
            var backgroundImage = {
                "contentDescription": "string",
                "sources": [
                    {
                        "url": "",
                    }
                ]};
            // Optional
            var title = cardTitle;
            // Optional - Can be rectangle or square
            var image = "https://s3-us-west-2.amazonaws.com/ask-skills/banana_logo_480x720.jpg";
             // Required
            var listItems = skillContent;
            
            // Builds response for List Template #1
            this.response.listTemplateOne(token, backButton, backgroundImage, title, image, listItems);  
        }
        
        this.emit(':responseReady');
        
    },
    
    // Example of using Body Template 1 - Full-width text 
    'BodyTemplateOne': function () {
        var factIndex = Math.floor(Math.random() * FACTS.length);
        var theFact = FACTS[factIndex];

        var speechOutput = "Wait for it... " + theFact;
        var cardTitle = "Did you know...";
        
        var imageObj = {
            "smallImageUrl": "https://s3-us-west-2.amazonaws.com/ask-skills/banana_logo_480x720.jpg",
            "largeImageUrl": "https://s3-us-west-2.amazonaws.com/ask-skills/banana_logo_480x720.jpg"
        };
        
        // Reads Response and Creates Card in the Alexa App
        this.response.speak(speechOutput).cardRenderer(cardTitle, theFact, imageObj);
        
        // Check to see if device has a Screen
        if (this.event.context.System.device.supportedInterfaces.Display) {
            
            // Required
            var token = "abc";
            // VISIBLE (default) or HIDDEN
            var backButton = "HIDDEN";
            // Optional
            var backgroundImage = {
                "contentDescription": "string",
                "sources": [
                    {
                        "url": "https://s3-us-west-2.amazonaws.com/jennjin-ask/images/background_Banana.png",
                    }
                ]};
            // Optional    
            var title = cardTitle;
            var textContent = {
                // Required
                "primaryText" : {
                    "type" : "RichText",
                    "text" : "<font size='4'>This is BodyTemplate #1</font>"
                },
                // Optional
                "secondaryText" : {
                    "type" : "RichText",
                    "text" : "<font size='3'>"+theFact+"</font>"
                },
                // Optional
                "tertiaryText" : {
                    "type" : "RichText",
                    "text" : ""
                }
            };
            
            // ** Optional - Hint Text
            var hintText = "This is Hint Text";
            
            this.response.bodyTemplateOne(token, backButton, backgroundImage, title, textContent).hintHelper(hintText);  
        }
        this.emit(':responseReady');
        
    },
    
    // Example of using Body Template 2 - Image right 
    'BodyTemplateTwo': function () {
        var factIndex = Math.floor(Math.random() * FACTS.length);
        var theFact = FACTS[factIndex];

        var speechOutput = "Wait for it... " + theFact;
        var cardTitle = "Did you know...";
        
        var imageObj = {
            "smallImageUrl": "https://s3-us-west-2.amazonaws.com/ask-skills/banana_logo_480x720.jpg",
            "largeImageUrl": "https://s3-us-west-2.amazonaws.com/ask-skills/banana_logo_480x720.jpg"
        };
        
        // Reads Response and Creates Card in the Alexa App
        this.response.speak(speechOutput).cardRenderer(cardTitle, theFact, imageObj);
        
        // Check to see if device has a Screen
        if (this.event.context.System.device.supportedInterfaces.Display) {
            
            // Required
            var token = "abc";
            // VISIBLE (default) or HIDDEN
            var backButton = "HIDDEN";
            // Optional
            var backgroundImage = {
                "contentDescription": "string",
                "sources": [
                    {
                        "url": "",
                    }
                ]};
            // Optional
            var title = cardTitle;
            // Optional - Can be rectangle or square
            var image = {
                "contentDescription": "string",
                "sources": [
                    {
                        "url": "https://s3-us-west-2.amazonaws.com/ask-skills/banana_logo_480x720.jpg"
                    }
                ]
            };
            var textContent = {
                // Required
                "primaryText" : {
                    "type" : "RichText",
                    "text" : "<font size='4'>This is BodyTemplate #2</font><br/>"
                },
                // Optional
                "secondaryText" : {
                    "type" : "RichText",
                    "text" : "<font size='3'>"+theFact+"</font>"
                },
                // Optional
                "tertiaryText" : {
                    "type" : "RichText",
                    "text" : ""
                }
            };
            
            // ** Optional - Hint Text
            var hintText = "This is Hint Text";
            
            this.response.bodyTemplateTwo(token, backButton, backgroundImage, title, image, textContent).hintHelper(hintText);
        }
        this.emit(':responseReady');
        
    },
    
    // Example of using Body Template 3 - Image left
    'BodyTemplateThree': function () {
        var factIndex = Math.floor(Math.random() * FACTS.length);
        var theFact = FACTS[factIndex];

        var speechOutput = "Wait for it... " + theFact;
        var cardTitle = "Did you know...";
        
        var imageObj = {
            "smallImageUrl": "https://s3-us-west-2.amazonaws.com/ask-skills/banana_logo_480x720.jpg",
            "largeImageUrl": "https://s3-us-west-2.amazonaws.com/ask-skills/banana_logo_480x720.jpg"
        };
        
        // Reads Response and Creates Card in the Alexa App
        this.response.speak(speechOutput).cardRenderer(cardTitle, theFact, imageObj);
        
        // Check to see if device has a Screen
        if (this.event.context.System.device.supportedInterfaces.Display) {
            
            // Required
            var token = "abc";
            // VISIBLE (default) or HIDDEN
            var backButton = "HIDDEN";
            // Optional
            var backgroundImage = {
                "contentDescription": "string",
                "sources": [
                    {
                        "url": "",
                    }
                ]};
            // Optional
            var title = cardTitle;
            // Optional - Can be rectangle or square
            var image = {
                "contentDescription": "string",
                "sources": [
                    {
                        "url": "https://s3-us-west-2.amazonaws.com/ask-skills/banana_logo_480x720.jpg"
                    }
                ]
            };
            var textContent = {
                // Required
                "primaryText" : {
                    "type" : "RichText",
                    "text" : "<font size='4'>This is BodyTemplate #3</font><br/>"
                },
                // Optional
                "secondaryText" : {
                    "type" : "RichText",
                    "text" : "<font size='3'>"+theFact+"</font>"
                },
                // Optional
                "tertiaryText" : {
                    "type" : "RichText",
                    "text" : ""
                }
            };     
            
            // ** Optional - Hint Text
            var hintText = "This is Hint Text";
            
            this.response.bodyTemplateThree(token, backButton, backgroundImage, title, image, textContent).hintHelper(hintText);
        }
        this.emit(':responseReady');
        
    },
    
    // Example of using Body Template 6 - Full-screen image with text overlay 
    'BodyTemplateSix': function () {
        var factIndex = Math.floor(Math.random() * FACTS.length);
        var theFact = FACTS[factIndex];

        var speechOutput = "Wait for it... " + theFact;
        var cardTitle = "Did you know...";
        
        var imageObj = {
            "smallImageUrl": "https://s3-us-west-2.amazonaws.com/ask-skills/banana_logo_480x720.jpg",
            "largeImageUrl": "https://s3-us-west-2.amazonaws.com/ask-skills/banana_logo_480x720.jpg"
        };
        
        // Reads Response and Creates Card in the Alexa App
        this.response.speak(speechOutput).cardRenderer(cardTitle, theFact, imageObj);
        
        // Check to see if device has a Screen
        if (this.event.context.System.device.supportedInterfaces.Display) {
            
            // Required
            var token = "abc";
            // VISIBLE (default) or HIDDEN
            var backButton = "HIDDEN";
            // Optional
            var backgroundImage = {
                "contentDescription": "string",
                "sources": [
                    {
                        "url": "https://s3-us-west-2.amazonaws.com/jennjin-ask/images/background_Banana.png",
                    }
                ]};
            // Optional
            var title = cardTitle;
            // Optional - Can be rectangle or square
            var image = "";
            var textContent = {
                // Required
                "primaryText" : {
                    "type" : "RichText",
                    "text" : "<font size='4'>This is BodyTemplate #6</font>"
                },
                // Optional
                "secondaryText" : {
                    "type" : "RichText",
                    "text" : "<font size='3'>"+theFact+"</font>"
                },
                // Optional
                "tertiaryText" : {
                    "type" : "RichText",
                    "text" : ""
                }
            };
            
            // ** Optional - Hint Text
            var hintText = "This is Hint Text";
            
            this.response.bodyTemplateSix(token, backButton, backgroundImage, title, image, textContent).hintHelper(hintText);
            
        }
        this.emit(':responseReady'); 
    },
    
    // Example of using List Template 1 - Vertical List 
    'ListTemplateOne': function () {
        
        var speechOutput = "Here's List Template number one. Vertical Lists";
        var cardTitle = "List Item #1";
        
        //var imageObj = {
          //  "smallImageUrl": "https://s3-us-west-2.amazonaws.com/ask-skills/banana_logo_480x720.jpg",
            //"largeImageUrl": "https://s3-us-west-2.amazonaws.com/ask-skills/banana_logo_480x720.jpg"
        //};
        
        // Reads Response and Creates Card in the Alexa App
        //this.response.speak(speechOutput).cardRenderer(cardTitle, theFact, imageObj);
        this.response.speak(speechOutput);
        
        // Check to see if device has a Screen
        if (this.event.context.System.device.supportedInterfaces.Display) {
            
            // Required
            var token = "abc";
            // VISIBLE (default) or HIDDEN
            var backButton = "HIDDEN";
            // Optional
            var backgroundImage = {
                "contentDescription": "string",
                "sources": [
                    {
                        "url": "",
                    }
                ]};
            // Optional
            var title = cardTitle;
            // Optional - Can be rectangle or square
            var image = "https://s3-us-west-2.amazonaws.com/ask-skills/banana_logo_480x720.jpg";
             // Required
            var listItems = [
                {
                    "token": "item_1",
                    "image": {
                      "sources": [
                        {
                          "url": "https://s3-us-west-2.amazonaws.com/jennjin-ask/images/Bob.jpg"
                        }
                      ],
                      "contentDescription": "List Item #1"
                    },
                    "textContent": {
                      "primaryText": {
                        "type": "RichText",
                        "text": "<font size='3'>Bob</font>"
                      },
                      "secondaryText": {
                        "type": "RichText",
                        "text": ""
                      },
                      "tertiaryText": {
                        "type": "RichText",
                        "text": ""
                      }
                    }
                },
                {
                    "token": "item_2",
                    "image": {
                      "sources": [
                        {
                          "url": "https://s3-us-west-2.amazonaws.com/jennjin-ask/images/kevin.jpg"
                        }
                      ],
                      "contentDescription": "List Item #2"
                    },
                    "textContent": {
                      "primaryText": {
                        "type": "RichText",
                        "text": "<font size='3'>Kevin</font>"
                      },
                      "secondaryText": {
                        "type": "RichText",
                        "text": ""
                      },
                      "tertiaryText": {
                        "type": "RichText",
                        "text": ""
                      }
                    }
                },
                {
                    "token": "item_3",
                    "image": {
                      "sources": [
                        {
                          "url": "https://s3-us-west-2.amazonaws.com/jennjin-ask/images/Dave.png"
                        }
                      ],
                      "contentDescription": "List Item #3"
                    },
                    "textContent": {
                      "primaryText": {
                        "type": "RichText",
                        "text": "<font size='3'>Dave</font>"
                      },
                      "secondaryText": {
                        "type": "RichText",
                        "text": ""
                      },
                      "tertiaryText": {
                        "type": "RichText",
                        "text": ""
                      }
                    }
                }
            ];
            
            this.response5(token, backButton, backgroundImage, title, image, listItems);  
        }
        this.emit(':responseReady'); 
    },
    
     // Example of using List Template 2 - Horizontal List 
    'ListTemplateTwo': function () {
        
        var speechOutput = "Here's List Template number two. Horizontal Lists";
        var cardTitle = "List Template #2";
        var imageObj = {
            "smallImageUrl": "https://s3-us-west-2.amazonaws.com/ask-skills/banana_logo_480x720.jpg",
            "largeImageUrl": "https://s3-us-west-2.amazonaws.com/ask-skills/banana_logo_480x720.jpg"
        };
        
        // Reads Response and Creates Card in the Alexa App
        this.response.speak(speechOutput).cardRenderer(cardTitle, cardTitle, imageObj);
        
        // Check to see if device supports Display Templates
        if (this.event.context.System.device.supportedInterfaces.Display) {
            
            // Required
            var token = "abc";
            // VISIBLE (default) or HIDDEN
            var backButton = "HIDDEN";
            // Optional
            var backgroundImage = {
                "contentDescription": "string",
                "sources": [
                    {
                        "url": "",
                    }
                ]};
            // Optional
            var title = cardTitle;
            // Optional - Can be rectangle or square
            var image = "https://s3-us-west-2.amazonaws.com/ask-skills/banana_logo_480x720.jpg";
             // Required
            var listItems = [
                {
                    "token": "item_1",
                    "image": {
                      "sources": [
                        {
                          "url": "https://s3-us-west-2.amazonaws.com/jennjin-ask/images/Bob.jpg"
                        }
                      ],
                      "contentDescription": "List Item #1"
                    },
                    "textContent": {
                      "primaryText": {
                        "type": "RichText",
                        "text": "<font size='3'>Bob</font>"
                      },
                      "secondaryText": {
                        "type": "RichText",
                        "text": ""
                      },
                      "tertiaryText": {
                        "type": "RichText",
                        "text": ""
                      }
                    }
                },
                {
                    "token": "item_2",
                    "image": {
                      "sources": [
                        {
                          "url": "https://s3-us-west-2.amazonaws.com/jennjin-ask/images/kevin.jpg"
                        }
                      ],
                      "contentDescription": "List Item #2"
                    },
                    "textContent": {
                      "primaryText": {
                        "type": "RichText",
                        "text": "<font size='3'>Kevin</font>"
                      },
                      "secondaryText": {
                        "type": "RichText",
                        "text": ""
                      },
                      "tertiaryText": {
                        "type": "RichText",
                        "text": ""
                      }
                    }
                },
                {
                    "token": "item_3",
                    "image": {
                      "sources": [
                        {
                          "url": "https://s3-us-west-2.amazonaws.com/jennjin-ask/images/Dave.png"
                        }
                      ],
                      "contentDescription": "List Item #3"
                    },
                    "textContent": {
                      "primaryText": {
                        "type": "RichText",
                        "text": "<font size='3'>Dave</font>"
                      },
                      "secondaryText": {
                        "type": "RichText",
                        "text": ""
                      },
                      "tertiaryText": {
                        "type": "RichText",
                        "text": ""
                      }
                    }
                }
             ];   
            this.response.listTemplateTwo(token, backButton, backgroundImage, title, image, listItems);  
        }
        this.emit(':responseReady'); 
    },
    
    // Example of Video Playback 
    'playVideo' : function () {
       
        // Check to see if device has a Screen
        if (this.event.context.System.device.supportedInterfaces.VideoApp) {
            
            // Required
            var source = "https://s3.amazonaws.com/ask-video-samples/Serenity+-+HD+DVD+Trailer.mp4";
            // Optional
            var metadata = {
                "title" : "<Video Title>",
                "subtitle" : "<Video Subtitle>"
            };
            
            var message = "";
            
            this.response.speak(message);
            this.response.videoPlay(source, metadata);
            
        } else {
            
            // Message if user tries to play a video on a device that doesn't support video.
            var reprompt = "What would like to do?";
            var message = "Sorry, video playback is not supported on this device. "+reprompt;
            this.response.speak(message).listen(reprompt);
        }
        this.emit(':responseReady');
     },
    
    // Handles the Screen Touch Selection by Token - Someone selected an item on a list...
    'ElementSelected' : function () {
        
        // Pull the token value for item selected
        var itemToken = this.event.request.token;
        console.log("Item Token: "+itemToken);
        
        // Direct to the right intent
        this.emit(itemToken);
        
    },
    'AMAZON.HelpIntent': function () {
        var message = "I\'m the Enligthening Banana Fact Skill. Ask me for a banana fact and wait to be blown away! What can I help you with?";
        var reprompt = "What can I help you with?";
        
        this.response.speak(message).listen(reprompt);
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
    'AMAZON.NextIntent': function () {
        this.response.speak(INVALID_INTENT);
        this.emit(':responseReady');
    },
    'AMAZON.PreviousIntent': function () {
        this.response.speak(INVALID_INTENT);
        this.emit(':responseReady');
    },
    'Unhandled' : function () {
        console.log('Unhandled Intent');
        this.response.speak(INVALID_INTENT);
        this.emit(':responseReady');
    }
};

exports.handler = function(event, context, callback) {
    console.log("===EVENT=== \n" + JSON.stringify(event));
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};