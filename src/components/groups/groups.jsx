import Container from "../constainer/constainer"
import { MainHeader } from "../main/mainheader";
import { GroupProducts } from "./groupProducts";
import { orders } from "../shared/app";

export const Groups = () => {

    return(
        <Container>
             <MainHeader newTitle={"Группы"}/>
             <GroupProducts newItems={orders} />
           
        </Container>
    )
}





