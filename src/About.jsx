import { Container, Row, Col, Card } from "react-bootstrap";
import styles from "./About.module.css";

function About() {
  return (
    <Container className={styles.container}>
      <Row className="justify-content-center">
        <Col md={8} xs={12}>
          <h1 className={styles.title}>Chi Siamo</h1>
          <p className={styles.description}>
            EpicBooks è una piattaforma dedicata agli amanti dei libri, dove
            puoi trovare recensioni dettagliate, aggiungere i tuoi commenti e
            scoprire nuovi titoli da leggere. La nostra missione è creare una
            community di lettori appassionati che condividono opinioni e
            consigli.
          </p>

          <Card className={styles.card}>
            <Card.Body>
              <Card.Title>La nostra storia</Card.Title>
              <Card.Text>
                Nato nel 2025, EpicBooks è stato creato con l'obiettivo di
                fornire un luogo semplice e accogliente dove discutere di
                letteratura. Crediamo nel potere delle parole e nella magia dei
                libri che uniscono le persone.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className={styles.card}>
            <Card.Body>
              <Card.Title>Il team</Card.Title>
              <Card.Text>
                Siamo un gruppo di sviluppatori, lettori e appassionati di
                tecnologia che hanno deciso di unire le forze per realizzare
                questo progetto. Lavoriamo costantemente per migliorare
                l’esperienza utente e arricchire la piattaforma con nuove
                funzionalità.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className={styles.card}>
            <Card.Body>
              <Card.Title>Contatti</Card.Title>
              <Card.Text>
                Vuoi saperne di più? Hai suggerimenti o domande? Scrivici una
                mail a <a href="mailto:info@epicbooks.com">info@epicnooks.com</a>.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default About;