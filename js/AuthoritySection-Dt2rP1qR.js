import{j as e,F as a}from"./index-C6USQn8-.js";

const bulletItems=[
  "Transformarem conhecimento em um negócio",
  "Construírem um posicionamento forte e atraírem os clientes certos",
  "Terem mais previsibilidade, lucro e liberdade"
];

const t=()=>e.jsx("section",{
  className:"section-offwhite",
  style:{padding:"5rem 0 5rem 0"},
  children:e.jsx("div",{
    className:"content-wrapper",
    children:e.jsx(a,{
      children:e.jsxs("div",{
        style:{
          display:"flex",
          flexDirection:"column",
          alignItems:"center",
          gap:"3rem"
        },
        className:"authority-flex-row",
        children:[
          e.jsx("div",{
            style:{
              flexShrink:0,
              display:"flex",
              alignItems:"center",
              justifyContent:"center"
            },
            children:e.jsx("img",{
              src:"/foto-rubens-nova.png",
              alt:"Rubens Godoy",
              loading:"lazy",
              decoding:"async",
              style:{
                width:"280px",
                maxWidth:"100%",
                height:"auto",
                borderRadius:"24px",
                objectFit:"cover",
                objectPosition:"center top",
                boxShadow:"0 20px 50px rgba(3,0,46,0.18)"
              }
            })
          }),
          e.jsxs("div",{
            style:{
              flex:1,
              fontFamily:"'Montserrat','Poppins',sans-serif",
              textAlign:"left"
            },
            children:[
              e.jsx("span",{
                className:"tag-gold",
                style:{marginBottom:"1.25rem",display:"inline-block"},
                children:"CONHEÇA QUEM ESTÁ POR TRÁS DO KIT"
              }),
              e.jsx("h2",{
                style:{
                  color:"#03002E",
                  fontFamily:"'Montserrat','Poppins',sans-serif",
                  fontSize:"clamp(1.5rem,3vw,2rem)",
                  fontWeight:800,
                  marginBottom:"1.25rem",
                  lineHeight:1.2
                },
                children:"Prazer, sou o Rubens Godoy!"
              }),
              e.jsxs("p",{
                style:{
                  color:"#1a1560",
                  fontFamily:"'Montserrat','Poppins',sans-serif",
                  fontSize:"clamp(0.95rem,1.5vw,1.05rem)",
                  lineHeight:1.7,
                  marginBottom:"1.1rem"
                },
                children:[
                  "Cristão, casado com a Weidila e estrategista digital com anos de experiência em ",
                  e.jsx("strong",{style:{color:"#03002E"},children:"marketing, tráfego e funis de vendas"}),
                  "."
                ]
              }),
              e.jsxs("p",{
                style:{
                  color:"#1a1560",
                  fontFamily:"'Montserrat','Poppins',sans-serif",
                  fontSize:"clamp(0.95rem,1.5vw,1.05rem)",
                  lineHeight:1.7,
                  marginBottom:"1.1rem"
                },
                children:[
                  "Ajuda profissionais, especialistas e empresários a transformarem seu conhecimento em um negócio sólido no digital, com uma estrutura e metodologia que já geraram ",
                  e.jsx("strong",{style:{color:"#03002E"},children:"mais de R$10 milhões em vendas"}),
                  "."
                ]
              }),
              e.jsx("p",{
                style:{
                  color:"#03002E",
                  fontFamily:"'Montserrat','Poppins',sans-serif",
                  fontSize:"clamp(0.95rem,1.5vw,1.05rem)",
                  fontWeight:700,
                  lineHeight:1.7,
                  marginBottom:"0.75rem"
                },
                children:"Rubens já ajudou dezenas de profissionais a:"
              }),
              e.jsx("ul",{
                style:{listStyle:"none",padding:0,margin:0},
                children:bulletItems.map((item,idx)=>e.jsxs("li",{
                  style:{
                    color:"#1a1560",
                    fontFamily:"'Montserrat','Poppins',sans-serif",
                    fontSize:"clamp(0.95rem,1.5vw,1.05rem)",
                    lineHeight:1.7,
                    marginBottom:"0.5rem",
                    display:"flex",
                    alignItems:"flex-start",
                    gap:"0.5rem"
                  },
                  children:[
                    e.jsx("span",{style:{color:"#c59b63",fontWeight:700,marginTop:"0.1rem"},children:"–"}),
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
