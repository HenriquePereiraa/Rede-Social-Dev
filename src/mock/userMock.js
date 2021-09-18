import mock from '../utils/mock';


// mock.onPost('/api/home/login').reply(200, {
//     'id':1,
//     'username':'Henrique Pereira',
//     'email':'henrique@teste.com'
// });

mock.onPost('/api/home/login').reply((config) =>{

    const { email, password } = JSON.parse(config.data);

    if(email !== 'henrique@teste.com' || password !== 'admin') {
        return [400,{message:"Email ou senha incorretos!"}]
    }

    const user = {
        id:1,
        name:'Henrique Pereira',
        username:'henriquepereira',
        email:'henrique@teste.com'
    }
    return [200, { user }]
})