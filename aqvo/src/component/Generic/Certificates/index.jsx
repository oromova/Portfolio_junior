import React from 'react';
import { Certificate, CertificatesDiv, Container, Title, Wrapper } from './style';
import certificate1 from "../../../assets/certificate1.png";
import certificate2 from "../../../assets/certificate2.png";
import certificate3 from "../../../assets/certificate3.png";
import certificate4 from "../../../assets/certificate4.png";
import { useTranslation } from 'react-i18next';

export const GenericCertificates = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Wrapper>
        <Title>{t('Bizning Sertifikatlarimiz')}</Title>
        <CertificatesDiv>
          <Certificate src={certificate1}/>
          <Certificate src={certificate2}/>
          <Certificate src={certificate3}/>
          <Certificate src={certificate4}/>

        </CertificatesDiv>
      </Wrapper>
    </Container>
  );
};
