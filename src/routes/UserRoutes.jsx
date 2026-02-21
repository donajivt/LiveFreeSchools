import { Routes, Route } from "react-router-dom"
import { UsersListView, UserManagementView } from "@/features/users"

export const UserRouter = () => {
    return (
        <Routes>
            <Route index element={<UsersListView />} />
            <Route path="form" element={<UserManagementView />} />
            <Route path="form/:id" element={<UserManagementView />} />
        </Routes>
    )
}
