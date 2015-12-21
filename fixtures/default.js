var _ = require('lodash')
    , env = require('./env')
    ;

module.exports = _.merge({
    /*
     * Some default settings. 
     *
     * You can generally leave this as is for general testing purposes.
     */
    simulation: true
    , instance_id: 'local_test_instance'
    , urls: {
        home: "http://rundexter.com/"
    }
    , instance_state: {
        active_step :  "local_test_step"
    }
    , workflow: {
        "id" : "local_test_workflow"
        , "title": "Local test workflow"
        , "description": "A fixture workflow used to test a module"
    }
    , steps: {
        local_test_step: {
            id: 'local_test_step'
            , type: 'module'
            //The test runner will change YOUR_MODULE_NAME to the correct module name
            , name: 'YOUR_MODULE_NAME'
            , next: []
        }
    }
    , modules: {
        //The test runner will add the proper data here
    }
    /*
     * End defaults
     */
    , environment: {
       /*
        * Any API keys you might need should go in the env.js.
        * For example:
        *
        "parse_app_id": "abc123"
        , "parse_app_key": "foobar"
        */
    }
    , user: {
        /*
         * Your dexter user settings should go in the env.js file and remain uncommitted.  
         * For example:
         *
        profile: {
            id: 1,
            api_key: 'apikeytest'
        }
         */
    }
    , data: {
        local_test_step: {
            /*
             * You should update this section with some test input for testing your module
             */
            input: {
                comment: 'A comment by the member to associated with the share (2).',
                content_title: 'The title of the content being shared (2).',
                content_description: 'The description of the content being shared (2).',
                content_url: 'https://developer.linkedin.com/docs/share-on-linkedin',
                content_image_url: 'https://lh6.googleusercontent.com/-sg8NbkEL5sE/AAAAAAAAAAI/AAAAAAAAABU/RREqfaagyN8/photo.jpg',
                visibility_code: 'connections-only'
            }
        }
    }
}, env);
