import React from 'react';
import { ArrowRight, TrendingUp, CheckCircle } from 'lucide-react'; // Certifique-se de ter lucide-react instalado ou troque pelos seus ícones

const MenuDenSpotlight = () => {
  return (
    <section className="relative w-full py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Lado Esquerdo: Conteúdo */}
          <div className="w-full lg:w-1/2 text-white">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Cliente em Destaque
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Transformando a experiência digital da <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">MenuDen</span>
            </h2>

            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              A Playtecno desenvolveu a infraestrutura de alta performance que permitiu à MenuDen escalar seu atendimento para milhares de usuários simultâneos, garantindo estabilidade e fluidez.
            </p>

            {/* Métricas / Pontos chave */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-slate-700/50">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <p className="font-bold text-white text-lg">+ 200%</p>
                  <p className="text-slate-400 text-sm">Performance</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-slate-700/50">
                  <CheckCircle className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="font-bold text-white text-lg">99.9%</p>
                  <p className="text-slate-400 text-sm">Uptime Garantido</p>
                </div>
              </div>
            </div>

            <button className="group flex items-center gap-2 px-6 py-3 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-100 transition-all duration-300">
              Ver Case Completo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Lado Direito: Visual / Logo */}
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-700/30 to-slate-800/30 border border-slate-600/30 backdrop-blur-sm p-8 md:p-12 shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">

              {/* Espaço para Imagem ou Logo Grande */}
              <div className="flex flex-col items-center justify-center text-center h-64 md:h-80 bg-slate-900/50 rounded-xl border border-dashed border-slate-600/50 group">
                 {/* Substitua este bloco pelo logo da MenuDen real (tag <img />) */}
                 <div className="text-5xl font-black tracking-tighter text-white">
                    Menu<span className="text-blue-500">Den</span>.
                 </div>
                 <p className="mt-4 text-slate-500 text-sm">Soluções para Food Service</p>
              </div>

              {/* Card Flutuante Decorativo */}
              <div className="absolute -bottom-6 -right-6 bg-slate-800 p-4 rounded-xl border border-slate-700 shadow-xl hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Status do Projeto</p>
                    <p className="text-sm font-bold text-white">Entregue com Sucesso</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MenuDenSpotlight;
