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

const removeUser = () => {
};

const getUser = () => {
};

const getUsersOfRoom = () => {
};

var formatName = (name: string): string => {
    return name.trim().toLocaleLowerCase().replace(' ', '');
}
