export interface Column {
    id: 'name' | 'position' | 'dob' | 'doj' | 'total_exp' | 'phone' | 'status' | 'email' | 'department' | 'role';
    label: string;
    minWidth?: number;
    align?: 'right';
    format?: (value: number) => string;
}

export interface HeaderProps {
    headers: Column[],
    rows:any
}

export interface EmployeesData {
    department: string
    dob: string
    doj: string
    email: string
    id: string
    name: string
    phone: string
    position: string
    role: string
    status: string
    total_exp: string
}

export interface Data {
    name: string;
    code: string;
    population: number;
    size: number;
    density: number;
}