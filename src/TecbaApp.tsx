import { RouterProvider } from "react-router"
import { appRouter } from "./router/app.router"

export const TecbaApp = () => {
    return (
        <>
            <RouterProvider router={appRouter}></RouterProvider>
        </>
    )
}
