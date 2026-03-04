import style from "./Sobre.module.css";
import { useTranslation } from "react-i18next";
import BackgroundCanvas from "../../components/BackgroundCanvas";
import minhaFoto from "../../assets/minhaFoto.jpg"; // ← Importe sua foto aqui
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ApartmentIcon from "@mui/icons-material/Apartment";
import SchoolIcon from "@mui/icons-material/School";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

export default function Sobre() {
  const { t } = useTranslation();

  return (
    <section className={style.sobrePage}>
      <BackgroundCanvas />

      <div className={style.container}>
        {/* FOTO */}
        <div className={style.photoSection}>
          <div className={style.photoWrapper}>
            <div className={style.photoCircle}>
              <img src={minhaFoto} alt="Foto do dev" />
            </div>
          </div>
          <h1 className={style.mainTitle}>Sobre Mim</h1>
        </div>

        {/* SOBRE MIM */}
        <div className={style.section}>
          <h2 className={style.sectionTitle}>Quem Sou Eu</h2>
          <p className={style.description}>
            Sou estudante de Engenharia de Software com foco em desenvolvimento
            backend e frontend. Tenho experiência com Java, Spring Boot,
            React e bancos de dados relacionais. Busco evoluir constantemente
            como desenvolvedor e construir soluções escaláveis e inovadoras.
          </p>
        </div>

        {/* EXPERIÊNCIA */}
        <div className={style.section}>
          <h2 className={style.sectionTitle}>Experiência</h2>
          <p className={style.subtitle}>
            Veja um pouco sobre minha carreira profissional
          </p>

          <div className={style.timeline}>
            {/* Item 1 */}
            <div className={style.timelineItem}>
              <div className={style.timelineIcon}>
                <BusinessCenterIcon />
              </div>

              <div className={style.card}>
                <h3>Desenvolvedor Frontend</h3>
                <span className={style.company}>
                  <ApartmentIcon fontSize="small" /> Nome da Empresa
                </span>
                <p className={style.cardDate}>Jan 2023 - Presente</p>
                <p>
                  Desenvolvimento de aplicações web utilizando React
                  e Spring Boot, participação em modelagem de banco
                  de dados e integração com APIs REST.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className={style.timelineItem}>
              <div className={style.timelineIcon}>
                <BusinessCenterIcon />
              </div>

              <div className={style.card}>
                <h3>Desenvolvedor Júnior</h3>
                <span className={style.company}>
                  <ApartmentIcon fontSize="small" /> Outra Empresa
                </span>
                <p className={style.cardDate}>Jun 2022 - Dez 2022</p>
                <p>
                  Atuação no desenvolvimento e manutenção de sistemas,
                  correção de bugs e melhoria de performance.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* INDICADORES */}
        <div className={style.section}>
          <h2 className={style.sectionTitle}>Indicadores</h2>

          <div className={style.statsBox}>
            <div className={style.statsHeader}>
              <TrendingUpIcon />
              <span>Estatísticas</span>
            </div>
            <div className={style.stats}>
              <div className={style.statItem}>
                <h3>5</h3>
                <span>Projetos</span>
              </div>
              <div className={style.statItem}>
                <h3>3</h3>
                <span>Anos</span>
              </div>
              <div className={style.statItem}>
                <h3>1</h3>
                <span>Clientes</span>
              </div>
              <div className={style.statItem}>
                <h3>23</h3>
                <span>Commits</span>
              </div>
              <div className={style.statItem}>
                <h3>100+</h3>
                <span>Cafés</span>
              </div>
            </div>
          </div>

          <div className={style.academicBox}>
            <h3 className={style.academicTitle}>
              <SchoolIcon /> Progresso Acadêmico
            </h3>

            <div className={style.progressItem}>
              <div className={style.progressLabel}>
                <span>Engenharia de Software - PUC Minas</span>
                <span className={style.progressPercent}>60%</span>
              </div>
              <div className={style.progressBar}>
                <div style={{ width: "60%" }}></div>
              </div>
            </div>

            <div className={style.progressItem}>
              <div className={style.progressLabel}>
                <span>JavaScript e TypeScript - Udemy</span>
                <span className={style.progressPercent}>30%</span>
              </div>
              <div className={style.progressBar}>
                <div style={{ width: "30%" }}></div>
              </div>
            </div>

            <div className={style.progressItem}>
              <div className={style.progressLabel}>
                <span>Imersão Python - Hashtag</span>
                <span className={style.progressPercent}>100%</span>
              </div>
              <div className={style.progressBar}>
                <div style={{ width: "100%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
