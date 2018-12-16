export const navigationLinks = [
    {
        name: 'Dashboard',
        routerLink: '/dashboard',
        roles: ['Admin', 'RegUser'],
        order: 0,
        overrideFunction: function () { console.log("override function clicked"); }
    }
]