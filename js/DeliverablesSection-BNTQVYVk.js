import{j as e,F as s}from"./index-C6USQn8-.js";

const checkIcon=()=>e.jsxs("svg",{
  className:"w-6 h-6 shrink-0 mt-0.5",
  viewBox:"0 0 24 24",
  fill:"none",
  xmlns:"http://www.w3.org/2000/svg",
  children:[
    e.jsx("circle",{cx:"12",cy:"12",r:"9.5",stroke:"#c59b63",strokeWidth:"1.8",fill:"none"}),
    e.jsx("path",{d:"M8 12.2L10.8 15L16 9.5",stroke:"#c59b63",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})
  ]
});

const card1Items=[
  {strong:"Inteligência artificial",text:" que te ajuda a criar método, módulos e roteiros de aula."},
  {strong:"Playbook",text:" de Definição de Cliente Ouro"},
  {strong:"Plano de ação duplicável",text:" para as mentoradas"},
  {strong:"Manual da mentorada",text:" trilhas de aprendizagem e Checklists"},
  {strong:"Processos de venda",text:" onboarding e experiência do cliente"}
];

const card2Items=[
  {strong:"Rotina de acompanhamento",text:" semanal das mentoradas"},
  {strong:"Central",text:" de dúvidas, formulários e templates"},
  {strong:"Conteúdos de atração",text:" de cliente qualificado"},
  {strong:"Scripts de condução de venda",text:", followup e sessão"},
  {strong:"CRM e gestão",text:" de mentoradas"},
  {strong:"Apresentação de venda",text:" no canva"},
  {strong:"E muito mais...",text:""}
];

const salesItems=[
  {strong:"Rotina de story validados",text:" para vender mentorias"},
  {strong:"Modelo e Formulário de Aplicação",text:" e diagnóstico"},
  {strong:"Script de venda no Whatsapp e Direct",text:" para vender sem sessão estratégica"},
  {strong:"Banco de objeções",text:" para não travar na hora da venda"},
  {strong:"CRM de vendas",text:" para acompanhar potencias clientes"},
  {strong:"Processo de condução de follow-up",text:" de vendas com mensagens prontas"},
  {strong:"Conteúdos para atrair clientes",text:" e vender com consistência"},
  {strong:"E muito mais...",text:""}
];

const d=()=>e.jsx("section",{
  className:"section-cream py-16 md:py-24",
  children:e.jsxs("div",{
    className:"content-wrapper max-w-6xl mx-auto",
    children:[
      /* Top Section: Gestão e Entrega */
      e.jsx(s,{
        children:e.jsxs("div",{
          className:"text-center mb-10 text-primary",
          children:[
            e.jsx("h2",{
              className:"text-2xl sm:text-3xl md:text-4xl font-bold leading-snug mb-4 text-[#03002E]",
              children:"Veja Tudo que Você Terá Acesso no Kit de Ferramentas da Mentora:"
            }),
            e.jsx("p",{
              className:"text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto",
              children:"Acesse agora o Kit da Mentora para nunca mais improvisar suas entregas e finalmente ser percebida como a mentora de alto nível que você já é — mesmo que esteja começando agora."
            })
          ]
        })
      }),
      e.jsxs("div",{
        className:"deliverables-container",
        children:[
          e.jsx(s,{
            children:e.jsxs("div",{
              className:"deliverables-card",
              children:[
                e.jsx("div",{
                  className:"deliverables-img-wrapper",
                  children:e.jsx("img",{
                    src:"/Imagens-para-Kit-Mentora-7.webp",
                    alt:"Kit Mentora - Entrega 1",
                    loading:"lazy",
                    decoding:"async",
                    className:"deliverables-img"
                  })
                }),
                e.jsx("div",{
                  className:"deliverables-list",
                  children:card1Items.map((item,idx)=>e.jsxs("div",{
                    className:"deliverables-item",
                    children:[
                      checkIcon(),
                      e.jsxs("p",{
                        className:"deliverables-text",
                        children:[
                          e.jsx("strong",{children:item.strong}),
                          item.text
                        ]
                      })
                    ]
                  },idx))
                })
              ]
            })
          }),
          e.jsx(s,{
            children:e.jsxs("div",{
              className:"deliverables-card",
              children:[
                e.jsx("div",{
                  className:"deliverables-img-wrapper",
                  children:e.jsx("img",{
                    src:"/Imagens-para-Kit-Mentora-2-1.webp",
                    alt:"Kit Mentora - Entrega 2",
                    loading:"lazy",
                    decoding:"async",
                    className:"deliverables-img"
                  })
                }),
                e.jsx("div",{
                  className:"deliverables-list",
                  children:card2Items.map((item,idx)=>e.jsxs("div",{
                    className:"deliverables-item",
                    children:[
                      checkIcon(),
                      e.jsxs("p",{
                        className:"deliverables-text",
                        children:[
                          e.jsx("strong",{children:item.strong}),
                          item.text
                        ]
                      })
                    ]
                  },idx))
                })
              ]
            })
          })
        ]
      }),

      /* Banner: Área de Membros Exclusiva */
      e.jsx(s,{
        children:e.jsx("div",{
          className:"mt-16 md:mt-24 flex justify-center items-center px-2",
          children:e.jsx("img",{
            src:"/2-5.webp",
            alt:"Área de Membros Exclusiva",
            loading:"lazy",
            decoding:"async",
            className:"w-full max-w-4xl object-contain drop-shadow-2xl rounded-2xl hover:scale-[1.02] transition-transform duration-300"
          })
        })
      }),

      /* Bottom Section: Vendas */
      e.jsx(s,{
        children:e.jsxs("div",{
          className:"text-center mt-16 md:mt-24 mb-10 text-primary",
          children:[
            e.jsxs("h2",{
              className:"text-2xl sm:text-3xl md:text-4xl font-bold leading-snug mb-4 text-[#03002E] max-w-3xl mx-auto",
              children:[
                "Além das ferramentas de gestão e entrega da mentoria, tenha o ",
                e.jsx("strong",{className:"font-bold text-[#03002E]",children:"que precisa pra aumentar suas vendas:"})
              ]
            })
          ]
        })
      }),

      /* Centered Sales Card */
      e.jsx(s,{
        children:e.jsxs("div",{
          className:"max-w-2xl mx-auto pt-10",
          children:[
            e.jsxs("div",{
              className:"deliverables-card",
              children:[
                e.jsx("div",{
                  className:"deliverables-img-wrapper",
                  children:e.jsx("img",{
                    src:"/capa.webp",
                    alt:"Kit Mentora - Vendas",
                    loading:"lazy",
                    decoding:"async",
                    className:"deliverables-img"
                  })
                }),
                e.jsx("div",{
                  className:"deliverables-list",
                  children:salesItems.map((item,idx)=>e.jsxs("div",{
                    className:"deliverables-item",
                    children:[
                      checkIcon(),
                      e.jsxs("p",{
                        className:"deliverables-text",
                        children:[
                          e.jsx("strong",{children:item.strong}),
                          item.text
                        ]
                      })
                    ]
                  },idx))
                })
              ]
            }),
            e.jsx("div",{
              className:"mt-10 text-center",
              children:e.jsx("a",{
                href:"#oferta",
                className:"cta-button text-base md:text-lg font-bold uppercase tracking-wider inline-block",
                children:"QUERO VENDER MENTORIAS"
              })
            })
          ]
        })
      })
    ]
  })
});

export{d as default};
