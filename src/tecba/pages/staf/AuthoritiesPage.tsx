import { Award, Briefcase, GraduationCap, Linkedin, Mail, Phone } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export const AuthoritiesPage = () => {
  return (
    <section className="py-40 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6" />
            <h2 className="text-black text-4xl lg:text-5xl font-light mb-4">Nuestras Autoridades</h2>
            <p className="text-black text-lg max-w-3xl mx-auto leading-relaxed">
              Líderes comprometidos con la excelencia académica y el desarrollo integral de nuestra comunidad educativa
            </p>
          </div>

          {/* Rector Nacional - Featured Card */}
          <Card className="bg-white border-slate-800 mb-12 overflow-hidden hover:border-orange-500 transition-all">
            <div className="grid md:grid-cols-2 gap-8 p-8">
              <div className="relative">
                <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden">
                  <div className="absolute inset-0 ring-4 ring-orange-500/20 rounded-lg" />
                  <img
                    src="/professional-male-rector.jpg"
                    alt="Rector Nacional"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <div className="mb-6">
                  <h3 className="text-black text-3xl font-bold mb-2">Ing. Germán Carmona Borda </h3>
                  <p className="text-orange-500 text-xl font-semibold mb-4">Rector Nacional</p>
                  <p className="text-slate-400 italic text-sm mb-6">
                    "La educación es el motor del cambio social y el desarrollo sostenible de las naciones"
                  </p>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-orange-500" />
                      Formación Académica
                    </h4>
                    <ul className="space-y-2 text-black text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                        <span>PhD en Educación Superior - Universidad de Harvard, USA</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                        <span>Maestría en Gestión Educativa - Universidad Complutense de Madrid, España</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                        <span>Licenciado en Educación - Universidad Nacional Mayor de San Marcos</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-orange-500" />
                      Experiencia Profesional
                    </h4>
                    <ul className="space-y-2 text-black text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                        <span>Más de 25 años de experiencia en gestión académica y desarrollo institucional</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                        <span>Ex Director de Calidad Educativa del Ministerio de Educación</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                        <span>Consultor internacional en innovación educativa para UNESCO</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <Award className="w-5 h-5 text-orange-500" />
                      Logros y Reconocimientos
                    </h4>
                    <ul className="space-y-2 text-black text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                        <span>Premio Nacional a la Excelencia Educativa 2023</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                        <span>Autor de 15 publicaciones sobre innovación pedagógica</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                        <span>Miembro del Consejo Latinoamericano de Educación Superior</span>
                      </li>
                    </ul>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <a
                      href="mailto:rector@edutech.edu.pe"
                      className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-orange-500 rounded-lg transition-colors text-white text-sm"
                    >
                      <Mail className="w-4 h-4" />
                      rector@edutech.edu.pe
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-slate-800 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-colors"
                    >
                      <Linkedin className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Secretary General */}
          <div className="mb-12">
            <h3 className="text-black text-2xl font-bold mb-6 text-center">Secretaría General</h3>
            <Card className="bg-white border-slate-800 hover:border-orange-500 transition-all">
              <div className="grid md:grid-cols-3 gap-6 p-6">
                <div className="relative">
                  <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden">
                    <div className="absolute inset-0 ring-4 ring-orange-500/20 rounded-lg" />
                    <img
                      src="/professional-female-academic-director.jpg"
                      alt="Secretaria General"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="md:col-span-2 flex flex-col justify-center">
                  <div className="mb-4">
                    <h4 className="text-black text-2xl font-bold mb-1">Dra. María Elena Rodríguez Castro</h4>
                    <p className="text-orange-500 text-lg font-semibold mb-3">Secretaria General</p>
                    <p className="text-slate-400 italic text-sm mb-4">
                      "La gestión administrativa eficiente es el soporte fundamental para la excelencia académica"
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="text-black font-semibold mb-2 text-sm flex items-center gap-2">
                        <GraduationCap className="w-4 h-4 text-orange-500" />
                        Formación
                      </h5>
                      <ul className="space-y-1 text-black text-xs">
                        <li>• PhD en Administración Pública - PUCP</li>
                        <li>• Maestría en Gestión Institucional - UPC</li>
                        <li>• Abogada - Universidad de Lima</li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="text-black font-semibold mb-2 text-sm flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-orange-500" />
                        Áreas de Responsabilidad
                      </h5>
                      <ul className="space-y-1 text-black text-xs">
                        <li>• Gestión administrativa institucional</li>
                        <li>• Coordinación de procesos académicos</li>
                        <li>• Supervisión de normativas y reglamentos</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-3 mt-4">
                    <a
                      href="mailto:secretaria@edutech.edu.pe"
                      className="flex items-center gap-2 px-3 py-2 bg-slate-800 hover:bg-orange-500 rounded-lg transition-colors text-white text-xs"
                    >
                      <Mail className="w-3 h-3" />
                      secretaria@edutech.edu.pe
                    </a>
                    <a
                      href="tel:+51987654330"
                      className="flex items-center gap-2 px-3 py-2 bg-slate-800 hover:bg-orange-500 rounded-lg transition-colors text-white text-xs"
                    >
                      <Phone className="w-3 h-3" />
                      +51 987 654 330
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Deans Section */}
          <div>
            <h3 className="text-black  text-2xl font-bold mb-6 text-center">Decanos de Facultad</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Dean 1 - Sistemas */}
              <Card className="bg-white border-slate-800 hover:border-orange-500 transition-all overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 ring-4 ring-orange-500/20 rounded-t-lg" />
                  <img
                    src="/professional-teacher-technology.jpg"
                    alt="Decano de Sistemas"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                </div>
                <CardContent className="p-6">
                  <h4 className="text-black text-xl font-bold mb-1">Dr. Roberto Silva Mendoza</h4>
                  <p className="text-orange-500 text-sm font-semibold mb-3">
                    Decano - Facultad de Ingeniería de Sistemas
                  </p>

                  <div className="space-y-3 mb-4">
                    <div>
                      <p className="text-black text-xs font-semibold mb-1">Especialización:</p>
                      <p className="text-black text-xs">PhD en Ciencias de la Computación - MIT</p>
                    </div>
                    <div>
                      <p className="text-black text-xs font-semibold mb-1">Logros Destacados:</p>
                      <ul className="space-y-1 text-black text-xs">
                        <li>• 20+ años de experiencia en desarrollo de software</li>
                        <li>• Líder de proyectos de IA y Machine Learning</li>
                        <li>• 25 publicaciones en revistas indexadas</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-2 pt-4 border-t border-slate-800">
                    <a
                      href="mailto:rsilva@edutech.edu.pe"
                      className="w-8 h-8 bg-slate-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors"
                    >
                      <Mail className="w-4 h-4 text-white" />
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 bg-slate-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors"
                    >
                      <Linkedin className="w-4 h-4 text-white" />
                    </a>
                    <a
                      href="tel:+51987654331"
                      className="w-8 h-8 bg-slate-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors"
                    >
                      <Phone className="w-4 h-4 text-white" />
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Dean 2 - Industrial */}
              <Card className="bg-white border-slate-800 hover:border-orange-500 transition-all overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 ring-4 ring-orange-500/20 rounded-t-lg" />
                  <img
                    src="/professional-male-teacher-engineering.jpg"
                    alt="Decano de Industrial"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                </div>
                <CardContent className="p-6">
                  <h4 className="text-black text-xl font-bold mb-1">Ing. Luis Alberto Gómez Torres</h4>
                  <p className="text-orange-500 text-sm font-semibold mb-3">
                    Decano - Facultad de Ingeniería Industrial
                  </p>

                  <div className="space-y-3 mb-4">
                    <div>
                      <p className="text-black text-xs font-semibold mb-1">Especialización:</p>
                      <p className="text-black text-xs">Maestría en Gestión de Operaciones - UPC</p>
                    </div>
                    <div>
                      <p className="text-black text-xs font-semibold mb-1">Logros Destacados:</p>
                      <ul className="space-y-1 text-black text-xs">
                        <li>• Six Sigma Black Belt certificado</li>
                        <li>• Consultor en Lean Manufacturing</li>
                        <li>• 15 años en industria automotriz</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-2 pt-4 border-t border-slate-800">
                    <a
                      href="mailto:lgomez@edutech.edu.pe"
                      className="w-8 h-8 bg-slate-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors"
                    >
                      <Mail className="w-4 h-4 text-white" />
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 bg-slate-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors"
                    >
                      <Linkedin className="w-4 h-4 text-white" />
                    </a>
                    <a
                      href="tel:+51987654332"
                      className="w-8 h-8 bg-slate-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors"
                    >
                      <Phone className="w-4 h-4 text-white" />
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Dean 3 - Negocios */}
              <Card className="bg-white border-slate-800 hover:border-orange-500 transition-all overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 ring-4 ring-orange-500/20 rounded-t-lg" />
                  <img
                    src="/professional-female-teacher-business.jpg"
                    alt="Decana de Negocios"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                </div>
                <CardContent className="p-6">
                  <h4 className="text-black text-xl font-bold mb-1">Mg. Ana María Torres Vega</h4>
                  <p className="text-orange-500 text-sm font-semibold mb-3">
                    Decana - Facultad de Administración y Negocios
                  </p>

                  <div className="space-y-3 mb-4">
                    <div>
                      <p className="text-black text-xs font-semibold mb-1">Especialización:</p>
                      <p className="text-black text-xs">MBA - ESAN Business School</p>
                    </div>
                    <div>
                      <p className="text-black text-xs font-semibold mb-1">Logros Destacados:</p>
                      <ul className="space-y-1 text-black text-xs">
                        <li>• Experta en Marketing Digital y E-commerce</li>
                        <li>• Consultora de empresas Fortune 500</li>
                        <li>• Autora de 3 libros sobre gestión empresarial</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-2 pt-4 border-t border-slate-800">
                    <a
                      href="mailto:atorres@edutech.edu.pe"
                      className="w-8 h-8 bg-slate-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors"
                    >
                      <Mail className="w-4 h-4 text-white" />
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 bg-slate-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors"
                    >
                      <Linkedin className="w-4 h-4 text-white" />
                    </a>
                    <a
                      href="tel:+51987654333"
                      className="w-8 h-8 bg-slate-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors"
                    >
                      <Phone className="w-4 h-4 text-white" />
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Dean 4 - Contabilidad */}
              <Card className="bg-white border-slate-800 hover:border-orange-500 transition-all overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 ring-4 ring-orange-500/20 rounded-t-lg" />
                  <img
                    src="/professional-female-teacher-accounting.jpg"
                    alt="Decana de Contabilidad"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                </div>
                <CardContent className="p-6">
                  <h4 className="text-black text-xl font-bold mb-1">CPC. Carmen Rosa Díaz Flores</h4>
                  <p className="text-orange-500 text-sm font-semibold mb-3">Decana - Facultad de Contaduría Pública</p>

                  <div className="space-y-3 mb-4">
                    <div>
                      <p className="text-black text-xs font-semibold mb-1">Especialización:</p>
                      <p className="text-black text-xs">Maestría en Auditoría Integral - UNMSM</p>
                    </div>
                    <div>
                      <p className="text-black text-xs font-semibold mb-1">Logros Destacados:</p>
                      <ul className="space-y-1 text-black text-xs">
                        <li>• CPA y CIA certificada internacionalmente</li>
                        <li>• Especialista en NIIF y tributación</li>
                        <li>• 18 años de experiencia en auditoría</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-2 pt-4 border-t border-slate-800">
                    <a
                      href="mailto:cdiaz@edutech.edu.pe"
                      className="w-8 h-8 bg-slate-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors"
                    >
                      <Mail className="w-4 h-4 text-white" />
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 bg-slate-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors"
                    >
                      <Linkedin className="w-4 h-4 text-white" />
                    </a>
                    <a
                      href="tel:+51987654334"
                      className="w-8 h-8 bg-slate-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors"
                    >
                      <Phone className="w-4 h-4 text-white" />
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Dean 5 - Electrónica */}
              <Card className="bg-white border-slate-800 hover:border-orange-500 transition-all overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 ring-4 ring-orange-500/20 rounded-t-lg" />
                  <img
                    src="/professional-male-coordinator.jpg"
                    alt="Decano de Electrónica"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                </div>
                <CardContent className="p-6">
                  <h4 className="text-black text-xl font-bold mb-1">Dr. Roberto Martínez Campos</h4>
                  <p className="text-orange-500 text-sm font-semibold mb-3">
                    Decano - Facultad de Ingeniería Electrónica
                  </p>

                  <div className="space-y-3 mb-4">
                    <div>
                      <p className="text-black text-xs font-semibold mb-1">Especialización:</p>
                      <p className="text-black text-xs">PhD en Ingeniería Electrónica - TU Munich</p>
                    </div>
                    <div>
                      <p className="text-black text-xs font-semibold mb-1">Logros Destacados:</p>
                      <ul className="space-y-1 text-black text-xs">
                        <li>• Experto en IoT y Sistemas Embebidos</li>
                        <li>• 14 años de experiencia en I+D</li>
                        <li>• 15 publicaciones científicas</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-2 pt-4 border-t border-slate-800">
                    <a
                      href="mailto:rmartinez@edutech.edu.pe"
                      className="w-8 h-8 bg-slate-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors"
                    >
                      <Mail className="w-4 h-4 text-white" />
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 bg-slate-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors"
                    >
                      <Linkedin className="w-4 h-4 text-white" />
                    </a>
                    <a
                      href="tel:+51987654335"
                      className="w-8 h-8 bg-slate-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors"
                    >
                      <Phone className="w-4 h-4 text-white" />
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Dean 6 - Marketing */}
              <Card className="bg-white border-slate-800 hover:border-orange-500 transition-all overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 ring-4 ring-orange-500/20 rounded-t-lg" />
                  <img
                    src="/faculty-marketing.jpg"
                    alt="Decana de Marketing"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                </div>
                <CardContent className="p-6">
                  <h4 className="text-black text-xl font-bold mb-1">Mg. Patricia Sánchez Rojas</h4>
                  <p className="text-orange-500 text-sm font-semibold mb-3">
                    Decana - Facultad de Marketing y Publicidad
                  </p>

                  <div className="space-y-3 mb-4">
                    <div>
                      <p className="text-black text-xs font-semibold mb-1">Especialización:</p>
                      <p className="text-black text-xs">Maestría en Marketing Digital - IE Business School</p>
                    </div>
                    <div>
                      <p className="text-black text-xs font-semibold mb-1">Logros Destacados:</p>
                      <ul className="space-y-1 text-black text-xs">
                        <li>• Experta en Social Media y Content Marketing</li>
                        <li>• 11 años en agencias digitales internacionales</li>
                        <li>• Google Ads y Meta Blueprint certificada</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-2 pt-4 border-t border-slate-800">
                    <a
                      href="mailto:psanchez@edutech.edu.pe"
                      className="w-8 h-8 bg-slate-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors"
                    >
                      <Mail className="w-4 h-4 text-white" />
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 bg-slate-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors"
                    >
                      <Linkedin className="w-4 h-4 text-white" />
                    </a>
                    <a
                      href="tel:+51987654336"
                      className="w-8 h-8 bg-slate-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors"
                    >
                      <Phone className="w-4 h-4 text-white" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
  )
}

export default AuthoritiesPage
