import { NavLink, useNavigate } from "react-router-dom";

export default function CustomSideBar({setSession}) {
    const navigate = useNavigate();
    const closeSession = () => {
        sessionStorage.removeItem("token");
        navigate("/");
        setSession(false);
    }
     return (
        <div className="p-4 col-2 bg-body-tertiary shadow">

            <div className="d-flex flex-column" style={{ height: '100%' }}>
                <h5 className="mb-4"><i className="fs-3 bi bi-shop"></i>&nbsp;
                    Tiendita
                </h5>
                
                <NavLink to="/auth/home" className={({isActive}) => `text-start btn btn${isActive ? '' : '-outline'}-primary mb-3`} >
                    <i className="bi bi-house-fill"></i>&nbsp;
                    Inicio
                </NavLink>

                <NavLink to="/auth/products" className={({isActive}) => `text-start btn btn${isActive ? '' : '-outline'}-primary mb-3`} >
                    <i className="bi bi-bag-fill"></i>&nbsp;
                    Productos
                </NavLink>

                <NavLink to="/auth/brands" className={({isActive}) => `text-start btn btn${isActive ? '' : '-outline'}-primary mb-3`} >
                    <i className="bi bi-tag-fill"></i>&nbsp;
                    Marcas
                </NavLink>

                <button className="text-start btn btn-outline-danger mt-auto"><i className="bi bi-box-arrow-left"></i>&nbsp;
                    Cerrar Sesión
                </button>
            </div>
        </div>
    );
}