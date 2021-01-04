function bind(fn, context, ...args) {
    return function (...restArgs) {
        return fn.call(context, ...args, ...restArgs)
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