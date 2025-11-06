import { createBrowserRouter } from "react-router";
import { lazy } from "react";

import { TecbaLayout } from "../tecba/layout/TecbaLayout";

const HomePage = lazy(()=>import("../tecba/pages/home/HomePage"));
const AuthoritiesPage = lazy(()=>import("../tecba/pages/staf/AuthoritiesPage"));
const ProfessorPage = lazy(()=>import("../tecba/pages/professor/ProfessorPage"));
const InstitutionalPage=lazy(()=>import("../tecba/pages/institutional/InstitutionalPage"))
const InstitutionalStatisticsPage=lazy(()=>import("../tecba/pages/statistics/InstitutionalStatisticsPage"))
const HistoriaPage= lazy(()=>import("../tecba/pages/historia/HistoriaPage"))
const ModeloEducativoPage= lazy(()=>import("../tecba/pages/modeloEducativo/ModeloEducativoPage"))
const MetodologiaPage= lazy(()=>import("../tecba/pages/metodologia/MetodologiaPage"))
const InfraestructuraPage= lazy(()=>import("../tecba/pages/infraestructura/InfraestructuraPage"))
const LaboratoriosPage= lazy(()=>import("../tecba/pages/laboratorios/LaboratoriosPage"))
const EventosPage= lazy(()=>import("../tecba/pages/eventos/EventosPage"))
const BlogPage= lazy(()=>import("../tecba/pages/blog/BlogPage"))
const FatekPage= lazy(()=>import("../tecba/pages/fatek/FatekPage"))
const SedePage= lazy(()=>import("../tecba/pages/sede/SedePage"))

export const appRouter= createBrowserRouter([
    {
        path: "/",
        element:<TecbaLayout/>,
        children: [
            {
                index: true,
                element: <HomePage/>
            },     
            {
                path: "institucional",
                element: <InstitutionalPage/>
            },
            {
                path: "autoridades",
                element: <AuthoritiesPage/>
            },
            {
                path: "docentes",
                element: <ProfessorPage/>
            },
            {
                path: "estadisticas",
                element: <InstitutionalStatisticsPage/>
            },
            {
                path: "historia",
                element: <HistoriaPage/>
            },
            {
                path: "modeloEducativo",
                element: <ModeloEducativoPage/>
            },
            {
                path: "metodologia",
                element: <MetodologiaPage/>
            },
            {
                path: "infraestructura",
                element: <InfraestructuraPage/>
            },
            {
                path: "laboratorios",
                element: <LaboratoriosPage/>
            },
            {
                path: "eventos",
                element: <EventosPage/>
            },
            {
                path: "blog",
                element: <BlogPage/>
            },
            {
                path: "fatek/:name",
                element: <FatekPage/>
            },
            {
                path: "sede/:name",
                element: <SedePage/>
            },
        ]
    },
    
]);