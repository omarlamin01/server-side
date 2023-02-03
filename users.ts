const users = [];

const addUser = ({id, name, room}) => {
    name = formatName(name);
    room = formatName(room);

    const userAlreadyExists: boolean = users.find((user) => {
        user.name === name && user.room === room
    });

    if (userAlreadyExists) {
        return {error: 'Username is taken!!!'};
    }

    const user = { id, name, room };

    users.push(user);

    return user;

};

const removeUser = (id) => {
    const index : number = users.findIndex((user) => { user.id === id });

    if (index != -1) {
        return users.splice(index, 1)[0];
    }
};

const getUser = (id) => users.find((user) => user.id === id);

const getUsersOfRoom = (room) => users.filter((user) => { user.room === room });

var formatName = (name: string): string => {
    return name.trim().toLocaleLowerCase().replace(' ', '');
}

module.exports = { addUser, getUser, removeUser, getUsersOfRoom }
