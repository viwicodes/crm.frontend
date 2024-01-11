export function useGetUser() {
    const user = localStorage.getItem('user')
    if (user) {
        return JSON.parse(user);
    }
    else {
        return ''
    }
}