import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, FileText, Zap, Users, TrendingUp, ChevronDown } from "lucide-react";
import { APP_LOGO, APP_TITLE } from "@/const";
import { useState } from "react";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "O que é blindagem contábil?",
      answer: "Blindagem contábil é um conjunto de práticas, cláusulas contratuais e estratégias legais que protegem o contador e sua empresa contra riscos legais, processos judiciais e cobranças indevidas. Envolve documentação impecável, contratos bem estruturados e conformidade com legislações.",
    },
    {
      question: "Quais são as cláusulas mais importantes em um contrato contábil?",
      answer: "As cláusulas essenciais incluem: limitação de responsabilidade, confidencialidade, força maior, rescisão, escopo de serviços, forma de pagamento, e resolução de conflitos. Cada uma protege diferentes aspectos da relação entre contador e cliente.",
    },
    {
      question: "Como proteger meu negócio contra auditoria fiscal?",
      answer: "Mantenha documentação impecável, registre todas as transações corretamente, cumpra prazos legais, realize auditorias internas periódicas, atualize-se com legislações vigentes e tenha um seguro de responsabilidade civil profissional. Prevenção é a melhor defesa.",
    },
    {
      question: "Preciso de seguro de responsabilidade civil?",
      answer: "Sim, é altamente recomendado. Um seguro de responsabilidade civil profissional protege você contra erros, omissões e reclamações de clientes. Ele cobre custos legais e indenizações, oferecendo tranquilidade e segurança financeira.",
    },
    {
      question: "Como lidar com um cliente que não quer assinar contrato?",
      answer: "Um contrato é fundamental para proteger ambas as partes. Explique que o contrato define claramente os serviços, prazos, valores e responsabilidades. Se o cliente recusar, documente essa recusa por escrito e considere não aceitar o cliente, pois o risco é muito alto.",
    },
    {
      question: "Qual é a melhor forma de documentar meu trabalho?",
      answer: "Mantenha registros detalhados de todas as atividades: emails, relatórios, planilhas, comunicações com clientes, datas de entrega e modificações. Use um sistema de gestão de documentos organizado e faça backup regularmente. Documentação é sua melhor defesa em caso de disputa.",
    },
    {
      question: "Como atualizar meus contratos com novas legislações?",
      answer: "Revise seus contratos anualmente ou quando há mudanças significativas na legislação. Consulte um advogado especializado em direito tributário e contábil. Mantenha versões atualizadas e comunique aos clientes sobre mudanças importantes.",
    },
    {
      question: "O que fazer se um cliente alega erro no meu trabalho?",
      answer: "Primeiro, investigue a alegação com cuidado. Revise toda a documentação e comunicação. Se houver erro, assuma responsabilidade e corrija. Se não houver erro, apresente evidências documentadas. Em casos complexos, consulte seu advogado. Tenha seu seguro de responsabilidade pronto.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img src={APP_LOGO} alt="Logo" className="h-10 w-auto" />
            <h1 className="text-xl font-bold text-accent">Contador Blindado</h1>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#clausulas" className="text-sm font-medium hover:text-accent transition-colors">Cláusulas</a>
            <a href="#praticas" className="text-sm font-medium hover:text-accent transition-colors">Práticas</a>
            <a href="#faq" className="text-sm font-medium hover:text-accent transition-colors">FAQ</a>
            <a href="/downloads" className="text-sm font-medium hover:text-accent transition-colors">Notícias do Blog</a>
            <Button className="bg-accent hover:bg-accent/90 text-white">Baixar o ebook grátis</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-accent/10 via-background to-secondary/5 py-20 md:py-32">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Sua <span className="text-accent">Armadura</span> Jurídica
              </h2>
              <p className="text-lg text-muted-foreground">
                Proteja seu negócio com cláusulas blindadas e práticas estratégicas. O Contador Blindado não reage, ele antecipa o movimento!
              </p>
            </div>
            <div className="flex gap-4 flex-wrap">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
                Baixar o ebook grátis
              </Button>
              <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10">
                Notícias do Blog
              </Button>
            </div>
            <div className="flex gap-6 pt-4">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">100% Blindado</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">Seguro para seu cliente</span>
              </div>
            </div>
          </div>

          {/* Right Image - Capitão Contador Blindado */}
          <div className="relative flex justify-center items-center">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-secondary/20 rounded-full blur-3xl"></div>
            <img
              src="/capitao-contador-blindado.jpeg"
              alt="Capitão Contador Blindado"
              className="relative w-full max-w-md h-auto drop-shadow-2xl animate-float"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Por que Ficar Blindado?</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Contadores enfrentam riscos legais todos os dias. Nós oferecemos as melhores dicas gratuitas sobre práticas e cláusulas para proteger seu negócio.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: FileText,
                title: "Cláusulas Blindadas",
                description: "Modelos de contratos prontos para proteger você e seus clientes em qualquer situação.",
              },
              {
                icon: Lock,
                title: "Práticas Seguras",
                description: "Estratégias comprovadas para blindar sua contabilidade contra riscos legais.",
              },
              {
                icon: Zap,
                title: "Implementação Rápida",
                description: "Aplique as proteções imediatamente e veja os resultados em dias.",
              },
            ].map((feature, idx) => (
              <Card key={idx} className="border-border hover:border-accent/50 transition-colors">
                <CardHeader>
                  <feature.icon className="w-8 h-8 text-accent mb-2" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cláusulas Section */}
      <section id="clausulas" className="py-20 bg-accent/5">
        <div className="container">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Cláusulas Blindadas</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Exemplos de cláusulas essenciais para proteger seu negócio contábil
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Cláusula de Limitação de Responsabilidade",
                description: "Limita sua responsabilidade a um valor máximo em caso de erros ou omissões.",
                icon: Shield,
              },
              {
                title: "Cláusula de Confidencialidade",
                description: "Protege informações sensíveis dos seus clientes e da sua empresa.",
                icon: Lock,
              },
              {
                title: "Cláusula de Força Maior",
                description: "Isenta você de responsabilidade em situações fora do seu controle.",
                icon: Zap,
              },
              {
                title: "Cláusula de Rescisão",
                description: "Define claramente como encerrar o relacionamento com segurança jurídica.",
                icon: FileText,
              },
            ].map((clausula, idx) => (
              <Card key={idx} className="border-accent/30 bg-white hover:shadow-lg transition-shadow">
                <CardHeader>
                  <clausula.icon className="w-6 h-6 text-accent mb-2" />
                  <CardTitle className="text-accent">{clausula.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{clausula.description}</p>
                  <Button variant="link" className="mt-4 p-0 text-accent hover:text-accent/80">
                    Ver Exemplo →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Práticas Section */}
      <section id="praticas" className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Práticas de Proteção</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Estratégias comprovadas para blindar sua operação contábil
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                number: "01",
                title: "Documentação Impecável",
                description: "Mantenha registros detalhados de todas as transações e comunicações com clientes.",
              },
              {
                number: "02",
                title: "Contratos Atualizados",
                description: "Revise seus contratos regularmente para garantir conformidade com novas legislações.",
              },
              {
                number: "03",
                title: "Seguros Adequados",
                description: "Contrate seguros de responsabilidade civil profissional para sua contabilidade.",
              },
              {
                number: "04",
                title: "Treinamento Contínuo",
                description: "Mantenha sua equipe atualizada com as melhores práticas e legislações vigentes.",
              },
              {
                number: "05",
                title: "Comunicação Clara",
                description: "Sempre comunique claramente o escopo de seus serviços aos clientes.",
              },
              {
                number: "06",
                title: "Auditoria Interna",
                description: "Realize auditorias periódicas para identificar e corrigir possíveis vulnerabilidades.",
              },
            ].map((pratica, idx) => (
              <div key={idx} className="flex gap-6 p-6 bg-accent/5 rounded-lg border border-accent/20 hover:border-accent/50 transition-colors">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent text-white font-bold">
                    {pratica.number}
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-foreground mb-2">{pratica.title}</h4>
                  <p className="text-muted-foreground">{pratica.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gradient-to-br from-accent/10 to-secondary/10">
        <div className="container">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Perguntas <span className="text-accent">Frequentes</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Respostas para as principais dúvidas sobre blindagem contábil e proteção jurídica.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-lg border border-accent/20 hover:border-accent/50 transition-colors overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-accent/5 transition-colors group"
                >
                  <h4 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">{faq.question}</h4>
                  <ChevronDown
                    className={`w-5 h-5 text-accent transition-transform ${openFaq === idx ? 'rotate-180' : ''}`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-4 text-muted-foreground border-t border-accent/10">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent text-white">
        <div className="container text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Pronto para se Blindar?</h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Junte-se a centenas de contadores que já protegem seus negócios com nossas cláusulas e práticas comprovadas.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-white text-accent hover:bg-white/90">
              Baixar o ebook grátis
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Notícias do Blog
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/5 border-t border-border py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">Contador Blindado</h4>
              <p className="text-sm text-muted-foreground">Sua armadura jurídica para a contabilidade segura.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Recursos</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/" className="hover:text-accent transition-colors">Início</a></li>
                <li><a href="/downloads" className="hover:text-accent transition-colors">Notícias do Blog</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Inscreva-se na Newsletter</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition-colors">Sobre</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Baixar o ebook grátis</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Privacidade</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Conecte-se</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Contato</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">© 2025 Contador Blindado. Todos os direitos reservados.</p>
            <p className="text-sm text-muted-foreground">Desenvolvido com ❤️ para contadores que não brincam em serviço.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
