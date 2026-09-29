import{j as e,F as a}from"./index-C6USQn8-.js";

const bulletItems=[
  "Transformarem conhecimento em um negócio",
  "Construírem um posicionamento forte e atraírem os clientes certos",
  "Terem mais previsibilidade, lucro e liberdade"
];

const t=()=>e.jsx("section",{
  className:"section-offwhite py-20 md:py-28",
  children:e.jsx("div",{
    className:"content-wrapper",
    children:e.jsx(a,{
      children:e.jsxs("div",{
        className:"flex flex-col md:flex-row items-center gap-12 md:gap-16",
        children:[
          e.jsx("div",{
            className:"shrink-0 flex items-center justify-center",
            children:e.jsx("img",{
              src:"/foto-rubens-nova.png",
              alt:"Rubens Godoy",
              loading:"lazy",
              decoding:"async",
              className:"w-72 md:w-80 max-w-full rounded-3xl object-cover shadow-xl"
            })
          }),
          e.jsxs("div",{
            className:"text-center md:text-left flex-1",
            style:{fontFamily:"'Montserrat', 'Poppins', sans-serif"},
            children:[
              e.jsx("span",{
                className:"tag-gold mb-5 inline-block",
                children:"CONHEÇA QUEM ESTÁ POR TRÁS DO KIT"
              }),
              e.jsx("h2",{
                className:"text-2xl md:text-3xl font-bold mb-5",
                style:{color:"#03002E",fontFamily:"'Montserrat', 'Poppins', sans-serif"},
                children:"Prazer, sou o Rubens Godoy!"
              }),
              e.jsxs("p",{
                className:"text-base md:text-lg leading-relaxed mb-5",
                style:{color:"#1a1560",fontFamily:"'Montserrat', 'Poppins', sans-serif"},
                children:[
                  "Cristão, casado com a Weidila e estrategista digital com anos de experiência em ",
                  e.jsx("strong",{style:{color:"#03002E"},children:"marketing, tráfego e funis de vendas"}),
                  "."
                ]
              }),
              e.jsxs("p",{
                className:"text-base md:text-lg leading-relaxed mb-5",
                style:{color:"#1a1560",fontFamily:"'Montserrat', 'Poppins', sans-serif"},
                children:[
                  "Ajuda profissionais, especialistas e empresários a transformarem seu conhecimento em um negócio sólido no digital, com uma estrutura e metodologia que já geraram ",
                  e.jsx("strong",{style:{color:"#03002E"},children:"mais de R$10 milhões em vendas"}),
                  "."
                ]
              }),
              e.jsx("p",{
                className:"text-base md:text-lg font-bold leading-relaxed mb-4",
                style:{color:"#03002E",fontFamily:"'Montserrat', 'Poppins', sans-serif"},
                children:"Rubens já ajudou dezenas de profissionais a:"
              }),
              e.jsx("ul",{
                className:"space-y-3 text-left mb-4",
                children:bulletItems.map((item,idx)=>e.jsxs("li",{
                  className:"text-base md:text-lg leading-relaxed",
                  style:{color:"#1a1560",fontFamily:"'Montserrat', 'Poppins', sans-serif"},
                  children:[
                    e.jsx("span",{className:"text-gold font-bold mr-2",children:"–"}),
                    item
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
