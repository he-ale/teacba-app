import { Award, BookOpen, Building2, FileText, Globe, GraduationCap, TrendingUp, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card"
import TableauEmbed from "../../../components/custom/TableauEmbed"

export const InstitutionalStatisticsPage = () => {
  
  return (
    <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6" />
            <h2 className="text-white text-4xl lg:text-5xl font-light mb-4">Nuestros Logros en Números</h2>
            <p className="text-black text-lg max-w-3xl mx-auto leading-relaxed">
              Cifras que reflejan nuestro compromiso con la excelencia educativa y el desarrollo profesional
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
            <Card className="bg-orange-50 border-orange-600 text-center hover:border-orange-500 transition-all hover:transform hover:scale-105">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-8 h-8 text-orange-500" />
                </div>
                <div className="text-4xl font-bold text-orange-500 mb-2">12</div>
                <p className="text-orange-500 text-sm font-medium">Carreras Profesionales</p>
              </CardContent>
            </Card>

            <Card className="bg-orange-50 border-orange-600 text-center hover:border-orange-500 transition-all hover:transform hover:scale-105">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-orange-500" />
                </div>
                <div className="text-4xl font-bold text-orange-500 mb-2">5,200+</div>
                <p className="text-orange-500 text-sm font-medium">Estudiantes Activos</p>
              </CardContent>
            </Card>

            <Card className="bg-orange-50 border-orange-600 text-center hover:border-orange-500 transition-all hover:transform hover:scale-105">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-orange-500" />
                </div>
                <div className="text-4xl font-bold text-orange-500 mb-2">15,000+</div>
                <p className="text-orange-500 text-sm font-medium">Profesionales Formados</p>
              </CardContent>
            </Card>

            <Card className="bg-orange-50 border-orange-600 text-center hover:border-orange-500 transition-all hover:transform hover:scale-105">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-orange-500" />
                </div>
                <div className="text-4xl font-bold text-orange-500 mb-2">45+</div>
                <p className="text-orange-500 text-sm font-medium">Convenios Internacionales</p>
              </CardContent>
            </Card>

            <Card className="bg-orange-50 border-orange-600 text-center hover:border-orange-500 transition-all hover:transform hover:scale-105">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-orange-500" />
                </div>
                <div className="text-4xl font-bold text-orange-500 mb-2">120+</div>
                <p className="text-orange-500 text-sm font-medium">Proyectos de Investigación</p>
              </CardContent>
            </Card>

            <Card className="bg-orange-50 border-orange-500 text-center hover:border-orange-500 transition-all hover:transform hover:scale-105">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-orange-500" />
                </div>
                <div className="text-4xl font-bold text-orange-500 mb-2">8</div>
                <p className="text-orange-500 text-sm font-medium">Programas de Posgrado</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-orange-50 from-slate-800 to-slate-900 border-slate-700">
              <CardHeader>
                <CardTitle className="text-orange-500 text-2xl flex items-center gap-3">
                  <TrendingUp className="w-6 h-6 text-orange-500" />
                  Empleabilidad y Éxito Profesional
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-orange-400 text-sm">Tasa de Empleabilidad</span>
                      <span className="text-orange-500 font-bold text-lg">92%</span>
                    </div>
                    <div className="w-full bg-white border-1 border-orange-600 rounded-full h-3">
                      <div className="bg-orange-500 h-3 rounded-full" style={{ width: "92%" }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-orange-400 text-sm">Satisfacción de Egresados</span>
                      <span className="text-orange-500 font-bold text-lg">95%</span>
                    </div>
                    <div className="w-full bg-white border-1 border-orange-600 rounded-full h-3">
                      <div className="bg-orange-500 h-3 rounded-full" style={{ width: "95%" }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-orange-400 text-sm">Inserción Laboral (6 meses)</span>
                      <span className="text-orange-500 font-bold text-lg">88%</span>
                    </div>
                    <div className="w-full bg-white border-1 border-orange-600 rounded-full h-3">
                      <div className="bg-orange-500 h-3 rounded-full" style={{ width: "88%" }} />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-orange-50 from-slate-800 to-slate-900 border-slate-700">
              <CardHeader>
                <CardTitle className="text-orange-500 text-2xl flex items-center gap-3">
                  <Building2 className="w-6 h-6 text-orange-500" />
                  Infraestructura y Recursos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-orange-200/50 rounded-lg">
                    <div className="text-3xl font-bold text-orange-500 mb-1">4</div>
                    <p className="text-orange-400 text-xs">Sedes Modernas</p>
                  </div>
                  <div className="text-center p-4 bg-orange-200/50 rounded-lg">
                    <div className="text-3xl font-bold text-orange-500 mb-1">28</div>
                    <p className="text-orange-400 text-xs">Laboratorios Especializados</p>
                  </div>
                  <div className="text-center p-4 bg-orange-200/50 rounded-lg">
                    <div className="text-3xl font-bold text-orange-500 mb-1">150+</div>
                    <p className="text-orange-400 text-xs">Aulas Equipadas</p>
                  </div>
                  <div className="text-center p-4 bg-orange-200/50 rounded-lg">
                    <div className="text-3xl font-bold text-orange-500 mb-1">50K+</div>
                    <p className="text-orange-400 text-xs">Recursos Digitales</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="w-full">
            <TableauEmbed url="https://public.tableau.com/views/Book1_17623179667090/Story1?:language=es-ES&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"/>
          </div>
        </div>
      </section>
  )
}

export default InstitutionalStatisticsPage
