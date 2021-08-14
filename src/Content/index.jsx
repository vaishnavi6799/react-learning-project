import React,{useState} from 'react';
import { Container,StyledAutoComplete,DetailsContainer } from './styles';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      width:300
    },
    media: {
      height: 140,
    },
  });
const initialPlaces = [
    { title: 'Mangaluru', content: "Mangalore (or Mangaluru) is an Arabian Sea port and a major commercial center in the Indian state of Karnataka. It's home to the Kadri Manjunath Temple, known for its bronze statues, and the 9th-century Mangaladevi Temple. Its Catholic sites include Milagres Church, dating to the 17th century, and St. Aloysious Chapel, which features interior paintings. Tannirbhavi Beach is popular for its sunset views.",image:"../images/mangalore.png" },
    { title: 'Bangalore', content: "Bengaluru (also called Bangalore) is the capital of India's southern Karnataka state. The center of India's high-tech industry, the city is also known for its parks and nightlife. By Cubbon Park, Vidhana Soudha is a Neo-Dravidian legislative building. Former royal residences include 19th-century Bangalore Palace, modeled after England’s Windsor Castle, and Tipu Sultan’s Summer Palace",image:"../images/bangalore.png" },
    { title: 'Hyderabad', content: "Hyderabad is the capital of southern India's Telangana state. A major center for the technology industry, it's home to many upscale restaurants and shops. Its historic sites include Golconda Fort, a former diamond-trading center that was once the Qutb Shahi dynastic capital. The Charminar, a 16th-century mosque whose 4 arches support towering minarets, is an old city landmark near the long-standing Laad Bazaar.",image:"../images/hyderabad.png" },
    { title: 'Delhi', content: "Delhi, India’s capital territory, is a massive metropolitan area in the country’s north. In Old Delhi, a neighborhood dating to the 1600s, stands the imposing Mughal-era Red Fort, a symbol of India, and the sprawling Jama Masjid mosque, whose courtyard accommodates 25,000 people.National Capital Territory (NCT) of Delhi, is a city and a union territory of India containing New Delhi, the capital of India.",image:"../images/Delhi.png" },
    { title: 'Chikmagaluru', content: "Chikmagalur is a hill station in Karnataka, a state in southwest India. To the north is Baba Budangiri, a mountain range in the Western Ghats, with 3 large caves said to be holy. Trails through forests and grasslands lead up to Mullayanagiri Peak. The cascading Hebbe Falls lie in an area of coffee plantations. The forested Bhadra Wildlife Sanctuary, northwest of Chikmagalur, is home to elephants, tigers and leopards. ",image:"../images/chikmagalur.png" },
    { title: 'Tirupathi', content: "Tirupati is a city in the Indian state of Andhra Pradesh. Its Sri Venkateswara Temple sits atop one of the the 7 peaks of Tirumala Hills, attracting scores of Hindu pilgrims. Sri Venkateswara National Park, home to the temple, also contains the Sri Venkateswara Zoological Park with lions and primates. Nearby, next to a waterfall and cave believed to be sacred, Sri Kapileswara Swamy Temple is dedicated to Lord Shiva.",image:"../images/tirupati.png" },
    { title: 'Araku', content: "Araku Valley is a hill station and valley region in the southeastern Indian state of Andhra Pradesh. It's surrounded by the thick forests of the Eastern Ghats mountain range. The Tribal Museum is dedicated to the area's numerous indigenous tribes, known for their traditional Dhimsa dance, and showcases traditional handicrafts. A miniature train runs through Padmapuram Gardens, with its sculptures and tree-top huts.",image:"../images/araku.png" },
    { title: 'Pune', content: "Pune is a sprawling city in the western Indian state of Maharashtra. It was once the base of the Peshwas (prime ministers) of the Maratha Empire, which lasted from 1674 to 1818. It's known for the grand Aga Khan Palace, which now a memorial to Gandhi.The 8th-century Pataleshwar Cave Temple is dedicated to the Hindu god Shiva.Pune lies on the western margin of the Deccan plateau, at an altitude of 560 m above sea level.",image:"../images/pune.png" }
];

const Content =()=>{
    const [places, setSelectedPlaces] = useState(initialPlaces); 
    const classes = useStyles();
        const onChange =(event,value,reason)=>{
            console.log(value)
            console.log(reason)
            if(reason==="clear"){
                setSelectedPlaces(initialPlaces);
            }
            else{
                setSelectedPlaces(value)
            }
    
         }
    return (
        <>
        <Container>   
        <StyledAutoComplete
        multiple
        onChange={onChange}
        options={initialPlaces} 
        getOptionLabel={(option) => option.title}
        id="auto-complete"
        autoComplete
        includeInputInList
        style={{ width: 700 }}
        renderInput={(params) => <TextField {...params} label="Choose a place"  margin="normal" />}
      />
      </Container>
      {places.map((location)=>(
        <DetailsContainer>
        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={location.image}
          title="location image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {location.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {location.content}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    </DetailsContainer>


      ))}
      
    </>
    );
}
export default Content;