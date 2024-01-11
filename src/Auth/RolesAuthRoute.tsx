import { Fragment, ReactNode } from "react";
import { useGetUser } from "./useGetUser";
import { Navigate } from "react-router-dom";

export function RolesAuthRoute({ children, roles }: { children: ReactNode, roles: string[] }) {

    const user = useGetUser();
    const userRole: string = user.role;
    const canAccess = roles.includes(userRole)
    if (canAccess) {
        return (
            <Fragment>
                {children}
            </Fragment>
        );
    }
    else {
        alert('Do not have permission')
        return (<Navigate to="/" />);
    }
}