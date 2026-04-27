import { useState } from 'react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

export default function App() {
  const [formData, setFormData] = useState({
    nome: '',
    apelido: '',
    telefone: '',
    email: '',
    servico: '',
    mensagem: '',
    rgpd: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Pedido de consulta enviado com sucesso! Entraremos em contacto em breve.');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ fontFamily: 'var(--sans)', background: '#fff' }}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white border-b" style={{ borderColor: '#e5e5e5' }}>
        <div className="max-w-[1200px] mx-auto flex items-center justify-between h-[70px] px-6">
          <a href="#inicio"
             className="no-underline"
             style={{
               fontFamily: 'var(--sans)',
               fontSize: '1.5rem',
               fontWeight: 500,
               color: 'var(--forest)',
               letterSpacing: '-.01em'
             }}>
            Clínica Dentária Predileta
          </a>

          <ul className="flex items-center gap-8 list-none m-0">
            <li><a href="#sobre" onClick={(e) => { e.preventDefault(); scrollToSection('sobre'); }} className="no-underline text-[.9rem]" style={{ color: '#666' }}>Sobre Nós</a></li>
            <li><a href="#servicos" onClick={(e) => { e.preventDefault(); scrollToSection('servicos'); }} className="no-underline text-[.9rem]" style={{ color: '#666' }}>Serviços</a></li>
            <li><a href="#testemunhos" onClick={(e) => { e.preventDefault(); scrollToSection('testemunhos'); }} className="no-underline text-[.9rem]" style={{ color: '#666' }}>Testemunhos</a></li>
            <li><a href="#ebook" onClick={(e) => { e.preventDefault(); scrollToSection('ebook'); }} className="no-underline text-[.9rem]" style={{ color: '#666' }}>E-book</a></li>
            <li><a href="#contacto" onClick={(e) => { e.preventDefault(); scrollToSection('contacto'); }} className="no-underline text-[.9rem]" style={{ color: '#666' }}>Contacto</a></li>
          </ul>

          <a href="#contacto" onClick={(e) => { e.preventDefault(); scrollToSection('contacto'); }}
             className="no-underline rounded-md px-6 py-2 text-[.9rem]"
             style={{ background: 'var(--forest)', color: '#fff', fontWeight: 500 }}>
            Marcar Consulta
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="pt-32 pb-20 px-6" style={{ background: '#fafafa' }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-2 gap-16 items-center">
            <div>
              <h1 style={{
                fontFamily: 'var(--sans)',
                fontSize: '3.5rem',
                fontWeight: 400,
                lineHeight: 1.2,
                color: '#1a1a1a',
                marginBottom: '1.5rem'
              }}>
                O seu sorriso<br/>merece o melhor cuidado
              </h1>

              <p className="mb-8" style={{
                color: '#666',
                fontSize: '1.1rem',
                lineHeight: 1.6
              }}>
                Especialistas em ortodontia, prevenção e implantologia com tecnologia de ponta e uma abordagem personalizada para cada paciente.
              </p>

              <div className="flex gap-4 mb-12">
                <a href="#contacto" onClick={(e) => { e.preventDefault(); scrollToSection('contacto'); }}
                   className="no-underline rounded-md px-7 py-3 text-[.95rem]"
                   style={{ background: 'var(--forest)', color: '#fff', fontWeight: 500 }}>
                  Marcar Consulta
                </a>
                <a href="#antes-depois" onClick={(e) => { e.preventDefault(); scrollToSection('antes-depois'); }}
                   className="no-underline rounded-md px-7 py-3 text-[.95rem] border"
                   style={{ background: 'transparent', color: '#333', borderColor: '#ddd', fontWeight: 500 }}>
                  Ver Resultados
                </a>
              </div>

              <div className="flex gap-6 pt-8 border-t" style={{ borderColor: '#e5e5e5' }}>
                <div>
                  <div className="text-[.75rem] uppercase tracking-wider mb-1" style={{ color: '#999', fontWeight: 500 }}>Telefone</div>
                  <div className="text-[1rem]" style={{ color: '#333', fontWeight: 500 }}>+351 910 658 115</div>
                </div>
                <div>
                  <div className="text-[.75rem] uppercase tracking-wider mb-1" style={{ color: '#999', fontWeight: 500 }}>Localização</div>
                  <div className="text-[1rem]" style={{ color: '#333', fontWeight: 500 }}>Joane, Famalicão</div>
                </div>
              </div>
            </div>

            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1762625570087-6d98fca29531?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBjbGluaWMlMjBtb2Rlcm4lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzY2Nzc0MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Clínica Dentária Moderna"
                className="w-full h-[500px] object-cover rounded-lg"
              />
              <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                <div className="p-4 rounded-lg" style={{ background: '#fff' }}>
                  <div style={{ fontFamily: 'var(--sans)', fontSize: '2rem', color: 'var(--forest)', fontWeight: 500 }}>+2.4k</div>
                  <div className="text-[.8rem]" style={{ color: '#666' }}>Pacientes</div>
                </div>
                <div className="p-4 rounded-lg" style={{ background: '#fff' }}>
                  <div style={{ fontFamily: 'var(--sans)', fontSize: '2rem', color: 'var(--forest)', fontWeight: 500 }}>4.9★</div>
                  <div className="text-[.8rem]" style={{ color: '#666' }}>Avaliação</div>
                </div>
                <div className="p-4 rounded-lg" style={{ background: '#fff' }}>
                  <div style={{ fontFamily: 'var(--sans)', fontSize: '2rem', color: 'var(--forest)', fontWeight: 500 }}>19+</div>
                  <div className="text-[.8rem]" style={{ color: '#666' }}>Anos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="sobre" className="py-20 px-6" style={{ background: '#fff' }}>
        <div className="max-w-[900px] mx-auto">
          <div className="text-center mb-12">
            <h2 style={{ fontFamily: 'var(--sans)', fontSize: '2.5rem', fontWeight: 400, color: '#1a1a1a', marginBottom: '.5rem' }}>
              Sobre Nós
            </h2>
            <div className="w-12 h-1 mx-auto rounded-full" style={{ background: 'var(--gold)' }}></div>
          </div>

          <div className="space-y-5 text-[1.05rem] leading-[1.8]" style={{ color: '#555' }}>
            <p>
              A nossa clínica dentária é um espaço de confiança, liderado por uma única profissional, garantindo um acompanhamento próximo, personalizado e contínuo a cada paciente. Desde 2005, trabalhamos com dedicação para promover a saúde oral e o bem-estar dos nossos pacientes.
            </p>
            <p>
              Trabalhamos com um público abrangente, desde crianças a adultos, com especial foco em famílias. Acreditamos que cada paciente merece atenção individual e um ambiente acolhedor.
            </p>
            <p>
              Prestamos serviços de ortodontia, prevenção e implantes, sempre com o objetivo de oferecer cuidados de qualidade e duradouros.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicos" className="py-20 px-6" style={{ background: '#fafafa' }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 style={{ fontFamily: 'var(--sans)', fontSize: '2.5rem', fontWeight: 400, color: '#1a1a1a', marginBottom: '.5rem' }}>
              Serviços Especializados
            </h2>
            <div className="w-12 h-1 mx-auto rounded-full" style={{ background: 'var(--gold)' }}></div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1656514894252-fb336a3ad6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBvcnRob2RvbnRpY3MlMjB0ZWV0aCUyMGFsaWdubWVudHxlbnwxfHx8fDE3NzY2Nzc0Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Ortodontia"
                className="w-full h-[200px] object-cover rounded-lg mb-6"
              />
              
              <h3 className="mb-3" style={{ fontFamily: 'var(--sans)', fontSize: '1.8rem', fontWeight: 400, color: '#1a1a1a' }}>
                Ortodontia
              </h3>
              <p className="text-[.95rem] leading-[1.7]" style={{ color: '#666' }}>
                Alinhamento dentário com as técnicas mais avançadas do mercado, incluindo aparelhos fixos estéticos e alinhadores transparentes personalizados.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1771442873035-474765b40ac6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBpbXBsYW50JTIwcHJvY2VkdXJlfGVufDF8fHx8MTc3NjY3MjAyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Implantologia"
                className="w-full h-[200px] object-cover rounded-lg mb-6"
              />
              
              <h3 className="mb-3" style={{ fontFamily: 'var(--sans)', fontSize: '1.8rem', fontWeight: 400, color: '#1a1a1a' }}>
                Implantologia
              </h3>
              <p className="text-[.95rem] leading-[1.7]" style={{ color: '#666' }}>
                Reabilitação oral com implantes para devolver a funcionalidade e estética ao seu sorriso. Oferecemos soluções personalizadas para cada caso, com acompanhamento cuidadoso em todas as etapas do tratamento, garantindo conforto e resultados duradouros.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After */}
      <section id="antes-depois" className="py-20 px-6" style={{ background: '#fff' }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 style={{ fontFamily: 'var(--sans)', fontSize: '2.5rem', fontWeight: 400, color: '#1a1a1a', marginBottom: '.5rem' }}>
              Transformações Reais
            </h2>
            <div className="w-12 h-1 mx-auto rounded-full" style={{ background: 'var(--gold)' }}></div>
            <p className="mt-4 text-[.95rem]" style={{ color: '#666' }}>
              Casos reais dos nossos pacientes, com autorização expressa de divulgação.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {[
              {
                title: 'Alinhamento com Invisalign®',
                subtitle: 'Tratamento de 14 meses · Adulto, 34 anos',
                image: 'https://images.unsplash.com/photo-1776400985210-92f654712d30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBiZWZvcmUlMjBhZnRlciUyMHNtaWxlfGVufDF8fHx8MTc3NjY3ODU2N3ww&ixlib=rb-4.1.0&q=80&w=1080'
              },
              {
                title: 'Implante unitário com carga imediata',
                subtitle: '1 dia de cirurgia · Adulto, 52 anos',
                image: 'https://images.unsplash.com/photo-1679911522750-aeedd9c88550?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxkZW50YWwlMjBiZWZvcmUlMjBhZnRlciUyMHNtaWxlfGVufDF8fHx8MTc3NjY3ODU2N3ww&ixlib=rb-4.1.0&q=80&w=1080'
              },
              {
                title: 'Reabilitação oral completa',
                subtitle: 'All-on-4® · Adulto, 61 anos',
                image: 'https://images.unsplash.com/photo-1675526607070-f5cbd71dde92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw5fHxkZW50YWwlMjBiZWZvcmUlMjBhZnRlciUyMHNtaWxlfGVufDF8fHx8MTc3NjY3ODU2N3ww&ixlib=rb-4.1.0&q=80&w=1080'
              }
            ].map((item, i) => (
              <div key={i} className="bg-white border rounded-lg overflow-hidden" style={{ borderColor: '#e5e5e5' }}>
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[250px] object-cover"
                />
                <div className="p-5">
                  <h4 className="mb-1" style={{ fontSize: '1.05rem', color: '#1a1a1a', fontWeight: 500 }}>
                    {item.title}
                  </h4>
                  <p className="text-[.85rem]" style={{ color: '#999' }}>
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testemunhos" className="py-20 px-6" style={{ background: '#fafafa' }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 style={{ fontFamily: 'var(--sans)', fontSize: '2.5rem', fontWeight: 400, color: '#1a1a1a', marginBottom: '.5rem' }}>
              O que dizem os nossos pacientes
            </h2>
            <div className="w-12 h-1 mx-auto rounded-full" style={{ background: 'var(--gold)' }}></div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {[
              {
                text: 'Fiz o tratamento com Invisalign e o resultado superou todas as expectativas. A equipa é extremamente profissional e atenciosa, e o processo foi muito mais confortável do que imaginava.',
                name: 'Maria R.',
                type: 'Ortodontia · Invisalign®'
              },
              {
                text: 'Aos 58 anos fiz implantes e foi a melhor decisão da minha vida. Em menos de 24 horas saí da clínica com dentes novos. A diferença na minha qualidade de vida é enorme.',
                name: 'João F.',
                type: 'Implantologia · Carga Imediata'
              },
              {
                text: 'Excelente clínica! Fui com muito receio, mas a Dra. foi incrivelmente paciente. O espaço é moderno, limpo e confortável. Recomendo a toda a família.',
                name: 'Ana C.',
                type: 'Consulta de Diagnóstico'
              }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-lg p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} width="16" height="16" viewBox="0 0 24 24" fill="var(--gold)">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                  ))}
                </div>

                <p className="text-[.95rem] leading-[1.7] mb-6" style={{ color: '#555' }}>
                  "{item.text}"
                </p>

                <div className="pt-4 border-t" style={{ borderColor: '#e5e5e5' }}>
                  <div className="text-[.9rem]" style={{ fontWeight: 500, color: '#1a1a1a' }}>
                    {item.name}
                  </div>
                  <div className="text-[.8rem]" style={{ color: '#999' }}>
                    {item.type}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-16 px-6" style={{ background: 'var(--forest)' }}>
        <div className="max-w-[1200px] mx-auto flex items-center justify-between gap-12">
          <div>
            <h2 style={{ fontFamily: 'var(--sans)', fontSize: '2rem', color: '#fff', fontWeight: 400, lineHeight: 1.3 }}>
              Marque a sua consulta de diagnóstico
            </h2>
            <p className="mt-2 text-[.95rem]" style={{ color: 'rgba(255,255,255,.8)' }}>
              Agende hoje e dê o primeiro passo para o sorriso que sempre desejou.
            </p>
          </div>
          <a href="#contacto" onClick={(e) => { e.preventDefault(); scrollToSection('contacto'); }}
             className="no-underline rounded-md px-8 py-3 text-[.95rem] whitespace-nowrap"
             style={{ background: '#fff', color: 'var(--forest)', fontWeight: 500 }}>
            Marcar Consulta →
          </a>
        </div>
      </section>

      {/* Contact */}
      <section id="contacto" className="py-20 px-6" style={{ background: '#fff' }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 style={{ fontFamily: 'var(--sans)', fontSize: '2.5rem', fontWeight: 400, color: '#1a1a1a', marginBottom: '.5rem' }}>
              Entre em contacto connosco
            </h2>
            <div className="w-12 h-1 mx-auto rounded-full" style={{ background: 'var(--gold)' }}></div>
          </div>

          <div className="grid grid-cols-2 gap-12">
            <div>
              <div className="mb-8">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1684607632041-32d729cdee35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50aXN0JTIwcGF0aWVudCUyMHNtaWxpbmclMjBoYXBweXxlbnwxfHx8fDE3NzY2Nzc0MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Paciente feliz"
                  className="w-full h-[300px] object-cover rounded-lg mb-6"
                />
              </div>

              <div className="space-y-5">
                <div className="pb-4 border-b" style={{ borderColor: '#e5e5e5' }}>
                  <div className="text-[.75rem] uppercase tracking-wider mb-2" style={{ color: '#999', fontWeight: 500 }}>
                    Horário de Funcionamento
                  </div>
                  <div className="space-y-2 text-[.9rem]" style={{ color: '#333' }}>
                    <div className="flex justify-between">
                      <span>Segunda a Sexta:</span>
                      <span style={{ fontWeight: 500 }}>09:00–12:30, 14:00–19:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sábado:</span>
                      <span style={{ fontWeight: 500 }}>09:00–12:30</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Domingo:</span>
                      <span style={{ color: '#999' }}>Encerrado</span>
                    </div>
                  </div>
                </div>

                <div className="pb-4 border-b" style={{ borderColor: '#e5e5e5' }}>
                  <div className="text-[.75rem] uppercase tracking-wider mb-1" style={{ color: '#999', fontWeight: 500 }}>
                    Telefone
                  </div>
                  <div className="text-[.95rem]" style={{ color: '#333' }}>
                    +351 910 658 115
                  </div>
                </div>

                <div className="pb-4">
                  <div className="text-[.75rem] uppercase tracking-wider mb-1" style={{ color: '#999', fontWeight: 500 }}>
                    Localização
                  </div>
                  <div className="text-[.95rem]" style={{ color: '#333' }}>
                    R. do Rio Pele 592, 4770-217 Joane
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-lg overflow-hidden border h-[250px]" style={{ borderColor: '#e5e5e5' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.3668339428845!2d-8.531!3d41.514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDMwJzUxLjAiTiA4wrAzMSc1Mi4yIlc!5e0!3m2!1spt-PT!2spt!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização da Clínica Dentária Predileta"
                />
              </div>
            </div>

            <div className="bg-white border rounded-lg p-8" style={{ borderColor: '#e5e5e5' }}>
              <h3 className="mb-6" style={{ fontSize: '1.5rem', fontWeight: 500, color: '#1a1a1a' }}>
                Marque a sua consulta
              </h3>

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="nome" className="block text-[.8rem] mb-2" style={{ color: '#666', fontWeight: 500 }}>
                      Nome
                    </label>
                    <input
                      type="text"
                      id="nome"
                      placeholder="O seu nome"
                      value={formData.nome}
                      onChange={(e) => setFormData({...formData, nome: e.target.value})}
                      className="w-full px-4 py-2 border rounded-md text-[.9rem] outline-none focus:border-[var(--forest)]"
                      style={{ borderColor: '#ddd' }}
                    />
                  </div>
                  <div>
                    <label htmlFor="apelido" className="block text-[.8rem] mb-2" style={{ color: '#666', fontWeight: 500 }}>
                      Apelido
                    </label>
                    <input
                      type="text"
                      id="apelido"
                      placeholder="O seu apelido"
                      value={formData.apelido}
                      onChange={(e) => setFormData({...formData, apelido: e.target.value})}
                      className="w-full px-4 py-2 border rounded-md text-[.9rem] outline-none focus:border-[var(--forest)]"
                      style={{ borderColor: '#ddd' }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="telefone" className="block text-[.8rem] mb-2" style={{ color: '#666', fontWeight: 500 }}>
                      Telefone
                    </label>
                    <input
                      type="tel"
                      id="telefone"
                      placeholder="+351 910 658 115"
                      value={formData.telefone}
                      onChange={(e) => setFormData({...formData, telefone: e.target.value})}
                      className="w-full px-4 py-2 border rounded-md text-[.9rem] outline-none focus:border-[var(--forest)]"
                      style={{ borderColor: '#ddd' }}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[.8rem] mb-2" style={{ color: '#666', fontWeight: 500 }}>
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="exemplo@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-2 border rounded-md text-[.9rem] outline-none focus:border-[var(--forest)]"
                      style={{ borderColor: '#ddd' }}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="servico" className="block text-[.8rem] mb-2" style={{ color: '#666', fontWeight: 500 }}>
                    Serviço pretendido
                  </label>
                  <select
                    id="servico"
                    value={formData.servico}
                    onChange={(e) => setFormData({...formData, servico: e.target.value})}
                    className="w-full px-4 py-2 border rounded-md text-[.9rem] outline-none focus:border-[var(--forest)]"
                    style={{ borderColor: '#ddd', color: '#333' }}>
                    <option value="">Selecione um serviço</option>
                    <option value="ortodontia">Ortodontia</option>
                    <option value="implantologia">Implantologia</option>
                    <option value="checkup">Check-up dentário</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>

                <div className="mb-5">
                  <label htmlFor="mensagem" className="block text-[.8rem] mb-2" style={{ color: '#666', fontWeight: 500 }}>
                    Mensagem (opcional)
                  </label>
                  <textarea
                    id="mensagem"
                    rows={4}
                    placeholder="Descreva brevemente a sua situação ou questões"
                    value={formData.mensagem}
                    onChange={(e) => setFormData({...formData, mensagem: e.target.value})}
                    className="w-full px-4 py-2 border rounded-md text-[.9rem] outline-none resize-none focus:border-[var(--forest)]"
                    style={{ borderColor: '#ddd' }}
                  />
                </div>

                <div className="mb-6 flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="rgpd"
                    checked={formData.rgpd}
                    onChange={(e) => setFormData({...formData, rgpd: e.target.checked})}
                    className="mt-1 w-4 h-4"
                  />
                  <label htmlFor="rgpd" className="text-[.85rem] leading-[1.5]" style={{ color: '#666' }}>
                    Aceito a <a href="#" className="underline" style={{ color: 'var(--forest)' }}>Política de Privacidade</a> e autorizo o contacto para agendamento de consulta.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-md px-6 py-3 text-[.95rem]"
                  style={{ background: 'var(--forest)', color: '#fff', fontWeight: 500 }}>
                  Enviar Pedido de Consulta
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6" style={{ background: '#1a1a1a' }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-4 gap-8 mb-8">
            <div>
              <div style={{
                fontFamily: 'var(--sans)',
                fontSize: '1.3rem',
                fontWeight: 500,
                color: '#fff',
                marginBottom: '1rem'
              }}>
                Clínica Dentária Predileta
              </div>
              <p className="text-[.88rem]" style={{ color: '#999' }}>
                Especialistas em ortodontia, prevenção e implantologia. Cuidamos do seu sorriso desde 2005.
              </p>
            </div>

            <div>
              <h4 className="mb-4 text-[.85rem] uppercase tracking-wider" style={{ color: '#fff', fontWeight: 600 }}>
                Ligações Úteis
              </h4>
              <ul className="list-none space-y-2 m-0 p-0">
                {['sobre', 'servicos', 'testemunhos', 'contacto'].map((link, i) => (
                  <li key={i}>
                    <a href={`#${link}`} onClick={(e) => { e.preventDefault(); scrollToSection(link); }} className="no-underline text-[.88rem]" style={{ color: '#999' }}>
                      {link === 'sobre' ? 'Sobre Nós' : link === 'servicos' ? 'Serviços' : link.charAt(0).toUpperCase() + link.slice(1)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-[.85rem] uppercase tracking-wider" style={{ color: '#fff', fontWeight: 600 }}>
                Contacto
              </h4>
              <ul className="list-none space-y-2 text-[.88rem] m-0 p-0" style={{ color: '#999' }}>
                <li>+351 910 658 115</li>
                <li>R. do Rio Pele 592, Joane</li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-[.85rem] uppercase tracking-wider" style={{ color: '#fff', fontWeight: 600 }}>
                Horário
              </h4>
              <ul className="list-none space-y-2 text-[.88rem] m-0 p-0" style={{ color: '#999' }}>
                <li>Seg-Sex: 09:00–12:30, 14:00–19:00</li>
                <li>Sáb: 09:00–12:30</li>
                <li>Dom: Encerrado</li>
              </ul>
            </div>
          </div>

          <div className="pt-6 border-t flex items-center justify-between" style={{ borderColor: '#333' }}>
            <p className="text-[.8rem]" style={{ color: '#666' }}>
              © 2026 Clínica Dentária Predileta. Todos os direitos reservados.
            </p>
            <div className="flex gap-4 text-[.8rem]">
              <a href="#" className="no-underline" style={{ color: '#999' }}>Termos e Condições</a>
              <span style={{ color: '#333' }}>·</span>
              <a href="#" className="no-underline" style={{ color: '#999' }}>Política de Privacidade</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}