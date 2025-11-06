import { useEffect, useRef } from "react";

interface Props {
  url: string;
}

declare global {
  interface Window {
    tableau: any; 
  }
}

const TableauEmbed = ({ url }: Props) => {
  const vizRef = useRef<HTMLDivElement | null>(null);
  const vizInstance = useRef<any>(null);

  useEffect(() => {
    const initViz = () => {
      // Si ya hay un viz previo, destruirlo antes de crear uno nuevo
      if (vizInstance.current) {
        vizInstance.current?.dispose?.();
      }

      const options = {
        hideTabs: true,
        width: "100%",
        height: "100%",
        // onFirstInteractive: () => console.log("✅ Tableau listo!"),
      };

      vizInstance.current = new window.tableau.Viz(vizRef.current, url, options);
    };

    // Si la API ya está cargada
    if (window.tableau) {
      initViz();
    } else {
      const script = document.createElement("script");
      script.src = "https://public.tableau.com/javascripts/api/tableau-2.9.1.min.js";
      script.onload = initViz;
      document.body.appendChild(script);
    }

    // Limpieza al desmontar
    return () => {
      if (vizInstance.current) {
        vizInstance.current.dispose?.();
      }
    };
  }, [url]); // ✅ Solo depende de la URL

  return (
    <div className="w-full h-[80vh] md:h-[90vh] p-2">
      <div
        ref={vizRef}
        className="w-full h-full rounded-2xl shadow-xl overflow-hidden border border-gray-200 bg-white"
      />
    </div>
  );
};

export default TableauEmbed;
