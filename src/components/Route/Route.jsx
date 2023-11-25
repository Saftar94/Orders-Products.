import { Routes, Route } from "react-router-dom";

import { Arrival } from "../arrival/arrival";
import { Groups } from "../groups/groups";
import { Products } from "../products/products";
import { Users } from "../users/users";
import { Settings } from "../settings/settings";

export const RoutPage = () => {
    return(
    <Routes>
    <Route path="/arrival"  element={<Arrival   />}  />
    <Route path="/groups" element={<Groups />} />
    <Route path="/products" element={<Products />} />
    <Route path="/users" element={<Users />} />
    <Route path="/settings" element={<Settings />} />
    </Routes>
    )
}