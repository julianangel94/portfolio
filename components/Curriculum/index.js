import Link from "next/link";
import { breakpoints, colors, fontSizes } from "/styles/theme.js";

const Curriculum = () => {
  const info = {
    cel: "3168216424",
    email: "julianangel94@gmail.com",
    name: "Julián Ángel Arango",
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
          <div className="left-section col-lg-3 d-flex flex-column align-items-center py-3 d-print-none">
            <img
              src="/images/me.jpg"
              alt="Curriculum"
              className="photo rounded w-50"
            />
            <div className="w-100 mt-3 px-2">
              <div className="my-3 text-center d-lg-none">
                <h1>{info.name}</h1>
                <h4>Ingeniero de sistemas</h4>
              </div>
              <div className="line w-100 d-lg-none">
                <div className="arrow">
                  <div className="pin"></div>
                  <div className="pin"></div>
                </div>
              </div>
              <div className="w-100 mt-5 px-2"></div>
              <h2 className="mb-2 text-center">Contacto</h2>
              <div className="ps-2">
                <div className="text-contact">
                  <img src="/icons/mail.svg" alt="mail" />
                  <span className="mx-2">
                    <a id="email" href={`mailto:${info.email}`}>
                      {info.email}
                    </a>
                  </span>
                </div>
                <div className="text-contact">
                  <img src="/icons/phone.svg" alt="phone" />
                  <span className="mx-2">{info.cel}</span>
                </div>
                <div className="text-contact">
                  <img src="/icons/geo.svg" alt="localization" />
                  <span className="mx-2">
                    Calle 37 # 87 - 19, Medellín, Colombia.
                  </span>
                </div>
                <div className="text-contact">
                  <img src="/icons/calendar.svg" alt="born" />
                  <span className="mx-2">04/06/1994</span>
                </div>
              </div>
            </div>
            <div className="line w-100 ">
              <div className="arrow">
                <div className="pin"></div>
                <div className="pin"></div>
              </div>
            </div>
            <div className="w-100 mt-5 px-2">
              <h2 className="mb-2 text-center">Conocimientos</h2>
              <ul>
                <li>
                  <b>Leguajes:</b> C#, JavaScript, PHP.
                </li>
                <li>
                  <b>Frameworks:</b> .NET Core, .NET ASP, Xamarin, WPF, Blazor,
                  Razor Pages, NextJS.
                </li>
                <li>
                  <b>Librerías:</b> React, JQuery.
                </li>
                <li>
                  <b>Bases de datos:</b> SQL Server, Oracle, MySQl.
                </li>
                <li>
                  <b>Repositorios:</b> Git, Github, GitLab, Azure.
                </li>
              </ul>
            </div>
            <div id="language" className="line w-100 ">
              <div className="arrow">
                <div className="pin"></div>
                <div className="pin"></div>
              </div>
            </div>
            <div className="w-100 mt-5 px-2">
              <h2 className="mb-2 text-center">Idiomas</h2>
              <ul>
                <li>
                  <b>Inglés</b> (B1)
                </li>
                <li>
                  <b>Español</b> (Nativo)
                </li>
              </ul>
            </div>
            <div className="line w-100 ">
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

          <div className="right-section col-lg-9 pt-2 p-4">
            <div className="my-3 text-center">
              <img
                src="/images/me.jpg"
                alt="Curriculum"
                className="d-none mx-auto d-print-block photo-print"
              />
              <h1 className="text-secondary d-none d-lg-block d-print-block">
                {info.name}
              </h1>
              <h4 className="d-none d-lg-block d-print-block">
                Ingeniero de sistemas
              </h4>
            </div>

            <div className="d-none d-print-block">
              <h2 className="text-secondary">Contacto</h2>
              <hr></hr>
              <div className="hv-content">
                <ul>
                  <li>
                    <b>Teléfono:</b> 3168216424
                  </li>
                  <li>
                    <b>E-mail:</b> julianangel94@gmail.com
                  </li>
                  <li>
                    <b>Ciudad:</b> Medellín, Colombia
                  </li>
                  <li>
                    <b>Fecha de nacimiento:</b> 04 de Junio de 1994
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-secondary">Perfil</h2>
            <hr></hr>
            <div className="hv-content">
              <p>
                Ingeniero de sistemas con experiencia en programación de
                Software orientado al lenguaje de programación C# utilizando
                ASP.NET Framework Y ASP.NET Core; orientado en desarrollo de
                frontend en MVC, Web forms; desarrollo de backend en Web Api y
                Web Service; orientado en desarrollo de aplicaciones de
                escritorio utilizando Windows Forms y WPF; adicionalmente con
                conocimientos en desarrollo Web utilizando HTML5, CSS3 y
                Javascript; igualmente en administración de base de datos
                utilizando SQL Server y Oracle.
              </p>
              <p>
                Profesional con aptitud de liderazgo, proactivo, capacidad para
                afrontar y resolver problemas, trabajo en equipo, adaptación al
                cambio, responsable, honesto y con excelentes relaciones
                interpersonales.
              </p>
            </div>

            <h2 className="text-secondary">Experiencia laboral</h2>
            <hr></hr>
            <div className="hv-content">
              <h4>Sourcecol S.A.S</h4>
              <address>Abril 2019 &rArr; Actualmente </address>
              <p>
                Desarrollo de plataforma Web utilizando en Frontend Web forms,
                Razor Pages, MVC .Net Framwork y .Net Core, Manejo de Backend
                Web Api ASP .Net y Core, y administración en base de datos SQL
                Server. Manejo básico de Azure Devops.
              </p>

              <h4>101 Softaware S.A.S</h4>
              <address>Enero 2018 &rArr; Abril 2019</address>
              <p>
                Desarrollo de nuevas aplicaciones en los lenguajes de ASP.NET
                C#, MVC 5 y Web Forms. Desarrollo de aplicaciones de escritorio
                en Windows Forms, WPF, y manejo de base de datos SQL Server.
              </p>

              <h4>ARUS</h4>
              <address>Abril 2017 &rArr; Octubre 2017</address>
              <p>
                Brindar apoyo en todo lo relacionado con soporte a los
                aplicativos del área, tanto desarrollando como corrigiendo
                posibles errores en ellos, con Oracle como motor de base de
                datos y php como lenguaje de programación. También apoyando en
                labores administrativas tales como la gestión de las
                transferencias y de los indicadores del área.
              </p>
            </div>

            <div className="d-none d-print-block">
              <h2 className="text-secondary">Conocimientos</h2>
              <hr></hr>
              <div className="hv-content">
                <ul>
                  <li>
                    <b>Leguajes:</b> C#, JavaScript, PHP.
                  </li>
                  <li>
                    <b>Frameworks:</b> .NET Core, .NET ASP, Xamarin, WPF,
                    Blazor, Razor Pages, NextJS.
                  </li>
                  <li>
                    <b>Librerías:</b> React, JQuery.
                  </li>
                  <li>
                    <b>Bases de datos:</b> SQL Server, Oracle, MySQl.
                  </li>
                  <li>
                    <b>Repositorios:</b> Git, Github, GitLab, Azure.
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-secondary">Educación</h2>
            <hr></hr>
            <div className="hv-content">
              <ul>
                <li>
                  Ingeniero de sistemas, ITM (Instituto Tecnológico
                  Metropolitano), obtenido en abril del 2018.
                </li>
                <li>
                  Tecnólogo de sistemas, ITM (Instituto Tecnológico
                  Metropolitano), obtenido en junio del 2015.
                </li>
                <li>
                  Certificaciones de Platzi, en las diferentes áreas (C#,
                  JavaScript, Git, Inglés, DB), obtenidas desde el 2019.
                </li>
              </ul>
            </div>

            <div className="d-none d-print-block">
              <h2 className="text-secondary">Idiomas</h2>
              <hr></hr>
              <div className="hv-content">
                <ul>
                  <li>
                    <b>Inglés</b> (B1)
                  </li>
                  <li>
                    <b>Español</b> (Nativo)
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-secondary">Referencias</h2>
            <hr></hr>
            <div className="hv-content">
              <ul>
                <li>
                  Laura Orozco - Ingeniera de Software
                  <ul>
                    <li>
                      <b>Teléfono:</b> 3128423378
                    </li>
                    <li>
                      <b>E-mail:</b> lauorozco13@gmail.com
                    </li>
                  </ul>
                </li>
                <li>
                  Brandon Montoya - Ingeniero de Sistemas
                  <ul>
                    <li>
                      <b>Teléfono:</b> 3126104754
                    </li>
                    <li>
                      <b>E-mail:</b> brandon-377@hotmail.com
                    </li>
                  </ul>
                </li>
                <li>
                  Sebastián Betancur - Ingeniero de Software
                  <ul>
                    <li>
                      <b>Teléfono:</b> 3118828394
                    </li>
                    <li>
                      <b>E-mail:</b> sebasbetancur97@gmail.com
                    </li>
                  </ul>
                </li>
              </ul>
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

        .text-contact {
          font-size: 0.9rem;
        }

        .photo-print{
          height: 300px;
          width: 250px;
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
          box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
          object-fit: contain;
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
          border-bottom: solid 2px #999999;
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
          background: #999999;
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

        footer {
          display: none !important;
        }

        @media (max-width: ${breakpoints.ipad}) {
          span {
            font-size: ${fontSizes.font_size_sm};
          }

          @media (max-width: 400px {
          .text-contact {
            font-size: 0.5rem;
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
