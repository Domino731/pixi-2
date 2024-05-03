const gangMembers = [
    {
        id: 1,
        name: 'Johhny',
        powerLvl: 3,
        overallLvl: 6,
    },
];


const getAllGangMembers = async () => {
    return JSON.parse(JSON.stringify(gangMembers));
};

export const gangMembersApi = {
    getAllGangMembers,
};