import ItemListContainer from "../common/itemListContainer/ItemListContainer"
import Form from "../pages/Forms/FormContainer"
import GarantiaRma from "../pages/GarantiaRma/GarantiaRma"
import ItemDetail from "../pages/ItemDetail/ItemDetail"
import CanalesDePago from "../pages/canapesDePago/canalesDePago"
import Productos from "../pages/productos/Productos"
import QuienesSomos from "../pages/quienesSomos/QuienesSomos"

export const menuRoutes = [
    {
        id: "home",
        path: "/",
        Element: ItemListContainer 
    },
    {
        id: "quienesSomos",
        path: "/quienesSomos",
        Element: QuienesSomos
    },
    {
        id: "detalle",
        path: "/detalle",
        Element:ItemDetail 
    },
    {
        id: "Garantia",
        path: "/GarantiaRma",
        Element:GarantiaRma 
    },
    {
        id: "formularios",
        path: "/formu",
        Element:Form 
    },
    {
        id: "productos",
        path: "/productos",
        Element:Productos 
    },
    {
        id: "canalesDePago",
        path: "/canalesPagos",
        Element:CanalesDePago
    }
]