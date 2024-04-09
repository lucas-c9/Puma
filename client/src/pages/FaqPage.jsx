import { Container, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function FaqPage() {


    return (
        <Container>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography sx={{ color: '#1578A2' }}>¿Cómo busco un producto?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        En el buscador presente en el borde superior derecho puedes ingresar por el nombre o la categoría del producto que estas buscando.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel2a-header"
                >
                    <Typography>¿Cómo selecciono el producto que deseo comprar?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        En el carrito presente en el borde superior derecho puedes visualizar la cantidad, valor individual y el total de los producto que seleccionaste.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel2a-header"
                >
                    <Typography>¿Los productos son originales o replica?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Son originales!!
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel2a-header"
                >
                    <Typography > ¿Porque estos productos son oulet? </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Existen varias razones:  <br></br>
                        1. No son de temporada.<br></br> 2. Con la suerte, de que la provincia de La Rioja tenemos la fabrica oficial, dejamos para su gente producctos accesibles a la comunidad.

                    </Typography>
                </AccordionDetails>
            </Accordion>

        </Container>
    );
}

export default FaqPage;
