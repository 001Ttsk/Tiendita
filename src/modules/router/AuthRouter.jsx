import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../auth/Home/Home";
import Error404 from "../error/Error404";
import CustomSideBar from "../auth/components/CustomSideBar";
import Products from "../auth/products/Products";

export default function AuthRouter({setSession}) {
    return (<main className="row m-0">
        <CustomSideBar setSession={setSession}/>

        <div className="col-10 p-4">
            <Routes>
                <Route path="/" element={<Navigate to="/auth/home" />} />
                <Route path="/auth/home" element={<Home />} />
                <Route path="/auth/products" element={<Products />} />

                {/*FALLBACK*/}
                <Route path="*" element={<Error404 />} />

            </Routes>
        </div>

    </main>)
}