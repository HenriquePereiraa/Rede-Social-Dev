import mock from '../utils/mock';


mock.onPost('/api/home/me').reply(200, {
    user:{
        id:1,
        name:'Henrique Pereira',
        username:'henriquepereira',
        email:'henrique@teste.com',
        avatar:'/images/avatars/avatar_1.jpeg'
    }
});

mock.onPost('/api/home/login').reply((config) =>{

    const { email, password } = JSON.parse(config.data);

    if(email !== 'henrique@teste.com' || password !== 'admin') {
        return [400,{message:"Email ou senha incorretos!"}]
    }

    const user = {
        id:1,
        name:'Henrique Pereira',
        username:'henriquepereira',
        email:'henrique@teste.com',
        avatar:'/images/avatars/avatar_1.jpeg'
    }
    return [200, { user }]
})