import Container from "@mui/material/Container";
import data from "../../Json/MovieJson/MovieJson.json";
import characters from "../../Json/MovieJson/CharacterJson.json";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";


function HomePage() {
  return (
    <>
      <Container maxWidth="xl" >
      
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            border: '1px solid red'
            
          }}
        >
          <a href="" style={{color:'white',textDecoration:'none',border: '1px solid red',width:"137vh"}}> <h1>Top 10 on IMDb this week</h1></a>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {data.map((item) => (
              <Link to={"/movie/" + item.name}>
                <Box
                  sx={{
                    width: "10vw",
                    height: "25vw",
                    marginRight: 3,
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "#262626",
                  }}
                >
                  <img
                    style={{ width: "100%", height: "60%", objectFit: "cover" }}
                    src={item.img}
                  />
                </Box>
              </Link>
            ))}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <a href="" style={{color:'white',textDecoration:'none',width:"137vh"}}> <h1>Born today</h1></a>
          <h4 style={{color:'white',textDecoration:'none',width:"137vh",marginTop:-18}}>People born on January</h4>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {characters.map((character) => (
              <Link to={"/character/" + character.name} style={{textDecoration:'none',color:'white'}}>
                <Box
                  sx={{
                    width: "10vw",
                    height: "17vw",
                    marginRight: 3,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent:"center",
                    alignItems:"center",
                    
                    // backgroundColor: "#262626",
                  }}
                >
                  <img
                    style={{ width: "100%", height: "60%", objectFit: "cover" ,borderRadius:100}}
                    src={character.image}
                  />
                  <h4>{character.name}</h4>
                  <h4 style={{marginTop:-20}}>{character.age}</h4>
                </Box>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}
export default HomePage;
