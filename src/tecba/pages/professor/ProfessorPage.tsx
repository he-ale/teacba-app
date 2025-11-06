import { Award, Briefcase, Building2, FileText, GraduationCap, Linkedin, Mail, Phone, Target, TrendingUp, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from ".@/components/ui/card"

export const ProfessorPage = () => {
  const [selectedArea, setSelectedArea] = useState("all")

  const areas = [
    { id: "all", name: "Todos los Docentes", icon: Users },
    { id: "sistemas", name: "Ingeniería de Sistemas", icon: GraduationCap },
    { id: "negocios", name: "Administración y Negocios", icon: Briefcase },
    { id: "industrial", name: "Ingeniería Industrial", icon: Building2 },
    { id: "contabilidad", name: "Contaduría", icon: FileText },
    { id: "electronica", name: "Ingeniería Electrónica", icon: Target },
    { id: "marketing", name: "Marketing", icon: TrendingUp },
  ]
  const facultyMembers = [
    {
      id: 1,
      name: "Dr. Juan Carlos Pérez Mendoza",
      title: "PhD en Ciencias de la Computación",
      area: "sistemas",
      department: "Ingeniería de Sistemas",
      image: "/professional-teacher-technology.jpg",
      specializations: ["Inteligencia Artificial", "Machine Learning", "Big Data"],
      experience: "15 años de experiencia docente",
      education: [
        "PhD en Ciencias de la Computación - MIT",
        "Maestría en Inteligencia Artificial - Stanford University",
        "Ingeniero de Sistemas - Universidad Nacional",
      ],
      projects: [
        "Sistema de reconocimiento facial con IA",
        "Plataforma de análisis predictivo para empresas",
        "Investigación en procesamiento de lenguaje natural",
      ],
      publications: 12,
      certifications: ["AWS Certified Solutions Architect", "Google Cloud Professional", "Microsoft Azure Expert"],
      email: "jperez@edutech.edu.pe",
      linkedin: "#",
      phone: "+51 987 654 321",
      quote: "La tecnología es el puente entre el conocimiento y la innovación",
    },
    {
      id: 2,
      name: "Mg. Ana María Torres Vega",
      title: "Maestría en Gestión Empresarial",
      area: "negocios",
      department: "Administración de Empresas",
      image: "/professional-female-teacher-business.jpg",
      specializations: ["Marketing Digital", "Gestión Estratégica", "E-commerce"],
      experience: "12 años de experiencia empresarial",
      education: [
        "Maestría en Gestión Empresarial - ESAN",
        "Especialización en Marketing Digital - Harvard Extension",
        "Licenciada en Administración - PUCP",
      ],
      projects: [
        "Consultoría en transformación digital para PYMEs",
        "Desarrollo de estrategias de marketing omnicanal",
        "Investigación en comportamiento del consumidor digital",
      ],
      publications: 8,
      certifications: ["Google Analytics Certified", "HubSpot Inbound Marketing", "Facebook Blueprint"],
      email: "atorres@edutech.edu.pe",
      linkedin: "#",
      phone: "+51 987 654 322",
      quote: "El éxito empresarial se construye con estrategia, innovación y pasión",
    },
    {
      id: 3,
      name: "Ing. Luis Alberto Gómez Silva",
      title: "Maestría en Gestión de Operaciones",
      area: "industrial",
      department: "Ingeniería Industrial",
      image: "/professional-male-teacher-engineering.jpg",
      specializations: ["Lean Manufacturing", "Six Sigma", "Gestión de Calidad"],
      experience: "10 años en industria automotriz",
      education: [
        "Maestría en Gestión de Operaciones - UPC",
        "Six Sigma Black Belt - ASQ",
        "Ingeniero Industrial - Universidad de Lima",
      ],
      projects: [
        "Implementación de Lean Manufacturing en planta automotriz",
        "Optimización de procesos productivos",
        "Desarrollo de sistemas de gestión de calidad ISO 9001",
      ],
      publications: 6,
      certifications: ["Six Sigma Black Belt", "Lean Manufacturing Expert", "PMP - Project Management"],
      email: "lgomez@edutech.edu.pe",
      linkedin: "#",
      phone: "+51 987 654 323",
      quote: "La excelencia operacional es el resultado de la mejora continua",
    },
    {
      id: 4,
      name: "CPC. Carmen Rosa Díaz Flores",
      title: "Maestría en Auditoría Integral",
      area: "contabilidad",
      department: "Contaduría Pública",
      image: "/professional-female-teacher-accounting.jpg",
      specializations: ["NIIF", "Auditoría Financiera", "Tributación"],
      experience: "18 años de experiencia profesional",
      education: [
        "Maestría en Auditoría Integral - UNMSM",
        "Especialización en NIIF - Colegio de Contadores",
        "Contadora Pública Colegiada - Universidad del Pacífico",
      ],
      projects: [
        "Auditoría integral en empresas del sector financiero",
        "Implementación de NIIF en corporaciones",
        "Asesoría tributaria para empresas multinacionales",
      ],
      publications: 10,
      certifications: ["CPA - Certified Public Accountant", "CIA - Certified Internal Auditor", "CISA"],
      email: "cdiaz@edutech.edu.pe",
      linkedin: "#",
      phone: "+51 987 654 324",
      quote: "La transparencia y la ética son los pilares de la profesión contable",
    },
    {
      id: 5,
      name: "Dr. Roberto Martínez Campos",
      title: "PhD en Ingeniería Electrónica",
      area: "electronica",
      department: "Ingeniería Electrónica",
      image: "/professional-male-teacher-engineering.jpg",
      specializations: ["IoT", "Sistemas Embebidos", "Automatización"],
      experience: "14 años de experiencia en I+D",
      education: [
        "PhD en Ingeniería Electrónica - TU Munich",
        "Maestría en Sistemas Embebidos - ETH Zurich",
        "Ingeniero Electrónico - UNI",
      ],
      projects: [
        "Desarrollo de sistemas IoT para ciudades inteligentes",
        "Automatización industrial con PLC y SCADA",
        "Investigación en energías renovables",
      ],
      publications: 15,
      certifications: ["Cisco IoT Specialist", "Siemens PLC Expert", "Arduino Certified"],
      email: "rmartinez@edutech.edu.pe",
      linkedin: "#",
      phone: "+51 987 654 325",
      quote: "La electrónica es el corazón de la innovación tecnológica",
    },
    {
      id: 6,
      name: "Mg. Patricia Sánchez Rojas",
      title: "Maestría en Marketing Digital",
      area: "marketing",
      department: "Marketing y Publicidad",
      image: "/professional-female-teacher-business.jpg",
      specializations: ["Social Media", "Content Marketing", "SEO/SEM"],
      experience: "11 años en agencias digitales",
      education: [
        "Maestría en Marketing Digital - IE Business School",
        "Especialización en Growth Hacking - General Assembly",
        "Licenciada en Comunicaciones - Universidad de Lima",
      ],
      projects: [
        "Campañas digitales para marcas internacionales",
        "Estrategias de contenido para redes sociales",
        "Optimización SEO para e-commerce",
      ],
      publications: 7,
      certifications: ["Google Ads Certified", "Meta Blueprint", "SEMrush Academy"],
      email: "psanchez@edutech.edu.pe",
      linkedin: "#",
      phone: "+51 987 654 326",
      quote: "El marketing digital es el arte de conectar marcas con personas",
    },
  ]

  const filteredFaculty =
    selectedArea === "all" ? facultyMembers : facultyMembers.filter((member) => member.area === selectedArea)
  return (
    <section className="py-40 bg-white">
        {/* Faculty Section */}
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6" />
            <h2 className="text-black text-4xl lg:text-5xl font-light mb-4">Nuestro Plantel Docente</h2>
            <p className="text-black text-lg max-w-3xl mx-auto leading-relaxed">
              Profesionales altamente calificados con amplia experiencia académica y profesional, comprometidos con la
              excelencia educativa y el desarrollo integral de nuestros estudiantes
            </p>
          </div>

          {/* Area Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {areas.map((area) => {
              const Icon = area.icon
              return (
                <Button
                  key={area.id}
                  onClick={() => setSelectedArea(area.id)}
                  variant={selectedArea === area.id ? "default" : "outline"}
                  className={`${
                    selectedArea === area.id
                      ? "bg-orange-500 hover:bg-orange-600 text-black"
                      : "border-slate-700 text-black hover:border-orange-500 hover:text-orange-500 bg-transparent"
                  }`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {area.name}
                </Button>
              )
            })}
          </div>

          {/* Faculty Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredFaculty.map((faculty) => (
              <Card
                key={faculty.id}
                className="bg-slate-50 border-slate-800 hover:border-orange-500 transition-all hover:transform hover:scale-105 overflow-hidden group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={faculty.image || "/placeholder.svg"}
                    alt={faculty.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-300 via-slate-300/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-black text-xl font-bold mb-1">{faculty.name}</h3>
                    <p className="text-orange-500 text-sm font-semibold">{faculty.department}</p>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Award className="w-4 h-4 text-orange-500" />
                      <p className="text-black text-sm font-semibold">{faculty.title}</p>
                    </div>
                    <p className="text-black text-xs italic mb-4">"{faculty.quote}"</p>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div>
                      <p className="text-slate-800 text-xs font-semibold mb-2">Especialidades:</p>
                      <div className="flex flex-wrap gap-2">
                        {faculty.specializations.map((spec, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-orange-500/10 text-orange-500 text-xs rounded-full border border-orange-500/20"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-black text-xs">
                      <Briefcase className="w-3 h-3 text-orange-500" />
                      {faculty.experience}
                    </div>

                    <div className="flex items-center gap-2 text-black text-xs">
                      <FileText className="w-3 h-3 text-orange-500" />
                      {faculty.publications} publicaciones científicas
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                    <div className="flex gap-2">
                      <a
                        href={`mailto:${faculty.email}`}
                        className="w-8 h-8 bg-slate-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors"
                        title="Email"
                      >
                        <Mail className="w-4 h-4 text-white" />
                      </a>
                      <a
                        href={faculty.linkedin}
                        className="w-8 h-8 bg-slate-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors"
                        title="LinkedIn"
                      >
                        <Linkedin className="w-4 h-4 text-white" />
                      </a>
                      <a
                        href={`tel:${faculty.phone}`}
                        className="w-8 h-8 bg-slate-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors"
                        title="Teléfono"
                      >
                        <Phone className="w-4 h-4 text-white" />
                      </a>
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-orange-500 hover:text-orange-400 hover:bg-orange-500/10"
                    >
                      Ver Perfil
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Faculty Excellence Highlights */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-orange-500/10 to-slate-900 border-orange-500/30">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6 text-orange-500" />
                </div>
                <CardTitle className="text-white">Formación Continua</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  Nuestros docentes participan regularmente en programas de actualización y capacitación en las últimas
                  tendencias educativas y tecnológicas.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-slate-400 text-xs">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                    Certificaciones internacionales
                  </li>
                  <li className="flex items-center gap-2 text-slate-400 text-xs">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                    Workshops y seminarios especializados
                  </li>
                  <li className="flex items-center gap-2 text-slate-400 text-xs">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                    Programas de intercambio académico
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-500/10 to-slate-900 border-orange-500/30">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-orange-500" />
                </div>
                <CardTitle className="text-white">Investigación y Proyectos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  Nuestro cuerpo docente lidera proyectos de investigación aplicada que contribuyen al desarrollo
                  tecnológico y científico.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-slate-400 text-xs">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                    Publicaciones en revistas indexadas
                  </li>
                  <li className="flex items-center gap-2 text-slate-400 text-xs">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                    Proyectos con empresas del sector
                  </li>
                  <li className="flex items-center gap-2 text-slate-400 text-xs">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                    Innovación tecnológica aplicada
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-500/10 to-slate-900 border-orange-500/30">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-orange-500" />
                </div>
                <CardTitle className="text-white">Excelencia Académica</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  Reconocimientos y premios que destacan el compromiso de nuestros docentes con la calidad educativa y
                  la innovación pedagógica.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-slate-400 text-xs">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                    Premios a la innovación docente
                  </li>
                  <li className="flex items-center gap-2 text-slate-400 text-xs">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                    Reconocimientos institucionales
                  </li>
                  <li className="flex items-center gap-2 text-slate-400 text-xs">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                    Certificaciones de calidad educativa
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
  )
}

export default ProfessorPage;
