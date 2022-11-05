import styled from "styled-components";
import Head from "next/head";
import { faRecycle, faInfo } from "@fortawesome/free-solid-svg-icons";
import ProductCard from "../../components/generic-components/ProductCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {H1, StyledButton} from "../../components/generic-components/general-styled-components";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import {router} from "next/client";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 4%;
  width: 100%;
`;

const openModal = (id: string) => {
  confirmAlert({
    title: 'Are you sure?',
    message: `Confirm that you want to claim the product with id: ${id}?`,
    buttons: [
      {
        label: 'Yes',
        onClick: () => claimProduct(id)
      },
      {
        label: 'No'
      }
    ]
  });
};

const claimProduct = (id: string) => {
  console.log(`the product ${id} is claimed`)
}

export default function AvailableProducts() {
  return (
    <>
      <Head>
        <title>Finncycle</title>
      </Head>
      <Container>
        <H1>Second Life Wait List</H1>
        <ProductCard
          productName="Product Name"
          solidButton
          solidButtonIcon={<FontAwesomeIcon icon={faRecycle}/>}
          solidButtonOnClick={() => openModal("test")}
          solidButtonText="Claim"
          outlineButton
          outlineButtonIcon={<FontAwesomeIcon icon={faInfo}/>}
          outlineButtonOnClick={() => {
            router.push('/available-products/test');
          }}
        />
        <ProductCard
          productName="Product Name"
          solidButton
          solidButtonIcon={<FontAwesomeIcon icon={faRecycle}/>}
          solidButtonOnClick={() => openModal("test")}
          solidButtonText="Claim"
          outlineButton
          outlineButtonIcon={<FontAwesomeIcon icon={faInfo}/>}
          outlineButtonOnClick={() => {
            router.push('/available-products/test');
          }}
        />
        <ProductCard
          productName="Product Name"
          solidButton
          solidButtonIcon={<FontAwesomeIcon icon={faRecycle}/>}
          solidButtonOnClick={() => openModal("test")}
          solidButtonText="Claim"
          outlineButton
          outlineButtonIcon={<FontAwesomeIcon icon={faInfo}/>}
        />
        <ProductCard
          productName="Product Name"
          solidButton
          solidButtonIcon={<FontAwesomeIcon icon={faRecycle}/>}
          solidButtonOnClick={() => openModal("test")}
          solidButtonText="Claim"
          outlineButton
          outlineButtonIcon={<FontAwesomeIcon icon={faInfo}/>}
        />
        <ProductCard
          productName="Product Name"
          solidButton
          solidButtonIcon={<FontAwesomeIcon icon={faRecycle}/>}
          solidButtonText="Claim"
          outlineButton
          outlineButtonIcon={<FontAwesomeIcon icon={faInfo}/>}
        />
        <ProductCard
          productName="Product Name"
          solidButton
          solidButtonIcon={<FontAwesomeIcon icon={faRecycle}/>}
          solidButtonText="Claim"
          outlineButton
          outlineButtonIcon={<FontAwesomeIcon icon={faInfo}/>}
        />
        <ProductCard
          productName="Product Name"
          solidButton
          solidButtonIcon={<FontAwesomeIcon icon={faRecycle}/>}
          solidButtonText="Claim"
          outlineButton
          outlineButtonIcon={<FontAwesomeIcon icon={faInfo}/>}
        />
        <ProductCard
          productName="Product Name"
          solidButton
          solidButtonIcon={<FontAwesomeIcon icon={faRecycle}/>}
          solidButtonText="Claim"
          outlineButton
          outlineButtonIcon={<FontAwesomeIcon icon={faInfo}/>}
        />
        <ProductCard
          productName="Product Name"
          solidButton
          solidButtonIcon={<FontAwesomeIcon icon={faRecycle}/>}
          solidButtonText="Claim"
          outlineButton
          outlineButtonIcon={<FontAwesomeIcon icon={faInfo}/>}
        />
        <ProductCard
          productName="Product Name"
          solidButton
          solidButtonIcon={<FontAwesomeIcon icon={faRecycle}/>}
          solidButtonText="Claim"
          outlineButton
          outlineButtonIcon={<FontAwesomeIcon icon={faInfo}/>}
        />
      </Container>
    </>
  )
}
