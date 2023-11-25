import Container from "../constainer/constainer"
// import FetchApi from "../API/FetchApi";
import { MainHeader } from "../main/mainheader";
import { GroupProducts } from "./groupProducts";
import { orders } from "../shared/app";

export const Groups = () => {

    return(
        <Container>
             <MainHeader newTitle={"Группы"}/>
             <GroupProducts newItems={orders} />
           
  {/* <FetchApi/> */}
        </Container>
    )
}





