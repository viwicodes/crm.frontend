import { Navigate } from "react-router-dom";
import useToken from "./useToken";

const Protected: React.FC<{
    children: JSX.Element
}> = ({ children }) => {
    const { isLoggedIn } = useToken()
    if (!isLoggedIn) {
        return <Navigate to="/login" replace />;
    }
    return children;
};
export default Protected;

export const ProtectedLogin: React.FC<{
    children: JSX.Element
}> = ({ children }) => {
    const { isLoggedIn } = useToken()
    if (!isLoggedIn) {
        return children
    }
    return <Navigate to="/" replace />;
};