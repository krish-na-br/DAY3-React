import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function App() {
  var districts = [
    {
      "id": 1,
      "title": "Kasargod",
      "description": "Kasaragod is a municipal town and administrative headquarters of Kasaragod district in the state of Kerala, India. Established in 1966, Kasaragod was the first municipal town in the district.",
      "image": "https://www.weekendthrill.com/wp-content/uploads/2016/07/Kasargod-compressed.jpg",
      "link" : "https://en.wikipedia.org/wiki/Kasaragod"
    
    },


    {
      "id": 2,
      "title": "Kannur",
      "description": "Kannur is a coastal city in the south Indian state of Kerala. It was once an ancient trading port. Enduring monuments such as 16th-century St. Angelo Fort, once occupied by European colonial forces, show the city’s significant role in the spice trade.",
      "image": "https://lh3.googleusercontent.com/p/AF1QipPOOvtFNsLw-HEG0bxGtfIzlzTj6NQ14KkLLv9y=s680-w680-h510",
      "link" : "https://en.wikipedia.org/wiki/Kannur"
    },


    {
      "id": 3,
      "title": "Wayanad",
      "description": "Wayanad is a rural district in Kerala state, southwest India. In the east, the Wayanad Wildlife Sanctuary is a lush, forested region with areas of high altitude, home to animals including Asiatic elephants, tigers, leopards and egrets.",
      "image": "https://www.keralatourism.org/images/microsites/wayanad/major-places.jpg",
      "link" : "https://en.wikipedia.org/wiki/Wayanad_district"
    },


    {
      "id": 4,
      "title": "Calicut",
      "description": "Kozhikode is a coastal city in the south Indian state of Kerala. It was a significant spice trade center and is close to Kappad Beach, where Portuguese explorer Vasco da Gama landed in 1498.",
      "image": "https://www.keralatourism.org/images/destination/large/kozhikode_beach20150811065516_256_1.jpg",
      "link" : "https://en.wikipedia.org/wiki/Kozhikode"
    },


    {
      "id": 5,
      "title": "Malappuram",
      "description": "Malappuram, is one of the 14 districts in the Indian state of Kerala, with a coastline of 70 km. It is the most populous district of Kerala, which is home to around 13% of the total population of the state.",
      "image": "https://www.keralatourism.org/images/enchanting_kerala/large/thirunavaya_malappuram20230105140626_1260_1.jpg",
      "link" : "https://en.wikipedia.org/wiki/Malappuram"
    },


    {
      "id": 6,
      "title": "Palakkad",
      "description": "Palakkad, or Palghat, is a city in Kerala, a state in southwestern India. The 18th-century Palakkad Fort has sturdy battlements, a moat and a Hanuman temple on its grounds. North, on the Kalpathy River, the 15th-century Viswanatha Swamy Temple is the main venue of the famous Ratholsavam chariot festival.",
      "image": "https://i0.wp.com/www.maverickbird.com/wp-content/uploads/2016/07/IMG_37611.2.jpg?w=720",
      "link" : "https://en.wikipedia.org/wiki/Palakkad"
    },


    {
      "id": 7,
      "title": "Thrissur",
      "description": "Thrissur is a city in the south Indian state of Kerala. It's known for sacred sites and colorful festivals. In the center is Vadakkumnathan Temple, dedicated to Lord Shiva and adorned with murals.",
      "image": "https://images.hindustantimes.com/img/2022/05/10/550x309/thrissur_pooram_1652190197958_1652190207167.jpg",
      "link" : "https://en.wikipedia.org/wiki/Thrissur"
    },


    {
      "id": 8,
      "title": "Ernakulam",
      "description": "Ernakulam is one of the most developed districts of Kerala covering an area of 3068 sqkm and based in the heartland of the state. It is the commercial capital of the state yielding the highest revenue among all districts in Kerala. Having its headquarters based at Kakkanad, it has the biggest metropolitan region, Cochin in its geographical limitations. Formed on 1st April,1958, the district is one of the most visited place and records the highest number of tourist visit in the state.",
      "image": "https://im.hunt.in/cg/City-Guide/about-erna.jpg",
      "link" : "https://en.wikipedia.org/wiki/Ernakulam"
    },
  ];
  return (

    <Container>
      <Row>
        {
          districts.map((district,index)=>{
            return(
        
        <Col>
        <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={district.image} />
    <Card.Body>
      <Card.Title>{district.title}</Card.Title>
      <Card.Text>
      {district.description}
      </Card.Text>
      <Button><a style={{color:"black"}} href={district.link}>About</a></Button>
    </Card.Body>
    </Card>
    </Col>
            )
          }
          )
        }
        
      </Row>
    </Container>
    


    
  
  
  );
}


export default App;



