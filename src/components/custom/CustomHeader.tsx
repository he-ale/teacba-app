import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";
import { Link } from "react-router";

const menuOptions = [
  { name: "INICIO", url: "/" },
  {
    name: "CONÓCENOS",
    children: [
      { name: "Quienes somos", url: "/institucional" },
      { name: "Nuestra Historia", url: "/historia" },
      { name: "Autoridades", url: "/autoridades" },
      { name: "Plantel Docente", url: "/docentes" },
    ],
  },
  {
    name: "EDUCACIÓN",
    children: [
      { name: "Modelo Educativo", url: "/modeloEducativo" },
      { name: "Metodología", url: "/metodologia" },
      { name: "Infraestructura", url: "/infraestructura" },
      { name: "Laboratorios", url: "/laboratorios" },
    ],
  },
  {
    name: "FATEKS",
    children: [
      { name: "Fatek de Computación", url: "/fatek/computacion" },
      { name: "Fatek de Empresarial", url: "/fatek/empresarial" },
      { name: "Fatek de Salud", url: "/fatek/salud" },
      { name: "Fatek de Comunicación", url: "/fatek/comunicacion" },
      { name: "Fatek de Arquitectura", url: "/fatek/arquitectura" },
      { name: "Fatek de Industrial", url: "/fatek/indutria" },
    ],
  },
  { name: "EVENTOS", url: "/eventos" },
  { name: "ESTADISTICAS", url: "/estadisticas" },
  {
    name: "SEDES",
    children: [
      { name: "Cochabamba", url: "/sede/cochabamba" },
      { name: "Sucre", url: "/sede/sucre" },
    ],
  },
  { name: "BLOG", url: "/blog" },
];

export const CustomHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  // Cambiar el fondo al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b border-slate-800 transition-all duration-300 ${
        isScrolled ? "bg-slate-950/70" : "bg-slate-950/95"
      }`}
    >
      <div className="container mx-auto px-4">
        {/* --- Top Bar --- */}
        <div className="flex items-center justify-between border-b border-slate-800 py-2">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src="https://web.tecba.tech/wp-content/uploads/2023/08/LOGO-1.png"
                alt="Logo Tecba"
                className="h-12 w-auto object-contain lg:h-16"
              />
            </Link>
          </div>

          <div className="hidden lg:flex items-center">
            <h1 className="text-2xl lg:text-4xl text-white font-bold text-center">
              TECNOLÓGICO BOLIVIANO ALEMÁN
            </h1>
          </div>

          <button
            className="lg:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* --- Navigation Menu --- */}
        <NavigationMenu
          className={`${mobileMenuOpen ? "block" : "hidden"} lg:block py-4`}
        >
          <NavigationMenuList className="flex flex-col lg:flex-row items-start lg:items-center gap-2 lg:gap-8">
            {menuOptions.map((option) => {
              const hasChildren = !!option.children?.length;

              return (
                <NavigationMenuItem
                  key={option.name}
                  className={`cursor-pointer ${hasChildren ? "relative group" : ""}`}
                >
                  {/* --- Link principal o botón del menú --- */}
                  {hasChildren ? (
                    <button
                      onClick={() =>
                        setActiveSubmenu(
                          activeSubmenu === option.name ? null : option.name
                        )
                      }
                      className="flex items-center gap-1 text-white hover:text-[#E63A48] transition-colors"
                    >
                      {option.name}
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${
                          activeSubmenu === option.name ? "rotate-180" : ""
                        } group-hover:rotate-180`}
                      />
                    </button>
                  ) : (
                    <NavigationMenuLink
                      asChild
                      className="text-white hover:text-[#E63A48] transition-colors"
                    >
                      <Link
                        to={option.url!}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {option.name}
                      </Link>
                    </NavigationMenuLink>
                  )}

                  {/* --- Submenú desplegable --- */}
                  {hasChildren && (
                    <div
                      className={`
                        transition-all duration-200
                        bg-slate-900 rounded-lg lg:border lg:border-slate-800
                        ${activeSubmenu === option.name ? "block" : "hidden"}
                        lg:absolute lg:top-full lg:left-0 lg:mt-2 lg:block
                        lg:opacity-0 lg:invisible lg:group-hover:opacity-100 lg:group-hover:visible
                        lg:w-56 lg:shadow-xl
                      `}
                    >
                      <NavigationMenuList className="py-2">
                        {option.children!.map((child) => (
                          <NavigationMenuItem key={child.name}>
                            <Link
                              to={child.url}
                              className="block px-4 py-2 text-slate-300 hover:text-[#E63A48] hover:bg-slate-800 transition-colors"
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setActiveSubmenu(null);
                              }}
                            >
                              {child.name}
                            </Link>
                          </NavigationMenuItem>
                        ))}
                      </NavigationMenuList>
                    </div>
                  )}
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};
