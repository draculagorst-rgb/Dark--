var commands = [];

function command(info, func) {
    var types = ["photo", "image", "text", "message"];
    var infos = {
        fromMe: info['fromMe'] === undefined ? true : info['fromMe'], 
        onlyGroup: info['onlyGroup'] === undefined ? false : info['onlyGroup'],
        desc: info['desc'] === undefined ? '' : info['desc'],
        type: info['type'] === undefined ? 'misc' : info['type'],
        pattern: new RegExp((info['pattern'] !== undefined ? info['pattern'] : ''), "i")
    };
    infos.function = func;
    commands.push(infos);
    return infos;
}

module.exports = {
    command: command,
    commands: commands
}
