const users = [];

const addUser = ({ id, name, room }) => {
    name = formatName(name);
    room = formatName(room);
};

const removeUser = () => {};

const getUser = () => {};

const getUsersOfRoom = () => {};

var formatName = (name : string) : string => {
    return name.trim().toLocaleLowerCase().replace(' ', '');
}
