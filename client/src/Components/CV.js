import React from "react";

import { Document, Page } from 'react-pdf';

import naderCv from '../pdf/NaderCV.pdf';

const Cv = ()=> {
  return (
    <Document file={naderCv}>
      <Page pageNumber={1} />
    </Document>
  );
}

export default Cv;