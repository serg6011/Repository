const v119 = {
    NAME: {
        type: "String",
        require: true,
        default: "None",
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
    
    CLASS: {
        type: "List",
        require: true,
        default: 0,
        loc: "Класс",
        list: ["Твердые", "Жидкие", 'Нетвердые', 'Плазменные'],
        sort: false,
        editable: true,
        searchable: false,
    },
    TROFY: {
        type: "List",
        require: true,
        default: 0,
        loc: "Трофей",
        list: ["Бронза", "Серебро", 'Золото', 'Платина'],
        sort: false,
        editable: true,
        searchable: false,
    },
    OPISANUE: {
        type: "String",
        require: true,
        default: "None",
        loc: "описание",
        sort: true,
        editable: true,
        //list: []
    },

    IMAGE: {
        type: "File",
        default: "",
        default: "None",
        loc: "картинка",
        sort: false,
        editable: true,
        filter: false,
    },
};

export default v119;
