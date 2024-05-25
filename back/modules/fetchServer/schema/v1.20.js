const v120 = {
    IMAGE: {
        type: 'File',
        default: "",
        default: 'None',
        loc: "картинка",
        sort: false,
        editable: true,
        filter: false,
    }, 
    
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
    
    OPISANUE: {
        type: 'String',
        require: true,
        default: 'None',
        loc: "описание",
        sort: true,
        editable: true,
        //list: []
    },
    CLASS: {
        type: "List",
        require: true,
        default: 0,
        loc: "класс",
        list: ["Дружелюбный моб", "Нейтральный моб", "Враждебный моб", "Приручаемый моб", "Твёрдый блок" , "Жидкий блок",  "Нетвёрдый блок", "Плазменный блок", "технический блок"],
        sort: false,
        editable: true,
        searchable: false,
    },
    TROFY: {
        type: 'String',
        require: true,
        default: 'None',
        loc: "Награда",
        sort: true,
        editable: true,
        //list: []
    },
    };
    export default v120;