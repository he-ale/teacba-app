import { useEffect, useState } from "react"
import { Button } from "../../../components/ui/button";
import { useSEO } from "../../../customHooks";
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card";

export const HomePage= () => {
  useSEO({
    title: "Tecnológico Boliviano Alemán | Inicio",
    description:
      "Bienvenido al Tecnológico Boliviano Alemán. Descubre nuestros programas educativos FATEK y sé parte del cambio.",
  });
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "¿Quieres dar el siguiente paso?",
      subtitle: "¿Aún no sabes qué estudiar?",
      description: "Descubre tu verdadera vocación con nuestro test y despliega tu potencial sin límites",
      cta: "AGENDAR VISITA",
    },
    {
      title: "Transforma tu futuro",
      subtitle: "Con educación de calidad",
      description: "Programas académicos diseñados para el éxito profesional del mañana",
      cta: "CONOCER MÁS",
    },
    {
      title: "Inscripciones",
      subtitle: "Algun subtitulo",
      description: "Alguna descripcion",
      cta: "INSCRIBIRSE",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  useEffect(()=>{
    const interval = setInterval(nextSlide, 4000); 

    return () => clearInterval(interval);
  },[]);

  return (
    <>
      {/* Slider */}
      <section className="relative h-screen pt-40">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/student-studying-technology-modern-classroom.jpg"
            alt="Student background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-transparent" />
        </div>

        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <div className="w-24 h-1 bg-[#E63A48] mb-6" />
            <h2 className="text-white text-5xl lg:text-6xl font-light mb-4 italic">{slides[currentSlide].title}</h2>
            <h3 className="text-white text-4xl lg:text-5xl font-light mb-6 italic">{slides[currentSlide].subtitle}</h3>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">{slides[currentSlide].description}</p>
            <Button className="bg-orange-500 hover:bg-[#E63A48] text-white px-8 py-6 text-lg">
              {slides[currentSlide].cta}
            </Button>  
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? "bg-[#E63A48] w-8" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </section>
      
      {/* Sections */}
      <section className="bg-white md:p-10 p-2">
        <h1 className="md:text-5xl text-2xl font-bold">Descubre e Inventa tu Talento Tecnológico FH</h1>
        <div className="md:p-12 pd:2 text-center">
          <p className="md:text-2xl">Somos una institución de Educación Superior Tecnológica Especializada, que aporta a una Bolivia productiva formando profesionales con una clara orientación tecnológica.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <figure className="w-full">
              <img
                src="https://web.tecba.tech/wp-content/uploads/2023/08/Group-144-min-1.png"
                alt="Descripción de la imagen"
                className="w-full h-auto rounded-md object-cover"
              />
            </figure>
            <figure className="w-full">
              <img
                src="https://web.tecba.tech/wp-content/uploads/2024/01/Nuestras-Ventajas-Competititvas.png"
                alt="Descripción de la imagen"
                className="w-full h-auto rounded-md object-cover"
              />
            </figure>
            
          </div>
        </div>
      </section>
      <section className="bg-fixed bg-center bg-cover bg-no-repeat bg-white  text-white bg-[url('https://web.tecba.tech/wp-content/uploads/2023/08/img12-1.jpg')]">
        <div className="bg-black/60 md:p-10 p-2">
          <h1 className="md:text-5xl text-2xl font-bold">Elige tu carrera ideal</h1>
          <div className="md:p-12 pd:2 text-center">
            <p className="md:text-2xl">Estudiar es un paso importante en tu vida, por lo que debes elegir bien la carrera que estudiarás. ¡En el TECBA te ayudamos a tomar la mejor decisión! Con un test vocacional que te ayudará a elegir la carrera ideal para ti, de manera fácil, sin costo y en línea.</p>
            <a href="https://zis-tecba.tech/eventos/test-vocacional/" target="_blank" rel="noopener noreferrer">
              <Button className="md:text-2xl bg-orange-400 hover:bg-[#E63A48] mt-5">Iniciar tu test vocacional</Button>
            </a>
          </div>
        </div>
      </section>
      <section className="bg-white md:p-10 p-2">
        <h1 className="md:text-4xl text-2xl font-bold">Testimonios</h1>
      </section>
      <section className="bg-white md:p-10 p-2">
        <Card className="mt-1 bg-slate-100 border-orange-500/20">
          <CardHeader>
            <CardTitle className="text-black text-xl">Mensaje Institucional</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative mb-4 aspect-video bg-slate-900 rounded-lg">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/ff8kWd4zkes"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Video Institucional"
              ></iframe>
            </div>
          </CardContent>
        </Card>
      </section>
      <section className="bg-white md:p-10 p-2">
        <h1 className="md:text-4xl text-2xl font-bold">Convenios</h1>
        
      </section>

    </>
  )
}

export default HomePage;