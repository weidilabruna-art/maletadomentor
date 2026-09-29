import{j as e,F as a}from"./index-C6USQn8-.js";

const bulletItems=[
  "Transformarem conhecimento em um negócio",
  "Construírem um posicionamento forte e atraírem os clientes certos",
  "Terem mais previsibilidade, lucro e liberdade"
];

const t=()=>e.jsx("section",{
  className:"section-offwhite py-16 md:py-20",
  children:e.jsx("div",{
    className:"content-wrapper",
    children:e.jsx(a,{
      children:e.jsxs("div",{
        className:"flex flex-col md:flex-row items-center gap-8 md:gap-12",
        children:[
          e.jsx("div",{
            className:"shrink-0 flex items-center justify-center",
            children:e.jsx("img",{
              src:"/foto-rubens-nova.png",
              alt:"Rubens Godoy",
              loading:"lazy",
              decoding:"async",
              className:"w-64 md:w-80 rounded-2xl object-cover border-4 border-gold/40 shadow-2xl -rotate-1 hover:rotate-0 transition-transform duration-500",
              style:{aspectRatio:"4 / 5"}
            })
          }),
          e.jsxs("div",{
            className:"text-center md:text-left flex-1",
            children:[
              e.jsx("span",{
                className:"tag-gold mb-4 inline-block",
                children:"CONHEÇA QUEM ESTÁ POR TRÁS DO KIT"
              }),
              e.jsx("h2",{
                className:"text-2xl md:text-3xl text-primary font-bold mb-4",
                children:"Prazer, sou o Rubens Godoy!"
              }),
              e.jsxs("p",{
                className:"text-base md:text-lg text-muted-foreground leading-relaxed mb-4",
                children:[
                  "Cristão, casado com a Weidila e estrategista digital com anos de experiência em ",
                  e.jsx("strong",{children:"marketing, tráfego e funis de vendas"}),
                  "."
                ]
              }),
              e.jsxs("p",{
                className:"text-base md:text-lg text-muted-foreground leading-relaxed mb-4",
                children:[
                  "Ajuda profissionais, especialistas e empresários a transformarem seu conhecimento em um negócio sólido no digital, com uma estrutura e metodologia que já geraram ",
                  e.jsx("strong",{children:"mais de R$10 milhões em vendas"}),
                  "."
                ]
              }),
              e.jsx("p",{
                className:"text-base md:text-lg text-primary font-bold leading-relaxed mb-3",
                children:"Rubens já ajudou dezenas de profissionais a:"
              }),
              e.jsx("ul",{
                className:"space-y-2 text-left mb-4 inline-block md:block",
                children:bulletItems.map((item,idx)=>e.jsxs("li",{
                  className:"flex items-start gap-2.5 text-base md:text-lg text-muted-foreground leading-relaxed",
                  children:[
                    e.jsx("span",{className:"text-gold font-bold text-lg leading-none mt-1",children:"–"}),
                    e.jsx("span",{children:item})
                  ]
                },idx))
              })
            ]
          })
        ]
      })
    })
  })
});

export{t as default};
