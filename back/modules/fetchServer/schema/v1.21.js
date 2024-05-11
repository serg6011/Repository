const v121 = {
    _id: {},
    NAME: {
        type: 'String',
        require: true,
        default: 'None',
        loc: "название",
        sort: true,
        editable: true,
        //list: []
    },

    BUD: {
        type: 'String',
        require: true,
        default: 'None',
        loc: "вид",
        sort: true,
        editable: true,
        //list: []
    },

    OPISANUE: {
        type: 'String',
        require: true,
        default: 'None',
        loc: "описание",
        sort: true,
        editable: true,
        //list: []
    },
    
    IMAGE: {
        type: 'File',
        require: true,
        default: 'None',
        loc: "картинка",
        sort: true,
        editable: true,
    } 
       
    };

    export default v121;