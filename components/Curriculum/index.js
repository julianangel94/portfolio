import Link from "next/link";
import { breakpoints, colors, fontSizes } from "/styles/theme.js";

const Curriculum = () => {
  const info = {
    cel: "3118889977",
    email: "julianangel94@gmail.com",
    github: "julianangel",
    domain: "www.elapadelosapaces.com",
    name: "Julian Angel Arango",
  };

  const print = () => {
    if (window) {
      window.print();
    }
  };

  return (
    <>
      <section id="hv" className="container-fluid min-vh-100">
        <div className="row content">
          <div className="left-section col-lg-2 d-flex flex-column align-items-center py-3">
            <img
              src="/images/me.png"
              alt="Curriculum"
              className="photo rounded-circle w-100"
            />
            <div className="w-100 mt-3 px-2">
              <h2 className="mb-2 text-center">Contactame</h2>
              <ul>
                <li>
                  <img src="/icons/mail.svg" alt="mail" />
                  <span className="mx-2">{info.email}</span>
                </li>
                <li>
                  <img src="/icons/phone.svg" alt="phone" />
                  <span className="mx-2">{info.cel}</span>
                </li>
                <li>
                  <img src="/icons/github.svg" alt="github" />
                  <span className="mx-2">
                    <a href={`https://github.com/sbetancurs${info.github}`}>
                      {info.github}
                    </a>
                  </span>
                </li>
                <li>
                  <img src="/icons/geo.svg" alt="localization" />
                  <span className="mx-2">Medellín, Colombia.</span>
                </li>
              </ul>
            </div>
            <div className="line w-100 ">
              <div className="arrow">
                <div className="pin"></div>
                <div className="pin"></div>
              </div>
            </div>
            <div className="w-100 mt-5 px-2">
              <h2 className="mb-2  text-center">education</h2>
              <ul>
                <li>
                  <img src="/icons/award.svg" alt="award" />
                  <span className="mx-2">
                    , Tecnológico de Antioquia, March 2021.
                  </span>
                </li>
              </ul>
            </div>
            <div id="language" className="line w-100 ">
              <div className="arrow">
                <div className="pin"></div>
                <div className="pin"></div>
              </div>
            </div>
            <div id="languageMenu" className="w-100 mt-5 px-2">
              <div className="printFeature d-flex justify-content-center mb-3">
                <img src="/icons/printer.svg" alt="print" />
                <a className="mx-2 print" onClick={print}>
                  imprimir
                </a>
              </div>
            </div>
          </div>
          <div className="right-section col-lg-10 pt-2 pt-lg-0">
            <div
              id="contact-info"
              className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center align-items-start"
            >
              <h1>{info.name}</h1>
              <div>
                <a
                  id="email"
                  href="mailto:c2ViYXNiZXRhbmN1cjk3QGdtYWlsLmNvbQ=="
                >
                  {info.email}
                </a>
                <br />
                <a target="_blank">{info.domain}</a>
                <br />
                Medellín, Colombia
              </div>
            </div>
            <div className="hv-section">
              <h2>"hv:qualificatio"</h2>
            </div>
            <div className="hv-content">
              <ul>
                <li>
                  <img src="/icons/arrow-right-short.svg" alt="mail" />
                  <b>"hv:languag":</b> C#, Blazor, .Net Core, JavaScript,
                  NodeJS, TypeScript.
                </li>
                <li>
                  <img src="/icons/arrow-right-short.svg" alt="mail" />
                  <b>"hv:framewor":</b> NextJS, Angular.
                </li>
                <li>
                  <img src="/icons/arrow-right-short.svg" alt="mail" />
                  <b>"hv:librari":</b> React.
                </li>
                <li>
                  <img src="/icons/arrow-right-short.svg" alt="mail" />
                  <b>"hv:respositori":</b> Git, Github, GitLab, Azure
                </li>
              </ul>
            </div>

            <div className="hv-section">
              <h2>"hv:workExperien"</h2>
            </div>
            <div className="hv-content">
              <p className="date">"hv:april""19 &rArr; "hv:present"" </p>
              <div className="d-flex subtitle">
                <img src="/icons/arrow-right-short.svg" alt="mail" />
                <h3>Sourcecol S.A.S</h3>
              </div>
              <address>Mi ("hv:engineer" - Medellín, Colombia.</address>
              <p>"hv:sourcecolExp"</p>

              <p className="date">("hv:march" 2018 &rArr ("hv:april" 2019</p>
              <div className="d-flex subtitle">
                <img src="/icons/arrow-right-short.svg" alt="mail" />
                <h3>E-city Software</h3>
              </div>
              <address>Junio ("hv:developer" - Medellín, Colombia.</address>
              <p>
                -Trabajé como desarrollador backend y frontend, desarrollando
                API's, diseñando formularios, desarrollando workflows, etc.
                \n-Trabajó en la programación de dispositivos físicos que las
                empresas colocan en sus sucursales donde los usuarios pueden
                pagar impuestos, buscar información y todo esto con efectivo. -
                Trabajó en la programación de dispositivos físicos que los cines
                colocan en sus sucursales donde los usuarios pueden pagar
                boletos, buscar funciones, seleccionar sala de posición, buscar
                boletos comprados y todo esto con efectivo. -Dispositivos
                físicos integrados que administran efectivo como billetera,
                monedero, escáner de dedos, etc. Se utiliza en software para
                obtener dinero, devolver dinero, habilitar la autenticación.
                n-Implementó y administró la infraestructura de traducción en
                nuestras aplicaciones frontend y backend
              </p>

              <p className="date">("hv:january" 2017 &rArr ("hv:march" 2018</p>
              <div className="d-flex subtitle">
                <img src="/icons/arrow-right-short.svg" alt="mail" />
                <h3>1Cero1 Software</h3>
              </div>
              <address>Junio ("hv:developer" - Medellín, Colombia.</address>
              <p>"hv:1cero1Exp"</p>
            </div>

            <div className="hv-section">
              <h2>"hv:entrepreneurship"</h2>
            </div>
            <div className="hv-content mb-3">
              <div className="d-flex subtitle">
                <img src="/icons/arrow-right-short.svg" alt="mail" />
                <h3>Oxigiovanny App</h3>
              </div>
              <p>"hv:oxigiovannyExp"</p>
            </div>

            <div className="hv-section">
              <h2>"hv:openSource"</h2>
            </div>
            <div className="hv-content mb-3">
              <h3>
                <div className="d-flex subtitle">
                  <img src="/icons/arrow-right-short.svg" alt="mail" />
                  <Link href="/">
                    <a target="_blank">"hv:portfolio"</a>
                  </Link>
                </div>
              </h3>
              <p>"hv:portfolioExp"</p>
            </div>

            <div className="hv-section">
              <h2>"hv:education"</h2>
            </div>
            <div className="hv-content">
              <p>"hv:educationExp"</p>
            </div>

            <div className="hv-section">
              <h2>"hv:activitiesInterests"</h2>
            </div>
            <div className="hv-content">
              <p>"hv:activities"</p>
            </div>
          </div>
        </div>
      </section>
      <style jsx global>{`
        div.scroll-to-top {
          visibility: hidden !important;
        }
        @media (max-width: ${breakpoints.mobile}),
          (max-width: ${breakpoints.ipad}) {
          nav {
            width: 20%!important;
        }
      `}</style>
      <style jsx>{`
        section {
          background: ${colors.white};
        }

        .content {
          min-height: 100vh;
        }

        .left-section {
          background: ${colors.secondary};
          color: ${colors.white};
          white-space: pre-line;
        }

        .right-section {
          background: ${colors.white};
          color: ${colors.black};
          white-space: pre-line;
        }

        h1 {
          font-size: ${fontSizes.font_size_md};
        }

        h2 {
          font-size: ${fontSizes.font_size_md};
          border-bottom: 1px solid ${colors.white};
        }

        span {
        }

        h3 {
          font-size: ${fontSizes.font_size_sm};
        }

        a {
          text-decoration: none;
        }

        .left-section a {
          color: ${colors.white};
        }

        .right-section a {
          color: ${colors.black};
        }

        .photo {
          border: 1px solid ${colors.white};
          box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
        }

        .hv-section {
          background-color: ${colors.secondary};
          color: ${colors.white};
          text-align: left !important;
          padding: 10px;
        }

        .hv-content {
          padding: 10px;
        }

        .line {
          border-bottom: solid 2px #fff;
          height: 40px;
          position: relative;
          width: 100%;
          z-index: 1;
        }
        .arrow {
          content: "";
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          height: 20px;
          width: 80px;
          z-index: 2;
          background-color: ${colors.secondary};
        }
        .arrow .pin {
          width: calc(50% + 5px);
          height: 2px;
          background: #fff;
          display: inline-block;
          float: left;
          transform: rotate(25deg);
          transform-origin: 0 0;
        }
        .arrow .pin:last-child {
          transform: rotate(-25deg);
          transform-origin: 100% 0;
          float: right;
          margin-top: -2px;
        }

        #address h3 {
          border-bottom: none;
          margin-top: 0;
        }
        p.date {
          font-size: 0.8em;
          margin-top: 0.4em;
          float: right;
        }
        address {
          font-style: italic;
          color: #333;
          font-size: 0.9em;
        }

        .subtitle {
          margin: 1em 0 0 0;
        }
        li {
          font-size: 0.9em;
        }

        .print {
          cursor: pointer;
        }
        .print:hover {
          text-decoration: underline;
        }

        @media (max-width: ${breakpoints.ipad}) {
          span {
            font-size: ${fontSizes.font_size_sm};
          }

          .photo {
            width: 50% !important;
          }

          .printFeature {
            display: none !important;
          }
        }

        @media print {
          html {
            background-color: #eee;
          }
          body {
            background-color: #fff;
            font-family: Helvetica, Arial, sans-serif;
            padding: 1em;
            border: solid #aaa;
            border-width: 1px 3px 3px 1px;
            margin: 1em auto;
            max-width: 50em;
          }

          .left-section,
          #language,
          #languageMenu {
            display: none !important;
          }

          #address h3 {
            border-bottom: none;
            margin-top: 0;
            margin-bottom: 0;
          }

          h2 {
            margin-top: 0;
            margin-bottom: 0;
          }

          hv-section,
          hv-content {
            margin-bottom: 0;
            padding: 0;
          }

          div#contact-info {
            float: right;
            margin-bottom: 12px;
            text-align: right;
          }
          p.date {
            float: right;
            font-size: 0.8em;
            margin-top: 0.4em;
          }
          address {
            font-style: italic;
            color: #333;
            font-size: 0.9em;
          }
          h1 {
            font-size: 1.3em;
            font-family: Helvetica, Arial, sans-serif;
          }
          h2 {
            clear: both;
            font-size: 1.2em;
            font-weight: bold;
            margin-top: 1.3em;
            font-variant: small-caps;
            padding-left: 0.25em;
            background-color: #eee;
            border-bottom: 1px solid #999;
            letter-spacing: 0.06em;
          }
          h3 {
            margin: 1em 0 0 0;
          }
          li {
            font-size: 0.9em;
          }
        }
      `}</style>
    </>
  );
};

export default Curriculum;
