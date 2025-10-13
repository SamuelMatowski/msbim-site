export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* HEADER */}
      <header className="bg-[#004C88] text-white shadow-md">
        <div className="max-w-6xl mx-auto flex items-center justify-between p-6">
          <div className="flex items-center gap-3">
            <img src="/image.png" alt="MS BIM Logo" className="h-16" />
           
          </div>
          <nav className="space-x-6 font-medium">
            <a href="#sobre" className="hover:text-gray-200">Sobre</a>
            <a href="#servicos" className="hover:text-gray-200">Serviços</a>
            <a href="#contato" className="hover:text-gray-200">Contato</a>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-[#004C88] to-blue-600 text-white py-24 text-center">
        <h2 className="text-4xl md:text-5xl font-bold">Projetos Inteligentes em BIM</h2>
        <p className="mt-6 text-lg max-w-2xl mx-auto">
          Tecnologia e experiência para transformar projetos de instalações em soluções de excelência.
        </p>
        <div className="mt-8 space-x-4">
          <a href="#servicos" className="bg-white text-[#004C88] px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
            Conheça nossos serviços
          </a>
          <a href="#contato" className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#004C88] transition">
            Fale conosco
          </a>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold text-center">Quem Somos</h2>
        <p className="mt-6 text-lg text-center text-gray-700 leading-relaxed">
          A <strong>MS BIM Engenharia</strong> é especializada em projetos de instalações no Revit,
          unindo tecnologia BIM e experiência prática para entregar soluções inovadoras e eficientes.
        </p>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="bg-gray-100 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center">Nossos Serviços</h2>
          <div className="grid md:grid-cols-3 gap-10 mt-10">
            <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold">Projetos Hidrossanitários</h3>
              <p className="mt-3 text-gray-600">Soluções completas em instalações hidráulicas e sanitárias com precisão e confiabilidade.</p>
            </div>
            <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold">Projetos Elétricos</h3>
              <p className="mt-3 text-gray-600">Desenvolvimento de projetos elétricos eficientes e alinhados às normas técnicas.</p>
            </div>
            <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold">Modelagem BIM</h3>
              <p className="mt-3 text-gray-600">Coordenação e compatibilização de modelos BIM garantindo eficiência e qualidade.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="max-w-6xl mx-auto py-20 px-6 text-center">
        <h2 className="text-3xl font-bold">Entre em Contato</h2>
        <p className="mt-6 text-gray-700">📧 contato@msbim.com.br</p>
        <p className="text-gray-700">📞 (41) 99999-9999</p>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#004C88] text-white text-center py-6">
        © 2025 MS BIM Engenharia — Todos os direitos reservados
      </footer>
    </main>
  )
}
