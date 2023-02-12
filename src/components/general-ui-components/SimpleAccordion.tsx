import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FC } from 'react';


export interface ISimpleAccordionItem {
  summary: string;
  details: string;
}

interface IProps {
  items: ISimpleAccordionItem[];
}

const SimpleAccordion: FC<IProps> = ({items}) => {

  const elements = items.map((item, index) => (
    <Accordion sx={{marginBottom: "10px"}} key={index}>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls={`panel${index}-content`}
      id={`panel${index}-header`}
    >
      <Typography>{item.summary}</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>{item.details}</Typography>
    </AccordionDetails>
  </Accordion>
  ))

  return (<div>{elements}</div>
  );
}

export default SimpleAccordion;
