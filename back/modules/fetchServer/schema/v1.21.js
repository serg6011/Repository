const v121 = {
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
        default: "",
        default: 'None',
        loc: "картинка",
        sort: false,
        editable: true,
        filter: false,
    } 
       
    };

    export default v121;