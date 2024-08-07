// in src/users.tsx
import { List, Datagrid, TextField, EmailField } from "react-admin";
import MyUrlField from './MyUrlField';

export const UserList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <EmailField source="email" />
            <TextField source="phone" />
            <MyUrlField source="website" />
            <TextField source="company.name" />
        </Datagrid>
    </List>
);
