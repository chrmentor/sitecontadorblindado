import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, FileText, BookOpen, CheckCircle2, ArrowRight } from "lucide-react";

export default function Downloads() {
  const resources = [
    {
      id: 1,
      title: "Prompts de IA para Blindar Contratos",
      description: "Coleção de 15 prompts prontos para usar com ChatGPT, Claude e outras IAs para melhorar e blindar seus contratos contábeis.",
      category: "Ebook",
      icon: BookOpen,
      features: ["15 prompts práticos", "Exemplos de uso", "Modelos adaptáveis"],
      downloadText: "Baixar Ebook",
      color: "from-accent to-orange-500",
    },
    {
      id: 2,
      title: "Checklist de Cláusulas Essenciais",
      description: "Checklist completo com as 20 cláusulas mais importantes que todo contador deve incluir em seus contratos.",
      category: "Checklist",
      icon: CheckCircle2,
      features: ["20 cláusulas", "Descrição de cada uma", "Dicas de implementação"],
      downloadText: "Baixar Checklist",
      color: "from-yellow-500 to-orange-400",
    },
    {
      id: 3,
      title: "Guia de Proteção Jurídica para Contadores",
      description: "Guia completo com estratégias e boas práticas para proteger seu negócio contábil contra riscos legais.",
      category: "Guia",
      icon: FileText,
      features: ["6 estratégias principais", "Casos de estudo", "Plano de ação"],
      downloadText: "Baixar Guia",
      color: "from-red-500 to-orange-500",
    },
    {
      id: 4,
      title: "Modelo de Contrato Blindado",
      description: "Modelo pronto de contrato de prestação de serviços contábeis com todas as cláusulas de proteção implementadas.",
      category: "Modelo",
      icon: FileText,
      features: ["Contrato completo", "Personalizável", "Juridicamente seguro"],
      downloadText: "Baixar Modelo",
      color: "from-orange-500 to-yellow-500",
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
            <a href="/" className="text-sm font-medium hover:text-accent transition-colors">Início</a>
            <a href="/#clausulas" className="text-sm font-medium hover:text-accent transition-colors">Cláusulas</a>
            <a href="/#praticas" className="text-sm font-medium hover:text-accent transition-colors">Práticas</a>
            <a href="/downloads" className="text-sm font-medium text-accent font-bold">Notícias do Blog</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent/10 via-background to-secondary/5 py-16 md:py-24">
        <div className="container text-center">
          <div className="flex justify-center mb-6">
            <Download className="w-12 h-12 text-accent" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Recursos Gratuitos para <span className="text-accent">Blindar</span> Sua Contabilidade
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Acesse ferramentas, guias e modelos prontos para proteger seu negócio contábil com segurança jurídica.
          </p>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            {resources.map((resource) => {
              const Icon = resource.icon;
              return (
                <Card key={resource.id} className="border-border hover:border-accent/50 transition-all hover:shadow-lg overflow-hidden">
                  {/* Gradient Header */}
                  <div className={`h-2 bg-gradient-to-r ${resource.color}`}></div>

                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <Icon className="w-8 h-8 text-accent" />
                      <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                        {resource.category}
                      </span>
                    </div>
                    <CardTitle className="text-xl">{resource.title}</CardTitle>
                    <CardDescription className="text-base mt-2">{resource.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Features */}
                    <div className="space-y-3">
                      <p className="text-sm font-semibold text-foreground">O que você vai receber:</p>
                      <ul className="space-y-2">
                        {resource.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <Button className="w-full bg-accent hover:bg-accent/90 text-white group">
                      {resource.downloadText}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-accent/5">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Por que Baixar Esses Recursos?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Todos os recursos foram desenvolvidos por especialistas em contabilidade e direito, prontos para implementação imediata.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "100% Gratuito",
                description: "Acesso completo a todos os recursos sem custos ou compromissos.",
              },
              {
                title: "Pronto para Usar",
                description: "Modelos e guias que você pode implementar imediatamente em seu negócio.",
              },
              {
                title: "Atualizado Regularmente",
                description: "Conteúdo sempre atualizado com as melhores práticas e legislações vigentes.",
              },
            ].map((benefit, idx) => (
              <div key={idx} className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-accent to-orange-500 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ainda Tem Dúvidas?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Entre em contato com nossos especialistas para uma consultoria personalizada sobre como blindar seu contrato.
          </p>
          <Button size="lg" className="bg-white text-accent hover:bg-white/90">
            Falar com Especialista
          </Button>
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
                <li><a href="#" className="hover:text-accent transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition-colors">Sobre</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Contato</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Privacidade</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Conecte-se</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">WhatsApp</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">© 2024 Contador Blindado. Todos os direitos reservados.</p>
            <p className="text-sm text-muted-foreground">Desenvolvido com ❤️ para contadores que não brincam em serviço.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
