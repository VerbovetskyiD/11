function bind(fn, context, ...args) { //rest принимает дополнительные параметры

    //реализовывая bind, нам нужно вызвать метод в контексте объекта context
    //поэтому, для начала, возвращаем функцию fn
    return function (...restArgs) { //restArgs принимает параметры возвращаемой функции
        const id = Date.now().toString(); //уникальный ключ для метода (можно использовать Symbol?)
        context[id] = fn; //связываем по id fn и context

        const result = context[id]( ...args.concat(restArgs)); //передаём остальные параметры и вызываем функцию
        delete context[id]; //удаляем ключ из объекта
        return result; //возвращаем результат
    }
}

//проверка
const person = {
    name: 'NoName'
};

function info(phone, email) {
    console.log(this.name, phone, email);
}

bind(info, person)('000-000-00-00', 'notMail@not.com');
bind(info, person,'000-000-00-00')('notMail@not.com');
bind(info, person,'000-000-00-00', 'notMail@not.com')();