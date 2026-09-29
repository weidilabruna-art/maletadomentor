import{j as e,F as s}from"./index-C6USQn8-.js";

const checkIcon=()=>e.jsx("svg",{
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

const d=()=>e.jsx("section",{
  className:"section-cream py-16 md:py-24",
  children:e.jsxs("div",{
    className:"content-wrapper max-w-6xl mx-auto",
    children:[
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
                          e.jsx("strong",null,item.strong),
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
                    src:"/capa.webp",
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
                          e.jsx("strong",null,item.strong),
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
      })
    ]
  })
});

export{d as default};
