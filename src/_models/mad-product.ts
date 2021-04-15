export interface MadProduct {
  id: number;
  codProduct: string;
  codForestGuide: string;
  productName: string;
  sawmillName: string;
  dateOfElaboration: string;
  codPlate: string;
  elaborationTime: number;
  woodType: string;
  photo: any,
  primaryTrans: {
      idPri: number;
      codTransPri: string;
      codMachineryOne: string;
      percentageOne: string;
      codMachineryTwo: string;
      percentageTwo: string;
      dateElaborationP: string;
      timeElaborationP: number;
  },
  secondaryTrans: {
      idSec: number;
      codTransSec: string;
      codMachinaryOne: string;
      percentageOne: string;
      codMachinaryTwo: string;
      percentageTwo: string;
      dateElaborations: string;
      timeElaborations: number;
  }
}
