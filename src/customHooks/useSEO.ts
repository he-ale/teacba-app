import { useEffect } from "react";

interface Props{
    title: string;
    description: string
}

export const useSEO = ({ title, description }: Props) => {
  useEffect(() => {
    if (title) document.title = title;

    if (description) {
      // Hacer cast a HTMLMetaElement
      let meta = document.querySelector("meta[name='description']") as HTMLMetaElement | null;

      if (meta) {
        meta.content = description; // ahora TS sabe que 'content' existe
      } else {
        meta = document.createElement("meta");
        meta.name = "description";
        meta.content = description;
        document.head.appendChild(meta);
      }
    }
  }, [title, description]);
};