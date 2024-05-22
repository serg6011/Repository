const v120 = {
    NAME: {
        type: 'String',
        require: true,
        default: 'None',
        loc: "название",
        sort: true,
        editable: true,
        //list: []
    },
    CATEGORY: {
        type: "List",
        require: true,
        default: 0,
        loc: "Категория",
        list: ["Мобы", "Блоки"],
        sort: false,
        editable: true,
        searchable: false,
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
    export default v120;