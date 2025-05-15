import { NetWorkError } from "@router/components/NetWorkError"
import PageNotFound from "@router/components/PageNotFound"
import UserSignin from "@modules/Auth/Partials/UserSignin"
import { Example } from "@modules/Example"

export const anonymous = [
    {       // ----------- Page Not Fonund
        routePath: '*',
        Component: PageNotFound,
    },
    {       // ----------- Network Error
        routePath: 'networkerror',
        Component: NetWorkError,
    },
    {
        routePath: '/signin',
        Component: UserSignin,
    },
    // {
    //     routePath: '/register',
    //     Component: RegisterMenu,
    // },
    // {
    //     routePath: '/password',
    //     Component: PasswordForm,
    // },
]

export const adminAuthenticated = [
    {       // ----------- Page Not Fonund
        routePath: '*',
        Component: PageNotFound,
    },
    {       // ----------- Network Error
        routePath: 'networkerror',
        Component: NetWorkError,
    },
    {
        routePath:'',
        Component:Example,
    }
]

export const userAuthenticated = [
    {       // ----------- Page Not Fonund
        routePath: '*',
        Component: PageNotFound,
    },
    {       // ----------- Network Error
        routePath: 'networkerror',
        Component: NetWorkError,
    },
    // {
    //     routePath:'fff',
    //     Component:Profile,
    // }
]