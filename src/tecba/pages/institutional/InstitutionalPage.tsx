import { Award, Globe, Heart, Lightbulb, Target, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const InstitutionalPage = () => {
  return (
    <section className="relative pb-2 pt-40 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="w-24 h-1 bg-[#E63A48] mx-auto mb-6" />
            <h2 className="text-black text-4xl lg:text-5xl font-light mb-4">Presentación Institucional</h2>
            <p className="text-black text-lg max-w-3xl mx-auto leading-relaxed">
              Conoce nuestra institución, nuestros valores y el equipo que lidera la excelencia educativa
            </p>
          </div>

          <Tabs defaultValue="mision" className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-2 mb-12 border-[#E63A48]">
              <TabsTrigger value="mision" className="data-[state=active]:bg-[#E63A48]">
                Misión y Visión
              </TabsTrigger>
              <TabsTrigger value="valores" className="data-[state=active]:bg-[#E63A48]">
                Valores
              </TabsTrigger>
            </TabsList>

            <TabsContent value="mision" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-slate-800 border-slate-700">
                  <CardHeader>
                    <div className="w-12 h-12 bg-[#E63A48]/10 rounded-lg flex items-center justify-center mb-4">
                      <Target className="w-6 h-6 text-[#E63A48]" />
                    </div>
                    <CardTitle className="text-white text-2xl">Nuestra Misión</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 leading-relaxed">
                      Formar profesionales competentes y éticos, con sólidos conocimientos tecnológicos y científicos,
                      capaces de contribuir al desarrollo sostenible de la sociedad mediante la innovación, la
                      investigación y el emprendimiento.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800 border-slate-700">
                  <CardHeader>
                    <div className="w-12 h-12 bg-[#E63A48]/10 rounded-lg flex items-center justify-center mb-4">
                      <Lightbulb className="w-6 h-6 text-[#E63A48]" />
                    </div>
                    <CardTitle className="text-white text-2xl">Nuestra Visión</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 leading-relaxed">
                      Ser reconocidos como la institución educativa líder en formación tecnológica y profesional,
                      destacando por la calidad académica, la innovación pedagógica y el compromiso con la
                      transformación digital de la educación superior.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-gradient-to-r from-[#E63A48]/10 to-slate-800 border-[#E63A48]/20">
                <CardHeader>
                  <CardTitle className="text-white text-xl">Mensaje Institucional</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-slate-900 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-[#E63A48] rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                      <p className="text-slate-400">Video institucional</p>
                    </div>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Descubre cómo EDUTECH está transformando la educación superior con tecnología de vanguardia y un
                    enfoque centrado en el estudiante.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="valores" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="bg-slate-800 border-slate-700 hover:border-[#E63A48] transition-colors">
                  <CardHeader>
                    <div className="w-12 h-12 bg-[#E63A48]/10 rounded-lg flex items-center justify-center mb-4">
                      <Award className="w-6 h-6 text-[#E63A48]" />
                    </div>
                    <CardTitle className="text-white">Excelencia</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Compromiso constante con la calidad académica y la mejora continua en todos nuestros procesos
                      educativos.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800 border-slate-700 hover:border-[#E63A48] transition-colors">
                  <CardHeader>
                    <div className="w-12 h-12 bg-[#E63A48]/10 rounded-lg flex items-center justify-center mb-4">
                      <Heart className="w-6 h-6 text-[#E63A48]" />
                    </div>
                    <CardTitle className="text-white">Integridad</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Actuamos con honestidad, transparencia y responsabilidad en todas nuestras acciones y decisiones
                      institucionales.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800 border-slate-700 hover:border-[#E63A48] transition-colors">
                  <CardHeader>
                    <div className="w-12 h-12 bg-[#E63A48]/10 rounded-lg flex items-center justify-center mb-4">
                      <Lightbulb className="w-6 h-6 text-[#E63A48]" />
                    </div>
                    <CardTitle className="text-white">Innovación</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Fomentamos la creatividad y la búsqueda constante de nuevas soluciones para los desafíos
                      educativos y sociales.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800 border-slate-700 hover:border-[#E63A48] transition-colors">
                  <CardHeader>
                    <div className="w-12 h-12 bg-[#E63A48]/10 rounded-lg flex items-center justify-center mb-4">
                      <Users className="w-6 h-6 text-[#E63A48]" />
                    </div>
                    <CardTitle className="text-white">Colaboración</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Promovemos el trabajo en equipo y la construcción de redes de apoyo entre estudiantes, docentes y
                      comunidad.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800 border-slate-700 hover:border-[#E63A48] transition-colors">
                  <CardHeader>
                    <div className="w-12 h-12 bg-[#E63A48]/10 rounded-lg flex items-center justify-center mb-4">
                      <Target className="w-6 h-6 text-[#E63A48]" />
                    </div>
                    <CardTitle className="text-white">Compromiso Social</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Contribuimos activamente al desarrollo sostenible y al bienestar de nuestra comunidad y sociedad.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800 border-slate-700 hover:border-[#E63A48] transition-colors">
                  <CardHeader>
                    <div className="w-12 h-12 bg-[#E63A48]/10 rounded-lg flex items-center justify-center mb-4">
                      <Globe className="w-6 h-6 text-[#E63A48]" />
                    </div>
                    <CardTitle className="text-white">Inclusión</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Valoramos la diversidad y garantizamos igualdad de oportunidades para todos nuestros estudiantes y
                      colaboradores.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
  )
}

export default InstitutionalPage;
