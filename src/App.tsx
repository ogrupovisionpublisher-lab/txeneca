import { useEffect } from 'react';
import { CheckCircle2, Mail, MapPin, MessageCircle, FileText, Calculator, ClipboardCheck, MessageSquare } from 'lucide-react';

function App() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://scripts.converteai.net/9d93e4b2-3654-4bea-bda0-107c1328d520/players/694bc27e87bdd2a5aeacda4b/v4/player.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                M
              </div>
              <span className="text-xl font-semibold">
                Moz <span className="text-orange-500">Txeneca</span>
              </span>
            </div>

          </div>
        </div>
      </header>

      <main>
        <section className="bg-gray-50 py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Dinheiro rápido com <span className="text-orange-500">parcelas acessíveis.</span>
            </h1>

            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Solicite seu empréstimo de 5.000 a 200.000 MT, com simulação automática, prazos flexíveis e atendimento direto via WhatsApp.
            </p>

            <div className="mb-8 max-w-4xl mx-auto">
              <vturb-smartplayer
                id="vid-694bc27e87bdd2a5aeacda4b"
                style={{ display: 'block', margin: '0 auto', width: '100%' }}
              />
            </div>

            <div className="flex flex-col md:flex-row items-start justify-center gap-6 text-left max-w-2xl mx-auto mt-12">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                <span className="text-gray-700 text-lg">Solicitação 100% online</span>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                <span className="text-gray-700 text-lg">Parcelas mensais ajustadas ao valor</span>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                <span className="text-gray-700 text-lg">Processo simples e organizado</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-gray-500 text-sm font-semibold tracking-wider uppercase mb-12">
              CASOS DE SUCESSO
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-50 rounded-full mb-4">
                  <Mail className="w-8 h-8 text-orange-500" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">1.300+</div>
                <div className="text-gray-600">Solicitações recebidas</div>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-50 rounded-full mb-4">
                  <MapPin className="w-8 h-8 text-orange-500" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">11</div>
                <div className="text-gray-600">Províncias atendidas</div>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-50 rounded-full mb-4">
                  <MessageCircle className="w-8 h-8 text-orange-500" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">24/7</div>
                <div className="text-gray-600">Atendimento WhatsApp</div>
              </div>
            </div>

            <p className="text-center text-gray-500 text-sm mt-8">
              Todos os pedidos passam por inscrição e análise.
            </p>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-gray-600 text-lg mb-2">
                Na Moz Txeneca, qualquer pessoa pode solicitar um empréstimo em 4 passos simples
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow relative">
                <div className="absolute -top-4 left-8">
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                    1
                  </div>
                </div>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-50 rounded-lg mb-6 mt-4">
                  <FileText className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Preencha o formulário</h3>
                <p className="text-gray-600">Dados pessoais e de contacto</p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow relative">
                <div className="absolute -top-4 left-8">
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                    2
                  </div>
                </div>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-50 rounded-lg mb-6 mt-4">
                  <Calculator className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Selecione o valor</h3>
                <p className="text-gray-600">De 5.000 MT a 200.000 MT</p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow relative">
                <div className="absolute -top-4 left-8">
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                    3
                  </div>
                </div>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-50 rounded-lg mb-6 mt-4">
                  <ClipboardCheck className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Veja as condições</h3>
                <p className="text-gray-600">Parcelas, juros e taxa automáticos</p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow relative">
                <div className="absolute -top-4 left-8">
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                    4
                  </div>
                </div>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-50 rounded-lg mb-6 mt-4">
                  <CheckCircle2 className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Processo de avaliação</h3>
                <p className="text-gray-600">Avaliamos se está qualificado</p>
              </div>
            </div>

            <div className="mt-8 flex items-start justify-center text-gray-600 text-sm">
              <span className="text-red-500 mr-2">📌</span>
              <span>O número informado será utilizado para contato e validação do pedido.</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
