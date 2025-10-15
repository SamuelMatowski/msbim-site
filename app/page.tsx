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

      {/* HERO */}
      <section className="bg-gradient-to-r from-[#004C88] to-blue-600 text-white py-24 text-center">
        <h2 className="text-4xl md:text-5xl font-bold">SITE EM DESENVOLVIMENTO</h2>
        <h2 className="text-4xl md:text-5xl font-bold mt-6">Projetos Inteligentes em BIM</h2>
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

      {/* CONTATO (versão nova, diferente) */}
      <section id="contato" className="bg-[#004C88]/5 py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div>
            <h2 className="text-3xl font-bold text-[#004C88]">Entre em Contato</h2>
            <p className="mt-4 text-gray-700 text-lg leading-relaxed">
              Fale com nossa equipe técnica e descubra como a <strong>MS BIM Engenharia</strong> pode otimizar seus projetos
              com tecnologia, precisão e eficiência.
            </p>
            <ul className="mt-8 space-y-3 text-gray-700">
              <li>📧 <a href="mailto:contato@msbim.com.br" className="hover:underline">contato@msbim.com.br</a></li>
              <li>📞 <a href="tel:+5541999999999" className="hover:underline">(41) 99999-9999</a></li>
              <li>📍 R. Dr. Manoel Pedro, 363 — Curitiba, Paraná</li>
            </ul>
          </div>

          {/* “Formulário” visual (placeholder) */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <h3 className="text-xl font-semibold text-[#004C88] mb-4">Envie sua mensagem</h3>
            <form className="space-y-4">
              <input type="text" placeholder="Seu nome" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#004C88]" />
              <input type="email" placeholder="Seu e-mail" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#004C88]" />
              <textarea rows={4} placeholder="Sua mensagem" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#004C88]" />
              <button
                type="submit"
                className="w-full bg-[#004C88] text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Enviar mensagem
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* LOCALIZAÇÃO */}
      <section id="localizacao" className="bg-gray-100 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Nossa Localização</h2>

          <div className="flex justify-center items-center gap-3 mb-8">
            <img
              src="/pin-msbim.png"
              alt="Localização"
              className="h-8 w-8 animate-bounce"
            />
            <p className="text-lg text-gray-700">
              R. Dr. Manoel Pedro, 363 — Curitiba, Paraná
            </p>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              title="Mapa MS BIM Engenharia"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.993326173054!2d-49.2693725!3d-25.4030919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce41f5f73145f%3A0xa25fa5dc9e0c5a5a!2sR.%20Dr.%20Manoel%20Pedro%2C%20363%20-%20Cabral%2C%20Curitiba%20-%20PR%2C%2080035-030!5e0!3m2!1spt-BR!2sbr!4v1697210480142!5m2!1spt-BR!2sbr"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      
      <footer className="bg-[#202225] text-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-4">
          {/* Coluna 1 */}
          <div>
            <img src="/image.png" alt="MS BIM Engenharia" className="h-12 mb-5" />
            <p className="text-sm text-gray-300">
              Projetos de instalações com tecnologia BIM, precisão técnica e foco em eficiência para obras de alto padrão.
            </p>
            <p className="mt-6 text-xs text-gray-400">
              © {new Date().getFullYear()} — MS BIM Engenharia — Todos os direitos reservados
            </p>
          </div>

          {/* Coluna 2 */}
          <div>
            <h4 className="font-semibold text-white">Localização</h4>
            <p className="mt-3 text-sm text-gray-300">
              R. Dr. Manoel Pedro, 363<br />
              Cabral — Curitiba/PR<br />
              CEP 80035-030
            </p>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=R.%20Dr.%20Manoel%20Pedro%2C%20363%20-%20Cabral%2C%20Curitiba%20-%20PR%2C%2080035-030"
              target="_blank"
              className="inline-block mt-3 text-sm font-semibold text-white underline underline-offset-4 hover:opacity-90"
            >
              
            </a>
          </div>

          {/* Coluna 3 */}
          <div>
            <h4 className="font-semibold text-white">Mapa do site</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#sobre" className="hover:opacity-90">Sobre</a></li>
              <li><a href="#servicos" className="hover:opacity-90">Serviços</a></li>
              <li><a href="#localizacao" className="hover:opacity-90">Localização</a></li>
              <li><a href="#contato" className="hover:opacity-90">Contato</a></li>
            </ul>
          </div>

          {/* Coluna 4 */}
          <div>
            <h4 className="font-semibold text-white">Contato</h4>
            <a
              href="https://wa.me/5541999999999?text=Olá%20MS%20BIM,%20gostaria%20de%20um%20orçamento."
              target="_blank"
              className="inline-flex items-center justify-center mt-3 mb-4 rounded-md bg-emerald-500 px-4 py-2 font-semibold text-white hover:bg-emerald-600 transition"
            >
              FALE CONOSCO
            </a>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>📧 contato@msbim.com.br</li>
              <li>📞 (41) 99999-9999</li>
              <li></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="max-w-6xl mx-auto px-6 py-4 text-xs text-gray-400 flex flex-col md:flex-row items-center justify-between gap-2">
            <span>MS BIM • Engenharia de Instalações</span>
            <span>Desenvolvido com Next.js + Tailwind</span>
          </div>
        </div>
      </footer>
    </main>
  )
}
