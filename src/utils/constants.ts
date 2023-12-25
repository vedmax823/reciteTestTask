

export const shipsTypes = [
    {
        name : "Tug",
        value : "Tug"
    },
    {
        name : "Cargo",
        value : "Cargo"
    },
    {
        name : "Barge",
        value : "Barge"
    },
    {
        name : "High Speed Craft",
        value : "High Speed Craft"
    },
]

export const shipsRoles = [
    {
        name : "Support Ship",
        value : "Support Ship"
    },
    {
        name : "ASDS barge",
        value : "ASDS barge"
    },
    {
        name : "ASDS Tug",
        value : "ASDS Tug"
    },
    {
        name : "Fairing Recovery",
        value : "Fairing Recovery"
    },
    {
        name : "Dragon Recovery",
        value : "Dragon Recovery"
    },
]

export const offsets = [
    {
        name : 0,
        value : 0
    },
    {
        name : 10,
        value : 10
    },
    {
        name : 20,
        value : 20
    }
]

export const dragonsOffset = [
    {
        name : 0,
        value : 0
    },
    {
        name : 1,
        value : 1
    },
    {
        name : 2,
        value : 2
    }
]

export const limits = [
    {
        name : 8,
        value : 8
    },
    {
        name : 16,
        value : 16
    },
    {
        name : 24,
        value : 24
    },
    {
        name : 32,
        value : 32
    }
]

export const MAIN_ROUTE = "/";
export const SHIPS_ROUTE = "/ships";
export const DRAGONS_ROUTE = "/dragons";
export const DRAGON_ONE_ROUTE = "/dragons/:dragonId";
export const SHIP_ONE_ROUTE = "/ships/:shipId";
export const ERROR_ROUTE = "*"


